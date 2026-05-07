import { useEffect, useState } from "react";
import conhecaServicos from "@/assets/conheca-nossos-servicos.png";
import { ArrowRight, ChevronDown } from "lucide-react";

const WHATSAPP = "5519989750741";

const heroStats = [
  { value: "300+", label: "Empresas atendidas" },
  { value: "92%",  label: "Aprovação na 1ª vistoria" },
  { value: "15+",  label: "Anos de experiência" },
];

const FoodServicesHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const r = (delay: string) =>
    `transition-all duration-[900ms] ${delay} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#1C1A18]">

      {/* Ambient warm gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(20 45% 55% / 0.18), transparent 70%)" }} />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(20 35% 50% / 0.12), transparent 70%)" }} />
      </div>

      {/* Subtle warm radial */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(20 35% 62% / 0.07), transparent 65%)" }} />

      {/* ── Main content — 2 columns ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center
        px-6 sm:px-12 lg:px-20 pt-32 pb-10 max-w-[1400px] mx-auto w-full">

        <div className="flex flex-col justify-center">

        {/* Eyebrow */}
        <div className={r("delay-[0ms]")}>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase
            border border-[hsl(20_35%_62%/0.35)] text-[hsl(20_45%_70%)]
            rounded-full px-4 py-2 bg-[hsl(20_35%_62%/0.08)] mb-10 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(20_45%_68%)] animate-pulse" />
            Consultoria em Segurança Alimentar · Indaiatuba e Região
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair font-bold text-white leading-[1.05] mb-7"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)" }}>

          <span className={`block ${r("delay-[80ms]")}`}>
            Consultoria
          </span>
          <span className={`block ${r("delay-[180ms]")}`}>
            <em className="italic text-[hsl(20_45%_70%)]">Alimentar</em> que
          </span>
          <span className={`block ${r("delay-[280ms]")}`}>
            protege e{" "}
            <span className="relative inline-block">
              certifica.
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[3px] rounded-full
                  bg-[hsl(20_35%_62%/0.55)]
                  transition-all duration-[1100ms] delay-[800ms]
                  ${mounted ? "w-full" : "w-0"}`}
              />
            </span>
          </span>
        </h1>

        {/* Descriptor */}
        <p className={`text-white/55 text-base sm:text-lg leading-relaxed max-w-[520px] mb-10 ${r("delay-[360ms]")}`}>
          Adequação sanitária completa para restaurantes, cozinhas industriais e indústrias de alimentos.
          Manual de boas práticas, alvará sanitário, treinamento de manipuladores e rotulagem ANVISA.
        </p>

        {/* CTAs */}
        <div className={`flex flex-wrap gap-3 ${r("delay-[440ms]")}`}>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a consultoria em segurança alimentar.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5
              bg-[hsl(20_35%_62%)] text-white rounded-full
              px-8 py-4 text-sm font-semibold
              hover:bg-[hsl(20_35%_55%)]
              hover:shadow-[0_12px_36px_hsl(20_35%_62%/0.4)]
              hover:-translate-y-0.5 transition-all duration-300"
          >
            Solicitar Consultoria
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2
              border border-white/20 text-white/70 rounded-full
              px-8 py-4 text-sm font-medium
              hover:border-[hsl(20_35%_62%/0.5)] hover:text-white
              transition-all duration-300"
          >
            Ver Serviços
          </button>
        </div>
        </div>

        {/* ── Image card — right column ── */}
        <div className={`relative ${r("delay-[300ms]")}`}>
          {/* Decorative frame glow */}
          <div className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, hsl(20 45% 60% / 0.35), transparent 70%)" }} />

          <div className="relative rounded-[1.75rem] overflow-hidden border border-[hsl(20_35%_62%/0.25)]
            shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-[hsl(20_25%_92%)]">
            <img
              src={conhecaServicos}
              alt="Equipe NP Consultoria apresentando: Conheça nossos serviços de boas práticas de manipulação de alimentos"
              className="w-full h-auto object-cover block"
              loading="eager"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-[1.75rem]" />
          </div>

          {/* Floating tag */}
          <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-[#1C1A18] border border-[hsl(20_35%_62%/0.35)]
            rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[hsl(20_45%_68%)]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[hsl(20_45%_72%)]">
              Equipe NP · Especialistas
            </span>
          </div>
        </div>
      </div>

      {/* ── Stats bar — pinned bottom ── */}
      <div className={`relative z-10 mx-6 sm:mx-12 lg:mx-20 mb-10
        transition-all duration-[900ms] delay-[600ms]
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        <div className="flex items-stretch divide-x divide-white/10
          border border-white/8 rounded-2xl bg-white/[0.04] backdrop-blur-sm overflow-hidden">
          {heroStats.map(({ value, label }, i) => (
            <div key={i} className="flex-1 px-6 py-5 flex flex-col gap-1">
              <span className="font-playfair font-bold text-[hsl(20_45%_72%)] leading-none"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                {value}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/35 leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 right-8 z-10 hidden lg:flex flex-col items-center gap-2 text-white/25">
        <span className="text-[10px] tracking-[0.25em] uppercase" style={{ writingMode: "vertical-lr" }}>
          Descubra
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default FoodServicesHero;
