import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    rating: 5,
    text: "A NP Consultoria Alimentos transformou os nossos protocolos de segurança alimentar, levando a uma melhoria da conformidade e da confiança dos clientes.",
    name: "Maria Silva",
    role: "Gestora de Serviços de Alimentação"
  },
  {
    rating: 5,
    text: "Graças à NP Rotulagem, os nossos rótulos de alimentos cumprem agora todas as normas regulamentares, reduzindo os riscos legais e aumentando a confiança dos consumidores.",
    name: "Carlos Pereira",
    role: "Diretor de Garantia de Qualidade"
  },
  {
    rating: 5,
    text: "A parceria com a NP Consultoria Alimentos elevou os nossos padrões nutricionais. As suas informações ajudaram-nos a otimizar as ofertas do menu.",
    name: "Ana Costa",
    role: "Nutricionista Chefe"
  }
];

const TestimonialsSection = () => {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20 md:py-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.03),transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="scroll-reveal-scale inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 sm:mb-6">
            Depoimentos
          </span>
          <h2 className="scroll-reveal-blur stagger-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Histórias de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="scroll-reveal stagger-2 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra como os nossos clientes transformaram as suas operações com a nossa consultoria especializada
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`scroll-reveal-${index % 2 === 0 ? 'left' : 'right'} stagger-${index + 3} group relative p-6 sm:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 
                hover:border-primary/20 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5`}
            >
              {/* Quote mark */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-5xl sm:text-6xl text-primary/10 font-serif leading-none select-none">
                "
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-primary" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/30">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
