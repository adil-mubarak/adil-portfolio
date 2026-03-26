import React from "react";


export default function Projects() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="projects" data-aos="zoom-in-up" data-aos-delay="50">
      <div className="max-w-7xl mx-auto preserve-3d">
        <div data-aos="zoom-in-up" data-aos-delay="100" className="flex justify-between items-end mb-20">
          <div>
            <h2 className="font-headline text-5xl font-bold tracking-tighter">
              <span className="text-primary-container">03.</span> COMPILED_WORKS
            </h2>
          </div>
          <div className="hidden md:block font-mono text-sm text-on-surface-variant uppercase tracking-widest">
            Infrastructure Index: 02
          </div>
        </div>

        <div className="grid grid-cols-1 gap-20 preserve-3d">
          {/* Project 1: VanForces */}
          <div data-aos="zoom-in-up" data-aos-delay="250" className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 rounded-3xl p-6 glass-panel">
            <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-surface-container-highest relative preserve-3d shadow-inner h-[450px]">
              <div className="w-full h-full flex items-center justify-center p-16 opacity-60 group-hover:opacity-100 transition-all duration-1000 preserve-3d">
                <img
                  alt="VanForces Logo"
                  className="max-w-full max-h-full object-contain filter brightness-110 contrast-125"
                  src="/VF-Logo-AI.png"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="bg-primary/20 text-primary text-xs font-mono px-3 py-1.5 rounded-full backdrop-blur-xl border border-primary/30">
                  RELIABILITY: 99.9%
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8 preserve-3d p-4">
              <div className="font-mono text-primary-container text-sm tracking-[0.3em]">ARCHITECTURE // 01</div>
              <h3 className="font-headline text-5xl font-bold tracking-tight">VanForces™</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Enterprise-scale ERP backend for logistics. Engineered complex state machines for inventory
                synchronization and route optimization algorithms handling thousands of concurrent drivers.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-mono bg-surface/50 px-3 py-2 rounded-lg border border-primary/20">Go Services</span>
                <span className="text-xs font-mono bg-surface/50 px-3 py-2 rounded-lg border border-primary/20">Relational Sharding</span>
                <span className="text-xs font-mono bg-surface/50 px-3 py-2 rounded-lg border border-primary/20">gRPC</span>
              </div>
              <div className="pt-6">
                <a
                  className="text-primary font-mono text-sm hover:translate-x-4 transition-transform inline-flex items-center gap-3 group/link font-bold"
                  href="#"
                >
                  [ ANALYZE_ARCHITECTURE ]
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover/link:opacity-100 transition-opacity">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: TSEEP */}
          <div data-aos="zoom-in-up" data-aos-delay="450" className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 rounded-3xl p-6 glass-panel">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-8 preserve-3d p-4">
              <div className="font-mono text-primary-container text-sm tracking-[0.3em]">ARCHITECTURE // 02</div>
              <h3 className="font-headline text-5xl font-bold tracking-tight">TSEEP</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Logic-intensive AI orchestration platform. Developed the scoring engine based on MI/EI frameworks,
                integrating deep backend processing for real-time skill evaluation and career pathing.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-mono bg-surface/50 px-3 py-2 rounded-lg border border-primary/20">Concurrent Processing</span>
                <span className="text-xs font-mono bg-surface/50 px-3 py-2 rounded-lg border border-primary/20">AI Integration</span>
                <span className="text-xs font-mono bg-surface/50 px-3 py-2 rounded-lg border border-primary/20">RESTful SDK</span>
              </div>
              <div className="pt-6">
                <a
                  className="text-primary font-mono text-sm hover:translate-x-4 transition-transform inline-flex items-center gap-3 group/link font-bold"
                  href="#"
                >
                  [ VERIFY_MODULES ]
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover/link:opacity-100 transition-opacity">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-2xl bg-surface-container-highest relative preserve-3d shadow-inner h-[450px]">
              <div className="w-full h-full flex items-center justify-center p-24 opacity-60 group-hover:opacity-100 transition-all duration-1000 preserve-3d">
                <img
                  alt="TSEEP Logo"
                  className="max-w-full max-h-full object-contain filter brightness-110"
                  src="/tseep lg.jpg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 right-8">
                <span className="bg-tertiary/20 text-tertiary text-xs font-mono px-4 py-2 rounded-full backdrop-blur-xl border border-tertiary/30">
                  ENV: DISTRIBUTED_BETA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
