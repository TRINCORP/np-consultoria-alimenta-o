import { Card, CardContent } from "@/components/ui/card";
import chefKitchen from "@/assets/chef-kitchen.jpg";
import foodLabelStrawberries from "@/assets/food-label-strawberries.jpg";
import teamTraining from "@/assets/team-training.jpg";
import customerDining from "@/assets/customer-dining.jpg";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Otimização da Eficiência da Cozinha",
    description: "Otimizamos as suas operações de cozinha, garantindo eficiência e segurança. Os nossos serviços de consultoria ajudam a reduzir o desperdício e a melhorar a produtividade.",
    image: chefKitchen
  },
  {
    title: "Rótulos Claros e em Conformidade",
    description: "A NP Rotulagem garante que os seus rótulos de alimentos cumprem todos os requisitos regulamentares. Uma rotulagem precisa gera confiança e evita problemas legais para o seu negócio.",
    image: foodLabelStrawberries
  },
  {
    title: "Capacitar a Sua Equipa",
    description: "Fornecemos programas de formação abrangentes para a sua equipa. A nossa formação melhora as competências e garante uma qualidade consistente na preparação e serviço de alimentos.",
    image: teamTraining
  },
  {
    title: "Deliciar os Seus Clientes",
    description: "As nossas soluções focam-se em aumentar a satisfação do cliente. Ajudamos a criar menus e serviços que cumprem e excedem consistentemente as expectativas dos clientes.",
    image: customerDining
  }
];

const HeroServices = () => {
  return (
    <section className="bg-background pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <Card 
                key={index}
                ref={ref}
                className={`card-3d overflow-hidden border-none shadow-lg bg-card group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
