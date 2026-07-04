import { useEffect, useRef, useState, type CSSProperties } from "react";
import equipeNP from "@/assets/equipe_NP_home.jpeg";

const WHATSAPP = "5519989750741";

/* Paleta v3 — navy institucional + rose suave + off-white */
const NAVY = "#1E3A8A";
const NAVY_DEEP = "#162a63";
const ROSE = "#E9D5DA";
const ROSE_SOFT = "#F8F3F4";
const BG = "#FDFCFB";
const INK = "#1A1A1A";

const chips = [
  "Capacitação de equipes",
  "Expedição sanitária",
  "Boas práticas",
  "Padronização",
  "Conformidade",
  "Segurança dos alimentos",
];

const v = (o: Record<string, string | number>) => o as CSSProperties;

const Hero = () => {
  const [inView, setInView] = useState(false);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Parallax sutil da imagem no movimento do mouse (desktop)
  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      el.style.transform = `translate3d(${dx * -8}px, ${dy * -8}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = primaryBtnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };
  const resetMagnetic = () => {
    if (primaryBtnRef.current) primaryBtnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <section
      className={`hero-v3 relative w-full overflow-hidden ${inView ? "hero-in" : ""}`}
      style={{ background: BG, minHeight: "100svh" }}
      aria-label="NP Consultoria — hero"
    >
      {/* Decor de fundo sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -right-40 w-[46vw] h-[46vw] rounded-full opacity-60"
          style={{ background: `radial-gradient(circle, ${ROSE_SOFT}, transparent 70%)`, filter: "blur(20px)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[40vw] h-[40vw] rounded-full opacity-40"
          style={{ background: `radial-gradient(circle, ${ROSE}, transparent 68%)`, filter: "blur(40px)" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-28 pb-20 lg:pt-32 lg:pb-28 min-h-[100svh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">

          {/* ── Conteúdo ── */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 lg:space-y-10">
            {/* Eyebrow */}
            <div className="hero-anim anim-up flex items-center gap-3" style={v({ "--d": "0s" })}>
              <span className="h-px w-10" style={{ background: NAVY }} />
              <p className="uppercase tracking-[0.22em] text-[11px] sm:text-xs font-semibold" style={{ color: NAVY }}>
                Consultoria estratégica para serviços de alimentação
              </p>
            </div>

            {/* Headline com reveal por linha */}
            <h1
              className="font-playfair"
              style={{
                color: INK,
                fontWeight: 500,
                lineHeight: 1.06,
                letterSpacing: "-0.015em",
                fontSize: "clamp(2.4rem, 5.6vw, 4.75rem)",
              }}
            >
              <span className="line-mask"><span className="line-inner" style={v({ "--d": "0.12s" })}>Excelência sanitária,</span></span>
              <span className="line-mask">
                <span className="line-inner" style={v({ "--d": "0.26s" })}>
                  <em className="not-italic font-normal italic-serif" style={{ color: NAVY, fontStyle: "italic", fontWeight: 400 }}>
                    operação segura
                  </em>{" "}e
                </span>
              </span>
              <span className="line-mask"><span className="line-inner" style={v({ "--d": "0.40s" })}>crescimento profissional.</span></span>
            </h1>

            {/* Subtítulo */}
            <p
              className="hero-anim anim-up max-w-2xl font-light leading-relaxed text-base sm:text-lg lg:text-xl"
              style={v({ "--d": "0.62s", color: "#4B5563" })}
            >
              A NP transforma processos em confiança: consultoria técnica, capacitação de
              equipes, padronização, boas práticas e apoio completo para empresas do setor
              alimentício.
            </p>

            {/* CTAs */}
            <div className="hero-anim anim-up flex flex-wrap items-center gap-3 sm:gap-4" style={v({ "--d": "0.78s" })}>
              <a
                ref={primaryBtnRef}
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 text-[12px] sm:text-sm font-medium tracking-[0.18em] uppercase overflow-hidden"
                style={{
                  background: NAVY,
                  color: "#fff",
                  boxShadow: "0 18px 40px -12px rgba(30, 58, 138, 0.35)",
                  transition: "background 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = NAVY_DEEP)}
                onMouseOut={(e) => (e.currentTarget.style.background = NAVY)}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
                  style={{ background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)" }}
                />
                <span className="relative">Solicitar diagnóstico</span>
              </a>

              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 text-[12px] sm:text-sm font-medium tracking-[0.18em] uppercase transition-all"
                style={{ border: `1px solid ${ROSE}`, color: INK, background: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = ROSE_SOFT)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Conhecer soluções
              </button>
            </div>

            {/* Chips de serviços */}
            <div className="hero-anim anim-up pt-2" style={v({ "--d": "0.94s" })}>
              <div className="flex flex-wrap gap-2">
                {chips.map((label, i) => (
                  <span
                    key={label}
                    className="chip inline-flex items-center px-4 py-1.5 rounded-full text-[10.5px] sm:text-[11px] uppercase tracking-wider font-medium"
                    style={v({
                      "--i": i,
                      background: "#fff",
                      border: "1px solid #F1F1F1",
                      color: "#6B7280",
                      boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
                    })}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Área visual ── */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none aspect-[4/5]">
              {/* Moldura decorativa */}
              <div
                aria-hidden
                className="hero-anim anim-up absolute inset-0 -z-10"
                style={v({
                  "--d": "0.5s",
                  border: `1px solid ${ROSE}`,
                  transform: "translate(1.25rem, 1.25rem)",
                })}
              />
              {/* Halo rose */}
              <div
                aria-hidden
                className="absolute -bottom-10 -left-10 w-48 h-48 -z-10 rounded-full opacity-60"
                style={{ background: ROSE_SOFT, filter: "blur(48px)" }}
              />

              {/* Wrapper com parallax */}
              <div ref={imgWrapRef} className="w-full h-full" style={{ transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}>
                <div
                  className="ph-clip relative w-full h-full overflow-hidden shadow-2xl ring-1 ring-black/5"
                >
                  <img
                    src={equipeNP}
                    alt="Equipe da NP Consultoria em atendimento técnico"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="ph-img w-full h-full object-cover"
                    style={{ objectPosition: "center 25%" }}
                  />
                  {/* Toque de duotone rosé bem sutil */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(30,58,138,0.05) 0%, rgba(233,213,218,0.10) 100%)" }}
                  />
                </div>
              </div>

              {/* Badge editorial flutuante */}
              <div
                className="hero-anim anim-up absolute -bottom-8 -right-4 lg:-right-10 bg-white p-6 sm:p-7 shadow-2xl max-w-[240px]"
                style={v({ "--d": "1.05s", borderLeft: `3px solid ${NAVY}` })}
              >
                <p
                  className="font-playfair italic leading-tight"
                  style={{ color: INK, fontSize: "1.4rem", fontWeight: 400 }}
                >
                  Assessoria<br />de Alto Nível
                </p>
                <div className="mt-4 h-px w-full" style={{ background: ROSE }} />
                <p className="mt-4 text-[10px] uppercase tracking-[0.28em] font-semibold" style={{ color: "#9CA3AF" }}>
                  NP Consultoria · 2025
                </p>
              </div>

              {/* Selo topo (conformidade) */}
              <div
                className="hero-anim anim-up hidden sm:flex absolute -top-5 -left-5 lg:-left-8 items-center gap-3 bg-white px-4 py-3 shadow-xl"
                style={v({ "--d": "0.9s" })}
              >
                <span className="grid place-items-center w-8 h-8 rounded-full" style={{ background: NAVY, color: "#fff" }} aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: NAVY }}>Conformidade</p>
                  <p className="text-[10px]" style={{ color: "#6B7280" }}>Vigilância Sanitária</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animações — apenas transform/opacity */}
      <style>{`
        .hero-v3 { --eo: cubic-bezier(0.22, 1, 0.36, 1); }

        .hero-anim { opacity: 0; }
        .anim-up { transform: translateY(22px); }
        .hero-in .anim-up { animation: heroUp 0.9s var(--eo) var(--d, 0s) both; }
        @keyframes heroUp { to { opacity: 1; transform: translateY(0); } }

        .line-mask { display: block; overflow: hidden; padding-bottom: 0.08em; }
        .line-inner { display: inline-block; transform: translateY(110%); will-change: transform; }
        .hero-in .line-inner { animation: lineUp 1s var(--eo) var(--d, 0s) both; }
        @keyframes lineUp { to { transform: translateY(0); } }

        .ph-clip { clip-path: inset(0 0 100% 0); }
        .hero-in .ph-clip { animation: phWipe 1.1s var(--eo) 0.35s both; }
        @keyframes phWipe { to { clip-path: inset(0 0 0% 0); } }
        .ph-img { transform: scale(1.1); filter: brightness(0.75) saturate(0.9); will-change: transform, filter; }
        .hero-in .ph-img { animation: phBloom 1.5s var(--eo) 0.4s both, phZoom 20s ease-in-out 2s infinite alternate; }
        @keyframes phBloom { to { transform: scale(1); filter: brightness(1) saturate(1); } }
        @keyframes phZoom { to { transform: scale(1.05); } }

        .chip { opacity: 0; transform: translateY(10px); animation: chipIn 0.6s var(--eo) forwards; animation-delay: calc(1s + (var(--i) * 0.08s)); }
        .hero-in .chip { animation-play-state: running; }
        .chip { animation-play-state: paused; }
        @keyframes chipIn { to { opacity: 1; transform: translateY(0); } }

        @media (prefers-reduced-motion: reduce) {
          .hero-in .anim-up,
          .hero-in .line-inner,
          .hero-in .chip { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero-in .ph-clip { animation: none !important; clip-path: none !important; }
          .hero-in .ph-img { animation: none !important; transform: none !important; filter: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
