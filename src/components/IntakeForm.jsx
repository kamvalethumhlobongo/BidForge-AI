import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Upload, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const IntakeForm = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'Logistics',
    tenderTitle: '',
    requirements: '',
    contactEmail: '',
    serviceDetails: '',
    budget: '',
    deadline: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const industries = ["Logistics", "Construction", "Security", "Cleaning", "Transport", "Government", "Other"];
  const bbbeeLevels = ["Level 1", "Level 2", "Level 3", "Level 4", "Non-Compliant"];
  const sectors = ["General Services", "Construction & Engineering", "Transport & Fleet", "Security & Guarding", "Cleaning & Hygiene"];

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Basic Information</h2>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Company Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 outline-none transition-all"
                placeholder="e.g. Acme Logistics Ltd"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Industry</label>
              <select 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 outline-none transition-all"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              >
                <option value="">Select industry</option>
                {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
              </select>
            </div>
            {formData.industry === "Government" && (
              <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">B-BBEE Level</label>
                  <select 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 outline-none transition-all"
                    value={formData.bbbee_level}
                    onChange={(e) => setFormData({...formData, bbbee_level: e.target.value})}
                  >
                    <option value="">Select Level</option>
                    {bbbeeLevels.map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Sector</label>
                  <select 
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 outline-none transition-all"
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                  >
                    <option value="">Select Sector</option>
                    {sectors.map(sec => <option key={sec} value={sec}>{sec}</option>)}
                  </select>
                </div>
              </div>
            )}
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Tender Details</h2>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Tender/Proposal Title</label>
              <input 
                type="text" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 outline-none transition-all"
                placeholder="e.g. Government Transport Tender 2024"
                value={formData.tenderTitle}
                onChange={(e) => setFormData({...formData, tenderTitle: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Key Requirements (Optional)</label>
              <textarea 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 outline-none transition-all h-32"
                placeholder="Paste key requirements or points you want to highlight..."
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Service Details</h2>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">Describe your services & USPs</label>
              <textarea 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-primary-500 outline-none transition-all h-32"
                placeholder="What makes your company the best choice?"
                value={formData.serviceDetails}
                onChange={(e) => setFormData({...formData, serviceDetails: e.target.value})}
              />
            </div>
            <div className="p-6 border-2 border-dashed border-slate-700 rounded-xl text-center">
              <Upload className="w-10 h-10 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">Upload your current company profile (Optional)</p>
              <input type="file" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="mt-4 inline-block bg-slate-800 hover:bg-slate-700 px-6 py-2 rounded-full cursor-pointer transition-all">
                Browse Files
              </label>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 text-center py-8"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-2">Ready to Forge!</h2>
            <p className="text-slate-400 mb-8 max-w-sm mx-auto">
              We have all the details needed to build your professional tender response.
            </p>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left">
              <h4 className="font-bold mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-primary-500" /> Summary</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-slate-500">Company:</span><br />{formData.companyName}</div>
                <div><span className="text-slate-500">Industry:</span><br />{formData.industry}</div>
                <div className="col-span-2"><span className="text-slate-500">Tender:</span><br />{formData.tenderTitle}</div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-bold text-primary-500 uppercase">Step {step} of 4</span>
          <span className="text-xs font-bold text-slate-500 uppercase">{Math.round((step / 4) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(step / 4) * 100}%` }}
            className="h-full bg-primary-600"
          />
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl">
        {renderStep()}

        <div className="mt-10 flex justify-between">
          {step > 1 && (
            <button 
              onClick={prevStep}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-all font-semibold"
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </button>
          )}
          {step < 4 ? (
            <button 
              onClick={nextStep}
              className="ml-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold transition-all"
            >
              Next Step <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={() => onComplete(formData)}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-full font-bold text-lg transition-all"
            >
              Generate & Pay $99
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;
