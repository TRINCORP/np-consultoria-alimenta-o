import { useInView } from "react-intersection-observer";
import { Play, Award, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { useState } from "react";

const AboutVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: Award, label: "Anos de Experiência", value: "15+" },
    { icon: Users, label: "Empresas Atendidas", value: "300+" },
    { icon: TrendingUp, label: "Projetos Concluídos", value: "2000+" },
    { icon: ShieldCheck, label: "Taxa de Satisfação", value: "98%" },
  ];

  return (
    <section 
      id="sobre"
      ref={sectionRef} 
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-float animation-delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Nossa História</span>
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Conheça a{" "}
            <span className="text-gradient silver-shine-text font-playfair italic">
              NP Consultoria
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de uma década transformando a qualidade alimentar em resultados 
            extraordinários para empresas de todo Brasil.
          </p>
        </div>

        {/* Video Container */}
        <div className={`relative max-w-5xl mx-auto mb-20 transition-all duration-1000 delay-200 ${
          sectionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10">
            {/* Video Gradient Overlay (when not playing) */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
            )}
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <div className="relative">
                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="absolute -inset-4 rounded-full bg-primary/20 animate-pulse" />
                  
                  {/* Play button */}
                  <div className="relative w-24 h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary shadow-lg shadow-primary/30">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
                
                {/* Video Title Overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-left">
                  <p className="text-white/80 text-sm font-medium mb-2">Assista ao vídeo</p>
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    A História por Trás da NP Consultoria
                  </h3>
                </div>
              </div>
            )}
            
            {/* Video Element */}
            <video 
              className="w-full aspect-video object-cover"
              controls={isPlaying}
              autoPlay={isPlaying}
              playsInline
              poster=""
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/about_NP.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl" />
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-2xl" />
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="card-premium bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/80">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 max-w-4xl mx-auto text-center transition-all duration-1000 delay-600 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <blockquote className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-primary/20 font-serif leading-none">
              "
            </div>
            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed italic">
              Nossa missão é transformar a relação das empresas com a alimentação, 
              entregando excelência, segurança e inovação em cada projeto.
            </p>
            <footer className="mt-6">
              <cite className="text-primary font-semibold not-italic">
                — Equipe NP Consultoria
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
