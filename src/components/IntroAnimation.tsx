import { useState, useEffect, useCallback } from "react";
import logoNP from "@/assets/logoNP.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"initial" | "logo" | "reveal" | "text" | "exit">("initial");

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Phase 1: Initial curtain (0-0.5s)
    timers.push(setTimeout(() => setPhase("logo"), 300));
    
    // Phase 2: Logo reveal (0.5-1.5s)
    timers.push(setTimeout(() => setPhase("reveal"), 800));
    
    // Phase 3: Text appears (1.5-2.5s)
    timers.push(setTimeout(() => setPhase("text"), 1800));
    
    // Phase 4: Exit animation (3.5-4.5s)
    timers.push(setTimeout(() => setPhase("exit"), 3500));
    
    // Complete
    timers.push(setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 4500));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!isVisible) return null;

  const letters = "NPCONSULTORIA".split("");
  const tagline = "ALIMENTAÇÃO".split("");

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${
        phase === "exit" ? "animate-fade-out" : ""
      }`}
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute -top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full blur-[120px] transition-all duration-[2000ms] ${
            phase === "initial" ? "opacity-0 scale-50" : "opacity-40 scale-100"
          }`}
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.6), transparent 70%)" }}
        />
        <div 
          className={`absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full blur-[100px] transition-all duration-[2000ms] delay-300 ${
            phase === "initial" ? "opacity-0 scale-50" : "opacity-30 scale-100"
          }`}
          style={{ background: "radial-gradient(circle, hsl(var(--primary-glow) / 0.5), transparent 70%)" }}
        />
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full blur-[80px] transition-all duration-[2500ms] delay-500 ${
            phase === "initial" ? "opacity-0 scale-0" : "opacity-50 scale-100"
          }`}
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 60%)" }}
        />
      </div>

      {/* Geometric patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${
              phase !== "initial" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: `${20 + i * 15}%`,
              left: "-100%",
              right: "-100%",
              animation: phase !== "initial" ? `slide-line ${3 + i * 0.5}s ease-in-out infinite` : "none",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              phase !== "initial" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(var(--primary) / ${0.3 + Math.random() * 0.4})`,
              animation: `float-particle ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: `0 0 ${10 + Math.random() * 10}px hsl(var(--primary) / 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Center content container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Logo container with advanced effects */}
        <div className={`relative mb-8 transition-all duration-1000 ${
          phase === "initial" ? "opacity-0 scale-0 rotate-180" :
          phase === "logo" ? "opacity-100 scale-100 rotate-0" :
          phase === "exit" ? "opacity-0 scale-150 blur-lg" : "opacity-100 scale-100"
        }`}>
          
          {/* Orbital rings */}
          <div className="absolute inset-0 -m-16">
            <div 
              className={`absolute inset-0 rounded-full border border-primary/20 transition-all duration-1000 ${
                phase !== "initial" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
              }`}
              style={{ animation: phase !== "initial" ? "orbit-1 8s linear infinite" : "none" }}
            />
            <div 
              className={`absolute inset-2 rounded-full border border-primary/15 transition-all duration-1000 delay-200 ${
                phase !== "initial" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
              style={{ animation: phase !== "initial" ? "orbit-2 12s linear infinite reverse" : "none" }}
            />
            <div 
              className={`absolute inset-4 rounded-full border border-primary/10 transition-all duration-1000 delay-400 ${
                phase !== "initial" ? "opacity-100" : "opacity-0"
              }`}
              style={{ animation: phase !== "initial" ? "orbit-1 16s linear infinite" : "none" }}
            />
          </div>

          {/* Pulsing glow backdrop */}
          <div 
            className={`absolute -inset-12 rounded-full blur-3xl transition-all duration-1000 ${
              phase !== "initial" ? "opacity-60" : "opacity-0"
            }`}
            style={{ 
              background: "radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, transparent 70%)",
              animation: phase !== "initial" ? "pulse-glow-intense 2s ease-in-out infinite" : "none"
            }}
          />

          {/* Secondary glow */}
          <div 
            className={`absolute -inset-8 rounded-full blur-2xl transition-all duration-1000 delay-300 ${
              phase !== "initial" ? "opacity-40" : "opacity-0"
            }`}
            style={{ 
              background: "radial-gradient(circle, hsl(var(--primary-glow) / 0.6) 0%, transparent 60%)",
              animation: phase !== "initial" ? "pulse-glow-soft 3s ease-in-out infinite 0.5s" : "none"
            }}
          />

          {/* Logo with 3D effect */}
          <div className="relative">
            {/* Shadow layer */}
            <img
              src={logoNP}
              alt=""
              aria-hidden="true"
              className="absolute w-36 h-36 md:w-48 md:h-48 object-contain opacity-20 blur-xl translate-y-4"
            />
            
            {/* Main logo */}
            <img
              src={logoNP}
              alt="NP Consultoria"
              className="relative w-36 h-36 md:w-48 md:h-48 object-contain"
              style={{
                filter: `
                  drop-shadow(0 0 20px hsl(var(--primary) / 0.6))
                  drop-shadow(0 0 40px hsl(var(--primary) / 0.4))
                  drop-shadow(0 0 60px hsl(var(--primary) / 0.2))
                `,
                animation: phase !== "initial" ? "logo-float 4s ease-in-out infinite" : "none"
              }}
            />

            {/* Shine sweep effect */}
            <div 
              className={`absolute inset-0 overflow-hidden rounded-full ${
                phase === "reveal" || phase === "text" ? "opacity-100" : "opacity-0"
              }`}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                style={{
                  animation: phase === "reveal" || phase === "text" ? "shine-sweep 2s ease-in-out infinite" : "none",
                }}
              />
            </div>
          </div>

          {/* Orbiting dots */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-primary transition-opacity duration-500 ${
                phase !== "initial" ? "opacity-100" : "opacity-0"
              }`}
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: `0 ${80 + i * 20}px`,
                animation: phase !== "initial" ? `orbit-dot ${4 + i * 2}s linear infinite` : "none",
                animationDelay: `${i * 0.5}s`,
                boxShadow: `0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)`,
              }}
            />
          ))}
        </div>

        {/* Text reveal section */}
        <div className={`flex flex-col items-center gap-4 transition-all duration-1000 ${
          phase === "exit" ? "opacity-0 translate-y-10 blur-sm" : ""
        }`}>
          
          {/* Main title with letter-by-letter reveal - Safe container */}
          <h1 className="flex py-2" style={{ lineHeight: 1.3 }}>
            {letters.slice(0, 2).map((letter, i) => (
              <span
                key={i}
                className={`text-4xl md:text-6xl font-bold py-1 transition-all duration-500 ${
                  phase === "text" || phase === "exit" 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-full"
                }`}
                style={{ 
                  transitionDelay: `${i * 60}ms`,
                  background: "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--primary)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.3,
                }}
              >
                {letter}
              </span>
            ))}
            <span className="mx-2" />
            {letters.slice(2).map((letter, i) => (
              <span
                key={i + 2}
                className={`text-4xl md:text-6xl font-bold py-1 transition-all duration-500 ${
                  phase === "text" || phase === "exit" 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-full"
                }`}
                style={{ 
                  transitionDelay: `${(i + 2) * 60 + 100}ms`,
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--foreground)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.3,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          {/* Animated separator line */}
          <div className="relative w-80 h-px overflow-hidden">
            <div 
              className={`absolute inset-0 transition-all duration-1000 ${
                phase === "text" || phase === "exit" ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ 
                transitionDelay: "800ms",
                background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
              }}
            />
            <div 
              className={`absolute inset-0 transition-all duration-1000 ${
                phase === "text" || phase === "exit" ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                transitionDelay: "1000ms",
                background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
                filter: "blur(4px)",
              }}
            />
            {/* Moving sparkle on line */}
            <div 
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                phase === "text" ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: "radial-gradient(circle, hsl(var(--primary)), transparent)",
                boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))",
                animation: phase === "text" ? "sparkle-move 2s ease-in-out infinite" : "none",
              }}
            />
          </div>

          {/* Tagline with stagger effect - Safe container */}
          <div className="flex py-2" style={{ lineHeight: 1.4 }}>
            {tagline.map((letter, i) => (
              <span
                key={i}
                className={`text-sm md:text-lg font-light tracking-[0.3em] uppercase text-muted-foreground py-1 transition-all duration-500 ${
                  phase === "text" || phase === "exit" 
                    ? "opacity-100 translate-y-0 blur-0" 
                    : "opacity-0 translate-y-4 blur-sm"
                }`}
                style={{ transitionDelay: `${900 + i * 40}ms`, lineHeight: 1.4 }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-8 left-8 w-20 h-20 transition-all duration-1000 ${
        phase !== "initial" ? "opacity-100" : "opacity-0"
      }`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
      <div className={`absolute top-8 right-8 w-20 h-20 transition-all duration-1000 delay-100 ${
        phase !== "initial" ? "opacity-100" : "opacity-0"
      }`}>
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-primary/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
      <div className={`absolute bottom-8 left-8 w-20 h-20 transition-all duration-1000 delay-200 ${
        phase !== "initial" ? "opacity-100" : "opacity-0"
      }`}>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-primary/50 to-transparent" />
      </div>
      <div className={`absolute bottom-8 right-8 w-20 h-20 transition-all duration-1000 delay-300 ${
        phase !== "initial" ? "opacity-100" : "opacity-0"
      }`}>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-primary/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes orbit-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbit-2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes orbit-dot {
          from { transform: rotate(0deg) translateX(0); }
          to { transform: rotate(360deg) translateX(0); }
        }
        
        @keyframes pulse-glow-intense {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes pulse-glow-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
        
        @keyframes logo-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-4px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes shine-sweep {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes slide-line {
          0%, 100% { transform: translateX(-50%); opacity: 0.3; }
          50% { transform: translateX(50%); opacity: 0.6; }
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-30px) translateX(10px); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-20px) translateX(-15px); 
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-40px) translateX(5px); 
            opacity: 0.9;
          }
        }
        
        @keyframes sparkle-move {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        
        .animate-fade-out {
          animation: intro-fade-out 1s ease-out forwards;
        }
        
        @keyframes intro-fade-out {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
