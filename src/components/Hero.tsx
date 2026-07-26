import { useEffect, useRef, useState, type CSSProperties } from "react";
import equipeNP from "@/assets/equipe_NP_home.jpeg";

const WHATSAPP = "5519989750741";

/* Paleta oficial da marca NP — creme, salmão, cinza, ink */
const CREAM = "#F6F1EC";
const CREAM_DEEP = "#EFE7E0";
const SALMON = "#E9B6A2";
const INK = "#1F1F21";
const GREY = "#6E6E70";

const v = (o: Record<string, string | number>) => o as CSSProperties;

const marquee = [
  "Vigilância Sanitária",
  "Boas Práticas",
  "Capacitação de Equipes",
  "Rotulagem de Alimentos",
  "Padronização",
  "Alvará Sanitário",
];

const stats = [
  { n: "300+", l: "Operações atendidas" },
  { n: "15+", l: "Anos de estrada" },
  { n: "92%", l: "Aprovação em auditoria" },
];

const Hero = () => {
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const dx = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(${dx * -14}px, ${dy * -14}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const magnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = btnRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.16}px, ${
      (e.clientY - (r.top + r.height / 2)) * 0.24
    }px)`;
  };
  const resetMagnetic = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <section
      className={`hero-np relative w-full overflow-hidden ${inView ? "is-in" : ""}`}
      style={{ background: CREAM }}
      aria-label="NP Consultoria Alimentação"
    >
      {/* Fundo: campos salmão + grid editorial */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[22vw] -right-[14vw] w-[52vw] h-[52vw] rounded-full"
          style={{ background: `radial-gradient(circle, ${SALMON}55, transparent 68%)`, filter: "blur(30px)" }}
        />
        <div
          className="absolute -bottom-[26vw] -left-[18vw] w-[46vw] h-[46vw] rounded-full"
          style={{ background: `radial-gradient(circle, ${CREAM_DEEP}, transparent 70%)`, filter: "blur(20px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(${INK} 1px, transparent 1px), linear-gradient(90deg, ${INK} 1px, transparent 1px)`,
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(circle at 50% 40%, #000 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 40%, #000 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="anim up flex items-center gap-3" style={v({ "--d": "0.05s" })}>
              <span className="h-px w-8 sm:w-12" style={{ background: SALMON }} />
              <p
                className="uppercase font-semibold text-[10px] sm:text-[11px]"
                style={{ color: GREY, letterSpacing: "0.24em" }}
              >
                Assessoria e Consultoria · Serviços de Alimentação
              </p>
            </div>

            <h1
              className="font-playfair mt-6 sm:mt-8"
              style={{
                color: INK,
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontSize: "clamp(2.15rem, 6.4vw, 4.9rem)",
              }}
            >
              <span className="mask"><span className="inner" style={v({ "--d": "0.14s" })}>Sua cozinha em</span></span>
              <span className="mask">
                <span className="inner" style={v({ "--d": "0.28s" })}>
                  <span className="relative inline-block">
                    <span className="hl" aria-hidden />
                    <span className="relative" style={{ fontStyle: "italic", fontWeight: 400 }}>conformidade</span>
                  </span>
                </span>
              </span>
              <span className="mask"><span className="inner" style={v({ "--d": "0.42s" })}>do processo ao prato.</span></span>
            </h1>

            <p
              className="anim up mt-6 sm:mt-8 max-w-xl font-light text-[15px] sm:text-lg leading-relaxed"
              style={v({ "--d": "0.62s", color: GREY })}
            >
              Consultoria técnica, capacitação de equipes e adequação sanitária para
              restaurantes, cozinhas industriais e indústrias que não abrem mão de
              segurança dos alimentos.
            </p>

            {/* CTAs */}
            <div className="anim up mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4" style={v({ "--d": "0.76s" })}>
              <a
                ref={btnRef}
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={magnetic}
                onMouseLeave={resetMagnetic}
                className="group relative inline-flex items-center justify-center px-7 sm:px-10 py-4 text-[11px] sm:text-[12px] font-semibold uppercase overflow-hidden rounded-full"
                style={{
                  background: INK,
                  color: CREAM,
                  letterSpacing: "0.18em",
                  boxShadow: `0 20px 44px -16px ${INK}66`,
                  transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
                  style={{ background: `linear-gradient(110deg, transparent 30%, ${SALMON}66 50%, transparent 70%)` }}
                />
                <span className="relative">Solicitar diagnóstico</span>
              </a>

              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-4 text-[11px] sm:text-[12px] font-semibold uppercase rounded-full transition-colors"
                style={{ border: `1px solid ${SALMON}`, color: INK, letterSpacing: "0.18em", background: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = `${SALMON}33`)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Conhecer soluções
              </button>
            </div>

            {/* Stats */}
            <div className="anim up mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg" style={v({ "--d": "0.9s" })}>
              {stats.map((s) => (
                <div key={s.n} className="pt-4" style={{ borderTop: `1px solid ${SALMON}` }}>
                  <p className="font-playfair leading-none" style={{ color: INK, fontSize: "clamp(1.4rem, 3.4vw, 2.1rem)" }}>
                    {s.n}
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[11px] uppercase leading-snug" style={{ color: GREY, letterSpacing: "0.1em" }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">
              <div className="relative aspect-[4/5]">
                <div
                  aria-hidden
                  className="anim up absolute -inset-3 sm:-inset-5 rounded-[999px_999px_28px_28px]"
                  style={v({ "--d": "0.45s", border: `1px solid ${SALMON}` })}
                />
                <div
                  ref={imgRef}
                  className="w-full h-full"
                  style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <div className="clip relative w-full h-full overflow-hidden rounded-[999px_999px_28px_28px] shadow-2xl">
                    <img
                      src={equipeNP}
                      alt="Equipe da NP Consultoria Alimentação em atendimento técnico"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="ph w-full h-full object-cover"
                      style={{ objectPosition: "center 22%" }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(180deg, transparent 45%, ${INK}66 100%)` }}
                    />
                  </div>
                </div>

                {/* Selo conformidade */}
                <div
                  className="anim up absolute -top-3 -left-2 sm:-left-6 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-xl"
                  style={v({ "--d": "0.95s", background: "#fff" })}
                >
                  <span className="grid place-items-center w-7 h-7 rounded-full" style={{ background: SALMON, color: INK }} aria-hidden>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <p className="text-[9.5px] sm:text-[10px] uppercase font-bold" style={{ color: INK, letterSpacing: "0.16em" }}>
                    Conformidade sanitária
                  </p>
                </div>

                {/* Card editorial */}
                <div
                  className="anim up absolute -bottom-6 -right-2 sm:-right-6 bg-white px-5 py-4 sm:px-6 sm:py-5 shadow-2xl rounded-2xl max-w-[210px] sm:max-w-[230px]"
                  style={v({ "--d": "1.05s", borderLeft: `3px solid ${SALMON}` })}
                >
                  <p className="font-playfair italic leading-tight" style={{ color: INK, fontSize: "clamp(1.05rem,2.6vw,1.3rem)" }}>
                    Assessoria de alto nível
                  </p>
                  <p className="mt-3 text-[9.5px] uppercase font-semibold" style={{ color: GREY, letterSpacing: "0.24em" }}>
                    Indaiatuba · SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee editorial */}
      <div
        className="anim up relative z-10 overflow-hidden py-3.5 sm:py-4"
        style={v({ "--d": "1.15s", borderTop: `1px solid ${SALMON}`, borderBottom: `1px solid ${SALMON}`, background: `${SALMON}1f` })}
        aria-hidden
      >
        <div className="mq flex w-max gap-8 sm:gap-14">
          {[...marquee, ...marquee, ...marquee].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 sm:gap-14 text-[10px] sm:text-[11px] uppercase font-semibold whitespace-nowrap"
              style={{ color: GREY, letterSpacing: "0.22em" }}
            >
              {t}
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: SALMON }} />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero-np { --eo: cubic-bezier(0.22, 1, 0.36, 1); }
        .hero-np .anim { opacity: 0; }
        .hero-np .up { transform: translateY(22px); }
        .hero-np.is-in .up { animation: npUp 0.9s var(--eo) var(--d, 0s) both; }
        @keyframes npUp { to { opacity: 1; transform: translateY(0); } }

        .hero-np .mask { display: block; overflow: hidden; padding-bottom: 0.1em; }
        .hero-np .inner { display: inline-block; transform: translateY(110%); will-change: transform; }
        .hero-np.is-in .inner { animation: npLine 1s var(--eo) var(--d, 0s) both; }
        @keyframes npLine { to { transform: translateY(0); } }

        .hero-np .hl {
          position: absolute; left: -0.06em; right: -0.06em; bottom: 0.06em; height: 0.34em;
          background: ${SALMON}; border-radius: 999px; transform: scaleX(0); transform-origin: left;
          z-index: 0;
        }
        .hero-np.is-in .hl { animation: npHl 0.9s var(--eo) 1s both; }
        @keyframes npHl { to { transform: scaleX(1); } }

        .hero-np .clip { clip-path: inset(0 0 100% 0); }
        .hero-np.is-in .clip { animation: npWipe 1.1s var(--eo) 0.35s both; }
        @keyframes npWipe { to { clip-path: inset(0 0 0% 0); } }
        .hero-np .ph { transform: scale(1.12); filter: brightness(0.8) saturate(0.92); }
        .hero-np.is-in .ph { animation: npBloom 1.6s var(--eo) 0.4s both, npZoom 22s ease-in-out 2.2s infinite alternate; }
        @keyframes npBloom { to { transform: scale(1); filter: brightness(1) saturate(1); } }
        @keyframes npZoom { to { transform: scale(1.06); } }

        .hero-np .mq { animation: npMq 34s linear infinite; }
        @keyframes npMq { to { transform: translateX(-33.333%); } }

        @media (prefers-reduced-motion: reduce) {
          .hero-np.is-in .up,
          .hero-np.is-in .inner,
          .hero-np.is-in .hl { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero-np.is-in .clip { animation: none !important; clip-path: none !important; }
          .hero-np.is-in .ph { animation: none !important; transform: none !important; filter: none !important; }
          .hero-np .mq { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
