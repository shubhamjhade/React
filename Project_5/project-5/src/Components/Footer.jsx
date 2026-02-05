import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
        
        <div className="mb-8 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wider opacity-90">
            Project RERA No: PRM/KA/RERA/1251/446/PR/171223/006499
          </p>
          <p className="text-xs font-medium uppercase tracking-wider opacity-90">
            Agent RERA No: AG/KA/RERA/1251/446/AG/230119/003415
          </p>
        </div>

    
        <div className="mx-auto mb-8 h-px w-full max-w-4xl bg-red-500/50"></div>

   
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-red-100 md:flex-row md:px-12">
          
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white hover:underline">Disclaimer</a>
            <a href="#" className="hover:text-white hover:underline">Privacy Policy</a>
          </div>

    
          <p>
            © 2026 Mahindra Blossom. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;