import { useInView } from "react-intersection-observer";
import chefInspection from "@/assets/chef-inspection.jpg";

const FoodServicesSection = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      title: "Otimização de Processos",
      desc: "Simplificação das operações para máxima eficiência.",
    },
    {
      title: "Garantia de Qualidade",
      desc: "Garantir uma qualidade consistente em cada prato.",
    },
    {
      title: "Conformidade",
      desc: "Cumprimento de todos os regulamentos de segurança alimentar relevantes.",
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#2d2a28] via-[#3d3835] to-[#4a4540] text-white py-0 min-h-screen flex items-center overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(183,166,161,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(214,185,178,0.05),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-10">
        <div className="h-[400px] sm:h-[500px] lg:h-screen overflow-hidden relative group order-2 lg:order-1">
          <img 
            src={chefInspection} 
            alt="Chef realizando inspeção" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d2a28]/60 via-[#2d2a28]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a28]/40 to-transparent lg:hidden" />
        </div>
        
        <div className="flex items-center px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-0 order-1 lg:order-2">
          <div className="max-w-xl">
            <h2 
              ref={titleRef}
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold mb-6 sm:mb-8 leading-tight transition-all duration-700 ${
                titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Melhorar as{' '}
              <span className="italic text-[#d6b9b2]">Operações de Serviço de Alimentação</span>
              {' '}com Serviços de Consultoria Especializados
            </h2>
            
            <p 
              ref={textRef}
              className={`text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 text-white/85 leading-relaxed transition-all duration-700 delay-200 ${
                textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Na NP Consultoria Alimentos, trazemos uma vasta experiência na prestação de serviços de consultoria a uma gama diversificada de empresas de serviços de alimentação. A nossa experiência garante que as suas operações não só cumprem, como excedem os padrões da indústria.
            </p>
            
            <ul className="space-y-4 sm:space-y-6">
              {services.map((item, index) => {
                const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
                
                return (
                  <li 
                    key={index}
                    ref={ref}
                    className={`flex items-start gap-3 sm:gap-4 group transition-all duration-500 ${
                      inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#d6b9b2] to-[#b7a6a1] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-1">
                      <h3 className="font-semibold text-white text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/75 text-xs sm:text-sm lg:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodServicesSection;
