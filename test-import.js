import { generateProposal } from './src/utils/aiGenerator.js';
console.log('Import successful');
const mockData = { companyName: 'Test Corp', industry: 'Logistics' };
const proposal = generateProposal(mockData, 'Single Proposal Pack');
console.log('Proposal generated:', proposal.substring(0, 100));
