import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PremiumCTA = () => {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#1a1a1a] via-[#252220] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/5 rounded-full" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="scroll-reveal-scale inline-block px-4 sm:px-5 py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            Pronto para Transformar o Seu Negócio?
          </span>

          <h2 className="scroll-reveal-blur stagger-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Sua Operação Merece <span className="text-gradient">Segurança e Conformidade</span>
          </h2>

          <p className="scroll-reveal stagger-2 text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Solicite uma consultoria sem compromisso. Atendemos restaurantes, cozinhas industriais, 
            indústrias e produtores artesanais em Indaiatuba e região de Campinas.
          </p>

          <div className="scroll-reveal stagger-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
            >
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Ver Nossos Casos
            </Button>
          </div>

          <div className="scroll-reveal-left stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a href="tel:+551199999999" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-xs sm:text-sm">+55 11 9999-9999</span>
            </a>
            <a href="mailto:contato@npconsultoria.com" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-xs sm:text-sm">contato@npconsultoria.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;
