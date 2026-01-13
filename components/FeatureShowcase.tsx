import React from 'react';
import FadeIn from './ui/FadeIn';
import { Terminal, Cpu, Shield, Layers } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  align: 'left' | 'right';
  visual: React.ReactNode;
}

const FeatureRow: React.FC<FeatureProps> = ({ title, description, icon, align, visual }) => {
  return (
    <div className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-24">
      {/* Text Content */}
      <div className={`flex-1 space-y-6 ${align === 'right' ? 'md:order-2' : ''}`}>
        <FadeIn>
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/5">
            {icon}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{title}</h3>
          <p className="text-lg text-gray-400 leading-relaxed max-w-md">{description}</p>
        </FadeIn>
      </div>

      {/* Visual Content */}
      <div className={`flex-1 w-full ${align === 'right' ? 'md:order-1' : ''}`}>
        <FadeIn delay={200} className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-devi-charcoal border border-white/10 shadow-2xl shadow-black/50 relative group">
           {visual}
           {/* Glossy overlay */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
        </FadeIn>
      </div>
    </div>
  );
};

// Custom visuals for each feature to avoid generic images
const DevToolkitVisual = () => (
  <div className="w-full h-full bg-[#1e1e1e] p-6 font-mono text-sm relative overflow-hidden">
    <div className="flex gap-2 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="text-blue-400">~/projects/devi-core $ <span className="text-white">init --verbose</span></div>
    <div className="text-gray-500 mt-2">Initializing virtual environment...</div>
    <div className="text-green-400 mt-1">✔ Kernel modules loaded</div>
    <div className="text-green-400">✔ Network stack optimized</div>
    <div className="text-green-400">✔ DevTools ready (v2.4.0)</div>
    <div className="text-blue-400 mt-4">~/projects/devi-core $ <span className="text-devi-violet animate-pulse">_</span></div>
    
    {/* Abstract floating elements */}
    <div className="absolute top-10 right-10 w-24 h-24 bg-devi-cyan/10 rounded-full blur-2xl"></div>
  </div>
);

const VirtualizationVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-devi-charcoal to-black relative flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
      {Array.from({ length: 36 }).map((_, i) => (
        <div key={i} className="bg-white/5 rounded-sm"></div>
      ))}
    </div>
    {/* Stacked Cards Effect */}
    <div className="relative w-48 h-32 bg-devi-dark-gray border border-white/10 rounded-lg shadow-xl transform translate-y-8 translate-x-8 opacity-40"></div>
    <div className="relative w-48 h-32 bg-devi-dark-gray border border-white/10 rounded-lg shadow-xl transform translate-y-4 translate-x-4 opacity-70"></div>
    <div className="relative w-48 h-32 bg-[#252525] border border-white/20 rounded-lg shadow-2xl flex items-center justify-center">
        <span className="text-devi-cyan font-mono text-xs tracking-widest uppercase">Ubuntu_Latest</span>
    </div>
  </div>
);

const SecurityVisual = () => (
  <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-devi-violet/10 via-black to-black"></div>
    <div className="relative z-10 w-32 h-32 rounded-full border border-devi-violet/30 flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-devi-violet/10 flex items-center justify-center animate-pulse">
        <Shield size={40} className="text-devi-violet" />
      </div>
    </div>
    {/* Data streams */}
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-devi-violet/50 to-transparent transform -translate-y-1/2"></div>
    <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-devi-violet/50 to-transparent transform -translate-x-1/2"></div>
  </div>
);

const PerformanceVisual = () => (
  <div className="w-full h-full bg-devi-charcoal relative overflow-hidden p-8 flex flex-col justify-end">
    {/* Graph lines */}
    <div className="flex items-end justify-between gap-2 h-32 w-full mb-4">
      {[40, 60, 45, 70, 55, 80, 65, 90, 75, 95].map((h, i) => (
        <div 
          key={i} 
          className="w-full bg-gradient-to-t from-devi-cyan/20 to-devi-cyan rounded-t-sm transition-all duration-500"
          style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
        ></div>
      ))}
    </div>
    <div className="flex justify-between text-xs text-gray-500 font-mono border-t border-white/10 pt-2">
      <span>CPU Usage</span>
      <span className="text-devi-cyan">Optimal</span>
    </div>
  </div>
);

const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6">
      <FeatureRow 
        title="Integrated Developer Toolkit"
        description="Pre-configured environments for Python, Node, Go, and Rust. Includes a heavily customized ZSH terminal, git integration, and container orchestration tools out of the box."
        icon={<Terminal size={24} />}
        align="left"
        visual={<DevToolkitVisual />}
      />
      <FeatureRow 
        title="Native Hypervisor"
        description="Run Linux and Windows subsystems with near-native performance. Our kernel-level isolation ensures your main environment stays clean while you experiment in sandboxes."
        icon={<Layers size={24} />}
        align="right"
        visual={<VirtualizationVisual />}
      />
      <FeatureRow 
        title="Fortified Security"
        description="Zero-trust architecture by default. Automated packet sniffing, firewall visualization, and encrypted file systems keep your intellectual property safe from prying eyes."
        icon={<Shield size={24} />}
        align="left"
        visual={<SecurityVisual />}
      />
      <FeatureRow 
        title="Lightweight Core"
        description="Stripped of telemetry and bloatware. The DEVI Kernel is optimized for compilation speed and multitasking, utilizing every thread of your high-end silicon."
        icon={<Cpu size={24} />}
        align="right"
        visual={<PerformanceVisual />}
      />
    </section>
  );
};

export default FeatureShowcase;