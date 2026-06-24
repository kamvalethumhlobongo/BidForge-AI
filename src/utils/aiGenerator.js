/**
 * BidForge AI — Professional Proposal Generator
 * 
 * Generates comprehensive, industry-specific tender responses that win contracts.
 * Supports 4 pricing tiers that control document depth and complexity.
 *
 * Pricing → Depth Mapping:
 *   - "Single Proposal Pack" (R750–R2,500): Standard, 6 sections
 *   - "Winning Bid Package" (R3,500–R12,000): Advanced, 8 sections  
 *   - "Tender Accelerator" (R5,000–R20,000/mo): Premium, 10 sections
 *   - "Bid Desk (DFY)" (R15,000–R50,000+): Enterprise, full 12 sections
 */

// ============================================
// PRICING TIER CONFIGURATION
// ============================================

const TIER_CONFIG = {
  "Single Proposal Pack": { depth: 'standard', sections: 6, label: 'Standard' },
  "Winning Bid Package": { depth: 'advanced', sections: 8, label: 'Advanced' },
  "Tender Accelerator": { depth: 'premium', sections: 10, label: 'Premium' },
  "Bid Desk (DFY)": { depth: 'enterprise', sections: 12, label: 'Enterprise' },
};

// ============================================
// SECTION HEADERS & INTROS
// ============================================

const SECTIONS = {
  executiveSummary: { title: 'Executive Summary', order: 1 },
  companyOverview: { title: 'Company Overview & Capabilities', order: 2 },
  methodology: { title: 'Proposed Solution & Methodology', order: 3 },
  qualityControl: { title: 'Quality Control & Assurance Framework', order: 4 },
  healthSafety: { title: 'Health, Safety & Compliance', order: 5 },
  sustainability: { title: 'Sustainability & Environmental Commitment', order: 6 },
  caseStudies: { title: 'Past Performance & Case Studies', order: 7 },
  pricing: { title: 'Pricing Schedule', order: 8 },
  personnel: { title: 'Key Personnel & Management', order: 9 },
  riskManagement: { title: 'Risk Management & Business Continuity', order: 10 },
  complianceMatrix: { title: 'Compliance Schedule & Mandatory Requirements', order: 11 },
  appendices: { title: 'Appendices & Supporting Documentation', order: 12 },
};

// ============================================
// INDUSTRY TEMPLATES — Deep Content
// ============================================

const industryTemplates = {
  Logistics: {
    name: 'Logistics & Transport Services',
    executiveSummary: {
      standard: '{companyName} is pleased to submit this proposal for {tenderTitle}. With a fleet of {vehicleCount} vehicles and {yearsInOperation} years of operational experience, we deliver reliable, efficient, and compliant logistics solutions. Our proven track record of 99.8% on-time delivery, comprehensive Chain of Responsibility compliance, and investment in real-time fleet tracking technology positions us as the ideal partner for this contract.',
      advanced: '{companyName} brings {yearsInOperation} years of logistics and transport expertise to {tenderTitle}, underpinned by a fleet of {vehicleCount} modern vehicles and a team of {employeeCount} dedicated professionals. Our end-to-end supply chain capability — from route optimisation and cold-chain logistics to last-mile delivery and reverse logistics — ensures that {clientName} receives a seamless, reliable, and cost-effective service. We are NHVAS-accredited, ISO 9001:2015 certified, and fully compliant with the Heavy Vehicle National Law and Chain of Responsibility obligations.',
      premium: '{companyName} is proud to respond to {tenderTitle}. As a {yearsInOperation}-year industry leader with a fleet of {vehicleCount} vehicles and {employeeCount} staff, we deliver logistics excellence through a combination of advanced technology, regulatory mastery, and operational discipline. Our transport management system (TMS) integrates real-time GPS tracking, electronic proof of delivery, automated route optimisation, and customer-facing dashboards — providing complete visibility and control. We consistently achieve 99.8% on-time delivery, 99.5% delivery accuracy, and industry-leading safety records. Our commitment to Chain of Responsibility compliance, fatigue management, and sustainable fleet operations ensures that {clientName} receives not just a logistics provider, but a strategic supply chain partner.'
    },
    methodology: {
      standard: 'Our service delivery model is built on a multi-modal transport strategy that optimises routes to reduce fuel consumption, minimise transit times, and ensure rapid turnaround. Each delivery is tracked in real-time via GPS-enabled fleet management software, with electronic proof of delivery captured at the point of service.',
      advanced: '### 3.1 Operational Framework\nOur logistics methodology is structured around five core pillars:\n\n**1. Order Management & Dispatch:** Orders flow through our TMS, which automatically assigns the optimal vehicle type based on load size, destination, and delivery window. Confirmation is sent within 15 minutes.\n\n**2. Route Optimisation:** Dynamic routing algorithms consider traffic patterns, delivery windows, vehicle capacity, and driver fatigue regulations to create the most efficient daily routes. Average route efficiency improvement: 18%.\n\n**3. Load Consolidation & Cross-Docking:** Multi-stop loads are consolidated at our distribution hub to maximise vehicle utilisation and reduce empty running. Load factor consistently above 92%.\n\n**4. Real-Time Tracking & Visibility:** Every vehicle is GPS-tracked, providing live ETAs to customers via a secure portal. Exception alerts trigger proactive communication before delays occur.\n\n**5. Proof of Delivery & Reporting:** Electronic POD with signature capture, timestamp, and photo evidence is transmitted instantly. Daily, weekly, and monthly performance reports are provided against agreed KPIs.',
      premium: '### Service Delivery Framework\n\n#### 1. Integrated Supply Chain Model\n{companyName} operates an integrated logistics model covering primary transport, warehousing, distribution, and reverse logistics. Our network of strategically located depots enables same-day metro delivery and next-day regional service.\n\n#### 2. Fleet Management & Allocation\n- **Dedicated Fleet:** {vehicleCount} vehicles including vans, rigids, semi-trailers, and temperature-controlled units\n- **Contingency Capacity:** 15% additional capacity via pre-qualified subcontractor panel\n- **Maintenance Regime:** All vehicles on NHVAS Maintenance Accreditation, with preventative maintenance at manufacturer intervals\n- **Telematics:** Every vehicle equipped with GPS, engine diagnostics, driver behaviour monitoring, and fatigue detection\n\n#### 3. Technology Stack\n| System | Function |\n|---|---|\n| Transport Management System | Order management, dispatch, billing |\n| GPS Fleet Tracking | Real-time location, geofencing, ETAs |\n| Electronic POD | Signature, photo, timestamp capture |\n| Customer Portal | Live tracking, reporting, invoicing |\n| Driver App | Navigation, job details, fatigue alerts |\n| BI Dashboard | KPI tracking, trend analysis, exception reporting |\n\n#### 4. Quality Gates\n- **Pre-Dispatch:** Vehicle inspection, load check, paperwork verification\n- **In-Transit:** Real-time tracking, geofence alerts, driver check-ins\n- **On-Delivery:** POD capture, damage inspection, customer sign-off\n- **Post-Delivery:** 24-hour follow-up, KPI update, continuous improvement review\n\n#### 5. Performance Guarantees\n- On-Time Delivery: ≥ 98.5%\n- Delivery Accuracy: ≥ 99.5%\n- POD Return: Within 24 hours (100%)\n- Damage Rate: < 0.1%\n- Customer Satisfaction: ≥ 4.5 / 5.0'
    },
    qualityControl: {
      standard: '{companyName} maintains an ISO 9001:2015 certified Quality Management System (QMS) that governs all operational processes. Regular audits, performance reviews, and customer feedback loops ensure continuous improvement and service excellence.',
      advanced: '### Quality Management Framework\n\n**1. ISO 9001:2015 Certified QMS:** Our quality system covers all operational processes from order receipt through to final delivery and billing. Annual external audits and quarterly internal audits verify compliance.\n\n**2. Key Quality Metrics & Targets:**\n- On-Time Delivery: 98.5% (measured per route, per customer)\n- Delivery Accuracy: 99.5%\n- Damage-Free Rate: 99.9%\n- Customer Complaint Resolution: Within 2 hours\n- POD Accuracy: 100%\n\n**3. Inspection Regime:**\n- Pre-departure vehicle safety checks (daily)\n- Load security inspection (per load)\n- Temperature log verification (cold chain, every trip)\n- Monthly fleet compliance audits\n\n**4. Continuous Improvement:**\n- Monthly operational reviews with route performance analysis\n- Quarterly business reviews with {clientName}\n- Annual management review of QMS effectiveness\n- Root cause analysis for all service failures with corrective action tracking',
      premium: '### ISO 9001:2015 Quality Management System\n\n{companyName} operates a comprehensive QMS that is externally certified to ISO 9001:2015 and integrated with our transport management platform. The system provides real-time visibility into performance against every KPI.\n\n### Quality Control Framework\n\n| Control Point | Method | Frequency | Owner |\n|---|---|---|---|\n| Order Entry | Automated validation against SLA | Per order | Customer Service |\n| Vehicle Pre-start | Digital checklist in driver app | Daily | Driver |\n| Load Security | Photo evidence + checklist | Per load | Loader |\n| In-Transit Monitoring | GPS alerts + driver check-ins | Continuous | Control Room |\n| Delivery Confirmation | ePOD with signature + photo | Per delivery | Driver |\n| Post-Delivery QA | Customer satisfaction survey | 24hrs post-delivery | QA Team |\n\n### Performance Scorecard\n\n**Service KPIs (Monthly):**\n- On-Time Delivery: Target 98.5%, Current 99.1%\n- POD Completeness: Target 100%, Current 100%\n- Damage Rate: Target <0.1%, Current 0.04%\n- Customer Complaints: Target <5 per 1,000 deliveries\n\n**Operational KPIs:**\n- Fleet Utilisation: Target >90%, Current 94%\n- Driver Compliance: Target 100%, Current 99.7%\n- Maintenance Adherence: Target 100%, Current 100%\n\n### Corrective Action Process\n1. Incident detected (system alert, customer report, internal audit)\n2. Root cause analysis within 4 hours\n3. Corrective action plan developed and approved\n4. Implementation within 24 hours\n5. Effectiveness review within 7 days\n6. Permanent process change if required'
    },
    healthSafety: {
      standard: '{companyName} is fully committed to the health and safety of our workforce, clients, and the public. Our WHS management system is certified to ISO 45001:2018 and covers fatigue management, Chain of Responsibility compliance, vehicle safety, and manual handling.',
      advanced: '### WHS Management System\n\n{companyName} operates a certified ISO 45001:2018 WHS management system that is integrated into every aspect of our operations. Safety is not a department — it is embedded in our culture.\n\n### Key Safety Programs\n\n**1. Fatigue Management:**\n- Advanced Fatigue Management (AFM) accreditation under NHVAS\n- Electronic Work Diaries (EWD) for all drivers\n- In-vehicle fatigue detection technology (driver alertness monitoring)\n- Mandatory rest breaks enforced by system (cannot override)\n- Fatigue training module (annual refresher)\n\n**2. Chain of Responsibility Compliance:**\n- Dedicated CoR officer appointed\n- All parties in supply chain briefed on CoR obligations\n- Speed limiter compliance (all vehicles)\n- Load restraint inspections (every load)\n- Mass management (on-board weighing for bulk operations)\n\n**3. Vehicle Safety:**\n- Daily pre-start checks via digital app\n- Scheduled preventative maintenance (no overdue services permitted)\n- Annual vehicle inspections (NHVAS)\n- Tyre management program\n\n**4. Incident Management:**\n- All incidents reported within 1 hour\n- Investigation within 48 hours (ICAM methodology)\n- Corrective actions tracked to closure\n- Monthly safety statistics reported to management\n\n**Safety Performance (Last 12 Months):**\n- LTIFR: 0.0 (zero lost time injuries)\n- TRIFR: 1.2\n- Vehicle Incidents: 2 (minor, no injuries)\n- Days Since Last Lost Time Injury: [X] days',
      premium: '### Safety Culture & Philosophy\n\nAt {companyName}, safety is our single most important value. Our safety vision is simple: everyone goes home safe, every day. This commitment is embedded in our policies, procedures, technology, and the behaviours we recognise and reward.\n\n### Certified Management System\n- ISO 45001:2018 — Occupational Health & Safety (certified)\n- ISO 39001:2012 — Road Traffic Safety Management\n- NHVAS — Advanced Fatigue Management, Mass Management, Maintenance\n\n### Safety Governance Structure\n\n**Safety Committee:** Meets monthly, chaired by Operations Director, including driver representatives.\n\n**CoR Officer:** Dedicated Chain of Responsibility compliance manager with authority to halt operations.\n\n**Safety Manager:** Full-time, ICAM-trained, responsible for system effectiveness.\n\n### Fatigue Management System\n\nOur AFM accreditation under NHVAS is the highest level of fatigue management. Key elements:\n- Electronic Work Diaries with real-time monitoring\n- In-vehicle fatigue detection (Driver Safety System)\n- Automated scheduling compliant with fatigue regulations\n- 24/7 fatigue monitoring desk\n- Biometric fitness-for-duty testing (optional)\n\n### Safety by the Numbers (Rolling 12 Months)\n\n| Metric | Result | Target |\n|---|---|---|\n| Lost Time Injury Frequency Rate | 0.0 | 0.0 |\n| Total Recordable Injury Frequency Rate | 0.8 | <2.0 |\n| Vehicle Incident Rate (per 100K km) | 0.12 | <0.5 |\n| Fatigue Breach Rate | 0.0% | 0.0% |\n| Safety Training Compliance | 99.8% | 100% |\n| Near Miss Reporting Rate | 4.2/month | >3/month |\n\n### Drug & Alcohol Management\n- Random testing program (20% of workforce per quarter)\n- Pre-employment testing (all new hires)\n- Post-incident testing (100%)\n- For-cause testing (management-authorised)\n- EAP program available for all employees'
    },
    sustainability: {
      standard: '{companyName} is committed to reducing our environmental footprint through fleet modernisation, route optimisation to reduce fuel consumption, and responsible waste management practices.',
      advanced: '### Environmental Commitment\n\n{companyName} recognises our responsibility to minimise environmental impact while delivering essential logistics services. Our environmental management system is certified to ISO 14001:2015.\n\n### Key Initiatives\n\n**1. Fleet Modernisation:**\n- 40% of fleet Euro 6 / ADR 80 compliant\n- Target: 100% by 2028\n- 5 electric vans in operation (last-mile delivery)\n- Aerodynamic trailers for drag reduction\n\n**2. Fuel Efficiency:**\n- Route optimisation reduces km by 12% annually\n- Driver training program in eco-driving (7% fuel saving)\n- Tyre pressure monitoring system\n- Telematics-based idling reduction (idling reduced by 65%)\n\n**3. Waste Management:**\n- Workshop waste: 95% recycling rate\n- Packaging returns program\n- Tyre recycling program\n\n**4. Carbon Reporting:**\n- Annual carbon footprint calculated\n- Scope 1, 2, and 3 emissions reported\n- Carbon offset program for unavoidable emissions\n\n**5. Emissions Performance:**\n- CO₂ per km: Reduced by 18% over 3 years\n- Fuel consumption: Reduced by 15% over 3 years\n- Zero waste to landfill from operations',
      premium: '### ISO 14001:2015 Environmental Management\n\nOur certified EMS integrates environmental considerations into every operational decision. Sustainability is not an add-on — it is engineered into our processes.\n\n### Net Zero Roadmap\n\n| Year | Milestone |\n|---|---|\n| 2025 | Carbon footprint baseline established |\n| 2026 | 25% fleet EV/alternative fuel |\n| 2027 | All depots powered by renewable energy |\n| 2028 | 50% fleet EV/alternative fuel |\n| 2030 | 100% fleet zero-emission capable |\n| 2035 | Net zero operations (Scope 1 & 2) |\n\n### Current Environmental Performance\n\n**Carbon Footprint (Scope 1 & 2):**\n- Current: 1,240 tCO₂e (FY2024)\n- Reduction trajectory: 42% by 2030\n- Carbon intensity: 0.12 kgCO₂e per km\n\n**Fleet Environmental Specs:**\n- Euro 6 compliant: 72% of fleet\n- Electric vehicles: 8 units (expanding to 25 by 2026)\n- Hybrid auxiliary power units: All refrigeration units\n- Aerodynamic kits: 100% of semi-trailer fleet\n\n**Operational Efficiencies:**\n- Route optimisation savings: 180,000 km/year avoided\n- Fuel saved: 85,000 litres/year\n- CO₂ avoided: 220 tonnes/year\n- Paperless operations: 95% digital documentation\n\n### Green Partnerships\n- Carbon offset program with GreenFleet\n- Sustainable procurement policy for all suppliers\n- Circular economy packaging solutions for clients\n- Electric vehicle charging infrastructure at all depots'
    },
    caseStudies: [
      {
        client: '[Client Name — e.g. Major Retail Chain]',
        project: 'National Distribution Contract',
        value: '$2.8M annually',
        duration: '3 years (ongoing)',
        challenge: 'Client required national distribution network covering 1,200+ stores with 99.5% on-time delivery, real-time tracking, and full cold chain compliance for perishable goods. Previous provider achieved 94% OTIF.',
        solution: '{companyName} deployed a dedicated fleet of 24 temperature-controlled vehicles integrated with our TMS. Route optimisation reduced km by 15%. Real-time temperature monitoring and automated alerts ensured cold chain integrity.',
        results: [
          'On-Time In-Full delivery: 99.1% (exceeded target)',
          'Cold chain compliance: 100% (zero temperature breaches)',
          'Distribution cost reduction: 12% vs previous provider',
          'Client satisfaction score: 4.7/5.0',
          'Contract renewed for additional 2 years'
        ]
      },
      {
        client: '[Client Name — e.g. Government Transport Authority]',
        project: 'Regional Freight & Logistics Services',
        value: '$1.5M annually',
        duration: '2 years',
        challenge: 'Government RFT requiring comprehensive freight services across 15 regional locations, strict Chain of Responsibility compliance, 100% NHVAS accreditation, and indigenous employment targets.',
        solution: 'Established regional distribution hubs, deployed NHVAS-accredited fleet, implemented CoR management framework, and partnered with indigenous employment organisation to meet participation targets.',
        results: [
          '100% compliance with all RFT requirements',
          'Zero CoR breaches across contract term',
          'Indigenous employment: 8% of workforce (target: 5%)',
          'On-time delivery: 98.7%',
          'Contract value grown to $1.8M in year 2'
        ]
      },
      {
        client: '[Client Name — e.g. Healthcare Logistics Provider]',
        project: 'Time-Critical Medical Logistics',
        value: '$890,000 annually',
        duration: '18 months',
        challenge: 'Time-critical delivery of medical supplies, pathology samples, and pharmaceuticals with strict SLA windows (30-minute delivery windows), full cold chain compliance, and chain of custody documentation.',
        solution: 'Dedicated medical logistics division, specialised vehicles with dual-temperature zones, real-time GPS with geofencing for SLA monitoring, and electronic chain of custody tracking.',
        results: [
          'SLA compliance: 99.6% (30-minute delivery windows)',
          'Zero temperature excursion events',
          '100% chain of custody documentation',
          'Service expanded to 3 additional regions',
          'Named preferred logistics provider'
        ]
      }
    ],
    keyStrengths: [
      '99.8% on-time delivery track record across all contracts',
      'Fully NHVAS-accredited (Mass, Maintenance, Advanced Fatigue Management)',
      'Real-time GPS fleet tracking with customer-facing portal',
      'ISO 9001:2015, ISO 45001:2018, ISO 14001:2015 certified',
      'Chain of Responsibility compliance framework with dedicated CoR officer',
      'Electronic proof of delivery with photo & signature capture',
      'Modern fleet with regular replacement cycle + EVs',
      '24/7 control room with live fleet monitoring'
    ]
  },

  Construction: {
    name: 'Construction & Building Services',
    executiveSummary: {
      standard: '{companyName} submits this proposal for {tenderTitle} with confidence, bringing {yearsInOperation} years of construction expertise and a track record of delivering projects on time, on budget, and to the highest quality standards. Our team of {employeeCount} professionals is committed to safety, quality, and client satisfaction.',
      advanced: '{companyName} is delighted to respond to {tenderTitle}. With {yearsInOperation} years in the construction industry, over {projectsCompleted} projects delivered, and a team of {employeeCount} skilled professionals, we bring proven capability in delivering complex projects. Our ISO-certified management systems, industry-leading safety record (zero lost time injuries over {yearsInOperation} years), and commitment to sustainable construction practices ensure that {clientName} receives the highest standard of service.',
      premium: '{companyName} submits this comprehensive proposal for {tenderTitle} with enthusiasm and confidence. As a {yearsInOperation}-year industry leader with a portfolio of {projectsCompleted} successfully delivered projects — including multiple government contracts valued up to ${projectValueRange} — we understand what it takes to deliver projects that meet the highest standards of quality, safety, and community value. Our approach combines technical excellence with collaborative project management, innovative construction methodologies, and an unwavering commitment to safety. We do not just build structures — we build trust, one project at a time.'
    },
    methodology: {
      standard: 'Our construction approach follows a phased project management methodology: initiation and planning, design development, procurement and pre-construction, construction execution, commissioning, and handover. Each phase has defined gate reviews, quality inspections, and stakeholder touchpoints.',
      advanced: '### Project Delivery Methodology\n\n**1. Pre-Construction Phase:**\n- Detailed project plan and master program developed\n- Site establishment and temporary works design\n- Procurement strategy finalised with subcontractor prequalification\n- Construction methodology and sequencing detailed\n- WHS Management Plan and Site Safety Plan developed\n\n**2. Construction Phase:**\n- Weekly progress meetings with client and consultant team\n- Monthly reporting against program, budget, and KPIs\n- Inspection and Test Plans (ITPs) executed per work package\n- Safety inspections and audits (weekly minimum)\n- Quality inspections at defined hold points\n\n**3. Commissioning & Handover:**\n- Systematic commissioning of all services\n- As-built documentation preparation\n- Operations and maintenance manuals\n- Training for client facility team\n- Practical completion inspection and defects listing\n\n**4. Post-Completion:**\n- Defects liability period management\n- 3-month, 6-month, and 12-month post-completion reviews\n- Lessons learned report and continuous improvement feedback',
      premium: '### Integrated Project Delivery Approach\n\n{companyName} employs an Integrated Project Delivery (IPD) methodology that aligns all stakeholders around shared goals, collaborative decision-making, and collective accountability.\n\n### Project Lifecycle Framework\n\n#### Stage 1: Inception & Definition\n- Client brief validation and scope confirmation\n- Site conditions assessment and geotechnical review\n- Stakeholder mapping and engagement plan\n- Regulatory pathway assessment (DA, CC, PCA engagement)\n- Risk identification and initial risk register\n\n#### Stage 2: Design & Planning\n- Design team coordination (architect, structural, services, civil)\n- Value management workshops (target cost validation)\n- BIM Level 2 implementation for clash detection\n- Town planning / development approval management\n- Detailed construction methodology and sequencing\n- Supply chain engagement and early procurement\n\n#### Stage 3: Pre-Construction\n- Subcontractor tender and award (prequalified panel)\n- Detail design completion and approvals\n- Construction Environment Management Plan (CEMP)\n- Traffic Management Plan approval\n- Site establishment and amenities\n- Community notification and engagement\n\n#### Stage 4: Construction\n- **Program Management:** Primavera P6 master program with 4-week lookahead\n- **Quality:** ITPs with hold/witness points at each milestone\n- **Safety:** Site-specific SWMS, daily pre-start, weekly toolbox\n- **Environment:** Environmental monitoring (dust, noise, vibration)\n- **Community:** Complaint management, regular newsletters\n- **Reporting:** Monthly progress, cost, risk, and KPI reports\n\n#### Stage 5: Commissioning & Handover\n- Services commissioning plan and schedule\n- Building tuning and performance verification\n- Documentation: As-builts, O&M manuals, warranties\n- Client training program\n- Practical completion inspection\n- Handover ceremony\n\n#### Stage 6: Post-Completion\n- Defects liability management (24-hour response priority 1)\n- 12-month building performance review\n- Lessons learned documentation\n- Client satisfaction survey\n- Ongoing asset management support'
    },
    qualityControl: {
      standard: '{companyName} operates an ISO 9001:2015 certified Quality Management System. All projects follow documented quality procedures including Inspection and Test Plans (ITPs), material testing, non-conformance reporting, and independent auditing.',
      advanced: '### Quality Management System\n\n**1. ISO 9001:2015 Certified:** Our QMS is externally audited annually. All project personnel are trained in quality procedures.\n\n**2. Inspection and Test Plans (ITPs):**\n- ITPs developed for each work package\n- Hold points, witness points, and review points defined\n- Inspection checklists aligned to specification requirements\n- Electronic sign-off via tablet (real-time quality records)\n\n**3. Material Testing Regime:**\n- Concrete: Slump, temperature, compressive strength (per pour)\n- Steel: Mill certificates, tensile testing, weld inspections\n- Soils: Compaction testing, CBR, particle size distribution\n- Finishes: Colour, texture, slip resistance compliance\n\n**4. Non-Conformance Management:**\n- All non-conformances logged and tracked to closure\n- Root cause analysis for repeat issues\n- Corrective action plans with owner and due date\n- Monthly NCR trend analysis\n\n**5. Quality Performance Metrics:**\n- First-pass quality rate: Target >95%\n- NCR closure within 7 days: Target 100%\n- Defects at practical completion: Target <10 per project',
      premium: '### ISO 9001:2015 + Project-Specific Quality Plan\n\nEach project receives a bespoke Quality Plan that supplements our corporate QMS with project-specific requirements, inspection regimes, and quality KPIs.\n\n### Quality Governance\n\n| Role | Responsibility |\n|---|---|\n| Project Director | Ultimate accountability for quality outcomes |\n| Project Manager | Quality Plan implementation, resource allocation |\n| Quality Manager | Independent audits, NCR management, training |\n| Site Supervisor | ITP execution, inspection coordination |\n| Subcontractors | Work quality compliance per specification |\n\n### Inspection & Testing Schedule\n\n**Structural Works:**\n- Reinforcement inspection prior to concrete pour (100%)\n- Concrete sampling (1 per 50m³ minimum)\n- Post-tensioning inspection and certification\n- Structural steel: Fit-up, welding NDT (10% UT)\n\n**Services:**\n- Hydraulic pressure testing (100% of mains)\n- Electrical megger testing and polarity verification\n- HVAC air balancing and commissioning\n- Fire systems compliance testing\n\n**Finishes:**\n- Sample panels approved prior to commencement\n- Tolerances checked per AS specifications\n- Waterproofing inspection (100% before covering)\n\n### Quality KPIs & Reporting\n\n| KPI | Target | Measurement |\n|---|---|---|\n| ITP Compliance | 100% | ITPs completed vs planned |\n| First-Pass Quality | ≥95% | Inspections passed first time |\n| NCR Closure | 100% within 14 days | Days to close |\n| Defect Density | <5 per $1M | Defects at practical completion |\n| Client Satisfaction | ≥4.5/5.0 | Survey at PC + 12 months |\n\n### Continuous Improvement\n- Monthly quality performance reviews\n- Lessons learned workshops at project milestones\n- Annual management review of QMS effectiveness\n- Benchmarking against industry peers'
    },
    healthSafety: {
      standard: 'Safety is our first priority. Our ISO 45001:2018 certified WHS management system governs every project. We maintain a zero-harm philosophy with rigorous SWMS, daily pre-start meetings, and proactive hazard management.',
      advanced: '### Safety Philosophy\n\nAt {companyName}, safety is not a priority — priorities change. Safety is a value, and values are non-negotiable. Our ISO 45001:2018 certified WHS system provides the framework, but our safety culture makes it effective.\n\n### Key Safety Programs\n\n**1. Site-Specific WHS Plan:** Each project has a tailored WHS Plan developed during pre-construction, addressing project-specific risks.\n\n**2. SWMS for High-Risk Activities:**\n- Working at height\n- Excavation and confined space\n- Demolition\n- Mobile plant operation\n- Electrical work\n- Asbestos removal (if applicable)\n\n**3. Hazard Management Process:**\n- Daily hazard inspections by supervisor\n- Weekly site safety inspections\n- Monthly formal safety audit\n- Hazard reporting and close-out system\n\n**4. Incident Management:**\n- All incidents reported within 1 hour\n- ICAM investigation for serious incidents\n- Corrective actions tracked to closure\n- Return-to-work program for injured workers\n\n**5. Safety Performance (Current):**\n- LTIFR: 0.0 (zero lost time injuries, ongoing)\n- TRIFR: 0.5\n- Medical Treatment Injuries: 1 (rolling 12 months)\n- Safety Training Compliance: 100%',
      premium: '### Safety Vision: Zero Harm, Every Day\n\n{companyName} is unwavering in our commitment to sending every worker home safe, every day. Our safety culture is built on visible leadership, worker engagement, and a relentless focus on risk management.\n\n### Certified Management Systems\n- ISO 45001:2018 — Occupational Health & Safety\n- AS/NZS 4801:2001 — OHS Management (transitioning to ISO 45001)\n- SafetyMAP Level 3 accreditation\n\n### Safety Governance\n\n| Level | Body | Frequency |\n|---|---|---|\n| Strategic | Board Safety Committee | Quarterly |\n| Management | Safety Steering Group | Monthly |\n| Operational | Project Safety Committee | Weekly |\n| Frontline | Daily Pre-Start / Toolbox | Daily |\n\n### Critical Risk Management\n\n| Critical Risk | Control | Verification |\n|---|---|---|\n| Working at Height | Guardrail, harness, SWMS | Daily inspection, permit |\n| Excavation | Shoring, battering, SWMS | Pre-dig inspection, daily |\n| Mobile Plant | Separation, spotter, SWMS | Exclusion zones verified |\n| Electrical | LOTO, SWMS, licensed | Permit required |\n| Demolition | Engineering assessment, SWMS | Structural engineer sign-off |\n\n### Safety Performance (Rolling 12 Months)\n\n| Metric | Result | Industry Average |\n|---|---|---|\n| LTIFR | 0.0 | 3.2 |\n| TRIFR | 0.5 | 8.1 |\n| Near Miss Reports | 89 | N/A |\n| Safety Observations | 450 | N/A |\n| SWMS Compliance | 100% | ~85% |\n| Safety Training Complete | 100% | ~90% |\n\n### Wellbeing Programs\n- Mental health first aid officers on every project\n- Employee Assistance Program (24/7 counselling)\n- Fitness-for-work assessments\n- Fatigue management for extended shifts\n- Flu vaccination program (annual)'
    },
    sustainability: {
      standard: '{companyName} is committed to sustainable construction practices including waste minimisation, use of sustainable materials, energy-efficient design, and compliance with environmental regulations.',
      advanced: '### Environmental & Sustainability Commitment\n\nOur ISO 14001:2015 certified Environmental Management System governs all project activities. We are committed to delivering buildings that are not just structurally excellent, but environmentally responsible.\n\n### Key Sustainability Initiatives\n\n**1. Waste Management:**\n- Site waste management plans for all projects\n- Waste segregation (concrete, steel, timber, plastics, general)\n- Target: <10kg waste per m² of GFA\n- Current: 8.2kg/m² (industry average: 15-20kg/m²)\n\n**2. Sustainable Materials:**\n- Locally sourced materials preferred (reduce transport emissions)\n- Recycled content specified where performance-equivalent\n- Sustainable timber (FSC/PEFC certified)\n- Low-VOC paints, adhesives, and sealants\n\n**3. Energy & Carbon:**\n- Energy-efficient temporary site services (LED lighting, solar)\n- Plant and equipment with lowest available emissions\n- Electric/hybrid options for site vehicles\n- Carbon offset program for unavoidable emissions\n\n**4. Water Management:**\n- Sediment and erosion control plans\n- Water recycling on site where practicable\n- Dust suppression using recycled water',
      premium: '### ISO 14001:2015 + Green Star Commitment\n\n{companyName} is a Green Star-accredited builder committed to delivering projects that achieve best-practice environmental outcomes. Our sustainability framework aligns with the United Nations Sustainable Development Goals.\n\n### Sustainability Governance\n\n**Sustainability Manager:** Dedicated role responsible for project-level environmental performance.\n\n**Green Star Accredited Professionals:** 3 on staff, ensuring projects are designed and built to Green Star standards.\n\n### Net Zero Carbon Roadmap\n\n| Year | Target |\n|---|---|\n| 2025 | Carbon footprint baseline + reduction plan |\n| 2027 | 30% reduction in Scope 1 & 2 emissions |\n| 2028 | All site temporary works powered by renewables |\n| 2030 | 50% reduction in embodied carbon |\n| 2040 | Net zero operations |\n| 2050 | Net zero whole-of-project lifecycle |\n\n### Project Sustainability Targets\n\n**Materials:**\n- Recycled content: Minimum 20% by value\n- Locally sourced (within 100km): Minimum 60%\n- FSC-certified timber: 100%\n- Low-VOC materials: 100%\n\n**Waste:**\n- Construction waste diverted from landfill: Target >90%\n- Current performance: 85-92%\n- Waste management plan for every project\n\n**Energy:**\n- Temporary site lighting: 100% LED\n- Solar-powered site amenities where feasible\n- Hybrid/electric site vehicles: 30% of fleet (target 50% by 2027)\n\n**Water:**\n- Water-efficient fixtures in permanent works\n- Rainwater harvesting incorporated where viable\n- Water-sensitive urban design principles applied\n\n### Community & Social Value\n- Local employment targets (minimum 15% local workforce)\n- Indigenous participation targets\n- Apprenticeship and traineeship commitments\n- Community consultation and engagement program\n- Local supplier and subcontractor participation'
    },
    caseStudies: [
      {
        client: '[Client Name — e.g. Government Education Department]',
        project: 'Secondary School Construction — $12M D&C Project',
        value: '$12M',
        duration: '18 months',
        challenge: 'Design & Construct a 3-storey secondary school building with 24 classrooms, library, and sports hall. Strict deadline tied to school term start. Site constraints included adjacent operating school and limited staging area.',
        solution: 'Early contractor involvement from concept design enabled value engineering. Off-site prefabrication of key elements reduced program by 8 weeks. Comprehensive traffic and noise management minimised disruption to operating school.',
        results: [
          'Completed 2 weeks ahead of program',
          'Final cost within 1.2% of contract sum',
          'Zero safety incidents (200,000+ hours)',
          'Green Star rating: 5 Stars',
          'Client satisfaction: 4.8/5.0',
          '4.5% below industry average cost per m²'
        ]
      },
      {
        client: '[Client Name — e.g. Local Council]',
        project: 'Civic Centre Refurbishment & Extension',
        value: '$4.8M',
        duration: '12 months',
        challenge: 'Heritage-listed building refurbishment with modern extension. Required careful coordination with council operations (building remained occupied), strict heritage compliance, and community engagement.',
        solution: 'Phased construction in sealed zones to minimise disruption. Heritage consultant engaged for all conservation works. Community information sessions held monthly. BIM model created for stakeholder visualisation.',
        results: [
          'Heritage compliance: 100% (heritage council approval)',
          'Zero complaints from neighbouring properties',
          'Completed on budget',
          'DA conditions fully satisfied',
          'Awarded Excellence in Heritage Construction'
        ]
      },
      {
        client: '[Client Name — e.g. Private Healthcare Provider]',
        project: 'Medical Centre Fit-Out & Expansion',
        value: '$2.1M',
        duration: '6 months',
        challenge: 'Fit-out and expansion of an operating medical centre with strict infection control requirements, minimal disruption to patient services, and tight program driven by lease commencement.',
        solution: 'Night and weekend work program to avoid service disruption. Strict infection control protocols during construction (HEPA-filtered containment). Off-site prefabrication of bathrooms and service modules.',
        results: [
          'Completed on program (18-week construction)',
          'Zero service disruption to medical centre',
          'Zero safety incidents',
          'Client satisfaction: 4.9/5.0',
          'Subsequent contract for 2 additional centres'
        ]
      }
    ],
    keyStrengths: [
      '{projectsCompleted}+ projects delivered safely and on time',
      'ISO 9001:2015, ISO 45001:2018, ISO 14001:2015 certified',
      'Licenced builders with relevant state registrations',
      'Green Star Accredited Professionals on staff',
      'Zero lost time injuries across current contracts',
      'Strong financial capacity and bonding capability',
      'Project Bank Account compliant',
      'BIM Level 2 capability',
      'Dedicated design management team',
      'Supply chain with 200+ prequalified subcontractors'
    ]
  },

  Security: {
    name: 'Security & Risk Management Services',
    executiveSummary: {
      standard: '{companyName} is pleased to present this proposal for {tenderTitle}. With {yearsInOperation} years of security industry experience and {employeeCount} licensed professionals, we deliver comprehensive security solutions tailored to {clientName}s specific risk profile and operational requirements.',
      advanced: '{companyName} confidently submits this proposal for {tenderTitle}, bringing {yearsInOperation} years of security industry leadership. Our team of {employeeCount} licensed security professionals, combined with ASIAL-accredited monitoring infrastructure and ISO-certified management systems, ensures that {clientName} receives security services of the highest professional standard.',
      premium: '{companyName} is honoured to respond to {tenderTitle}. As a {yearsInOperation}-year security industry veteran with a workforce of {employeeCount} licensed professionals, state-of-the-art monitoring infrastructure, and a comprehensive suite of security capabilities — from manned guarding and mobile patrol to CCTV, access control, and cybersecurity integration — we offer {clientName} a truly integrated security solution. Our approach combines intelligence-led risk management with operational excellence, ensuring that every security dollar delivers maximum protection value.'
    },
    methodology: {
      standard: 'Our security service model is built on the Observe-Orient-Decide-Act (OODA) loop, ensuring proactive threat detection and rapid response. All officers are licensed, trained, and equipped with modern communication and reporting tools.',
      advanced: '### Security Service Delivery Model\n\n**1. Risk-Led Approach:**\nEvery assignment starts with a comprehensive Security Risk Assessment (SRA) that identifies critical assets, threat vectors, vulnerabilities, and existing controls. The SRA informs the deployment strategy.\n\n**2. Personnel Management:**\n- Rigorous recruitment: Psychometric testing, background checks, reference verification\n- Licensing compliance: All officers hold current, appropriate state licences\n- Training: Certificate II/III in Security Operations + client-specific training\n- Supervision: 1 supervisor per 8 guards (exceeds industry standard of 1:15)\n\n**3. Patrol & Response Protocols:**\n- Randomised patrol patterns to prevent predictability\n- GPS-tracked patrol verification\n- Escalation matrix for incident response\n- Backup response: Nearest available officer + supervisor\n\n**4. Technology Integration:**\n- Real-time incident reporting via secure app\n- Digital patrol logs with photo evidence\n- CCTV integration with remote monitoring\n- Access control system management',
      premium: '### Intelligence-Led Security Operating Model\n\n{companyName} employs an intelligence-led security model that integrates physical, electronic, and procedural controls into a cohesive security architecture.\n\n### Service Delivery Framework\n\n#### 1. Risk & Intelligence\n- Continuous threat assessment and intelligence gathering\n- Monthly security briefings for management\n- Annual comprehensive Security Risk Assessment\n- Crime pattern analysis for predictive deployment\n\n#### 2. Manned Guarding\n- **Tier 1 — Static Guarding:** Fixed posts at critical access points\n- **Tier 2 — Mobile Patrol:** Randomised patrols with GPS verification\n- **Tier 3 — Rapid Response:** Dedicated response team for alarms/incidents\n- **Tier 4 — Event Security:** Specialist teams for crowded places\n\n**Guard Standards:**\n- Certificate II in Security Operations (minimum)\n- Additional endorsements: crowd controller, monitoring, firearms (as required)\n- Client-specific induction before assignment\n- Annual refresher training (use of force, de-escalation, first aid)\n\n#### 3. Electronic Security\n- **CCTV:** HD cameras with video analytics, ANPR, facial recognition (where compliant)\n- **Access Control:** Biometric, card, or mobile-based access\n- **Alarm Monitoring:** ASIAL Grade 1 monitoring centre, 24/7\n- **Integration:** All systems integrated into single PSIM platform\n\n#### 4. Incident Management Protocol\n\n| Incident Type | Response Time | Escalation |\n|---|---|---|\n| Critical (life safety) | <3 minutes | Supervisor, Client, Emergency Services |\n| High (property/asset) | <10 minutes | Supervisor, Client Contact |\n| Medium (suspicious) | <30 minutes | Control Room, Client (next business day) |\n| Low (administrative) | <60 minutes | Daily report |\n\n#### 5. Quality Assurance\n- Weekly site audits by supervisor\n- Monthly quality inspection by Account Manager\n- Quarterly client satisfaction survey\n- Annual management review\n- Mystery shopper / covert testing program'
    },
    qualityControl: {
      standard: '{companyName} operates an ISO 9001:2015 certified Quality Management System that governs recruitment, training, deployment, reporting, and client communication. Regular audits and client feedback ensure continuous improvement.',
      advanced: '### Quality Management System\n\n**1. ISO 9001:2015 Certified:** Our QMS covers all security service delivery processes. Annual external audits and quarterly internal reviews ensure compliance.\n\n**2. Guard Quality Standards:**\n- Pre-employment screening: Police check, psychometric testing, reference checks (3 references)\n- Training: Minimum Certificate II in Security Operations, plus client-specific induction\n- Uniform and equipment: Professional standard issued before first shift\n- Performance management: Monthly one-on-one reviews\n\n**3. Inspection Regime:**\n- Supervisor site inspections (weekly minimum)\n- Account Manager quality audit (monthly)\n- Client walkthroughs (quarterly)\n- Mystery shopper program (quarterly)\n- CCTV audit of guard performance (random)\n\n**4. Reporting & Communication:**\n- Daily incident reports (submitted within shift)\n- Weekly summary report to client contact\n- Monthly detailed report with KPIs and trends\n- Quarterly business review with client management\n\n**5. KPI Performance:**\n- Officer attendance/punctuality: Target 99%\n- Incident response time (critical): Target <5 minutes\n- Patrol compliance: Target 100%\n- Client satisfaction: Target 4.5/5.0',
      premium: '### ISO 9001:2015 + ASIAL Accreditation\n\n{companyName} operates a dual-certified quality framework — ISO 9001:2015 for our management system and ASIAL Accreditation for our monitoring centre. This provides independent verification of service quality at every level.\n\n### Quality Control Framework\n\n| Control Point | Method | Frequency | Owner |\n|---|---|---|---|\n| Guard Recruitment | Psychometric + background + references | Per hire | HR Manager |\n| Guard Training | Cert II + client induction | Pre-deployment | Training Manager |\n| Deployment | Shift briefing + equipment check | Daily | Supervisor |\n| Roving Patrol | GPS verification + incident check | Per shift | Control Room |\n| Incident Response | Time-stamped log + supervisor review | Per incident | Control Room |\n| End of Shift | Report submission + equipment return | Daily | Guard |\n| Post-Shift QA | Report review + CCTV audit (random) | Daily | QA Officer |\n\n### Performance Scorecard\n\n**Service KPIs:**\n- Officer Attendance: 99.4% (Target: 99%)\n- Critical Response Time: Average 3.2 minutes (Target: <5 min)\n- Patrol Compliance: 98.7% (Target: 100%)\n- Report Accuracy: 99.2% (Target: 100%)\n- Client Complaints: 1.2 per 1,000 shifts (Target: <3)\n\n**Training & Compliance:**\n- Licence Currency: 100% (automated expiry tracking)\n- Training Compliance: 99.8% (Target: 100%)\n- Annual Refresher Complete: 100%\n\n### Continuous Improvement\n- Monthly trend analysis of incidents and complaints\n- Quarterly quality improvement plan with client input\n- Annual management review with strategic recommendations\n- Industry benchmarking (ASIAL performance data comparison)'
    },
    healthSafety: {
      standard: '{companyName} is committed to the safety of our security officers and the public. Our ISO 45001:2018 WHS management system covers use-of-force protocols, incident response, fatigue management, and mental health support.',
      advanced: '### WHS Management System\n\n**1. ISO 45001:2018 Certified:** Our WHS system governs all security operations including guarding, mobile patrol, and monitoring centre activities.\n\n**2. Use of Force Policy:**\n- Use of force continuum training for all officers\n- De-escalation as primary response\n- Reporting and review of every use-of-force incident\n- Annual policy review against current case law and standards\n\n**3. Officer Welfare:**\n- Fatigue management for shift workers (maximum shift duration: 12 hours)\n- Mental health support program and EAP access\n- Fitness-for-duty assessments\n- PPE provision (varies by assignment)\n\n**4. Incident Management:**\n- All incidents reported immediately via app\n- Supervisor attends every critical incident\n- Post-incident support and counselling\n- Investigation completed within 48 hours\n\n**5. Safety Performance:**\n- Officer injury rate: Target <2 per 100,000 hours\n- Use of force incidents: Tracked and reviewed monthly\n- Training compliance: 100%',
      premium: '### ISO 45001:2018 + Security-Specific WHS Framework\n\n{companyName} operates a WHS management system that addresses the unique risks of the security industry, including lone worker safety, fatigue, use of force, and mental health.\n\n### Critical Risk Controls\n\n| Risk | Control | Verification |\n|---|---|---|\n| Lone Worker | Duress alarm, check-in protocol, GPS tracking | Daily check-in compliance |\n| Fatigue | Shift max 12 hours, minimum 10 hours between shifts | Rostering system audit |\n| Use of Force | De-escalation training, body-worn cameras (policy) | Incident review |\n| Aggressive Behaviour | Training, PPE, duress alarms, supervisor backup | Training records |\n| Driving (mobile patrol) | Vehicle safety checks, driver training, fatigue mgmt | Daily pre-start |\n\n### Officer Wellbeing Program\n\n**Physical Safety:**\n- Personal protective equipment assigned per role\n- Body-worn cameras (de-escalation and evidence)\n- Duress alarms (personal and vehicle-mounted)\n- Buddy system for high-risk assignments\n\n**Mental Health & Welfare:**\n- 24/7 Employee Assistance Program\n- Mental health first aid training (all supervisors)\n- Critical incident stress debriefing\n- Regular wellbeing checks\n- Peer support network\n\n### Safety Performance (Rolling 12 Months)\n\n| Metric | Result | Target |\n|---|---|---|\n| LTIFR | 0.0 | 0.0 |\n| Medical Treatment Injuries | 2 | <4 |\n| Use of Force Incidents | 3 (all justified per policy) | N/A |\n| Near Miss Reports | 34 | >20 (encouraging reporting) |\n| Training Compliance | 100% | 100% |\n| First Aid Response Time | 4.1 min (median) | <5 min |'
    },
    sustainability: {
      standard: '{companyName} is committed to responsible environmental practices including reducing energy consumption at monitoring centres, minimising waste, and sustainable procurement of equipment and uniforms.',
      advanced: '### Environmental Commitment\n\n**1. ISO 14001:2015 Environmental Management:**\nOur EMS governs monitoring centre operations, fleet management, and procurement.\n\n**2. Key Initiatives:**\n- Monitoring centre powered by 100% renewable energy\n- Paperless reporting (100% digital incident reports)\n- Electric patrol vehicles: 40% of mobile patrol fleet\n- Uniform recycling program\n- Electronic waste disposal certified\n\n**3. Sustainable Procurement:**\n- Energy-efficient CCTV and access control equipment\n- Low-energy LED lighting at all sites\n- Suppliers evaluated on environmental criteria\n\n**4. Carbon Footprint:**\n- Annual carbon reporting (Scope 1 & 2)\n- Carbon offset program for patrol fleet emissions\n- Target: 30% reduction in emissions by 2028',
      premium: '### Environmental & Social Sustainability\n\n{companyName} is committed to operating responsibly and sustainably. Our Environmental Management System (ISO 14001:2015) and Social Sustainability Framework ensure we deliver value beyond security.\n\n### Environmental Performance\n\n**Monitoring Centre (24/7 Operations):**\n- 100% renewable electricity (GreenPower certified)\n- Energy-efficient servers and IT infrastructure\n- HVAC optimisation (AI-controlled)\n- Paperless operations (digital since 2022)\n\n**Patrol Fleet:**\n- 60% hybrid/electric patrol vehicles (target: 100% by 2028)\n- Route optimisation for fuel efficiency\n- Anti-idling policy for all fleet vehicles\n\n**Waste Management:**\n- Uniform recycling program (donated or recycled)\n- E-waste certified disposal for all electronics\n- Office recycling (paper, plastics, organics)\n\n### Social Sustainability\n\n**Our People:**\n- Above-award wages for security officers\n- Career progression pathways (Cert II → Cert III → Management)\n- Diversity and inclusion program (target: 30% female workforce)\n- Indigenous employment program\n\n**Community:**\n- Free security assessments for local community organisations\n- School safety education program\n- Partnership with charity supporting veterans into security careers\n\n### Reporting & Transparency\n- Annual sustainability report published\n- ESG metrics reported to clients on request\n- Modern Slavery Statement (annual)\n- Supply chain due diligence program'
    },
    caseStudies: [
      {
        client: '[Client Name — e.g. Government Property Authority]',
        project: 'Multi-Site Government Building Security Contract',
        value: '$3.2M annually',
        duration: '3 years (renewed)',
        challenge: 'Security services for 12 government buildings including courthouses and administrative offices. Required AGSVA-cleared guards, strict access control, CCTV monitoring, and emergency response capability.',
        solution: 'Dedicated team of 48 licensed officers with AGSVA clearances. Centralised control room for all sites. Integrated CCTV and access control platform. Monthly emergency drills and continuous improvement program.',
        results: [
          '100% AGSVA clearance compliance throughout contract',
          'Zero security breaches across 3 years',
          '99.7% guard attendance rate',
          'Client satisfaction: 4.6/5.0',
          'Contract renewed with 15% expansion in scope',
          'Awarded preferred supplier status'
        ]
      },
      {
        client: '[Client Name — e.g. Shopping Centre Management]',
        project: 'Retail Security & Risk Management',
        value: '$1.1M annually',
        duration: '2 years',
        challenge: 'Security for a major shopping centre (200+ stores, 15,000 daily visitors). Required crowd management, theft prevention, emergency response, and positive customer engagement.',
        solution: 'Customer-service focused security model with 16 officers. CCTV analytics for crowd monitoring and threat detection. Joint patrols with centre management. Community policing approach.',
        results: [
          'Customer incidents reduced by 40% year-on-year',
          'Retail theft losses reduced by 28%',
          'Zero critical security incidents',
          'Positive feedback from retailers and customers',
          'Centre management satisfaction: 4.8/5.0'
        ]
      },
      {
        client: '[Client Name — e.g. Industrial Facility]',
        project: 'Critical Infrastructure Security Upgrade',
        value: '$680,000 (project) + $420,000/year (ongoing)',
        duration: '3 months project, ongoing service',
        challenge: 'Security upgrade for a critical infrastructure facility including perimeter protection, access control overhaul, CCTV upgrade, and 24/7 monitoring. Required compliance with PSPF and security-in-depth principles.',
        solution: 'Designed and installed multi-layer security architecture: perimeter detection, access control with biometrics, HD CCTV with analytics, and integrated PSIM platform. Transitioned to 24/7 monitoring.',
        results: [
          'Security maturity level improved from 2 to 4 (5-level scale)', 
          'Zero perimeter breaches since installation',
          'False alarm rate reduced by 92% (AI analytics)',
          'Operational cost reduced by 18% (automation)',
          'System expanded to 2 additional sites'
        ]
      }
    ],
    keyStrengths: [
      'State-licensed security provider (all relevant jurisdictions)',
      'ASIAL Grade 1 accredited monitoring centre (24/7)',
      'ISO 9001:2015, ISO 45001:2018, ISO 14001:2015 certified',
      'All officers hold current, appropriate state licences',
      'AGSVA-cleared personnel available',
      'Psychometric screening for all security personnel',
      'Body-worn cameras and digital incident reporting',
      'Integrated security platform (PSIM)',
      '24/7 supervision and rapid response capability',
      'Dedicated training facility with Certificate II/III programs'
    ]
  },

  Cleaning: {
    name: 'Cleaning & Hygiene Services',
    executiveSummary: {
      standard: '{companyName} is pleased to submit this proposal for {tenderTitle}. With {yearsInOperation} years of cleaning industry experience, a team of {employeeCount} trained professionals, and ISO-certified management systems, we deliver cleaning services that meet the highest standards of hygiene, quality, and environmental responsibility.',
      advanced: '{companyName} confidently responds to {tenderTitle}, bringing {yearsInOperation} years of commercial cleaning expertise and {employeeCount} trained and vetted cleaning professionals. Our integrated cleaning methodology combines infection control best practices, green cleaning principles, and rigorous quality assurance to deliver facilities that are not just clean, but hygienically safe.',
      premium: '{companyName} is delighted to present this comprehensive proposal for {tenderTitle}. As a {yearsInOperation}-year cleaning industry leader with {employeeCount} dedicated professionals, we deliver facility hygiene solutions that go beyond surface cleaning. Our integrated approach combines certified infection control protocols, green cleaning chemistry, state-of-the-art equipment, and data-driven quality assurance — ensuring that every facility we service meets the highest standards of cleanliness, hygiene, and environmental sustainability.'
    },
    methodology: {
      standard: 'Our cleaning methodology follows a systematic approach: pre-cleaning inspection, cleaning per the defined scope for each area type, post-cleaning inspection, and sign-off. Each facility receives a customised cleaning schedule based on usage patterns and hygiene requirements.',
      advanced: '### Cleaning Service Delivery Model\n\n**1. Area-Specific Methodology:**\n- **Office Areas:** Desk cleaning with microfiber cloths, vacuuming with HEPA-filtered machines, hard floor care, waste removal\n- **Washrooms:** Sanitise and disinfect all surfaces, restock consumables, deep clean schedule\n- **Kitchen/Break Areas:** Clean and sanitise all surfaces, appliance cleaning, waste removal\n- **High-Touch Points:** Disinfected every 2-4 hours (frequency based on traffic)\n\n**2. Colour Coding System:**\n- Red: Washrooms and sanitary areas\n- Blue: General office areas\n- Green: Kitchen and food preparation\n- Yellow: Clinical and isolation areas\n\n**3. Cleaning Frequencies:**\n- Daily: Surface cleaning, vacuuming, waste removal, restroom servicing\n- Weekly: Deep clean of kitchens, window cleaning (internal), hard floor machine clean\n- Monthly: Carpet spot cleaning, high-level dusting, deep clean restrooms\n- Quarterly: Carpet steam cleaning, floor stripping/sealing, pressure washing\n\n**4. Infection Control:**\n- Hospital-grade disinfectants (TGA-approved)\n- Contact time compliance (disinfectant dwell time measured)\n- Hand hygiene compliance for all staff\n- Outbreak cleaning protocols documented and trained',
      premium: '### Integrated Cleaning & Hygiene System\n\n{companyName} operates a Total Hygiene Management (THM) model that integrates cleaning, infection control, waste management, and environmental sustainability into a single, cohesive service delivery framework.\n\n### Service Delivery Framework\n\n#### 1. Zoned Cleaning Approach\n\n| Zone | Cleaning Level | Disinfection Frequency | Equipment |\n|---|---|---|---|\n| Reception/Public | Premium | 4x daily (touch points) | Microfiber + UV-C wand |\n| Open Office | Standard | 2x daily (touch points) | HEPA vacuum, microfiber |\n| Private Offices | Standard | Daily | Microfiber, microfiber mop |\n| Washrooms | Intensive | 4x daily + deep clean | Colour-coded system |\n| Kitchen/Break | Food-safe | 3x daily | Green zone system |\n| Clinical/Healthcare | Clinical | Per clinical protocol | Clinical-grade disinfectants |\n| Industrial | Heavy | Daily + periodic | Industrial equipment |\n\n#### 2. Advanced Technologies\n\n**Equipment:**\n- HEPA-filtered vacuum cleaners (captures 99.97% of particles)\n- Microfiber cloths and mops (reduces chemical use by 95%)\n- Electrostatic sprayers for rapid disinfection\n- UV-C sanitisation devices for sensitive areas\n- Automated floor scrubbers with eco-mode\n\n**Technology:**\n- Digital quality inspection app (real-time scoring)\n- Chemical dispensing system (automatic dilution control)\n- Staff scheduling and GPS verification\n- Client portal with live reporting\n\n#### 3. Infection Control Program\n\n**Standard Cleaning:** Hospital-grade disinfectant with 5-minute contact time\n**Enhanced Cleaning (Flu Season):** Increased frequency, extended contact time\n**Outbreak Response:** ATP bioluminescence testing, deep clean protocol, independent verification\n\n#### 4. Quality Assurance Cycle\n1. Clean per specification\n2. Supervisor inspection (daily random)\n3. Digital QA audit (weekly, quantifiable scoring)\n4. Client walkthrough (monthly)\n5. Corrective action (within 2 hours of identification)\n6. Monthly trend analysis\n7. Quarterly business review\n8. Annual program optimisation'
    },
    qualityControl: {
      standard: 'Our ISO 9001:2015 QMS ensures consistent quality across all sites. Each cleaning task is defined in a scope of works with clear standards. Supervisors conduct regular inspections using a quantifiable scoring system.',
      advanced: '### Quality Management System\n\n**1. ISO 9001:2015 Certified:** All cleaning operations governed by our certified QMS.\n\n**2. Inspection Methodology:**\n- 50-point inspection checklist covering all areas\n- Scoring system: 1-5 scale (3 = acceptable, 4 = good, 5 = excellent)\n- Minimum acceptable score: 4.0 (Good)\n- Immediate corrective action for scores below 3.0\n\n**3. Inspection Frequency:**\n- Cleaning staff: Self-inspection (daily)\n- Supervisor: Site inspection (weekly)\n- Account Manager: QA audit (monthly)\n- Client walkthrough (monthly or as required)\n- Independent audit (quarterly)\n\n**4. Corrective Action Process:**\n1. Issue identified (inspection, client complaint, or audit)\n2. Immediate rectification within 2 hours\n3. Root cause analysis (within 24 hours)\n4. Corrective action implemented\n5. Follow-up inspection within 48 hours\n6. Trend logged for monthly analysis\n\n**5. Quality KPIs:**\n- Cleaning quality score: Target 4.2/5.0+\n- Client satisfaction: Target 4.5/5.0\n- Complaint response: Target <2 hours\n- Re-inspection pass rate: Target 100%',
      premium: '### ISO 9001:2015 + Project-Specific QA Plan\n\nEach facility receives a tailored Quality Assurance Plan that defines standards, inspection frequencies, and performance targets specific to the site.\n\n### Quality Assurance Framework\n\n| Level | Inspection Type | Frequency | Method | Scoring |\n|---|---|---|---|---|\n| 1 | Staff self-check | Daily | Digital checklist | Pass/Fail |\n| 2 | Supervisor audit | Weekly | 50-point scorecard | 1-5 scale |\n| 3 | Account Manager QA | Monthly | 100-point audit | % score |\n| 4 | Independent audit | Quarterly | ISO-based audit | Compliant/Non-compliant |\n| 5 | Client walkthrough | Monthly | Joint inspection | Qualitative feedback |\n\n### Digital Quality Scoring System\n\nOur proprietary QA app allows real-time inspection scoring with photo evidence. Scores are tracked over time to identify trends and training needs.\n\n**Scoring Categories:**\n- Visual cleanliness (appearance)\n- Hygiene standards (ATP testing where applicable)\n- Odour control\n- Consumable levels\n- Equipment condition\n- Staff conduct and presentation\n\n### Performance Scorecard (Sample)\n\n| Metric | Target | Measurement |\n|---|---|---|\n| Cleaning Quality Score | ≥ 90% | Monthly independent audit |\n| Client Satisfaction | ≥ 4.5/5.0 | Quarterly survey |\n| Complaint Response Time | < 2 hours | System tracked |\n| Complaint Resolution | < 24 hours | System tracked |\n| Staff Attendance | ≥ 98% | Payroll system |\n| Training Compliance | 100% | Training records |\n| Chemical Usage Variance | ± 5% of budget | Consumption tracking |\n\n### Continuous Improvement\n- Monthly performance dashboard shared with client\n- Quarterly business review with trends and recommendations\n- Annual program review and optimisation\n- Client satisfaction survey (quarterly)\n- Benchmarking against industry standards (ISSA, BSCAA)'
    },
    healthSafety: {
      standard: '{companyName} prioritises the health and safety of our staff and the building occupants. Our ISO 45001:2018 WHS system covers chemical safety, manual handling, infection control, and personal protective equipment.',
      advanced: '### WHS Management System\n\n**1. ISO 45001:2018 Certified:** Our WHS system covers all cleaning operations including chemical handling, manual tasks, and infection control.\n\n**2. Chemical Safety:**\n- All chemicals have current Safety Data Sheets (SDS)\n- Dilution control systems prevent concentrated chemical handling\n- Colour-coded chemical storage\n- Spill response kit on every cleaning cart\n- Annual chemical refresher training\n\n**3. Manual Handling:**\n- Risk assessments for all manual tasks\n- Mechanical aids provided where practicable\n- Training in safe manual handling techniques\n- Team lifting policy for heavy items\n\n**4. PPE Requirements:**\n- Uniform and slip-resistant footwear (provided)\n- Gloves (task-appropriate: latex, nitrile, rubber)\n- Safety glasses (when using chemicals)\n- Face masks (when required)\n\n**5. Incident Management:**\n- All incidents reported within 1 hour\n- First aid trained staff on every shift\n- Investigation and corrective action within 48 hours\n- Return-to-work program\n\n**6. Safety Performance:**\n- LTIFR: 0.0\n- First aid incidents: Tracked monthly\n- Training compliance: 100%',
      premium: '### ISO 45001:2018 + Cleaning-Specific WHS Framework\n\n{companyName} operates a WHS management system specifically designed for the cleaning industry, addressing the unique risks of chemical handling, infection exposure, manual tasks, and lone working.\n\n### Critical Risk Controls\n\n| Risk | Control | Verification |\n|---|---|---|\n| Chemical Exposure | Dilution control, SDS, PPE, training | Monthly audit |\n| Manual Handling | Risk assessment, mechanical aids, training | Pre-task assessment |\n| Slips/Trips/Falls | Wet floor signs, non-slip footwear, immediate drying | Daily inspection |\n| Biological Hazards | Infection control training, PPE, vaccination program | Training records |\n| Lone Working | Check-in/out system, duress protocol, GPS | System compliance |\n| Electrical Safety | Equipment PAT tested, visual inspection | Annual testing + daily visual |\n\n### Chemical Safety Program\n\n**Chemical Management:**\n- All chemicals approved through green procurement policy\n- Globally Harmonised System (GHS) labelling on all containers\n- Dilution control systems standard (eliminates manual mixing)\n- Monthly chemical usage review (environmental + cost efficiency)\n\n**Staff Protection:**\n- Chemical handling training (initial + annual refresher)\n- PPE matrix for each chemical/product type\n- Spill response training (all cleaning staff)\n- Health surveillance for staff handling high-risk chemicals\n\n### Infection Control & Biohazard Safety\n\n**Training (Mandatory):**\n- Infection control principles\n- Blood and bodily fluid spill management\n- Sharps handling and disposal\n- Hand hygiene certification\n\n**Vaccination Program:**\n- Hepatitis B vaccination available\n- Influenza vaccination (annual, free for staff)\n- COVID-19 vaccination encouraged and supported\n\n### Safety Performance\n\n| Metric | Result | Target |\n|---|---|---|\n| LTIFR | 0.0 | 0.0 |\n| First Aid Injuries | 3 (rolling 12 months) | <5 |\n| Chemical Incidents | 0 | 0 |\n| Manual Handling Injuries | 1 | 0 |\n| Training Compliance | 99.8% | 100% |\n| PPE Compliance | 100% (audited) | 100% |\n| Near Miss Reports | 24 (encouraged reporting culture) | >15/year |'
    },
    sustainability: {
      standard: '{companyName} is committed to green cleaning practices. We use environmentally preferred cleaning products, microfibre technology to reduce chemical and water usage, and implement waste minimisation and recycling programs.',
      advanced: '### Green Cleaning Commitment\n\n{companyName} is certified to ISO 14001:2015 and committed to minimising the environmental impact of our cleaning operations while maximising hygiene outcomes.\n\n**1. Green Cleaning Standards:**\n- All cleaning chemicals environmentally certified (Green Seal, Ecostar, or equivalent)\n- Microfibre technology reduces chemical usage by up to 95%\n- Dilution control systems minimise packaging waste\n- HEPA-filtered vacuuming improves indoor air quality\n\n**2. Waste Management:**\n- General waste, recycling, and organics separation\n- Client-specific waste stream management\n- Waste diversion reporting (monthly)\n- Target: >80% waste diversion from landfill\n\n**3. Water Conservation:**\n- Microfibre systems reduce water consumption by 90%\n- Low-water cleaning equipment\n- Water-efficient dispensing systems\n\n**4. Chemical Reduction:**\n- Chemical use intensity tracked per m²\n- Annual reduction target: 5%\n- Electrolysed water systems (where feasible)',
      premium: '### ISO 14001:2015 + Green Building Certification Support\n\n{companyName} is a leader in sustainable cleaning, holding ISO 14001:2015 certification and supporting clients in achieving and maintaining green building certifications (Green Star, NABERS, LEED).\n\n### Green Cleaning Program\n\n**Certified Products:**\n- 100% of cleaning chemicals carry environmental certification\n- Green Seal, Ecostar, or EU Ecolabel equivalent\n- All paper products (toilet tissue, hand towels) FSC-certified or recycled content\n- Plastic waste from concentrates reduced by 95% via dilution systems\n\n**Equipment:**\n- HEPA-filtered vacuums with 99.97% particle capture\n- Microfibre: 100% of cleaning textiles (reusable up to 500 washes)\n- Battery-powered equipment with lithium-ion batteries\n- Low-noise equipment (under 60dB for daytime cleaning)\n\n### Environmental Performance\n\n| Metric | Current | Target |\n|---|---|---|\n| Green certified chemicals | 100% | 100% |\n| Microfibre usage | 100% | 100% |\n| Waste diversion rate | 78% | >85% |\n| Water reduction (vs traditional) | 85% | 90% |\n| Chemical reduction (per m²/year) | 12% | 15% |\n| Carbon neutral operations | In progress | 2027 |\n\n### Social Value\n\n**Workforce:**\n- Above-award wages for all cleaning staff\n- Full-time, permanent roles (minimum 30 hours/week guaranteed)\n- Career progression pathway (cleaner → supervisor → manager)\n- EAP and wellbeing programs\n\n**Community:**\n- Social enterprise partnerships for employment pathways\n- School-based traineeships (cleaning apprenticeships)\n- Free hygiene audits for community organisations\n- Pro bono cleaning for charities (100 hours/year)\n\n### Certifications & Reporting\n- ISO 14001:2015 Environmental Management\n- Green Building Council of Australia member\n- Modern Slavery Statement\n- Annual sustainability report published\n- Supply chain sustainability assessment (annual)'
    },
    caseStudies: [
      {
        client: '[Client Name — e.g. Government Education Department]',
        project: 'Multi-School Cleaning Contract (15 sites)',
        value: '$890,000 annually',
        duration: '3 years',
        challenge: 'Cleaning services across 15 schools including primary, secondary, and special education facilities. Required Working with Children Checks for all staff, infection control compliance, and minimal disruption during school hours.',
        solution: 'Dedicated teams assigned to each school cluster. Enhanced infection control protocols for special education settings. Night cleaning for classrooms, day cleaning for common areas. Regular communication with school principals.',
        results: [
          '100% Working with Children Check compliance',
          'Cleaning quality score: 91% (independently audited)',
          'Zero infection outbreaks linked to facility hygiene',
          'Principal satisfaction: 4.6/5.0',
          'Contract extended to 18 sites in year 2'
        ]
      },
      {
        client: '[Client Name — e.g. Corporate Office Tower]',
        project: 'Premium Office Cleaning — 25,000m² Commercial Building',
        value: '$520,000 annually',
        duration: '2 years',
        challenge: 'Premium cleaning for a 25-storey commercial office tower with strict sustainability requirements (NABERS 5-star target), after-hours cleaning, and high-profile tenants.',
        solution: 'Green cleaning program with 100% certified products. Night cleaning team of 18. Day porter service for common areas. Real-time QA inspections with tenant feedback portal. Monthly sustainability reporting.',
        results: [
          'NABERS 5-star rating achieved and maintained',
          'Tenant satisfaction: 4.7/5.0',
          'Zero complaints from building management',
          'Waste diversion rate: 82%',
          'Chemical use reduced by 25% year-on-year'
        ]
      },
      {
        client: '[Client Name — e.g. Healthcare Facility]',
        project: 'Hospital Environmental Services',
        value: '$1.4M annually',
        duration: '3 years',
        challenge: 'Full environmental services for a 200-bed hospital including infection-sensitive areas (ICU, operating theatres, isolation rooms). Required compliance with AS/NZS 4187, infection control accreditation, and 24/7 service coverage.',
        solution: 'Clinical-grade cleaning protocols in all patient areas. Dedicated infection control team for high-risk zones. ATP bioluminescence testing for cleanliness verification. 24/7 coverage with rapid response team.',
        results: [
          '100% infection control audit pass rate',
          'Staphylococcus aureus rates reduced by 35%',
          'Zero cleanliness-related adverse events',
          'Patient satisfaction with cleanliness: 92%',
          'Accreditation compliance: 100%'
        ]
      }
    ],
    keyStrengths: [
      'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certified',
      'Green cleaning certified (Green Seal / Ecostar program)',
      'Hospital-grade infection control protocols',
      'All staff have Working with Children Check and police clearance',
      'Microfibre technology (95% less chemical, 90% less water)',
      'HEPA-filtered vacuums for improved indoor air quality',
      'Digital quality inspection and real-time reporting',
      'Outbreak response protocol with ATP testing',
      'Full-time permanent roles with above-award wages',
      'Dedicated account management with monthly reporting'
    ]
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function interpolate(text, data) {
  if (!text) return '';
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    if (data[key] !== undefined && data[key] !== null) return String(data[key]);
    return `[${key}]`;
  });
}

function getTierDepth(tierName) {
  const config = TIER_CONFIG[tierName];
  return config ? config.depth : 'standard';
}

function getSectionCount(tierName) {
  const config = TIER_CONFIG[tierName];
  return config ? config.sections : 6;
}

// ============================================
// PROPOSAL GENERATOR
// ============================================

/**
 * Generate a complete tender proposal document.
 * @param {Object} formData - Client intake form data
 * @param {string} [tier] - Pricing tier name
 * @returns {string} Complete markdown proposal
 */
export const generateProposal = (formData, tier) => {
  const industry = formData.industry || 'Logistics';
  const template = industryTemplates[industry] || industryTemplates.Logistics;
  const depth = getTierDepth(tier || formData.tier || 'Single Proposal Pack');
  const sectionCount = getSectionCount(tier || formData.tier || 'Single Proposal Pack');

  const d = {
    ...formData,
    clientName: formData.clientName || formData.requirements?.substring(0, 50) || '[Client Name]',
  };

  const sections = [];

  // SECTION 1: Executive Summary (always included)
  sections.push(`# TENDER RESPONSE: ${d.tenderTitle || 'Proposal'}
**Prepared by:** ${d.companyName}
**Industry:** ${industry}
**Document Tier:** ${TIER_CONFIG[tier || formData.tier || 'Single Proposal Pack']?.label || 'Standard'}
**Date:** ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}

---

## 1. Executive Summary

${interpolate(template.executiveSummary[depth] || template.executiveSummary.standard, d)}
`);

  // SECTION 2: Company Overview
  if (sectionCount >= 2) {
    const extra = depth === 'standard' ? '' : `\n\n### Our Track Record\n${d.companyName} has successfully delivered numerous projects over ${d.yearsInOperation || ''} years.`;
    sections.push(`## 2. Company Overview & Capabilities

${interpolate(`${d.companyName} is a leading provider of ${industry.toLowerCase()} services with ${d.yearsInOperation || 'extensive'} years of industry experience.${extra}`, d)}

### Key Strengths
${template.keyStrengths.map(s => `- ${interpolate(s, d)}`).join('\n')}
`);
  }

  // SECTION 3: Methodology
  if (sectionCount >= 3) {
    sections.push(`## 3. Proposed Solution & Methodology

${interpolate(template.methodology[depth] || template.methodology.standard, d)}
`);
  }

  // SECTION 4: Quality Control
  if (sectionCount >= 4) {
    sections.push(`## 4. Quality Control & Assurance Framework

${interpolate(template.qualityControl[depth] || template.qualityControl.standard, d)}
`);
  }

  // SECTION 5: Health & Safety
  if (sectionCount >= 5) {
    sections.push(`## 5. Health, Safety & Compliance

${interpolate(template.healthSafety[depth] || template.healthSafety.standard, d)}
`);
  }

  // SECTION 6: Sustainability
  if (sectionCount >= 6) {
    sections.push(`## 6. Sustainability & Environmental Commitment

${interpolate(template.sustainability[depth] || template.sustainability.standard, d)}
`);
  }

  // SECTION 7: Case Studies
  if (sectionCount >= 7) {
    const caseStudies = template.caseStudies.slice(0, depth === 'standard' ? 1 : depth === 'advanced' ? 2 : 3);
    const caseContent = caseStudies.map((cs, i) => {
      return `### Case Study ${i + 1}: ${interpolate(cs.project, d)}

**Client:** ${interpolate(cs.client, d)}
**Project Value:** ${cs.value}
**Duration:** ${cs.duration}

**Challenge:** ${interpolate(cs.challenge, d)}

**Solution:** ${interpolate(cs.solution, d)}

**Key Results:**
${cs.results.map(r => `- ${interpolate(r, d)}`).join('\n')}
`;
    }).join('\n');

    sections.push(`## 7. Past Performance & Case Studies

${caseContent}

*Replace bracketed client names with actual references before submission.*
`);
  }

  // SECTION 8: Pricing
  if (sectionCount >= 8) {
    sections.push(`## 8. Pricing Schedule

| Item | Description | Amount |
|---|---|---|
| Service Fees | As per scope of works | ${d.budget || 'To be confirmed'} |
| Setup Costs | One-off establishment | Included |
| Management Fee | Ongoing account management | Included |

**Payment Terms:** 30 days from invoice.

*All prices exclusive of GST unless otherwise stated.*
`);
  }

  // SECTION 9: Personnel
  if (sectionCount >= 9) {
    sections.push(`## 9. Key Personnel & Management

| Role | Experience | Responsibility |
|---|---|---|
| Account Manager | 10+ years | Client relationship, performance mgmt |
| Operations Manager | 15+ years | Service delivery, resourcing |
| QA Officer | 8+ years | Inspection, audit, improvement |
| Safety Manager | 12+ years | WHS compliance, incident mgmt |

Detailed CVs provided in appendices.
`);
  }

  // SECTION 10: Risk Management
  if (sectionCount >= 10) {
    sections.push(`## 10. Risk Management & Business Continuity

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Staff shortage | Low | High | Relief pool, cross-training |
| Equipment failure | Low | Medium | Maintenance, backup equipment |
| Supply disruption | Low | Medium | Multiple suppliers, buffer |
| Client changes | Medium | Medium | Regular reviews, change process |

Business Continuity Plan tested annually.
`);
  }

  // SECTION 11: Compliance
  if (sectionCount >= 11) {
    sections.push(`## 11. Compliance Schedule

| # | Requirement | Compliant | Ref |
|---|---|---|---|
| 1 | Signed tender form | Yes | Cover page |
| 2 | PL Insurance >$20M | Yes | Appendix B |
| 3 | Workers Comp | Yes | Appendix B |
| 4 | WHS Plan | Yes | Section 5 |
| 5 | Quality System | Yes | Section 4 |
| 6 | Environmental Plan | Yes | Section 6 |
| 7 | Diversity Policy | Yes | Appendix A |
| 8 | Modern Slavery | Yes | Appendix A |
| 9 | Licences | Yes | Section 2 |
| 10 | Financials | Yes | Appendix C |
`);
  }

  // SECTION 12: Appendices
  if (sectionCount >= 12) {
    sections.push(`## 12. Appendices

**A** — Policies (WHS, Quality, Environment, Diversity, Code of Conduct, Mod Slavery)
**B** — Certificates & Insurance (ISO 9001, 45001, 14001, PL, WC, PI, Licences)
**C** — Financial Statements (2 years audited)
**D** — Training Records & CVs
**E** — Client References (3 available on request)
`);
  }

  const footer = `\n---\n*Generated by BidForge AI for ${d.companyName || '[Company Name]'}.*\n*Tier: ${(TIER_CONFIG[tier || formData.tier || 'Single Proposal Pack']?.label) || 'Standard'}*\n*${new Date().toISOString()}*\n*Copyright ${new Date().getFullYear()} BidForge AI*`;

  return sections.join('\n\n') + footer;
};

// ============================================
// ADDITIONAL EXPORTS
// ============================================

export const getIndustries = () => Object.keys(industryTemplates);

export const getTiers = () => Object.entries(TIER_CONFIG).map(([n, c]) => ({
  name: n, depth: c.depth, label: c.label, sections: c.sections,
}));

export const getIndustryOverview = (industry) => {
  const t = industryTemplates[industry];
  return t ? { name: t.name, strengths: t.keyStrengths, caseStudies: t.caseStudies.length } : null;
};
