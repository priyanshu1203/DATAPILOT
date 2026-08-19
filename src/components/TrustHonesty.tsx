import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Zap, Lock, Cpu, CheckCircle } from 'lucide-react';

export const TrustHonesty: React.FC = () => {
  const principles = [
    {
      icon: Eye,
      title: 'Signal over Noise',
      description: 'We filter out random daily fluctuations so your team only acts on meaningful trends.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Read-only data connections. Your business metrics remain strictly yours with end-to-end encryption.'
    },
    {
      icon: Cpu,
      title: 'Deterministic AI',
      description: 'Grounded insights generated strictly from your database schemas, without hallucinated metrics.'
    },
    {
      icon: Zap,
      title: 'Zero Bloat',
      description: 'No 50-step onboarding wizards. Connect your data and see insights in under 2 minutes.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Honest Statement Banner */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Honest Product Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Built for teams that want clarity, not more dashboards.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DataPilot is designed to make analytics easier to understand and easier to act on.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/40 backdrop-blur-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Transparent Guarantee Badge */}
        <div className="mt-12 text-center pt-8 border-t border-white/10">
          <div className="inline-flex items-center gap-2 text-xs text-slate-400 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>No fake logos • No fabricated testimonials • 100% Honest sample data</span>
          </div>
        </div>

      </div>
    </section>
  );
};
