import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nReply-to: ${email}\n\n${message}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&to=aadilmubarake@gmail.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-32 px-8 bg-surface" id="contact" data-aos="zoom-in-up" data-aos-delay="50">
      <div className="max-w-6xl mx-auto preserve-3d">
        <h2 data-aos="zoom-in-up" data-aos-delay="100" className="font-headline text-6xl md:text-8xl font-bold text-primary-container tracking-tighter mb-20 text-center uppercase opacity-20">
          LINK_UP
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 preserve-3d">
          {/* Form Column */}
          <div data-aos="zoom-in-up" data-aos-delay="250" className="glass-panel p-10 md:p-16 rounded-3xl transition-all duration-700 shadow-2xl">
            <h3 className="font-headline text-3xl font-bold mb-10 text-on-surface">Transmit Message</h3>
            <form className="space-y-8 preserve-3d" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl px-6 py-5 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-all focus:ring-4 focus:ring-primary/10"
                  placeholder="Source Name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl px-6 py-5 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-all focus:ring-4 focus:ring-primary/10"
                  placeholder="Return Address (Email)"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl px-6 py-5 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-all focus:ring-4 focus:ring-primary/10 min-h-[180px] resize-none"
                  placeholder="Payload / Requirement Description"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="bg-primary-container text-on-primary font-headline font-bold px-10 py-5 rounded-xl hover:bg-primary transition-all duration-300 w-full md:w-auto active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                type="submit"
              >
                SEND_PACKET
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div data-aos="zoom-in-up" data-aos-delay="450" className="flex flex-col justify-between preserve-3d py-6">
            <div className="space-y-8 preserve-3d">
              <h3 className="font-headline text-3xl font-bold mb-10 text-on-surface">Socket Details</h3>

              <div className="glass-panel p-8 rounded-2xl flex items-center gap-8 transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-all shadow-lg">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-primary-container/60 uppercase tracking-widest mb-1">Email Endpoint</div>
                  <div className="text-on-surface text-lg font-medium">aadilmubarake@gmail.com</div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl flex items-center gap-8 transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-all shadow-lg">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-primary-container/60 uppercase tracking-widest mb-1">Direct Line</div>
                  <div className="text-on-surface text-lg font-medium">+91 7012814660</div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl flex items-center gap-8 transition-all duration-500 hover:bg-surface-container-high hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-all shadow-lg">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <div className="text-sm font-mono text-primary-container/60 uppercase tracking-widest mb-1">Deployment Zone</div>
                  <div className="text-on-surface text-lg font-medium">India</div>
                </div>
              </div>
            </div>

            <div className="pt-16">
              <p className="font-mono text-xs text-on-surface-variant mb-8 uppercase tracking-[0.4em] font-bold">
                Social Network Interconnects
              </p>
              <div className="flex gap-8">
                <a
                  className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all hover:-translate-y-2 shadow-xl"
                  href="https://www.linkedin.com/in/adil-mubarak/"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all hover:-translate-y-2 shadow-xl"
                  href="https://github.com/adil-mubarak"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all hover:-translate-y-2 shadow-xl"
                  href="https://mail.google.com/mail/?view=cm&to=aadilmubarake@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-2xl">alternate_email</span>
                </a>
                <a
                  className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all hover:-translate-y-2 shadow-xl"
                  href="https://wa.me/917012814660"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
