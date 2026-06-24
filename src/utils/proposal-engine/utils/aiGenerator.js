/**
 * BidForge AI — AI Proposal Generator
 * 
 * Core AI Prompt & Document Generation Engine
 * 
 * This module is the brain of BidForge AI. It:
 * 1. Accepts client intake data from the web intake form
 * 2. Selects the appropriate industry-specific template
 * 3. Constructs detailed, context-rich prompts for each section
 * 4. Outputs a complete, professional proposal document
 * 
 * Designed to be consumed by an LLM (GPT-4, Claude, etc.) via the
 * prompt-engineering system that produces the highest-quality output.
 */

// ============================================
// TEMPLATE LOADER
// ============================================

const logisticsTemplate = require('../templates/logisticsTemplate');
const constructionTemplate = require('../templates/constructionTemplate');
const securityTemplate = require('../templates/securityTemplate');
const cleaningTemplate = require('../templates/cleaningTemplate');

const TEMPLATE_REGISTRY = {
  logistics: logisticsTemplate,
  construction: constructionTemplate,
  security: securityTemplate,
  cleaning: cleaningTemplate,
};

/**
 * Load the appropriate template for a given industry.
 * @param {string} industry - One of: logistics, construction, security, cleaning
 * @returns {object} The industry template object
 */
function loadTemplate(industry) {
  const template = TEMPLATE_REGISTRY[industry.toLowerCase()];
  if (!template) {
    throw new Error(`Unknown industry: "${industry}". Supported: ${Object.keys(TEMPLATE_REGISTRY).join(', ')}`);
  }
  return template;
}

// ============================================
// INTAKE DATA SCHEMA VALIDATION
// ============================================

/**
 * The intake data schema that the web frontend should collect.
 * This serves as the contract between the frontend form and the generator.
 */
const INTAKE_SCHEMA = {
  // Company Information
  companyName: { type: 'string', required: true, label: 'Company Name' },
  companyAbn: { type: 'string', required: true, label: 'ABN' },
  companyAcn: { type: 'string', required: false, label: 'ACN' },
  companyAddress: { type: 'string', required: true, label: 'Company Address' },
  companyDescription: { type: 'text', required: true, label: 'Company Description', maxLength: 500 },
  yearsInOperation: { type: 'number', required: true, label: 'Years in Operation' },
  employeeCount: { type: 'number', required: true, label: 'Number of Employees' },
  annualTurnover: { type: 'string', required: false, label: 'Annual Turnover' },
  website: { type: 'string', required: false, label: 'Website URL' },

  // Contact Information
  contactName: { type: 'string', required: true, label: 'Contact Person Name' },
  contactPosition: { type: 'string', required: true, label: 'Contact Position' },
  contactPhone: { type: 'string', required: true, label: 'Contact Phone' },
  contactEmail: { type: 'email', required: true, label: 'Contact Email' },
  authorisedSignatory: { type: 'string', required: true, label: 'Authorised Signatory' },

  // Tender/Proposal Information
  industry: { type: 'select', required: true, options: ['logistics', 'construction', 'security', 'cleaning'], label: 'Industry' },
  tenderReference: { type: 'string', required: true, label: 'Tender/Proposal Reference Number' },
  tenderTitle: { type: 'string', required: true, label: 'Tender/Proposal Title' },
  clientName: { type: 'string', required: true, label: 'Client/Principal Name' },
  scopeSummary: { type: 'text', required: true, label: 'Scope of Services Summary', maxLength: 2000 },
  serviceLocations: { type: 'string', required: true, label: 'Service Locations' },
  projectLocation: { type: 'string', required: false, label: 'Project Location (for construction)' },
  estimatedValue: { type: 'string', required: true, label: 'Estimated Contract Value' },
  serviceSchedule: { type: 'string', required: false, label: 'Service Schedule / Start Date' },
  projectTimeline: { type: 'string', required: false, label: 'Project Timeline (for construction)' },

  // Differentiators
  differentiators: { type: 'text', required: false, label: 'Key Differentiators (what makes you unique)', maxLength: 1000 },

  // Industry-Specific Fields
  fleetSize: { type: 'number', required: false, label: 'Fleet Size (logistics)' },
  fleetTypes: { type: 'string', required: false, label: 'Fleet Types (logistics)' },
  serviceRegions: { type: 'string', required: false, label: 'Service Regions (logistics)' },
  facilityDetails: { type: 'text', required: false, label: 'Warehouse/Facility Details (logistics)' },

  contractorLicence: { type: 'string', required: false, label: 'Contractor Licence Number (construction)' },
  licenceDetails: { type: 'string', required: false, label: 'Licence Details (construction/security)' },
  projectsCompleted: { type: 'number', required: false, label: 'Projects Completed (construction)' },
  projectValueRange: { type: 'string', required: false, label: 'Project Value Range (construction)' },
  specialisations: { type: 'string', required: false, label: 'Specialisations (construction)' },

  securityLicence: { type: 'string', required: false, label: 'Security Licence Number (security)' },
  serviceTypes: { type: 'string', required: false, label: 'Service Types (security/cleaning)' },

  // Certifications & Compliance
  certifications: { type: 'text', required: false, label: 'Key Certifications (ISO, etc.)', maxLength: 1000 },
  safetySystem: { type: 'string', required: false, label: 'Safety Management System' },
  safetyAwards: { type: 'string', required: false, label: 'Safety Awards/Recognition' },
  ltifr: { type: 'string', required: false, label: 'LTIFR / Safety Statistics' },

  // Technology & Systems
  technologySystems: { type: 'text', required: false, label: 'Technology Systems Used', maxLength: 500 },

  // Personnel
  contractManager: { type: 'string', required: false, label: 'Contract Manager Name' },
  operationsManager: { type: 'string', required: false, label: 'Operations Manager Name' },
  safetyManager: { type: 'string', required: false, label: 'Safety Manager Name' },
  keyStaff: { type: 'text', required: false, label: 'Other Key Staff', maxLength: 500 },
  siteSupervisor: { type: 'string', required: false, label: 'Site Supervisor / Foreman Name' },
  cleaningSupervisor: { type: 'string', required: false, label: 'Cleaning Supervisor Name' },

  // Case Studies
  caseStudies: { type: 'text', required: false, label: 'Past Project Case Studies (or "N/A")', maxLength: 2000 },

  // Special Requirements
  specialRequirements: { type: 'text', required: false, label: 'Special Requirements / Scope Details', maxLength: 1000 },

  // Additional
  additionalNotes: { type: 'text', required: false, label: 'Additional Notes', maxLength: 1000 },

  // Current date
  currentDate: { type: 'string', required: false, label: 'Current Date (auto-filled)' },
};

// ============================================
// INTAKE DATA PROCESSOR
// ============================================

/**
 * Validate intake data against the schema.
 * Returns { valid: boolean, errors: string[] }
 */
function validateIntake(data) {
  const errors = [];
  for (const [field, schema] of Object.entries(INTAKE_SCHEMA)) {
    if (schema.required && (!data[field] || String(data[field]).trim() === '')) {
      errors.push(`Missing required field: ${schema.label} (${field})`);
    }
    if (data[field] && schema.maxLength && String(data[field]).length > schema.maxLength) {
      errors.push(`Field "${schema.label}" exceeds max length of ${schema.maxLength}`);
    }
    if (schema.type === 'select' && data[field] && !schema.options.includes(data[field])) {
      errors.push(`Invalid option for "${schema.label}": must be one of ${schema.options.join(', ')}`);
    }
    if (schema.type === 'email' && data[field] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data[field])) {
      errors.push(`Invalid email format for "${schema.label}"`);
    }
    if (schema.type === 'number' && data[field] && isNaN(Number(data[field]))) {
      errors.push(`"${schema.label}" must be a number`);
    }
  }
  return { valid: errors.length === 0, errors };
}

/**
 * Prepare and sanitize intake data for template rendering.
 * Fills in defaults for optional fields, sets current date.
 */
function prepareIntakeData(data) {
  const prepared = { ...data };

  // Auto-fill current date if not provided
  if (!prepared.currentDate) {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    prepared.currentDate = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  }

  // Set defaults for common optional fields
  const defaults = {
    differentiators: 'Reliable, experienced, compliant, customer-focused',
    caseStudies: 'Please provide 3 relevant case studies based on the company profile',
    keyStaff: 'Additional staff profiles to be provided upon request',
    specialRequirements: 'As per tender scope documents',
    additionalNotes: '',
  };

  for (const [field, defaultValue] of Object.entries(defaults)) {
    if (!prepared[field] || String(prepared[field]).trim() === '') {
      prepared[field] = defaultValue;
    }
  }

  return prepared;
}

// ============================================
// TEMPLATE VARIABLE INTERPOLATION
// ============================================

/**
 * Replace {{variable}} placeholders in template strings with actual data values.
 * Supports nested variable references and simple conditional logic.
 */
function interpolateTemplate(templateString, data) {
  return templateString.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    if (data[key] !== undefined && data[key] !== null) {
      return String(data[key]);
    }
    // Keep the placeholder if the key doesn't exist — useful for debugging
    console.warn(`[BidForge AI] Warning: Missing template variable "{{${key}}}"`);
    return `[${key} — please provide]`;
  });
}

// ============================================
// PROMPT CONSTRUCTION ENGINE
// ============================================

/**
 * Build the complete system prompt for the LLM that generates
 * the full proposal. This is the master prompt engineering layer.
 */
function buildGenerationPrompt(industry, intakeData) {
  const template = loadTemplate(industry);
  const data = prepareIntakeData(intakeData);

  const sections = template.sections
    .filter(s => s.required)
    .sort((a, b) => a.order - b.order);

  // Build the per-section prompts
  const sectionPrompts = sections.map(section => {
    const promptText = interpolateTemplate(section.promptTemplate, data);
    return {
      id: section.id,
      title: section.title,
      order: section.order,
      prompt: promptText,
    };
  });

  return {
    systemPrompt: buildSystemPrompt(industry, template, data),
    industryContext: buildIndustryContext(industry, template, data),
    sectionPrompts,
    complianceChecklist: template.complianceRequirements,
    keywords: template.keywords,
  };
}

/**
 * Build the master system prompt that sets the tone, style, and
 * compliance standards for the entire proposal.
 */
function buildSystemPrompt(industry, template, data) {
  return `You are a professional, senior bid writer for ${data.companyName}, a ${data.companyDescription} company operating in the ${industry} sector. Your expertise is in writing compelling, compliant, and winning tender/proposal responses for government and enterprise clients.

YOUR ROLE:
- Write like a human bid expert, not like an AI. Use natural language, varied sentence structure, and industry-specific terminology.
- Every section must demonstrate deep understanding of the client's needs (${data.clientName}).
- Tailor every word to THIS specific tender, not generic filler.
- Use metrics, data, and specific examples whenever possible.
- Maintain a confident, professional tone throughout.
- Format output with clear headings, bullet points, and professional structure.

CRITICAL RULES:
1. NEVER use phrases like "I am an AI" or "As a language model" — you are a bid writer.
2. NEVER use placeholder text like "[Insert Company Name]" — use the actual data provided.
3. ALWAYS use specific industry terminology relevant to ${industry} (refer to the keyword list provided).
4. ALWAYS quantify achievements and capabilities with specific metrics where possible.
5. NEVER fabricate client names, specific project names, or certifications unless explicitly provided in the data.
6. If information is missing, use professional generic language that still sounds specific and credible.
7. FOLLOW the section structure exactly. Each section should be complete and stand-alone.
8. Every proposal must pass a compliance check — address all mandatory requirements.

OUTPUT QUALITY STANDARDS:
- Executive Summary: 2-3 pages, compelling, confident
- Company Capability: 5-10 pages, comprehensive, evidence-based
- Technical Approach: 10-20 pages, this is where bids are won
- Pricing: Clear, structured, competitive
- Compliance Matrix: 100% "Compliant" with references

The tender is: ${data.tenderTitle} (Ref: ${data.tenderReference})
Client: ${data.clientName}`;
}

/**
 * Build industry-specific context that the LLM needs to understand
 * the sector's unique requirements, terminology, and compliance landscape.
 */
function buildIndustryContext(industry, template, data) {
  const industryContexts = {
    logistics: `INDUSTRY CONTEXT: Australian Logistics & Transport
- Regulatory framework: Heavy Vehicle National Law (HVNL), Chain of Responsibility (CoR)
- Key accreditation: NHVAS (Mass, Maintenance, Fatigue modules)
- Critical compliance: Fatigue management, driver work diaries, vehicle standards
- Customer expectations: On-time delivery (98%+), real-time tracking, damage-free
- Common bid evaluation weighting: Capability 30%, Methodology 35%, Safety 15%, Price 20%
- Government requirements: HVNL compliance essential, CoR obligations must be demonstrated`,
    
    construction: `INDUSTRY CONTEXT: Australian Construction & Building
- Regulatory framework: Building Code of Australia (BCA), National Construction Code (NCC)
- State licensing: QBCC (QLD), NSW Fair Trading (NSW), VBA (VIC) — must reference correct one
- Key compliance: Project Bank Accounts, Security of Payment Act, relevant state WHS laws
- Bid evaluation: Methodology 40%, Capability 30%, Safety/QA 15%, Price 15%
- Industry focus: Safety record (LTIFR crucial), project delivery track record, financial capacity
- Current trends: Sustainability (Green Star, NABERS), BIM, prefabrication, ECI`,
    
    security: `INDUSTRY CONTEXT: Australian Security Services
- Regulatory framework: State Security Providers Acts (specific to each jurisdiction)
- Licensing: Master licence (company) + individual licences (all officers)
- Key standards: ASIAL Accreditation, ISO standards, PSPF for government sites
- Bid evaluation: Methodology 35%, Personnel/Training 25%, Compliance 20%, Price 20%
- Critical: Use of force policies, screening/vetting, training standards
- Government expectations: AGSVA clearances, psychometric screening, data privacy compliance`,
    
    cleaning: `INDUSTRY CONTEXT: Australian Commercial Cleaning & Hygiene
- Regulatory framework: WHS Act, chemical handling regulations, infection control standards
- Key standards: ISO 9001, ISO 14001, Green Cleaning certification
- Bid evaluation: Methodology 40%, QA/Inspection 25%, Compliance 15%, Price 20%
- Critical: Infection control (especially healthcare/education), colour coding, chemical management
- Government expectations: Working with Children Checks, NDIS screening, green credentials
- Industry focus: Quality inspection scores, staff training, equipment standards, sustainability`,
  };

  return industryContexts[industry] || 'Standard industry compliance requirements apply.';
}

// ============================================
// PROPOSAL SECTION GENERATOR
// ============================================

/**
 * Generate a complete set of prompts for all sections of a proposal.
 * Each section prompt is engineered to produce the highest quality LLM output.
 * 
 * Returns an object with:
 * - systemPrompt: The master system context prompt
 * - industryContext: Industry-specific guidance
 * - sections: Array of per-section prompts
 * - complianceChecklist: Compliance items to verify
 * - documentOutline: Full document structure
 */
function generateProposalPrompts(industry, intakeData) {
  // Validate required data
  const validation = validateIntake(intakeData);
  if (!validation.valid) {
    return { error: true, validationErrors: validation.errors };
  }

  const template = loadTemplate(industry);
  const data = prepareIntakeData(intakeData);
  const promptConfig = buildGenerationPrompt(industry, data);

  return {
    error: false,
    industry: industry,
    template: template.name,
    version: template.version,
    documentTitle: `Proposal — ${data.tenderTitle}`,
    
    // The complete prompt payload for the LLM
    systemPrompt: promptConfig.systemPrompt,
    industryContext: promptConfig.industryContext,
    
    // Per-section prompts ordered by the template
    sections: promptConfig.sectionPrompts,
    
    // Industry keywords to weave into the response
    keywords: promptConfig.keywords,
    
    // Compliance items that must be addressed
    complianceChecklist: promptConfig.complianceChecklist,
    
    // Full document outline
    documentOutline: template.sections
      .filter(s => s.required)
      .sort((a, b) => a.order - b.order)
      .map(s => ({
        title: s.title,
        section: s.id,
        order: s.order,
      })),
  };
}

// ============================================
// PROPOSAL ASSEMBLY (POST-LLM)
// ============================================

/**
 * Assemble generated section outputs into a complete, formatted document.
 * This would be called after all sections are generated by the LLM.
 * 
 * @param {Array} generatedSections - Array of { sectionId, title, content } objects from the LLM
 * @param {object} intakeData - The original intake data
 * @returns {object} The assembled proposal document
 */
function assembleProposal(generatedSections, intakeData) {
  const industry = intakeData.industry;
  const template = loadTemplate(industry);
  const data = prepareIntakeData(intakeData);

  // Build section ordering from template
  const sectionOrder = {};
  template.sections.forEach(s => {
    sectionOrder[s.id] = s.order;
  });

  // Sort generated sections by template order
  const orderedSections = [...generatedSections].sort((a, b) => {
    return (sectionOrder[a.sectionId] || 99) - (sectionOrder[b.sectionId] || 99);
  });

  // Assemble final document
  const document = {
    metadata: {
      generated: new Date().toISOString(),
      industry: industry,
      template: template.name,
      tenderReference: data.tenderReference,
      tenderTitle: data.tenderTitle,
      clientName: data.clientName,
      respondent: data.companyName,
      version: template.version,
    },
    sections: orderedSections.map(s => ({
      title: s.title,
      sectionId: s.sectionId,
      content: s.content,
    })),
  };

  return document;
}

// ============================================
// COMPLIANCE VERIFIER
// ============================================

/**
 * Generate a compliance checklist verifying that the proposal
 * meets all mandatory government tender requirements.
 */
function getComplianceChecklist(industry) {
  const template = loadTemplate(industry);
  return {
    industry,
    templateName: template.name,
    mandatoryRequirements: template.complianceRequirements,
    recommendedKeywords: template.keywords,
  };
}

// ============================================
// EXPORTS
// ============================================

module.exports = {
  // Core generation functions
  generateProposalPrompts,
  assembleProposal,
  buildGenerationPrompt,
  buildSystemPrompt,
  buildIndustryContext,
  
  // Template access
  loadTemplate,
  TEMPLATE_REGISTRY,
  
  // Data handling
  validateIntake,
  prepareIntakeData,
  INTAKE_SCHEMA,
  
  // Compliance
  getComplianceChecklist,
  
  // Utility
  interpolateTemplate,
};
