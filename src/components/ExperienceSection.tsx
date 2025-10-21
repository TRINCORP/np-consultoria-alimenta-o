import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labelReview from "@/assets/label-review.jpg";
import labelDesign from "@/assets/label-design.jpg";
import vegetablesLabels from "@/assets/vegetables-labels.jpg";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";

const services = [
  {
    title: "Serviços de Revisão de Rótulos",
    description: "Garanta que os seus rótulos atuais cumprem todas as normas regulamentares com o nosso serviço de revisão abrangente. Identificamos potenciais problemas e fornecemos recomendações claras e acionáveis.",
    image: labelReview,
    buttonText: "Saiba Mais"
  },
  {
    title: "Criação de Rótulos Personalizados",
    description: "Precisa de um novo rótulo do zero? A nossa equipa pode criar rótulos apelativos e em conformidade que representam com precisão o seu produto e marca. Tratamos de tudo, desde listas de ingredientes a painéis nutricionais.",
    image: labelDesign,
    buttonText: "Saiba Mais"
  },
  {
    title: "Assistência à Conformidade",
    description: "Navegue pelo complexo mundo dos regulamentos de rotulagem de alimentos com a nossa orientação especializada. Ajudamo-lo a compreender e a cumprir todos os requisitos, minimizando o risco de não conformidade e problemas legais.",
    image: vegetablesLabels,
    buttonText: "Saiba Mais"
  }
];

const ExperienceSection = () => {
  return (
    <section className="bg-background py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              A nossa <span className="text-gradient silver-shine-text drop-shadow-glow">Experiência</span> em Serviços de Rotulagem de Alimentos para o Seu Negócio
            </h2>
          </div>
          <div className="flex items-center animate-slide-in-right">
            <p className="text-base lg:text-lg text-foreground leading-relaxed">
              Na NP Rotulagem, oferecemos um conjunto de serviços concebidos para garantir que os seus produtos alimentares cumprem todos os requisitos regulamentares e comunicam com precisão com os consumidores. Desde a revisão inicial do rótulo até à criação completa e assistência à conformidade, estamos aqui para apoiar o seu negócio em cada passo do caminho. O nosso objetivo é simplificar as complexidades da rotulagem de alimentos, permitindo-lhe concentrar-se no que faz melhor: criar ótimos alimentos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-premium bg-card overflow-hidden group animate-scale-in magnetic-float relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <BrilliantReflection />
              </div>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-6 lg:p-8 relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors duration-300">{service.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Button variant="outline" size="default" className="btn-ghost rounded-full">
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
