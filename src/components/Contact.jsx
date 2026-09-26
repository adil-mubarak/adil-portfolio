import React, { useState } from "react";
import CTA from "./CTA";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nReply-to: ${email}\n\n${message}`);
    window.location.href = `mailto:aadilmubarake@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-frame section-contact" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="section-kicker">07 / Contact</p>
        <h2 id="contact-title">Have a backend problem to solve?</h2>
        <p className="section-intro">For international backend, Go, and platform opportunities, email is the best way to reach me.</p>
      </div>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required value={message} onChange={(event) => setMessage(event.target.value)} />
          </div>
          <button className="button button-primary" type="submit">Open email draft <span aria-hidden="true">↗</span></button>
        </form>
        <div className="contact-details">
          <a href="mailto:aadilmubarake@gmail.com"><span>Email</span><strong>aadilmubarake@gmail.com</strong></a>
          <a href="https://www.linkedin.com/in/adil-mubarak/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/adil-mubarak</strong></a>
          <a href="https://github.com/adil-mubarak" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/adil-mubarak</strong></a>
          <p>Based in Kerala, India. Open to international and remote teams.</p>
        </div>
      </div>
      <CTA />
    </section>
  );
}
