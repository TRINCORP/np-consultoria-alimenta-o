import { useInView } from "react-intersection-observer";
import { UserCheck, Scale, Building2, MapPin } from "lucide-react";

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada tipo de negócio alimentício tem suas particularidades. Adaptamos nossas soluções à sua realidade operacional.",
  },
  {
    icon: Scale,
    title: "Legislação ANVISA Atualizada",
    description: "Conhecimento técnico sempre atualizado sobre normas da ANVISA e exigências da vigilância sanitária.",
  },
  {
    icon: Building2,
    title: "Experiência Multissetorial",
    description: "Atuamos com restaurantes, cozinhas industriais, indústrias de alimentos e produtores artesanais.",
  },
  {
    icon: MapPin,
    title: "Presencial em Indaiatuba",
    description: "Atendimento presencial em Indaiatuba e região de Campinas, com acompanhamento em vistorias e fiscalizações.",
  },
];

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: cardsRef, inView: cardsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30 hidden md:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 
            transition-all duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Por Que Escolher a NP
          </span>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 
            transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Por que escolher a{" "}
            <span className="relative inline-block">
              <span className="text-gradient">NP Consultoria?</span>
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
          
          <p className={`text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 
            ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Atuamos de forma técnica, prática e personalizada para garantir segurança alimentar, 
            conformidade com a vigilância sanitária e crescimento sustentável do seu negócio.
          </p>
        </div>

        {/* 4 Differential Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 
                  transition-all duration-700 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2
                  ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center max-w-2xl mx-auto mt-12 sm:mt-16 transition-all duration-700 delay-700 
          ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-12 h-px bg-primary/40 mx-auto mb-4 sm:mb-6" />
          <p className="text-muted-foreground mb-2 leading-relaxed text-sm sm:text-base">
            Garantir segurança dos alimentos, fortalecer sua marca e estruturar sua operação para crescer com responsabilidade e credibilidade.
          </p>
          <p className="text-foreground font-semibold italic mt-3 sm:mt-4 text-sm sm:text-base">
            NP Consultoria e NP Rotulagem — organização que protege, estratégia que impulsiona.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
