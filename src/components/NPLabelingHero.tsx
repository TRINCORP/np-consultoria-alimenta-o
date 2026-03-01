import npRotulagemBg from "@/assets/np-rotulagem-bg.png";
import { SmokeEffect } from "@/components/effects/SmokeEffect";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const NPLabelingHero = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsRevealed(true), 300);
    }
  }, [inView]);

  return (
    <section className="bg-[#1a1a1a] text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full floating hidden sm:block" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full floating animation-delay-500 hidden sm:block" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full floating animation-delay-1000 hidden sm:block" />
      
      <div className="absolute inset-0">
        <img 
          src={npRotulagemBg} 
          alt="NP Rotulagem - Lata com design da empresa" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-[#1a1a1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent sm:hidden" />
        <SmokeEffect />
      </div>
      
      <div ref={ref} className="container mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Title */}
          <div className="mb-6 sm:mb-8">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative leading-tight">
              {/* Line 1 */}
              <span className="block py-1">
                <span 
                  className={`inline-block py-2 transition-all duration-1000 ease-out ${
                    isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <span className="relative inline-block">
                    <span className="relative">
                      {'Rotulagem'.split('').map((letter, i) => (
                        <span 
                          key={i}
                          className={`inline-block py-1 transition-all duration-500 hover:text-primary hover:-translate-y-1 ${
                            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                          style={{ 
                            transitionDelay: `${i * 50 + 200}ms`,
                            textShadow: isRevealed ? '0 0 40px rgba(180, 120, 90, 0.3)' : 'none',
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </span>
                    {' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-primary bg-[length:200%_auto] animate-gradient-x">
                        Precisa
                      </span>
                      <span 
                        className={`absolute inset-0 blur-xl bg-primary/30 transition-opacity duration-1000 ${
                          isRevealed ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: '800ms' }}
                      />
                    </span>
                  </span>
                </span>
              </span>
              
              {/* Animated divider line */}
              <span className="block my-3 sm:my-4">
                <span 
                  className={`block h-1 bg-gradient-to-r from-primary via-accent-light to-transparent rounded-full transition-all duration-1000 ease-out ${
                    isRevealed ? 'w-24 sm:w-32 opacity-100' : 'w-0 opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                />
              </span>
              
              {/* Line 2 */}
              <span className="block py-1">
                <span 
                  className={`inline-block py-2 transition-all duration-1000 ease-out ${
                    isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  A{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 italic text-primary">Base</span>
                    <span 
                      className={`absolute -left-2 sm:-left-3 top-0 text-primary/40 transition-all duration-500 ${
                        isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: '1000ms' }}
                    >
                      [
                    </span>
                    <span 
                      className={`absolute -right-2 sm:-right-3 top-0 text-primary/40 transition-all duration-500 ${
                        isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: '1000ms' }}
                    >
                      ]
                    </span>
                  </span>
                  {' '}do Seu Negócio
                </span>
              </span>
            </h1>
          </div>
          
          <p 
            className={`text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl text-white/80 leading-relaxed transition-all duration-1000 ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Na NP Rotulagem, entendemos que a rotulagem precisa de alimentos é mais do que apenas conformidade; trata-se de construir confiança com os seus clientes e garantir o sucesso dos seus produtos.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-1000 ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <button className="btn-hero w-full sm:w-auto">
              Saiba Mais
            </button>
            <button className="btn-secondary interactive-element w-full sm:w-auto">
              Obtenha um Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NPLabelingHero;
