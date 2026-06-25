import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, formData, leadId } = location.state || {};

  const [step, setStep] = useState(1); // 1: Order Summary, 2: Bank Transfer Portal, 3: Success
  const [orderId, setOrderId] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [proofFile, setProofFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // If no plan is selected, redirect to landing
  if (!plan) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center">
          <div className="text-4xl mb-4">🛒</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Plan Selected</h3>
          <p className="text-slate-500 mb-6">Please select a package from our landing page to continue with your checkout.</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-blue-dark transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const plans = {
    'Single Proposal Pack': { price: 'R225', original: 'R750', features: ['Single high-quality proposal', 'Industry-tailored AI', '24-hour turnaround', 'PDF + DOCX download'] },
    'Winning Bid Package': { price: 'R1,050', original: 'R3,500', features: ['Full tender response', 'Compliance matrix mapping', 'Evaluation criteria mapping', 'Professional branding'] },
    'Tender Accelerator': { price: 'R1,500/mo', original: 'R5,000/mo', features: ['Unlimited capability updates', 'Priority 12-hour turnaround', 'Dedicated account manager', '2 custom templates'] },
    'Bid Desk': { price: 'R4,500+', original: 'R15,000+', features: ['Expert-reviewed submissions', 'Senior bid writer oversight', 'Complex multi-part tenders', 'Full compliance mapping'] }
  };

  const selectedPlanDetails = plans[plan] || plans['Single Proposal Pack'];

  const handleProceed = async () => {
    setUploading(true);
    try {
      const amount = parseFloat(selectedPlanDetails.price.replace('R', '').replace(',', ''));
      const response = await axios.post('/api/orders', {
        lead_id: leadId,
        plan_type: plan,
        amount: amount
      });
      setOrderId(response.data.id);
      setBankDetails(response.data.bank_details);
      setStep(2);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to initiate order. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileUpload = (e) => {
    setProofFile(e.target.files[0]);
  };

  const handleSubmitProof = async () => {
    if (!proofFile) {
      alert('Please select a file first.');
      return;
    }
    setUploading(true);
    
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('pop', proofFile);
      await axios.post(`/api/orders/${orderId}/upload-pop`, formDataUpload);
      setStep(3);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error uploading proof:', error);
      alert('Failed to upload proof. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <img src="/branding/logo.png" alt="BidForge AI" className="h-12 w-auto mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-brand-blue">Secure Payment Portal</h2>
          <p className="text-slate-500 mt-2">Professional Tender Solutions exclusively via Secure EFT.</p>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className={`flex items-center ${step >= 1 ? 'text-brand-blue' : 'text-slate-300'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${step >= 1 ? 'border-brand-blue bg-brand-blue text-white' : 'border-slate-300'}`}>1</span>
            <span className="ml-2 font-bold hidden sm:block">Summary</span>
          </div>
          <div className={`h-1 w-12 mx-4 ${step >= 2 ? 'bg-brand-blue' : 'bg-slate-200'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-brand-blue' : 'text-slate-300'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${step >= 2 ? 'border-brand-blue bg-brand-blue text-white' : 'border-slate-300'}`}>2</span>
            <span className="ml-2 font-bold hidden sm:block">Transfer Portal</span>
          </div>
          <div className={`h-1 w-12 mx-4 ${step >= 3 ? 'bg-brand-blue' : 'bg-slate-200'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-brand-blue' : 'text-slate-300'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${step >= 3 ? 'border-brand-blue bg-brand-blue text-white' : 'border-slate-300'}`}>3</span>
            <span className="ml-2 font-bold hidden sm:block">Verification</span>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Selected Package</p>
                  <p className="text-xl font-black text-brand-blue">{plan}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-brand-blue">{selectedPlanDetails.price}</p>
                  <p className="text-xs text-slate-400 line-through">Was {selectedPlanDetails.original}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="font-bold text-slate-900">Included Features:</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {selectedPlanDetails.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="text-brand-gold font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-8 mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-500 font-medium">Subtotal</span>
                  <span className="text-slate-900 font-bold">{selectedPlanDetails.price}</span>
                </div>
                <div className="flex justify-between mb-2 text-emerald-600 font-medium">
                  <span>EFT Transaction Discount</span>
                  <span>- R0.00</span>
                </div>
                <div className="flex justify-between text-2xl font-black mt-4 pt-4 border-t border-slate-100">
                  <span className="text-brand-blue">Total to Pay</span>
                  <span className="text-brand-blue">{selectedPlanDetails.price}</span>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-200">
                <div className="flex gap-4 items-start">
                  <div className="bg-brand-blue text-white p-2 rounded-lg text-lg">🔒</div>
                  <div>
                    <p className="font-bold text-brand-blue">Direct Bank Transfer Only</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      For your security and our transparency, we exclusively accept EFT payments. No credit card data is ever stored or processed on our servers.
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleProceed}
                disabled={uploading}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg ${uploading ? 'bg-slate-100 text-slate-400' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/20 hover:scale-[1.02]'}`}
              >
                {uploading ? 'Generating Secure Reference...' : 'Proceed to Transfer Portal →'}
              </button>
            </div>
          </div>
        )}

        {step === 2 && bankDetails && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Bank Transfer Portal</h3>
                    <p className="text-slate-500 text-sm mt-1">Please use the details below to complete your payment.</p>
                  </div>
                  <div className="bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full text-xs font-bold border border-brand-gold/20">
                    SECURE EFT
                  </div>
                </div>
                
                <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8 relative overflow-hidden shadow-2xl">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-brand-blue opacity-10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-brand-gold opacity-10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                       <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Beneficiary Bank</span>
                       <span className="font-black text-brand-gold uppercase tracking-wider">{bankDetails.bank}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-1 group">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Account Name</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold">{bankDetails.account_name}</p>
                          <button 
                            onClick={() => copyToClipboard(bankDetails.account_name, 'name')}
                            className="text-xs text-brand-gold hover:text-white transition-colors uppercase font-bold"
                          >
                            {copiedField === 'name' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1 group">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Account Number</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold tracking-widest">{bankDetails.account_number}</p>
                          <button 
                            onClick={() => copyToClipboard(bankDetails.account_number, 'account')}
                            className="text-xs text-brand-gold hover:text-white transition-colors uppercase font-bold"
                          >
                            {copiedField === 'account' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1 group">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Branch Code</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold tracking-widest">{bankDetails.branch_code}</p>
                          <button 
                            onClick={() => copyToClipboard(bankDetails.branch_code, 'branch')}
                            className="text-xs text-brand-gold hover:text-white transition-colors uppercase font-bold"
                          >
                            {copiedField === 'branch' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1 group">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest italic">Unique Reference (Required)</p>
                        <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-brand-gold/30">
                          <p className="text-lg font-black text-brand-gold uppercase tracking-tighter">{bankDetails.reference}</p>
                          <button 
                            onClick={() => copyToClipboard(bankDetails.reference, 'ref')}
                            className="text-xs bg-brand-gold text-brand-blue px-2 py-1 rounded font-black hover:bg-brand-gold-light transition-colors"
                          >
                            {copiedField === 'ref' ? '✓' : 'COPY'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                       <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Amount to Transfer</span>
                       <span className="text-2xl font-black text-white">{selectedPlanDetails.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span>📤</span> Step 2: Upload Proof of Payment
                    </h4>
                    <p className="text-sm text-slate-500 mb-4">Verification is instant once you upload your official bank receipt.</p>
                    
                    <div className="group relative border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center hover:border-brand-blue hover:bg-slate-50 transition-all duration-300">
                      <input 
                        type="file" 
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        accept="image/*,.pdf"
                      />
                      <div className="space-y-3 relative z-0">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-3xl group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                          {proofFile ? '✅' : '📄'}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-lg">
                            {proofFile ? proofFile.name : 'Click or drag to upload receipt'}
                          </p>
                          <p className="text-sm text-slate-400 mt-1">Accepts PDF, JPG, or PNG (Max 10MB)</p>
                        </div>
                        {proofFile && (
                          <div className="text-emerald-600 text-xs font-bold animate-pulse">
                            File ready for secure upload
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmitProof}
                    disabled={uploading || !proofFile}
                    className={`w-full py-6 rounded-2xl font-black text-xl transition-all shadow-xl ${uploading || !proofFile ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/30 hover:scale-[1.01]'}`}
                  >
                    {uploading ? 'Securing Transaction...' : 'Complete Payment & Start Drafting →'}
                  </button>

                  <div className="flex items-center justify-center gap-8 py-4 border-t border-slate-100">
                    <div className="flex flex-col items-center gap-1 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                       <span className="text-2xl">🏦</span>
                       <span className="text-[10px] font-black uppercase text-slate-500">Instant Verification</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                       <span className="text-2xl">🛡️</span>
                       <span className="text-[10px] font-black uppercase text-slate-500">256-bit Secure</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                       <span className="text-2xl">🏢</span>
                       <span className="text-[10px] font-black uppercase text-slate-500">Standard Bank</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue text-white p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
              <div className="text-4xl">💡</div>
              <div className="flex-1 text-center md:text-left">
                <p className="font-bold text-lg mb-1 text-brand-gold">Why only EFT?</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We process high-value government tender documentation. Direct bank transfer ensures the highest level of AML (Anti-Money Laundering) compliance and security for your corporate funds.
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 text-center p-12 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8 text-5xl">
              ✓
            </div>
            <h3 className="text-4xl font-black text-brand-blue mb-4 tracking-tighter">Transaction Secured!</h3>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed max-w-xl mx-auto">
              Thank you, {formData?.name || 'Valued Partner'}. We've received your proof of payment for the <span className="font-extrabold text-slate-900 border-b-2 border-brand-gold">{plan}</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
               {[
                 { step: '01', title: 'Verification', text: 'Our finance team confirms funds with Standard Bank.' },
                 { step: '02', title: 'Drafting', text: 'AI & Industry experts start your response immediately.' },
                 { step: '03', title: 'Delivery', text: 'Receive your winning proposal in under 24 hours.' }
               ].map((s, i) => (
                 <div key={i} className="bg-slate-50 p-6 rounded-2xl text-left border border-slate-100">
                   <p className="text-brand-gold font-black text-sm mb-2">{s.step}</p>
                   <p className="font-bold text-brand-blue mb-1">{s.title}</p>
                   <p className="text-xs text-slate-500 leading-relaxed">{s.text}</p>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-brand-blue text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-brand-blue-dark transition-all shadow-xl shadow-brand-blue/20 hover:scale-105"
              >
                Go to Client Dashboard
              </button>
              <button 
                onClick={() => window.print()}
                className="border-2 border-slate-200 text-slate-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Print Receipt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
