/* ─── StatsSection — bold More Nutrition-style hero facts ─── */

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

const StatsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#2d2a28] via-[#3d3835] to-[#2d2a28]"
      ref={ref}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />


      <div className="container mx-auto px-6 relative z-10">

        {/* Section label */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-primary/70 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Nossos Resultados
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Números que{" "}
            <span className="text-primary-glow italic font-playfair">falam por si</span>
          </h2>
        </div>

        {/* Stats grid — 3 large bold numbers like More Nutrition's "20g · 95% · 85mg" */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/6 rounded-3xl overflow-hidden border border-white/6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group flex flex-col items-center justify-center text-center
                bg-transparent px-8 py-10 sm:py-14
                hover:bg-primary/5 transition-colors duration-500
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms`, transitionDuration: "700ms" }}
            >
              {/* Divider between cells on desktop */}
              {index > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/4 bottom-1/4 w-px bg-white/10" />
              )}

              {/* Big number */}
              <div className="mb-2 flex items-end justify-center gap-1">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2200}
                  className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none tracking-tight"
                />
              </div>

              {/* Label */}
              <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-1">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/45">{stat.description}</p>

              {/* Hover green underline accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 bg-primary transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div
          className={`mt-12 flex justify-center transition-all duration-1000 delay-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-20 h-px rounded-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
