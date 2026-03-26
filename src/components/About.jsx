import React from "react";


export default function About() {
  return (
    <section className="bg-surface-container-low py-32 px-8" data-aos="zoom-in-up" data-aos-delay="50" id="about">
      <div className="max-w-7xl mx-auto preserve-3d" data-aos="zoom-in-up" data-aos-delay="50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 preserve-3d" data-aos="zoom-in-up" data-aos-delay="50">
          <div data-aos="zoom-in-up" data-aos-delay="100" className="md:col-span-4">
            <h2 className="font-headline text-5xl font-bold tracking-tighter sticky top-32 text-primary">
              01.<br />SYSTEM<br />DESIGNER
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12 preserve-3d scroll-reveal-stagger">
            <div data-aos="zoom-in-up" data-aos-delay="250" className="glass-panel p-10 rounded-2xl relative shadow-2xl">
              <span className="absolute -left-6 -top-4 text-primary-container/30 text-8xl font-mono leading-none">"</span>
              <p className="text-2xl md:text-3xl leading-relaxed text-on-surface font-light">
                Backend engineering isn't just about APIs; it's about building{" "}
                <span className="font-bold text-primary">resilient digital foundations</span> that can weather any load.
              </p>
            </div>
            <p data-aos="zoom-in-up" data-aos-delay="400" className="text-on-surface-variant leading-relaxed text-xl max-w-3xl">
              Currently focused at{" "}
              <span className="text-on-surface font-medium underline decoration-primary/30">Texol</span> on refining
              distributed systems, container orchestration with Docker, and sub-millisecond caching using Redis. I build
              with a "failure-first" mindset, ensuring every system I design is self-healing and auditable.
            </p>
            <div data-aos="zoom-in-up" data-aos-delay="550" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 preserve-3d">
              <div className="glass-panel p-6 rounded-xl transition-all duration-500">
                <span className="font-mono text-xs text-primary-container block mb-2 tracking-widest uppercase">Environment</span>
                <span className="font-headline font-bold text-lg">Hybrid Cloud Architectures</span>
              </div>
              <div className="glass-panel p-6 rounded-xl transition-all duration-500">
                <span className="font-mono text-xs text-primary-container block mb-2 tracking-widest uppercase">Core Objective</span>
                <span className="font-headline font-bold text-lg">High-Availability Logic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
