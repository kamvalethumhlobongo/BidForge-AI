import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        // Since no auth, we fetch all leads and display the ones for "Marcus T." (mock client)
        // or just all for the sake of the demo.
        const response = await axios.get('/api/leads');
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleDownload = (id, name) => {
    window.open(`/api/leads/${id}/download`, '_blank');
  };

  return (
    <div className="bg-slate-50 flex h-screen overflow-hidden font-sans text-slate-900">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-brand-blue text-white flex flex-col z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 border-b border-white/10 flex items-center gap-3">
          <img src="/branding/logo.png" alt="" className="h-8 w-auto brightness-0 invert" />
          <span className="text-xl font-heading font-extrabold tracking-tight">BidForge AI</span>
        </div>
        
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-white/10 text-white font-bold transition-all">
            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-4 p-4 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            <span>My Bids</span>
          </a>
          <a href="#" className="flex items-center gap-4 p-4 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            <span>Intake Profile</span>
          </a>
          <a href="#" className="flex items-center gap-4 p-4 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Credits & Plans</span>
          </a>
          <div className="pt-8 border-t border-white/5">
             <a href="#" className="flex items-center gap-4 p-4 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Settings</span>
            </a>
          </div>
        </nav>

        <div className="p-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold text-brand-blue flex items-center justify-center font-extrabold text-lg">MT</div>
            <div className="flex-1 overflow-hidden">
              <p className="font-bold text-white truncate">Marcus T.</p>
              <p className="text-xs text-slate-400 truncate">TransDirect Logistics</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-10 shrink-0">
          <div className="flex items-center gap-4">
             <button 
               className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
               onClick={() => setSidebarOpen(true)}
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
             </button>
             <h1 className="font-heading text-2xl font-extrabold text-slate-900">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden sm:flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Balance</span>
              <span className="font-bold text-brand-blue">5 Credits</span>
            </div>
            <button className="bg-brand-gold text-brand-blue px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/20 whitespace-nowrap">
              Start New Bid
            </button>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
          {/* Welcome Banner */}
          <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark p-8 md:p-12 rounded-[2rem] text-white relative overflow-hidden shadow-2xl shadow-brand-blue/20">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Good morning, Marcus! 👋</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Your last bid for <span className="text-white font-bold underline decoration-brand-gold decoration-2 underline-offset-4">NSW Transport Panel</span> was completed in record time. You're on track to hit your monthly goals.
              </p>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 flex items-center justify-center translate-x-1/4">
               <img src="/branding/logo.png" alt="" className="h-64 w-auto brightness-0 invert" />
            </div>
          </section>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Bids Won</p>
              <p className="text-4xl font-extrabold text-slate-900">2</p>
              <p className="mt-4 text-xs font-bold text-emerald-600 flex items-center gap-1">
                 <span className="text-lg">↑</span> 12% from last month
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Pending</p>
              <p className="text-4xl font-extrabold text-slate-900">1</p>
              <p className="mt-4 text-xs font-bold text-brand-blue flex items-center gap-1">
                 Expected in <span className="text-brand-gold">3h 45m</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Profile Score</p>
              <div className="flex items-end gap-3 mb-4">
                 <p className="text-4xl font-extrabold text-slate-900">85%</p>
                 <p className="text-xs font-bold text-slate-400 mb-1">Excellent</p>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-gold transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="font-heading text-xl font-extrabold text-slate-900">Recent Bid Responses</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors bg-slate-50 rounded-lg">Filter</button>
                <button className="px-4 py-2 text-xs font-bold text-brand-blue hover:underline">View History</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              {loading ? (
                <div className="p-12 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Bids...</div>
              ) : (
                <table className="w-full text-left min-w-[700px]">
                  <thead>
                    <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <th className="px-10 py-6">Tender Details</th>
                      <th className="px-10 py-6">Industry</th>
                      <th className="px-10 py-6">Timeline</th>
                      <th className="px-10 py-6">Status</th>
                      <th className="px-10 py-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {leads.filter(l => l.status === 'completed' || l.status === 'pending').map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-10 py-8">
                          <p className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{row.name}</p>
                          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tighter">REF: BID-{row.id.substring(0, 8).toUpperCase()}</p>
                        </td>
                        <td className="px-10 py-8">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                             <span className="text-sm font-bold text-slate-600 capitalize">{row.industry}</span>
                          </div>
                        </td>
                        <td className="px-10 py-8 text-sm font-medium text-slate-500">
                          {new Date(row.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-10 py-8">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${row.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-brand-blue/10 text-brand-blue'}`}>
                            {row.status === 'completed' ? 'Completed' : 'Processing'}
                          </span>
                        </td>
                        <td className="px-10 py-8 text-right">
                          {row.status === 'completed' ? (
                            <button 
                              onClick={() => handleDownload(row.id, row.name)}
                              className="bg-brand-blue text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-brand-blue-dark transition-all shadow-md"
                            >
                              Download Response
                            </button>
                          ) : (
                            <button className="text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors">Manage</button>
                          )}
                        </td>
                      </tr>
                    ))}
                    {leads.length === 0 && (
                      <tr>
                        <td colSpan="5" className="p-12 text-center text-slate-500 italic">No bids found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
