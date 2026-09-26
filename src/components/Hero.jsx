import React from "react";

export default function Hero() {
  return (
    <section className="hero section-frame" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for international opportunities</p>
          <h1 id="hero-title">Backend Engineer<br /><span>Go (Golang)</span></h1>
          <p className="hero-lede">I build reliable APIs, database-backed workflows, and integrations for SaaS products.</p>
          <p className="hero-supporting">Production experience across Go, REST APIs, MySQL, Redis, Docker, and backend reliability.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="https://github.com/adil-mubarak" target="_blank" rel="noreferrer">GitHub</a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/adil-mubarak/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button button-secondary" href="/cv.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Backend engineering focus">
          <div className="panel-topline"><span>backend/service.go</span><span>GO</span></div>
          <div className="code-block" role="img" aria-label="Example Go backend service code">
            <div><span className="code-muted">type</span> Service <span className="code-muted">struct</span> &#123;</div>
            <div className="code-indent">Language: <span className="code-string">&quot;Go&quot;</span>,</div>
            <div className="code-indent">Data:     <span className="code-string">&quot;MySQL + Redis&quot;</span>,</div>
            <div className="code-indent">Delivery: <span className="code-string">&quot;Docker / tests&quot;</span>,</div>
            <div>&#125;</div>
            <div className="code-gap"><span className="code-muted">func</span> (s Service) <span className="code-accent">Serve</span>(ctx context.Context) error &#123;</div>
            <div className="code-indent code-comment">// validate, persist, respond</div>
            <div className="code-indent"><span className="code-keyword">return</span> s.api.ListenAndServe(ctx)</div>
            <div>&#125;</div>
          </div>
          <div className="panel-footer"><span className="signal" /> APIs with clear contracts and useful failure modes</div>
        </div>
      </div>
      <div className="hero-metrics" aria-label="Professional focus areas">
        <div><strong>01</strong><span>Business APIs</span></div>
        <div><strong>02</strong><span>Data workflows</span></div>
        <div><strong>03</strong><span>Reliable delivery</span></div>
      </div>
    </section>
  );
}
