import React from "react";

const responsibilities = [
  "Develop and maintain Go REST APIs with layered repository and service architecture.",
  "Build reporting, KPI, filtering, pagination, comparison, drill-down, and inventory workflows.",
  "Implement target planning rules with overlap validation, parent-child limits, and transactions.",
  "Work with MySQL datasets through reusable queries, migrations, and SQL optimization.",
  "Build authentication, export pipelines, payment webhooks, and external service integrations.",
  "Improve reliability with validation, structured errors, timeouts, retries, and Redis caching.",
];

export default function Experience() {
  return (
    <section className="section-frame" id="experience" aria-labelledby="experience-title">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">02 / Experience</p>
          <h2 id="experience-title">Professional experience</h2>
        </div>
        <p className="section-note">Selected responsibilities, written at a public level.</p>
      </div>
      <article className="experience-card">
        <div className="experience-meta">
          <div>
            <p className="card-kicker">Texol</p>
            <h3>Backend Developer</h3>
          </div>
          <time dateTime="2025-02">February 2025 — Present</time>
        </div>
        <p className="experience-summary">Working on Vanforce, a sales force automation and distribution management platform, and TSEEP, a multi-tenant educational assessment and intelligence platform.</p>
        <ul className="responsibility-list">
          {responsibilities.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
    </section>
  );
}
