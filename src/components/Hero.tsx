import { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const WHATSAPP_NUMBER = "5519989750741";

const CREAM = "#F6F1EC";
const SALMON = "#E9B6A2";
const INK = "#1F1F21";

const styleWithVars = (values: Record<string, string | number>) =>
  values as CSSProperties;

const method = [
  { icon: ScanSearch, label: "Diagnosticar", detail: "riscos e oportunidades" },
  { icon: ClipboardCheck, label: "Estruturar", detail: "processos e documentos" },
  { icon: UsersRound, label: "Capacitar", detail: "lideranças e equipes" },
  { icon: ShieldCheck, label: "Acompanhar", detail: "a evolução da operação" },
];

const proofPoints = [
  "Plano de ação claro",
  "Atendimento técnico próximo",
  "Indaiatuba e região",
];

const ticker = [
  "Segurança dos alimentos",
  "Rotulagem",
  "Vigilância sanitária",
  "Treinamento",
  "Padronização",
  "Gestão da qualidade",
];

const Hero = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de entender como a NP pode diagnosticar e fortalecer a minha operação.",
  );

  return (
    <section
      className={`np-kinetic-hero relative isolate min-h-[100svh] overflow-hidden ${ready ? "is-ready" : ""}`}
      style={{ background: CREAM, color: INK }}
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-grid absolute inset-0" />
        <div className="hero-aura hero-aura-one absolute rounded-full" />
        <div className="hero-aura hero-aura-two absolute rounded-full" />
        <span className="hero-ghost-word absolute select-none font-playfair italic">
          cuidado
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1540px] flex-col px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-12 lg:pb-12 lg:pt-36">
        <div
          className="hero-enter flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          style={styleWithVars({ "--delay": "0.05s" })}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C98973] sm:w-12" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#666164] sm:text-[11px]">
              Consultoria alimentar · Indaiatuba e região
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D8CFC8] bg-white/55 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4E4A4B] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            Diagnóstico técnico disponível
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center py-10 sm:py-12 lg:py-8">
          <h1 id="hero-title" className="hero-heading font-semibold tracking-[-0.07em]">
            <span className="hero-line block overflow-hidden">
              <span
                className="hero-line-inner block"
                style={styleWithVars({ "--delay": "0.14s" })}
              >
                Segurança
              </span>
            </span>
            <span className="hero-line block overflow-hidden lg:pl-[10vw]">
              <span
                className="hero-line-inner block font-playfair font-normal italic tracking-[-0.055em] text-[#9F5D48]"
                style={styleWithVars({ "--delay": "0.27s" })}
              >
                que alimenta
              </span>
            </span>
            <span className="hero-line block overflow-hidden lg:pl-[3vw]">
              <span
                className="hero-line-inner block"
                style={styleWithVars({ "--delay": "0.4s" })}
              >
                o crescimento.
              </span>
            </span>
          </h1>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div
              className="hero-enter lg:col-span-6 lg:pl-[10vw]"
              style={styleWithVars({ "--delay": "0.62s" })}
            >
              <p className="max-w-2xl text-[15px] font-light leading-relaxed text-[#5F5B5D] sm:text-lg lg:text-xl">
                Da cozinha ao rótulo, colocamos processos, pessoas e documentos em
                ordem para o seu negócio operar com confiança, passar por
                fiscalizações e crescer de forma sustentável.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-primary-cta group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#1F1F21] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#F6F1EC] shadow-[0_18px_50px_-20px_rgba(31,31,33,0.8)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9F5D48]"
                >
                  Solicitar diagnóstico
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#solucoes"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#BFAFA6] bg-white/30 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#292729] transition-colors duration-300 hover:bg-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9F5D48]"
                >
                  Explorar soluções
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>

              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2" aria-label="Diferenciais do atendimento">
                {proofPoints.map((point) => (
                  <li key={point} className="inline-flex items-center gap-2 text-[11px] font-medium text-[#625D60] sm:text-xs">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#9F5D48]" strokeWidth={1.8} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="hero-enter lg:col-span-6"
              style={styleWithVars({ "--delay": "0.76s" })}
            >
              <div className="hero-method-card relative overflow-hidden rounded-[1.75rem] border border-[#D8CFC8] bg-[#FAF7F4]/90 p-5 shadow-[0_24px_70px_-36px_rgba(31,31,33,0.45)] backdrop-blur-md sm:p-7">
                <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full border border-[#E9B6A2]/50" aria-hidden />
                <div className="pointer-events-none absolute -right-7 -top-7 h-24 w-24 rounded-full bg-[#E9B6A2]/20" aria-hidden />

                <div className="relative flex items-start justify-between gap-4 border-b border-[#DDD4CE] pb-5">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8A7770]">Método NP</span>
                    <h2 className="mt-2 font-playfair text-xl font-semibold text-[#252326] sm:text-2xl">
                      O cuidado percorre a operação inteira.
                    </h2>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1F1F21] text-[#F6F1EC]">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                </div>

                <ol className="relative mt-5 grid grid-cols-2 gap-3">
                  {method.map(({ icon: Icon, label, detail }, index) => (
                    <li
                      key={label}
                      className="method-step rounded-2xl border border-[#E1D8D2] bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D7A38F] hover:bg-white"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <Icon className="h-4 w-4 text-[#9F5D48]" strokeWidth={1.7} />
                        <span className="font-playfair text-lg text-[#C5B6AE]">0{index + 1}</span>
                      </div>
                      <p className="mt-4 text-xs font-semibold text-[#272527] sm:text-sm">{label}</p>
                      <p className="mt-1 text-[10px] leading-relaxed text-[#777174] sm:text-[11px]">{detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-enter relative z-20 overflow-hidden border-y border-[#D9CDC5] bg-[#E9B6A2]/15 py-3.5"
        style={styleWithVars({ "--delay": "0.96s" })}
        aria-hidden
      >
        <div className="hero-ticker flex w-max items-center">
          {[...ticker, ...ticker, ...ticker].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-6 whitespace-nowrap px-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#686164] sm:px-6 sm:text-[11px]"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-[#A96852]" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .np-kinetic-hero { --ease-out: cubic-bezier(0.16, 1, 0.3, 1); }

        .np-kinetic-hero .hero-grid {
          opacity: .05;
          background-image: linear-gradient(${INK} 1px, transparent 1px), linear-gradient(90deg, ${INK} 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, #000 0%, transparent 88%);
        }

        .np-kinetic-hero .hero-aura-one {
          width: min(62vw, 900px); height: min(62vw, 900px);
          right: -22vw; top: -30vw;
          background: radial-gradient(circle, ${SALMON}88 0%, ${SALMON}22 46%, transparent 72%);
          filter: blur(18px);
          animation: npAura 12s ease-in-out infinite alternate;
        }

        .np-kinetic-hero .hero-aura-two {
          width: min(42vw, 620px); height: min(42vw, 620px);
          left: -18vw; bottom: -24vw;
          background: radial-gradient(circle, #ffffffaa 0%, transparent 68%);
          filter: blur(14px);
          animation: npAura 14s ease-in-out 1s infinite alternate-reverse;
        }

        .np-kinetic-hero .hero-ghost-word {
          right: -0.07em; top: 18%; color: transparent;
          -webkit-text-stroke: 1px rgba(159,93,72,.09);
          font-size: clamp(7rem, 19vw, 20rem);
          line-height: .8;
          transform: rotate(-7deg);
        }

        .np-kinetic-hero .hero-heading {
          font-size: clamp(3.2rem, 8.1vw, 8.1rem);
          line-height: .83 !important;
          padding: 0;
        }

        .np-kinetic-hero .hero-line { padding-block: .09em; margin-block: -.04em; }
        .np-kinetic-hero .hero-line-inner {
          padding-block: .08em;
          transform: translateY(118%) rotate(1.2deg);
          transform-origin: left bottom;
          will-change: transform;
        }
        .np-kinetic-hero.is-ready .hero-line-inner {
          animation: npHeroLine 1.05s var(--ease-out) var(--delay, 0s) both;
        }

        .np-kinetic-hero .hero-enter { opacity: 0; transform: translateY(22px); }
        .np-kinetic-hero.is-ready .hero-enter {
          animation: npHeroEnter .85s var(--ease-out) var(--delay, 0s) both;
        }

        .np-kinetic-hero .hero-method-card { transition: transform .5s var(--ease-out), box-shadow .5s ease; }
        .np-kinetic-hero .hero-method-card:hover {
          transform: translateY(-4px) rotate(.15deg);
          box-shadow: 0 30px 90px -42px rgba(31,31,33,.55);
        }

        .np-kinetic-hero .hero-ticker { animation: npTicker 38s linear infinite; }

        @keyframes npHeroLine { to { transform: translateY(0) rotate(0); } }
        @keyframes npHeroEnter { to { opacity: 1; transform: translateY(0); } }
        @keyframes npTicker { to { transform: translateX(-33.333%); } }
        @keyframes npAura { to { transform: translate3d(-4%, 5%, 0) scale(1.08); } }

        @media (max-width: 640px) {
          .np-kinetic-hero .hero-heading { font-size: clamp(3rem, 15vw, 4.4rem); line-height: .88 !important; }
          .np-kinetic-hero .hero-grid { background-size: 48px 48px; }
          .np-kinetic-hero .hero-aura-one { width: 95vw; height: 95vw; right: -48vw; top: -15vw; }
          .np-kinetic-hero .hero-aura-two { width: 88vw; height: 88vw; left: -48vw; bottom: 8vw; }
          .np-kinetic-hero .hero-ghost-word { top: 27%; font-size: 38vw; }
        }

        @media (prefers-reduced-motion: reduce) {
          .np-kinetic-hero .hero-line-inner,
          .np-kinetic-hero .hero-enter {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .np-kinetic-hero .hero-aura-one,
          .np-kinetic-hero .hero-aura-two,
          .np-kinetic-hero .hero-ticker { animation: none !important; }
          .np-kinetic-hero .hero-primary-cta,
          .np-kinetic-hero .hero-method-card,
          .np-kinetic-hero .method-step { transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
