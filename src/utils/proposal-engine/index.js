/**
 * BidForge AI — Prompt & Template Index
 * 
 * Central export point for all industry templates and the AI generator.
 */

// Industry Templates
const logisticsTemplate = require('./templates/logisticsTemplate');
const constructionTemplate = require('./templates/constructionTemplate');
const securityTemplate = require('./templates/securityTemplate');
const cleaningTemplate = require('./templates/cleaningTemplate');

// AI Generator Core
const aiGenerator = require('./utils/aiGenerator');

// Government Compliance Research
const govCompliance = require('./research/govComplianceData');

// Industry Template Registry
const templates = {
  logistics: logisticsTemplate,
  construction: constructionTemplate,
  security: securityTemplate,
  cleaning: cleaningTemplate,
};

module.exports = {
  templates,
  aiGenerator,
  govCompliance,
};
