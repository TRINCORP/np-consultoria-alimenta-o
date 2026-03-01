import { Button } from "@/components/ui/button";
import nutritionFactsDark from "@/assets/nutrition-facts-dark.jpg";
import { SmokeEffect } from "@/components/effects/SmokeEffect";

const DarkCTASection = () => {
  return (
    <section className="relative bg-foreground text-background py-20 sm:py-28 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={nutritionFactsDark} 
          alt="Nutrition facts label" 
          className="w-full h-full object-cover opacity-20 zoom-in-image" 
        />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <SmokeEffect />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-background animate-fade-in font-playfair leading-tight">
            Rotulagem <span className="silver-shine-text drop-shadow-glow">Precisa</span> - A <span className="italic text-gradient">Base</span> do Seu Negócio
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-background/95 animate-fade-in animation-delay-200 leading-relaxed">
            Na NP Rotulagem, entendemos que a rotulagem precisa de alimentos é mais do que apenas conformidade; trata-se de construir confiança com os seus clientes e garantir o sucesso dos seus produtos. Deixe-nos ajudá-lo a navegar pelas complexidades dos regulamentos de rotulagem de alimentos.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in animation-delay-300">
            <Button 
              variant="default" 
              size="lg" 
              className="btn-hero w-full sm:w-auto"
            >
              Saiba Mais
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary interactive-element w-full sm:w-auto"
            >
              Obtenha um Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkCTASection;
