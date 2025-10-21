import nutritionHeroBg from "@/assets/nutrition-hero-bg.jpg";
import { SmokeEffect } from "@/components/effects/SmokeEffect";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";

const NPLabelingHero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background particles with floating effect */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full floating" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full floating animation-delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full floating animation-delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/50 rounded-full floating animation-delay-1500" />
      <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-accent/60 rounded-full floating animation-delay-2000" />
      
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="absolute inset-0">
        <img 
          src={nutritionHeroBg} 
          alt="Nutrition facts background" 
          className="w-full h-full object-cover opacity-60 zoom-in-image" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <SmokeEffect />
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-headline mb-8 animate-slide-in-left magnetic-float relative">
            <span className="inline-block border-b-4 border-white pb-2 silver-shine-text drop-shadow-glow relative">
              Rotulagem Precisa
              <BrilliantReflection />
            </span>: A <span className="text-gradient italic">Base</span> do Seu Negócio
          </h1>
          
          <p className="text-body-large mb-12 max-w-2xl animate-slide-in-left animation-delay-200">
            Na NP Rotulagem, entendemos que a rotulagem precisa de alimentos é mais do que apenas conformidade; trata-se de construir confiança com os seus clientes e garantir o sucesso dos seus produtos. Deixe-nos ajudá-lo a navegar pelas complexidades dos regulamentos de rotulagem de alimentos.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-in-left animation-delay-300">
            <button className="btn-hero energy-pulse">
              Saiba Mais
            </button>
            <button className="btn-secondary interactive-element">
              Obtenha um Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NPLabelingHero;
