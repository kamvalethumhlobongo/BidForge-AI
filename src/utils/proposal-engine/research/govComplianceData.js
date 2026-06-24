/**
 * BidForge AI — Government Tender Compliance Data Module
 * 
 * Structured data extracted from src/research/governmentTenderCompliance.md
 * for programmatic use by the AI Generator.
 */

const govCompliance = {
  version: '1.0.0',

  // === TENDER TYPES ===
  tenderTypes: [
    { acronym: 'RFT', name: 'Request for Tender', description: 'Formal procurement for goods/services', threshold: '$50K+' },
    { acronym: 'RFP', name: 'Request for Proposal', description: 'Solution-based, evaluative criteria', threshold: '$100K+' },
    { acronym: 'RFQ', name: 'Request for Quotation', description: 'Low-value procurement', threshold: '<$50K' },
    { acronym: 'EOI', name: 'Expression of Interest', description: 'Pre-qualification stage', threshold: 'N/A' },
  ],

  // === EVALUATION CRITERIA (Typical Weights) ===
  evaluationCriteria: {
    capability_experience: { min: 30, max: 40, description: 'Case studies, CVs, references' },
    methodology_approach: { min: 20, max: 30, description: 'Work plan, risk management' },
    quality_compliance: { min: 10, max: 15, description: 'Certifications, audits' },
    safety_whs: { min: 10, max: 15, description: 'WHS system, statistics' },
    sustainability_esg: { min: 5, max: 10, description: 'Green credentials, social value' },
    price: { min: 20, max: 30, description: 'Pricing schedule' },
  },

  // === STANDARD DOCUMENT STRUCTURE ===
  standardStructure: [
    { section: 'Cover Page', pages: 1, required: true },
    { section: 'Executive Summary', pages: '2-3', required: true },
    { section: 'Company Capability', pages: '5-10', required: true },
    { section: 'Technical Approach / Methodology', pages: '10-20', required: true },
    { section: 'Key Personnel', pages: '3-5', required: true },
    { section: 'Past Performance / Case Studies', pages: '5-10', required: true },
    { section: 'Pricing', pages: 'As required', required: true },
    { section: 'Compliance Schedule', pages: 'As required', required: true },
    { section: 'Appendices', pages: 'As required', required: false },
  ],

  // === MANDATORY DOCUMENTATION CHECKLIST ===
  mandatoryDocumentation: [
    'Signed tender form/declaration',
    'Certificate of Insurance (Public Liability: $20M minimum)',
    'Workers\' Compensation certificate',
    'WHS Policy & Safety Management Plan',
    'Quality Assurance certification (ISO 9001 or equivalent)',
    'Environmental Management Plan',
    'Equal Opportunity / Diversity Policy',
    'Modern Slavery Statement',
    'Privacy / Data Protection compliance',
    'Conflict of Interest declaration',
    'Financial statements (last 2-3 years)',
    'Relevant licences (Contractor, trade-specific)',
  ],

  // === COMMON DISQUALIFIERS ===
  commonDisqualifiers: [
    'Documents not submitted by deadline',
    'Missing mandatory declarations',
    'Inadequate insurance levels',
    'Insufficient financial capacity',
    'Unlicensed/unregistered operator',
    'Unresolved conflict of interest',
    'Failure to address ALL scope items',
    'Non-compliant pricing format',
  ],

  // === SCORING METHODOLOGY ===
  scoringScale: [
    { score: 5, rating: 'Excellent', description: 'Exceeds requirements, significant added value' },
    { score: 4, rating: 'Good', description: 'Fully meets, some added value' },
    { score: 3, rating: 'Satisfactory', description: 'Meets all requirements' },
    { score: 2, rating: 'Marginal', description: 'Partially meets, gaps exist' },
    { score: 1, rating: 'Poor', description: 'Does not meet' },
  ],

  // === RECOMMENDED RESPONSE STRATEGIES ===
  responseStrategies: [
    'Follow the response structure exactly — evaluators work from a checklist',
    'Use the compliance matrix — clearly respond "Compliant"',
    'Quantify everything — use metrics and specific outcomes',
    'Mirror the evaluation criteria explicitly in your response',
    'Make the executive summary compelling — it gets the most readership',
    'Provide proof, not promises — certificates, stats, case studies',
    'Tailor to the specific contract — generic responses score poorly',
    'Address risk proactively with clear mitigation strategies',
    'Format professionally with headers, TOC, page numbers, consistent fonts',
    'Maintain probity — no contact with evaluators outside the process',
  ],

  // === INDUSTRY-SPECIFIC COMPLIANCE REFERENCES ===
  industryCompliance: {
    logistics: {
      regulations: ['HVNL', 'Chain of Responsibility (CoR)', 'Fatigue Management'],
      accreditations: ['NHVAS (Mass)', 'NHVAS (Maintenance)', 'NHVAS (Fatigue)'],
      licences: ['Dangerous Goods licence'],
      standards: ['ISO 9001:2015', 'ISO 45001:2018'],
    },
    construction: {
      regulations: ['BCA', 'NCC', 'OH&S Act', 'Security of Payment Act'],
      accreditations: ['Green Star', 'NABERS'],
      licences: ['State builder\'s licence (QBCC, NSW Fair Trading, VBA)'],
      standards: ['ISO 9001:2015', 'ISO 45001:2018', 'ISO 14001:2015'],
    },
    security: {
      regulations: ['Security Providers Act (state-based)', 'Privacy Act 1988', 'Surveillance Devices Act'],
      accreditations: ['ASIAL Accreditation', 'AGSVA Clearance'],
      licences: ['Security Provider Licence', 'Individual officer licences (1A, 1B, 1C, 2A)'],
      standards: ['ISO 9001:2015', 'ISO 45001:2018', 'PSPF'],
    },
    cleaning: {
      regulations: ['WHS Act', 'Chemical handling regulations', 'Infection control standards'],
      accreditations: ['Green Cleaning certification', 'ISSA', 'BSCAA'],
      licences: ['Working with Children Check', 'NDIS Worker Screening'],
      standards: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
    },
  },

  // === KEY LEGISLATION & STANDARDS ===
  keyStandards: [
    { code: 'AS 9001:2015', name: 'Quality Management Systems' },
    { code: 'ISO 45001:2018', name: 'WHS Management' },
    { code: 'AS/NZS 4801:2001', name: 'WHS Management (superseded by ISO 45001)' },
    { code: 'ISO 14001:2015', name: 'Environmental Management' },
    { code: 'AS 3806:2006', name: 'Compliance Programs' },
    { code: 'AS 8001:2008', name: 'Fraud and Corruption Control' },
  ],
};

module.exports = govCompliance;
