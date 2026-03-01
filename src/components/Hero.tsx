import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import logoNP from "@/assets/logoNP.png";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background image with rose overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Equipe de consultoria alimentar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#c4a59e]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(0,0,0,0.15),transparent_50%)]" />
      </div>

      {/* Content — centered like the reference */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-4xl mx-auto">
        {/* Logo — big & prominent */}
        <div
          className={`mb-8 sm:mb-10 transition-all duration-1000 ${
            isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/25 rounded-full blur-3xl scale-[2]" />
            <img
              src={logoNP}
              alt="NP Consultoria Alimentos"
              className="w-28 sm:w-36 md:w-44 h-auto relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Subtitle badge */}
        <span
          className={`inline-block px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium mb-10 border border-white/25 tracking-wider uppercase transition-all duration-1000 delay-200 ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          ✦ NP Consultoria & NP Rotulagem ✦
        </span>

        {/* Main Title */}
        <h1
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8"
          style={{ lineHeight: 1.15 }}
        >
          <span
            className={`block transition-all duration-1000 delay-300 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Segurança, Conformidade
          </span>
          <span
            className={`block transition-all duration-1000 delay-500 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            e{" "}
            <span className="relative inline-block">
              <span className="text-gradient-light italic">Estratégia</span>
            </span>
          </span>
          <span
            className={`block transition-all duration-1000 delay-700 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="relative inline-block">
              para o Seu Negócio
              <BrilliantReflection className="opacity-20" />
            </span>
          </span>
        </h1>

        {/* Description */}
        <p
          className={`text-base sm:text-lg lg:text-xl text-white/90 mb-4 leading-relaxed max-w-2xl transition-all duration-1000 delay-[800ms] ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Soluções completas para empresas do setor alimentício que buscam segurança sanitária,
          organização operacional, prevenção de perdas e regularização de produtos.
        </p>
        <p
          className={`text-sm sm:text-base lg:text-lg text-white/75 mb-4 leading-relaxed max-w-2xl transition-all duration-1000 delay-[950ms] ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Da implantação de Boas Práticas ao desenvolvimento estratégico de rótulos e identidade visual —
          garantimos conformidade com a legislação e fortalecimento da sua marca.
        </p>
        <p
          className={`text-base sm:text-lg lg:text-xl font-semibold text-white italic mb-10 transition-all duration-1000 delay-[1100ms] ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Protegemos sua operação. Valorizamos sua marca.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-[1200ms] ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-white text-[#b7a6a1] hover:bg-white/90 rounded-full px-10 py-7 text-base font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
          >
            Fale com um Especialista
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 py-7 text-base font-medium transition-all duration-300 hover:scale-105"
            onClick={scrollToServices}
          >
            Nossas Soluções
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer hidden md:block z-10"
        aria-label="Scroll para ver mais"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
