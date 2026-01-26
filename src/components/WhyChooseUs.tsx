import { useInView } from "react-intersection-observer";
import { Shield, TrendingUp, Users, Award, Lightbulb, Target } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Conformidade Garantida",
    description: "100% de conformidade com regulamentações ANVISA e padrões internacionais de segurança alimentar.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Mensuráveis",
    description: "Metodologia baseada em dados com métricas claras e ROI comprovado para nossos clientes.",
  },
  {
    icon: Users,
    title: "Equipa Especializada",
    description: "Nutricionistas e consultores com mais de 15 anos de experiência no setor alimentar.",
  },
  {
    icon: Award,
    title: "Reconhecimento do Mercado",
    description: "Premiados pela excelência em consultoria alimentar e satisfação do cliente.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description: "Soluções atualizadas com as últimas tendências e tecnologias do setor alimentar.",
  },
  {
    icon: Target,
    title: "Abordagem Personalizada",
    description: "Cada projeto é único. Desenvolvemos estratégias específicas para as suas necessidades.",
  },
];

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 transition-all duration-700 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Por Que Escolher-nos
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Excelência que <span className="text-gradient">Impulsiona Resultados</span>
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Combinamos experiência comprovada com metodologias inovadoras para entregar 
            soluções que transformam negócios no setor alimentar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 
                  hover:border-primary/30 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 
                    group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
