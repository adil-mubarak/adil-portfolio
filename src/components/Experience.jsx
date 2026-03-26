import React from "react";


export default function Experience() {
  return (
    <section className="py-32 px-8 bg-surface" id="experience" data-aos="zoom-in-up" data-aos-delay="50">
      <div className="max-w-7xl mx-auto preserve-3d">
        <div data-aos="zoom-in-up" data-aos-delay="100" className="mb-20">
          <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">
            <span className="text-primary-container">04.</span> RUNTIME_LOGS
          </h2>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="250" className="relative border-l-2 border-primary/10 ml-6 pl-16 space-y-24">
          <div className="relative group preserve-3d">
            <div className="absolute -left-[74px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_#5cd4ff] group-hover:scale-150 transition-transform duration-500"></div>
            <div className="glass-panel p-10 rounded-2xl transform transition-all duration-700 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8">
                <h3 className="font-headline text-3xl font-bold text-primary">Senior Backend Developer</h3>
                <span className="font-mono text-on-surface-variant text-sm bg-surface-variant/30 px-4 py-1 rounded-full border border-outline-variant/20 uppercase tracking-widest mt-2 md:mt-0">
                  2023 — Present
                </span>
              </div>
              <div className="mb-8">
                <span className="text-2xl text-on-surface font-semibold tracking-tight">Texol Systems</span>
              </div>
              <div className="space-y-6 max-w-4xl">
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Leading the architectural overhaul of core backend services. Implementing high-performance Go patterns
                  to reduce latency and improve system throughput.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 font-mono text-sm">
                  <li className="flex items-start gap-3 group/item cursor-default">
                    <span className="text-primary-container mt-1 material-symbols-outlined text-[18px] group-hover/item:rotate-90 transition-transform">bolt</span>
                    <span className="group-hover/item:text-primary transition-colors">Go Microservices &amp; API Orchestration</span>
                  </li>
                  <li className="flex items-start gap-3 group/item cursor-default">
                    <span className="text-primary-container mt-1 material-symbols-outlined text-[18px] group-hover/item:rotate-90 transition-transform">database</span>
                    <span className="group-hover/item:text-primary transition-colors">Distributed SQL Performance Tuning</span>
                  </li>
                  <li className="flex items-start gap-3 group/item cursor-default">
                    <span className="text-primary-container mt-1 material-symbols-outlined text-[18px] group-hover/item:rotate-90 transition-transform">layers</span>
                    <span className="group-hover/item:text-primary transition-colors">Kubernetes Deployment Strategies</span>
                  </li>
                  <li className="flex items-start gap-3 group/item cursor-default">
                    <span className="text-primary-container mt-1 material-symbols-outlined text-[18px] group-hover/item:rotate-90 transition-transform">security</span>
                    <span className="group-hover/item:text-primary transition-colors">Zero-Trust Security Architectures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
