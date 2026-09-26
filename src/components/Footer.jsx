import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Adil Mubarak · Backend Engineer | Go</p>
        <div className="footer-links">
          <a href="https://github.com/adil-mubarak" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/adil-mubarak/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:aadilmubarake@gmail.com">Email</a>
        </div>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
