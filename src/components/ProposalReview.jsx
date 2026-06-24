import React from 'react';
import { Download, CreditCard, CheckCircle, FileText } from 'lucide-react';

const ProposalReview = ({ proposal, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="bg-primary-600 px-8 py-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2 font-bold">
            <FileText className="w-5 h-5" /> Generated Proposal Preview
          </div>
          <div className="text-sm font-medium">Ready for Download after payment</div>
        </div>
        
        <div className="p-8 max-h-[600px] overflow-y-auto bg-slate-50 text-slate-900 font-serif">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
            {proposal}
          </pre>
        </div>

        <div className="p-8 border-t border-slate-800 bg-slate-950 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-1">Unlock Full Document</h4>
            <p className="text-slate-400">Pay $99 to download the high-resolution PDF and Word version.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={onBack}
              className="flex-1 md:flex-none px-6 py-3 border border-slate-700 rounded-full font-semibold hover:bg-slate-900 transition-all text-white"
            >
              Edit Details
            </button>
            <button className="flex-1 md:flex-none px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-900/20">
              Pay with Paystack <CreditCard className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3 text-slate-400 text-sm">
          <CheckCircle className="w-5 h-5 text-primary-500" /> Professional Formatting
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-sm">
          <CheckCircle className="w-5 h-5 text-primary-500" /> Industry Best Practices
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-sm">
          <CheckCircle className="w-5 h-5 text-primary-500" /> Guaranteed Win Potential
        </div>
      </div>
    </div>
  );
};

export default ProposalReview;
