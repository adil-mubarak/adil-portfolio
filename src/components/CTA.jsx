import React from "react";


export default function CTA() {
  return (
    <section className="py-32 px-8 bg-primary-container overflow-hidden relative" data-aos="zoom-in-up" data-aos-delay="50">
      <div className="absolute inset-0 opacity-10 font-mono text-[20vw] select-none pointer-events-none -translate-y-1/4">
        SCALE
      </div>
      <div className="max-w-7xl mx-auto text-center preserve-3d relative z-10">
        <h2 data-aos="zoom-in-up" data-aos-delay="100" className="font-headline text-6xl md:text-8xl font-bold text-on-primary tracking-tighter mb-12">
          Need a robust{" "}
          <span className="bg-on-primary text-primary-container px-6 py-2 rounded-xl">Engine?</span>
        </h2>
        <div data-aos="zoom-in-up" data-aos-delay="250" className="flex flex-wrap justify-center gap-8">
          <a
            className="bg-on-primary text-primary-container px-12 py-6 rounded-xl font-headline font-black text-2xl active:scale-95 transition-transform flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] btn-fill"
            href="mailto:aadilmubarake@gmail.com"
          >
            INITIATE_CONTACT
            <span className="material-symbols-outlined font-bold">handshake</span>
          </a>
        </div>
      </div>
    </section>
  );
}
