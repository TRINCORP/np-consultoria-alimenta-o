import { useInView } from "react-intersection-observer";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import { Search, ClipboardList, TrendingDown, Users, BarChart3, GraduationCap } from "lucide-react";
import boasPraticas from "@/assets/food-services/boas-praticas.jpg";
import vigilancia from "@/assets/food-services/vigilancia-sanitaria.jpg";
import controleEstoque from "@/assets/food-services/controle-estoque.jpg";
import gestaoEquipe from "@/assets/food-services/gestao-equipe.jpg";
import treinamento from "@/assets/food-services/treinamento-equipe.jpg";

interface ServiceBlock {
  icon: React.ElementType;
  title: string;
  description: string;
  checklist: string[];
  image: string;
}

const services: ServiceBlock[] = [
  {
    icon: Search,
    title: "Implantação de Boas Práticas e Segurança dos Alimentos",
    description:
      "Realizamos a implantação completa das Boas Práticas conforme a legislação sanitária vigente, garantindo segurança dos alimentos, organização dos processos e conformidade com a Vigilância Sanitária.",
    checklist: [
      "Elaboração do Manual de Boas Práticas",
      "Procedimentos Operacionais Padronizados (POPs)",
      "Planilhas de controle e monitoramento",
      "Adequação estrutural e organizacional",
      "Treinamento da equipe",
      "Acompanhamento técnico contínuo",
    ],
    image: boasPraticas,
  },
  {
    icon: ClipboardList,
    title: "Adequação para Vigilância Sanitária",
    description:
      "Preparamos seu estabelecimento para inspeções sanitárias, reduzindo riscos de autuações, multas e interdições.",
    checklist: [
      "Check-list técnico completo",
      "Plano de ação corretivo",
      "Acompanhamento em fiscalizações",
      "Regularização documental",
    ],
    image: vigilancia,
  },
  {
    icon: TrendingDown,
    title: "Prevenção de Perdas e Redução de Desperdícios",
    description:
      "Implantamos estratégias para diminuir perdas operacionais e aumentar a rentabilidade do seu negócio.",
    checklist: [
      "Controle de validade e armazenamento",
      "Organização de estoque (PVPS)",
      "Padronização de produção",
      "Controle de sobras e reaproveitamento seguro",
      "Análise de desperdícios",
    ],
    image: controleEstoque,
  },
  {
    icon: Users,
    title: "Gestão de Equipe e Desenvolvimento de Liderança",
    description:
      "Estruturamos equipes mais organizadas, produtivas e alinhadas com os objetivos da empresa.",
    checklist: [
      "Cronograma de funções",
      "Avaliação de desempenho",
      "Desenvolvimento de habilidades de liderança",
      "Treinamento de líderes e supervisores",
      "Organização de processos internos",
      "Regulamento interno",
    ],
    image: gestaoEquipe,
  },
  {
    icon: GraduationCap,
    title: "Treinamento de Manipuladores e Liderança",
    description:
      "Capacitação teórica e prática com foco em segurança dos alimentos e performance da equipe.",
    checklist: [
      "Higiene e conduta profissional",
      "Contaminação cruzada",
      "Controle de temperatura",
      "Atendimento ao cliente",
      "Liderança aplicada à rotina operacional",
    ],
    image: treinamento,
  },
];

const ServiceCard = ({ service, index }: { service: ServiceBlock; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const Icon = service.icon;
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border/20 bg-card/5 backdrop-blur-sm
        transition-all duration-700 hover:border-primary/30 hover:shadow-[var(--shadow-golden)] group
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-${isReversed ? "l" : "r"} from-[#1a1a1a]/60 via-transparent to-transparent`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent lg:hidden" />
        
        {/* Icon badge */}
        <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center
          group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className={`p-8 lg:p-12 flex flex-col justify-center relative ${isReversed ? "lg:order-1" : ""}`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <BrilliantReflection />
        </div>
        <div className="relative z-10">
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-playfair font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-white/70 text-sm lg:text-base mb-6 leading-relaxed">
            {service.description}
          </p>
          <ul className="space-y-2.5">
            {service.checklist.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FoodServicesConsultoria = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] via-[#222] to-[#1a1a1a] py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--primary)/0.04),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <span
            className={`inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wider uppercase mb-6 transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nossos Serviços
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Consultoria que{" "}
            <span className="text-gradient italic">Transforma</span> Operações
          </h2>
          <p
            className={`text-white/60 text-base lg:text-lg leading-relaxed transition-all duration-700 delay-200 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A melhoria operacional em serviços de alimentação não acontece por acaso. Ela exige método,
            organização, conhecimento técnico e gestão eficiente.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8 lg:space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodServicesConsultoria;
