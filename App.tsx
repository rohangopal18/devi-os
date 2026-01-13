import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeatureShowcase from './components/FeatureShowcase';
import OSShowcase from './components/OSShowcase';
import Specs from './components/Specs';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll progress listener for subtle global effects if needed
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrolled}px`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-devi-black text-white selection:bg-devi-violet selection:text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeatureShowcase />
        <OSShowcase />
        <Specs />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;