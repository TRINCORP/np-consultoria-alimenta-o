import nutritionHeroBg from "@/assets/nutrition-hero-bg.jpg";

const NPLabelingHero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="absolute inset-0">
        <img 
          src={nutritionHeroBg} 
          alt="Nutrition facts background" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
            <span className="inline-block border-b-4 border-white pb-2">Rotulagem Precisa</span>: A Base do Seu Negócio
          </h1>
          
          <p className="text-base lg:text-lg mb-12 leading-relaxed max-w-2xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Na NP Rotulagem, entendemos que a rotulagem precisa de alimentos é mais do que apenas conformidade; trata-se de construir confiança com os seus clientes e garantir o sucesso dos seus produtos. Deixe-nos ajudá-lo a navegar pelas complexidades dos regulamentos de rotulagem de alimentos.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-white/90 transition-all text-base hover:scale-105 hover:shadow-xl">
              Saiba Mais
            </button>
            <button className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all text-base hover:scale-105">
              Obtenha um Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NPLabelingHero;
