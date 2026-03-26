import React, { useEffect, useState, useRef } from "react";

const NAV_LINKS = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Architecture", href: "#projects" },
  { label: "Runtime",      href: "#experience" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#hero");
  const [indicator, setIndicator] = useState(null);
  const linkRefs = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));

    const handleScroll = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.3;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= triggerY) current = id;
      });
      setActive(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeEl = linkRefs.current[active];
    const navEl = navRef.current;
    if (!activeEl || !navEl) return;
    const navRect = navEl.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width });
  }, [active]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-md border-b border-primary/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-black text-[#00ADD8] font-['Space_Grotesk'] tracking-tighter flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-container">hub</span>
          GoBackend.dev
        </div>
        <div ref={navRef} className="hidden md:flex items-center gap-8 relative">
          {indicator && (
            <span
              className="absolute bottom-0 h-0.5 bg-[#5cd4ff] rounded-full pointer-events-none"
              style={{
                left: indicator.left,
                width: indicator.width,
                transition: "left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          )}
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              ref={(el) => { linkRefs.current[href] = el; }}
              className={
                active === href
                  ? "text-[#5cd4ff] font-['Space_Grotesk'] font-bold tracking-tighter transition-colors duration-300 active:scale-95"
                  : "text-[#dae2fd] opacity-80 font-['Space_Grotesk'] font-bold tracking-tighter hover:text-[#5cd4ff] hover:opacity-100 transition-colors duration-300 active:scale-95"
              }
            >
              {label}
            </a>
          ))}
        </div>
        <a
          className="bg-primary-container text-on-primary px-6 py-2.5 rounded hover:bg-primary transition-all duration-300 font-headline font-bold uppercase tracking-tight text-sm active:scale-95 shadow-lg shadow-primary/20"
          href="mailto:aadilmubarake@gmail.com"
        >
          Initiate Link
        </a>
      </div>
    </nav>
  );
}
