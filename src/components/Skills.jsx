import React from "react";

const skillGroups = [
  ["Languages", ["Go (Golang)", "SQL"]],
  ["Backend", ["REST APIs", "HTTP", "Chi Router", "Validation", "Testing"]],
  ["Databases", ["MySQL", "Redis", "Database design", "SQL optimization", "Migrations"]],
  ["Delivery", ["Docker", "Docker Compose", "Git", "GitHub", "GitLab", "Linux"]],
  ["Security & integrations", ["JWT", "bcrypt", "OTP expiry", "Token blacklisting", "Payment webhooks", "HTTP/JSON"]],
  ["Tools", ["Swagger/OpenAPI", "Testing", "Migrations", "HTTP/JSON"]],
];

export default function Skills() {
  return (
    <section className="section-frame" id="skills" aria-labelledby="skills-title">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">04 / Technical skills</p>
          <h2 id="skills-title">A focused backend toolkit.</h2>
        </div>
        <p className="section-note">Grouped by how the tools are used, not as a keyword cloud.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map(([title, items]) => (
          <article className="skill-group" key={title}>
            <h3>{title}</h3>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
