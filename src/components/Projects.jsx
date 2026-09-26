import React from "react";

const projects = [
  {
    number: "01",
    name: "Vanforce",
    type: "Professional · SaaS platform",
    description: "Sales force automation and distribution management platform for field sales, routes, customers, orders, inventory, collections, reporting, and analytics.",
    role: "Backend development at Texol",
    work: "Go APIs for product intelligence, dashboards, target planning, inventory snapshots, operational risk logic, and reporting workflows.",
    tags: ["Go", "MySQL", "Redis", "Docker"],
  },
  {
    number: "02",
    name: "TSEEP",
    type: "Professional · Multi-tenant platform",
    description: "Educational assessment and intelligence platform covering institutions, assessments, scoring, reports, payments, recommendations, certificates, and exports.",
    role: "Backend development at Texol",
    work: "Go business logic for weighted and consolidated reports, export workflows, authentication, payment webhooks, and external integrations.",
    tags: ["Go", "Chi", "MySQL", "Redis"],
  },
  {
    number: "03",
    name: "Panel Reader Backend",
    type: "Public GitHub · Product project",
    description: "A workflow for importing comic, manga, webtoon, and PDF content, detecting panels, reviewing results, and exporting structured output.",
    role: "Independent project",
    work: "Go backend with SQLite, a React frontend, Python AI service, Docker Compose, safe file handling, revision-aware updates, and integration tests.",
    tags: ["Go", "React", "Python", "Docker"],
    link: "https://github.com/adil-mubarak/panel-reader-backend",
  },
  {
    number: "04",
    name: "Discount Engine",
    type: "Public GitHub · Go service",
    description: "A focused service for evaluating customer and order rules to select applicable fixed or percentage discounts.",
    role: "Independent project",
    work: "Separated rule evaluation from HTTP handling and added unit coverage for empty results, conflicts, and priority behavior.",
    tags: ["Go", "HTTP", "Rules", "Testing"],
    link: "https://github.com/adil-mubarak/Discount_Engine",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-index">{project.number}</div>
      <div className="project-content">
        <p className="card-kicker">{project.type}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-detail-grid">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Technical work</span><strong>{project.work}</strong></div>
        </div>
        <div className="tag-row">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        {project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section-frame section-muted" id="projects" aria-labelledby="projects-title">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">03 / Selected projects</p>
          <h2 id="projects-title">Systems, products, and focused experiments.</h2>
        </div>
        <p className="section-note">Professional work is described at a non-confidential level.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  );
}
