import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Users, CheckCircle, ThumbsUp } from "lucide-react";
import logoNP from "@/assets/logoNP.png";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";

const Hero = () => {
  const metrics = [
    { icon: Building2, value: "300+", label: "Empresas atendidas" },
    { icon: Users, value: "50.000+", label: "Consumidores impactados" },
    { icon: CheckCircle, value: "92%", label: "Aprovação em inspeções" },
    { icon: ThumbsUp, value: "95%", label: "Satisfação do cliente" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#d6b9b2] via-[#b7a6a1] to-[#f8f5f4] overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container-custom pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left content */}
          <div className="animate-slide-in-left">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Transforme a qualidade alimentar em resultados com a{" "}
              <span className="inline-flex items-baseline border-b-2 sm:border-b-4 border-white pb-1 sm:pb-2 relative silver-shine-text">
                <span className="relative z-10 drop-shadow-glow whitespace-nowrap">NP</span>
                <span className="absolute inset-0 bg-white/20 blur-xl opacity-60" />
                <BrilliantReflection />
              </span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Desenvolvemos soluções em serviços de alimentação para empresas e indústrias, garantindo segurança alimentar, conformidade com legislações e satisfação do consumidor.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button 
                size="default"
                className="btn-hero text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-5"
              >
                Envie seu currículo
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                size="default"
                variant="outline"
                className="btn-secondary text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-5"
              >
                Nossas soluções
              </Button>
            </div>
          </div>

          {/* Right content - Logo card */}
          <div className="animate-slide-in-right lg:flex justify-center lg:justify-end">
            <Card className="card-premium bg-white/95 backdrop-blur-sm p-6 sm:p-8 max-w-md w-full magnetic-float relative overflow-hidden">
              <BrilliantReflection className="opacity-50" />
              <div className="flex flex-col items-center text-center relative z-10">
                <img 
                  src={logoNP} 
                  alt="NP Consultoria Alimentos" 
                  className="w-36 sm:w-48 h-auto mb-4 sm:mb-6 floating"
                />
                <div className="border-t-2 border-[#b7a6a1] pt-4 sm:pt-6 w-full">
                  <p className="font-playfair text-2xl sm:text-3xl font-bold text-gradient mb-2">
                    Serviço com Excelência
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Compromisso com qualidade e inovação
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Metrics section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="card-premium bg-white/95 backdrop-blur-sm p-4 sm:p-6 group animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <BrilliantReflection />
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="bg-gradient-to-br from-[#d6b9b2] to-[#b7a6a1] p-2 sm:p-3 md:p-4 rounded-full mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md glow-border">
                  <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <p className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-medium">
                  {metric.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
