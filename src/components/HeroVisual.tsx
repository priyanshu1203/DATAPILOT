import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Zap, 
  Sparkles, 
  ArrowUpRight, 
  Calendar, 
  Filter, 
  ChevronDown,
  Activity,
  Info,
  CheckCircle2
} from 'lucide-react';
import { MOCK_KPIS, MOCK_REVENUE_TREND, MOCK_TRAFFIC_SOURCES, MOCK_AI_INSIGHTS } from '../data/mockData';

export const HeroVisual: React.FC = () => {
  const [activeDateRange, setActiveDateRange] = useState('Last 30 Days');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(6);
  const [selectedMetric, setSelectedMetric] = useState<'revenue' | 'previousPeriod'>('revenue');

  // SVG Chart math calculation
  const chartHeight = 160;
  const chartWidth = 500;
  const maxVal = 90000;
  
  const getX = (index: number) => (index / (MOCK_REVENUE_TREND.length - 1)) * chartWidth;
  const getY = (value: number) => chartHeight - (value / maxVal) * chartHeight + 10;

  const points = MOCK_REVENUE_TREND.map((d, i) => `${getX(i)},${getY(d.revenue)}`).join(' ');
  const prevPoints = MOCK_REVENUE_TREND.map((d, i) => `${getX(i)},${getY(d.previousPeriod)}`).join(' ');
  const areaPoints = `${getX(0)},${chartHeight + 20} ${points} ${getX(MOCK_REVENUE_TREND.length - 1)},${chartHeight + 20}`;

  const getKpiIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign': return <DollarSign className="w-4 h-4 text-brand-500" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-emerald-500" />;
      case 'Users': return <Users className="w-4 h-4 text-violet-500" />;
      case 'Zap': return <Zap className="w-4 h-4 text-amber-500" />;
      default: return <Activity className="w-4 h-4 text-brand-500" />;
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden group">
      
      {/* Sample Data Disclaimer Banner */}
      <div className="bg-slate-100/90 dark:bg-slate-800/90 px-4 py-2 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold border border-brand-500/20">
            <Info className="w-3 h-3" /> Live Demo Mode
          </span>
          <span className="hidden sm:inline">Interactive sample analytics dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Syncing real-time
          </span>
          <div className="hidden md:flex items-center gap-1 text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{activeDateRange}</span>
          </div>
        </div>
      </div>

      {/* Dashboard Top Header Bar */}
      <div className="p-4 sm:p-6 border-b border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Executive Growth Overview</h2>
            <span className="px-2 py-0.5 text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-md">
              +18.4% WoW
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Cross-channel performance, AI insights, and real-time revenue velocity
          </p>
        </div>

        {/* Date Selector & Controls */}
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60 text-xs font-medium">
            {['Last 30 Days', 'Q1 2026', 'YTD'].map((range) => (
              <button
                key={range}
                onClick={() => setActiveDateRange(range)}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeDateRange === range
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <button className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>Filter</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Main Dashboard Body */}
      <div className="p-4 sm:p-6 space-y-6">
        
        {/* Top 4 KPI Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {MOCK_KPIS.map((kpi, idx) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.3 }}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-200 group/kpi"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {kpi.title}
                </span>
                <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-2xs border border-slate-200/60 dark:border-slate-700/60">
                  {getKpiIcon(kpi.iconName)}
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-1">
                <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {kpi.value}
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  {kpi.change}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
                {kpi.period}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Charts & AI Insights Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart Card (2 Cols) */}
          <div className="lg:col-span-2 p-4 sm:p-5 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Revenue Trajectory
                  <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                    (Sample Dataset)
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Comparing current period vs previous 30 days
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <button
                  onClick={() => setSelectedMetric('revenue')}
                  className={`flex items-center gap-1.5 font-medium ${
                    selectedMetric === 'revenue' ? 'text-brand-600 dark:text-brand-400 font-semibold' : 'text-slate-400'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                  Current
                </button>
                <button
                  onClick={() => setSelectedMetric('previousPeriod')}
                  className={`flex items-center gap-1.5 font-medium ${
                    selectedMetric === 'previousPeriod' ? 'text-slate-700 dark:text-slate-200 font-semibold' : 'text-slate-400'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  Previous
                </button>
              </div>
            </div>

            {/* Interactive SVG Chart */}
            <div className="relative w-full h-44 sm:h-48 mt-2">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight + 25}`} className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid horizontal lines */}
                {[0, 0.33, 0.66, 1].map((ratio, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={chartHeight * ratio + 10}
                    x2={chartWidth}
                    y2={chartHeight * ratio + 10}
                    stroke="currentColor"
                    strokeDasharray="4 4"
                    className="text-slate-200 dark:text-slate-800"
                    strokeWidth="1"
                  />
                ))}

                {/* Gradient Area Fill */}
                <polygon points={areaPoints} fill="url(#revenueGradient)" />

                {/* Previous Period Line */}
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="text-slate-300 dark:text-slate-600"
                  points={prevPoints}
                />

                {/* Current Revenue Line */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={points}
                />

                {/* Data Points */}
                {MOCK_REVENUE_TREND.map((d, i) => {
                  const x = getX(i);
                  const y = getY(d.revenue);
                  const isHovered = hoveredPoint === i;
                  return (
                    <g key={d.date} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(i)}>
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 6 : 4}
                        className={`transition-all duration-200 ${
                          isHovered
                            ? 'fill-brand-500 stroke-white dark:stroke-slate-900 stroke-2'
                            : 'fill-white dark:fill-slate-900 stroke-brand-500 stroke-2'
                        }`}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Hover Tooltip Overlay */}
              {hoveredPoint !== null && (
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1.5 rounded-lg text-xs shadow-lg flex items-center gap-3 transition-all z-10"
                >
                  <span className="font-bold">{MOCK_REVENUE_TREND[hoveredPoint].date}:</span>
                  <span className="text-emerald-400 dark:text-emerald-600 font-semibold">
                    ${MOCK_REVENUE_TREND[hoveredPoint].revenue.toLocaleString()}
                  </span>
                  <span className="text-slate-400 text-[10px]">
                    (Prev: ${MOCK_REVENUE_TREND[hoveredPoint].previousPeriod.toLocaleString()})
                  </span>
                </div>
              )}
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-200/50 dark:border-slate-800">
              {MOCK_REVENUE_TREND.map((d) => (
                <span key={d.date}>{d.date}</span>
              ))}
            </div>
          </div>

          {/* AI Insights & Channels Sidebar (1 Col) */}
          <div className="space-y-4">
            
            {/* Live AI Insight Feature Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-brand-500/10 via-brand-600/5 to-transparent border border-brand-500/20 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-brand-500 text-white shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  Top AI Insight
                </h4>
              </div>

              <p className="text-xs font-semibold text-slate-900 dark:text-white leading-relaxed">
                "{MOCK_AI_INSIGHTS[0].summary}"
              </p>
              
              <div className="mt-3 pt-2.5 border-t border-brand-500/15 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 dark:text-slate-400">
                  Confidence: <strong className="text-brand-600 dark:text-brand-400">96%</strong>
                </span>
                <a href="#ai-insights" className="text-brand-600 dark:text-brand-400 font-bold hover:underline flex items-center gap-0.5">
                  View Analysis <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Traffic Source Breakdown */}
            <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200/80 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-between">
                <span>Traffic Sources</span>
                <span className="text-[10px] text-slate-400 font-normal">Conversion Rate</span>
              </h4>

              <div className="space-y-2.5">
                {MOCK_TRAFFIC_SOURCES.map((source) => (
                  <div key={source.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{source.name}</span>
                      <span className="font-bold text-slate-900 dark:text-white">{source.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${source.percentage}%`, backgroundColor: source.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Activity Bar Footer */}
        <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Last activity: Stripe webhook connected 10 mins ago</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">
              Data Freshness: 99.9%
            </span>
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">
              Export CSV / PDF
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
