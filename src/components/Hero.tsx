import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroFoto from "@/assets/hero_section_foto.png";

const WHATSAPP = "5519989750741";

const pillars = [
  "Adequação Sanitária",
  "Estratégia Operacional",
  "Boas Práticas de Fabricação",
  "Rotulagem ANVISA",
  "Alvará Sanitário",
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: string) =>
    `transition-all duration-[900ms] ${delay} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section className="relative flex flex-col bg-[#F5EDE6] overflow-hidden"
      style={{ minHeight: "100svh" }}>

      {/* ── Foto de fundo — sem zoom (object-contain) ── */}
      <div className="absolute inset-0">
        <img
          src={heroFoto}
          alt="NP Consultoria Alimentar"
          className="w-full h-full object-contain object-right"
        />
        {/* Fade esquerda para legibilidade do texto — desktop */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: "linear-gradient(to right, #F5EDE6 0%, #F5EDE6e6 28%, #F5EDE6aa 48%, #F5EDE620 68%, transparent 80%)",
          }}
        />
        {/* Fade mobile — texto embaixo, imagem no topo */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-transparent from-40% via-[#F5EDE6]/80 to-[#F5EDE6]" />
      </div>

      {/* ── Conteúdo ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center
        px-6 sm:px-12 lg:px-20
        pt-24 pb-8 lg:py-0
        max-w-[500px]">

        {/* Eyebrow */}
        <p className={`text-[11px] font-semibold tracking-[0.42em] uppercase
          text-[hsl(20_45%_48%)] mb-4 ${fade("delay-[0ms]")}`}>
          Indaiatuba · Região de Campinas
        </p>

        {/* Headline */}
        <h1
          className="font-playfair font-bold leading-[1.05] mb-7"
          style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.8rem)", color: "hsl(20 20% 14%)" }}
        >
          <span className={`block ${fade("delay-[100ms]")}`}>
            Segurança alimentar
          </span>
          <span className={`block ${fade("delay-[220ms]")}`}>
            que{" "}
            <span className="relative inline-block">
              <em className="italic" style={{ color: "hsl(20 45% 50%)" }}>protege</em>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full
                  transition-all duration-[1300ms] delay-[900ms]
                  ${mounted ? "w-full" : "w-0"}`}
                style={{ background: "hsl(20 40% 60% / 0.45)" }}
              />
            </span>
            {" "}e certifica.
          </span>
        </h1>

        {/* Descriptor */}
        <p
          className={`text-sm leading-relaxed max-w-[380px] mb-7 ${fade("delay-[360ms]")}`}
          style={{ color: "hsl(20 12% 42%)" }}
        >
          Do diagnóstico ao alvará sanitário — consultoria especializada
          para restaurantes, cozinhas e indústrias de alimentos.
        </p>

        {/* CTAs */}
        <div className={`flex flex-wrap items-center gap-4 mb-8 ${fade("delay-[460ms]")}`}>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma consultoria.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full
              px-8 py-4 text-sm font-semibold text-white
              hover:-translate-y-0.5 transition-all duration-300"
            style={{
              background: "hsl(20 38% 52%)",
              boxShadow: "0 8px 28px hsl(20 38% 52% / 0.25)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px hsl(20 38% 52% / 0.4)";
              (e.currentTarget as HTMLElement).style.background = "hsl(20 38% 45%)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px hsl(20 38% 52% / 0.25)";
              (e.currentTarget as HTMLElement).style.background = "hsl(20 38% 52%)";
            }}
          >
            Solicitar Consultoria
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm tracking-wide underline-offset-4 hover:underline transition-colors duration-300"
            style={{ color: "hsl(20 12% 50%)" }}
          >
            Ver serviços
          </button>
        </div>

        {/* Pillars */}
        <div
          className={`flex flex-wrap gap-2 ${fade("delay-[600ms]")}`}
          style={{ borderTop: "1px solid hsl(20 15% 82%)", paddingTop: "1.25rem" }}
        >
          {pillars.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium"
              style={{
                background: "hsl(20 35% 70% / 0.12)",
                border: "1px solid hsl(20 35% 65% / 0.25)",
                color: "hsl(20 30% 38%)",
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "hsl(20 42% 52%)" }}
              />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll line — desktop */}
      <div
        className={`absolute right-8 bottom-8 hidden lg:flex flex-col items-center gap-3
          transition-all duration-700 delay-[800ms]
          ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase"
          style={{ writingMode: "vertical-lr", color: "hsl(20 15% 62%)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-14"
          style={{ background: "linear-gradient(to bottom, hsl(20 15% 62% / 0.5), transparent)" }}
        />
      </div>

    </section>
  );
};

export default Hero;
