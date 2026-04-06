import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 300,
    suffix: "+",
    label: "Empresas Atendidas",
    description: "em todo o Brasil",
  },
  {
    value: 92,
    suffix: "%",
    label: "Aprovação em Inspeções",
    description: "taxa de sucesso",
  },
  {
    value: 15,
    suffix: "+",
    label: "Anos de Experiência",
    description: "no mercado alimentar",
  },
];

const services = [
  "VIGILÂNCIA SANITÁRIA",
  "ALVARÁ SANITÁRIO",
  "TREINAMENTO DE EQUIPES",
  "ADEQUAÇÃO SANITÁRIA",
  "GESTÃO DA QUALIDADE",
  "SEGURANÇA ALIMENTAR",
  "BOAS PRÁTICAS",
  "ROTULAGEM ANVISA",
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#2d2a28] via-[#3d3835] to-[#2d2a28] relative overflow-hidden">
      {/* Decorative food icons */}
      <div className="absolute top-12 left-12 text-white/10 text-4xl hidden md:block">🍴</div>
      <div className="absolute top-16 right-16 text-white/10 text-3xl hidden md:block">🍳</div>
      <div className="absolute bottom-20 left-20 text-white/10 text-3xl hidden md:block">🌿</div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-primary/80 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase block mb-4">
            Nossos Resultados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Números que <em className="font-playfair italic text-primary/80">falam por si</em>
          </h2>
        </div>

        {/* Stats card */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 md:p-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${index < stats.length - 1 ? 'sm:border-r sm:border-white/10' : ''}`}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                    className="text-5xl sm:text-5xl md:text-7xl font-bold text-white"
                  />
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white/90 mt-3 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/40">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative line */}
          <div className={`mt-8 flex justify-center transition-all duration-1000 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Scrolling services ticker */}
      <div className={`mt-14 overflow-hidden transition-all duration-1000 delay-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-scroll-x">
          {[...services, ...services, ...services].map((service, i) => (
            <span key={i} className="flex items-center shrink-0 text-xs sm:text-sm font-semibold tracking-wider text-white/50 whitespace-nowrap px-4 sm:px-6">
              {service}
              <span className="mx-4 sm:mx-6 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
