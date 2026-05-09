import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 10000, suffix: "+", label: "Consumidores\nimpactados" },
  { value: 92,  suffix: "%", label: "Aprovação na\nprimeira vistoria" },
  { value: 500, suffix: "+", label: "Profissionais\ntreinados" },
];

const ticker = [
  "VIGILÂNCIA SANITÁRIA", "ALVARÁ SANITÁRIO", "TREINAMENTO DE EQUIPES",
  "ADEQUAÇÃO SANITÁRIA",  "GESTÃO DA QUALIDADE", "SEGURANÇA ALIMENTAR",
  "BOAS PRÁTICAS",        "ROTULAGEM ANVISA",    "MANUAIS E POPs",
];

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="bg-[#1C1A18] overflow-hidden">

      {/* ── Stats band ── */}
      <div ref={ref} className="px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">

          {/* Eyebrow */}
          <p className={`text-[11px] font-semibold tracking-[0.32em] uppercase text-[hsl(20_35%_62%)] mb-14
            transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
            Nossos resultados em números
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-0 sm:divide-x sm:divide-white/10">
            {stats.map(({ value, suffix, label }, i) => (
              <div
                key={i}
                className={`sm:px-12 first:pl-0 last:pr-0
                  transition-all duration-700
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="font-playfair font-bold leading-none text-white mb-3"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}>
                  <AnimatedCounter
                    end={value}
                    suffix={suffix}
                    duration={2200}
                    className=""
                  />
                </div>
                <p className="text-[13px] font-medium text-white/40 leading-snug whitespace-pre-line uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Thin rule */}
          <div
            className={`mt-16 h-px transition-all duration-1000 delay-500
              ${inView ? "opacity-100" : "opacity-0"}`}
            style={{ background: "linear-gradient(to right, transparent, hsl(20 35% 62% / 0.3), transparent)" }}
          />
        </div>
      </div>

      {/* ── Scrolling ticker ── */}
      <div className="overflow-hidden border-t border-white/5 py-4">
        <div className="flex" style={{ animation: "tickerScroll 28s linear infinite" }}>
          {[...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center shrink-0 text-[11px] font-semibold
              tracking-[0.22em] uppercase text-white/25 whitespace-nowrap px-6">
              {item}
              <span className="ml-6 w-1 h-1 rounded-full bg-[hsl(20_35%_62%/0.5)] shrink-0" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
