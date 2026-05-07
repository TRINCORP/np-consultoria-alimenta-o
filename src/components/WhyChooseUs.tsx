import { useInView } from "react-intersection-observer";
import { UserCheck, Scale, Building2, MapPin } from "lucide-react";

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada negócio alimentício tem suas particularidades. Adaptamos nossas soluções à realidade operacional de cada cliente.",
    number: "01",
  },
  {
    icon: Scale,
    title: "Legislação ANVISA Atualizada",
    description: "Conhecimento técnico sempre atual sobre normas da ANVISA e exigências da vigilância sanitária.",
    number: "02",
  },
  {
    icon: Building2,
    title: "Experiência Multissetorial",
    description: "Restaurantes, cozinhas industriais, indústrias de alimentos e produtores artesanais — atendemos todos os segmentos.",
    number: "03",
  },
  {
    icon: MapPin,
    title: "Presença Local em Indaiatuba",
    description: "Atendimento presencial em Indaiatuba e região de Campinas, com acompanhamento em vistorias e fiscalizações.",
    number: "04",
  },
];

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ── Header ── */}
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
              text-[hsl(20_35%_58%)] mb-5
              transition-all duration-700 ${titleInView ? "opacity-100" : "opacity-0"}`}>
              Por que escolher a NP
            </span>
            <h2
              className={`font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.08]
                transition-all duration-700 delay-100 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Técnica, prática e<br />
              <em className="italic text-[hsl(20_35%_58%)]">completamente personalizada.</em>
            </h2>
          </div>

          <p className={`text-[hsl(210_10%_48%)] text-base leading-relaxed max-w-sm lg:text-right
            transition-all duration-700 delay-200 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Garantimos segurança alimentar, conformidade com a vigilância sanitária
            e crescimento sustentável para o seu negócio.
          </p>
        </div>

        {/* ── Differentials grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {differentials.map(({ icon: Icon, title, description, number }, i) => (
            <div
              key={i}
              className={`group relative rounded-[1.5rem] border border-[hsl(210_10%_90%)]
                bg-[#FAF9F7] p-8 lg:p-10 overflow-hidden
                hover:border-[hsl(20_35%_70%/0.4)] hover:-translate-y-1
                hover:shadow-[0_20px_56px_hsl(20_35%_60%/0.1)]
                transition-all duration-500
                ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hover fill */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br
                from-[hsl(20_35%_70%/0.05)] to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex gap-6">
                {/* Number */}
                <span className="font-playfair font-bold text-[hsl(20_35%_70%/0.25)] leading-none select-none
                  group-hover:text-[hsl(20_35%_70%/0.45)] transition-colors duration-500"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)" }}>
                  {number}
                </span>

                <div className="flex-1 pt-1">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(20_35%_70%/0.1)]
                    flex items-center justify-center mb-5
                    group-hover:bg-[hsl(20_35%_70%/0.2)] group-hover:scale-105
                    transition-all duration-300">
                    <Icon className="w-4.5 h-4.5 text-[hsl(20_35%_55%)]" strokeWidth={1.75} />
                  </div>

                  <h3 className="font-semibold text-[hsl(210_15%_10%)] text-base mb-2
                    group-hover:text-[hsl(20_35%_52%)] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-[hsl(210_10%_50%)] text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom statement ── */}
        <div className={`mt-16 pt-12 border-t border-[hsl(210_10%_90%)] text-center
          transition-all duration-700 delay-500 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-playfair italic text-[hsl(20_35%_52%)] text-xl leading-snug">
            "NP Consultoria e NP Rotulagem —<br />
            organização que protege, estratégia que impulsiona."
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
