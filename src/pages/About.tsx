import { useInView } from "react-intersection-observer";
import { Play, Pause, Award, Users, TrendingUp, ShieldCheck, Sparkles, Heart, Target, Lightbulb } from "lucide-react";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    ref: heroRef,
    inView: heroInView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const {
    ref: videoRef2,
    inView: videoInView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const {
    ref: valuesRef,
    inView: valuesInView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const stats = [{
    icon: Award,
    label: "Anos de Experiência",
    value: "15+"
  }, {
    icon: Users,
    label: "Empresas Atendidas",
    value: "300+"
  }, {
    icon: TrendingUp,
    label: "Projetos Concluídos",
    value: "2000+"
  }, {
    icon: ShieldCheck,
    label: "Taxa de Satisfação",
    value: "98%"
  }];
  const values = [{
    icon: Heart,
    title: "Paixão",
    description: "Amamos o que fazemos e isso reflete em cada projeto entregue."
  }, {
    icon: Target,
    title: "Excelência",
    description: "Buscamos a perfeição em cada detalhe do nosso trabalho."
  }, {
    icon: Lightbulb,
    title: "Inovação",
    description: "Sempre à frente com soluções criativas e tecnológicas."
  }, {
    icon: ShieldCheck,
    title: "Confiança",
    description: "Construímos relações duradouras baseadas em transparência."
  }];
  return <>
      <SEO title="Sobre Nós | NP Consultoria" description="Conheça a história da NP Consultoria e nossa missão de transformar a qualidade alimentar em resultados extraordinários." keywords="sobre NP Consultoria, história, missão, valores, consultoria alimentar" />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-1000" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-5 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Nossa Jornada</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Conheça a{" "}
                <span className="text-gradient silver-shine-text font-playfair italic">
                  Nossa História
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Há mais de uma década, nascemos com um propósito claro: 
                <span className="text-foreground font-medium"> revolucionar a forma como empresas 
                lidam com alimentação e nutrição.</span> Nossa trajetória é marcada por 
                dedicação, inovação e resultados extraordinários.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section - Creative Layout */}
        <section ref={videoRef2} className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Side - Text Content */}
              <div className={`order-2 lg:order-1 transition-all duration-1000 ${videoInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                  Uma história de
                  <span className="block text-gradient silver-shine-text mt-2">
                    paixão e propósito
                  </span>
                </h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Tudo começou com um sonho: criar uma empresa que realmente 
                    fizesse a diferença na vida das pessoas através da alimentação 
                    saudável e segura.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Hoje, somos referência nacional em consultoria alimentar, 
                    atendendo desde pequenos empreendedores até grandes indústrias, 
                    sempre com o mesmo compromisso de excelência.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-medium text-foreground">
                    Assista ao vídeo e descubra como nossa jornada pode inspirar 
                    a transformação do seu negócio.
                  </p>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  {stats.slice(0, 2).map((stat, index) => <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 transition-all duration-300 hover:border-primary/30">
                      <stat.icon className="w-6 h-6 text-primary mb-3" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>)}
                </div>
              </div>

              {/* Right Side - Portrait Video Card */}
              <div className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 delay-200 ${videoInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
                <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  {/* Decorative Frame - Outer Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Animated Border */}
                  <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-primary via-accent to-primary opacity-70 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary via-accent to-primary animate-spin-slow" style={{
                    animationDuration: '8s'
                  }} />
                  </div>
                  
                  {/* Main Video Container */}
                  <div className="relative bg-card rounded-[1.8rem] p-2 shadow-2xl shadow-primary/20">
                    <div className="relative rounded-[1.5rem] overflow-hidden cursor-pointer" onClick={handlePlayPause} style={{
                    width: '320px',
                    maxWidth: '100%'
                  }}>
                      {/* Phone-like Frame */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-card/90 backdrop-blur-sm z-20 flex items-center justify-center rounded-t-[1.5rem]">
                        <div className="w-20 h-1.5 bg-border/50 rounded-full" />
                      </div>
                      
                      {/* Video */}
                      <video ref={videoRef} className="w-full aspect-[9/16] object-cover" playsInline loop onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
                        <source src="/videos/about_NP.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Overlay when not playing */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{
                            animationDuration: '2s'
                          }} />
                            <div className="absolute -inset-4 rounded-full bg-primary/20 animate-pulse" />
                            <div className="relative w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/40">
                              <Play className="w-8 h-8 text-white ml-1" fill="white" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Text */}
                        <div className="absolute bottom-6 left-4 right-4">
                          <p className="text-white/60 text-xs mb-1">Toque para assistir</p>
                          <h3 className="text-white font-bold text-lg leading-tight">
                            A História da NP
                          </h3>
                        </div>
                      </div>

                      {/* Pause indicator when playing */}
                      {isPlaying && isHovered && <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Pause className="w-6 h-6 text-white" />
                          </div>
                        </div>}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-float" />
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float animation-delay-1000" />
                  
                  {/* Badge */}
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => <div key={index} className="card-premium bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/30 hover:bg-card/80 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Nossos{" "}
                <span className="text-gradient silver-shine-text">Valores</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os pilares que sustentam nossa excelência e guiam cada decisão.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => <div key={index} className={`card-premium bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center transition-all duration-700 hover:border-primary/30 hover:bg-card/80 group ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Mission Quote */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-primary/20 font-serif leading-none">
                  "
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light leading-relaxed italic">
                  Nossa missão é transformar a relação das empresas com a alimentação, 
                  entregando excelência, segurança e inovação em cada projeto.
                </p>
                <footer className="mt-8">
                  <cite className="text-primary font-semibold not-italic text-lg">
                    Equipe NP Consultoria
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