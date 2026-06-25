import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeIndustry, setActiveIndustry] = useState('logistics');
  const [activeFaq, setActiveFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: 'logistics',
    proposal_data: '',
    bbbee_level: '',
    sector: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadIndustry, setDownloadEmailIndustry] = useState('logistics');

  const handlePricingClick = async (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
    // Live intent alert
    try {
      await axios.post('/api/alerts', {
        type: 'intent',
        message: `INTENT TO BUY: Someone just clicked on the "${plan}" package.`
      });
    } catch (e) {
      console.warn('Silent fail for intent alert:', e.message);
    }
  };

  const handleDownload = async (industry, resourceName) => {
    if (!downloadEmail) {
      alert('Please enter your email to download the checklist.');
      return;
    }
    try {
      await axios.post('/api/lead-magnets/download', {
        email: downloadEmail,
        industry,
        resourceName
      });
      
      let fileName = `${industry.charAt(0).toUpperCase() + industry.slice(1)}_Tender_Winning_Checklist.md`;
      let url = `/api/lead-magnets/download-file?file=${fileName}`;
      
      if (industry === 'south africa') {
        fileName = 'ZA_Tender_Winning_Checklist.md';
        url = `/api/lead-magnets/download-file?file=${fileName}`;
      } else if (industry === 'b-bbee') {
        fileName = 'ZA_BBBEE_Alignment_Guide.md';
        url = `/api/lead-magnets/download-file?file=${fileName}&category=b-bbee`;
      }
      
      window.open(url, '_blank');
      alert('Checklist download started!');
    } catch (error) {
      console.error('Error downloading checklist:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post('/api/leads', {
        ...formData,
        proposal_data: { plan: selectedPlan, custom_data: formData.proposal_data },
        plan_type: selectedPlan,
        source: 'landing_page'
      });
      const leadId = response.data.id;
      // Live conversion alert
      try {
        await axios.post('/api/alerts', {
          type: 'conversion',
          message: `NEW LEAD CAPTURED: ${formData.name} (${formData.email}) has just completed the intake for the "${selectedPlan}" package.`
        });
      } catch (e) {
        console.warn('Silent fail for conversion alert:', e.message);
      }
      setSubmitting(false);
      setShowModal(false);
      navigate('/checkout', { state: { plan: selectedPlan, formData, leadId } });
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Failed to save lead. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const industries = {
    logistics: {
      icon: '🚚',
      name: 'Logistics & Transport',
      description: 'Fleet capability statements, safety management submissions, government transport tenders',
      result: 'Won a $1.2M transport contract with our first submission'
    },
    construction: {
      icon: '🏗️',
      name: 'Construction',
      description: 'OH&S docs, project methodology statements, EOI responses for government projects',
      result: 'Shortlisted on 3 tenders in the first month'
    },
    security: {
      icon: '🔒',
      name: 'Security',
      description: 'Guard service proposals, monitoring RFP responses, compliance documentation',
      result: 'Closed a corporate client in under 1 week'
    },
    cleaning: {
      icon: '🧹',
      name: 'Cleaning & Facilities',
      description: 'Commercial cleaning proposals, government panel applications, ISO compliance docs',
      result: 'Listed on 2 government panels within 14 days'
    },
    government: {
      icon: '🏛️',
      name: 'Government Suppliers',
      description: 'Full RFP responses, capability matrices, pricing schedules',
      result: 'Passed the compliance gate every single time'
    }
  };

  const faqs = [
    {
      q: 'What industries do you cover?',
      a: 'Logistics & Transport, Construction, Security, Cleaning & Facilities Management, and Government Supply. We add new industries monthly.'
    },
    {
      q: 'How do I pay for my proposal?',
      a: 'We exclusively accept Secure EFT (Direct Bank Transfer). This ensures maximum transparency, security for high-value corporate funds, and full compliance for government tender documentation.'
    },
    {
      q: 'How fast can I get my proposal?',
      a: 'Standard delivery is within 24 hours of payment verification. Premium subscribers get priority 12-hour turnaround.'
    },
    {
      q: 'Is the content original or templated?',
      a: 'Every response is uniquely generated based on your company information and the specific tender/RFP. Nothing is copy-pasted.'
    },
    {
      q: 'Can I edit the document after receiving it?',
      a: 'Absolutely. You get editable DOCX files plus PDF. Customise as much as you want.'
    },
    {
      q: 'Do you handle the full submission?',
      a: 'Our Single Proposal Pack and Winning Bid Package deliver the written response. Our Bid Desk tier includes expert review and submission assistance.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* ===== NAVIGATION ===== */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <img src="/branding/logo.png" alt="BidForge AI" className="h-10 w-auto" />
              <span className="font-heading text-2xl font-bold tracking-tight text-brand-blue">
                BidForge <span className="text-brand-gold">AI</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="font-medium text-slate-600 hover:text-brand-blue transition-colors">How It Works</a>
              <a href="#pricing" className="font-medium text-slate-600 hover:text-brand-blue transition-colors">Pricing</a>
              <a href="#faq" className="font-medium text-slate-600 hover:text-brand-blue transition-colors">FAQ</a>
              <button 
                onClick={() => handlePricingClick('Single Proposal Pack')}
                className="bg-brand-blue text-white px-6 py-2.5 rounded-lg font-bold hover:bg-brand-blue-dark transition-all shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-brand-blue text-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/branding/hero_banner.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Win More Contracts. <br />
              <span className="text-brand-gold">Stop Losing Bids</span> to Weak Documentation.
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
              BidForge AI delivers professional, industry-tailored tender responses, proposals, and 
              capability statements in <span className="text-white font-bold border-b-2 border-brand-gold">under 24 hours</span> — 
              so you never miss a deadline or lose a bid because your paperwork wasn't good enough.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={() => handlePricingClick('Single Proposal Pack')}
                className="inline-flex items-center justify-center px-8 py-5 text-xl font-bold text-brand-blue bg-brand-gold rounded-lg hover:bg-brand-gold-light transition-all shadow-xl hover:shadow-2xl"
              >
                Get My Single Proposal Pack — R750 →
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-5 text-xl font-semibold text-white border-2 border-slate-500 rounded-lg hover:border-white transition-all"
              >
                See How It Works ↓
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="mt-16 flex flex-wrap items-center gap-6 text-slate-400">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold/80">
                Used by 50+ SMEs in Logistics, Construction & Government Supply
              </p>
              <div className="h-px w-12 bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐⭐⭐⭐⭐</span>
                <span className="text-white font-medium italic">"Won my first tender in 48 hours"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 font-bold uppercase tracking-widest text-xs mb-8">
            Trusted Compliance & 24h Delivery for South African SMEs
          </p>
          <div className="flex justify-center items-center">
            <img 
              src="/marketing_assets/trust_compliance_badges.png" 
              alt="Compliance & Trust Badges" 
              className="h-32 md:h-48 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Your Business is Bid-Ready. <br />
                <span className="text-brand-blue">Your Documentation Isn't.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>You've got the capability. You've got the experience. You've got the team.</p>
                <p>
                  But when the RFP lands, you're scrambling. Copy-pasting from old proposals. 
                  Writing capability statements at 11pm. Second-guessing whether you've answered everything.
                </p>
                <p className="font-bold text-slate-900 border-l-4 border-brand-gold pl-4">
                  The result? Weak submissions that evaluators dismiss in minutes. 
                  Contracts going to bigger firms with better documents.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-1 gap-6">
              {[
                { 
                  title: 'Missed Deadlines', 
                  desc: 'Tenders close fast — you run out of time before running out of quality',
                  fix: 'We deliver in <24h, every time',
                  icon: '⏰'
                },
                { 
                  title: 'Weak Writing', 
                  desc: 'Technical excellence ≠ persuasive writing',
                  fix: 'AI tuned to your industry writes evaluator-friendly responses',
                  icon: '✏️'
                },
                { 
                  title: 'No Template System', 
                  desc: 'Starting from scratch every time is exhausting and error-prone',
                  fix: 'Your data, your docs, one dashboard',
                  icon: '📋'
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-gold transition-colors group">
                  <div className="flex gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl mb-1">{item.title}</h3>
                      <p className="text-slate-600 mb-3">{item.desc}</p>
                      <p className="text-sm font-bold text-brand-blue flex items-center gap-1">
                        <span className="text-brand-gold">✓</span> {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle pattern background could go here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold mb-4">
              From Intake to Submission in <span className="text-brand-gold">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Tell Us About Your Business',
                text: 'Complete our smart intake form once. Upload your company profile, certifications, past project examples, and capabilities. 5 minutes. Done.'
              },
              {
                step: '2',
                title: 'Send Us the Tender / RFP',
                text: 'Paste the RFP link or upload the PDF. Select your industry and package (Single Proposal Pack, Winning Bid Package, or Bid Desk).'
              },
              {
                step: '3',
                title: 'Receive Your Professional Response',
                text: 'Within 24 hours — often faster — you get a ready-to-submit tender response or capability statement. Written to evaluation criteria and brand-customised.'
              }
            ].map((s, i) => (
              <div key={i} className="relative pt-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-gold text-brand-blue rounded-full flex items-center justify-center font-heading text-3xl font-extrabold shadow-lg">
                  {s.step}
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl h-full text-center hover:border-brand-gold/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4 mt-4">{s.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              One Platform. <span className="text-brand-blue">Every Industry.</span> Real Results.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={`px-6 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                  activeIndustry === key
                    ? 'bg-brand-blue text-white shadow-xl scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="text-xl">{industry.icon}</span> {industry.name}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-3xl p-10 lg:p-16 border border-slate-200 flex flex-col md:flex-row gap-12 items-center">
              <div className="text-7xl lg:text-9xl">{industries[activeIndustry].icon}</div>
              <div className="flex-1">
                <h3 className="font-heading text-3xl font-bold text-slate-900 mb-4">{industries[activeIndustry].name}</h3>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{industries[activeIndustry].description}</p>
                <div className="bg-brand-blue/5 border-l-4 border-brand-gold p-6 rounded-r-xl">
                  <p className="text-brand-blue font-bold text-lg">🏆 {industries[activeIndustry].result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Pricing Built for SMEs. <span className="text-brand-blue">Results Built for Winners.</span>
            </h2>
            <p className="text-xl text-slate-600">No lock-in. No hidden fees. Free revisions.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Single Proposal Pack',
                price: 'R225',
                originalPrice: 'R750',
                features: ['Single high-quality proposal', 'Industry-tailored AI', '24-hour turnaround', 'PDF + DOCX download'],
                bestFor: 'One-off bids',
                icon: '💼',
                primary: false,
                badge: '70% OFF'
              },
              {
                title: 'Winning Bid Package',
                price: 'R1,050',
                originalPrice: 'R3,500',
                features: ['Full tender response', 'Compliance matrix mapping', 'Evaluation criteria mapping', 'Professional branding'],
                bestFor: 'Regular bidding SMEs',
                icon: '📦',
                primary: true,
                badge: 'BETA PARTNER SPECIAL'
              },
              {
                title: 'Tender Accelerator',
                price: 'R1,500/mo',
                originalPrice: 'R5,000/mo',
                features: ['Unlimited capability updates', 'Priority 12-hour turnaround', 'Dedicated account manager', '2 custom templates'],
                bestFor: 'Tender-focused businesses',
                icon: '⚡',
                primary: false,
                badge: '70% OFF'
              },
              {
                title: 'Bid Desk',
                price: 'R4,500+',
                originalPrice: 'R15,000+',
                features: ['Expert-reviewed submissions', 'Senior bid writer oversight', 'Complex multi-part tenders', 'Full compliance mapping'],
                bestFor: 'Large gov tenders',
                icon: '🏆',
                primary: false,
                badge: '70% OFF'
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-2xl flex flex-col ${
                  plan.primary ? 'border-brand-gold shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'
                } relative`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg">
                    {plan.badge}
                  </div>
                )}
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="font-heading text-xl font-extrabold text-slate-900 mb-2">{plan.title}</h3>
                <div className="mb-6">
                   <p className="text-2xl font-black text-brand-blue">{plan.price}</p>
                   <p className="text-xs text-slate-400 line-through">Was {plan.originalPrice}</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-600">
                      <span className="text-brand-gold font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider font-bold">Best for: {plan.bestFor}</p>
                  <button
                    onClick={() => handlePricingClick(plan.title)}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      plan.primary 
                        ? 'bg-brand-gold text-brand-blue hover:bg-brand-gold-light' 
                        : 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                    }`}
                  >
                    Pay via Secure EFT
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-3 font-medium flex items-center justify-center gap-1">
                    <span className="text-emerald-500">🛡️</span> Standard Bank Verified EFT
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 text-center mb-16">
            Real SMEs. <span className="text-brand-blue">Real Contracts.</span> Real Fast.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/marketing_assets/marcus_success_story.png",
                alt: "Marcus T. Success Story - Won $1.2M Contract"
              },
              {
                img: "/marketing_assets/priya_success_story.png",
                alt: "Priya K. Success Story - Security Contract Win"
              },
              {
                img: "/marketing_assets/sarah_success_story.png",
                alt: "Sarah C. Success Story - 100% Compliance"
              }
            ].map((t, i) => (
              <div key={i} className="group overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img 
                  src={t.img} 
                  alt={t.alt} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FREE RESOURCES SECTION ===== */}
      <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-8">
                Free <span className="text-brand-gold">Tender-Winning</span> Checklists
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Before you submit your next bid, make sure you've covered every detail. 
                Download our industry-specific 10-point audit checklists used by professional bid writers.
              </p>
              
              <div className="space-y-4">
                {['logistics', 'construction', 'security', 'cleaning', 'south africa', 'b-bbee'].map((ind) => (
                  <button 
                    key={ind}
                    onClick={() => {
                      setDownloadEmailIndustry(ind);
                      document.getElementById('download-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${downloadIndustry === ind ? 'bg-brand-gold text-brand-blue border-brand-gold' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                  >
                    <span className="font-bold uppercase tracking-widest text-sm text-left">
                      {ind === 'south africa' ? 'ZA Market Checklist' : ind === 'b-bbee' ? 'ZA B-BBEE Guide' : `${ind} Checklist`}
                    </span>
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                ))}
              </div>
            </div>
            
            <div id="download-form" className="bg-white p-8 md:p-12 rounded-[2rem] text-slate-900 shadow-2xl">
              <div className="mb-8">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Get Your Checklist</h3>
                <p className="text-slate-500 font-medium">Enter your email to receive the <span className="text-brand-blue font-bold uppercase">{downloadIndustry}</span> winning checklist.</p>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Work Email Address</label>
                  <input 
                    type="email" 
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    placeholder="marcus@company.co.za"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all font-medium"
                  />
                </div>
                <button 
                  onClick={() => handleDownload(downloadIndustry, 'winning_checklist')}
                  className="w-full bg-brand-blue text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-blue-dark transition-all shadow-lg shadow-brand-blue/20"
                >
                  Download Free Checklist →
                </button>
                <p className="text-center text-[10px] text-slate-400 font-medium">
                  We'll also send you occasional tips on how to win more tenders. No spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                  <span className={`text-brand-gold text-3xl transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ${
                    activeFaq === i ? 'max-h-96 pb-8' : 'max-h-0'
                  }`}
                >
                  <p className="text-slate-600 text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 bg-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/branding/hero_banner.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold leading-tight mb-8">
            Your Next Tender Closes Soon. <br />
            <span className="text-brand-gold">Don't Let Paperwork Be the Reason You Lose.</span>
          </h2>
          <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join 50+ SMEs who stopped scrambling and started winning.
          </p>
          <button
            onClick={() => handlePricingClick('Winning Bid Package')}
            className="inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-brand-blue bg-brand-gold rounded-xl hover:bg-brand-gold-light transition-all shadow-2xl hover:scale-105"
          >
            Start Your Winning Bid Package →
          </button>
          <p className="mt-8 text-slate-400 font-medium">
            No commitment. Free revisions. Secure & Confidential.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <img src="/branding/logo.png" alt="" className="h-12 w-auto" />
              <span className="font-heading text-2xl font-bold tracking-tight">
                BidForge <span className="text-brand-gold">AI</span>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 font-medium">
              <a href="#" className="hover:text-brand-gold transition-colors">About</a>
              <a href="#how-it-works" className="hover:text-brand-gold transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-brand-gold transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
            </div>
            
            <div className="flex gap-6">
               <span className="text-slate-500 hover:text-white transition-colors cursor-pointer text-xl">LinkedIn</span>
               <span className="text-slate-500 hover:text-white transition-colors cursor-pointer text-xl">Twitter</span>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-900 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 BidForge AI. Professional Tender & Proposal Solutions for South African SMEs.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal for Intake */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
            <div className="bg-brand-blue text-white px-10 py-8 flex justify-between items-center">
              <div>
                <h3 className="font-heading text-2xl font-bold">Start Your Bid</h3>
                <p className="text-slate-400 text-sm mt-1">Plan: {selectedPlan}</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white text-3xl font-light"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-10 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
                  Company Name
                </label>
                <input 
                  type="text"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-slate-50"
                  placeholder="e.g. Acme Transport"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
                  Work Email
                </label>
                <input 
                  type="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-slate-50"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
                  Industry
                </label>
                <select 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-slate-50"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                >
                  <option value="logistics">Logistics & Transport</option>
                  <option value="construction">Construction</option>
                  <option value="security">Security</option>
                  <option value="cleaning">Cleaning & Facilities</option>
                  <option value="government">Government Supplier</option>
                </select>
              </div>
              {formData.industry === 'government' && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">
                      B-BBEE Level
                    </label>
                    <select
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-slate-50 text-sm"
                      value={formData.bbbee_level}
                      onChange={(e) => setFormData({...formData, bbbee_level: e.target.value})}
                    >
                      <option value="">Select Level</option>
                      <option value="Level 1">Level 1</option>
                      <option value="Level 2">Level 2</option>
                      <option value="Level 3">Level 3</option>
                      <option value="Level 4">Level 4</option>
                      <option value="Non-Compliant">Non-Compliant</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">
                      Sector
                    </label>
                    <select
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-slate-50 text-sm"
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    >
                      <option value="">Select Sector</option>
                      <option value="General Services">General Services</option>
                      <option value="Construction">Construction & Engineering</option>
                      <option value="Transport">Transport & Fleet</option>
                      <option value="Security">Security & Guarding</option>
                      <option value="Cleaning">Cleaning & Hygiene</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
                  Tell us about the bid (Optional)
                </label>
                <textarea 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-slate-50"
                  rows="3"
                  placeholder="Paste RFP link or brief requirements..."
                  value={formData.proposal_data}
                  onChange={(e) => setFormData({...formData, proposal_data: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={submitting}
                className="w-full py-5 bg-brand-gold text-brand-blue font-extrabold text-lg rounded-xl hover:bg-brand-gold-light transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {submitting ? 'Processing...' : 'Save & Continue to Payment →'}
              </button>
              
              <div className="flex items-center justify-center gap-4 pt-2">
                 <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                   Secure 256-bit Encryption
                 </p>
                 <div className="h-1 w-1 bg-slate-300 rounded-full"></div>
                 <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
                   Powered by EFT / Standard Bank
                 </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default LandingPage;
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
