import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroFoto from "@/assets/hero_section_foto.png";

const WHATSAPP = "5519989750741";

const stats = [
  { value: "300+", label: "Empresas" },
  { value: "92%",  label: "1ª vistoria" },
  { value: "15+",  label: "Anos" },
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
    <section className="relative min-h-screen flex flex-col bg-[#F5EDE6] overflow-hidden">

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
      <div className="relative z-10 flex-1 flex flex-col justify-end
        px-6 sm:px-12 lg:px-20
        pb-16 lg:pb-28
        pt-[55vw] sm:pt-[45vw] lg:pt-0
        max-w-[620px]">

        {/* Eyebrow */}
        <p className={`text-[11px] font-semibold tracking-[0.42em] uppercase
          text-[hsl(20_45%_48%)] mb-7 ${fade("delay-[0ms]")}`}>
          Indaiatuba · Região de Campinas
        </p>

        {/* Headline */}
        <h1
          className="font-playfair font-bold leading-[1.05] mb-7"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", color: "hsl(20 20% 14%)" }}
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
          className={`text-base leading-relaxed max-w-[400px] mb-10 ${fade("delay-[360ms]")}`}
          style={{ color: "hsl(20 12% 42%)" }}
        >
          Do diagnóstico ao alvará sanitário — consultoria especializada
          para restaurantes, cozinhas e indústrias de alimentos.
        </p>

        {/* CTAs */}
        <div className={`flex flex-wrap items-center gap-4 mb-14 ${fade("delay-[460ms]")}`}>
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

        {/* Stats */}
        <div
          className={`flex items-stretch flex-wrap gap-y-4 ${fade("delay-[600ms]")}`}
          style={{ borderTop: "1px solid hsl(20 15% 82%)", paddingTop: "1.5rem" }}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col gap-1.5 pr-8 last:pr-0 pl-8 first:pl-0"
              style={i > 0 ? { borderLeft: "1px solid hsl(20 15% 82%)" } : undefined}
            >
              <span
                className="font-playfair font-bold leading-none"
                style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", color: "hsl(20 42% 46%)" }}
              >
                {value}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.25em] leading-snug"
                style={{ color: "hsl(20 12% 55%)" }}
              >
                {label}
              </span>
            </div>
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
