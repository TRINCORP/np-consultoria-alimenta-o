import nutritionLabels from "@/assets/nutrition-labels.jpg";

const LabelingSection = () => {
  return (
    <section className="bg-black text-white py-0 min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="h-[600px] lg:h-screen">
          <img src={nutritionLabels} alt="Rótulos de alimentos" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex items-center px-6 lg:px-16 py-20 lg:py-0">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Liberte o Poder dos <span className="italic">Rótulos de Alimentos Precisos</span> com a NP Rotulagem
            </h2>
            
            <p className="text-base lg:text-lg mb-10 leading-relaxed text-white/90">
              Navegar pelas complexidades da rotulagem de alimentos pode ser um desafio. Na NP Consultoria Alimentos, o nosso serviço NP Rotulagem garante que os seus produtos cumprem todos os regulamentos, fornecendo informações claras e precisas aos consumidores. Confie em nós para lidar com as suas necessidades de rotulagem com experiência.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Garantia de Conformidade:</h3>
                  <p className="text-white/80">Garantimos que os seus rótulos cumprem todas as normas regulamentares.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Precisão Nutricional:</h3>
                  <p className="text-white/80">Informação nutricional precisa para a confiança do consumidor.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Clareza dos Ingredientes:</h3>
                  <p className="text-white/80">Listas de ingredientes claras e concisas.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabelingSection;
