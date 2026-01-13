import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-gray-500 text-sm">
          © 2024 DEVI Systems Inc. All rights reserved.
        </div>
        
        <div className="flex items-center gap-8">
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Community</a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;