import { CardContent } from "@/components/ui/card";
import chefKitchen from "@/assets/chef-kitchen.jpg";
import foodLabelStrawberries from "@/assets/food-label-strawberries.jpg";
import teamTraining from "@/assets/team-training.jpg";
import customerDining from "@/assets/customer-dining.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Otimização da Eficiência da Cozinha",
    description: "Otimizamos as suas operações de cozinha, garantindo eficiência e segurança. Os nossos serviços de consultoria ajudam a reduzir o desperdício e a melhorar a produtividade.",
    image: chefKitchen
  },
  {
    title: "Rótulos Claros e em Conformidade",
    description: "A NP Rotulagem garante que os seus rótulos de alimentos cumprem todos os requisitos regulamentares. Uma rotulagem precisa gera confiança e evita problemas legais.",
    image: foodLabelStrawberries
  },
  {
    title: "Capacitar a Sua Equipa",
    description: "Fornecemos programas de formação abrangentes para a sua equipa. A nossa formação melhora as competências e garante uma qualidade consistente.",
    image: teamTraining
  },
  {
    title: "Deliciar os Seus Clientes",
    description: "As nossas soluções focam-se em aumentar a satisfação do cliente. Ajudamos a criar menus e serviços que excedem as expectativas.",
    image: customerDining
  }
];

const HeroServices = () => {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="bg-background pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`scroll-reveal-left stagger-${index + 1} card-3d overflow-hidden border-none shadow-lg bg-card group rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <CardContent className="p-4 sm:p-6 bg-background">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground transition-colors duration-300 group-hover:text-primary line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
