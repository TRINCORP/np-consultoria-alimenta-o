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
    value: 50000,
    suffix: "+",
    label: "Consumidores Impactados",
    description: "com alimentação segura",
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

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#2d2a28] via-[#3d3835] to-[#2d2a28] relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white/90 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-white/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
