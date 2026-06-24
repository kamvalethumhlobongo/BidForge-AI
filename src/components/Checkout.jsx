import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, formData, leadId } = location.state || {};

  const [step, setStep] = useState(1); // 1: Order Summary, 2: EFT Instructions, 3: Success
  const [orderId, setOrderId] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [proofFile, setProofFile] = useState(null);
  const [uploading, setUploading] = useState(false);

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
    } catch (error) {
      console.error('Error uploading proof:', error);
      alert('Failed to upload proof. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <img src="/branding/logo.png" alt="BidForge AI" className="h-12 w-auto mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-brand-blue">Secure Checkout</h2>
          <p className="text-slate-500 mt-2">Complete your purchase to start winning more contracts.</p>
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
            <span className="ml-2 font-bold hidden sm:block">Payment</span>
          </div>
          <div className={`h-1 w-12 mx-4 ${step >= 3 ? 'bg-brand-blue' : 'bg-slate-200'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-brand-blue' : 'text-slate-300'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${step >= 3 ? 'border-brand-blue bg-brand-blue text-white' : 'border-slate-300'}`}>3</span>
            <span className="ml-2 font-bold hidden sm:block">Confirmation</span>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl mb-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Selected Package</p>
                  <p className="text-xl font-black text-brand-blue">{plan || 'Single Proposal Pack'}</p>
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
                <div className="flex justify-between mb-2">
                  <span className="text-slate-500 font-medium">Tax (0%)</span>
                  <span className="text-slate-900 font-bold">R0.00</span>
                </div>
                <div className="flex justify-between text-xl font-black mt-4 pt-4 border-t border-slate-100">
                  <span className="text-brand-blue">Total to Pay</span>
                  <span className="text-brand-blue">{selectedPlanDetails.price}</span>
                </div>
              </div>

              <div className="bg-brand-gold/10 p-6 rounded-2xl mb-8 flex gap-4">
                <div className="text-2xl">⏳</div>
                <div>
                  <p className="font-bold text-brand-blue">Estimated Delivery</p>
                  <p className="text-sm text-slate-600">Your professional tender response will be ready within 24 hours of payment verification.</p>
                </div>
              </div>

              <button 
                onClick={handleProceed}
                disabled={uploading}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg ${uploading ? 'bg-slate-100 text-slate-400' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/20'}`}
              >
                {uploading ? 'Initiating Order...' : 'Proceed to Payment →'}
              </button>
            </div>
          </div>
        )}

        {step === 2 && bankDetails && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">EFT Payment Instructions</h3>
              
              <div className="bg-slate-900 text-white p-8 rounded-2xl mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <img src="/branding/logo.png" alt="" className="h-24 w-auto brightness-0 invert" />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">{bankDetails.bank}</p>
                <div className="space-y-4 relative z-10">
                  <div>
                    <p className="text-slate-500 text-xs">Account Name</p>
                    <p className="text-xl font-bold">{bankDetails.account_name}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Account Number</p>
                    <p className="text-xl font-bold tracking-widest">{bankDetails.account_number}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Branch Code</p>
                    <p className="text-xl font-bold tracking-widest">{bankDetails.branch_code}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Reference</p>
                    <p className="text-xl font-bold text-brand-gold uppercase">{bankDetails.reference}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-4">Upload Proof of Payment</h4>
                <p className="text-sm text-slate-500 mb-4">Please upload a copy of your EFT receipt (PDF or Image) to speed up verification.</p>
                
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-brand-gold transition-colors relative">
                  <input 
                    type="file" 
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*,.pdf"
                  />
                  <div className="space-y-2">
                    <div className="text-4xl">📄</div>
                    <p className="font-bold text-slate-900">{proofFile ? proofFile.name : 'Click or drag to upload'}</p>
                    <p className="text-xs text-slate-400">PDF, JPG, or PNG (Max 5MB)</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleSubmitProof}
                disabled={uploading}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-lg ${uploading ? 'bg-slate-100 text-slate-400' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/20'}`}
              >
                {uploading ? 'Uploading Proof...' : 'Submit Proof & Complete Order →'}
              </button>
              
              <button 
                onClick={() => setStep(1)}
                className="w-full mt-4 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
              >
                ← Back to Summary
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 text-center p-12">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8 text-4xl">
              ✓
            </div>
            <h3 className="text-3xl font-black text-brand-blue mb-4">Payment Proof Received!</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Thank you, {formData?.name || 'Valued Customer'}! We've received your proof of payment for the <span className="font-bold text-slate-900">{plan || 'Selected Package'}</span>. 
              Our team will verify the funds and start working on your bid immediately.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl mb-12 text-left space-y-4">
              <p className="font-bold text-slate-900">What happens next?</p>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex gap-3"><span className="text-brand-gold font-bold">1.</span> We verify your EFT payment (usually within 1-4 hours).</li>
                <li className="flex gap-3"><span className="text-brand-gold font-bold">2.</span> Your dedicated bid writer begins the AI-powered drafting process.</li>
                <li className="flex gap-3"><span className="text-brand-gold font-bold">3.</span> You'll receive an email with your professional document.</li>
              </ul>
            </div>

            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue-dark transition-all shadow-xl shadow-brand-blue/20"
            >
              Go to My Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
