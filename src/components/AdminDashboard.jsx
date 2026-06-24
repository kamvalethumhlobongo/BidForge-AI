import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [generatingId, setGeneratingId] = useState(null);
  const [activeTab, setActiveTab] = useState('leads'); // 'leads' or 'payments'

  const fetchData = async () => {
    try {
      const leadsRes = await axios.get('/api/leads');
      setLeads(leadsRes.data);
      const ordersRes = await axios.get('/api/admin/orders');
      setOrders(ordersRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGenerateProposal = async (id) => {
    setGeneratingId(id);
    try {
      await axios.post(`/api/leads/${id}/generate`);
      fetchData();
    } catch (error) {
      console.error('Error generating proposal:', error);
      alert('Failed to generate proposal.');
    } finally {
      setGeneratingId(null);
    }
  };

  const handlePaymentAction = async (id, newStatus) => {
    try {
      await axios.patch(`/api/admin/orders/${id}/status`, { status: newStatus });
      fetchData();
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Failed to update status.');
    }
  };

  const stats = [
    { label: 'Total Leads', value: leads.length, icon: '📊' },
    { label: 'Pending Payments', value: orders.filter(o => o.status === 'pending').length, icon: '💳' },
    { label: 'Total Revenue', value: `R${leads.reduce((acc, l) => acc + (l.revenue || 0), 0).toLocaleString()}`, icon: '💰' },
  ];

  return (
    <div className="bg-slate-900 flex h-screen overflow-hidden font-sans text-slate-100">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-slate-800 text-white flex flex-col z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-700 flex items-center gap-3">
          <img src="/branding/logo.png" alt="" className="h-8 w-auto brightness-0 invert" />
          <span className="text-xl font-heading font-extrabold tracking-tight">BidForge <span className="text-brand-gold">Admin</span></span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <button 
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${activeTab === 'leads' ? 'bg-brand-blue text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            <span>Leads Management</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('payments')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${activeTab === 'payments' ? 'bg-brand-blue text-white font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span>Payment Verification</span>
            {orders.filter(o => o.status === 'pending').length > 0 && (
              <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                {orders.filter(o => o.status === 'pending').length}
              </span>
            )}
          </button>

          <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            <span>Tenders & Assets</span>
          </a>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center font-bold text-xs text-white">AD</div>
            <div className="flex-1 overflow-hidden">
              <p className="font-bold text-sm text-white truncate">Admin User</p>
              <p className="text-[10px] text-slate-400 truncate">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
             <button 
               className="md:hidden p-2 text-slate-400 hover:bg-slate-700 rounded-lg"
               onClick={() => setSidebarOpen(true)}
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
             </button>
             <h1 className="text-xl font-bold">{activeTab === 'leads' ? 'Leads Overview' : 'Payment Verification'}</h1>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
             <span>System Status: <span className="text-emerald-400">Online</span></span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-2xl">{stat.icon}</span>
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Now</span>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{loading ? '...' : stat.value}</p>
              </div>
            ))}
          </div>

          {activeTab === 'leads' ? (
            <section className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                <h3 className="text-lg font-bold">Lead Management</h3>
                <button 
                  onClick={fetchData}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                {loading ? (
                  <div className="p-12 text-center text-slate-500">Loading leads...</div>
                ) : (
                  <table className="w-full text-left">
                    <thead className="bg-slate-900/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Company Details</th>
                        <th className="px-6 py-4">Plan / Industry</th>
                        <th className="px-6 py-4">Source</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-700/50 transition-colors group text-sm">
                          <td className="px-6 py-4">
                            <p className="font-bold text-white">{lead.name}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{lead.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-bold text-white">{lead.plan_type || 'Custom'}</p>
                            <p className="text-xs text-slate-400 mt-0.5 capitalize">{lead.industry}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-slate-400 text-xs">{lead.source || 'Direct'}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              lead.status === 'completed' 
                                ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-800/50' 
                                : lead.status === 'paid'
                                  ? 'bg-blue-900/30 text-blue-400 border border-blue-800/50'
                                  : 'bg-orange-900/30 text-orange-400 border border-orange-800/50'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${lead.status === 'completed' ? 'bg-emerald-400' : lead.status === 'paid' ? 'bg-blue-400' : 'bg-orange-400'}`}></span>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                             <div className="flex items-center justify-end gap-3">
                              {lead.status === 'completed' && (
                                <button 
                                  onClick={() => window.open(`/api/leads/${lead.id}/download`, '_blank')}
                                  className="text-brand-gold hover:text-brand-gold-light font-bold text-xs uppercase tracking-tighter"
                                >
                                  View
                                </button>
                              )}
                              <button 
                                onClick={() => handleGenerateProposal(lead.id)}
                                disabled={generatingId === lead.id}
                                className={`font-bold text-xs uppercase tracking-tighter transition-colors ${
                                  generatingId === lead.id 
                                    ? 'text-slate-400 animate-pulse' 
                                    : lead.status === 'completed'
                                      ? 'text-emerald-500 hover:text-emerald-400'
                                      : 'text-brand-blue hover:text-white'
                                }`}
                              >
                                {generatingId === lead.id ? '...' : lead.status === 'completed' ? 'Regenerate' : 'Generate'}
                              </button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </section>
          ) : (
            <section className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <h3 className="text-lg font-bold">Pending EFT Verifications</h3>
                <button 
                  onClick={fetchData}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                {loading ? (
                  <div className="p-12 text-center text-slate-500">Loading orders...</div>
                ) : (
                  <table className="w-full text-left">
                    <thead className="bg-slate-900/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Package / Amount</th>
                        <th className="px-6 py-4">Proof of Payment</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {orders.map((pay) => (
                        <tr key={pay.id} className="hover:bg-slate-700/50 transition-colors text-sm">
                          <td className="px-6 py-4">
                            <p className="font-bold text-white">{pay.company}</p>
                            <p className="text-xs text-slate-400">{pay.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-bold text-white">{pay.plan_type}</p>
                            <p className="text-xs text-brand-gold font-bold">R{pay.amount}</p>
                          </td>
                          <td className="px-6 py-4">
                            {pay.pop_path ? (
                              <button 
                                onClick={() => window.open(pay.pop_path.replace('/home/team/shared/bidforge-app', ''), '_blank')}
                                className="flex items-center gap-2 text-brand-blue hover:text-white transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                <span className="font-bold text-xs uppercase tracking-tighter">View Proof</span>
                              </button>
                            ) : (
                              <span className="text-slate-500 text-xs italic">No proof uploaded</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-slate-400">
                            {new Date(pay.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              pay.status === 'completed' ? 'bg-emerald-900/30 text-emerald-400' : 
                              pay.status === 'rejected' ? 'bg-red-900/30 text-red-400' : 
                              'bg-orange-900/30 text-orange-400'
                            }`}>
                              {pay.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            {pay.status === 'paid' && (
                              <div className="flex items-center justify-end gap-2">
                                <button 
                                  onClick={() => handlePaymentAction(pay.id, 'completed')}
                                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tighter transition-all"
                                >
                                  Approve
                                </button>
                                <button 
                                  onClick={() => handlePaymentAction(pay.id, 'rejected')}
                                  className="bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tighter transition-all border border-red-600/30"
                                >
                                  Reject
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
