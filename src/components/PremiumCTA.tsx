import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";

const PremiumCTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-[#1a1a1a] via-[#252220] to-[#1a1a1a] relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/50 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className={`inline-block px-5 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Pronto para Transformar o Seu Negócio?
          </span>

          {/* Headline */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Elevamos a <span className="text-gradient">Qualidade Alimentar</span> ao Próximo Nível
          </h2>

          {/* Description */}
          <p className={`text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Agende uma consulta gratuita com os nossos especialistas e descubra como 
            podemos ajudar a sua empresa a alcançar a excelência em segurança alimentar.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
            >
              Ver Nossos Casos
            </Button>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a href="tel:+551199999999" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-300 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm">+55 11 9999-9999</span>
            </a>
            <a href="mailto:contato@npconsultoria.com" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-300 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm">contato@npconsultoria.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;
