import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoNP from "@/assets/logoNP.png";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-[#d6b9b2] via-[#c4a9a2] to-[#b7a6a1] overflow-hidden flex items-center justify-center">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl" />
        
        {/* Geometric accents — static, no animation */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 border border-white/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-1/3 right-[15%] w-24 h-24 border border-white/15 rounded-full hidden lg:block" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        {/* Centered content layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className={`mb-6 transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150" />
              <img 
                src={logoNP} 
                alt="NP Consultoria Alimentos" 
                className="w-24 sm:w-32 h-auto relative z-10"
              />
            </div>
          </div>

          {/* Badge */}
          <span className={`inline-block px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20 transition-all duration-1000 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            ✦ NP Consultoria & NP Rotulagem ✦
          </span>
          
          {/* Main Title */}
          <h1 className={`font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ lineHeight: 1.15 }}>
            Segurança, Conformidade{" "}
            <br className="hidden sm:block" />
            e{" "}
            <span className="relative inline-block">
              <span className="text-gradient-light italic">Estratégia</span>
            </span>
            {" "}para o Seu{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="text-white">Negócio de Alimentos</span>
              <BrilliantReflection className="opacity-20" />
            </span>
          </h1>
          
          {/* Description */}
          <p className={`text-base sm:text-lg lg:text-xl text-white/90 mb-5 leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A NP Consultoria e NP Rotulagem oferecem soluções completas para empresas do setor alimentício que buscam segurança sanitária, organização operacional, prevenção de perdas e regularização de produtos.
          </p>
          <p className={`text-sm sm:text-base lg:text-lg text-white/80 mb-5 leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Atuamos desde a implantação de Boas Práticas e gestão de equipes até o desenvolvimento técnico e estratégico de rótulos e identidade visual, garantindo conformidade com a legislação e fortalecimento da sua marca no mercado.
          </p>
          <p className={`text-sm sm:text-base lg:text-lg text-white/75 mb-4 leading-relaxed max-w-2xl transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Mais do que adequação sanitária, entregamos organização, prevenção e crescimento estruturado.
          </p>
          <p className={`text-base sm:text-lg lg:text-xl font-semibold text-white italic mb-10 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Protegemos sua operação. Valorizamos sua marca.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

      {/* Scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer hidden md:block"
        aria-label="Scroll para ver mais"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
