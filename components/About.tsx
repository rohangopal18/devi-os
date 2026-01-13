import React from 'react';
import FadeIn from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-devi-black relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
            An operating system architected for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-devi-cyan to-devi-violet">builders of tomorrow.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            DEVI OS isn't just a platform; it's a precision instrument. Designed from the kernel up for cybersecurity research, full-stack engineering, and high-performance virtualization. We removed the bloat so you can focus on the code.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;