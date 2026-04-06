import { useInView } from "react-intersection-observer";
import AnimatedCounter from "./AnimatedCounter";
import { Building2, Users, CheckCircle, Calendar } from "lucide-react";

const stats = [
  {
    value: 300,
    suffix: "+",
    label: "Empresas Atendidas",
    description: "em todo o Brasil",
    icon: Building2,
  },
  {
    value: 50000,
    suffix: "+",
    label: "Consumidores Impactados",
    description: "com alimentação segura",
    icon: Users,
  },
  {
    value: 92,
    suffix: "%",
    label: "Aprovação em Inspeções",
    description: "taxa de sucesso",
    icon: CheckCircle,
  },
  {
    value: 15,
    suffix: "+",
    label: "Anos de Experiência",
    description: "no mercado alimentar",
    icon: Calendar,
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#2d2a28] via-[#3d3835] to-[#2d2a28] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section label */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-primary/80 text-sm font-medium tracking-widest uppercase">
            Nossos Números
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative text-center p-6 rounded-2xl 
                bg-white/5 backdrop-blur-sm border border-white/10
                hover:bg-white/10 hover:border-white/20 transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center
                  group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Counter */}
              <div className="mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                  className="text-4xl md:text-5xl font-bold text-white"
                />
              </div>
              
              {/* Label */}
              <h3 className="text-base md:text-lg font-semibold text-white/90 mb-1">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-white/50">
                {stat.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className={`mt-12 flex justify-center transition-all duration-1000 delay-500 
          ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
