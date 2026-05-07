import { useEffect, useState } from "react";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import equipeHeroBg from "@/assets/equipe-hero-bg.png";

const stats = [
  { value: "300+", label: "Empresas atendidas" },
  { value: "15+",  label: "Anos de experiência" },
  { value: "100%", label: "Conformidade garantida" },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-[900ms] ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <section className="relative min-h-screen bg-[#FAF9F7] flex flex-col overflow-hidden">

      {/* ── Subtle warm grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(20 35% 70% / 0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Soft ambient glows ── */}
      <div className="absolute -top-32 -right-32 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(20 50% 88% / 0.5), transparent 65%)" }} />
      <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(20 40% 85% / 0.25), transparent 70%)" }} />

      {/* ── Main split layout ── */}
      <div className="flex-1 flex flex-col lg:flex-row items-stretch min-h-screen">

        {/* ════════════════════════════
             LEFT — Text column
        ════════════════════════════ */}
        <div className="flex-1 flex flex-col justify-center
          px-6 sm:px-12 lg:px-16 xl:px-24
          pt-32 pb-12 lg:py-28
          relative z-10">

          {/* Eyebrow pill */}
          <div className={reveal("delay-[0ms]")}>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.28em] uppercase
              border border-[hsl(20_35%_70%/0.35)] text-[hsl(20_35%_55%)]
              rounded-full px-4 py-2 bg-[hsl(20_35%_70%/0.07)] mb-8 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(20_35%_65%)] animate-pulse" />
              Indaiatuba · Região de Campinas
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair leading-[1.06] mb-7
            text-[clamp(2.6rem,5.5vw,5.2rem)] font-bold
            text-[hsl(210_15%_10%)]">

            <span className={`block ${reveal("delay-[80ms]")}`}>
              Segurança alimentar
            </span>

            <span className={`block ${reveal("delay-[180ms]")}`}>
              que{" "}
              <span className="relative inline-block">
                <em className="italic text-[hsl(20_35%_58%)] not-italic font-bold">protege</em>
                {/* Underline accent inspired by More Nutrition */}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-[hsl(20_35%_70%/0.5)]
                    transition-all duration-[1200ms] delay-[600ms]
                    ${mounted ? "w-full" : "w-0"}`}
                />
              </span>
              ,
            </span>

            <span className={`block ${reveal("delay-[280ms]")}`}>
              certifica e{" "}
              <em className="italic text-[hsl(20_30%_50%)]">transforma.</em>
            </span>
          </h1>

          {/* Descriptor */}
          <p className={`text-[hsl(210_10%_45%)] text-base sm:text-[1.05rem] leading-relaxed max-w-[500px] mb-10 ${reveal("delay-[380ms]")}`}>
            Consultoria especializada em vigilância sanitária, boas práticas e rotulagem nutricional
            para restaurantes, cozinhas industriais e indústrias de alimentos.
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-3 mb-14 ${reveal("delay-[460ms]")}`}>
            <a
              href="https://wa.me/5519XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5
                bg-[hsl(20_35%_62%)] text-white rounded-full
                px-8 py-4 text-sm font-semibold
                hover:bg-[hsl(20_35%_55%)]
                hover:shadow-[0_12px_36px_hsl(20_35%_62%/0.45)]
                hover:-translate-y-0.5
                transition-all duration-300"
            >
              Fale com um Especialista
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2
                border border-[hsl(210_10%_78%)] text-[hsl(210_15%_35%)]
                rounded-full px-8 py-4 text-sm font-medium
                hover:border-[hsl(20_35%_62%)] hover:text-[hsl(20_35%_55%)]
                transition-all duration-300"
            >
              Nossas Soluções
            </button>
          </div>

          {/* Stats row — More Nutrition style: big numbers */}
          <div className={`${reveal("delay-[560ms]")}`}>
            <div className="flex items-stretch divide-x divide-[hsl(210_10%_86%)] max-w-[480px]">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex-1 flex flex-col gap-1 px-5 first:pl-0 last:pr-0">
                  <span className="font-playfair text-[2.4rem] sm:text-[2.8rem] font-bold
                    text-[hsl(20_35%_58%)] leading-none tracking-tight">
                    {value}
                  </span>
                  <span className="text-[11px] font-medium text-[hsl(210_10%_55%)] leading-snug uppercase tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════
             RIGHT — Photo column
        ════════════════════════════ */}
        <div
          className={`lg:w-[46%] xl:w-[44%] px-4 sm:px-8 lg:pr-10 lg:pl-0
            py-6 lg:py-14 flex items-center
            transition-all duration-[1100ms] delay-[200ms]
            ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="relative w-full h-[58vw] sm:h-[65vw] lg:h-[calc(100vh-7rem)]
            max-h-[780px] rounded-[2rem] overflow-hidden
            shadow-[0_40px_80px_hsl(210_15%_12%/0.16),0_8px_32px_hsl(20_35%_60%/0.1)]">

            {/* Photo */}
            <img
              src={equipeHeroBg}
              alt="Equipe NP Consultoria em campo"
              className="w-full h-full object-cover object-top"
            />

            {/* Warm gradient overlay — bottom */}
            <div className="absolute inset-0 bg-gradient-to-t
              from-[hsl(20_20%_12%/0.7)] via-[hsl(20_20%_12%/0.1)] to-transparent" />

            {/* ── Floating status card ── */}
            <div className="absolute bottom-5 left-5 right-5
              bg-white/88 backdrop-blur-[16px] rounded-[1.25rem]
              p-4 shadow-[0_8px_32px_hsl(0_0%_0%/0.12)]
              border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[hsl(20_35%_70%/0.12)]
                  flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[hsl(20_35%_58%)]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[hsl(210_15%_12%)] leading-snug">
                    Consultoria Técnica Presencial
                  </p>
                  <p className="text-[12px] text-[hsl(210_10%_50%)] mt-0.5 truncate">
                    Do diagnóstico ao alvará sanitário
                  </p>
                </div>
                <div className="ml-auto flex-shrink-0 flex items-center gap-1.5
                  bg-emerald-50 rounded-full px-3 py-1.5 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-emerald-700">Ativo</span>
                </div>
              </div>
            </div>

            {/* ── Trust badge top-right (inside photo) ── */}
            <div className="absolute top-5 right-5
              bg-white/85 backdrop-blur-[12px] rounded-[1rem]
              px-4 py-3 border border-white/50
              flex flex-col items-center gap-0.5">
              <CheckCircle2 className="w-4 h-4 text-[hsl(20_35%_58%)] mb-0.5" />
              <span className="font-playfair text-xl font-bold text-[hsl(20_35%_52%)] leading-none">NP</span>
              <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[hsl(210_10%_55%)]">
                Certificada
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom thin accent line ── */}
      <div
        className={`h-px mx-6 sm:mx-16 transition-all duration-[1500ms] delay-[700ms]
          ${mounted ? "opacity-100" : "opacity-0"}`}
        style={{ background: "linear-gradient(to right, transparent, hsl(20 35% 70% / 0.35), transparent)" }}
      />

    </section>
  );
};

export default Hero;
