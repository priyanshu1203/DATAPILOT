import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-dot-pattern">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-500/20 via-brand-600/10 to-violet-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header Stack */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-900/10 dark:border-white/15 text-xs font-bold text-slate-900 dark:text-white tracking-wider uppercase shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-pulse" />
            <span>AI-Powered Business Analytics</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]"
          >
            Turn your data into{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 dark:from-brand-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              decisions.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            DataPilot connects your business data, finds what matters, and turns complex analytics into clear actions.
          </motion.p>

          {/* CTAs Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <a
              href="#signup"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Start Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#showcase"
              className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-brand-500 fill-brand-500" />
              <span>See how it works</span>
            </a>
          </motion.div>

          {/* Supporting Note Below CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium pt-1"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              No credit card required
            </span>
            <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              Setup in 2 minutes
            </span>
          </motion.div>

        </div>

        {/* Dashboard Visual Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16"
        >
          <HeroVisual />
        </motion.div>

      </div>
    </section>
  );
};
