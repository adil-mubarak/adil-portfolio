import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#060e20] w-full py-16 border-t border-primary/10 relative z-10 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-12">
        <div data-aos="zoom-in-up" data-aos-delay="100" className="font-mono text-sm uppercase tracking-[0.3em] text-primary/40">
          © 2024 COMPONENT_BUILT_BY_BACKEND_ARCHITECT
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="250" className="flex gap-10">
          <a className="font-mono text-sm uppercase tracking-widest text-[#bcc8cf] hover:text-[#5cd4ff] transition-all" href="https://github.com/adil-mubarak">Source</a>
          <a className="font-mono text-sm uppercase tracking-widest text-[#bcc8cf] hover:text-[#5cd4ff] transition-all" href="https://www.linkedin.com/in/adil-mubarak/">Link</a>
          <a className="font-mono text-sm uppercase tracking-widest text-[#bcc8cf] hover:text-[#5cd4ff] transition-all" href="https://mail.google.com/mail/?view=cm&to=aadilmubarake@gmail.com" target="_blank" rel="noopener noreferrer">SMTP</a>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="400" className="flex items-center gap-6">
          <div className="text-right">
            <div className="font-mono text-[10px] text-primary/40 tracking-widest">SYSTEM_VERSION:</div>
            <div className="font-mono text-sm text-primary-container">v2.4.0-STABLE</div>
          </div>
          <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-2xl group-hover:rotate-180 transition-transform duration-1000">
              settings_input_component
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
