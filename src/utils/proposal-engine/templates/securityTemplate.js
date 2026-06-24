/**
 * BidForge AI — Security Services Proposal Template
 * 
 * Industry-Specific Template for Security, Surveillance & Risk Management
 * Compliant with Australian Government & State Security Regulations
 */

const securityTemplate = {
  id: 'security',
  name: 'Security & Risk Management Services',
  description: 'Security guarding, monitoring, CCTV, access control, risk assessment, and cybersecurity',
  version: '1.0.0',

  // === SECTION STRUCTURE ===
  sections: [
    {
      id: 'cover_page',
      title: 'Cover Page & Tender Information',
      required: true,
      order: 1,
      promptTemplate: `You are a professional bid writer for a security services company.

Generate a professional cover page:

SECURITY SERVICES TENDER RESPONSE

Tender Reference: {{tenderReference}}
Tender Title: {{tenderTitle}}
Date: {{currentDate}}

Prepared For: {{clientName}}
Submitted By: {{companyName}}
{{companyAddress}}
{{companyAbn}} | {{companyAcn}}
Security Licence No: {{securityLicence}}

Contact Person: {{contactName}}
Position: {{contactPosition}}
Phone: {{contactPhone}}
Email: {{contactEmail}}

Authorised Signatory: {{authorisedSignatory}}

"BidForge AI — Securing Excellence" footer.`
    },

    {
      id: 'executive_summary',
      title: 'Executive Summary',
      required: true,
      order: 2,
      promptTemplate: `You are a senior bid writer for a security company. Write a compelling executive summary.

CONTEXT:
- Company: {{companyName}} — {{companyDescription}}
- Tender: {{tenderTitle}} (Ref: {{tenderReference}})
- Services required: {{scopeSummary}}
- Sites/locations: {{serviceLocations}}
- Contract value: {{estimatedValue}}
- Differentiators: {{differentiators}}

EXECUTIVE SUMMARY REQUIREMENTS:
1. Understanding of {{clientName}}'s security risks and operational needs
2. Overview of proposed security solution — guarding, technology, or both
3. Key differentiators: training, technology, rapid response, compliance
4. Track record with similar clients/industries
5. Quality, training, and compliance commitment
6. Value proposition — security outcomes vs cost

TONE: Professional, confident, security-focused. Demonstrate understanding of security risk management principles.`
    },

    {
      id: 'company_capability',
      title: 'Company Capability & Experience',
      required: true,
      order: 3,
      promptTemplate: `Write the "Company Capability" section for a security tender.

COMPANY DETAILS:
- Name: {{companyName}}
- Years in operation: {{yearsInOperation}}
- Employee count: {{employeeCount}} (security officers + management)
- Annual turnover: {{annualTurnover}}
- Key certifications: {{certifications}}
- Security licences: {{licenceDetails}}
- Service types: {{serviceTypes}} (guarding, monitoring, CCTV, etc.)
- Technology platforms: {{technologySystems}}

SUBSECTIONS:

## 3.1 Company Overview
History, core business, market position, client base. Emphasise experience in similar security environments.

## 3.2 Licences & Registrations
- Security Provider Licence (state-specific: NSW, QLD, VIC, WA, etc.)
- Individual security officer licences (crowd control, guard, monitoring)
- Monitoring Centre licence and certification
- ASIAL / other industry body membership
- Fire Safety Adviser registration (if applicable)
- Private investigator licence (if applicable)

## 3.3 Certifications & Accreditations
- ISO 9001:2015 Quality Management
- ISO 45001:2018 WHS Management
- ISO 14001:2015 Environmental
- ASIAL Accreditation
- Australian Government Security Vetting Agency (AGSVA) clearance
- Protective Security Policy Framework (PSPF) compliance

## 3.4 Financial Viability
Financial strength, revenue stability, bonding capacity.

## 3.5 Insurance
- Public Liability ($20M)
- Professional Indemnity ($5M+)
- Cyber Liability (if providing electronic security)
- Workers' Compensation

## 3.6 Staff Training & Development
- Certificate II/III in Security Operations
- Ongoing professional development
- Client-specific induction and training
- Use of force / de-escalation training
- Psychometric screening process
- Drug and alcohol testing

FORMAT: Data-driven, professional, compliance-focused.`
    },

    {
      id: 'technical_approach',
      title: 'Service Delivery Model & Methodology',
      required: true,
      order: 4,
      promptTemplate: `Write the "Service Delivery" section for a security tender.

SCOPE:
- Services: {{scopeSummary}}
- Locations: {{serviceLocations}}
- Schedule: {{serviceSchedule}}
- Special requirements: {{specialRequirements}}

SUBSECTIONS:

## 4.1 Understanding of Security Requirements
Demonstrate deep understanding of the client's security environment, risks, and critical assets.

## 4.2 Security Personnel Management
- Recruitment and vetting process (psychometric, background checks)
- Training program (induction, site-specific, ongoing)
- Uniform and presentation standards
- Performance management and supervision
- Recognition and retention strategies
- Staff ratios and rostering approach

## 4.3 Guard Force Management
- Patrol methodology (static, mobile, random)
- Incident response protocols
- Communication systems (radio, phone, app-based)
- Reporting systems (daily, incident, monthly)
- Supervision structure (ratio of supervisors to guards)

## 4.4 Electronic Security (if applicable)
- CCTV systems and monitoring
- Access control systems
- Alarm monitoring and response
- Integration capabilities
- Maintenance and break-fix services
- Cyber resilience of security systems

## 4.5 Risk Management
- Security risk assessment methodology
- Threat assessment and intelligence
- Emergency response planning
- Business continuity integration
- Crime Prevention Through Environmental Design (CPTED)

## 4.6 Performance KPIs & Reporting
Propose specific KPIs:
- Officer attendance/punctuality: 99%+
- Incident response time: <5 minutes
- Report accuracy: 100%
- Client satisfaction: 4.5/5+
- Training compliance: 100%
- Site inspection completion: 100%
- Equipment uptime: 99.9% (electronic)

## 4.7 Quality Assurance
- Site audits and inspections
- Mystery shopper / supervisory checks
- Client feedback surveys
- Continuous improvement program
- Quarterly business reviews

FORMAT: Detailed, specific, security industry terminology.`
    },

    {
      id: 'key_personnel',
      title: 'Key Personnel & Management',
      required: true,
      order: 5,
      promptTemplate: `Write the "Key Personnel" section for a security tender.

KEY ROLES:
- Security Operations Manager: {{operationsManager}}
- Site Supervisor / Account Manager: {{siteSupervisor}}
- Control Room Manager: {{controlRoomManager}}
- Quality/Training Manager: {{trainingManager}}

INCLUDE:
1. Organisational chart
2. Role descriptions
3. Personnel profiles:
   - Security industry qualifications
   - Years of experience
   - Relevant site/contract experience
   - Licences held
4. Management-to-guard ratio and span of control
5. Recruitment and vetting process
6. Training and supervision framework
7. Succession planning

FORMAT: Professional, CV-style profiles.`
    },

    {
      id: 'past_performance',
      title: 'Past Performance & Case Studies',
      required: true,
      order: 6,
      promptTemplate: `Write the "Past Performance" section for a security tender.

CASE STUDIES: {{caseStudies}}

For each (minimum 3), write 1-2 pages:

CASE STUDY FORMAT:
- Client & Industry
- Contract Value & Duration
- Services Provided
- Challenge / Risk Profile
- Solution Delivered
- Quantified Outcomes:
  * Incident reduction (X%)
  * Response times (X mins)
  * Client retention (X years)
  * Staff retention (X%)
  * Client satisfaction rating
- Lessons Learned

Also include:
- Client reference table
- Industry recognition and awards
- Partnership approach`
    },

    {
      id: 'compliance_legal',
      title: 'Legal Compliance & Regulatory Framework',
      required: true,
      order: 7,
      promptTemplate: `Write the "Legal Compliance" section for a security tender.

SUBSECTIONS:

## 7.1 Security Providers Act Compliance
Compliance with state-specific Security Providers Acts. Demonstrate understanding of obligations under each relevant jurisdiction.

## 7.2 Individual Licensing
Process for ensuring all officers hold current, appropriate licences. Auditing and expiry management system.

## 7.3 Surveillance & Privacy Laws
Compliance with surveillance devices legislation, Privacy Act 1988, and state privacy laws. Data handling and storage protocols.

## 7.4 Use of Force Policies
Use of force continuum, training, reporting, and review process. Compliance with relevant state laws.

## 7.5 Code of Conduct & Ethics
Professional standards, conflict of interest, confidentiality, whistleblower policies.

## 7.6 Modern Slavery & Human Rights
Modern Slavery Statement, supply chain due diligence, ethical sourcing.

## 7.7 Data Protection & Cyber Security
Data handling, storage, breach notification, cybersecurity protocols for electronic systems.

FORMAT: Compliance-focused, referencing specific legislation and standards.`
    },

    {
      id: 'pricing',
      title: 'Pricing Schedule',
      required: true,
      order: 8,
      promptTemplate: `Write the Pricing section for a security tender.

PRICING STRUCTURE:

## 8.1 Security Officer Rates (per hour)
- Level 1 Security Officer: $X.XX/hr
- Level 2 Security Officer: $X.XX/hr
- Level 3 / Senior Officer: $X.XX/hr
- Supervisor: $X.XX/hr
- Control Room Operator: $X.XX/hr

## 8.2 Mobile Patrol (per visit)
- Scheduled patrol: $X.XX/visit
- Call-out / response: $X.XX/visit
- Alarm response: $X.XX/response

## 8.3 Electronic Security (if applicable)
- CCTV monitoring: $X.XX/hr per site
- Alarm monitoring: $X.XX/month per device
- Maintenance: $X.XX/month

## 8.4 Management Fee
- Account management: $X.XX/month
- Reporting & QA: $X.XX/month

## 8.5 Equipment & Uniforms
- Uniforms: included / $X.XX per officer/year
- Equipment: included / $X.XX per officer

## 8.6 Volume Discounts
Apply for multiple sites or increased hours.

## 8.7 Escalation
Annual CPI + X% adjustment.

Standard note: "All prices exclusive of GST."`
    },

    {
      id: 'compliance_matrix',
      title: 'Compliance Schedule',
      required: true,
      order: 9,
      promptTemplate: `Create a compliance matrix for a government security tender.

Columns: Clause | Requirement | Compliant | Reference

Items:
1. Security Provider Licence (state-specific)
2. Public Liability Insurance ≥ $20M
3. Professional Indemnity Insurance
4. Workers' Compensation
5. ISO 9001 Quality Management
6. ISO 45001 WHS Management
7. ASIAL Accreditation
8. Staff vetting policy (psychometric, background)
9. Use of force policy
10. Privacy & surveillance compliance
11. Data protection policy
12. Modern Slavery Statement
13. Equal Opportunity / Diversity Policy
14. Financial statements
15. Code of Conduct
16. Conflict of Interest declaration
17. Training matrix (Certificate II/III)
18. Drug & alcohol policy
19. Emergency response plan
20. Business continuity plan

Response: "Compliant" + reference section.`
    },

    {
      id: 'appendices',
      title: 'Appendices',
      required: false,
      order: 10,
      promptTemplate: `List appendices:

APPENDIX A — Company Policies
APPENDIX B — Certifications & Licences
APPENDIX C — Insurance Certificates
APPENDIX D — Staff Training Records
APPENDIX E — Vetting & Screening Process
APPENDIX F — Use of Force Policy
APPENDIX G — Sample Incident Reports
APPENDIX H — Monthly Reporting Template
APPENDIX I — Client References`
    }
  ],

  // === INDUSTRY-SPECIFIC KEYWORDS ===
  keywords: [
    'Security Providers Act',
    'Certificate II in Security Operations',
    'Certificate III in Security Operations',
    'ASIAL Accreditation',
    'Control Room Management',
    'CCTV Monitoring',
    'Incident Response',
    'Use of Force Continuum',
    'De-escalation Techniques',
    'Static Guarding',
    'Mobile Patrol',
    'Alarm Monitoring',
    'Access Control Systems',
    'Biometric Security',
    'Perimeter Security',
    'Cybersecurity Integration',
    'Risk Assessment & Treatment',
    'Security Risk Management (SRM)',
    'Protective Security Policy Framework (PSPF)',
    'AGSVA Clearance',
    'Privacy Act 1988',
    'Surveillance Devices Act',
    'Crime Prevention Through Environmental Design (CPTED)',
    'Drug and Alcohol Testing',
    'Psychometric Screening',
    'Security Officer Licence (1A, 1B, 1C, 2A)',
    'Close Personal Protection',
    'Key Holding & Response',
    'Duress Response'
  ],

  // === COMPLIANCE REQUIREMENTS ===
  complianceRequirements: [
    'State Security Provider Licence (appropriate class)',
    'Individual officer licences (guarding, crowd control, monitoring)',
    'ASIAL Accreditation (Grade 1 or 2 monitoring centre)',
    'ISO 9001:2015 Quality Management',
    'ISO 45001:2018 WHS Management',
    'Public Liability Insurance ≥ $20M',
    'Professional Indemnity Insurance ≥ $5M',
    'Staff psychometric screening & background checks',
    'Certificate II/III in Security Operations for all officers',
    'Privacy & surveillance law compliance',
    'Use of force training & policy',
    'Drug and alcohol management policy',
    'Incident reporting & investigation system',
    '24/7 supervisory support capability'
  ]
};

module.exports = securityTemplate;