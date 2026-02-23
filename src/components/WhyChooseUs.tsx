import { useInView } from "react-intersection-observer";
import { Search, ClipboardCheck, TrendingDown, Users, Tag, Target } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Search,
    title: "Atuação Preventiva",
    description: "Reduzimos riscos de autuações, perdas financeiras, desperdícios e retrabalhos antes que aconteçam.",
  },
  {
    icon: ClipboardCheck,
    title: "Conformidade com Segurança",
    description: "Processos fundamentados na legislação sanitária vigente, garantindo tranquilidade em fiscalizações.",
  },
  {
    icon: TrendingDown,
    title: "Redução de Perdas",
    description: "Organização operacional, controle de estoque e padronização que impactam diretamente nos resultados financeiros.",
  },
  {
    icon: Users,
    title: "Desenvolvimento de Equipe",
    description: "Estruturamos equipes organizadas, líderes preparados e ambientes mais produtivos.",
  },
  {
    icon: Tag,
    title: "Técnica e Estratégia em Rotulagem",
    description: "Conhecimento regulatório e posicionamento de marca para rótulos que fortalecem seu produto.",
  },
  {
    icon: Target,
    title: "Atendimento Personalizado",
    description: "Planos de ação direcionados à sua realidade, porte e segmento. Sem soluções genéricas.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 
        transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent 
        transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      <div className="relative z-10 p-6 lg:p-8">
        <div className={`relative w-14 h-14 rounded-xl mb-6 flex items-center justify-center 
          transition-all duration-500 ${isHovered ? 'bg-primary/20 scale-110' : 'bg-primary/10'}`}>
          <feature.icon className={`w-7 h-7 transition-all duration-500 ${isHovered ? 'text-primary scale-110' : 'text-primary/80'}`} />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 relative inline-block">
          {feature.title}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 
            ${isHovered ? 'w-full' : 'w-0'}`} />
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full 
        bg-gradient-to-tl from-primary/10 to-transparent transition-all duration-500
        ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />
    </div>
  );
};

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
      
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 
            transition-all duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Por Que Escolher a NP
          </span>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 
            transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Segurança, Organização e{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Estratégia Aplicada</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path 
                  d="M1 5.5C47.6667 2.16667 141 -2.5 199 5.5" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="2" 
                  strokeLinecap="round"
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
            ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Atuamos de forma técnica, prática e personalizada, entendendo que cada empresa 
            possui desafios específicos e precisa de soluções viáveis, não apenas teóricas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom institutional CTA */}
        <div className={`mt-16 md:mt-20 text-center max-w-2xl mx-auto transition-all duration-700 delay-700 
          ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-12 h-px bg-primary/40 mx-auto mb-6" />
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Garantir segurança dos alimentos, fortalecer sua marca e estruturar sua operação para crescer com responsabilidade e credibilidade.
          </p>
          <p className="text-foreground font-semibold italic mt-4">
            NP Consultoria e NP Rotulagem — organização que protege, estratégia que impulsiona.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
