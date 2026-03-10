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
  Store,
  Cookie,
} from "lucide-react";

const segments = [
  { icon: UtensilsCrossed, label: "Restaurantes e Lanchonetes" },
  { icon: Croissant, label: "Padarias e Confeitarias" },
  { icon: Beef, label: "Açougues e Frigoríficos" },
  { icon: Coffee, label: "Cafeterias e Bares" },
  { icon: Factory, label: "Indústrias de Alimentos" },
  { icon: School, label: "Alimentação Escolar" },
  { icon: Cookie, label: "Produtores Artesanais" },
  { icon: Store, label: "Alimentos para Supermercado" },
  { icon: CalendarDays, label: "Eventos e Buffets" },
  { icon: Heart, label: "ILPI e Hospitais" },
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
            Segmentos Atendidos em Indaiatuba e Região
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Consultoria para{" "}
            <span className="text-gradient italic">Todos os Segmentos</span> do Setor Alimentício
          </h2>
          <p
            className={`text-white/60 mt-4 max-w-2xl mx-auto text-sm md:text-base transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            De restaurantes a indústrias de alimentos, de produtores artesanais a quem quer vender em supermercado — 
            atendemos com adequação sanitária, documentação e rotulagem nutricional ANVISA.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 lg:gap-6 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};

export default FoodServicesSegments;
