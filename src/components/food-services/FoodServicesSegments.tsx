import { useInView } from "react-intersection-observer";
import {
  UtensilsCrossed, Croissant, Beef, Coffee,
  Factory, School, CalendarDays, Heart, Store, Cookie,
} from "lucide-react";

const segments = [
  { icon: UtensilsCrossed, label: "Restaurantes e Lanchonetes",   desc: "Adequação sanitária, BPF e alvará" },
  { icon: Croissant,       label: "Padarias e Confeitarias",      desc: "Higiene, rotulagem e conformidade" },
  { icon: Beef,            label: "Açougues e Frigoríficos",      desc: "Controle sanitário e temperatura" },
  { icon: Coffee,          label: "Cafeterias e Bares",           desc: "BPF e treinamento de equipe" },
  { icon: Factory,         label: "Indústrias de Alimentos",      desc: "Licença, registro e auditoria" },
  { icon: School,          label: "Alimentação Escolar",          desc: "Nutrição e adequação legal" },
  { icon: Cookie,          label: "Produtores Artesanais",        desc: "Rotulagem ANVISA e regularização" },
  { icon: Store,           label: "Alimentos para Supermercado",  desc: "Tabela nutricional e rótulo" },
  { icon: CalendarDays,    label: "Eventos e Buffets",            desc: "Higiene e controle operacional" },
  { icon: Heart,           label: "ILPI e Hospitais",             desc: "Nutrição e segurança alimentar" },
];

const FoodServicesSegments = () => {
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.04, triggerOnce: true });

  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headRef} className="mb-14 lg:mb-16">
          <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
            text-[hsl(20_35%_58%)] mb-5
            transition-all duration-700 ${headInView ? "opacity-100" : "opacity-0"}`}>
            Segmentos atendidos · Indaiatuba e região
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className={`font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.08]
                transition-all duration-700 delay-100 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Atendemos{" "}
              <em className="italic text-[hsl(20_35%_58%)]">todos os segmentos</em>
              <br />do setor alimentício.
            </h2>
            <p className={`text-[hsl(210_10%_50%)] text-sm leading-relaxed max-w-xs md:text-right
              transition-all duration-700 delay-200 ${headInView ? "opacity-100" : "opacity-0"}`}>
              De restaurantes a indústrias, de artesanais a quem quer vender em supermercado.
            </p>
          </div>
        </div>

        {/* ── Grid editorial — dois tamanhos ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {segments.map(({ icon: Icon, label, desc }, i) => {
            /* primeiros 4 ocupam 2 colunas no grid de 5, os outros 1 */
            const wide = i < 5;
            return (
              <div
                key={i}
                className={`group relative rounded-[1.25rem] border border-[hsl(210_10%_88%)]
                  bg-white overflow-hidden cursor-default
                  hover:border-[hsl(20_35%_70%/0.4)]
                  hover:shadow-[0_12px_40px_hsl(20_35%_60%/0.1)]
                  hover:-translate-y-1
                  transition-all duration-400
                  ${wide ? "lg:col-span-1" : "lg:col-span-1"}
                  ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* hover bg fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20_35%_70%/0.05)] to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-[1.25rem]" />

                <div className="relative z-10 p-6">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(20_35%_70%/0.1)]
                    flex items-center justify-center mb-4
                    group-hover:bg-[hsl(20_35%_70%/0.2)] group-hover:scale-105
                    transition-all duration-300">
                    <Icon className="w-4.5 h-4.5 text-[hsl(20_35%_55%)]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-semibold text-[hsl(210_15%_12%)] text-sm leading-snug mb-1.5
                    group-hover:text-[hsl(20_35%_50%)] transition-colors duration-300">
                    {label}
                  </h3>
                  <p className="text-[hsl(210_10%_55%)] text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Closing statement ── */}
        <div className={`mt-14 pt-10 border-t border-[hsl(210_10%_90%)]
          flex flex-col sm:flex-row items-center justify-between gap-6
          transition-all duration-700 delay-600 ${gridInView ? "opacity-100" : "opacity-0"}`}>
          <p className="font-playfair italic text-[hsl(20_35%_52%)] text-lg leading-snug text-center sm:text-left">
            "Do diagnóstico à adequação completa — em qualquer segmento alimentício."
          </p>
          <span className="flex-shrink-0 text-[11px] font-semibold tracking-[0.25em] uppercase
            text-[hsl(210_10%_55%)] border border-[hsl(210_10%_88%)] rounded-full px-4 py-2">
            10 segmentos atendidos
          </span>
        </div>

      </div>
    </section>
  );
};

export default FoodServicesSegments;
