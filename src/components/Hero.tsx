import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SmokeEffect } from "@/components/effects/SmokeEffect";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoNP from "@/assets/logoNP.png";
import equipeNP from "@/assets/equipe_NP_home.jpeg";

const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) setTimeout(() => setIsRevealed(true), 300);
  }, [inView]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#1a1a1a]">
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full floating hidden sm:block" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full floating animation-delay-500 hidden sm:block" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full floating animation-delay-1000 hidden sm:block" />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={equipeNP}
          alt="Equipe NP Consultoria"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/75 to-[#1a1a1a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent sm:hidden" />
        <SmokeEffect />
      </div>

      {/* Content */}
      <div ref={ref} className="container mx-auto px-6 sm:px-8 lg:px-16 py-24 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Logo + Badge */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150" />
              <img src={logoNP} alt="NP Consultoria" className="w-14 sm:w-16 h-auto relative z-10" />
            </div>
            <span className="px-4 sm:px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">
              NP Consultoria & NP Rotulagem
            </span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            {/* Line 1 */}
            <span className="block py-1">
              <span
                className={`inline-block py-2 text-white transition-all duration-1000 ease-out ${
                  isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                {"Segurança".split("").map((letter, i) => (
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
                ,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-primary bg-[length:200%_auto] animate-gradient-x">
                    Conformidade
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

            {/* Line 2 */}
            <span className="block py-1">
              <span
                className={`inline-block py-2 text-white transition-all duration-1000 ease-out ${
                  isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                e{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">Estratégia</span>
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
                {" "}para o Seu Negócio
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-white/85 mb-4 max-w-2xl leading-relaxed transition-all duration-1000 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Soluções completas para empresas do setor alimentício que buscam segurança sanitária, 
            organização operacional, prevenção de perdas e regularização de produtos.
          </p>
          <p
            className={`text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-10 max-w-2xl leading-relaxed transition-all duration-1000 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "950ms" }}
          >
            Da implantação de Boas Práticas ao desenvolvimento estratégico de rótulos — 
            protegemos sua operação e valorizamos sua marca.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-1000 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg shadow-primary/25 w-full sm:w-auto"
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={scrollToServices}
            >
              Nossas Soluções
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[0.6rem] sm:text-xs tracking-widest uppercase">Descubra</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce cursor-pointer" onClick={scrollToServices} />
      </div>
    </section>
  );
};

export default Hero;
