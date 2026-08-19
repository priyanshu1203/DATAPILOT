import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, FileText, Database, ArrowUpRight } from 'lucide-react';
import { MOCK_FEATURES } from '../data/mockData';

export const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-brand-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-500" />;
      case 'FileText': return <FileText className="w-6 h-6 text-violet-500" />;
      case 'Database': return <Database className="w-6 h-6 text-amber-500" />;
      default: return <Sparkles className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            Capabilities
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built for clarity, speed, and continuous growth.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Stop drowning in static charts. DataPilot surfaces the exact signals your team needs to act.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MOCK_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getIcon(feature.icon)}
                  </div>
                  
                  {feature.badge && (
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  "{feature.description}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400 dark:text-slate-500 font-medium">
                  {feature.metric}
                </span>
                <span className="text-brand-600 dark:text-brand-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
