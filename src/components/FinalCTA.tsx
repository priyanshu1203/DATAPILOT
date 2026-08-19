import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="signup" className="py-20 md:py-28 bg-white dark:bg-[#0B0F17] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-900 p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden group">
          
          {/* Decorative Subtle Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto shadow-lg">
              <Compass className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Your data already has the answers.
            </h2>

            <p className="text-lg sm:text-xl text-brand-100 font-medium max-w-xl mx-auto">
              DataPilot helps you find them faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#signup"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-brand-900 bg-white hover:bg-slate-100 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>Start analyzing for free</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <a
                href="#showcase"
                className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md transition-all duration-200"
              >
                Explore the product
              </a>
            </div>

            <p className="text-xs text-white/70 font-medium">
              Free trial available • No credit card required • Instant setup
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
