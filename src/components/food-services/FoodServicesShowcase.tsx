import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  ClipboardList,
  GraduationCap,
  Search,
  Factory,
  Tag,
  BarChart3,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  glowColor: string;
}

const services: Service[] = [
  {
    icon: ShieldCheck,
    number: "01",
    category: "Segurança dos Alimentos",
    title: "Implantação de Boas Práticas",
    description:
      "Estruturação completa do sistema de BPF conforme legislação sanitária vigente. Cada etapa da sua operação protegida, organizada e em total conformidade.",
    tags: ["Manual BPF", "POP", "Planilhas de controle", "Acompanhamento técnico"],
    gradient: "from-[hsl(20,35%,70%)] to-[hsl(20,45%,80%)]",
    glowColor: "hsl(20,35%,70%)",
  },
  {
    icon: Search,
    number: "02",
    category: "Vigilância Sanitária",
    title: "Adequação Sanitária Completa",
    description:
      "Do diagnóstico técnico à obtenção do alvará sanitário. Eliminamos riscos de autuações, multas e interdições com preparação estratégica.",
    tags: ["Diagnóstico técnico", "Plano corretivo", "Alvará sanitário"],
    gradient: "from-[hsl(210,15%,50%)] to-[hsl(20,35%,70%)]",
    glowColor: "hsl(210,15%,50%)",
  },
  {
    icon: GraduationCap,
    number: "03",
    category: "Capacitação Certificada",
    title: "Treinamento de Manipuladores",
    description:
      "Capacitação teórica e prática com certificado para equipes de cozinha. Higiene, controle de temperatura e conduta profissional.",
    tags: ["Certificado incluso", "Avaliação", "Boas práticas"],
    gradient: "from-[hsl(20,45%,80%)] to-[hsl(20,35%,60%)]",
    glowColor: "hsl(20,45%,80%)",
  },
  {
    icon: Tag,
    number: "04",
    category: "Conformidade ANVISA",
    title: "Rotulagem Nutricional",
    description:
      "Elaboração de rótulos e tabelas nutricionais em total conformidade com as normas da ANVISA. Precisão, clareza e legalidade em cada produto.",
    tags: ["Tabela nutricional", "Alergênicos", "Rotulagem frontal"],
    gradient: "from-[hsl(20,35%,70%)] to-[hsl(210,15%,50%)]",
    glowColor: "hsl(20,35%,70%)",
  },
  {
    icon: ClipboardList,
    number: "05",
    category: "Eficiência Operacional",
    title: "Redução de Perdas e Desperdícios",
    description:
      "Estratégias inteligentes para diminuir perdas operacionais e aumentar a rentabilidade com controle de estoque e padronização.",
    tags: ["Controle PVPS", "Padronização", "Reaproveitamento seguro"],
    gradient: "from-[hsl(210,15%,50%)] to-[hsl(20,45%,80%)]",
    glowColor: "hsl(210,15%,50%)",
  },
  {
    icon: Factory,
    number: "06",
    category: "Indústria Alimentícia",
    title: "Consultoria para Indústria",
    description:
      "Apoio técnico completo para abertura, regularização e manutenção de fábricas de alimentos. Da licença sanitária ao registro ANVISA.",
    tags: ["Licença sanitária", "Registro ANVISA", "Layout industrial"],
    gradient: "from-[hsl(20,35%,60%)] to-[hsl(20,35%,70%)]",
    glowColor: "hsl(20,35%,60%)",
  },
  {
    icon: BarChart3,
    number: "07",
    category: "Auditoria Técnica",
    title: "Auditoria e Revisão de Rótulos",
    description:
      "Análise de rótulos existentes, identificação de não conformidades e regularização do enquadramento sanitário antes de notificações.",
    tags: ["Auditoria preventiva", "Enquadramento", "Conformidade"],
    gradient: "from-[hsl(20,45%,80%)] to-[hsl(210,15%,50%)]",
    glowColor: "hsl(20,45%,80%)",
  },
  {
    icon: Building2,
    number: "08",
    category: "Gestão de Pessoas",
    title: "Gestão de Equipe e Liderança",
    description:
      "Estruturamos equipes organizadas e produtivas com avaliação de desempenho, regulamento interno e desenvolvimento de líderes.",
    tags: ["Liderança", "Avaliação", "Processos internos"],
    gradient: "from-[hsl(210,15%,50%)] to-[hsl(20,35%,60%)]",
    glowColor: "hsl(210,15%,50%)",
  },
];

/* ── Magnetic hover effect ── */
const useMagnetic = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({
      x: x * 8,
      y: y * 8,
      rotateX: -y * 6,
      rotateY: x * 6,
    });
  };

  const handleMouseLeave = () => setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  return { ref, transform, handleMouseMove, handleMouseLeave };
};

/* ── Service Card ── */
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: magnetRef, transform, handleMouseMove, handleMouseLeave } = useMagnetic();
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;
  const isFeatured = index === 0;

  return (
    <div
      ref={inViewRef}
      className={`transition-all duration-[900ms] ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        ref={magnetRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          handleMouseLeave();
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        className={`group relative h-full rounded-[28px] overflow-hidden cursor-pointer
          ${isFeatured ? "min-h-[460px]" : "min-h-[320px]"}
          transition-all duration-500`}
        style={{
          transform: `perspective(800px) translate3d(${transform.x}px, ${transform.y}px, 0) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-[hsl(var(--card))] border border-[hsl(var(--border)/0.3)] rounded-[28px]" />
        
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[28px]"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${service.glowColor}15, transparent 70%)`,
          }}
        />

        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${service.glowColor}30, transparent, ${service.glowColor}15)`,
            padding: "1px",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
          }}
        />

        {/* Shimmer sweep */}
        <div
          className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
        >
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 60%)",
            }}
          />
        </div>

        {/* Content */}
        <div className={`relative z-10 flex flex-col h-full ${isFeatured ? "p-10 lg:p-14" : "p-7 lg:p-8"}`}>
          {/* Top row: number + category */}
          <div className="flex items-center justify-between mb-auto">
            <div className="flex items-center gap-3">
              <span
                className={`font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br ${service.gradient}
                  ${isFeatured ? "text-5xl lg:text-6xl" : "text-4xl"} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
              >
                {service.number}
              </span>
            </div>
            
            {/* Icon container */}
            <div className="relative">
              <div
                className={`${isFeatured ? "w-16 h-16" : "w-12 h-12"} rounded-2xl flex items-center justify-center
                  bg-[hsl(var(--primary)/0.08)] border border-[hsl(var(--primary)/0.12)]
                  group-hover:bg-[hsl(var(--primary)/0.15)] group-hover:border-[hsl(var(--primary)/0.25)]
                  group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.12)]
                  group-hover:scale-110 group-hover:-rotate-3
                  transition-all duration-500`}
              >
                <Icon className={`${isFeatured ? "w-7 h-7" : "w-5 h-5"} text-[hsl(var(--primary))]`} strokeWidth={1.5} />
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[hsl(var(--primary)/0.2)] opacity-0 group-hover:opacity-100 group-hover:animate-[fsShowcasePulse_2s_ease-out_infinite]" />
            </div>
          </div>

          {/* Category pill */}
          <div className="mt-6 mb-3">
            <span className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-[hsl(var(--primary))] 
              px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.06)] border border-[hsl(var(--primary)/0.1)]
              group-hover:bg-[hsl(var(--primary)/0.12)] transition-colors duration-300">
              {service.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-playfair font-bold text-[hsl(var(--foreground))] leading-tight mb-3
              group-hover:text-[hsl(var(--primary))] transition-colors duration-500
              ${isFeatured ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"}`}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className={`text-[hsl(var(--muted-foreground))] leading-relaxed mb-5
              ${isFeatured ? "text-base max-w-lg" : "text-sm"}`}
          >
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto mb-4">
            {service.tags.map((tag, i) => (
              <span
                key={tag}
                className={`text-[11px] font-medium px-3 py-1.5 rounded-full 
                  bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]
                  group-hover:bg-[hsl(var(--primary)/0.08)] group-hover:text-[hsl(var(--primary))]
                  transition-all duration-500`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary)/0.5)] 
            group-hover:text-[hsl(var(--primary))] transition-all duration-500 pt-3 border-t border-[hsl(var(--border)/0.2)]">
            <span className="tracking-wide text-xs">Saiba mais</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Floating Orb Background ── */
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full 
      bg-[hsl(var(--primary)/0.03)] blur-[100px] animate-[fsOrbFloat_20s_ease-in-out_infinite]" />
    <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full 
      bg-[hsl(var(--accent)/0.03)] blur-[80px] animate-[fsOrbFloat_25s_ease-in-out_infinite_reverse]" />
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full 
      bg-[hsl(var(--primary)/0.02)] blur-[120px] animate-[fsOrbFloat_30s_ease-in-out_infinite]" />
  </div>
);

/* ── Main Component ── */
const FoodServicesShowcase = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const lineRef = useRef<HTMLDivElement>(null);

  /* Animated line that grows on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      lineRef.current.style.height = `${progress * 100}%`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[hsl(var(--background))] py-24 lg:py-36 overflow-hidden">
      <FloatingOrbs />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* ── Header ── */}
        <div ref={headerRef} className="relative mb-20 lg:mb-28">
          {/* Decorative vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px hidden lg:block overflow-hidden">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.3)] to-transparent transition-[height] duration-100"
              style={{ height: "0%" }}
            />
          </div>

          <div className="lg:pl-12">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))]">
                Nossos Serviços Especializados
              </span>
            </div>

            {/* Title */}
            <h2
              className={`font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[hsl(var(--foreground))] 
                leading-[1.08] mb-6 max-w-4xl transition-all duration-1000 delay-100 ${
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              Consultoria que{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent-light))] to-[hsl(var(--primary))]">
                  Protege
                </span>
              </span>
              ,{" "}
              <span className="relative inline-block">
                <span className="italic text-[hsl(var(--primary))]">Organiza</span>
              </span>{" "}
              <br className="hidden lg:block" />
              e{" "}
              <span className="text-[hsl(var(--muted-foreground))] font-sans font-light text-[0.6em]">
                Transforma Resultados
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className={`text-base lg:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl leading-relaxed transition-all duration-1000 delay-200 ${
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Soluções sob medida em segurança alimentar, adequação sanitária e gestão de qualidade. 
              Cada serviço é desenhado para elevar o padrão da sua operação com método, precisão e resultado comprovado.
            </p>

            {/* Stats bar */}
            <div
              className={`flex flex-wrap items-center gap-8 lg:gap-12 mt-10 pt-8 border-t border-[hsl(var(--border)/0.3)] transition-all duration-1000 delay-300 ${
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { value: "300+", label: "Empresas atendidas" },
                { value: "15+", label: "Anos de experiência" },
                { value: "100%", label: "Conformidade garantida" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="text-3xl lg:text-4xl font-playfair font-bold text-[hsl(var(--primary)/0.7)]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[hsl(var(--muted-foreground))] leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services Grid — Asymmetric Bento ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          ref={ctaRef}
          className={`mt-20 lg:mt-28 relative rounded-[32px] overflow-hidden transition-all duration-1000 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* CTA Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--foreground))] to-[hsl(210,15%,25%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,hsl(var(--primary)/0.1),transparent_50%)]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-16">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-playfair font-bold text-white mb-3 leading-tight">
                Precisa de uma solução{" "}
                <span className="text-[hsl(var(--primary))] italic">personalizada</span>?
              </h3>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                Cada operação é única. Nossa equipe de especialistas cria planos sob medida 
                para garantir a conformidade e o sucesso do seu negócio.
              </p>
            </div>

            <a
              href="#contato"
              className="flex-shrink-0 inline-flex items-center gap-3 px-10 py-5 rounded-full
                bg-[hsl(var(--primary))] text-white font-semibold text-sm tracking-wide
                hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)] hover:scale-105
                active:scale-[0.98] transition-all duration-500 group/btn"
            >
              Falar com Especialista
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes fsOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }
        @keyframes fsShowcasePulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default FoodServicesShowcase;
