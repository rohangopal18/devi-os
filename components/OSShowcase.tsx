import React from 'react';
import FadeIn from './ui/FadeIn';

const OSShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-devi-black relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-devi-violet/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Ideally Dark.</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            A user interface designed for 18-hour coding sessions. High contrast, zero glare, and complete keyboard navigability.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="relative mx-auto max-w-5xl">
            {/* The Mock Monitor/Screen */}
            <div className="relative rounded-t-xl bg-[#0a0a0a] border border-white/10 shadow-2xl aspect-[16/10] overflow-hidden group">
                {/* Window Header */}
                <div className="h-8 bg-[#1e1e1e] border-b border-black flex items-center px-4 gap-2">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 font-medium">DEVI Workspace — main.tsx</div>
                </div>

                {/* Inner Content Grid */}
                <div className="grid grid-cols-12 h-full bg-[#0d0d0d]">
                    {/* Sidebar */}
                    <div className="col-span-2 border-r border-white/5 p-4 hidden sm:block">
                         <div className="space-y-4">
                            <div className="w-8 h-8 rounded bg-white/10 mb-6"></div>
                            <div className="h-2 w-16 bg-white/10 rounded"></div>
                            <div className="h-2 w-12 bg-white/10 rounded"></div>
                            <div className="h-2 w-20 bg-white/10 rounded"></div>
                            <div className="mt-8 h-2 w-10 bg-white/5 rounded"></div>
                            <div className="h-2 w-14 bg-white/5 rounded"></div>
                         </div>
                    </div>
                    
                    {/* Main Code Area */}
                    <div className="col-span-12 sm:col-span-7 p-6 md:p-10 font-mono text-sm text-left">
                        <div className="text-gray-500 mb-2">// Initializing core subsystems</div>
                        <div className="text-devi-violet">import</div> <span className="text-white">Kernel</span> <div className="text-devi-violet inline">from</div> <span className="text-green-400">'@devi/core'</span>;
                        <br/>
                        <div className="text-devi-violet mt-2">class</div> <span className="text-yellow-400">SystemController</span> <div className="text-white inline">{`{`}</div>
                        <div className="pl-4 border-l border-white/5 ml-1 mt-1">
                             <div className="text-devi-cyan">constructor</div>() {`{`}
                             <div className="pl-4 text-gray-400">
                                 this.optimizeThreadAllocation();<br/>
                                 this.secureMemoryHeap();
                             </div>
                             {`}`}
                        </div>
                        <div className="text-white inline">{`}`}</div>
                        <br/><br/>
                        <div className="inline-block px-2 py-1 bg-devi-violet/20 text-devi-violet rounded text-xs">Compiling... 98%</div>
                    </div>

                    {/* Right Panel / Stats */}
                    <div className="col-span-3 border-l border-white/5 bg-[#0f0f0f] p-4 hidden md:block">
                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">System Load</div>
                        <div className="space-y-4">
                             <div>
                                 <div className="flex justify-between text-xs text-gray-400 mb-1"><span>CPU</span><span>12%</span></div>
                                 <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[12%] bg-devi-cyan"></div></div>
                             </div>
                             <div>
                                 <div className="flex justify-between text-xs text-gray-400 mb-1"><span>MEM</span><span>4.2GB</span></div>
                                 <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[30%] bg-devi-violet"></div></div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Reflection/Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-50"></div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default OSShowcase;