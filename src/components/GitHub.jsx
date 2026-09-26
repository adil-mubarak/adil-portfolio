import React from "react";

const repositories = [
  ["panel-reader-backend", "Go backend with a React frontend, Python AI service, Docker Compose, persistence, and integration tests."],
  ["Discount_Engine", "Focused Go business-logic service with JSON rules, HTTP handling, and unit tests."],
  ["grpc-demo", "Learning project covering unary, server-streaming, client-streaming, and bidirectional gRPC."],
];

export default function GitHub() {
  return (
    <section className="section-frame" id="github" aria-labelledby="github-title">
      <div className="github-layout">
        <div className="section-heading">
          <p className="section-kicker">06 / GitHub</p>
          <h2 id="github-title">Public work worth opening.</h2>
          <p className="section-intro">A small, deliberate set of repositories is better than a wall of unfinished experiments. These projects show the strongest public evidence of my current direction.</p>
          <a className="text-link" href="https://github.com/adil-mubarak" target="_blank" rel="noreferrer">Open GitHub profile <span aria-hidden="true">↗</span></a>
        </div>
        <div className="repo-list">
          {repositories.map(([name, description]) => (
            <a className="repo-card" href={`https://github.com/adil-mubarak/${name}`} target="_blank" rel="noreferrer" key={name}>
              <div><span className="repo-type">PUBLIC REPOSITORY</span><h3>{name}</h3><p>{description}</p></div>
              <span className="repo-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
