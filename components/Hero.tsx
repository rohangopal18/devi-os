import React from 'react';
import FadeIn from './ui/FadeIn';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-devi-violet/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-devi-cyan/10 rounded-full blur-[100px] pointer-events-none opacity-30 mix-blend-screen"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-devi-cyan animate-pulse"></span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">v2.0 Beta Release</span>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
            DEVI OS
          </h1>
        </FadeIn>

        <FadeIn delay={500}>
          <p className="text-xl md:text-3xl font-light text-gray-400 max-w-3xl mx-auto tracking-tight mb-10 leading-relaxed">
            Developers and Engineers’ <span className="text-white font-normal">Virtual Integrated OS</span>.
            <br className="hidden md:block" />
            Power without friction. Security without compromise.
          </p>
        </FadeIn>

        <FadeIn delay={700}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="group relative px-8 py-3.5 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Download Beta</span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-8 py-3.5 text-white font-medium hover:text-devi-cyan transition-colors"
            >
              Explore Features <ChevronRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Abstract UI Hint at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-devi-charcoal to-transparent opacity-50 blur-xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;