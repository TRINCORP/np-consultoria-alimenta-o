import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import equipeHeroBg from "@/assets/equipe-hero-bg.png";

/* ─── Section 1: Cinematic NP Reveal ─── */
const LogoHero = () => {
  const [phase, setPhase] = useState(0); // 0=hidden, 1=circle-expand, 2=text-in, 3=subtitle-in, 4=complete

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // start circle reveal
      setTimeout(() => setPhase(2), 1200),   // NP text appears
      setTimeout(() => setPhase(3), 2200),   // subtitle + line
      setTimeout(() => setPhase(4), 3200),   // fully complete
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollDown = useCallback(() => {
    document.getElementById("intro-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src={equipeHeroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      {/* Atmospheric grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none hero-grain" />

      {/* Radial ambient glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-[3s] ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(20_35%_70%/0.08)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,hsl(20_45%_80%/0.04)_0%,transparent_60%)]" />
      </div>

      {/* Circle clip-path reveal container */}
      <div
        className="absolute inset-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          clipPath: phase >= 1
            ? "circle(100% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
      >
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 select-none">
        {/* Decorative top line */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-12 transition-all duration-[1.5s] ease-out ${
            phase >= 2 ? "w-32 sm:w-48 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* NP — massive metallic typography */}
        <div className="relative">
          {/* Glow behind text */}
          <div
            className={`absolute inset-0 blur-[80px] transition-opacity duration-[2s] ${
              phase >= 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full h-full bg-[hsl(20_35%_70%/0.2)]" />
          </div>

          <h1
            className={`font-playfair font-bold leading-none relative transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]
              text-[7rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem]
              ${phase >= 2
                ? "opacity-100 translate-y-0 blur-0 tracking-[0.15em]"
                : "opacity-0 translate-y-16 blur-lg tracking-[0.6em]"
              }`}
          >
            {/* Metallic gradient fill */}
            <span className="hero-np-text bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40">
              NP
            </span>

            {/* Light sweep effect */}
            <span
              className={`absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-transparent via-white/50 to-transparent hero-light-sweep ${
                phase >= 3 ? "animate-hero-sweep" : "opacity-0"
              }`}
              aria-hidden
            >
              NP
            </span>
          </h1>
        </div>

        {/* Decorative diamond */}
        <div
          className={`my-6 sm:my-8 flex items-center gap-4 transition-all duration-1000 ease-out ${
            phase >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-white/25" />
          <div className="w-2 h-2 rotate-45 border border-white/30" />
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-white/25" />
        </div>

        {/* Subtitle */}
        <p
          className={`text-white/50 text-xs sm:text-sm md:text-base font-light transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase >= 3
              ? "opacity-100 translate-y-0 tracking-[0.35em]"
              : "opacity-0 translate-y-6 tracking-[0.1em]"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          CONSULTORIA & ROTULAGEM DE ALIMENTOS
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 transition-all duration-500 cursor-pointer z-10 ${
          phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label="Scroll"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
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
