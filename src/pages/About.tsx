import { useInView } from "react-intersection-observer";
import { Play, Pause, Award, Users, ShieldCheck, Sparkles, Heart, Target, Lightbulb, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { ref: heroRef,   inView: heroInView   } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: videoRef2, inView: videoInView  } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef,  inView: statsInView  } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: quoteRef,  inView: quoteInView  } = useInView({ threshold: 0.2, triggerOnce: true });

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  const stats = [
    { icon: Award,      label: "Fundação",                value: "2021"   },
    { icon: Users,      label: "Unidades atendidas",      value: "+20"    },
    { icon: ShieldCheck,label: "Consumidores impactados", value: "+10mil" },
    { icon: MapPin,     label: "Aprovação na 1ª vistoria",value: "92%"    },
  ];

  const values = [
    { icon: Heart,     title: "Propósito",    description: "Nascemos para fazer diferença real — não apenas visitas técnicas, mas implantações que transformam operações." },
    { icon: Target,    title: "Excelência",   description: "Cada detalhe importa. Do diagnóstico ao alvará, entregamos rigor técnico com atenção personalizada." },
    { icon: Lightbulb, title: "Inovação",     description: "Vamos além da adequação sanitária: integramos gestão, liderança e estratégia operacional ao nosso trabalho." },
    { icon: ShieldCheck,title: "Confiança",   description: "Construímos relações duradouras com nossos clientes, baseadas em transparência e resultados concretos." },
  ];

  return <>
    <SEO
      title="Sobre a NP Consultoria | Nossa História desde 2021"
      description="Conheça a história da NP Consultoria Alimentar — fundada em 2021 em Indaiatuba por Patricia Rossetti e Natalia Mingatto. Consultoria especializada em segurança alimentar, vigilância sanitária e rotulagem nutricional para mais de 20 unidades na região de Campinas."
      keywords="sobre NP Consultoria, história NP Consultoria, fundada 2021, Patricia Rossetti nutricionista, consultoria alimentar Indaiatuba, segurança alimentar Campinas"
    />
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className={`about-story-hero relative overflow-hidden pt-32 pb-20 ${heroInView ? "is-revealed" : ""}`}
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          event.currentTarget.style.setProperty("--about-pointer-x", `${x * 34}px`);
          event.currentTarget.style.setProperty("--about-pointer-y", `${y * 24}px`);
        }}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--about-pointer-x", "0px");
          event.currentTarget.style.setProperty("--about-pointer-y", "0px");
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="about-story-grid absolute inset-0" />
        <div className="about-story-orb about-story-orb-primary" />
        <div className="about-story-orb about-story-orb-accent" />
        <div className="about-story-year" aria-hidden>2021</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="about-story-intro text-center max-w-6xl mx-auto">
            <div className="about-story-kicker inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/70 sm:w-16" />
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.32em] text-primary sm:text-sm">Nossa Jornada</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/70 sm:w-16" />
            </div>

            <h1 className="about-story-title mb-7 text-foreground" aria-label="Conheça a Nossa História">
              <span className="about-story-title-line" aria-hidden>Conheça a</span>
              <span className="about-story-title-line about-story-title-accent" aria-hidden>Nossa História</span>
            </h1>

            <p className="about-story-lede text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Em 2021, nascemos com um propósito claro:{" "}
              <span className="text-foreground font-medium">ir além da visita técnica e criar implantações que realmente transformam negócios.</span>{" "}
              Nossa trajetória é marcada por crescimento orgânico, dedicação e clientes que confiam em nós há anos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vídeo + Texto ── */}
      <section ref={videoRef2} className="about-story-main relative py-20 lg:py-32 overflow-hidden">
        <div className="about-story-main-glow" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Texto */}
            <div className="order-2 lg:order-1">
              <h2 className={`about-story-heading text-foreground mb-8 ${videoInView ? "is-revealed" : ""}`} aria-label="Uma história de propósito e crescimento">
                <span className="about-story-heading-line" aria-hidden>Uma história de</span>
                <span className="about-story-heading-line about-story-heading-accent" aria-hidden>propósito e crescimento</span>
              </h2>

              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p className={`about-story-paragraph ${videoInView ? "is-revealed" : ""}`} style={{ transitionDelay: "180ms" }}>
                  A NP Consultoria nasceu em <strong className="text-foreground">2021</strong>, fundada por{" "}
                  <strong className="text-foreground">Patricia Rossetti e Natalia Mingatto</strong>, quando
                  identificaram a necessidade de uma consultoria alimentar que fosse além: não apenas apontar
                  problemas, mas <em>implantar soluções de verdade</em>.
                </p>

                <p className={`about-story-paragraph ${videoInView ? "is-revealed" : ""}`} style={{ transitionDelay: "260ms" }}>
                  O que começou como um projeto de duas nutricionistas apaixonadas por segurança alimentar
                  cresceu organicamente — cliente a cliente, unidade a unidade — até se tornar referência
                  em Indaiatuba e toda a região de Campinas.
                </p>

                <p className={`about-story-paragraph ${videoInView ? "is-revealed" : ""}`} style={{ transitionDelay: "340ms" }}>
                  Hoje atendemos mais de <strong className="text-foreground">20 unidades ativas</strong> —
                  restaurantes, padarias, cozinhas industriais, ILPI e indústrias de alimentos — além de
                  oferecer serviços completos de{" "}
                  <strong className="text-foreground">rotulagem nutricional conforme ANVISA</strong>.
                </p>

                <p className={`about-story-paragraph font-medium text-foreground ${videoInView ? "is-revealed" : ""}`} style={{ transitionDelay: "420ms" }}>
                  Assista ao vídeo e descubra como nossa história pode inspirar a transformação do seu negócio.
                </p>
              </div>
              {/* Os números (Fundação, Unidades, etc.) aparecem uma única vez,
                  no bloco de estatísticas logo abaixo — sem duplicar aqui. */}
            </div>

            {/* Vídeo */}
            <div className={`about-video-reveal order-1 lg:order-2 flex justify-center ${videoInView ? "is-revealed" : ""}`}>
              <div className="about-video-shell relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-primary via-accent to-primary opacity-70 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary via-accent to-primary animate-spin-slow" style={{ animationDuration: '8s' }} />
                </div>
                <div className="relative bg-card rounded-[1.8rem] p-2 shadow-2xl shadow-primary/20">
                  <div className="relative rounded-[1.5rem] overflow-hidden cursor-pointer" onClick={handlePlayPause} style={{ width: '320px', maxWidth: '100%' }}>
                    <div className="absolute top-0 left-0 right-0 h-8 bg-card/90 backdrop-blur-sm z-20 flex items-center justify-center rounded-t-[1.5rem]">
                      <div className="w-20 h-1.5 bg-border/50 rounded-full" />
                    </div>
                    <video ref={videoRef} className="w-full aspect-[9/16] object-cover" playsInline loop onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
                      <source src="/videos/about_NP.mp4" type="video/mp4" />
                    </video>
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '2s' }} />
                          <div className="absolute -inset-4 rounded-full bg-primary/20 animate-pulse" />
                          <div className="relative w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/40">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-4 right-4">
                        <p className="text-white/60 text-xs mb-1">Toque para assistir</p>
                        <h3 className="text-white font-bold text-lg leading-tight">A História da NP</h3>
                      </div>
                    </div>
                    {isPlaying && isHovered && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Pause className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-float" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float animation-delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section ref={statsRef} className="about-stats-section py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`about-stat-card rounded-2xl p-6 text-center group ${statsInView ? "is-revealed" : ""}`}
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <div className="about-stat-icon inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="about-stat-value text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section ref={valuesRef} className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className={`about-values-intro text-center mb-16 ${valuesInView ? "is-revealed" : ""}`}>
            <h2 className="about-values-title text-foreground mb-6" aria-label="Nossos Valores">
              <span aria-hidden>Nossos </span><span className="about-values-title-accent" aria-hidden>Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os pilares que guiam cada visita, cada implantação e cada resultado entregue.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <div key={i}
                className={`about-value-card rounded-2xl p-8 text-center group ${valuesInView ? "is-revealed" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="about-value-icon inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section ref={quoteRef} className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`about-quote max-w-4xl mx-auto text-center ${quoteInView ? "is-revealed" : ""}`}>
            <blockquote className="about-quote-card relative">
              <div className="about-quote-mark absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-primary/20 font-serif leading-none">"</div>
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light leading-relaxed italic">
                Nascemos para ir além da visita técnica — implantamos soluções, desenvolvemos equipes
                e entregamos segurança alimentar de verdade.
              </p>
              <footer className="mt-8">
                <cite className="text-primary font-semibold not-italic text-lg">
                  Patricia Rossetti & Natalia Mingatto — Fundadoras, NP Consultoria
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>;
};

export default About;
