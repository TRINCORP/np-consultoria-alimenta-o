import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  Search,
  TrendingDown,
  Users,
} from "lucide-react";
import equipeNPHome from "@/assets/equipe_NP_home.jpeg";
import TrincorpSectionHeadline from "@/components/effects/TrincorpSectionHeadline";

const WHATSAPP_NUMBER = "5519989750741";

const services = [
  {
    icon: Search,
    title: "Diagnóstico Técnico",
    desc: "Análise completa da rotina, identificando falhas, riscos sanitários e pontos de desperdício com plano de ação claro.",
  },
  {
    icon: ClipboardList,
    title: "Boas Práticas",
    desc: "Processos organizados conforme a legislação vigente, garantindo padronização e tranquilidade em fiscalizações.",
  },
  {
    icon: TrendingDown,
    title: "Redução de Perdas",
    desc: "Controle de estoque, padronização e monitoramento de validade impactando diretamente na rentabilidade.",
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    desc: "Funções estruturadas, líderes treinados e equipes mais alinhadas, produtivas e comprometidas.",
  },
  {
    icon: BarChart3,
    title: "Padronização Operacional",
    desc: "Fichas técnicas, cronogramas e check-lists que facilitam a gestão diária e eliminam retrabalho.",
  },
];

const quickWins = [
  "Conformidade com a vigilância sanitária",
  "Equipes treinadas e produtivas",
  "Operações mais rentáveis",
];

const FoodServicesSection = () => {
  const { ref: introRef, inView: introVisible } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: listRef, inView: listVisible } = useInView({ threshold: 0.06, triggerOnce: true });
  const { ref: ctaRef, inView: ctaVisible } = useInView({ threshold: 0.12, triggerOnce: true });

  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a consultoria para meu estabelecimento.",
  );

  return (
    <section
      id="como-atuamos"
      className="np-operation-section relative overflow-hidden bg-[#141517] text-[#F7F1EB]"
      aria-labelledby="operation-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="operation-grid absolute inset-0" />
        <span className="absolute -right-36 top-44 h-[34rem] w-[34rem] rounded-full bg-[#D98F72]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1540px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-36 lg:pt-36">
        <div ref={introRef}>
          <div className="flex items-center justify-between border-b border-white/12 pb-5">
            <p className={`text-[9px] font-bold uppercase tracking-[0.3em] text-[#E2A58D] transition-opacity duration-700 sm:text-[10px] ${introVisible ? "opacity-100" : "opacity-0"}`}>
              O que fazemos
            </p>
            <span className="font-playfair text-lg italic text-[#F0B49D]">NP / 04</span>
          </div>

          <div className="mt-10 sm:mt-14">
            <TrincorpSectionHeadline
              id="operation-title"
              label="Como a NP transforma sua operação"
              tone="dark"
              lines={[
                {
                  content: <><span>COMO A</span><span className="trincorp-np-accent">NP</span></>,
                  effects: ["vertical-slice"],
                },
                {
                  content: <span className="trincorp-persistent-accent">transforma</span>,
                  className: "trincorp-persistent-line lg:pl-[8vw]",
                },
                {
                  content: "SUA OPERAÇÃO",
                  effects: ["hard-impact", "chromatic-split"],
                  className: "lg:pl-[2vw]",
                },
              ]}
            />
          </div>

          <div className={`mt-10 grid gap-5 border-t border-white/12 pt-7 transition-all duration-700 sm:mt-12 sm:grid-cols-2 lg:ml-auto lg:max-w-4xl ${introVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <p className="text-sm font-light leading-7 text-white/58 sm:text-base">
              A melhoria operacional não acontece por acaso. Ela exige{" "}
              <strong className="font-medium text-white/88">método, organização e conhecimento técnico</strong>.
            </p>
            <p className="text-sm font-light leading-7 text-white/58 sm:text-base">
              A NP Consultoria atua diretamente na estruturação de operações, promovendo segurança,
              redução de perdas e aumento de eficiência.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className={`operation-photo lg:sticky lg:top-28 ${introVisible ? "is-visible" : ""}`}>
              <div className="relative aspect-[4/5] max-h-[760px] overflow-hidden rounded-[1.75rem] bg-[#242528] sm:aspect-[5/6] lg:aspect-[4/5]">
                <img
                  src={equipeNPHome}
                  alt="Equipe NP Consultoria realizando diagnóstico operacional"
                  className="h-full w-full object-cover object-[center_20%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/95 via-[#111214]/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <p className="max-w-md font-playfair text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                    Operações de alimentação <em className="font-normal text-[#E2A58D]">transformadas</em> com consultoria especializada.
                  </p>
                  <ul className="mt-6 grid gap-2 border-t border-white/16 pt-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {quickWins.map((item, index) => (
                      <li key={item} className="flex items-start gap-2 text-[9px] font-medium leading-relaxed text-white/58">
                        <span className="font-playfair text-sm italic text-[#E2A58D]">0{index + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div ref={listRef} className="lg:col-span-7 lg:pt-10">
            <div className="border-t border-white/12">
              {services.map(({ icon: Icon, title, desc }, index) => (
                <article
                  key={title}
                  className={`operation-row group relative overflow-hidden border-b border-white/12 transition-all duration-700 ${listVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <span className="absolute inset-0 -translate-x-[102%] bg-[#E2A58D] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                  <div className="relative grid grid-cols-[auto_1fr_auto] gap-4 px-1 py-6 sm:gap-6 sm:px-4 sm:py-8">
                    <div className="flex flex-col items-center gap-4">
                      <span className="font-playfair text-lg italic text-white/25 transition-colors group-hover:text-[#3D2922]/55">0{index + 1}</span>
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#E2A58D] transition-colors group-hover:border-[#3D2922]/18 group-hover:bg-[#3D2922]/8 group-hover:text-[#34231D] sm:h-12 sm:w-12">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-[clamp(1.55rem,3.1vw,2.65rem)] font-semibold leading-tight tracking-[-0.035em] text-white transition-colors group-hover:text-[#281D19]">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[11px] font-light leading-6 text-white/48 transition-colors group-hover:text-[#3E2C25]/70 sm:text-sm sm:leading-7">
                        {desc}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 text-[#E2A58D] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#34231D] sm:h-5 sm:w-5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div ref={ctaRef} className="mt-14 border-t border-white/12 pt-8 lg:mt-20">
          <div className={`grid gap-7 rounded-[1.65rem] border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm transition-all duration-700 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10 ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <div>
              <h3 className="font-playfair text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Pronto para transformar sua operação?
              </h3>
              <p className="mt-3 max-w-2xl text-xs font-light leading-6 text-white/48 sm:text-sm">
                Uma consultoria especializada estrutura seu negócio para crescer com{" "}
                <strong className="font-medium text-[#E2A58D]">segurança, eficiência e profissionalismo</strong>.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#E2A58D] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#211714] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0B9A3] hover:shadow-[0_18px_50px_-20px_rgba(226,165,141,.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-fit"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .np-operation-section .operation-grid {
          opacity: .085;
          background-image: linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, transparent, #000 16%, #000 86%, transparent);
        }
        .np-operation-section .operation-photo { opacity: 0; transform: translateY(48px) rotate(-1deg); }
        .np-operation-section .operation-photo.is-visible { animation: operationPhotoIn 1s cubic-bezier(.16,1,.3,1) .3s both; }
        @keyframes operationPhotoIn { to { opacity: 1; transform: translateY(0) rotate(0); } }

        @media (hover: none) {
          .np-operation-section .operation-row:active > span { transform: translateX(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .np-operation-section *,
          .np-operation-section *::before,
          .np-operation-section *::after { animation: none !important; transition-duration: .01ms !important; }
          .np-operation-section .operation-photo,
          .np-operation-section .operation-row { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
};

export default FoodServicesSection;
