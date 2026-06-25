import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import multer from 'multer';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { generateProposal } from './src/utils/aiGenerator.js';

dotenv.config();

const execPromise = promisify(exec);
const app = express();
app.use(cors());
app.use(express.json());
app.use('/lead-magnets', express.static('/home/team/shared/lead-magnets'));
app.use('/uploads', express.static('/home/team/shared/bidforge-app/uploads'));

const PORT = process.env.PORT || 5000;

// Helper to run team-db commands
const runQuery = async (query) => {
  const { stdout } = await execPromise(`team-db "${query.replace(/"/g, '\\"')}"`);
  return JSON.parse(stdout);
};

// Helper for audit logging
const logAudit = async (orderId, oldStatus, newStatus, changedBy = 'system') => {
  const id = uuidv4();
  const sql = `INSERT INTO payment_audit (id, order_id, old_status, new_status, changed_by) VALUES ('${id}', '${orderId}', '${oldStatus}', '${newStatus}', '${changedBy}')`;
  await runQuery(sql);
};

// Helper for reference generation
const generateReference = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'BF-';
  for (let i = 0; i < 4; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
};

// Helper to log notifications
const logNotification = async (leadId, type, message) => {
  console.log(`[NOTIFICATION] ${type}: ${message}`);
  // In a real app, this would send an email or push notification
};

app.get('/api/leads', async (req, res) => {
  try {
    const leads = await runQuery('SELECT * FROM leads ORDER BY created_at DESC');
    res.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/leads', async (req, res) => {
  const { name, email, industry, plan_type, proposal_data, source, bbbee_level, sector } = req.body;
  const id = crypto.randomUUID();
  
  // Potential revenue mapping (base values)
  const revenueMap = {
    'Single Proposal Pack': 750,
    'Winning Bid Package': 3500,
    'Tender Accelerator': 5000,
    'Bid Desk': 15000
  };
  
  const revenue = revenueMap[plan_type] || 0;

  try {
    const sql = `INSERT INTO leads (id, name, email, industry, proposal_data, source, plan_type, status, revenue, bbbee_level, sector) VALUES ('${id}', '${name}', '${email}', '${industry}', '${JSON.stringify(proposal_data)}', '${source || 'landing_page'}', '${plan_type || 'not_selected'}', 'pending', ${revenue}, '${bbbee_level || ''}', '${sector || ''}')`;
    await runQuery(sql);
    await logNotification(id, 'welcome_email', `Hi ${name}, thank you for choosing the ${plan_type} plan. We are preparing your proposal.`);
    
    // Internal Alerts to Lead & Marketer
    try {
      const message = `NEW LEAD: ${name} (${email}) has just signed up for the ${plan_type} plan.`;
      const leadQuery = `INSERT INTO inbox (id, from_agent, to_agent, body) VALUES ('${uuidv4()}', 'system', 'agent-lead', '${message.replace(/'/g, "''")}')`;
      const marketerQuery = `INSERT INTO inbox (id, from_agent, to_agent, body) VALUES ('${uuidv4()}', 'system', 'agent-marketer', '${message.replace(/'/g, "''")}')`;
      await execPromise(`team-db "${leadQuery}"`);
      await execPromise(`team-db "${marketerQuery}"`);
    } catch (e) {
      console.error('Failed to send team alerts via team-db:', e.message);
    }

    res.status(201).json({ id, message: 'Lead created' });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/leads/:id/generate', async (req, res) => {
  const { id } = req.params;
  try {
    const leads = await runQuery(`SELECT * FROM leads WHERE id = '${id}'`);
    if (!leads || leads.length === 0) return res.status(404).json({ error: 'Lead not found' });
    const lead = leads[0];
    
    // Map database fields to what generateProposal expects
    const proposalInput = {
      ...lead,
      companyName: lead.name,
      // Provide defaults for other expected fields
      budget: lead.revenue ? `R${lead.revenue.toLocaleString()}` : 'To be confirmed',
      services: lead.industry === 'logistics' ? 'Transport & Distribution' : 'Professional Services'
    };
    
    const proposal = generateProposal(proposalInput, lead.plan_type);
    
    // Update lead with proposal data and status
    const sql = `UPDATE leads SET proposal_data = '${proposal.replace(/'/g, "''")}', status = 'completed' WHERE id = '${id}'`;
    await runQuery(sql);
    await logNotification(id, 'proposal_ready', `Your tender proposal for ${lead.name} is now ready for download.`);
    res.json({ message: 'Proposal generated successfully', proposal });
  } catch (error) {
    console.error('Error generating proposal:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/lead-magnets/download', async (req, res) => {
  const { email, industry, resourceName } = req.body;
  const id = crypto.randomUUID();
  try {
    // We log it as a lead with status 'engaged'
    const sql = `INSERT INTO leads (id, name, email, industry, status, source, plan_type) VALUES ('${id}', 'Lead Magnet Download', '${email}', '${industry}', 'engaged', 'lead_magnet', '${resourceName}')`;
    await runQuery(sql);
    await logNotification(id, 'lead_magnet_email', `Thank you for downloading the ${resourceName}. Check your email for the attachment.`);
    // Internal Alert to Marketer
    try {
      const message = `LEAD ENGAGED: ${email} has just downloaded the ${resourceName} checklist (${industry}).`;
      const query = `INSERT INTO inbox (id, from_agent, to_agent, body) VALUES ('${uuidv4()}', 'system', 'agent-marketer', '${message.replace(/'/g, "''")}')`;
      await execPromise(`team-db "${query}"`);
    } catch (e) {
      console.error('Failed to send marketer alert via team-db:', e.message);
    }
    res.json({ message: 'Success' });
  } catch (error) {
    console.error('Error logging lead magnet download:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/lead-magnets/download-file', (req, res) => {
  const { file, category } = req.query;
  let filePath;
  if (category === 'b-bbee') {
    filePath = `/home/team/shared/lead-magnets/b-bbee/${file}`;
  } else {
    filePath = `/home/team/shared/lead-magnets/tender-checklists/${file}`;
  }
  res.download(filePath);
});

app.get('/api/leads/:id/download', async (req, res) => {
  const { id } = req.params;
  try {
    const leads = await runQuery(`SELECT * FROM leads WHERE id = '${id}'`);
    if (!leads || leads.length === 0) return res.status(404).json({ error: 'Lead not found' });
    const lead = leads[0];
    if (!lead.proposal_data) return res.status(400).json({ error: 'Proposal not generated yet' });
    
    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Content-Disposition', `attachment; filename=\"Proposal_${lead.name.replace(/\\s+/g, '_')}.md\"`);
    res.send(lead.proposal_data);
  } catch (error) {
    console.error('Error downloading proposal:', error);
    res.status(500).json({ error: error.message });
  }
});

// Multer config for PoP uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/home/team/shared/bidforge-app/uploads/pop');
  },
  filename: (req, file, cb) => {
    const orderId = req.params.id;
    cb(null, `pop_${orderId}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

// EFT Routes
app.post('/api/orders', async (req, res) => {
  const { lead_id, plan_type, amount } = req.body;
  const id = uuidv4();
  const reference = generateReference();
  try {
    const sql = `INSERT INTO orders (id, lead_id, plan_type, amount, reference, status) VALUES ('${id}', '${lead_id}', '${plan_type}', ${amount}, '${reference}', 'pending')`;
    await runQuery(sql);
    
    // Initial Audit
    await logAudit(id, 'none', 'pending');

    res.status(201).json({ 
      id, 
      bank_details: {
        bank: 'Standard Bank',
        account_name: 'Logistiqs AI',
        account_number: '10243855972',
        branch_code: '051001',
        reference: reference
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/orders/:id/upload-pop', upload.single('pop'), async (req, res) => {
  const { id } = req.params;
  const pop_path = req.file.path;
  try {
    const orders = await runQuery(`SELECT status FROM orders WHERE id = '${id}'`);
    const oldStatus = orders.length > 0 ? orders[0].status : 'unknown';

    const sql = `UPDATE orders SET pop_path = '${pop_path}', status = 'paid' WHERE id = '${id}'`;
    await runQuery(sql);
    
    // Audit Status Change
    await logAudit(id, oldStatus, 'paid', 'user');

    // Notify Marketer
    const message = `PAYMENT RECEIVED: Order ${id} (Ref: ${id.substring(0,8)}) PoP uploaded. Please verify.`;
    const query = `INSERT INTO inbox (id, from_agent, to_agent, body) VALUES ('${uuidv4()}', 'system', 'agent-marketer', '${message}')`;
    await execPromise(`team-db "${query}"`);
    
    res.json({ message: 'Proof of payment uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/orders/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await runQuery(`SELECT * FROM orders WHERE id = '${id}'`);
    if (orders.length === 0) return res.status(404).json({ error: 'Order not found' });
    res.json(orders[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/admin/orders', async (req, res) => {
  try {
    const orders = await runQuery('SELECT orders.*, leads.name as company, leads.email FROM orders JOIN leads ON orders.lead_id = leads.id ORDER BY orders.created_at DESC');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch('/api/admin/orders/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status, changed_by } = req.body;
  try {
    const orders = await runQuery(`SELECT status FROM orders WHERE id = '${id}'`);
    const oldStatus = orders.length > 0 ? orders[0].status : 'unknown';

    const sql = `UPDATE orders SET status = '${status}' WHERE id = '${id}'`;
    await runQuery(sql);

    // Audit Status Change
    await logAudit(id, oldStatus, status, changed_by || 'admin');

    res.json({ message: `Order status updated to ${status}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/alerts', async (req, res) => {
  const { type, message } = req.body;
  try {
    const leadQuery = `INSERT INTO inbox (id, from_agent, to_agent, body) VALUES ('${uuidv4()}', 'system', 'agent-lead', '${message.replace(/'/g, "''")}')`;
    const marketerQuery = `INSERT INTO inbox (id, from_agent, to_agent, body) VALUES ('${uuidv4()}', 'system', 'agent-marketer', '${message.replace(/'/g, "''")}')`;
    await execPromise(`team-db "${leadQuery}"`);
    await execPromise(`team-db "${marketerQuery}"`);
    res.json({ message: 'Alert sent' });
  } catch (error) {
    console.error('Error sending alert:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
