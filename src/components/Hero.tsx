import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import equipeNP from "@/assets/equipe_NP_home.jpeg";

const WHATSAPP = "5519989750741";

/* Paleta local — navy + terracota + creme (identidade NP) */
const TERRA = "hsl(20 38% 52%)";
const CREAM = "#F5EDE6";

const stats = [
  { end: 10000, suffix: "+", label: "Consumidores\nimpactados" },
  { end: 92, suffix: "%", label: "Aprovação na\n1ª vistoria" },
  { end: 500, suffix: "+", label: "Profissionais\ntreinados" },
];

const pillars = ["Adequação Sanitária", "Boas Práticas", "Rotulagem ANVISA", "Alvará Sanitário"];

const v = (o: Record<string, string | number>) => o as CSSProperties;

/* Botão magnético — leve, só reage sobre o próprio botão */
const MagneticButton = ({
  href,
  className,
  style,
  children,
  strength = 12,
}: {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  strength?: number;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)", ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
};

const Hero = () => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`hero-stage relative overflow-hidden ${inView ? "hero-in" : ""}`}
      style={{ minHeight: "100svh", background: CREAM }}
    >
      {/* ── Fundo estático (sem animação/parallax = sem travamento) ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(155deg, #FBF7F2 0%, #F5EDE6 52%, #EFE5DA 100%)",
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-[42vw] h-[42vw] rounded-full opacity-[0.10]"
          style={{ background: `radial-gradient(circle, ${TERRA}, transparent 68%)` }}
        />
      </div>

      {/* ── Painel de imagem (direita, full-height) ── */}
      <div className="hero-photo absolute inset-y-0 right-0 w-[46%] hidden lg:block">
        <div className="ph-clip absolute inset-0 overflow-hidden">
          <img
            src={equipeNP}
            alt="Equipe da NP Consultoria em atendimento de segurança alimentar"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="ph-img w-full h-full object-cover"
            style={{ objectPosition: "right center" }}
          />
          {/* Duotone navy — coesão corporativa */}
          <div
            className="absolute inset-0"
            style={{ background: "hsl(212 44% 16% / 0.34)", mixBlendMode: "multiply" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(200deg, hsl(212 44% 14% / 0) 40%, hsl(212 46% 12% / 0.72) 100%)",
            }}
          />
        </div>
        {/* Feather esquerda: imagem derrete no creme (sem emenda dura) */}
        <div
          className="absolute inset-y-0 left-0 w-56"
          style={{ background: `linear-gradient(to right, ${CREAM} 2%, transparent 100%)` }}
        />
        {/* Barra de acento vertical */}
        <div className="ph-bar absolute inset-y-0 left-14 w-px" style={{ background: "hsl(20 40% 60% / 0.4)" }} />

        {/* Selo — número autêntico */}
        <div
          className="hero-anim anim-up absolute bottom-10 right-10 rounded-2xl px-6 py-5 text-right"
          style={v({
            "--d": "1.5s",
            background: "hsl(212 46% 12% / 0.55)",
            border: "1px solid hsl(0 0% 100% / 0.14)",
            backdropFilter: "blur(8px)",
          })}
        >
          <div className="font-playfair font-bold text-white leading-none" style={{ fontSize: "2.6rem" }}>
            <AnimatedCounter end={92} suffix="%" duration={2000} />
          </div>
          <p className="text-[10px] font-medium text-white/60 uppercase tracking-[0.18em] mt-2">
            Aprovação na 1ª vistoria
          </p>
        </div>
      </div>

      {/* ── Conteúdo ── */}
      <div className="relative z-10 min-h-[100svh] w-full mx-auto max-w-[1400px] grid lg:grid-cols-12 items-center px-6 sm:px-12 lg:px-16 pt-32 pb-16 lg:py-0">
        <div className="lg:col-span-7 max-w-[600px]">

          {/* Eyebrow */}
          <div className="hero-anim anim-up flex items-center gap-3 mb-8" style={v({ "--d": "0s" })}>
            <span className="w-8 h-px" style={{ background: TERRA }} />
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase" style={{ color: "hsl(20 42% 44%)" }}>
              Indaiatuba · Consultoria desde 2021
            </span>
          </div>

          {/* Headline — revelação por linha (mask) */}
          <h1
            className="font-playfair font-bold mb-8"
            style={{ fontSize: "clamp(2.6rem, 5.4vw, 4.9rem)", lineHeight: 1.03, letterSpacing: "-0.02em", color: "hsl(20 24% 12%)" }}
          >
            <span className="line-mask">
              <span className="line-inner" style={v({ "--d": "0.15s" })}>Segurança alimentar</span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={v({ "--d": "0.28s" })}>
                que{" "}
                <span className="relative inline-block">
                  <span style={{ color: TERRA }}>protege</span>
                  <span className="hl-underline" style={{ background: TERRA }} />
                </span>{" "}
                e
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={v({ "--d": "0.41s" })}>certifica.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-anim anim-up text-[15px] sm:text-base leading-relaxed max-w-[460px] mb-10"
            style={v({ "--d": "0.68s", color: "hsl(20 12% 40%)" })}
          >
            Do diagnóstico ao alvará sanitário — consultoria técnica para
            restaurantes, cozinhas industriais e indústrias de alimentos.
          </p>

          {/* CTAs */}
          <div className="hero-anim anim-up flex flex-wrap items-center gap-5 mb-12" style={v({ "--d": "0.8s" })}>
            <MagneticButton
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma consultoria.")}`}
              className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white overflow-hidden"
              style={{ background: TERRA, boxShadow: "0 12px 34px hsl(20 38% 52% / 0.3)" }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out"
                style={{ background: "linear-gradient(110deg, transparent 30%, hsl(0 0% 100% / 0.28) 50%, transparent 70%)" }}
              />
              <span className="relative">Solicitar Consultoria</span>
              <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>

            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "hsl(20 18% 34%)" }}
            >
              <span className="underline-offset-[6px] group-hover:underline">Ver serviços</span>
              <span
                className="grid place-items-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-y-0.5"
                style={{ border: "1px solid hsl(20 20% 60% / 0.5)" }}
              >
                <ArrowRight className="w-3 h-3 rotate-90" />
              </span>
            </button>
          </div>

          {/* Faixa de resultados (corporativo) */}
          <div
            className="hero-anim anim-up grid grid-cols-3 gap-4 sm:gap-8 max-w-[520px]"
            style={v({ "--d": "0.94s", borderTop: "1px solid hsl(20 15% 80%)", paddingTop: "1.6rem" })}
          >
            {stats.map((s, i) => (
              <div key={i} className={i > 0 ? "sm:pl-8 sm:border-l" : ""} style={{ borderColor: "hsl(20 15% 82%)" }}>
                <div className="font-playfair font-bold leading-none" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)", color: "hsl(20 24% 16%)" }}>
                  <AnimatedCounter end={s.end} suffix={s.suffix} duration={2200} />
                </div>
                <p className="text-[10.5px] font-medium uppercase tracking-wider mt-2 leading-snug whitespace-pre-line" style={{ color: "hsl(20 10% 50%)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Pilares */}
          <div className="hero-anim anim-up flex flex-wrap gap-2 mt-9" style={v({ "--d": "1.08s" })}>
            {pillars.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium"
                style={{ background: "hsl(0 0% 100% / 0.6)", border: "1px solid hsl(20 30% 68% / 0.35)", color: "hsl(20 28% 36%)" }}
              >
                <span className="w-1 h-1 rounded-full" style={{ background: TERRA }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-anim anim-up absolute left-6 sm:left-12 lg:left-16 bottom-8 hidden lg:flex items-center gap-3" style={v({ "--d": "1.3s" })}>
        <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "hsl(20 15% 58%)" }}>Role</span>
        <span className="scroll-line block w-10 h-px" style={{ background: "hsl(20 30% 55% / 0.6)" }} />
      </div>

      {/* ── Animações — só transform/opacity (GPU), fluidas ── */}
      <style>{`
        .hero-stage { --eo: cubic-bezier(0.22, 1, 0.36, 1); }

        .hero-anim { opacity: 0; }
        .anim-up { transform: translateY(20px); }
        .hero-in .anim-up { animation: heroUp 0.9s var(--eo) var(--d, 0s) both; }
        @keyframes heroUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* Headline: cada linha desliza de trás de uma máscara */
        .line-mask { display: block; overflow: hidden; padding-bottom: 0.06em; }
        .line-inner { display: inline-block; transform: translateY(112%); will-change: transform; }
        .hero-in .line-inner { animation: lineUp 1s var(--eo) var(--d, 0s) both; }
        @keyframes lineUp { from { transform: translateY(112%); } to { transform: translateY(0); } }

        /* Sublinha do "protege" */
        .hl-underline { position: absolute; left: 0; bottom: -0.02em; height: 3px; width: 100%; border-radius: 999px; transform: scaleX(0); transform-origin: left; }
        .hero-in .hl-underline { animation: hlLine 0.85s var(--eo) 1.1s both; }
        @keyframes hlLine { to { transform: scaleX(1); } }

        /* Imagem: wipe de cima→baixo + bloom, depois ken burns lento */
        .ph-clip { clip-path: inset(0 0 100% 0); }
        .hero-in .ph-clip { animation: phWipe 1.1s var(--eo) 0.35s both; }
        @keyframes phWipe { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0% 0); } }

        .ph-img { transform: scale(1.14); filter: brightness(0.4); will-change: transform; }
        .hero-in .ph-img { animation: phBloom 1.5s var(--eo) 0.35s both, phZoom 18s ease-in-out 1.9s infinite alternate; }
        @keyframes phBloom { from { transform: scale(1.14); filter: brightness(0.4); } to { transform: scale(1); filter: brightness(1); } }
        @keyframes phZoom { from { transform: scale(1); } to { transform: scale(1.06); } }

        .ph-bar { transform: scaleY(0); transform-origin: top; }
        .hero-in .ph-bar { animation: barGrow 1.2s var(--eo) 1.2s both; }
        @keyframes barGrow { to { transform: scaleY(1); } }

        @media (prefers-reduced-motion: reduce) {
          .hero-in .anim-up, .hero-in .line-inner, .hero-in .ph-bar { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero-in .hl-underline { animation: none !important; transform: scaleX(1) !important; }
          .hero-in .ph-clip { animation: none !important; clip-path: none !important; }
          .hero-in .ph-img { animation: none !important; transform: none !important; filter: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
