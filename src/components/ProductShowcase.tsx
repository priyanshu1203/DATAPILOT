import React, { useState } from 'react';
import { 
  BarChart3, 
  Sparkles, 
  Layers, 
  Database, 
  Search, 
  Filter, 
  Download, 
  RefreshCw,
  CheckCircle
} from 'lucide-react';
import { SAMPLE_SHOWCASE_TABLE } from '../data/mockData';
import { AIInsightCard } from './AIInsightCard';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'anomalies' | 'reports' | 'integrations'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = SAMPLE_SHOWCASE_TABLE.filter(
    (row) =>
      row.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.plan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="showcase" className="py-20 md:py-28 bg-white dark:bg-[#0B0F17] border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Product Deep Dive
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything you need to understand your business.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Connect your data, explore what changed, and let DataPilot surface the insights worth acting on.
          </p>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 shadow-xl overflow-hidden">
          
          {/* Top Bar with Navigation Tabs */}
          <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* View Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar pb-1 md:pb-0">
              {[
                { id: 'overview', label: 'Analytics Overview', icon: BarChart3 },
                { id: 'anomalies', label: 'AI Anomaly Feed', icon: Sparkles },
                { id: 'reports', label: 'Automated Reports', icon: Layers },
                { id: 'integrations', label: 'Data Sources', icon: Database },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'overview' | 'anomalies' | 'reports' | 'integrations')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-brand-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 justify-end text-xs">
              <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                Demo Workspace: Acme SaaS
              </span>
              <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Tab Content Display */}
          <div className="p-4 sm:p-6">
            
            {activeTab === 'overview' && (
              <div className="space-y-6">
                
                {/* AI Insight Highlight Component */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <AIInsightCard />
                  </div>
                  
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>Health Metrics</span>
                      <span className="text-xs font-normal text-emerald-500 font-mono">100% Operational</span>
                    </h3>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <span className="text-slate-600 dark:text-slate-400">Data Lag</span>
                        <span className="font-bold text-slate-900 dark:text-white">&lt; 250ms</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <span className="text-slate-600 dark:text-slate-400">Connected Sources</span>
                        <span className="font-bold text-brand-600 dark:text-brand-400">6 Active</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <span className="text-slate-600 dark:text-slate-400">Scheduled Reports</span>
                        <span className="font-bold text-slate-900 dark:text-white">Daily 09:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Table Section */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  
                  {/* Table Header Controls */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="relative flex-1 max-w-xs">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search customers or plans..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5">
                        <Filter className="w-3.5 h-3.5" />
                        <span>Filter</span>
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5" />
                        <span>Export CSV</span>
                      </button>
                    </div>
                  </div>

                  {/* Table Element */}
                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                      <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="px-4 py-3">Account ID</th>
                          <th className="px-4 py-3">Customer</th>
                          <th className="px-4 py-3">Plan Tier</th>
                          <th className="px-4 py-3">MRR</th>
                          <th className="px-4 py-3">Growth Rate</th>
                          <th className="px-4 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {filteredData.length > 0 ? (
                          filteredData.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                              <td className="px-4 py-3.5 font-mono text-slate-400">{row.id}</td>
                              <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-white">{row.customer}</td>
                              <td className="px-4 py-3.5">
                                <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                                  {row.plan}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 font-bold text-slate-900 dark:text-white">{row.mrr}</td>
                              <td className="px-4 py-3.5 font-semibold text-emerald-600 dark:text-emerald-400">{row.growth}</td>
                              <td className="px-4 py-3.5">
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                                  <CheckCircle className="w-3 h-3" />
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                              No accounts found matching "{searchQuery}".
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                </div>

              </div>
            )}

            {activeTab === 'anomalies' && (
              <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Anomaly Detection Engine</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  DataPilot continuously scans your metrics for statistical outliers, unexpected traffic shifts, and conversion funnel bottlenecks.
                </p>
                <div className="pt-2">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    0 Critical Anomalies Detected (Healthy Baseline)
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mx-auto">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Automated Team Briefings</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Generate beautiful executive briefs every Monday morning. Send concise PDF summaries directly to Slack channels or investor updates.
                </p>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">50+ One-Click Data Connectors</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Connect Stripe, Google Analytics, Mixpanel, PostgreSQL, HubSpot, and Segment with zero code required.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
