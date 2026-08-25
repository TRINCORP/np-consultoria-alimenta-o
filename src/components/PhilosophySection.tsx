import { useInView } from "react-intersection-observer";
import { ArrowDownRight, LayoutGrid, ShieldCheck, TrendingUp } from "lucide-react";
import equipeNP from "@/assets/equipe_np.jpg";
import TrincorpSectionHeadline from "@/components/effects/TrincorpSectionHeadline";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Alimentos seguros, processos controlados e total conformidade com a legislação sanitária.",
  },
  {
    icon: LayoutGrid,
    title: "Organização",
    desc: "Operações estruturadas, rotinas padronizadas e gestão eficiente de cada detalhe.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    desc: "Marcas preparadas para crescer com credibilidade, responsabilidade e posicionamento.",
  },
];

const PhilosophySection = () => {
  const { ref: statementRef, inView: statementVisible } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: storyRef, inView: storyVisible } = useInView({ threshold: 0.12, triggerOnce: true });
  const { ref: pillarsRef, inView: pillarsVisible } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="np-philosophy relative overflow-hidden bg-[#F4EEE8] text-[#18181A]"
      aria-labelledby="philosophy-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="philosophy-grid absolute inset-0" />
        <span className="absolute -left-40 top-[32%] h-[32rem] w-[32rem] rounded-full bg-[#D98F72]/18 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1540px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div ref={statementRef}>
          <div className="flex items-center justify-between border-b border-[#CFC5BD] pb-5">
            <p className={`text-[9px] font-bold uppercase tracking-[0.3em] text-[#9D5E47] transition-opacity duration-700 sm:text-[10px] ${statementVisible ? "opacity-100" : "opacity-0"}`}>
              Nossa filosofia
            </p>
            <span className="font-playfair text-lg italic text-[#9D9088]">NP / 07</span>
          </div>

          <div className="mt-10 sm:mt-14">
            <TrincorpSectionHeadline
              id="philosophy-title"
              label="Segurança alimentar é um compromisso, não uma obrigação."
              lines={[
                { content: "SEGURANÇA ALIMENTAR", effects: ["focus-pull"] },
                {
                  content: <><em>é um compromisso</em>,</>,
                  effects: ["outline-fill", "elastic-width"],
                  className: "lg:pl-[6vw]",
                },
                {
                  content: "NÃO UMA OBRIGAÇÃO.",
                  effects: ["hard-impact", "chromatic-split"],
                  className: "lg:pl-[1vw]",
                },
              ]}
            />
          </div>
        </div>

        <div ref={storyRef} className="mt-14 grid gap-8 sm:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className={`philosophy-photo relative lg:col-span-5 ${storyVisible ? "is-visible" : ""}`}>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#D9D0CA]">
              <img
                src={equipeNP}
                alt="Equipe NP Consultoria — nutricionistas e consultoras especializadas em segurança alimentar, vigilância sanitária e boas práticas, Indaiatuba e região de Campinas"
                className="h-auto w-full object-cover transition-transform duration-1000 hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151517]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <p className="max-w-md font-playfair text-xl italic leading-snug text-white sm:text-2xl">
                  “Transformamos operações alimentícias em referências de qualidade e segurança.”
                </p>
                <span className="mt-4 block text-[8px] font-bold uppercase tracking-[0.24em] text-[#F0B49D] sm:text-[9px]">
                  NP Consultoria · Indaiatuba
                </span>
              </div>
            </div>
          </div>

          <div className={`philosophy-copy flex flex-col justify-center lg:col-span-7 lg:pl-[4vw] ${storyVisible ? "is-visible" : ""}`}>
            <span className="mb-8 grid h-14 w-14 place-items-center rounded-full border border-[#BBAEA6] text-[#9D5E47]">
              <ArrowDownRight className="h-5 w-5" strokeWidth={1.4} />
            </span>

            <div className="max-w-2xl space-y-6 text-sm font-light leading-7 text-[#615B58] sm:text-base sm:leading-8">
              <p>
                Na NP, acreditamos que a segurança dos alimentos vai além da legislação.
                É um <strong className="font-medium text-[#242123]">compromisso com a vida,
                com a marca e com a sustentabilidade do negócio.</strong>
              </p>
              <p>
                Atuamos de forma preventiva e estratégica — onde organização, gestão eficiente
                e conformidade caminham juntas para transformar operações em referências de qualidade.
              </p>
            </div>

            <div className="mt-9 border-l-2 border-[#D98F72] pl-5 sm:pl-7">
              <p className="font-playfair text-xl italic leading-snug text-[#9D5E47] sm:text-2xl">
                “Mais do que adequar empresas às normas,<br className="hidden sm:block" />
                desenvolvemos equipes e fortalecemos marcas.”
              </p>
            </div>
          </div>
        </div>

        <div ref={pillarsRef} className="mt-16 border-t border-[#CFC5BD] pt-8 lg:mt-24 lg:pt-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <p className={`text-[9px] font-bold uppercase tracking-[0.3em] text-[#766C67] transition-opacity duration-700 sm:text-[10px] ${pillarsVisible ? "opacity-100" : "opacity-0"}`}>
              Três pilares que guiam tudo
            </p>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A2968F] sm:block">
              Segurança · Organização · Crescimento
            </span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.65rem] border border-[#CDC2BA] bg-[#CDC2BA] md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, desc }, index) => (
              <article
                key={title}
                className={`philosophy-pillar group relative min-h-[250px] overflow-hidden bg-[#FBF8F5] p-6 transition-all duration-700 sm:p-8 lg:min-h-[300px] lg:p-10 ${pillarsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-[#1A1A1C] transition-all duration-500 ease-out group-hover:h-full" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-[#CFC3BB] text-[#9D5E47] transition-colors group-hover:border-white/18 group-hover:text-[#F0B49D]">
                      <Icon className="h-4 w-4" strokeWidth={1.55} />
                    </span>
                    <span className="font-playfair text-lg italic text-[#AA9E97] transition-colors group-hover:text-white/24">0{index + 1}</span>
                  </div>
                  <div className="mt-auto pt-12">
                    <h3 className="font-playfair text-2xl font-semibold tracking-[-0.03em] text-[#1E1C1E] transition-colors group-hover:text-white sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-sm text-xs font-light leading-6 text-[#6C6561] transition-colors group-hover:text-white/52 sm:text-sm">
                      {desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .np-philosophy .philosophy-grid {
          opacity: .052;
          background-image: linear-gradient(#18181a 1px, transparent 1px), linear-gradient(90deg, #18181a 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent);
        }
        .np-philosophy .philosophy-photo,
        .np-philosophy .philosophy-copy { opacity: 0; transform: translateY(44px); }
        .np-philosophy .philosophy-photo.is-visible { animation: philosophyReveal 1s cubic-bezier(.16,1,.3,1) both; }
        .np-philosophy .philosophy-copy.is-visible { animation: philosophyReveal 1s cubic-bezier(.16,1,.3,1) .14s both; }
        @keyframes philosophyReveal { to { opacity: 1; transform: translateY(0); } }

        @media (prefers-reduced-motion: reduce) {
          .np-philosophy *,
          .np-philosophy *::before,
          .np-philosophy *::after { animation: none !important; transition-duration: .01ms !important; }
          .np-philosophy .philosophy-photo,
          .np-philosophy .philosophy-copy,
          .np-philosophy .philosophy-pillar { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;
