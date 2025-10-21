import { Button } from "@/components/ui/button";
import nutritionFactsDark from "@/assets/nutrition-facts-dark.jpg";

const DarkCTASection = () => {
  return (
    <section className="relative bg-foreground text-background py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={nutritionFactsDark} 
          alt="Nutrition facts label" 
          className="w-full h-full object-cover opacity-20 zoom-in-image" 
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-6xl font-bold mb-8 leading-tight text-background animate-fade-in font-playfair">
            Rotulagem <span className="silver-shine-text drop-shadow-glow">Precisa</span> - A <span className="italic text-gradient">Base</span> do Seu Negócio
          </h2>
          
          <p className="text-xl mb-12 leading-relaxed text-background animate-fade-in" style={{ animationDelay: '200ms' }}>
            Na NP Rotulagem, entendemos que a rotulagem precisa de alimentos é mais do que apenas conformidade; trata-se de construir confiança com os seus clientes e garantir o sucesso dos seus produtos. Deixe-nos ajudá-lo a navegar pelas complexidades dos regulamentos de rotulagem de alimentos.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button 
              variant="default" 
              size="lg" 
              className="btn-hero"
            >
              Saiba Mais
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary"
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
