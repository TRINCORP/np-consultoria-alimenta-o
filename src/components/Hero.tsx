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
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-[#d6b9b2] via-[#c4a9a2] to-[#b7a6a1] overflow-hidden flex items-center">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Geometric accents */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 border border-white/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-[15%] w-24 h-24 border border-white/15 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2.5s' }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/10">
              Consultoria em Alimentação e Nutrição
            </span>
            
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ lineHeight: 1.2 }}>
              Transforme a{" "}
              <span className="relative inline-block py-1">
                <span className="text-gradient-light italic py-1">qualidade alimentar</span>
              </span>
              {" "}em resultados com a{" "}
              <span className="inline-flex items-baseline relative py-1">
                <span className="relative z-10 border-b-4 border-white/50 pb-1">NP</span>
                <BrilliantReflection className="opacity-30" />
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/85 mb-8 leading-relaxed max-w-xl">
              Desenvolvemos soluções em serviços de alimentação para empresas e indústrias, 
              garantindo segurança alimentar, conformidade com legislações e satisfação do consumidor.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-[#b7a6a1] hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Fale com um Especialista
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                onClick={scrollToServices}
              >
                Nossas Soluções
              </Button>
            </div>

            {/* Trust badges */}
            <div className={`mt-12 flex items-center gap-6 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 border-2 border-white/50 backdrop-blur-sm"
                  />
                ))}
              </div>
              <div className="text-white/80">
                <span className="font-bold text-white">+300</span> empresas confiam em nós
              </div>
            </div>
          </div>

          {/* Right content - Premium Logo Card */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-2xl scale-110" />
              
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 max-w-sm shadow-2xl border border-white/50 group hover:shadow-3xl transition-all duration-500">
                <BrilliantReflection className="opacity-40" />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <img 
                    src={logoNP} 
                    alt="NP Consultoria Alimentos" 
                    className="w-40 sm:w-48 h-auto mb-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#b7a6a1] to-transparent mb-6" />
                  
                  <p className="font-playfair text-2xl sm:text-3xl font-bold text-gradient mb-2">
                    Serviço com Excelência
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +15 anos de experiência em consultoria alimentar
                  </p>
                </div>
              </div>
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
