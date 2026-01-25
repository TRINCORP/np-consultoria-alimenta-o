import npRotulagemBg from "@/assets/np-rotulagem-bg.png";
import { SmokeEffect } from "@/components/effects/SmokeEffect";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";

const NPLabelingHero = () => {
  return (
    <section className="bg-[#1a1a1a] text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full floating" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full floating animation-delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full floating animation-delay-1000" />
      
      <div className="absolute inset-0">
        <img 
          src={npRotulagemBg} 
          alt="NP Rotulagem - Lata com design da empresa" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/60 to-transparent" />
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
