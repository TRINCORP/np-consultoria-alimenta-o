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
    <section className="bg-background py-12 sm:py-16 md:py-20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-headline text-foreground mb-4 magnetic-float">
            Casos de <span className="text-gradient silver-shine-text drop-shadow-glow">Sucesso</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-4xl mx-auto px-4">
            Descubra como os nossos clientes beneficiaram dos nossos serviços especializados de consultoria nutricional e rotulagem de alimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-premium border-2 border-border/50 bg-background group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-primary hover:scale-125 transition-transform duration-300" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg font-medium line-clamp-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-bold text-foreground text-sm sm:text-base text-glow">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
