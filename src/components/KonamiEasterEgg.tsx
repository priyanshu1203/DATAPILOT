import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useKonamiCode } from '../hooks/useKonamiCode';

export const KonamiEasterEgg: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);

  useKonamiCode(() => {
    setUnlocked(true);
    // Fire confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

  if (!unlocked) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          className="p-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white shadow-2xl border border-white/20 relative overflow-hidden"
        >
          <button
            onClick={() => setUnlocked(false)}
            className="absolute top-3 right-3 p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
              <Trophy className="w-6 h-6 text-yellow-100 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-yellow-200">
                Secret Unlocked!
              </span>
              <h4 className="text-base font-bold text-white leading-tight">
                Konami Code Master! 🎮
              </h4>
            </div>
          </div>

          <p className="text-xs text-white/90 leading-relaxed font-medium">
            You found DataPilot's secret Easter egg! You have true senior frontend taste. Keep building extraordinary products.
          </p>

          <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-yellow-100 font-mono">
            <span>Code: ↑ ↑ ↓ ↓ ← → ← → B A</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> DataPilot Mode
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
