import { useInView } from "react-intersection-observer";
import {
  UtensilsCrossed,
  Croissant,
  Beef,
  Coffee,
  Factory,
  School,
  CalendarDays,
  Heart,
} from "lucide-react";
import fotoTemperatura from "@/assets/food-services/foto4-temperatura.png";

const segments = [
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Croissant, label: "Padarias" },
  { icon: Beef, label: "Açougues" },
  { icon: Coffee, label: "Lanchonetes" },
  { icon: Factory, label: "Indústrias de alimentos" },
  { icon: School, label: "Alimentação escolar" },
  { icon: CalendarDays, label: "Eventos" },
  { icon: Heart, label: "ILPI" },
];

const FoodServicesSegments = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-[#1a1a1a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_60%)]" />

      <div ref={ref} className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-14">
          <span
            className={`inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wider uppercase mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Segmentos Atendidos
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Empresas que{" "}
            <span className="text-gradient italic">Confiam</span> na NP
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <div
                key={i}
                className={`group relative bg-white/[0.03] backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center cursor-pointer
                  transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4
                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                  {seg.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Cinematic photo banner */}
        <div className={`mt-16 lg:mt-20 max-w-5xl mx-auto relative rounded-3xl overflow-hidden transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "900ms" }}>
          <div className="aspect-[21/9] sm:aspect-[3/1]">
            <img src={fotoTemperatura} alt="Controle de temperatura NP Consultoria" className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/30 to-[#1a1a1a]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
            <p className="text-white/90 font-playfair text-lg sm:text-xl lg:text-2xl italic max-w-lg">
              "Monitoramento contínuo de temperatura — controle que faz a diferença."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodServicesSegments;
