import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import logoNP from "@/assets/logoNP.png";
import heroBg from "@/assets/hero-bg.jpg";

/* ─── Section 1: Logo Hero (Alinova style) ─── */
const LogoHero = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) setTimeout(() => setIsRevealed(true), 200);
  }, [inView]);

  const scrollDown = () => {
    document.getElementById("intro-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_80%)]" />
      </div>

      {/* Centered logo + NP text */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo with clip-path reveal */}
        <div
          className={`transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isRevealed ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/15 rounded-full blur-[60px] scale-[2.5]" />
            <img
              src={logoNP}
              alt="NP Consultoria Alimentos"
              className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* NP text */}
        <h2
          className={`mt-4 font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider transition-all duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
            isRevealed ? "opacity-100 translate-y-0 blur-0 tracking-wider" : "opacity-0 translate-y-8 blur-md tracking-[0.5em]"
          }`}
        >
          NP
        </h2>

        <span
          className={`mt-3 text-white/70 text-xs sm:text-sm md:text-base font-light tracking-[0.3em] uppercase transition-all duration-1000 delay-[800ms] ease-out ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Consultoria & Rotulagem de Alimentos
        </span>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer z-10"
        aria-label="Scroll"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

/* ─── Section 2: Intro / Value Proposition (rosé bg) ─── */
const IntroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) setTimeout(() => setIsRevealed(true), 200);
  }, [inView]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="intro-section"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#d6b9b2] via-[#c4a9a2] to-[#b7a6a1]"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-[10%] w-32 h-32 border border-white/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-1/3 right-[15%] w-24 h-24 border border-white/15 rounded-full hidden lg:block" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 sm:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <span
            className={`inline-block px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20 transition-all duration-1000 delay-100 ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            ✦ NP Consultoria & NP Rotulagem ✦
          </span>

          {/* Main Title */}
          <h1
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ lineHeight: 1.15 }}
          >
            <span
              className={`block transition-all duration-1000 delay-200 ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Segurança, Conformidade
            </span>
            <span
              className={`block transition-all duration-1000 delay-400 ${
                isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              e{" "}
              <span className="relative inline-block">
                <span className="text-gradient-light italic">Estratégia</span>
              </span>
            </span>
            <span
              className={`block transition-all duration-1000 delay-[600ms] ${
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
            className={`text-base sm:text-lg lg:text-xl text-white/90 mb-4 leading-relaxed max-w-2xl transition-all duration-1000 delay-[700ms] ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Soluções completas para empresas do setor alimentício que buscam segurança sanitária,
            organização operacional, prevenção de perdas e regularização de produtos.
          </p>
          <p
            className={`text-sm sm:text-base lg:text-lg text-white/80 mb-4 leading-relaxed max-w-2xl transition-all duration-1000 delay-[850ms] ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Da implantação de Boas Práticas ao desenvolvimento estratégico de rótulos e identidade visual —
            garantimos conformidade com a legislação e fortalecimento da sua marca.
          </p>
          <p
            className={`text-base sm:text-lg lg:text-xl font-semibold text-white italic mb-10 transition-all duration-1000 delay-[1000ms] ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Protegemos sua operação. Valorizamos sua marca.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-[1100ms] ${
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
      </div>
    </section>
  );
};

/* ─── Combined Hero Export ─── */
const Hero = () => (
  <>
    <LogoHero />
    <IntroSection />
  </>
);

export default Hero;
