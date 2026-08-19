import React from 'react';
import { Compass, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#080B11] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold shadow-sm">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                DataPilot
              </span>
            </a>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              DataPilot is an AI-powered analytics platform that connects business data sources, identifies important trends, and turns complex analytics into clear actionable insights.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="X (Twitter)" className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#showcase" className="hover:text-slate-900 dark:hover:text-white transition-colors">Overview</a></li>
              <li><a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">Documentation <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Company & Legal Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} DataPilot Inc. All rights reserved. Built for Acdyon Technologies Frontend Challenge Part 2.</p>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-500 font-mono text-[11px]">All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
