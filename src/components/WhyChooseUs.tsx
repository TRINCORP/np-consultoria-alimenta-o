import { useInView } from "react-intersection-observer";
import { Shield, TrendingUp, Users, Award, Lightbulb, Target } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Conformidade Garantida",
    description: "100% de conformidade com regulamentações ANVISA e padrões internacionais de segurança alimentar.",
    stat: "100%",
    statLabel: "Taxa de aprovação",
  },
  {
    icon: TrendingUp,
    title: "Resultados Mensuráveis",
    description: "Metodologia baseada em dados com métricas claras e ROI comprovado para nossos clientes.",
    stat: "3x",
    statLabel: "Retorno médio",
  },
  {
    icon: Users,
    title: "Equipa Especializada",
    description: "Nutricionistas e consultores com mais de 15 anos de experiência no setor alimentar.",
    stat: "15+",
    statLabel: "Anos de experiência",
  },
  {
    icon: Award,
    title: "Reconhecimento do Mercado",
    description: "Premiados pela excelência em consultoria alimentar e satisfação do cliente.",
    stat: "98%",
    statLabel: "Clientes satisfeitos",
  },
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description: "Soluções atualizadas com as últimas tendências e tecnologias do setor alimentar.",
    stat: "50+",
    statLabel: "Metodologias",
  },
  {
    icon: Target,
    title: "Abordagem Personalizada",
    description: "Cada projeto é único. Desenvolvemos estratégias específicas para as suas necessidades.",
    stat: "300+",
    statLabel: "Projetos entregues",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/30 
        transition-all duration-500 cursor-pointer
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${isHovered ? 'shadow-2xl shadow-primary/10 border-primary/20 -translate-y-2' : 'hover:shadow-lg'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Animated gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 
        transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
      />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent 
        transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
      />

      <div className="relative z-10 p-6 lg:p-8">
        {/* Icon with animated background */}
        <div className={`relative w-14 h-14 rounded-xl mb-6 flex items-center justify-center 
          transition-all duration-500 ${isHovered 
            ? 'bg-primary/20 scale-110' 
            : 'bg-primary/10'}`}
        >
          <feature.icon className={`w-7 h-7 transition-all duration-500 ${isHovered ? 'text-primary scale-110' : 'text-primary/80'}`} />
          
          {/* Floating ring effect */}
          <div className={`absolute inset-0 rounded-xl border-2 border-primary/30 
            transition-all duration-500 ${isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-0'}`} 
          />
        </div>

        {/* Title with animated underline */}
        <h3 className="text-xl font-bold text-foreground mb-3 relative inline-block">
          {feature.title}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 
            ${isHovered ? 'w-full' : 'w-0'}`} 
          />
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Stat badge - appears on hover */}
        <div className={`flex items-center gap-3 transition-all duration-500 
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="text-3xl font-bold text-primary">{feature.stat}</span>
          <span className="text-sm text-muted-foreground">{feature.statLabel}</span>
        </div>
      </div>

      {/* Corner decoration */}
      <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full 
        bg-gradient-to-tl from-primary/10 to-transparent transition-all duration-500
        ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} 
      />
    </div>
  );
};

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with staggered animation */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 
            transition-all duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Por Que Escolher-nos
          </span>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 
            transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Excelência que{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Impulsiona Resultados</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path 
                  d="M1 5.5C47.6667 2.16667 141 -2.5 199 5.5" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-1000 delay-500 ${titleInView ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    strokeDasharray: 200, 
                    strokeDashoffset: titleInView ? 0 : 200,
                    transition: 'stroke-dashoffset 1s ease-out 0.5s'
                  }}
                />
              </svg>
            </span>
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 
            ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Combinamos experiência comprovada com metodologias inovadoras para entregar 
            soluções que transformam negócios no setor alimentar.
          </p>
        </div>

        {/* Features Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 
          ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-muted-foreground mb-4">
            Pronto para elevar seu negócio ao próximo nível?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 text-primary font-medium group"
          >
            Fale com nossos especialistas
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
