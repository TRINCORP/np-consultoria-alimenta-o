import { useInView } from "react-intersection-observer";
import { Search, ClipboardCheck, TrendingDown, Users, Tag, Target } from "lucide-react";
import "./why_np_cards.css";

const features = [
  {
    icon: Search,
    title: "Atuação Preventiva",
    description: "Reduzimos riscos de autuações, perdas e retrabalhos antes que aconteçam.",
  },
  {
    icon: ClipboardCheck,
    title: "Conformidade com Segurança",
    description: "Processos na legislação sanitária vigente, garantindo tranquilidade em fiscalizações.",
  },
  {
    icon: TrendingDown,
    title: "Redução de Perdas",
    description: "Organização operacional e padronização que impactam nos resultados financeiros.",
  },
  {
    icon: Users,
    title: "Desenvolvimento de Equipe",
    description: "Equipes organizadas, líderes preparados e ambientes mais produtivos.",
  },
  {
    icon: Tag,
    title: "Técnica em Rotulagem",
    description: "Conhecimento regulatório e posicionamento de marca para rótulos estratégicos.",
  },
  {
    icon: Target,
    title: "Atendimento Personalizado",
    description: "Planos direcionados à sua realidade, porte e segmento. Sem soluções genéricas.",
  },
];

// Duplicate to fill 12 items for seamless loop
const carouselItems = [...features, ...features];

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
      
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 
            transition-all duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Por Que Escolher a NP
          </span>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 
            transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Por que escolher a{" "}
            <span className="relative inline-block">
              <span className="text-gradient">NP?</span>
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

        {/* 3D Infinite Carousel */}
        <div className={`transition-all duration-1000 delay-300 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="why-np-carousel">
            <div 
              className="why-np-carousel-track" 
              style={{ '--time': '80s', '--total': 12 } as React.CSSProperties}
            >
              {carouselItems.map((feature, index) => (
                <div 
                  key={index} 
                  className="why-np-card-item" 
                  style={{ '--i': index + 1 } as React.CSSProperties}
                >
                  <div className="why-np-card-inner">
                    <div className="why-np-card-icon">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="why-np-card-title">{feature.title}</h3>
                    <p className="why-np-card-desc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
