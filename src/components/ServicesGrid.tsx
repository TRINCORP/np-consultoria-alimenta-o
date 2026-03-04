import { Button } from "@/components/ui/button";
import nutritionConsultation from "@/assets/nutrition-consultation.jpg";
import kitchenAudit from "@/assets/kitchen-audit.jpg";
import allergenIcons from "@/assets/allergen-icons.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Planos de Nutrição Personalizados",
    description: "Alcance os seus objetivos de bem-estar com planos de nutrição personalizados, concebidos para satisfazer as suas necessidades e estilo de vida únicos.",
    image: nutritionConsultation
  },
  {
    title: "Normas de Segurança Alimentar Reforçadas",
    description: "Eleve as suas operações de serviços de alimentação com as nossas serviços de consultoria abrangentes. Garanta a conformidade com os regulamentos de segurança alimentar.",
    image: kitchenAudit
  },
  {
    title: "Rotulagem de Alimentos Precisa",
    description: "Navegue pelas complexidades da rotulagem de alimentos com os nossos serviços especializados. Garanta que os seus produtos cumprem todos os requisitos regulamentares.",
    image: allergenIcons
  }
];

const ServicesGrid = () => {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="bg-gradient-to-b from-muted/30 via-background to-background py-20 md:py-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
          <div>
            <span className="scroll-reveal-left inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Nossos Serviços
            </span>
            <h2 className="scroll-reveal-blur stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Liberte o Seu Potencial com <span className="text-gradient italic font-playfair">Orientação Especializada</span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="scroll-reveal-right stagger-2 text-base lg:text-lg text-muted-foreground leading-relaxed">
              A NP Consultoria Alimentos oferece orientação especializada que vai além do aconselhamento genérico. 
              Quer seja uma empresa à procura de excelência operacional ou conformidade regulamentar, 
              a nossa experiência garante soluções personalizadas que impulsionam o sucesso.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`scroll-reveal-left stagger-${index + 3} group relative rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 overflow-hidden
                hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              
              <div className="p-6 md:p-8 relative">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-full border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
