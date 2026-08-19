import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';
import { MOCK_AI_INSIGHTS } from '../data/mockData';

export const AIInsightCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const activeInsight = MOCK_AI_INSIGHTS[0];

  return (
    <>
      {/* Visual AI Insight Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white shadow-xl relative overflow-hidden group">
        
        {/* Subtle Background Radial Accent */}
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-200 block">
                AI Insight
              </span>
              <span className="text-[11px] text-white/70">
                Confidence Rating: {activeInsight.confidenceScore}% (Model V4.2)
              </span>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold backdrop-blur-md border border-white/15">
            High Impact
          </span>
        </div>

        {/* Insight Main Body */}
        <p className="text-base sm:text-lg font-semibold text-white leading-relaxed mb-4">
          "Conversion increased 12.8% this week. Organic search accounts for most of the improvement."
        </p>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/80 font-medium">
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span>Driver: Organic SEO traffic (+24.8%)</span>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-3.5 py-1.5 rounded-lg bg-white text-brand-900 font-bold hover:bg-brand-50 transition-all duration-150 flex items-center gap-1.5 shadow-sm group/btn"
          >
            <span>View analysis</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Analysis Detail Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {activeInsight.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    Model Confidence: {activeInsight.confidenceScore}%
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1">
                    Detailed Narrative Analysis
                  </h4>
                  <p className="leading-relaxed">
                    {activeInsight.detailedAnalysis}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300 space-y-1">
                  <h4 className="text-xs font-bold uppercase flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" /> Recommended Action
                  </h4>
                  <p className="text-xs font-medium">
                    {activeInsight.actionableStep}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> Sample model estimation
                </span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-lg hover:opacity-90"
                >
                  Close Modal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
