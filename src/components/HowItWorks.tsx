import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { MOCK_HOW_IT_WORKS } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Database className="w-5 h-5 text-brand-500" />;
      case 1: return <Search className="w-5 h-5 text-emerald-500" />;
      case 2: return <Zap className="w-5 h-5 text-amber-500" />;
      default: return <ArrowRight className="w-5 h-5" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white dark:bg-[#0B0F17] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Simple Workflow
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From raw data to clear action.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Three simple steps to eliminate data ambiguity across your organization.
          </p>
        </div>

        {/* 3 Step Cards with Flow Line */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/20 via-emerald-500/20 to-amber-500/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {MOCK_HOW_IT_WORKS.map((stepItem, index) => {
              const isSelected = activeStep === index;
              return (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.4 }}
                  onClick={() => setActiveStep(index)}
                  className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-50 dark:bg-slate-900 border-brand-500/60 dark:border-brand-500/60 shadow-xl ring-2 ring-brand-500/20'
                      : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-2xs">
                      {getStepIcon(index)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    "{stepItem.description}"
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                    {stepItem.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
