import npRotulagemBg from "@/assets/lata-rotulagem.png";
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
    <section className="text-white min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-black via-[#1a1a1a] to-[#4a4a4a]">
      {/* Subtle floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full floating hidden sm:block" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full floating animation-delay-500 hidden sm:block" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full floating animation-delay-1000 hidden sm:block" />
      
      {/* Ambient background — gradient + smoke (no full-bg image) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_60%,hsl(var(--primary)/0.10),transparent_50%)]" />
        <SmokeEffect />
      </div>

      <div ref={ref} className="container mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-20 lg:py-32 relative z-10
        grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-center">
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

        {/* Bottle showcase — right column */}
        <div
          className={`relative flex items-center justify-center transition-all duration-[1200ms] ease-out
            min-h-[260px] sm:min-h-[360px] lg:min-h-0 ${
            isRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {/* Glow halo */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-70"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.35), transparent 65%)" }} />
          {/* Rotating rings — hidden on small screens to avoid overflow */}
          <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border border-primary/20 animate-[spin_28s_linear_infinite]" />
          <div className="absolute w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] lg:w-[340px] lg:h-[340px] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite_reverse]" />

          {/* Bottle image floating */}
          <img
            src={npRotulagemBg}
            alt="NP Rotulagem — embalagem com rotulagem precisa"
            className="relative z-10 max-h-[220px] sm:max-h-[360px] lg:max-h-[560px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] animate-[npFloat_6s_ease-in-out_infinite]"
          />

          {/* Floating accent dots */}
          <span className="absolute top-6 right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 animate-[npFloat_5s_ease-in-out_infinite]" />
          <span className="absolute bottom-6 left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent/70 animate-[npFloat_7s_ease-in-out_infinite]" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <style>{`
        @keyframes npFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
};

export default NPLabelingHero;
