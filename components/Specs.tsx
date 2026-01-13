import React from 'react';
import FadeIn from './ui/FadeIn';

const Specs: React.FC = () => {
  const specs = [
    { label: "Architecture", value: "x86_64, ARM64 (Apple Silicon Support)" },
    { label: "Minimum RAM", value: "8 GB (16 GB Recommended)" },
    { label: "Storage Space", value: "25 GB SSD" },
    { label: "Graphics", value: "Vulkan 1.2+ Compatible GPU" },
    { label: "Kernel", value: "Hybrid Monolithic v6.4" },
  ];

  return (
    <section id="specs" className="py-32 bg-devi-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-16 text-center">System Requirements</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
            {specs.map((spec, index) => (
                <FadeIn key={spec.label} delay={index * 50}>
                    <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-devi-charcoal hover:bg-[#1a1a1a] transition-colors">
                        <span className="text-gray-400 font-medium">{spec.label}</span>
                        <span className="text-white font-semibold text-lg mt-2 md:mt-0">{spec.value}</span>
                    </div>
                </FadeIn>
            ))}
        </div>
        
        <FadeIn delay={300}>
            <p className="text-center text-gray-500 mt-12 text-sm">
                *Hardware acceleration requires proprietary drivers, which can be installed during setup.
            </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Specs;