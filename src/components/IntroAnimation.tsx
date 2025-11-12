import { useState, useEffect } from "react";
import logoNP from "@/assets/logoNP.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"enter" | "show" | "exit">("enter");

  useEffect(() => {
    // Fase 1: Entrada (0-1s)
    const enterTimer = setTimeout(() => {
      setPhase("show");
    }, 100);

    // Fase 2: Exibição (1-3s)
    const showTimer = setTimeout(() => {
      setPhase("exit");
    }, 3000);

    // Fase 3: Saída (3-4s)
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)",
      }}
    >
      {/* Grid de fundo animado */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Partículas de luz flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/30 blur-xl"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Efeito de luz central */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Container principal do logo e texto */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo com animações */}
        <div
          className={`relative transition-all duration-1000 ${
            phase === "enter"
              ? "opacity-0 scale-50 blur-lg"
              : phase === "show"
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-125 blur-lg"
          }`}
        >
          {/* Glow effect atrás do logo */}
          <div
            className="absolute -inset-8 rounded-full blur-3xl animate-pulse"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
            }}
          />

          {/* Logo */}
          <img
            src={logoNP}
            alt="NP Consultoria"
            className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.6))",
            }}
          />

          {/* Ring animado ao redor do logo */}
          <div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            style={{
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Texto principal */}
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-300 ${
            phase === "enter"
              ? "opacity-0 translate-y-10"
              : phase === "show"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          {/* Nome da empresa */}
          <h1
            className="text-4xl md:text-6xl font-bold text-center tracking-tight"
            style={{
              background: "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--primary)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px hsl(var(--primary) / 0.3)",
            }}
          >
            NP Consultoria
          </h1>

          {/* Linha decorativa */}
          <div className="relative w-64 h-px bg-gradient-to-r from-transparent via-primary to-transparent">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
              style={{
                animation: "shimmer 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Subtítulo */}
          <p
            className="text-lg md:text-xl text-muted-foreground font-light tracking-widest uppercase"
            style={{
              textShadow: "0 2px 10px hsl(var(--background) / 0.5)",
            }}
          >
            Alimentação
          </p>
        </div>

        {/* Efeito de brilho passando */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)",
            animation: "shine 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Estilos de animação customizados */}
      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
