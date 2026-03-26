import React, { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId;
    const mouse = { x: null, y: null, radius: 150 };

    const onMouseMove = (e) => { mouse.x = e.x; mouse.y = e.y; };
    window.addEventListener("mousemove", onMouseMove);

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }
      draw() {
        ctx.fillStyle = "#5cd4ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = (mouse.radius - distance) / mouse.radius;
        if (distance < mouse.radius) {
          this.x -= (dx / distance) * force * this.density;
          this.y -= (dy / distance) * force * this.density;
        } else {
          if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 20;
          if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 20;
        }
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < 80; i++) particles.push(new Particle());
    }
    init();

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(92, 212, 255, ${(1 - dist / 150) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      connect();
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-8 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="floating-node top-[20%] left-[10%] delay-1">struct Node {"{ next *Node }"}</div>
      <div className="floating-node top-[60%] right-[15%] delay-2" style={{ animationDuration: "20s" }}>go func() {"{ defer recover() }"}()</div>
      <div className="floating-node bottom-[15%] left-[25%] delay-3" style={{ animationDuration: "18s" }}>select {"{ case <-ctx.Done(): return }"}</div>
      <div className="floating-node top-[30%] right-[30%] delay-4" style={{ animationDuration: "25s" }}>{"chan interface{}"}</div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center preserve-3d relative z-10">
        <div className="z-10 preserve-3d">
          <div data-aos="zoom-in-up" data-aos-delay="100" className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-sm text-primary tracking-widest uppercase">Kernel Initialized // Architect mode</span>
          </div>
          <h1 data-aos="zoom-in-up" data-aos-delay="250" className="font-headline text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8 text-on-surface">
            Adil <span className="text-primary-container">Mubarak</span>
          </h1>
          <p data-aos="zoom-in-up" data-aos-delay="400" className="font-headline text-2xl md:text-3xl text-on-surface-variant max-w-xl mb-10 leading-tight">
            Backend Architect (Go) designing{" "}
            <span className="text-on-surface underline decoration-primary-container decoration-4 underline-offset-4">
              high-throughput microservices
            </span>{" "}
            &amp; robust logic.
          </p>
          <div data-aos="zoom-in-up" data-aos-delay="550" className="flex flex-wrap gap-4">
            <a className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-headline font-bold flex items-center gap-2 hover:scale-[1.05] active:scale-95 transition-all shadow-xl shadow-primary/20" href="#projects">
              Analyze Systems
              <span className="material-symbols-outlined">analytics</span>
            </a>
            <a className="ghost-border bg-surface-container-low text-on-surface px-8 py-4 rounded-md font-headline font-bold flex items-center gap-2 hover:bg-surface-container-high hover:scale-[1.05] active:scale-95 transition-all" href="https://github.com/adil-mubarak">
              Binary Source
              <span className="material-symbols-outlined">developer_mode</span>
            </a>
          </div>
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="700" className="relative hidden lg:block preserve-3d">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container opacity-20 rounded-full blur-[100px]"></div>
          <div className="glass-panel rounded-xl p-8 font-mono text-sm leading-relaxed shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-700 hover:shadow-primary/10">
            <div className="flex gap-1.5 mb-8">
              <div className="w-3 h-3 rounded-full bg-[rgba(255,180,171,0.6)]"></div>
              <div className="w-3 h-3 rounded-full bg-[rgba(255,184,115,0.6)]"></div>
              <div className="w-3 h-3 rounded-full bg-[rgba(0,173,216,0.6)]"></div>
            </div>
            <div className="space-y-2">
              <p className="text-tertiary">package <span className="text-on-surface">architecture</span></p>
              <p className="text-on-surface-variant mt-4 opacity-50">// Designing for 99.99% uptime</p>
              <p className="mt-2"><span className="text-primary">type </span><span className="text-on-surface">BackendSystem struct {"{"}</span></p>
              <p className="pl-4 text-on-surface">Language: <span className="text-tertiary">"Golang"</span>,</p>
              <p className="pl-4 text-on-surface">Database: <span className="text-tertiary">"PostgreSQL/Redis"</span>,</p>
              <p className="pl-4 text-on-surface">Scale:    <span className="text-tertiary">"Horizontal"</span>,</p>
              <p className="text-on-surface">{"}"}</p>
              <p className="mt-4"><span className="text-primary">func </span><span className="text-on-surface">Deploy(ctx context.Context) {"{"}</span></p>
              <p className="pl-4 text-on-surface-variant italic">// Orchestrating microservices...</p>
              <p className="pl-4 text-on-surface">go srv.ListenAndServe()</p>
              <p className="text-on-surface">{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

