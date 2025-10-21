import nutritionLabels from "@/assets/nutrition-labels.jpg";

const LabelingSection = () => {
  return (
    <section className="bg-black text-white py-0 min-h-screen flex items-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-10">
        <div className="h-[600px] lg:h-screen overflow-hidden relative group">
          <img 
            src={nutritionLabels} 
            alt="Rótulos de alimentos" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        
        <div className="flex items-center px-6 lg:px-16 py-20 lg:py-0">
          <div>
            <h2 className="text-headline mb-8 animate-fade-in magnetic-float">
              Liberte o Poder dos <span className="italic font-playfair text-gradient">Rótulos de Alimentos Precisos</span> com a <span className="silver-shine-text drop-shadow-glow">NP Rotulagem</span>
            </h2>
            
            <p className="text-body-large mb-10 text-white/90 animate-fade-in animation-delay-200">
              Navegar pelas complexidades da rotulagem de alimentos pode ser um desafio. Na NP Consultoria Alimentos, o nosso serviço NP Rotulagem garante que os seus produtos cumprem todos os regulamentos, fornecendo informações claras e precisas aos consumidores. Confie em nós para lidar com as suas necessidades de rotulagem com experiência.
            </p>
            
            <ul className="space-y-6">
              {[
                {
                  title: "Garantia de Conformidade:",
                  desc: "Garantimos que os seus rótulos cumprem todas as normas regulamentares.",
                  delay: "animation-delay-300"
                },
                {
                  title: "Precisão Nutricional:",
                  desc: "Informação nutricional precisa para a confiança do consumidor.",
                  delay: "animation-delay-500"
                },
                {
                  title: "Clareza dos Ingredientes:",
                  desc: "Listas de ingredientes claras e concisas.",
                  delay: "animation-delay-700"
                }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-4 animate-fade-in group ${item.delay}`}
                >
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1 energy-pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="font-bold text-white mb-1 text-glow">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabelingSection;
