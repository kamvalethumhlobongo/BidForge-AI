# BidForge AI — Proposal Generation Engine

## File Structure

```
proposal-engine/
├── index.js                           # Central exports
├── templates/
│   ├── logisticsTemplate.js           # Logistics & Transport (8 sections)
│   ├── constructionTemplate.js        # Construction & Building (9 sections)
│   ├── securityTemplate.js            # Security & Risk Management (9 sections)
│   └── cleaningTemplate.js            # Cleaning & Hygiene (9 sections)
├── utils/
│   └── aiGenerator.js                 # Core AI Prompt & Generation Engine
└── research/
    ├── governmentTenderCompliance.md   # Full compliance research document (7.5KB)
    └── govComplianceData.js           # Programmatic compliance data module
```

## System Architecture

### Data Flow
```
Intake Form (web) → validateIntake() → prepareIntakeData() 
    → loadTemplate(industry) → generateProposalPrompts(industry, data)
        → Per-section LLM prompts → assembleProposal(sections) → Document
```

### 1. Intake Schema (INTAKE_SCHEMA in aiGenerator.js)
Contract between frontend form and generator. ~40 fields covering:
- Company info, contact, tender details
- Industry-specific fields (fleet, licences, etc.)
- Certifications, technology, personnel, case studies
- Validation rules (required, type, maxLength)

### 2. Template Structure (Each industry template)
Each template contains:
- **sections[]**: Ordered proposal sections with prompt templates using `{{variable}}` interpolation
- **keywords[]**: Industry-specific terminology for LLM to use
- **complianceRequirements[]**: Mandatory regulatory items

### 3. AI Generator (aiGenerator.js)
- `generateProposalPrompts(industry, data)` — Main entry point
- `buildSystemPrompt()` — Master context (tone, rules, output standards)
- `buildIndustryContext()` — Per-industry regulatory and compliance guidance
- `validateIntake(data)` — Schema validation with error messages
- `interpolateTemplate(template, data)` — Variable replacement engine
- `assembleProposal(sections, data)` — Post-generation assembly
- `getComplianceChecklist(industry)` — Returns compliance requirements

## Per-Industry Details

| Industry | Secs | Keywords | Compliance Items | Key Focus Areas |
|---|---|---|---|---|
| Logistics | 8 | 26 | 8 | NHVAS, CoR, Fleet, Fatigue Mgmt |
| Construction | 9 | 29 | 14 | BCA, SWMS, ISO, Project Bank Accts |
| Security | 9 | 29 | 12 | Security Providers Act, ASIAL, Licensing |
| Cleaning | 9 | 30 | 14 | Infection Control, Green Cleaning, PPE |

## Government Compliance Research
The research document covers:
- Tender types (RFT, RFP, RFQ, EOI) and thresholds
- Standard 9-section document structure
- Mandatory documentation checklist (12 items)
- Common disqualifiers (8 items)
- Scoring methodology (1-5 scale)
- 10 recommended response strategies
- Industry-specific regulatory requirements per industry
- Key legislation and standards references

## Usage Example
```javascript
const aiGen = require('./utils/aiGenerator');

const prompts = aiGen.generateProposalPrompts('logistics', {
  companyName: 'Your Company',
  industry: 'logistics',
  tenderReference: 'RFT-2024-001',
  // ... all required fields
});

// prompts.systemPrompt — Master LLM context
// prompts.sections — Array of per-section prompts
// prompts.complianceChecklist — Items to verify
// prompts.keywords — Industry terminology
```

## Next Steps / Integration Points
1. **Frontend**: Build intake form matching INTAKE_SCHEMA fields
2. **LLM Integration**: Feed section prompts to GPT-4/Claude
3. **Output**: Format generated sections into PDF/Word documents
4. **Payment**: Tie to credit/subscription system
