import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import nutritionConsultation from "@/assets/nutrition-consultation.jpg";
import kitchenAudit from "@/assets/kitchen-audit.jpg";
import allergenIcons from "@/assets/allergen-icons.jpg";

const services = [
  {
    title: "Planos de Nutrição Personalizados",
    description: "Alcance os seus objetivos de bem-estar com planos de nutrição personalizados, concebidos para satisfazer as suas necessidades e estilo de vida únicos. Beneficie de aconselhamento especializado e apoio contínuo para otimizar a sua saúde.",
    image: nutritionConsultation
  },
  {
    title: "Normas de Segurança Alimentar Reforçadas",
    description: "Eleve as suas operações de serviços de alimentação com as nossas serviços de consultoria abrangentes. Garanta a conformidade com os regulamentos de segurança alimentar, otimize os processos e melhore a qualidade das suas ofertas.",
    image: kitchenAudit
  },
  {
    title: "Rotulagem de Alimentos Precisa",
    description: "Navegue pelas complexidades da rotulagem de alimentos com os nossos serviços especializados. Garanta que os seus produtos cumprem todos os requisitos regulamentares, comuniquem com precisão com os consumidores e construam a confiança do consumidor.",
    image: allergenIcons
  }
];

const ServicesGrid = () => {
  return (
    <section className="bg-muted py-12 sm:py-16 md:py-20 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-56 sm:w-80 h-56 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Liberte o Seu Potencial com <span className="italic font-playfair text-gradient silver-shine-text">Orientação Nutricional Especializada</span> e Soluções de Serviços de Alimentação
            </h2>
          </div>
          <div className="flex items-center animate-slide-in-right">
            <p className="text-base sm:text-lg text-foreground">
              A NP Consultoria Alimentos oferece orientação especializada que vai além do aconselhamento genérico. Quer seja um indivíduo à procura de estratégias nutricionais personalizadas ou uma empresa de serviços de alimentação que pretende a excelência operacional e a conformidade regulamentar, a nossa experiência garante que recebe soluções personalizadas que impulsionam o sucesso e o bem-estar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-premium bg-background group animate-scale-in overflow-hidden magnetic-float"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] rounded-t-lg overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-foreground transition-colors duration-300 group-hover:text-gradient">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed line-clamp-3">{service.description}</p>
                <Button 
                  variant="outline" 
                  size="default" 
                  className="btn-ghost w-full sm:w-auto text-sm"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
