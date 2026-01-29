import equipeNP from "@/assets/equipe_np.jpg";
import { useInView } from "react-intersection-observer";

const PhilosophySection = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div ref={titleRef}>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-foreground leading-tight transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              A Nossa{" "}
              <span className="inline-block text-gradient silver-shine-text font-playfair italic drop-shadow-glow">
                Filosofia Nutricional
              </span>
            </h2>
          </div>
          <div ref={textRef}>
            <p className={`text-base sm:text-lg text-foreground leading-relaxed transition-all duration-1000 delay-200 ${
              textInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              Na NP Consultoria Alimentos, acreditamos na promoção de hábitos alimentares saudáveis, garantindo a segurança alimentar e aderindo aos mais altos padrões de conformidade regulamentar. Os nossos valores fundamentais guiam-nos na entrega de soluções nutricionais personalizadas que priorizam o bem-estar do consumidor e a excelência da indústria.
            </p>
          </div>
        </div>
        <div ref={imageRef} className="mt-8 sm:mt-12">
          <div className={`rounded-3xl overflow-hidden card-premium group cursor-pointer transition-all duration-1000 ${
            imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <img 
              src={equipeNP} 
              alt="Equipe NP Consultoria" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
