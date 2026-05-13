import { Card, CardContent } from "@/components/ui/card";
import labelReview from "@/assets/revisao_rotulos.png";
import labelDesign from "@/assets/rotulos_personalizados.png";
import vegetablesLabels from "@/assets/rotulagem_conforme.png";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const WHATSAPP = "5519989750741";
const WA_MSG = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de rotulagem da NP.");

const services = [
  {
    title: "Serviços de Revisão de Rótulos",
    description: "Garanta que os seus rótulos atuais cumprem todas as normas regulamentares com o nosso serviço de revisão abrangente. Identificamos potenciais problemas e fornecemos recomendações claras e acionáveis.",
    image: labelReview,
  },
  {
    title: "Criação de Rótulos Personalizados",
    description: "Precisa de um novo rótulo do zero? Nossa equipe pode criar rótulos apelativos e em conformidade que representam com precisão o seu produto e marca.",
    image: labelDesign,
  },
  {
    title: "Assistência à Conformidade",
    description: "Navegue pelo complexo mundo dos regulamentos de rotulagem de alimentos com a nossa orientação especializada. Ajudamos a compreender e cumprir todos os requisitos.",
    image: vegetablesLabels,
  },
];

/* Card extraído como componente para usar useInView sem violar Rules of Hooks */
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: false });

  return (
    <Card
      ref={ref}
      className="card-premium bg-card overflow-hidden group animate-scale-in relative"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Brilho — ativa no hover (desktop) OU no inView (mobile) */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        <BrilliantReflection />
      </div>

      {/* Imagem */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-700
            ${inView ? "scale-110 rotate-1" : "group-hover:scale-110 group-hover:rotate-1"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background/80 to-transparent
          transition-opacity duration-500
          ${inView ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
      </div>

      {/* Conteúdo */}
      <CardContent className="p-5 sm:p-6 lg:p-8 relative z-10">
        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300
          ${inView ? "text-gradient" : "text-foreground group-hover:text-gradient"}`}>
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Botão → WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 rounded-full border border-current
            px-5 py-2.5 text-sm font-medium
            text-[hsl(20_38%_52%)] border-[hsl(20_38%_52%/0.4)]
            hover:bg-[hsl(20_38%_52%)] hover:text-white hover:border-transparent
            transition-all duration-300"
        >
          Saiba mais
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <section className="bg-background py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="animate-slide-in-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
              A nossa <span className="text-gradient silver-shine-text drop-shadow-glow">Experiência</span> em Serviços de Rotulagem de Alimentos para o Seu Negócio
            </h2>
          </div>
          <div className="flex items-center animate-slide-in-right">
            <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed">
              Na NP Rotulagem, oferecemos um conjunto de serviços concebidos para garantir que os seus produtos alimentares cumprem todos os requisitos regulamentares e comunicam com precisão com os consumidores.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
