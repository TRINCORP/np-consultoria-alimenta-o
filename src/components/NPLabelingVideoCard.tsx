import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Tag, CheckCircle, Award } from 'lucide-react';

const NPLabelingVideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const features = [
    { icon: Tag, text: "Tabelas Nutricionais" },
    { icon: CheckCircle, text: "Conformidade ANVISA" },
    { icon: Award, text: "Qualidade Garantida" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-floating"
            style={{
              top: `${15 + (i * 12)}%`,
              left: `${5 + (i * 11)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium tracking-wide">Descubra Nossa Expertise</span>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Conheça o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-light to-primary animate-gradient-shift bg-[length:200%_auto]">Processo</span>
              <br />de Rotulagem
            </h2>

            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              Veja como transformamos informações complexas em rótulos claros, precisos e que geram confiança para seus consumidores.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Card Side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-[3rem] blur-2xl animate-pulse opacity-60" />
              
              {/* Phone-style frame */}
              <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-[2.5rem] p-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] shadow-2xl">
                {/* Inner bezel */}
                <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-b from-[#333] to-[#222] p-1">
                  <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-black relative">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />
                    
                    {!showVideo ? (
                      /* Cover Card */
                      <div className="w-full h-full relative group cursor-pointer" onClick={handlePlayClick}>
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
                        
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,120,90,0.3),transparent_50%)]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(180,120,90,0.2),transparent_50%)]" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                          {/* Logo/Badge */}
                          <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                            <Tag className="w-8 h-8 text-white" />
                          </div>
                          
                          <h3 className="font-playfair text-xl text-white mb-2">NP Rotulagem</h3>
                          <p className="text-sm text-white/60 mb-8">Excelência em Rotulagem Nutricional</p>
                          
                          {/* Play button */}
                          <div className="relative">
                            {/* Pulse rings */}
                            <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                            <div className="absolute -inset-3 rounded-full border-2 border-primary/20 animate-pulse" />
                            <div className="absolute -inset-6 rounded-full border border-primary/10 animate-pulse animation-delay-500" />
                            
                            <button className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group-hover:shadow-primary/50">
                              <Play className="w-7 h-7 text-white ml-1" fill="white" />
                            </button>
                          </div>
                          
                          <p className="mt-8 text-xs text-white/40">Toque para assistir</p>
                        </div>
                        
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    ) : (
                      /* Video Player */
                      <div className="w-full h-full relative">
                        <video
                          ref={videoRef}
                          src="/videos/NP_rotulagem_video.mp4"
                          className="w-full h-full object-cover"
                          muted={isMuted}
                          loop
                          playsInline
                          onClick={togglePlay}
                        />
                        
                        {/* Controls overlay */}
                        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={togglePlay}
                              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              {isPlaying ? (
                                <Pause className="w-5 h-5 text-white" />
                              ) : (
                                <Play className="w-5 h-5 text-white ml-0.5" />
                              )}
                            </button>
                            
                            <button
                              onClick={toggleMute}
                              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              {isMuted ? (
                                <VolumeX className="w-5 h-5 text-white" />
                              ) : (
                                <Volume2 className="w-5 h-5 text-white" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        {/* Pause indicator */}
                        {!isPlaying && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer" onClick={togglePlay}>
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg animate-bounce-subtle">
                <span className="text-white text-sm font-medium">+500 Rótulos</span>
              </div>
              
              <div className="absolute -left-4 bottom-1/3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg animate-bounce-subtle animation-delay-500">
                <span className="text-white text-sm font-medium">ANVISA ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NPLabelingVideoCard;
