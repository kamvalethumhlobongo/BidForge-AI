/**
 * BidForge AI — Cleaning & Hygiene Services Proposal Template
 * 
 * Industry-Specific Template for Commercial Cleaning, Hygiene & Facility Services
 * Compliant with Australian Government & Industry Standards
 */

const cleaningTemplate = {
  id: 'cleaning',
  name: 'Cleaning & Hygiene Services',
  description: 'Commercial cleaning, hygiene services, waste management, and facility maintenance',
  version: '1.0.0',

  // === SECTION STRUCTURE ===
  sections: [
    {
      id: 'cover_page',
      title: 'Cover Page & Tender Information',
      required: true,
      order: 1,
      promptTemplate: `You are a professional bid writer for a cleaning and hygiene services company.

Generate a professional cover page:

CLEANING SERVICES TENDER RESPONSE

Tender Reference: {{tenderReference}}
Tender Title: {{tenderTitle}}
Date: {{currentDate}}

Prepared For: {{clientName}}
Submitted By: {{companyName}}
{{companyAddress}}
{{companyAbn}} | {{companyAcn}}

Contact Person: {{contactName}}
Position: {{contactPosition}}
Phone: {{contactPhone}}
Email: {{contactEmail}}

Authorised Signatory: {{authorisedSignatory}}

"BidForge AI — Pristine by Design" footer.`
    },

    {
      id: 'executive_summary',
      title: 'Executive Summary',
      required: true,
      order: 2,
      promptTemplate: `You are a senior bid writer for a cleaning and hygiene company. Write a compelling executive summary.

CONTEXT:
- Company: {{companyName}} — {{companyDescription}}
- Tender: {{tenderTitle}} (Ref: {{tenderReference}})
- Scope: {{scopeSummary}}
- Locations: {{serviceLocations}}
- Contract value: {{estimatedValue}}
- Differentiators: {{differentiators}}

EXECUTIVE SUMMARY:
1. Clear understanding of {{clientName}}s cleaning and hygiene requirements
2. Overview of proposed cleaning solution — methodology, team, technology
3. Key differentiators: infection control, green cleaning, training, QA
4. Experience with similar facilities (schools, hospitals, offices, etc.)
5. Commitment to quality, safety, and environmental sustainability
6. Value proposition — service quality balanced with cost efficiency

TONE: Professional, confident, detail-oriented. Demonstrate understanding of cleaning industry standards.`
    },

    {
      id: 'company_capability',
      title: 'Company Capability & Experience',
      required: true,
      order: 3,
      promptTemplate: `Write the "Company Capability" section for a cleaning tender.

COMPANY DETAILS:
- Name: {{companyName}}
- Years in operation: {{yearsInOperation}}
- Employee count: {{employeeCount}}
- Annual turnover: {{annualTurnover}}
- Key certifications: {{certifications}}
- Service types: {{serviceTypes}} (commercial, healthcare, industrial, etc.)
- Client sectors: {{clientSectors}}
- Technology / methods: {{technologySystems}}

SUBSECTIONS:

## 3.1 Company Overview
History, core business, service portfolio, client base. Emphasise relevant experience.

## 3.2 Licences and Registrations
- Cleaning business registration
- Relevant trade licences (if specialising in floor care, etc.)
- Working with Children Check (if servicing schools)
- NDIS Worker Screening (if servicing disability settings)
- Environmental protection licences

## 3.3 Certifications and Accreditations
- ISO 9001:2015 Quality Management
- ISO 14001:2015 Environmental Management
- ISO 45001:2018 WHS Management
- Green Cleaning certification (e.g. Green Seal, Ecostar)
- Infection Control certification
- Industry body membership (e.g. ISSA, BSCAA)

## 3.4 Financial Viability
Stable revenue, financial capacity, appropriate business structure.

## 3.5 Insurance
- Public Liability ($20M)
- Professional Indemnity
- Workers Compensation
- Equipment / contents insurance

## 3.6 Quality Assurance
- Cleaning quality inspection system
- Customer satisfaction measurement
- Compliance auditing
- Continuous improvement program

FORMAT: Data-driven, specific, professional.`
    },

    {
      id: 'technical_approach',
      title: 'Service Delivery Model & Methodology',
      required: true,
      order: 4,
      promptTemplate: `Write the "Service Delivery" section — the most heavily weighted section for cleaning tenders.

SCOPE:
- Services: {{scopeSummary}}
- Locations: {{serviceLocations}} (facility type: office, healthcare, school, industrial, etc.)
- Schedule: {{serviceSchedule}}
- Special requirements: {{specialRequirements}}

SUBSECTIONS:

## 4.1 Understanding of Cleaning Requirements
Deep understanding of the facility, usage patterns, high-traffic areas, specific cleaning needs.

## 4.2 Cleaning Methodology
For each area type, describe the specific methodology:
- Office areas: desk cleaning, waste removal, vacuuming, hard floor care
- Washrooms: cleaning, sanitising, restocking, deep cleaning schedule
- Kitchen / break rooms: cleaning protocol, dishwashing, appliance cleaning
- High-touch points: disinfection frequency and method
- Clinical / healthcare areas (if applicable): infection control protocols
- Industrial areas (if applicable): heavy cleaning, degreasing, waste handling

## 4.3 Cleaning Schedule and Frequencies
Detailed schedule showing:
- Daily tasks (cleaning frequency per area)
- Weekly tasks (deep cleaning rotation)
- Monthly tasks (periodic maintenance)
- Quarterly / annual tasks (stripping / sealing, carpet cleaning)
- Public holiday schedules

## 4.4 Infection Control and Hygiene Standards
- Disinfectant types and contact times
- Colour coding system (cloths / mops for different areas)
- Hand hygiene standards for staff
- Outbreak / high-alert cleaning protocols
- Pandemic response plan
- Infection control training for staff

## 4.5 Green Cleaning / Sustainability
- Environmentally preferred products (Green Seal, Ecostar)
- Microfibre technology
- Dilution control systems
- Waste minimisation and recycling
- Water conservation
- Energy-efficient equipment

## 4.6 Equipment and Technology
- Cleaning equipment types and specifications
- Equipment maintenance program
- Technology: scheduling software, quality inspection apps, client portal
- Chemical management system (MSDS, dilution, storage)

## 4.7 Quality Assurance and Inspection
- Inspection methodology (quantifiable scoring)
- Frequency of inspections
- Corrective action process
- Client walkthroughs and feedback
- Monthly QA reports

## 4.8 Performance KPIs
Specific measurable KPIs:
- Cleaning quality score: 90%+ (independently assessed)
- Client satisfaction: 4.5/5+
- Response to complaints: under 2 hours
- Staff attendance: 98%+
- Training compliance: 100%
- Chemical / consumable usage within budget
- Infection control audit pass rate: 100%

## 4.9 Waste Management
- General waste collection process
- Recycling program
- Clinical / regulated waste (if applicable)
- Bin management and presentation
- Reporting on waste diversion

## 4.10 Continuity and Contingency
- Staff backup / relief coverage
- Equipment breakdown protocol
- Supply chain for consumables
- Emergency cleaning response

FORMAT: Exceptionally detailed. Cleaning tenders are won on methodology and QA.`
    },

    {
      id: 'key_personnel',
      title: 'Key Personnel & Management Structure',
      required: true,
      order: 5,
      promptTemplate: `Write the "Key Personnel" section for a cleaning tender.

KEY ROLES:
- Account Manager / Contract Manager: {{contractManager}}
- Cleaning Supervisor: {{cleaningSupervisor}}
- Quality Assurance Officer: {{qaOfficer}}
- Area Manager: {{areaManager}}
- Key staff: {{keyStaff}}

INCLUDE:
1. Organisational chart
2. Role descriptions
3. Personnel profiles:
   - Cleaning industry qualifications
   - Experience with similar facilities
   - Management certifications
4. Supervisor-to-cleaner ratio
5. Staff training program:
   - Induction training
   - Chemical handling training
   - Infection control training
   - Equipment training
   - Client-specific induction
6. Staff recognition and retention strategy
7. Backup / succession for key roles

FORMAT: Professional. Highlight experience with similar client facilities.`
    },

    {
      id: 'past_performance',
      title: 'Past Performance & Case Studies',
      required: true,
      order: 6,
      promptTemplate: `Write the "Past Performance" section for a cleaning tender.

CASE STUDIES: {{caseStudies}}

For each case study (minimum 3), write 1-2 pages:

CASE STUDY FORMAT:
- Client and Facility Type (office, school, hospital, industrial)
- Contract Value and Duration
- Scope of Services
- Challenge / Specific Requirements
- Solution Delivered
- Quantified Outcomes:
  * Cleaning quality score (X%)
  * Client satisfaction rating
  * Contract retention (X years)
  * Staff retention (X%)
  * Complaint volume reduction
  * Infection control audit results
- Client testimonial (if available)

Also include:
- Client reference table
- Lessons learned register
- Continuous improvement examples`
    },

    {
      id: 'whs_compliance',
      title: 'WHS & Compliance',
      required: true,
      order: 7,
      promptTemplate: `Write the "WHS and Compliance" section for a cleaning tender.

SUBSECTIONS:

## 7.1 WHS Management System
Safety management system overview. ISO 45001 or equivalent.

## 7.2 Hazard Management
- Chemical handling and storage
- Manual handling risks
- Slips, trips, and falls
- Electrical safety (equipment)
- Biological hazards (infection control)
- Risk assessment methodology

## 7.3 Safe Work Procedures
Task-specific SWPs for: cleaning with chemicals, using equipment, working at height, waste handling.

## 7.4 Personal Protective Equipment (PPE)
PPE provided: gloves, masks, safety glasses, uniform, slip-resistant footwear.

## 7.5 Incident Management
Reporting, investigation, corrective action, return-to-work.

## 7.6 Training and Induction
Safety induction process, ongoing training, toolbox talks.

## 7.7 Chemical Safety
Safety Data Sheets (SDS) management, dilution systems, labelling, storage, spill response.

## 7.8 Working with Vulnerable Persons
- Working with Children Check (schools / childcare)
- NDIS Worker Screening (disability settings)
- Aged care clearance
- Client-specific security requirements`
    },

    {
      id: 'pricing',
      title: 'Pricing Schedule',
      required: true,
      order: 8,
      promptTemplate: `Write the Pricing section for a cleaning tender.

PRICING STRUCTURE:

## 8.1 Cleaning Rates
- Per square metre: $X.XX / m2
- Per hour (standard cleaning): $X.XX / hr
- Per hour (additional / deep cleaning): $X.XX / hr
- Supervisor rate: $X.XX / hr

## 8.2 Total Weekly / Monthly / Annual Fee
- Weekly: $X.XX
- Monthly: $X.XX
- Annual: $X.XX

## 8.3 Detailed Cost Breakdown
- Labour (cleaning staff): $X.XX (X%)
- Labour (supervision / management): $X.XX (X%)
- Consumables (soap, paper, chemicals): $X.XX (X%)
- Equipment provision and maintenance: $X.XX (X%)
- Waste management: $X.XX (X%)
- Training and compliance: $X.XX (X%)
- Management and overhead: $X.XX (X%)
- Margin: $X.XX (X%)

## 8.4 Additional Services (Schedule of Rates)
- Carpet steam cleaning: $X.XX / m2
- Window cleaning (internal): $X.XX per window
- Window cleaning (external): $X.XX per window
- Floor stripping / sealing: $X.XX / m2
- High-level dusting: $X.XX / hr
- Pressure washing: $X.XX / hr
- One-off deep clean: quote basis

## 8.5 Consumables Allowance
- Monthly consumable cost per FTE: $X.XX

## 8.6 Adjustment / Escalation
Annual CPI + X% adjustment.

Note: "All prices exclusive of GST."`
    },

    {
      id: 'compliance_matrix',
      title: 'Compliance Schedule',
      required: true,
      order: 9,
      promptTemplate: `Create a compliance matrix for a government cleaning tender.

Columns: Clause | Requirement | Compliant | Reference

Items:
1. Business registration
2. Public Liability Insurance over $20M
3. Workers Compensation certificate
4. ISO 9001 Quality Management
5. ISO 14001 Environmental Management
6. ISO 45001 WHS Management
7. Green Cleaning certification
8. Chemical register / SDS management
9. Infection control policy
10. Waste management policy
11. Working with Children Check (if applicable)
12. NDIS Worker Screening (if applicable)
13. Equal Opportunity / Diversity Policy
14. Modern Slavery Statement
15. Financial statements provided
16. Staff training matrix (induction + ongoing)
17. Quality inspection system
18. Equipment maintenance register
19. Emergency cleaning protocol
20. Client complaint handling process

Response: "Compliant" + reference section.`
    },

    {
      id: 'appendices',
      title: 'Appendices',
      required: false,
      order: 10,
      promptTemplate: `List appendices:

APPENDIX A — Company Policies
APPENDIX B — Certifications and Accreditations
APPENDIX C — Insurance Certificates
APPENDIX D — Safe Work Procedures
APPENDIX E — Chemical Register and SDS
APPENDIX F — Training Records
APPENDIX G — Quality Inspection Checklist
APPENDIX H — Monthly Reporting Template
APPENDIX I — Equipment Register and Maintenance Logs
APPENDIX J — Client References`
    }
  ],

  // === INDUSTRY-SPECIFIC KEYWORDS ===
  keywords: [
    'Green Cleaning',
    'Infection Control',
    'Colour Coding System',
    'Microfibre Technology',
    'Dilution Control',
    'Touch Point Cleaning',
    'Deep Cleaning',
    'Periodic Maintenance',
    'Floor Stripping and Sealing',
    'Carpet Steam Cleaning',
    'High-Level Dusting',
    'Restroom Hygiene',
    'Clinical Waste Disposal',
    'Waste Diversion',
    'Recycling Program',
    'Chemical Storage and Handling',
    'Safety Data Sheet (SDS)',
    'Personal Protective Equipment (PPE)',
    'Colour-Coded Mop System',
    'Electrostatic Disinfection',
    'UV-C Sanitisation',
    'Biofilm Removal',
    'Hard Floor Care Program',
    'HEPA Filtration Vacuuming',
    'Restroom Deep Cleaning',
    'Touch-Free Hygiene Solutions',
    'Pest Management',
    'Water Damage Restoration',
    'COVID-Safe Cleaning Protocol',
    'Indoor Air Quality (IAQ) Management'
  ],

  // === COMPLIANCE REQUIREMENTS ===
  complianceRequirements: [
    'Business registration and ABN / ACN',
    'Public Liability Insurance over $20M',
    'Workers Compensation Insurance',
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'ISO 45001:2018 WHS Management',
    'Green cleaning certification (preferred)',
    'Working with Children Check (if servicing schools / childcare)',
    'NDIS Worker Screening (if servicing disability settings)',
    'Chemical register and SDS management system',
    'Infection control policy and training',
    'Colour coding system for cleaning equipment',
    'Equipment maintenance program',
    'Quality inspection and scoring system'
  ]
};

module.exports = cleaningTemplate;