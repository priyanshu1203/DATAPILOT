import { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { TrustHonesty } from './components/TrustHonesty';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { KonamiEasterEgg } from './components/KonamiEasterEgg';
import { LoginModal } from './components/LoginModal';

export function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans overflow-x-hidden">
      
      {/* Sticky Main Navbar */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} onLoginClick={() => setLoginModalOpen(true)} />

      {/* Main Page Layout Sections */}
      <main id="main-content">
        {/* 1. Hero Section + Dashboard Visual */}
        <Hero />

        {/* 2. Interactive Product Deep-Dive Showcase */}
        <ProductShowcase />

        {/* 3. Four Core Capabilities Feature Cards */}
        <Features />

        {/* 4. Three-Step Workflow */}
        <HowItWorks />

        {/* 5. Honest Product Positioning */}
        <TrustHonesty />

        {/* 6. High-Conversion Final CTA */}
        <FinalCTA />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Secret Easter Egg Listener */}
      <KonamiEasterEgg />

      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />

    </div>
  );
}

export default App;
