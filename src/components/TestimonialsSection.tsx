import { useInView } from "react-intersection-observer";
import TrincorpSectionHeadline from "@/components/effects/TrincorpSectionHeadline";

const testimonials = [
  {
    rating: 5,
    text: "A NP Consultoria organizou toda a nossa operação. Passamos na vistoria da vigilância sanitária sem nenhuma pendência e hoje temos processos muito mais claros para a equipe.",
    name: "Fernanda Oliveira",
    role: "Proprietária de Restaurante",
    location: "Indaiatuba",
    initials: "FO",
  },
  {
    rating: 5,
    text: "Precisávamos regularizar a rotulagem dos nossos produtos para vender em supermercado. A NP Rotulagem cuidou de tudo: tabela nutricional, adequação à ANVISA e design do rótulo. Resultado impecável.",
    name: "Ricardo Mendes",
    role: "Produtor Artesanal",
    location: "Campinas",
    initials: "RM",
  },
  {
    rating: 5,
    text: "Contratamos a NP para o treinamento dos manipuladores e elaboração do Manual de Boas Práticas. A equipe ficou muito mais engajada e organizada. Recomendo de olhos fechados.",
    name: "Juliana Campos",
    role: "Gerente de Cozinha Industrial",
    location: "Salto",
    initials: "JC",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[hsl(20_45%_65%)] fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={headRef} className="mb-14 lg:mb-16">
          <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
            text-[hsl(20_35%_58%)] mb-5
            transition-all duration-700 ${headInView ? "opacity-100" : "opacity-0"}`}>
            Depoimentos
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <TrincorpSectionHeadline
              label="Quem já confiou na NP."
              lines={[
                { content: "QUEM JÁ", effects: ["focus-pull"] },
                { content: <><em>confiou</em> NA NP.</>, effects: ["outline-fill", "chromatic-split"] },
              ]}
            />
            <p className={`text-[hsl(210_10%_50%)] text-sm leading-relaxed max-w-xs md:text-right
              transition-all duration-700 delay-200 ${headInView ? "opacity-100" : "opacity-0"}`}>
              Resultados reais de clientes que transformaram suas operações com a NP Consultoria.
            </p>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div
          ref={gridRef}
          className="np-testimonials-track -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:-mx-12 sm:px-12 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:gap-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative min-w-[86%] snap-start overflow-hidden rounded-[1.5rem] border border-[hsl(210_10%_90%)]
                bg-[#FAF9F7] p-7 sm:min-w-[62%] sm:p-8 md:min-w-0
                hover:border-[hsl(20_35%_70%/0.35)]
                hover:shadow-[0_16px_48px_hsl(20_35%_60%/0.1)]
                hover:-translate-y-1
                transition-all duration-500
                ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Subtle hover fill */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br
                from-[hsl(20_35%_70%/0.04)] to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Giant quote mark */}
              <span className="absolute top-4 right-5 font-playfair text-[5rem] leading-none
                text-[hsl(20_35%_70%/0.12)] select-none pointer-events-none">
                "
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <Stars count={t.rating} />

                <p className="text-[hsl(210_15%_20%)] text-sm leading-relaxed mt-5 mb-8 flex-1">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-[hsl(210_10%_90%)]">
                  <div className="w-10 h-10 rounded-full bg-[hsl(20_35%_70%/0.15)]
                    flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair font-bold text-sm text-[hsl(20_35%_55%)]">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[hsl(210_15%_12%)] text-sm">{t.name}</p>
                    <p className="text-[hsl(210_10%_55%)] text-xs mt-0.5">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .np-testimonials-track { scrollbar-width: none; }
          .np-testimonials-track::-webkit-scrollbar { display: none; }
          @media (prefers-reduced-motion: reduce) {
            .np-testimonials-track > * { opacity: 1 !important; transform: none !important; }
          }
        `}</style>

      </div>
    </section>
  );
};

export default TestimonialsSection;
