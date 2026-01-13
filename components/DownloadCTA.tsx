import React from 'react';
import FadeIn from './ui/FadeIn';

const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-40 relative overflow-hidden flex items-center justify-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-devi-black to-[#0a0a0a]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-devi-violet/20 via-transparent to-transparent opacity-60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <FadeIn>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Ready to upgrade?</h2>
                <p className="text-xl text-gray-400 mb-12">
                    Experience the future of development today.
                    <br />
                    Open source. Community driven. Built for you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-xl shadow-white/5">
                        Download Beta v2.0
                    </button>
                     <button className="px-10 py-4 bg-transparent border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/5 transition-colors">
                        Read Documentation
                    </button>
                </div>
                <p className="mt-8 text-sm text-gray-600">
                    SHA256 Checksum available on GitHub.
                </p>
            </FadeIn>
        </div>
    </section>
  );
};

export default DownloadCTA;