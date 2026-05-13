import { useInView } from "react-intersection-observer";
import { Shield, Users, Eye, Target, TrendingUp, MapPin } from "lucide-react";

const differentials = [
  { icon: MapPin,     number: "01", title: "Presença Local",           desc: "Atuação presencial em Indaiatuba, Campinas e região — acompanhamos vistorias e fiscalizações ao seu lado." },
  { icon: Users,     number: "02", title: "Atendimento Personalizado", desc: "Cada negócio tem sua realidade. Adaptamos nossas soluções à sua operação, cultura e objetivos." },
  { icon: Shield,    number: "03", title: "Equipe Técnica Especializada", desc: "Profissionais com formação e experiência prática em vigilância sanitária, nutrição e gestão alimentar." },
  { icon: Eye,       number: "04", title: "Experiência Multissetorial", desc: "Ampla experiência atendendo restaurantes, cozinhas industriais, indústrias e produtores artesanais." },
  { icon: Target,    number: "05", title: "Atuação Preventiva",        desc: "Não esperamos a autuação acontecer. Identificamos riscos antes e criamos planos de correção eficazes." },
  { icon: TrendingUp, number: "06", title: "Foco em Resultados",       desc: "Adequação sanitária como estratégia de crescimento: mais organização, menos desperdício, mais rentabilidade." },
];

const FoodServicesDifferentials = () => {
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: listRef, inView: listInView } = useInView({ threshold: 0.04, triggerOnce: true });
  const { ref: closingRef, inView: closingInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="bg-[#1C1A18] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(20 35% 62% / 0.06), transparent)" }} />

      {/* ── Differentials ── */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 py-20 lg:py-28 relative z-10">

        {/* Header */}
        <div ref={headRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
              text-[hsl(20_35%_62%)] mb-5
              transition-all duration-700 ${headInView ? "opacity-100" : "opacity-0"}`}>
              Por que escolher a NP
            </span>
            <h2
              className={`font-playfair font-bold text-white leading-[1.08]
                transition-all duration-700 delay-100 ${headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Diferenciais da{" "}
              <em className="italic text-[hsl(20_45%_70%)]">NP Consultoria</em>.
            </h2>
          </div>

          <p className={`text-white/40 text-sm leading-relaxed max-w-xs
            transition-all duration-700 delay-200 ${headInView ? "opacity-100" : "opacity-0"}`}>
            Técnica, prática e completamente personalizada — do diagnóstico à conformidade total.
          </p>
        </div>

        {/* Differentials — editorial numbered list */}
        <div ref={listRef} className="space-y-0 divide-y divide-white/[0.06]">
          {differentials.map(({ icon: Icon, number, title, desc }, i) => (
            <div
              key={i}
              className={`group grid grid-cols-[auto_1fr_auto] lg:grid-cols-[80px_1fr_300px] items-start
                gap-6 lg:gap-10 py-8 lg:py-9
                hover:bg-white/[0.025] transition-all duration-400
                ${listInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number */}
              <span className="font-playfair font-bold text-white/15 group-hover:text-[hsl(20_35%_62%/0.4)]
                transition-colors duration-400 leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                {number}
              </span>

              {/* Title + icon */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(20_35%_62%/0.1)] flex items-center justify-center flex-shrink-0
                  group-hover:bg-[hsl(20_35%_62%/0.2)] group-hover:scale-105
                  transition-all duration-300">
                  <Icon className="w-4.5 h-4.5 text-[hsl(20_45%_68%)]" strokeWidth={1.6} />
                </div>
                <h3 className="font-semibold text-white text-base sm:text-lg
                  group-hover:text-[hsl(20_45%_72%)] transition-colors duration-400">
                  {title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed col-span-full lg:col-auto
                group-hover:text-white/60 transition-colors duration-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Closing — full-bleed statement ── */}
      <div ref={closingRef}
        className="border-t border-white/[0.06] py-20 lg:py-28 text-center relative"
        style={{ background: "linear-gradient(to bottom, #1C1A18, #141210)" }}>

        <div className="max-w-[900px] mx-auto px-6 sm:px-12">
          <p
            className={`font-playfair font-bold text-white leading-[1.15] mb-4
              transition-all duration-[1000ms] ${closingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Adequação sanitária bem-feita
            <br />quase não aparece.
          </p>
          <p
            className={`font-playfair font-bold italic text-[hsl(20_45%_68%)] leading-tight mb-12
              transition-all duration-[1000ms] delay-150 ${closingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Mas quando falha, vira manchete.
          </p>

          <div className={`transition-all duration-700 delay-400 ${closingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a
              href={`https://wa.me/5519989750741?text=${encodeURIComponent("Olá! Gostaria de falar com a NP Consultoria.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5
                bg-[hsl(20_35%_62%)] text-white rounded-full
                px-10 py-4 text-sm font-semibold
                hover:bg-[hsl(20_35%_55%)]
                hover:shadow-[0_12px_36px_hsl(20_35%_62%/0.4)]
                hover:-translate-y-0.5 transition-all duration-300"
            >
              Fale com a NP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodServicesDifferentials;
