import equipeNP from "@/assets/equipe_np.jpg";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, LayoutGrid, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Garantir alimentos seguros, processos controlados e conformidade com a legislação sanitária.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: LayoutGrid,
    title: "Organização",
    description: "Estruturar operações, reduzir perdas, padronizar rotinas e fortalecer a gestão.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description: "Preparar empresas e marcas para crescer com responsabilidade, credibilidade e posicionamento estratégico no mercado.",
    accent: "from-primary/15 to-accent/10",
  },
];

const PhilosophySection = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  const { ref: pillarsRef, inView: pillarsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef}
      className="bg-background py-16 sm:py-24 md:py-32 overflow-hidden relative"
      aria-labelledby="philosophy-heading"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Top: Asymmetric layout — text heavy, image accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Main content — 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                Nossa Filosofia
              </span>
              <h2
                id="philosophy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-6"
              >
                Compromisso com a{" "}
                <span className="text-gradient silver-shine-text font-playfair italic">
                  Segurança Alimentar
                </span>{" "}
                e o Crescimento do Seu Negócio
              </h2>
            </div>

            <div className={`space-y-5 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Na NP Consultoria e NP Rotulagem, acreditamos que a segurança dos alimentos vai além da obrigação legal. Ela é um <strong className="text-foreground">compromisso com a vida, com a marca e com a sustentabilidade do negócio.</strong>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Trabalhamos com uma visão preventiva e estratégica, onde organização, gestão eficiente e conformidade caminham juntas. Nosso propósito é transformar estabelecimentos e marcas alimentícias em operações seguras, estruturadas e preparadas para crescer com responsabilidade.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Entendemos que cada empresa possui sua realidade, seus desafios e sua identidade. Por isso, atuamos de forma personalizada, aplicando soluções técnicas que sejam <strong className="text-foreground">viáveis, práticas e alinhadas aos objetivos de cada cliente.</strong>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Mais do que adequar empresas às normas, buscamos desenvolver equipes, fortalecer lideranças e estruturar processos que gerem resultados duradouros.
              </p>
            </div>
          </div>

          {/* Right: Image accent — 5 cols */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-[2px] rounded-[1.5rem] bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="relative rounded-[1.4rem] overflow-hidden bg-card shadow-2xl shadow-primary/10">
                <img
                  src={equipeNP}
                  alt="Equipe NP Consultoria, especialistas em segurança alimentar e gestão de qualidade"
                  className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white/90 text-sm font-medium italic leading-snug">
                    "Quando há método, conhecimento e liderança, o resultado é natural: segurança, rentabilidade e valorização da marca."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Three Pillars */}
        <div ref={pillarsRef} className="mt-16 sm:mt-24">
          <h3 className={`text-center text-xl sm:text-2xl font-bold text-foreground mb-3 transition-all duration-700 ${pillarsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Nossa filosofia se baseia em três pilares
          </h3>
          <div className={`w-16 h-1 bg-primary/60 rounded-full mx-auto mb-12 transition-all duration-700 delay-100 ${pillarsInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`relative group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 sm:p-10 transition-all duration-700 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                  pillarsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
