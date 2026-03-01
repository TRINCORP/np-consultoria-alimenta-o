import { useInView } from "react-intersection-observer";
import { CheckCircle2, Shield, Users, Eye, Target, TrendingUp } from "lucide-react";
import fotoEquipe from "@/assets/food-services/foto3-equipe.png";

const differentials = [
  { icon: Users, text: "Atendimento personalizado" },
  { icon: Shield, text: "Equipe técnica especializada" },
  { icon: Eye, text: "Experiência prática em operações reais" },
  { icon: Target, text: "Atuação estratégica e preventiva" },
  { icon: TrendingUp, text: "Foco em segurança, organização e rentabilidade" },
];

const philosophyQuotes = [
  "Segurança de alimentos não é mais apenas obrigação. É posicionamento de marca.",
  "Empresas que tratam a segurança dos alimentos como parte da estratégia — e não apenas como exigência da Vigilância — saem na frente.",
  "Quem trabalha de forma preventiva reduz autuações, evita desperdícios, protege a reputação e fortalece a confiança do cliente.",
];

const FoodServicesDifferentials = () => {
  const { ref: diffRef, inView: diffInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: philRef, inView: philInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: closingRef, inView: closingInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="bg-[#1a1a1a] relative overflow-hidden">
      {/* Differentials */}
      <div ref={diffRef} className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span
                className={`inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wider uppercase mb-6 transition-all duration-700 ${
                  diffInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Diferenciais
              </span>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white transition-all duration-700 delay-100 ${
                  diffInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Por que a <span className="text-gradient italic">NP</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentials.map((diff, i) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={i}
                    className={`group flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-primary/10
                      hover:bg-white/[0.06] hover:border-primary/30 hover:-translate-y-1 transition-all duration-500
                      ${diffInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white/80 text-sm lg:text-base font-medium">{diff.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Team photo divider */}
      <div className="relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto group">
            <div className="aspect-[16/7] sm:aspect-[21/9]">
              <img src={fotoEquipe} alt="Equipe NP Consultoria analisando documentação" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/60" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 flex items-end justify-between">
              <div>
                <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">Equipe Técnica</span>
                <p className="text-white text-lg sm:text-xl lg:text-2xl font-playfair font-bold mt-1">Dedicação em cada detalhe</p>
              </div>
              <div className="hidden sm:block w-16 h-16 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">NP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy section */}
      <div ref={philRef} className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto space-y-16">
            {philosophyQuotes.map((quote, i) => (
              <blockquote
                key={i}
                className={`text-center transition-all duration-1000 ${
                  philInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 300}ms` }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-playfair italic text-white/90 leading-relaxed">
                  "{quote}"
                </p>
                {i < philosophyQuotes.length - 1 && (
                  <div className="mt-16 flex justify-center">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  </div>
                )}
              </blockquote>
            ))}
          </div>
        </div>
      </div>

      {/* Dramatic closing */}
      <div ref={closingRef} className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <div
            className={`max-w-2xl mx-auto transition-all duration-1000 ${
              closingInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white leading-tight mb-4">
              Segurança bem-feita quase não aparece.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold leading-tight">
              <span className="text-gradient italic">Mas quando falha, vira manchete.</span>
            </p>

            <div
              className={`mt-12 transition-all duration-700 delay-500 ${
                closingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button className="btn-hero">Fale com a NP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodServicesDifferentials;
