import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 10000, suffix: "+", label: "Consumidores\nimpactados" },
  { value: 92, suffix: "%", label: "Aprovação na\nprimeira vistoria" },
  { value: 500, suffix: "+", label: "Profissionais\ntreinados" },
];

const ticker = [
  "VIGILÂNCIA SANITÁRIA", "ALVARÁ SANITÁRIO", "TREINAMENTO DE EQUIPES",
  "ADEQUAÇÃO SANITÁRIA", "GESTÃO DA QUALIDADE", "SEGURANÇA ALIMENTAR",
  "BOAS PRÁTICAS", "ROTULAGEM ANVISA", "MANUAIS E POPs",
];

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="np-stats-section overflow-hidden bg-[#111214] text-[#F7F1EB]">
      <div ref={ref} className="mx-auto w-full max-w-[1540px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="flex items-end justify-between gap-8 border-b border-white/12 pb-6">
          <p className={`text-[9px] font-bold uppercase tracking-[0.3em] text-[#E2A58D] transition-opacity duration-700 sm:text-[10px] ${inView ? "opacity-100" : "opacity-0"}`}>
            Nossos resultados em números
          </p>
          <span className="hidden max-w-xs text-right text-[10px] font-light leading-5 text-white/38 sm:block">
            Impacto construído com método, presença técnica e acompanhamento de perto.
          </span>
        </div>

        <div className="mt-7 grid gap-px overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/12 sm:grid-cols-3 sm:rounded-[1.9rem]">
          {stats.map(({ value, suffix, label }, index) => (
            <article
              key={label}
              className={`group relative min-h-[190px] overflow-hidden bg-[#17181A] p-6 transition-all duration-700 sm:min-h-[260px] sm:p-8 lg:min-h-[310px] lg:p-10 ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <span className="absolute inset-x-0 bottom-0 h-0 bg-[#E2A58D] transition-all duration-500 ease-out group-hover:h-full" />
              <div className="relative flex h-full items-end justify-between gap-5 sm:block">
                <span className="font-playfair text-lg italic text-white/20 transition-colors group-hover:text-[#31221D]/35">0{index + 1}</span>
                <div className="sm:mt-16 lg:mt-20">
                  <div
                    className="font-sans font-semibold leading-none tracking-[-0.075em] text-white transition-colors group-hover:text-[#251A17]"
                    style={{ fontSize: "clamp(3.35rem, 7vw, 7rem)" }}
                  >
                    <AnimatedCounter end={value} suffix={suffix} duration={2200} className="" />
                  </div>
                  <p className="mt-3 whitespace-pre-line text-[9px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-white/38 transition-colors group-hover:text-[#3C2A23]/65 sm:text-[10px]">
                    {label}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-y border-white/8 py-4">
        <div className="np-stats-ticker flex w-max">
          {[...ticker, ...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`} className="flex shrink-0 items-center whitespace-nowrap px-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28 sm:px-7 sm:text-[10px]">
              {item}
              <span className="ml-5 h-1 w-1 shrink-0 rounded-full bg-[#E2A58D]/60 sm:ml-7" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .np-stats-ticker { animation: statsTickerScroll 28s linear infinite; }
        .np-stats-ticker:hover { animation-play-state: paused; }
        @keyframes statsTickerScroll { to { transform: translateX(-33.333%); } }
        @media (prefers-reduced-motion: reduce) {
          .np-stats-section *,
          .np-stats-section *::before,
          .np-stats-section *::after { animation: none !important; transition-duration: .01ms !important; }
          .np-stats-section article { opacity: 1; transform: none; }
          .np-stats-ticker { transform: none; }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
