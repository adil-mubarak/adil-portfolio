import React from "react";

export default function About() {
  return (
    <section className="section-frame section-muted" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-kicker">01 / About</p>
        <h2 id="about-title">Backend work that connects product intent to dependable systems.</h2>
      </div>
      <div className="about-grid">
        <div className="about-lead">
          <p>I am a Backend Developer at Texol, working on Vanforce and TSEEP, two SaaS products where APIs, business rules, data, and integrations have to stay aligned.</p>
        </div>
        <div className="about-body">
          <p>My day-to-day work includes Go REST APIs, MySQL-backed reporting and business logic, reusable queries, migrations, Redis caching, authentication, exports, payment webhooks, and external HTTP/JSON integrations.</p>
          <p>I am interested in international backend and Go teams that value clear interfaces, thoughtful data design, operational reliability, and maintainable delivery.</p>
        </div>
      </div>
    </section>
  );
}
