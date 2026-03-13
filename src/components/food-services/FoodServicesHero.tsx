import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SmokeEffect } from "@/components/effects/SmokeEffect";
import equipeNP from "@/assets/equipe_NP_home.jpeg";
import { ChevronDown } from "lucide-react";

const FoodServicesHero = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) setTimeout(() => setIsRevealed(true), 300);
  }, [inView]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#1a1a1a]">
      {/* Floating particles — hide on mobile for performance */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full floating hidden sm:block" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full floating animation-delay-500 hidden sm:block" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full floating animation-delay-1000 hidden sm:block" />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={equipeNP}
          alt="Consultoria em vigilância sanitária para restaurantes e cozinhas industriais em Indaiatuba"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-[#1a1a1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent sm:hidden" />
        <SmokeEffect />
      </div>

      {/* Content */}
      <div ref={ref} className="container mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <span
            className={`inline-block px-4 sm:px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-6 sm:mb-8 transition-all duration-700 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Consultoria em Segurança Alimentar | Indaiatuba e Região
          </span>

          {/* Title */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="block py-1">
              <span
                className={`inline-block py-2 text-white transition-all duration-1000 ease-out ${
                  isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                {"Consultoria".split("").map((letter, i) => (
                  <span
                    key={i}
                    className={`inline-block py-1 transition-all duration-500 hover:text-primary hover:-translate-y-1 ${
                      isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: `${i * 50 + 200}ms`,
                      textShadow: isRevealed ? "0 0 40px rgba(180, 120, 90, 0.3)" : "none",
                    }}
                  >
                    {letter}
                  </span>
                ))}
                {" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-primary bg-[length:200%_auto] animate-gradient-x">
                    Alimentar
                  </span>
                  <span
                    className={`absolute inset-0 blur-xl bg-primary/30 transition-opacity duration-1000 ${
                      isRevealed ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  />
                </span>
              </span>
            </span>

            {/* Animated divider */}
            <span className="block my-3 sm:my-4">
              <span
                className={`block h-1 bg-gradient-to-r from-primary via-accent-light to-transparent rounded-full transition-all duration-1000 ease-out ${
                  isRevealed ? "w-24 sm:w-32 opacity-100" : "w-0 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              />
            </span>

            <span className="block py-1">
              <span
                className={`inline-block py-2 text-white transition-all duration-1000 ease-out ${
                  isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Vigilância{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">Sanitária</span>
                  <span
                    className={`absolute -left-2 sm:-left-3 top-0 text-primary/40 transition-all duration-500 ${
                      isRevealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  >
                    [
                  </span>
                  <span
                    className={`absolute -right-2 sm:-right-3 top-0 text-primary/40 transition-all duration-500 ${
                      isRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  >
                    ]
                  </span>
                </span>
              </span>
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl leading-relaxed transition-all duration-1000 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Adequação sanitária completa para restaurantes, cozinhas industriais e indústrias de alimentos.
            Manual de boas práticas, alvará sanitário, treinamento de manipuladores e toda a documentação
            exigida pela vigilância sanitária — em Indaiatuba e região de Campinas.
          </p>

          <div
            className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-1000 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <button className="btn-hero w-full sm:w-auto">Solicitar Consultoria</button>
            <button className="btn-secondary interactive-element w-full sm:w-auto">Nossos Serviços</button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[0.6rem] sm:text-xs tracking-widest uppercase">Descubra</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default FoodServicesHero;
