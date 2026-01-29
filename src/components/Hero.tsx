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
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Geometric accents */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 border border-white/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-[15%] w-24 h-24 border border-white/15 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2.5s' }} />
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
            ✦ Consultoria em Alimentação e Nutrição ✦
          </span>
          
          {/* Main Title */}
          <h1 className={`font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ lineHeight: 1.15 }}>
            Transforme a{" "}
            <span className="relative inline-block">
              <span className="text-gradient-light italic">qualidade alimentar</span>
            </span>
            <br className="hidden sm:block" />
            {" "}em{" "}
            <span className="relative inline-block">
              <span className="text-white">resultados</span>
              <BrilliantReflection className="opacity-20" />
            </span>
          </h1>
          
          {/* Description */}
          <p className={`text-base sm:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Desenvolvemos soluções em serviços de alimentação para empresas e indústrias, 
            garantindo segurança alimentar, conformidade com legislações e satisfação do consumidor.
          </p>
          
          {/* CTA Button */}
          <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

          {/* Stats Row */}
          <div className={`grid grid-cols-3 gap-8 sm:gap-16 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">
                +300
              </div>
              <div className="text-white/70 text-sm sm:text-base">Empresas Atendidas</div>
            </div>
            <div className="text-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/20 hidden sm:block" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">
                +15
              </div>
              <div className="text-white/70 text-sm sm:text-base">Anos de Experiência</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/20 hidden sm:block" />
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">
                98%
              </div>
              <div className="text-white/70 text-sm sm:text-base">Satisfação</div>
            </div>
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
