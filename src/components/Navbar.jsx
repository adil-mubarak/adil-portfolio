import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Approach", "#approach"],
  ["GitHub", "#github"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Adil Mubarak home">
          <span className="brand-mark" aria-hidden="true">AM</span>
          <span>Adil Mubarak</span>
        </a>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={isDark ? "Use light theme" : "Use dark theme"}>
            <span aria-hidden="true">{isDark ? "☼" : "◐"}</span>
          </button>
          <a className="nav-cta" href="#contact">Let&apos;s talk</a>
          <button className="menu-button" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close menu" : "Open menu"}>
            <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className="mobile-nav" data-open={isOpen}>
        {NAV_LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>
        ))}
      </div>
    </header>
  );
}
