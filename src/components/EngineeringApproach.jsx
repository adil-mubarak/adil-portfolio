import React from "react";

const principles = [
  ["01", "Start with the contract", "Clarify inputs, outputs, failure modes, and ownership before implementation. Good API design makes the rest of the system easier to reason about."],
  ["02", "Protect data correctness", "Use validation, explicit transactions, reusable queries, migrations, and revision-aware writes where business state can conflict."],
  ["03", "Make failure visible", "Prefer structured errors, timeouts, bounded work, useful logs, and predictable integration behavior over silent failure."],
  ["04", "Ship for maintenance", "Keep services testable, document the setup, automate checks, and choose simple boundaries that a team can operate."],
];

export default function EngineeringApproach() {
  return (
    <section className="section-frame section-muted" id="approach" aria-labelledby="approach-title">
      <div className="section-heading">
        <p className="section-kicker">05 / Engineering approach</p>
        <h2 id="approach-title">Practical systems thinking, from request to runtime.</h2>
      </div>
      <div className="principles-grid">
        {principles.map(([number, title, description]) => (
          <article className="principle" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
