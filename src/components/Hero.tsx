import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import equipeHeroBg from "@/assets/equipe_NP_home.jpeg";

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
    <section className="relative min-h-screen flex flex-col bg-[#1C1A18] overflow-hidden">

      {/* Photo */}
      <div className="absolute inset-0">
        <img
          src={equipeHeroBg}
          alt="NP Consultoria Alimentar"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1A18] via-[#1C1A18]/82 to-[#1C1A18]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18] via-transparent to-[#1C1A18]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end
        px-6 sm:px-12 lg:px-20 pb-20 lg:pb-28 pt-36 max-w-[700px]">

        {/* Eyebrow */}
        <p className={`text-[11px] font-semibold tracking-[0.42em] uppercase
          text-[hsl(20_45%_65%)] mb-8 ${fade("delay-[0ms]")}`}>
          Indaiatuba · Região de Campinas
        </p>

        {/* Headline */}
        <h1
          className="font-playfair font-bold text-white leading-[1.04] mb-8"
          style={{ fontSize: "clamp(3.2rem, 6.5vw, 5.8rem)" }}
        >
          <span className={`block ${fade("delay-[100ms]")}`}>
            Segurança alimentar
          </span>
          <span className={`block ${fade("delay-[220ms]")}`}>
            que{" "}
            <span className="relative inline-block">
              <em className="italic text-[hsl(20_45%_70%)]">protege</em>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[hsl(20_35%_62%/0.55)]
                  transition-all duration-[1300ms] delay-[900ms]
                  ${mounted ? "w-full" : "w-0"}`}
              />
            </span>
            {" "}e certifica.
          </span>
        </h1>

        {/* Descriptor */}
        <p className={`text-white/40 text-base leading-relaxed max-w-[400px] mb-12 ${fade("delay-[360ms]")}`}>
          Do diagnóstico ao alvará sanitário — consultoria especializada
          para restaurantes, cozinhas e indústrias de alimentos.
        </p>

        {/* CTA */}
        <div className={`flex items-center gap-6 mb-16 ${fade("delay-[460ms]")}`}>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma consultoria.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3
              bg-[hsl(20_35%_62%)] text-white rounded-full
              px-9 py-4 text-sm font-semibold
              hover:bg-[hsl(20_35%_55%)]
              hover:shadow-[0_16px_40px_hsl(20_35%_62%/0.4)]
              hover:-translate-y-0.5 transition-all duration-300"
          >
            Solicitar Consultoria
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300
              tracking-wide underline-offset-4 hover:underline"
          >
            Ver serviços
          </button>
        </div>

        {/* Stats */}
        <div className={`flex items-stretch divide-x divide-white/[0.1] ${fade("delay-[600ms]")}`}>
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1.5 pr-10 last:pr-0 pl-10 first:pl-0">
              <span
                className="font-playfair font-bold text-[hsl(20_45%_72%)] leading-none"
                style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}
              >
                {value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/25 leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll line */}
      <div
        className={`absolute right-10 bottom-10 hidden lg:flex flex-col items-center gap-3
          transition-all duration-700 delay-[800ms]
          ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase text-white/20"
          style={{ writingMode: "vertical-lr" }}
        >
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

    </section>
  );
};

export default Hero;
