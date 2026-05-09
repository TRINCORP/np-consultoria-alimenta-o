import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, ClipboardList, GraduationCap, Search, Factory, FileText, Microscope, Settings } from "lucide-react";

interface Service {
  icon: React.ElementType;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  accent: string;
}

const services: Service[] = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Implantação de Boas Práticas",
    subtitle: "Segurança dos Alimentos",
    description: "Estruturação completa do sistema de Boas Práticas de Fabricação conforme legislação sanitária vigente. Garantimos que cada etapa da sua operação esteja protegida, organizada e em total conformidade.",
    highlights: ["Manual de Boas Práticas (BPF)", "Procedimentos Operacionais Padronizados", "Planilhas de controle e monitoramento", "Acompanhamento técnico contínuo"],
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Search,
    number: "02",
    title: "Adequação Sanitária",
    subtitle: "Vigilância e Alvará",
    description: "Preparamos seu estabelecimento para aprovação em inspeções sanitárias. Do diagnóstico técnico à obtenção do alvará, eliminamos riscos de autuações, multas e interdições.",
    highlights: ["Diagnóstico técnico completo", "Plano de ação corretivo", "Acompanhamento em fiscalizações", "Obtenção do alvará sanitário"],
    accent: "from-primary/15 to-accent/5",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Treinamento de Manipuladores",
    subtitle: "Capacitação Certificada",
    description: "Capacitação teórica e prática para equipes de cozinha e manipuladores de alimentos. Formação completa com certificado, material didático e avaliação de desempenho.",
    highlights: ["Higiene e conduta profissional", "Controle de temperatura e contaminação", "Certificado de conclusão incluso", "Avaliação pós treinamento"],
    accent: "from-accent/15 to-primary/5",
  },
  {
    icon: FileText,
    number: "04",
    title: "Rotulagem Nutricional",
    subtitle: "Conformidade ANVISA",
    description: "Elaboração de rótulos e tabelas nutricionais em total conformidade com as normas da ANVISA. Garantimos precisão, clareza e legalidade em cada informação do seu produto.",
    highlights: ["Tabela nutricional completa", "Informações obrigatórias ANVISA", "Lista de ingredientes e alergênicos", "Revisão técnica especializada"],
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Factory,
    number: "05",
    title: "Consultoria para Indústria",
    subtitle: "Abertura e Regularização",
    description: "Apoio técnico completo para abertura, regularização e manutenção de fábricas e indústrias de alimentos. Da licença sanitária ao registro de produtos na ANVISA.",
    highlights: ["Projeto e layout conforme legislação", "Licença sanitária industrial", "Registro de produtos ANVISA", "Acompanhamento em fiscalizações"],
    accent: "from-accent/15 to-primary/5",
  },
  {
    icon: Settings,
    number: "06",
    title: "Padronização Operacional",
    subtitle: "Fichas Técnicas e Processos",
    description: "Implementação de fichas técnicas, checklists operacionais e sistemas de padronização que garantem consistência, qualidade e redução de desperdícios na sua operação.",
    highlights: ["Fichas técnicas de preparo", "Checklists operacionais diários", "Controle de estoque e validade", "Redução de perdas e desperdícios"],
    accent: "from-primary/15 to-accent/5",
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Main card */}
      <div className="relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-sm border border-border/40 
        hover:border-primary/30 hover:shadow-[var(--shadow-premium)] transition-all duration-700 h-full">
        
        {/* Gradient accent top bar */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent} 
          scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />

        {/* Floating number */}
        <div className="absolute top-6 right-6 font-playfair text-6xl lg:text-7xl font-bold 
          text-primary/[0.06] group-hover:text-primary/[0.12] transition-all duration-700
          group-hover:translate-x-1 group-hover:-translate-y-1 select-none">
          {service.number}
        </div>

        <div className="relative p-7 lg:p-9 flex flex-col h-full">
          {/* Icon + subtitle */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 
                border border-primary/10 flex items-center justify-center
                group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/25
                group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]
                transition-all duration-500">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 
                group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
            <div className="pt-1">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary/70 
                group-hover:text-primary transition-colors duration-300">
                {service.subtitle}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-playfair font-bold text-foreground mb-3 
            group-hover:text-primary transition-colors duration-500 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* Highlights with staggered reveal */}
          <div className="space-y-2.5 pt-5 border-t border-border/30">
            {service.highlights.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary 
                  group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300 flex-shrink-0" />
                <span className="text-[13px] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom CTA line */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary/60 
            group-hover:text-primary transition-all duration-500 cursor-pointer">
            <span className="tracking-wide">Solicitar consultoria</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Horizontal scroll ticker for keywords */
const ServicesTicker = () => {
  const keywords = [
    "Segurança Alimentar", "Vigilância Sanitária", "Boas Práticas", "ANVISA", 
    "Rotulagem", "Alvará Sanitário", "Manipulação de Alimentos", "Consultoria Técnica",
    "Treinamento", "Indústria Alimentícia", "Padronização", "Qualidade",
  ];

  return (
    <div className="relative overflow-hidden py-5 border-y border-border/20 mt-20">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-scroll-x">
        {[...keywords, ...keywords, ...keywords].map((word, i) => (
          <span key={i} className="flex-shrink-0 px-6 text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground/50">
            {word}
            <span className="ml-6 text-primary/20">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const PremiumServicesSection = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: editorialRef, inView: editorialInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative bg-background py-24 lg:py-36 overflow-hidden">
      {/* Ambient decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,hsl(var(--primary)/0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[100px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" 
        style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Editorial header - asymmetric layout */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 mb-20 lg:mb-28">
          {/* Left: label + large title */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                bg-primary/[0.07] border border-primary/10 text-primary text-[11px] font-semibold 
                tracking-[0.2em] uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-[pulse_3s_ease-in-out_infinite]" />
                Nossos Serviços
              </span>
            </div>
            
            <h2 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold 
              text-foreground leading-[1.1] transition-all duration-1000 delay-150 
              ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              Excelência que{" "}
              <span className="relative inline-block">
                <span className="text-gradient italic">Transforma</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 Q50 2 100 6 Q150 10 198 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-muted-foreground/60 text-[0.65em] font-sans font-light tracking-tight">
                Sua Operação Alimentar
              </span>
            </h2>
          </div>

          {/* Right: description + metric */}
          <div className={`lg:col-span-5 flex flex-col justify-end transition-all duration-1000 delay-300 
            ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Soluções especializadas em segurança alimentar, adequação sanitária e gestão de qualidade. 
              Cada serviço é pensado para elevar o padrão da sua operação com método, precisão e resultado.
            </p>
            
            {/* Floating metric */}
            <div className="flex items-baseline gap-3 pb-4 border-b border-border/30">
              <span className="text-5xl lg:text-6xl font-playfair font-bold text-primary/80">+10mil</span>
              <span className="text-sm text-muted-foreground leading-tight">
                consumidores<br />já impactados
              </span>
            </div>
          </div>
        </div>

        {/* Services grid - asymmetric with featured card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Keywords ticker */}
        <ServicesTicker />

        {/* Bottom editorial CTA */}
        <div ref={editorialRef} className={`mt-16 lg:mt-24 flex flex-col lg:flex-row items-center justify-between 
          gap-8 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/[0.05] to-transparent 
          border border-primary/10 backdrop-blur-sm transition-all duration-1000 
          ${editorialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground mb-2">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground">
              Cada operação é única. Conte com a nossa expertise para criar um plano sob medida.
            </p>
          </div>
          <a 
            href="#contato"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full 
              bg-primary text-primary-foreground font-medium text-sm tracking-wide
              hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:scale-105 
              transition-all duration-500 group/cta"
          >
            Falar com Especialista
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;
