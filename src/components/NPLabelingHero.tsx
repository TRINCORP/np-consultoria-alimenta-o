import npRotulagemBg from "@/assets/np-rotulagem-bg.png";
import { SmokeEffect } from "@/components/effects/SmokeEffect";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const NPLabelingHero = () => {
  const [imageRevealed, setImageRevealed] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Primeiro: animação da lata (zoom in/out)
      setTimeout(() => setImageRevealed(true), 200);
      // Depois: animação do texto
      setTimeout(() => setTextRevealed(true), 1800);
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#1a1a1a] text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full floating" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full floating animation-delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full floating animation-delay-1000" />
      
      {/* Background image with zoom animation */}
      <div className="absolute inset-0">
        <div 
          className={`w-full h-full transition-all duration-[1500ms] ease-out ${
            imageRevealed 
              ? 'scale-100 opacity-100' 
              : 'scale-125 opacity-0'
          }`}
          style={{
            animation: imageRevealed ? 'canZoom 1.5s ease-out forwards' : 'none',
          }}
        >
          <img 
            src={npRotulagemBg} 
            alt="NP Rotulagem - Lata com design da empresa" 
            className="w-full h-full object-cover object-center lg:object-[center_40%]" 
            style={{
              objectPosition: 'center 40%',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-[#1a1a1a]/30 lg:from-[#1a1a1a]/90 lg:via-[#1a1a1a]/50 lg:to-transparent" />
        <SmokeEffect />
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Revolutionary Title Effect */}
          <div className="mb-8 overflow-hidden">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl relative">
              {/* Line 1: Rotulagem Precisa with staggered reveal */}
              <span className="block overflow-hidden">
                <span 
                  className={`inline-block transition-all duration-1000 ease-out ${
                    textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <span className="relative inline-block">
                    {/* Animated underline */}
                    <span className="relative">
                      {'Rotulagem'.split('').map((letter, i) => (
                        <span 
                          key={i}
                          className={`inline-block transition-all duration-500 hover:text-primary hover:-translate-y-1 ${
                            textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                          style={{ 
                            transitionDelay: `${i * 50 + 200}ms`,
                            textShadow: textRevealed ? '0 0 40px rgba(180, 120, 90, 0.3)' : 'none'
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </span>
                    {' '}
                    <span className="relative inline-block">
                      {/* Glowing accent word */}
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-primary bg-[length:200%_auto] animate-gradient-x">
                        Precisa
                      </span>
                      {/* Glow effect behind */}
                      <span 
                        className={`absolute inset-0 blur-xl bg-primary/30 transition-opacity duration-1000 ${
                          textRevealed ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: '800ms' }}
                      />
                    </span>
                  </span>
                </span>
              </span>
              
              {/* Animated divider line */}
              <span className="block my-4">
                <span 
                  className={`block h-1 bg-gradient-to-r from-primary via-accent-light to-transparent rounded-full transition-all duration-1000 ease-out ${
                    textRevealed ? 'w-32 opacity-100' : 'w-0 opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                />
              </span>
              
              {/* Line 2: A Base do Seu Negócio */}
              <span className="block overflow-hidden">
                <span 
                  className={`inline-block transition-all duration-1000 ease-out ${
                    textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  A{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 italic text-primary">Base</span>
                    {/* Decorative bracket effects */}
                    <span 
                      className={`absolute -left-3 top-0 text-primary/40 transition-all duration-500 ${
                        textRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: '1000ms' }}
                    >
                      [
                    </span>
                    <span 
                      className={`absolute -right-3 top-0 text-primary/40 transition-all duration-500 ${
                        textRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
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
            
            {/* Floating sparkles around title */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
              {textRevealed && [...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-sparkle"
                  style={{
                    top: `${20 + (i * 15)}%`,
                    left: `${60 + (i * 8)}%`,
                    animationDelay: `${i * 0.3 + 1}s`,
                    animationDuration: `${2 + (i % 2)}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <p 
            className={`text-base md:text-lg lg:text-xl mb-12 max-w-2xl text-white/80 leading-relaxed transition-all duration-1000 ${
              textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Na NP Rotulagem, entendemos que a rotulagem precisa de alimentos é mais do que apenas conformidade; trata-se de construir confiança com os seus clientes e garantir o sucesso dos seus produtos. Deixe-nos ajudá-lo a navegar pelas complexidades dos regulamentos de rotulagem de alimentos.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 ${
              textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <button className="btn-hero energy-pulse">
              Saiba Mais
            </button>
            <button className="btn-secondary interactive-element">
              Obtenha um Orçamento
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS for can zoom animation */}
      <style>{`
        @keyframes canZoom {
          0% {
            transform: scale(1.15);
            opacity: 0;
          }
          40% {
            transform: scale(1.05);
            opacity: 1;
          }
          70% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default NPLabelingHero;
