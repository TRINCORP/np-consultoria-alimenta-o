import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import fotoInspecao from "@/assets/food-services/foto1-inspecao.png";
import fotoEstoque from "@/assets/food-services/foto2-estoque.png";
import fotoEquipe from "@/assets/food-services/foto3-equipe.png";
import fotoTemperatura from "@/assets/food-services/foto4-temperatura.png";

const FoodServicesMural = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="bg-[#1a1a1a] py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <span
            className={`inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium tracking-wider uppercase mb-5 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nosso Dia a Dia
          </span>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A NP em <span className="text-gradient italic">Ação</span>
          </h2>
        </div>

        {/* ── BENTO GRID MURAL ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px] gap-3 sm:gap-4">

          {/* Video — large, spans 2 cols + 2 rows */}
          <div
            className={`relative col-span-2 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/videos/np-atendimento.mp4"
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              poster=""
            />
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} />

            {/* Play/Pause overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                {isPlaying ? (
                  <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="white" />
                ) : (
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1" fill="white" />
                )}
              </div>
            </div>

            {/* Mute button */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/60 transition-all duration-200 z-10"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              )}
            </button>

            {/* Label */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-[10px] sm:text-xs font-medium tracking-wide">
                ▶ Conheça a NP
              </span>
            </div>
          </div>

          {/* Foto equipe — tall vertical on right */}
          <div
            className={`relative col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden group transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <img
              src={fotoEquipe}
              alt="Equipe NP analisando documentos"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <p className="text-white font-semibold text-sm sm:text-base">Análise Documental</p>
              <p className="text-white/60 text-xs sm:text-sm">Equipe técnica em campo</p>
            </div>
          </div>

          {/* Foto inspeção — wide bottom-left */}
          <div
            className={`relative col-span-1 row-span-1 rounded-2xl overflow-hidden group transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <img
              src={fotoInspecao}
              alt="Inspeção de qualidade NP"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent" />
            <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-white/90 text-[10px] sm:text-xs font-medium">
              Inspeção
            </span>
          </div>

          {/* Foto estoque */}
          <div
            className={`relative col-span-1 row-span-1 rounded-2xl overflow-hidden group transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <img
              src={fotoEstoque}
              alt="Controle de estoque NP"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent" />
            <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-white/90 text-[10px] sm:text-xs font-medium">
              Estoque
            </span>
          </div>

          {/* Foto temperatura — wide */}
          <div
            className={`relative col-span-2 row-span-1 rounded-2xl overflow-hidden group transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <img
              src={fotoTemperatura}
              alt="Controle de temperatura NP"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-[10px] sm:text-xs font-medium">
                Monitoramento de Temperatura
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoodServicesMural;
