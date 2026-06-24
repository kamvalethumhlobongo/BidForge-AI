import React, { useState } from 'react';

const LandingPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('logistics');
  const [activeFaq, setActiveFaq] = useState(null);

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
      q: 'How fast can I get my proposal?',
      a: 'Standard delivery is within 24 hours. Premium subscribers get priority 12-hour turnaround.'
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
      q: 'What if I\'m not satisfied?',
      a: 'We offer free revisions within 48 hours. If we can\'t make it right, you don\'t pay.'
    },
    {
      q: 'Do you handle the full submission?',
      a: 'Our Pay-Per-Bid and Credit Bundles deliver the written response. Our Enterprise/DFY tier includes expert review and submission assistance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Pain-Focused Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Stop Losing Contracts
              </span>
              <br />
              to Weak Paperwork
            </h1>

            {/* Persuasive Subheadline */}
            <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Every day, capable SMEs{' '}
              <span className="text-orange-300 font-semibold">lose tenders they deserved to win</span> — 
              not because their service wasn't good enough, but because their documentation was rushed, 
              incomplete, or unconvincing. 
            </p>

            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              BidForge AI delivers professional, industry-tailored tender responses, proposals, and 
              capability statements in <span className="text-amber-400 font-bold">under 24 hours</span>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-xl hover:shadow-2xl"
              >
                Get My Single Proposal Pack — R750 →
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-300 border-2 border-slate-600 rounded-lg hover:border-slate-400 hover:text-white transition-all"
              >
                See How It Works ↓
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-500 text-sm uppercase tracking-wider mb-4">
                Used by 50+ SMEs in Logistics, Construction & Government Supply
              </p>
              <div className="flex justify-center items-center gap-2 text-amber-400">
                <span className="text-lg">⭐⭐⭐⭐⭐</span>
                <span className="text-slate-400 text-sm">"Won my first tender in 48 hours"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAIN POINT / PROBLEM AGITATION ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Your Business is Bid-Ready.
              <br />
              <span className="text-orange-500">Your Documentation Isn't.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              You've got the capability. You've got the experience. You've got the team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pain Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Missed Deadlines</h3>
              <p className="text-slate-600 mb-4">
                Tenders close fast. You run out of time before you run out of quality. 
                Rushed responses get rejected.
              </p>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <p className="text-emerald-700 text-sm font-medium">
                  ✅ We deliver in <strong>under 24 hours</strong>, every time
                </p>
              </div>
            </div>

            {/* Pain Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Weak Writing</h3>
              <p className="text-slate-600 mb-4">
                Technical excellence doesn't matter if your proposal doesn't convince the evaluator. 
                Most SMEs struggle to translate capability into compelling writing.
              </p>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <p className="text-emerald-700 text-sm font-medium">
                  ✅ AI tuned to your industry writes <strong>evaluator-friendly</strong> responses
                </p>
              </div>
            </div>

            {/* Pain Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No Template System</h3>
              <p className="text-slate-600 mb-4">
                Starting from scratch every time is exhausting, inconsistent, and error-prone. 
                You miss criteria you've answered before.
              </p>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <p className="text-emerald-700 text-sm font-medium">
                  ✅ Your data, your docs — <strong>one dashboard</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              From Intake to Submission in{' '}
              <span className="text-orange-500">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200 h-full">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Tell Us About Your Business</h3>
                <p className="text-slate-600">
                  Complete our smart intake form <strong>once</strong>. Upload your company profile, 
                  certifications, past project examples, and capabilities.{' '}
                  <strong>5 minutes. Done.</strong>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200 h-full">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Send Us the Tender / RFP</h3>
                <p className="text-slate-600">
                  Paste the RFP link or upload the PDF. Select your industry and package — 
                  Pay-Per-Bid, Credit Bundle, or Enterprise.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-emerald-50 rounded-xl p-8 border-2 border-emerald-200 h-full">
                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Receive Your Professional Response</h3>
                <p className="text-slate-600">
                  Within <strong>24 hours</strong> — often faster — you get a ready-to-submit tender 
                  response or capability statement. Written to evaluation criteria, formatted professionally, 
                  and customised to your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              One Platform.{' '}
              <span className="text-orange-500">Every Industry.</span> Real Results.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={`px-5 py-3 rounded-lg font-medium text-sm transition-all ${
                  activeIndustry === key
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-orange-300'
                }`}
              >
                {industry.icon} {industry.name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center max-w-3xl mx-auto">
            <p className="text-4xl mb-4">{industries[activeIndustry].icon}</p>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{industries[activeIndustry].name}</h3>
            <p className="text-slate-600 text-lg mb-6">{industries[activeIndustry].description}</p>
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 inline-block">
              <p className="text-emerald-700 font-semibold">🏆 {industries[activeIndustry].result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Real SMEs.{' '}
            <span className="text-orange-500">Real Contracts.</span> Real Fast.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">
                "We'd been trying to crack government transport contracts for 2 years. 
                BidForge AI got us there in 3 days. The response was so professional, 
                the evaluator called to ask who wrote it."
              </p>
              <div>
                <p className="font-bold text-slate-900">Marcus T.</p>
                <p className="text-slate-500 text-sm">Operations Director, TransDirect Logistics</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">
                "I was sceptical about AI proposals. Then we won a $350K security contract. 
                Now I use BidForge for every single bid."
              </p>
              <div>
                <p className="font-bold text-slate-900">Priya K.</p>
                <p className="text-slate-500 text-sm">CEO, SecureCorp</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">
                "The 24-hour turnaround is not a gimmick. I submitted the brief at 9pm, 
                had the proposal by 8am. Unreal."
              </p>
              <div>
                <p className="font-bold text-slate-900">David L.</p>
                <p className="text-slate-500 text-sm">Director, BuildRight Construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Pricing Built for SMEs.{' '}
            <span className="text-orange-500">Results Built for Winners.</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            No lock-in. No hidden fees. Free first bid for early adopters.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Entry Offer: Single Proposal Pack */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-slate-900">Single Proposal Pack</h3>
              <p className="text-3xl font-bold text-orange-500 my-4">R750 – R2,500</p>
              <ul className="space-y-2 text-slate-600 text-sm mb-6">
                <li>✓ Single high-quality proposal or response</li>
                <li>✓ Industry-tailored AI</li>
                <li>✓ 24-hour turnaround</li>
                <li>✓ PDF + DOCX download</li>
              </ul>
              <p className="text-xs text-slate-400 mb-4">Best for: One-off bids</p>
              <a
                href="#"
                className="block text-center px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Start Here →
              </a>
            </div>

            {/* Core Offer: Winning Bid Package */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-400 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-bold text-slate-900">Winning Bid Package</h3>
              <p className="text-3xl font-bold text-orange-500 my-4">R3,500 – R12,000</p>
              <ul className="space-y-2 text-slate-600 text-sm mb-6">
                <li>✓ Full tender response with compliance matrix</li>
                <li>✓ Evaluation criteria mapping</li>
                <li>✓ Professional formatting & branding</li>
                <li>✓ Priority 24-hour delivery</li>
              </ul>
              <p className="text-xs text-slate-400 mb-4">Best for: Regular bidding SMEs</p>
              <a
                href="#"
                className="block text-center px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get This Package →
              </a>
            </div>

            {/* Retainer: Tender Accelerator */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-slate-900">Tender Accelerator</h3>
              <p className="text-3xl font-bold text-slate-900 my-4">R5,000 – R20,000/mo</p>
              <ul className="space-y-2 text-slate-600 text-sm mb-6">
                <li>✓ Unlimited capability updates</li>
                <li>✓ Priority 12-hour turnaround</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ 2 custom industry templates</li>
              </ul>
              <p className="text-xs text-slate-400 mb-4">Best for: Tender-focused businesses</p>
              <a
                href="#"
                className="block text-center px-4 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors"
              >
                Get Retainer →
              </a>
            </div>

            {/* Premium DFY: Bid Desk */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-slate-900">Bid Desk</h3>
              <p className="text-3xl font-bold text-slate-900 my-4">R15,000 – R50,000+</p>
              <ul className="space-y-2 text-slate-600 text-sm mb-6">
                <li>✓ Expert-reviewed submissions</li>
                <li>✓ Senior bid writer oversight</li>
                <li>✓ Complex multi-part tenders</li>
                <li>✓ Full compliance matrix mapping</li>
              </ul>
              <p className="text-xs text-slate-400 mb-4">Best for: Large government tenders</p>
              <a
                href="#"
                className="block text-center px-4 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition-colors"
              >
                Get a Quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Why <span className="text-orange-500">50+ SMEs</span> Choose BidForge AI
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              '24-Hour Guarantee — Professionally written, always on time',
              'Industry-Specific AI — Trained on Logistics, Construction, Security, Cleaning & Gov Supply',
              'Evaluation Criteria Mapping — Every section addresses what assessors look for',
              'Brand Alignment — Your logos, your tone, your templates',
              'No Lock-In — Pay per bid, bundle, or subscribe — cancel anytime',
              'Multi-Format Export — PDF, DOCX, plain text — submission-ready',
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <span className="text-emerald-500 text-xl flex-shrink-0">✅</span>
                <p className="text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <span className={`text-orange-500 text-xl transition-transform ${activeFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Your Next Tender Closes Soon.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Don't Let Paperwork Be the Reason You Lose.
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join 50+ SMEs who stopped scrambling and started winning.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Your Winning Bid Package →
          </a>
          <p className="mt-4 text-sm text-slate-500">
            No commitment. Free revisions. Your data is secure. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 font-semibold mb-2">BidForge AI</p>
          <p className="text-slate-500 text-sm">
            AI-Powered Bid Responses for Australian SMEs
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-slate-300 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-slate-300 transition-colors">Pricing</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            © 2025 BidForge AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;/home/engine/.bashrc: line 1: syntax error near unexpected token `('
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
