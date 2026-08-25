import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Building2, MapPin, Scale, UserCheck } from "lucide-react";
import TrincorpSectionHeadline from "@/components/effects/TrincorpSectionHeadline";

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada negócio alimentício tem suas particularidades. Adaptamos nossas soluções à realidade operacional de cada cliente.",
    number: "01",
  },
  {
    icon: Scale,
    title: "Legislação ANVISA Atualizada",
    description: "Conhecimento técnico sempre atual sobre normas da ANVISA e exigências da vigilância sanitária.",
    number: "02",
  },
  {
    icon: Building2,
    title: "Experiência Multissetorial",
    description: "Restaurantes, cozinhas industriais, indústrias de alimentos e produtores artesanais — atendemos todos os segmentos.",
    number: "03",
  },
  {
    icon: MapPin,
    title: "Presença Local em Indaiatuba",
    description: "Atendimento presencial em Indaiatuba e região de Campinas, com acompanhamento em vistorias e fiscalizações.",
    number: "04",
  },
];

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleVisible } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: listRef, inView: listVisible } = useInView({ threshold: 0.06, triggerOnce: true });

  return (
    <section
      className="np-differentials relative overflow-hidden bg-[#FCFAF8] text-[#19191B]"
      aria-labelledby="differentials-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="absolute -right-40 top-40 h-[30rem] w-[30rem] rounded-full bg-[#D98F72]/15 blur-[110px]" />
        <span className="absolute -left-24 bottom-0 font-playfair text-[clamp(12rem,35vw,34rem)] font-bold leading-none text-[#1A1A1C]/[0.018]">NP</span>
      </div>

      <div className="relative mx-auto w-full max-w-[1540px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div ref={titleRef}>
          <div className="flex items-center justify-between border-b border-[#D7CEC8] pb-5">
            <p className={`text-[9px] font-bold uppercase tracking-[0.3em] text-[#9D5E47] transition-opacity duration-700 sm:text-[10px] ${titleVisible ? "opacity-100" : "opacity-0"}`}>
              Por que escolher a NP
            </p>
            <span className="font-playfair text-lg italic text-[#A39790]">NP / 08</span>
          </div>

          <div className="mt-10 sm:mt-14">
            <TrincorpSectionHeadline
              id="differentials-title"
              label="Técnica, prática e completamente personalizada."
              lines={[
                { content: "TÉCNICA,", effects: ["vertical-slice"] },
                {
                  content: "PRÁTICA E",
                  effects: ["focus-pull", "elastic-width"],
                  className: "lg:pl-[13vw]",
                },
                {
                  content: <><em>completamente<br className="sm:hidden" /> personalizada.</em></>,
                  effects: ["outline-fill", "chromatic-split"],
                  className: "lg:pl-[2vw]",
                },
              ]}
            />
          </div>

          <p className={`mt-9 max-w-xl text-sm font-light leading-7 text-[#68615E] transition-all duration-700 sm:ml-auto sm:text-base ${titleVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            Garantimos segurança alimentar, conformidade com a vigilância sanitária
            e crescimento sustentável para o seu negócio.
          </p>
        </div>

        <div ref={listRef} className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className={`lg:col-span-4 ${listVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
            <div className="lg:sticky lg:top-32">
              <div className="rounded-[1.6rem] bg-[#19191B] p-6 text-[#F7F1EB] sm:p-8">
                <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#E2A58D] sm:text-[9px]">
                  A diferença está no contexto
                </span>
                <p className="mt-5 font-playfair text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                  Nenhuma operação é igual. A solução também não deveria ser.
                </p>
                <a
                  href="#contato"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E2A58D]"
                >
                  Construir meu plano
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <p className="mt-7 border-l border-[#C9BBB2] pl-5 font-playfair text-lg italic leading-snug text-[#9D5E47]">
                “Organização que protege,<br />estratégia que impulsiona.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-[#D7CEC8]">
              {differentials.map(({ icon: Icon, title, description, number }, index) => (
                <article
                  key={title}
                  className={`differential-row group relative overflow-hidden border-b border-[#D7CEC8] transition-all duration-700 ${listVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: `${index * 95}ms` }}
                >
                  <span className="absolute inset-0 -translate-x-[102%] bg-[#1A1A1C] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                  <div className="relative grid grid-cols-[auto_1fr_auto] gap-4 px-1 py-6 sm:gap-7 sm:px-4 sm:py-8">
                    <div className="flex flex-col items-center gap-4">
                      <span className="font-playfair text-lg italic text-[#A89C95] transition-colors group-hover:text-white/25">{number}</span>
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-[#D0C4BC] text-[#9D5E47] transition-colors group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:text-[#E2A58D] sm:h-12 sm:w-12">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                      </span>
                    </div>

                    <div>
                      <h3 className="font-playfair text-[clamp(1.55rem,3.2vw,2.8rem)] font-semibold leading-tight tracking-[-0.035em] text-[#211F21] transition-colors group-hover:text-white">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[11px] font-light leading-6 text-[#6F6864] transition-colors group-hover:text-white/52 sm:text-sm sm:leading-7">
                        {description}
                      </p>
                    </div>

                    <ArrowUpRight className="mt-1 h-4 w-4 text-[#9D5E47] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#E2A58D] sm:h-5 sm:w-5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-16 border-t border-[#D7CEC8] pt-10 text-center transition-all duration-700 lg:mt-24 ${listVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <p className="font-playfair text-xl italic leading-snug text-[#9D5E47] sm:text-2xl">
            “NP Consultoria e NP Rotulagem —<br className="sm:hidden" />
            organização que protege, estratégia que impulsiona.”
          </p>
        </div>
      </div>

      <style>{`
        @media (hover: none) {
          .np-differentials .differential-row:active > span { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .np-differentials *,
          .np-differentials *::before,
          .np-differentials *::after { animation: none !important; transition-duration: .01ms !important; }
          .np-differentials .differential-row { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
