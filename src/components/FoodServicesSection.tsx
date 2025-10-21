import chefInspection from "@/assets/chef-inspection.jpg";

const FoodServicesSection = () => {
  return (
    <section className="bg-black text-white py-0 min-h-screen flex items-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="h-[600px] lg:h-screen overflow-hidden">
          <img 
            src={chefInspection} 
            alt="Chef realizando inspeção" 
            className="w-full h-full object-cover animate-fade-in" 
          />
        </div>
        
        <div className="flex items-center px-6 lg:px-16 py-20 lg:py-0">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in">
              Melhorar as <span className="italic font-playfair">Operações de Serviço de Alimentação</span> com Serviços de Consultoria Especializados
            </h2>
            
            <p className="text-base lg:text-lg mb-10 leading-relaxed text-white/90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Na NP Consultoria Alimentos, trazemos uma vasta experiência na prestação de serviços de consultoria a uma gama diversificada de empresas de serviços de alimentação. A nossa experiência garante que as suas operações não só cumprem, como excedem os padrões da indústria, promovendo o crescimento e a satisfação do cliente. Estamos comprometidos com a excelência.
            </p>
            
            <ul className="space-y-6">
              {[
                {
                  title: "Otimização de Processos:",
                  desc: "Simplificação das operações para máxima eficiência.",
                  delay: "300ms"
                },
                {
                  title: "Garantia de Qualidade:",
                  desc: "Garantir uma qualidade consistente em cada prato.",
                  delay: "400ms"
                },
                {
                  title: "Conformidade:",
                  desc: "Cumprimento de todos os regulamentos de segurança alimentar relevantes.",
                  delay: "500ms"
                }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-in group"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
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

export default FoodServicesSection;

