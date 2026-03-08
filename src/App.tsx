import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesHighlight } from './components/FeaturesHighlight';
import { WhyItMatters } from './components/WhyItMatters';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesPage } from './components/FeaturesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesHighlight />
      <WhyItMatters />
    </>);

}
export function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>);

}