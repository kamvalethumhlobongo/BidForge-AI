/**
 * BidForge AI — Logistics & Transport Proposal Template
 * 
 * Industry-Specific Template for Logistics, Transport & Supply Chain
 * Compliant with Australian Government RFT/RFP standards
 */

const logisticsTemplate = {
  id: 'logistics',
  name: 'Logistics & Transport Services',
  description: 'Freight, courier, fleet management, warehousing, and supply chain logistics',
  version: '1.0.0',

  // === SECTION STRUCTURE ===
  sections: [
    {
      id: 'cover_page',
      title: 'Cover Page & Tender Information',
      required: true,
      order: 1,
      promptTemplate: `You are a professional bid writer for a logistics and transport company.
    
Generate a professional cover page with the following details:

TENDER RESPONSE DOCUMENT

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
Date: {{currentDate}}

"BidForge AI — Powered Delivery" to appear as a footer.`
    },

    {
      id: 'executive_summary',
      title: 'Executive Summary',
      required: true,
      order: 2,
      promptTemplate: `You are a senior bid writer for a logistics and transport company responding to a government tender. Write a compelling 2-3 page executive summary.

CONTEXT:
- Company: {{companyName}} — {{companyDescription}}
- Tender: {{tenderTitle}} (Ref: {{tenderReference}})
- {{clientName}} requires logistics services involving {{scopeSummary}}
- Service locations: {{serviceLocations}}
- Contract value estimate: {{estimatedValue}}
- Company differentiators: {{differentiators}}

REQUIREMENTS FOR THE EXECUTIVE SUMMARY:
1. Opening paragraph demonstrating clear understanding of {{clientName}}'s operational needs
2. Overview of {{companyName}}'s proposed solution — be specific about fleet size, technology, and approach
3. Key differentiators: reliability, technology integration, safety record, environmental credentials
4. Why {{companyName}} is uniquely positioned to deliver this contract
5. Estimated value proposition — cost efficiency, performance guarantees, value-adds
6. Professional tone, concise, confident

IMPORTANT: This must sound like a real human-written proposal. Use concrete logistics industry terminology. Do NOT use generic filler language. Reference specific capabilities where provided.`
    },

    {
      id: 'company_capability',
      title: 'Company Capability & Experience',
      required: true,
      order: 3,
      promptTemplate: `You are writing the "Company Capability" section for a logistics company's tender response.

COMPANY DETAILS:
- Name: {{companyName}}
- Years in operation: {{yearsInOperation}}
- Fleet size: {{fleetSize}} vehicles
- Fleet types: {{fleetTypes}}
- Employees: {{employeeCount}}
- Annual turnover: {{annualTurnover}}
- Key certifications: {{certifications}}
- Service regions: {{serviceRegions}}
- Warehouse/facility details: {{facilityDetails}}
- Technology systems: {{technologySystems}}

WRITE THE FOLLOWING SUBSECTIONS:

## 3.1 Company Overview
Describe the company history, growth trajectory, core business activities, and market position. Emphasise experience in government/enterprise contracts.

## 3.2 Licences, Accreditations & Certifications
List and describe each certification (NHVAS, HVNL compliance, Dangerous Goods, Fatigue Management, ISO standards). For each, include: certifying body, certificate number, expiry date, and relevance to the tender.

## 3.3 Financial Viability
Summarise financial strength including years of profitable operation, bonding capacity, ability to perform contract of this size.

## 3.4 Insurance Coverage
Detail: Public Liability ($20M+), Cargo Insurance ($value), Motor Vehicle, Workers' Compensation, Professional Indemnity.

## 3.5 Safety Management
Describe WHS management system, fatigue management procedures, incident reporting, LTIFR/TRIFR statistics, Chain of Responsibility compliance.

## 3.6 Environmental & Sustainability
Fleet emission standards, fuel efficiency initiatives, waste management, green credentials.

## 3.7 Quality Management
ISO 9001 certification or equivalent, quality control processes, customer feedback systems, continuous improvement.

FORMAT: Professional subsections with headers. Be data-driven and specific.`
    },

    {
      id: 'technical_approach',
      title: 'Technical Approach & Methodology',
      required: true,
      order: 4,
      promptTemplate: `You are writing the "Technical Approach" section for a logistics tender response. This is the most heavily weighted section.

TENDER SCOPE:
- Services required: {{scopeSummary}}
- Delivery locations: {{serviceLocations}}
- Schedule/timeline: {{serviceSchedule}}
- Special requirements: {{specialRequirements}}

WRITE DETAILED SUBSECTIONS:

## 4.1 Understanding of Requirements
Demonstrate thorough understanding of the scope. Reference specific requirements from the tender and restate in your own words.

## 4.2 Proposed Service Delivery Model
Describe the end-to-end workflow:
- Order receipt and processing system
- Fleet allocation and dispatch methodology
- Route optimisation approach (mention specific technology)
- Load consolidation strategy
- Real-time tracking and visibility (GPS, telematics)
- Delivery confirmation and POD process
- Exception management process

## 4.3 Fleet & Resources
Describe the dedicated fleet allocation: vehicle types, specifications, capacity. Contingency fleet for peak periods. Driver recruitment, training, and management.

## 4.4 Technology Integration
Describe transport management system (TMS), customer portal/API integration, electronic proof of delivery, real-time tracking, reporting dashboards, integration with {{clientName}}'s systems.

## 4.5 Performance KPIs & Reporting
Propose specific KPIs with targets:
- On-time delivery rate: 98%+
- Delivery accuracy: 99.5%+
- POD return rate: 100% within 24hrs
- Damage rate: <0.1%
- Customer satisfaction: 4.5/5+
- Incident rate: <1 per 100,000km

## 4.6 Risk Management
Identify key operational risks (driver shortage, vehicle breakdown, weather, traffic) and mitigation strategies. Include business continuity plan.

## 4.7 Continuous Improvement
Quarterly business reviews, customer feedback loop, innovation pipeline.

FORMAT: Detailed, specific, and tailored to the tender. Not generic. Include specific technologies and processes.`
    },

    {
      id: 'key_personnel',
      title: 'Key Personnel & Management Structure',
      required: true,
      order: 5,
      promptTemplate: `You are writing the "Key Personnel" section for a logistics tender.

PROVIDED INFORMATION:
- Contract Manager: {{contractManager}}
- Operations Manager: {{operationsManager}}
- Safety Manager: {{safetyManager}}
- Other key staff: {{keyStaff}}

INCLUDE:
1. Organisational chart showing reporting lines for this contract
2. Role descriptions for: Contract Manager, Operations Supervisor, Fleet Controller, Safety Officer, Customer Service Manager
3. Brief CV-style profiles for each nominated role (max 2 pages per role):
   - Qualifications
   - Relevant experience (focus on similar contracts)
   - Key achievements
4. Staff training & development plan
5. Backup/succession plan for critical roles

FORMAT: Professional CV format. If specific names/experience not provided, create realistic placeholder profiles that align with {{companyName}}'s described capabilities.`
    },

    {
      id: 'past_performance',
      title: 'Past Performance & Case Studies',
      required: true,
      order: 6,
      promptTemplate: `You are writing the "Past Performance" section for a logistics tender.

CLIENT REFERENCES / CASE STUDIES:
{{caseStudies}}

For EACH case study provided (or created if none provided), write a professional 1-2 page summary:

CASE STUDY FORMAT:
- Client: [Name] | Industry: [Industry] | Contract Value: [$] | Duration: [Dates]
- Challenge: The operational challenge faced
- Solution: How {{companyName}} delivered the solution
- Results: Quantified outcomes with metrics
- Testimonial: If available, include client quote

MINIMUM 3 CASE STUDIES REQUIRED.
For each, include:
- Client name and contact (if provided)
- Scope of services
- Contract value and duration
- Key deliverables and outcomes
- Lessons learned and improvements implemented

Also include a "Lessons Learned" section demonstrating continuous improvement.`
    },

    {
      id: 'pricing',
      title: 'Pricing Schedule',
      required: true,
      order: 7,
      promptTemplate: `You are creating a pricing schedule for a logistics tender response.

PRICING CONTEXT:
- Estimated contract value: {{estimatedValue}}
- Service scope: {{scopeSummary}}
- Service locations: {{serviceLocations}}

PRICING STRUCTURE:

## 7.1 Schedule of Rates
Provide rates for:
- Per km rate (by vehicle type):
  - Van/Small vehicle: $X.XX/km
  - Medium rigid truck: $X.XX/km  
  - Heavy rigid truck: $X.XX/km
  - Semi-trailer: $X.XX/km
- Per hour rate: $X.XX/hr
- Per pallet (warehousing): $X.XX/pallet/week
- Per delivery (metro): $X.XX/delivery
- Per delivery (regional): $X.XX/delivery

## 7.2 Volume Discounts
- 10% discount for volumes exceeding [X] deliveries/month
- 15% discount for volumes exceeding [Y] deliveries/month

## 7.3 Monthly Fixed Fee Estimate
Provide a realistic monthly estimate based on the scope.

## 7.4 Out of Scope Items
Clearly list what is NOT included.

## 7.5 Price Escalation
Annual CPI + X% adjustment mechanism.

FORMAT: Clean table format. Use realistic placeholder values that fit the contract scope. Add note: "All prices exclusive of GST."`
    },

    {
      id: 'compliance_matrix',
      title: 'Compliance Schedule',
      required: true,
      order: 8,
      promptTemplate: `You are creating the mandatory compliance matrix for a government logistics tender.

Create a table with columns: Clause | Requirement | Response | Reference

Include these standard compliance items:
1. Tender form signed
2. Certificate of Insurance ($20M PL)
3. Workers' Compensation certificate
4. WHS Policy provided
5. Fatigue Management Plan
6. Chain of Responsibility compliance
7. NHVAS accreditation
8. Dangerous Goods licence (if applicable)
9. Environmental Management Plan
10. Quality Management System (ISO 9001)
11. Equal Opportunity / Diversity Policy
12. Modern Slavery Statement
13. Financial statements provided
14. Privacy compliance
15. Conflict of Interest declaration

For each: Response = "Compliant" with section where evidence is found.`
    },

    {
      id: 'appendices',
      title: 'Appendices',
      required: false,
      order: 9,
      promptTemplate: `List the appendices to be included with this submission:

APPENDIX A — Company Policies (WHS, Quality, Environmental)
APPENDIX B — Certifications & Licences
APPENDIX C — Financial Statements
APPENDIX D — Insurance Certificates
APPENDIX E — Staff Training Records
APPENDIX F — Fleet Maintenance Schedule
APPENDIX G — Sample Reports & Dashboards
APPENDIX H — Client Reference Letters`
    }
  ],

  // === INDUSTRY-SPECIFIC KEYWORDS / PHRASES ===
  keywords: [
    'Chain of Responsibility (CoR)',
    'Fatigue Management',
    'Heavy Vehicle National Law (HVNL)',
    'National Heavy Vehicle Accreditation Scheme (NHVAS)',
    'Transport Management System (TMS)',
    'Electronic Proof of Delivery (ePOD)',
    'GPS Fleet Tracking',
    'Route Optimisation',
    'On-Time In-Full (OTIF)',
    'Dangerous Goods (DG)',
    'Cold Chain Logistics',
    'Cross-Docking',
    'Last-Mile Delivery',
    'Linehaul Operations',
    'Reverse Logistics',
    'Warehouse Management System (WMS)',
    'Fleet Utilisation Rate',
    'Load Consolidation',
    'Multi-Drop Routing',
    'Just-In-Time (JIT) Delivery',
    'Total Landed Cost',
    'Key Performance Indicator (KPI)',
    'Service Level Agreement (SLA)',
    'Incident Reporting & Investigation',
    'Pre-Start Vehicle Checks',
    'Chain of Responsibility (CoR) obligations'
  ],

  // === COMPLIANCE REQUIREMENTS ===
  complianceRequirements: [
    'NHVAS Accreditation (Mass, Maintenance, Fatigue modules)',
    'HVNL Compliance & Chain of Responsibility',
    'Dangerous Goods licence (if transporting DG)',
    'Fatigue Management Accreditation (Basic or Advanced)',
    'Public Liability Insurance ≥ $20M',
    'Marine/Cargo Insurance ≥ value of goods',
    'ISO 9001:2015 Quality Management',
    'ISO 45001:2018 WHS Management',
    'Fleet maintenance records system',
    'Driver fatigue management system',
    'Electronic work diaries (if required)',
    'Heavy vehicle inspection compliance'
  ]
};

module.exports = logisticsTemplate;
