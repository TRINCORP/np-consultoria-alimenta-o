import { useInView } from "react-intersection-observer";
import equipeNPHome from "@/assets/equipe_NP_home.jpeg";
import { Search, ClipboardList, TrendingDown, Users, BarChart3, ArrowRight } from "lucide-react";

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

/* ── Service card as its own component to avoid hook-in-map violation ── */
const ServiceCard = ({ service, index, visible }: {
  service: typeof services[0];
  index: number;
  visible: boolean;
}) => {
  const Icon = service.icon;
  return (
    <div
      className={`group relative rounded-[1.25rem] border border-white/8
        bg-white/[0.04] backdrop-blur-sm p-7 overflow-hidden h-full
        hover:border-[hsl(20_35%_70%/0.4)] hover:-translate-y-2
        hover:bg-white/[0.08]
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Shine sweep on hover */}
      <div className="absolute inset-0 rounded-[1.25rem] overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-full w-full h-full
          bg-gradient-to-r from-transparent via-white/8 to-transparent
          group-hover:left-full transition-all duration-700" />
      </div>

      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-[hsl(20_35%_70%/0.15)]
          flex items-center justify-center mb-5
          group-hover:bg-[hsl(20_35%_70%/0.25)] group-hover:scale-105
          transition-all duration-300">
          <Icon className="w-5 h-5 text-[hsl(20_45%_78%)]" strokeWidth={1.6} />
        </div>
        <h4 className="font-semibold text-white text-base mb-2">{service.title}</h4>
        <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
      </div>
    </div>
  );
};

const FoodServicesSection = () => {
  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.08, triggerOnce: true });
  const { ref: cardsRef, inView: cardsInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#1C1A18] relative overflow-hidden">

      {/* Ambient radial glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, hsl(20 35% 62% / 0.07), transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, hsl(20 35% 62% / 0.05), transparent 65%)" }} />

      {/* ── Top: Image + intro text ── */}
      <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[85vh]">

        {/* Photo — sticky on desktop, framed card on mobile */}
        <div className="relative order-2 lg:order-1 px-6 sm:px-10 lg:px-0 pb-4 lg:pb-0 lg:sticky lg:top-0 lg:h-auto lg:self-stretch">
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-full rounded-[1.5rem] lg:rounded-none overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:shadow-none">
            <img
              src={equipeNPHome}
              alt="Equipe NP Consultoria realizando diagnóstico operacional"
              className="w-full h-full object-cover object-[center_20%] lg:object-top scale-105 lg:scale-100"
              loading="lazy"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1A18]/50 via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/85 via-[#1C1A18]/10 to-transparent lg:hidden" />
          </div>
        </div>

        {/* Text */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 pt-10 pb-16 lg:py-24 order-1 lg:order-2">
          <div className="max-w-lg">
            <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
              text-[hsl(20_35%_62%)] mb-8
              transition-all duration-700 ${introInView ? "opacity-100" : "opacity-0"}`}>
              O que fazemos
            </span>

            <h2
              className={`font-playfair font-bold text-white leading-[1.08] mb-8
                transition-all duration-700 delay-100 ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Operações de alimentação{" "}
              <em className="italic text-[hsl(20_45%_75%)]">transformadas</em>{" "}
              com consultoria especializada.
            </h2>

            <div className={`space-y-4 text-white/60 text-base leading-relaxed mb-10
              transition-all duration-700 delay-200 ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <p>
                A melhoria operacional não acontece por acaso. Ela exige{" "}
                <strong className="text-white/90 font-semibold">método, organização e conhecimento técnico</strong>.
              </p>
              <p>
                A NP Consultoria atua diretamente na estruturação de operações, promovendo segurança,
                redução de perdas e aumento de eficiência.
              </p>
            </div>

            {/* 3 quick wins */}
            <ul className={`space-y-3 transition-all duration-700 delay-300 ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {["Conformidade com a vigilância sanitária", "Equipes treinadas e produtivas", "Operações mais rentáveis"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[hsl(20_35%_62%/0.2)] border border-[hsl(20_35%_62%/0.4)]
                    flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(20_45%_72%)]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Service cards grid ── */}
      <div ref={cardsRef} className="px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <div className="max-w-[1100px] mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${cardsInView ? "opacity-100" : "opacity-0"}`}>
            <h3 className="font-playfair font-bold text-white text-2xl sm:text-3xl">
              Como a NP{" "}
              <em className="italic text-[hsl(20_45%_75%)]">transforma</em> sua operação
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
            {services.map((service, i) => (
              <div key={i} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-14px)]">
                <ServiceCard service={service} index={i} visible={cardsInView} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA banner ── */}
      <div ref={ctaRef} className="px-6 sm:px-10 lg:px-16 pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className={`rounded-[1.75rem] border border-[hsl(20_35%_62%/0.2)]
            bg-[hsl(20_35%_62%/0.06)] p-10 lg:p-14
            flex flex-col lg:flex-row items-center justify-between gap-8
            transition-all duration-700 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <h3 className="font-playfair font-bold text-white text-xl sm:text-2xl mb-2">
                Pronto para transformar sua operação?
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                Uma consultoria especializada estrutura seu negócio para crescer com{" "}
                <strong className="text-[hsl(20_45%_72%)]">segurança, eficiência e profissionalismo</strong>.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a consultoria para meu estabelecimento.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 flex-shrink-0
                bg-[hsl(20_35%_62%)] text-white rounded-full
                px-8 py-4 text-sm font-semibold
                hover:bg-[hsl(20_35%_55%)]
                hover:shadow-[0_12px_36px_hsl(20_35%_62%/0.4)]
                hover:-translate-y-0.5
                transition-all duration-300"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FoodServicesSection;
