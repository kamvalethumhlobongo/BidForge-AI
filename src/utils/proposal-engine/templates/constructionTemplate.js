/**
 * BidForge AI — Construction Services Proposal Template
 * 
 * Industry-Specific Template for Construction, Building & Civil Works
 * Compliant with Australian Government RFT/RFP & Building Standards
 */

const constructionTemplate = {
  id: 'construction',
  name: 'Construction & Building Services',
  description: 'Commercial construction, civil works, fit-outs, maintenance, and project management',
  version: '1.0.0',

  // === SECTION STRUCTURE ===
  sections: [
    {
      id: 'cover_page',
      title: 'Cover Page & Tender Information',
      required: true,
      order: 1,
      promptTemplate: `You are a professional bid writer for a construction company.
    
Generate a professional cover page:

CONSTRUCTION TENDER RESPONSE DOCUMENT

Tender Reference: {{tenderReference}}
Tender Title: {{tenderTitle}}
Project Location: {{projectLocation}}
Date: {{currentDate}}

Prepared For: {{clientName}}
Submitted By: {{companyName}}
{{companyAddress}}
{{companyAbn}} | {{companyAcn}}
Licence No: {{contractorLicence}}

Contact Person: {{contactName}}
Position: {{contactPosition}}
Phone: {{contactPhone}}
Email: {{contactEmail}}

Authorised Signatory: {{authorisedSignatory}}

"BidForge AI — Built on Precision" footer.`
    },

    {
      id: 'executive_summary',
      title: 'Executive Summary',
      required: true,
      order: 2,
      promptTemplate: `You are a senior bid writer for a construction company. Write a compelling executive summary.

CONTEXT:
- Company: {{companyName}} — {{companyDescription}}
- Tender: {{tenderTitle}} (Ref: {{tenderReference}})
- Project: {{scopeSummary}} at {{projectLocation}}
- Contract value: {{estimatedValue}}
- Timeline: {{projectTimeline}}
- Differentiators: {{differentiators}}

EXECUTIVE SUMMARY REQUIREMENTS:
1. Clear understanding of {{clientName}}s project requirements and objectives
2. Overview of the proposed construction approach and methodology
3. Key team qualifications and project management approach
4. Safety record and commitment (LTIFR, safety culture)
5. Quality assurance approach
6. Timeline and milestone commitments
7. Innovation and value-engineering proposals
8. Community engagement and stakeholder management approach
9. Environmental and sustainability commitments

TONE: Confident, professional, solution-oriented. Use construction industry terminology. Demonstrate experience with similar projects.`
    },

    {
      id: 'company_capability',
      title: 'Company Capability & Experience',
      required: true,
      order: 3,
      promptTemplate: `Write the "Company Capability" section for a construction tender response.

COMPANY DETAILS:
- Name: {{companyName}}
- Years in operation: {{yearsInOperation}}
- Projects completed: {{projectsCompleted}}
- Annual revenue: {{annualRevenue}}
- Employee count: {{employeeCount}}
- Key certifications: {{certifications}}
- Licence type and class: {{licenceDetails}}
- Specialisations: {{specialisations}}
- Project value range: {{projectValueRange}}

SUBSECTIONS TO WRITE:

## 3.1 Company Overview
Background, growth, core business, track record in construction sector.

## 3.2 Licences and Registrations
Builder licence (QBCC, NSW Fair Trading, etc.), class, scope, expiry. 
Include: Contractor licence No., Supervisor/Build nominee licences, relevant trade licences.

## 3.3 Accreditations and Certifications
- ISO 9001:2015 Quality Management
- ISO 45001:2018 (or AS/NZS 4801) WHS Management
- ISO 14001:2015 Environmental Management
- Other: Green Star, NABERS, BCA compliance

## 3.4 Financial Capacity
Turnover history, bonding capacity, project bank account capability, letter of financial viability.

## 3.5 Insurance
- Construction / Contract Works Insurance
- Public Liability ($20M)
- Professional Indemnity ($5M+)
- Workers Compensation

## 3.6 Safety Record
LTIFR (Lost Time Injury Frequency Rate), TRIFR (Total Recordable Injury Frequency Rate), safety awards, WHS system overview, SWMS process, site-specific safety plans.

## 3.7 Environmental and Sustainability
Environmental management plans, waste minimisation, carbon reduction, Green Star / NABERS ratings, sustainable procurement.

FORMAT: Data-driven, specific, professional. Every claim backed by evidence.`
    },

    {
      id: 'technical_approach',
      title: 'Technical Approach & Construction Methodology',
      required: true,
      order: 4,
      promptTemplate: `Write the "Technical Approach" section — the most heavily weighted evaluation criterion.

TENDER SCOPE:
- Project: {{scopeSummary}}
- Location: {{projectLocation}}
- Timeline: {{projectTimeline}}
- Key requirements: {{specialRequirements}}

SUBSECTIONS:

## 4.1 Understanding of Project Requirements
Demonstrate deep understanding of the project scope, challenges, site conditions, stakeholder needs.

## 4.2 Construction Methodology
Detailed description of construction approach:
- Site establishment and mobilisation
- Demolition / earthworks (if applicable)
- Structural methodology
- Services installation approach
- Fit-out and finishes methodology
- Commissioning and handover process
- Defects liability period management

## 4.3 Project Timeline and Milestones
- Master program (Gantt chart description)
- Critical path identification
- Key milestones and deliverables
- Acceleration strategies if needed
- Weather contingency

## 4.4 Resource Management
- Plant and equipment allocation
- Material procurement and supply chain
- Labour resourcing (direct vs subcontract)
- Subcontractor management and prequalification

## 4.5 Quality Management
- Inspection and Test Plans (ITPs)
- Hold points and witness points
- Material testing regime
- Non-conformance reporting
- Defect prevention strategy

## 4.6 Risk Management
- Project risk register
- Key risks: site conditions, weather, supply chain, labour
- Mitigation strategies for each
- Business continuity plan

## 4.7 Value Engineering
- Cost-saving innovations proposed
- Alternative materials / methods
- Efficiency improvements
- Lifecycle cost benefits

## 4.8 Stakeholder and Community Management
- Community engagement plan
- Noise / dust / vibration management
- Traffic management
- Communication protocols

## 4.9 Handover and Post-Completion
- Commissioning process
- Documentation and as-builts
- Training and user guides
- Defects management system

FORMAT: Exceptionally detailed. This section wins bids.`
    },

    {
      id: 'key_personnel',
      title: 'Key Personnel & Project Organisation',
      required: true,
      order: 5,
      promptTemplate: `Write the "Key Personnel" section for a construction tender.

PROJECT ROLES:
- Project Director: {{projectDirector}}
- Project Manager: {{projectManager}}
- Site Supervisor / Foreman: {{siteSupervisor}}
- Safety Manager: {{safetyManager}}
- Other key staff: {{keyStaff}}

INCLUDE:
1. Project organogram showing all reporting lines
2. Role-specific profiles for each nominated person:
   - Qualifications and certifications
   - Years of experience
   - Similar project experience
   - Key achievements
3. Nominated supervisor / build nominee details (where required by law)
4. Subcontractor management structure
5. Training and development commitment
6. Succession plan for key roles

FORMAT: Professional with clear formatting. Where names not provided, create realistic placeholder profiles.`
    },

    {
      id: 'past_performance',
      title: 'Past Performance & Case Studies',
      required: true,
      order: 6,
      promptTemplate: `Write the "Past Performance" section for a construction tender.

CASE STUDIES PROVIDED:
{{caseStudies}}

For each case study, write 1-2 pages covering:

CASE STUDY FORMAT:
- Project Name and Location
- Client / Principal
- Contract Value and Duration
- Scope of Works
- Key Challenges
- Approach and Solutions
- Quantified Outcomes:
  * Completed on time? (yes/no + variance)
  * Completed on budget? (yes/no + variance)
  * Safety record (LTIFR / TRIFR)
  * Quality outcomes
  * Client satisfaction rating
- Photographs / renders (described)
- Client testimonial (if available)

MINIMUM 3 CASE STUDIES. Include relevant government / enterprise projects similar to this tender.

Also include:
- Lessons learned register
- Continuous improvement initiatives
- Client reference table with contact details`
    },

    {
      id: 'whs_compliance',
      title: 'WHS & Compliance Management',
      required: true,
      order: 7,
      promptTemplate: `Write the "WHS and Compliance" section for a construction tender.

WHS REQUIREMENTS:
- Safety system: {{safetySystem}}
- LTIFR: {{ltifr}}
- Safety awards: {{safetyAwards}}

SUBSECTIONS:

## 7.1 WHS Management System
Describe the certified safety management system. Reference ISO 45001 or equivalent.

## 7.2 Site-Specific Safety Plans
Process for developing project-specific WHS plans prior to commencement.

## 7.3 SWMS and High-Risk Activities
Process for Safe Work Method Statements for high-risk construction activities.

## 7.4 Hazard Identification and Risk Management
Risk assessment methodology, hierarchy of controls, site inspections.

## 7.5 Incident Management
Reporting, investigation, corrective actions, return-to-work.

## 7.6 Consultation and Communication
Toolbox talks, safety committees, worker consultation.

## 7.7 Subcontractor Management
Safety prequalification, induction, monitoring, performance reviews.

## 7.8 Emergency Management
Emergency plans, first aid, emergency drills.

## 7.9 Security of Payment Act Compliance
Understanding and compliance with SOPA requirements.

## 7.10 Project Bank Account Compliance
If required, process for managing project bank accounts.`
    },

    {
      id: 'pricing',
      title: 'Pricing & Commercial Offer',
      required: true,
      order: 8,
      promptTemplate: `Write the Pricing section for a construction tender.

PRICING CONTEXT:
- Project: {{scopeSummary}} at {{projectLocation}}
- Estimated value: {{estimatedValue}}
- Timeline: {{projectTimeline}}

PRICING STRUCTURE:

## 8.1 Lump Sum Price
Total fixed price: $[X]

## 8.2 Price Breakdown
- Preliminaries and Site Establishment: $X%
- Demolition / Earthworks: $X%
- Structural Works: $X%
- Services / Hydraulics / Electrical: $X%
- Fit-Out and Finishes: $X%
- External Works / Landscaping: $X%
- Design / Consultancy (if D&C): $X%
- Contingency: $X%
- Margin: $X%

## 8.3 Schedule of Rates (if applicable)
Provide unit rates for key items.

## 8.4 Provisional Sums and Prime Cost Items
List and explain.

## 8.5 Payment Schedule
Milestone payments: % completion triggers.

## 8.6 Rise and Fall / Price Escalation
Proposed mechanism.

## 8.7 Exclusions
Clearly state what is NOT included.

Note: "All prices exclusive of GST."`
    },

    {
      id: 'compliance_matrix',
      title: 'Compliance Schedule',
      required: true,
      order: 9,
      promptTemplate: `Create a compliance matrix for a government construction tender.

Columns: Clause | Requirement | Compliant (Y/N) | Reference Section | Comments

Standard items:
1. Tender form signed and witnessed
2. Builder licence (current, appropriate class)
3. Public Liability Insurance over $20M
4. Contract Works Insurance
5. Professional Indemnity Insurance
6. Workers Compensation certificate
7. ISO 9001 Quality Management
8. ISO 45001 WHS Management
9. ISO 14001 Environmental Management
10. WHS Management Plan provided
11. Environmental Management Plan provided
12. SWMS for high-risk activities
13. Project Bank Account compliance
14. Security of Payment Act compliance
15. Financial statements provided
16. Equal Opportunity / Diversity Policy
17. Modern Slavery Statement
18. Code of Conduct
19. Conflict of Interest declaration
20. Privacy compliance

Response for each: "Compliant" + reference.`
    },

    {
      id: 'appendices',
      title: 'Appendices',
      required: false,
      order: 10,
      promptTemplate: `List the appendices to be included:

APPENDIX A — Company Policies and Procedures
APPENDIX B — Certifications and Accreditation Certificates
APPENDIX C — Financial Statements (2-3 years)
APPENDIX D — Insurance Certificates
APPENDIX E — Project Programs (Master Schedule, Lookahead)
APPENDIX F — Site Safety Plan (Template)
APPENDIX G — Quality ITP Samples
APPENDIX H — Environmental Management Plan
APPENDIX I — Subcontractor Prequalification Records
APPENDIX J — Plant and Equipment Register
APPENDIX K — Client References and Testimonials`
    }
  ],

  // === INDUSTRY-SPECIFIC KEYWORDS ===
  keywords: [
    'Building Code of Australia (BCA)',
    'National Construction Code (NCC)',
    'Safe Work Method Statement (SWMS)',
    'Construction Induction (White Card)',
    'Inspection and Test Plan (ITP)',
    'Project Bank Account',
    'Security of Payment Act',
    'Design and Construct (D&C)',
    'Construct Only',
    'Design-Build-Finance-Maintain (DBFM)',
    'Public Private Partnership (PPP)',
    'Value Engineering',
    'Building Information Modelling (BIM)',
    'Green Star Rating',
    'NABERS Energy Rating',
    'Defects Liability Period (DLP)',
    'Practical Completion',
    'Handover and Commissioning',
    'Provisional Sum (PS)',
    'Prime Cost (PC) Item',
    'Rise and Fall Clause',
    'Liquidated Damages',
    'Principal Contractor',
    'Work Health and Safety Act',
    'Chain of Responsibility (Construction)',
    'Contract Administrator',
    'Superintendent',
    'Project Deed / Novation',
    'Early Contractor Involvement (ECI)'
  ],

  // === COMPLIANCE REQUIREMENTS ===
  complianceRequirements: [
    'State-based builder licence (appropriate class)',
    'ISO 9001:2015 Quality Management',
    'ISO 45001:2018 WHS Management (or AS/NZS 4801)',
    'ISO 14001:2015 Environmental Management',
    'Public Liability Insurance over $20M',
    'Professional Indemnity Insurance over appropriate level',
    'Contract Works Insurance',
    'Workers Compensation Insurance',
    'Project Bank Account capability',
    'Security of Payment Act compliance',
    'White Card (all site workers)',
    'SWMS for all high-risk activities',
    'Site Safety Plan for each project',
    'Construction Induction registry compliance'
  ]
};

module.exports = constructionTemplate;