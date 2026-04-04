/* ─── ComparisonSection — "Com NP vs Sem NP" (inspired by More Nutrition benefit table) ─── */

import { useInView } from "react-intersection-observer";
import kitchenImg from "@/assets/kitchen-audit.jpg";
import logoNP from "@/assets/logoNP.png";

const benefits = [
  "Regularização sanitária completa",
  "Manual de Boas Práticas atualizado",
  "Equipe treinada e capacitada",
  "Rotulagem nutricional conforme ANVISA",
  "Processos documentados e padronizados",
  "Suporte em vistorias e fiscalizações",
  "Risco zero de autuação",
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-5 h-5 sm:w-6 sm:h-6 text-red-400/70"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ComparisonSection = () => {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: tableRef, inView: tableInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="comparativo"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-background overflow-hidden relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[120px]" />
      </div>


      {/* Top smiley / decorative — like More Nutrition */}
      <div
        className={`absolute top-8 left-1/2 -translate-x-1/2 text-5xl select-none pointer-events-none transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0 rotate-0 scale-100" : "opacity-0 -translate-y-4 rotate-12 scale-50"
        }`}
        style={{ transitionDelay: "0.1s" }}
        aria-hidden
      >
        🌿
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Left: Image ── */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-95"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="relative group">
              {/* Decorative blob SVG like More Nutrition */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 575 559"
                className="absolute -inset-8 w-[calc(100%+4rem)] h-auto text-primary/10 pointer-events-none"
                aria-hidden
              >
                <path
                  d="M245.813 59.5015C54.1619 152.668 -34.1186 356.234 41.6525 512.101C117.424 667.969 332.042 724.289 523.692 631.123C715.343 537.957 803.624 334.39 727.852 178.522C652.081 22.6546 437.463 -33.6648 245.813 59.5015Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <div className="relative rounded-[1.4rem] overflow-hidden shadow-2xl shadow-primary/10 border border-primary/10">
                <img
                  src={kitchenImg}
                  alt="Auditoria de cozinha — NP Consultoria"
                  className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Badge inside image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <p className="text-white text-sm font-medium leading-snug">
                      92% de aprovação em vistorias sanitárias
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Table ── */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.25s" }}
          >
            {/* Heading */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                Por que escolher a NP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15]">
                <span className="text-gradient italic font-playfair">Mais para Você.</span>
                <br />
                Veja a Diferença.
              </h2>
            </div>

            {/* Table */}
            <div ref={tableRef} className="rounded-2xl border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_auto_auto] items-center px-5 py-3 bg-muted/60 border-b border-border/40">
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Benefícios
                </span>
                <div className="flex items-center justify-center w-20 sm:w-28">
                  <img src={logoNP} alt="NP Consultoria" className="h-5 sm:h-6 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 sm:w-28">
                  <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
                    Sem<br />Consultoria
                  </span>
                </div>
              </div>

              {/* Benefit rows */}
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[1fr_auto_auto] items-center px-5 py-3.5 border-b border-border/20 last:border-b-0
                    transition-all duration-700 hover:bg-primary/3
                    ${tableInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <span className="text-sm sm:text-base text-foreground font-medium pr-4">
                    {benefit}
                  </span>
                  <div className="flex items-center justify-center w-20 sm:w-28">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckIcon />
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-20 sm:w-28">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                      <XIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
