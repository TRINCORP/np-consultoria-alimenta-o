import { ArrowUpRight, ChartNoAxesCombined, ShieldCheck, Tags, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const WHATSAPP_NUMBER = "5519989750741";

const solutions = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Operação & vigilância",
    description:
      "Diagnóstico técnico, boas práticas, POPs e acompanhamento para uma rotina pronta para a fiscalização.",
    outcomes: ["Conformidade", "Alvará sanitário", "Menos riscos"],
    to: "/servicos-alimentares",
  },
  {
    number: "02",
    icon: Tags,
    title: "Rotulagem & produto",
    description:
      "Informação nutricional, alergênicos e adequação regulatória para colocar produtos no mercado com segurança.",
    outcomes: ["ANVISA", "Tabela nutricional", "Revisão técnica"],
    to: "/np-rotulagem",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Equipe & cultura",
    description:
      "Treinamentos aplicáveis à rotina, com orientação próxima para transformar conhecimento em comportamento.",
    outcomes: ["Capacitação", "Liderança", "Padronização"],
    to: "/servicos-alimentares",
  },
  {
    number: "04",
    icon: ChartNoAxesCombined,
    title: "Gestão & crescimento",
    description:
      "Processos organizados, redução de perdas e indicadores que ajudam a operação a ganhar consistência.",
    outcomes: ["Eficiência", "Controle", "Rentabilidade"],
    to: "/servicos-alimentares",
  },
];

const ServiceNavigator = () => {
  const { ref: headingRef, inView: headingVisible } = useInView({
    threshold: 0.12,
    triggerOnce: true,
  });
  const { ref: listRef, inView: listVisible } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  const message = encodeURIComponent(
    "Olá! Quero descobrir qual solução da NP faz mais sentido para o momento do meu negócio.",
  );

  return (
    <section id="solucoes" className="relative overflow-hidden bg-[#FBF8F5] py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="absolute left-[-10rem] top-16 h-80 w-80 rounded-full bg-[#E9B6A2]/12 blur-3xl" />
        <span className="absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full border border-[#E1D7D0]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1380px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div
          ref={headingRef}
          className={
            "transition-all duration-700 lg:col-span-5 " +
            (headingVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          <div className="lg:sticky lg:top-32">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9F5D48] sm:text-[11px]">
              Uma visão completa do negócio
            </p>
            <h2
              className="mt-6 max-w-xl font-playfair font-semibold tracking-[-0.045em] text-[#222022]"
              style={{ fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.96 }}
            >
              Problemas diferentes.{" "}
              <em className="font-normal text-[#9F5D48]">Um parceiro que olha o todo.</em>
            </h2>
            <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-[#696366] sm:text-base">
              A NP combina técnica regulatória com vivência operacional. A recomendação nasce
              da realidade do seu negócio — não de um pacote genérico.
            </p>

            <div className="mt-9 rounded-[1.5rem] border border-[#DCCFC7] bg-[#F2E5DE] p-5 sm:p-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8F695D]">
                Não sabe por onde começar?
              </p>
              <p className="mt-2 font-playfair text-xl text-[#2A2729]">
                Comece com um diagnóstico do seu momento.
              </p>
              <a
                href={"https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#713D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9F5D48]"
              >
                Conversar com uma especialista
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div ref={listRef} className="lg:col-span-7">
          <div className="border-t border-[#DCD4CF]">
            {solutions.map(({ number, icon: Icon, title, description, outcomes, to }, index) => (
              <Link
                key={title}
                to={to}
                className={
                  "solution-row group relative block overflow-hidden border-b border-[#DCD4CF] px-1 py-7 transition-all duration-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9F5D48] sm:px-4 sm:py-9 " +
                  (listVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
                }
                style={{ transitionDelay: index * 90 + "ms" }}
              >
                <span className="absolute inset-0 -translate-x-[102%] bg-[#1F1F21] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <div className="relative grid grid-cols-[auto_1fr_auto] items-start gap-4 sm:gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <span className="font-playfair text-lg text-[#AE9E96] transition-colors group-hover:text-[#E9B6A2]">
                      {number}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-[#D5C7BF] text-[#9F5D48] transition-colors group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-[#F2C4B2] sm:h-11 sm:w-11">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-playfair text-[clamp(1.55rem,3.5vw,2.55rem)] font-semibold tracking-[-0.03em] text-[#292629] transition-colors group-hover:text-white">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl text-xs leading-relaxed text-[#746E70] transition-colors group-hover:text-white/55 sm:text-sm">
                      {description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {outcomes.map((outcome) => (
                        <span
                          key={outcome}
                          className="rounded-full border border-[#D9CFC9] bg-white/55 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#756D6E] transition-colors group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:text-white/55"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowUpRight className="mt-1 h-5 w-5 text-[#9F5D48] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E9B6A2]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNavigator;
