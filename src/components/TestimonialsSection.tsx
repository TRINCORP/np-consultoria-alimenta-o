import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    rating: 5,
    text: "A NP Consultoria Alimentos transformou os nossos protocolos de segurança alimentar, levando a uma melhoria da conformidade e da confiança dos clientes. O seu aconselhamento personalizado e apoio dedicado fizeram uma diferença significativa nas nossas operações e reputação.",
    name: "Maria Silva",
    role: "Gestora de Serviços de Alimentação, Restaurante Healthy Bites"
  },
  {
    rating: 5,
    text: "Graças à NP Rotulagem, os nossos rótulos de alimentos cumprem agora todas as normas regulamentares, reduzindo os riscos legais e aumentando a confiança dos consumidores. A sua equipa é profissional, eficiente e altamente conhecedora das regulamentações de rotulagem de alimentos.",
    name: "Carlos Pereira",
    role: "Diretor de Garantia de Qualidade, Mercado Fresh & Natural"
  },
  {
    rating: 5,
    text: "A parceria com a NP Consultoria Alimentos elevou os nossos padrões nutricionais. As suas informações ajudaram-nos a otimizar as ofertas do menu e a melhorar a satisfação do cliente, tornando-nos líderes em opções de alimentos saudáveis.",
    name: "Ana Costa",
    role: "Nutricionista Chefe, Wellness Café"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-b from-background via-muted/20 to-background py-20 md:py-28 overflow-hidden relative">
      {/* Refined background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.03),transparent_60%)]" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-float animation-delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Histórias de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Descubra como os nossos clientes transformaram as suas operações com a nossa consultoria especializada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 
                hover:border-primary/20 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif leading-none select-none">
                "
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 fill-current text-primary" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-foreground mb-8 leading-relaxed text-base relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
