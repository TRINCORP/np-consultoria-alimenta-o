/* ─── WhyChooseUs — statement cards (inspired by More Nutrition's "More Taste / More Caffeine") ─── */

import { useInView } from "react-intersection-observer";
import { UserCheck, Scale, Building2, MapPin } from "lucide-react";

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description:
      "Cada tipo de negócio alimentício tem suas particularidades. Adaptamos nossas soluções à sua realidade operacional.",
    label: "Foco no Cliente",
  },
  {
    icon: Scale,
    title: "Legislação ANVISA Atualizada",
    description:
      "Conhecimento técnico sempre atualizado sobre normas da ANVISA e exigências da vigilância sanitária.",
    label: "Conformidade Legal",
  },
  {
    icon: Building2,
    title: "Experiência Multissetorial",
    description:
      "Atuamos com restaurantes, cozinhas industriais, indústrias de alimentos e produtores artesanais.",
    label: "Ampla Atuação",
  },
  {
    icon: MapPin,
    title: "Presencial em Indaiatuba",
    description:
      "Atendimento presencial em Indaiatuba e região de Campinas, com acompanhamento em vistorias e fiscalizações.",
    label: "Presença Local",
  },
];

const WhyChooseUs = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: cardsRef, inView: cardsInView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Soft vertical lines */}
      <div className="absolute inset-0 opacity-30 hidden md:block pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-primary/12 text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5
              transition-all duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Por Que Escolher a NP
          </span>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100
              ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ lineHeight: 1.15 }}
          >
            Por que escolher a{" "}
            <span className="relative inline-block">
              <span className="text-gradient italic font-playfair">NP Consultoria?</span>
              {/* Animated underline like More Nutrition */}
              <svg
                className="absolute -bottom-2 left-0 w-full overflow-visible"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
              >
                <path
                  d="M2 7C50 2 150 2 198 7"
                  stroke="hsl(20 35% 70%)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 220,
                    strokeDashoffset: titleInView ? 0 : 220,
                    transition: "stroke-dashoffset 1.2s ease-out 0.6s",
                  }}
                />
              </svg>
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed
              transition-all duration-700 delay-200 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Atuamos de forma técnica, prática e personalizada para garantir segurança alimentar,
            conformidade com a vigilância sanitária e crescimento sustentável do seu negócio.
          </p>
        </div>

        {/* ── Statement Cards — More Nutrition style ── */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl border border-border/50 bg-card/50
                  hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-2
                  transition-all duration-700 overflow-hidden
                  ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${150 + index * 120}ms` }}
              >
                {/* Top colored bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover bg wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-7 sm:p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 group-hover:rotate-3">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Small label — like More Nutrition's "Chunky Flavour®" */}
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-2">
                    {item.label}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom callout ── */}
        <div
          className={`text-center max-w-2xl mx-auto mt-14 sm:mt-18 transition-all duration-700 delay-700
            ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 rotate-45 border border-primary/40" />
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Garantir segurança dos alimentos, fortalecer sua marca e estruturar sua operação para crescer com responsabilidade e credibilidade.
          </p>
          <p className="text-foreground font-semibold italic mt-3 text-sm sm:text-base">
            NP Consultoria e NP Rotulagem — organização que protege, estratégia que impulsiona.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
