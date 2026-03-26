import React from "react";


export default function Skills() {
  return (
    <section className="py-32 px-8 bg-surface" id="skills" data-aos="zoom-in-up" data-aos-delay="50">
      <div className="max-w-7xl mx-auto preserve-3d">
        <div data-aos="zoom-in-up" data-aos-delay="100" className="mb-20">
          <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">
            <span className="text-primary-container">02.</span> LOGIC_STACK
          </h2>
          <p className="font-mono text-on-surface-variant text-lg">Infrastructure &amp; logic primitives</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 preserve-3d">
          {/* Languages */}
          <div data-aos="zoom-in-up" data-aos-delay="250" className="md:col-span-2 glass-panel p-10 rounded-2xl flex flex-col justify-between transition-all duration-500">
            <div>
              <div className="float-3d">
                <span className="material-symbols-outlined text-primary text-5xl mb-8">dns</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">Execution</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-surface-container-highest rounded-lg font-mono text-sm text-primary border border-primary/20">Go (Golang)</span>
                <span className="px-4 py-2 bg-surface-container-highest rounded-lg font-mono text-sm text-on-surface border border-outline-variant/30">PostgreSQL</span>
                <span className="px-4 py-2 bg-surface-container-highest rounded-lg font-mono text-sm text-on-surface border border-outline-variant/30">Advanced SQL</span>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-primary/10">
              <p className="text-sm text-primary/70 font-mono tracking-widest">STATUS: HIGH_PERFORMANCE</p>
            </div>
          </div>

          {/* Database */}
          <div data-aos="zoom-in-up" data-aos-delay="400" className="glass-panel p-10 rounded-2xl transition-all duration-500">
            <div className="float-3d" style={{ animationDelay: "-1s" }}>
              <span className="material-symbols-outlined text-tertiary text-5xl mb-8">storage</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-6">Persistence</h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-2 h-2 bg-tertiary rounded-full shadow-[0_0_10px_#ffb873]"></span>
                <span className="group-hover:text-tertiary transition-colors">MySQL Cluster</span>
              </li>
              <li className="flex items-center gap-3 group cursor-default">
                <span className="w-2 h-2 bg-tertiary rounded-full shadow-[0_0_10px_#ffb873]"></span>
                <span className="group-hover:text-tertiary transition-colors">Redis (Pub/Sub)</span>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div data-aos="zoom-in-up" data-aos-delay="550" className="glass-panel p-10 rounded-2xl transition-all duration-500">
            <div className="float-3d" style={{ animationDelay: "-2s" }}>
              <span className="material-symbols-outlined text-primary-container text-5xl mb-8">terminal</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-6">Orchestration</h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all cursor-default">
                <span className="material-symbols-outlined text-sm">chevron_right</span> Docker &amp; K8s
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all cursor-default">
                <span className="material-symbols-outlined text-sm">chevron_right</span> CI/CD Pipelines
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all cursor-default">
                <span className="material-symbols-outlined text-sm">chevron_right</span> Linux Internals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
