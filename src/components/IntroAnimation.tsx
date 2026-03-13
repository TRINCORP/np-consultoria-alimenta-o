import { useState, useEffect, useRef, useCallback } from "react";
import logoNP from "@/assets/logoNP.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"curtain" | "logo-enter" | "logo-settle" | "text-reveal" | "tagline" | "exit">("curtain");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    size: number; alpha: number;
    decay: number; life: number;
    hue: number;
  }

  const spawnParticles = useCallback((cx: number, cy: number, count: number) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 1 + Math.random() * 3;
      particlesRef.current.push({
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1 + Math.random() * 2.5,
        alpha: 0.6 + Math.random() * 0.4,
        decay: 0.008 + Math.random() * 0.012,
        life: 1,
        hue: 20 + Math.random() * 15,
      });
    }
  }, []);

  // Canvas particle animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ambientInterval = setInterval(() => {
      if (phase !== "exit") {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        spawnParticles(x, y, 2);
      }
    }, 200);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => {
        p.life -= p.decay;
        if (p.life <= 0) return false;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        const a = p.alpha * p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 35%, 70%, ${a})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 35%, 70%, ${a * 0.15})`;
        ctx.fill();

        return true;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(ambientInterval);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [phase, spawnParticles]);

  // Phase sequencing
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase("logo-enter"), 400));
    timers.push(setTimeout(() => {
      setPhase("logo-settle");
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      spawnParticles(cx, cy, 40);
    }, 1200));
    timers.push(setTimeout(() => setPhase("text-reveal"), 2000));
    timers.push(setTimeout(() => setPhase("tagline"), 2800));
    timers.push(setTimeout(() => setPhase("exit"), 4200));
    timers.push(setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 5200));

    return () => timers.forEach(clearTimeout);
  }, [onComplete, spawnParticles]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-1000 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: phase === "exit" ? "none" : "auto" }}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-[#1C2427]" />

      {/* Animated mesh blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute rounded-full blur-[80px] sm:blur-[120px] transition-all duration-[3000ms] ease-out ${
            phase === "curtain" ? "opacity-0 scale-50" : "opacity-30 scale-100"
          }`}
          style={{
            width: "60vw", height: "60vw",
            top: "-20%", right: "-15%",
            background: "radial-gradient(circle, hsl(210 15% 45% / 0.6), transparent 70%)",
          }}
        />
        <div
          className={`absolute rounded-full blur-[60px] sm:blur-[100px] transition-all duration-[3000ms] ease-out delay-300 ${
            phase === "curtain" ? "opacity-0 scale-50" : "opacity-25 scale-100"
          }`}
          style={{
            width: "45vw", height: "45vw",
            bottom: "-15%", left: "-10%",
            background: "radial-gradient(circle, hsl(20 35% 70% / 0.5), transparent 70%)",
          }}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[2] pointer-events-none" />

      {/* Horizontal accent lines */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none hidden sm:block">
        {[18, 35, 52, 68, 85].map((top, i) => (
          <div
            key={i}
            className={`absolute h-px transition-all ease-out ${
              phase !== "curtain" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: `${top}%`,
              left: 0, right: 0,
              background: "linear-gradient(90deg, transparent, hsl(20 35% 70% / 0.12), transparent)",
              transitionDuration: `${1500 + i * 200}ms`,
              transitionDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>

      {/* ═══ CENTER CONTENT ═══ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">

        {/* Logo */}
        <div
          className={`relative transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === "curtain"
              ? "opacity-0 scale-[0.3] blur-md"
              : phase === "logo-enter"
              ? "opacity-100 scale-[1.15] blur-0"
              : phase === "exit"
              ? "opacity-0 scale-[1.8] blur-xl"
              : "opacity-100 scale-100 blur-0"
          }`}
          style={{
            transitionDuration: phase === "logo-enter" ? "900ms" : phase === "exit" ? "1000ms" : "700ms",
            marginBottom: "1.5rem",
          }}
        >
          {/* Outer glow ring */}
          <div
            className={`absolute -inset-10 sm:-inset-16 rounded-full transition-opacity duration-[1500ms] ${
              phase === "logo-settle" || phase === "text-reveal" || phase === "tagline"
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              background: "radial-gradient(circle, hsl(20 35% 70% / 0.25) 0%, transparent 70%)",
              animation:
                phase !== "curtain" && phase !== "exit"
                  ? "introGlowPulse 3s ease-in-out infinite"
                  : "none",
            }}
          />

          {/* Logo image */}
          <div className="relative">
            <img
              src={logoNP}
              alt=""
              aria-hidden="true"
              className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain opacity-20 blur-2xl translate-y-4"
            />
            <img
              src={logoNP}
              alt="NP Consultoria"
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain"
              style={{
                filter: `
                  drop-shadow(0 0 30px hsl(20 35% 70% / 0.5))
                  drop-shadow(0 0 60px hsl(20 35% 70% / 0.25))
                `,
                animation:
                  phase !== "curtain" && phase !== "exit"
                    ? "introLogoFloat 5s ease-in-out infinite"
                    : "none",
              }}
            />

            {/* Shine sweep on logo */}
            <div
              className={`absolute inset-0 overflow-hidden rounded-full ${
                phase === "logo-settle" || phase === "text-reveal" ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                style={{
                  animation:
                    phase === "logo-settle" || phase === "text-reveal"
                      ? "introShineSweep 2.5s ease-in-out 0.3s"
                      : "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* Title: NP CONSULTORIA — stacked on mobile, inline on desktop */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 w-full ${
            phase === "exit" ? "opacity-0 translate-y-6 blur-sm" : ""
          }`}
        >
          {/* NP */}
          <div className="flex items-baseline gap-1 mb-0.5" style={{ lineHeight: 1.1 }}>
            {"NP".split("").map((char, i) => (
              <span
                key={`np-${i}`}
                className={`text-4xl sm:text-5xl md:text-7xl font-bold transition-all duration-700 ${
                  phase === "text-reveal" || phase === "tagline" || phase === "exit"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  fontFamily: "'Playfair Display', serif",
                  color: "#F4EAE7",
                  textShadow: "0 0 40px hsl(20 35% 70% / 0.3)",
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* CONSULTORIA */}
          <div className="flex items-baseline justify-center" style={{ lineHeight: 1.1 }}>
            {"CONSULTORIA".split("").map((char, i) => (
              <span
                key={`sub-${i}`}
                className={`text-lg sm:text-2xl md:text-4xl font-bold transition-all duration-600 tracking-[0.15em] sm:tracking-[0.2em] ${
                  phase === "text-reveal" || phase === "tagline" || phase === "exit"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${240 + i * 40}ms`,
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg, #E8D5CF, #6A7B83)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Separator line */}
          <div className="relative w-48 sm:w-64 md:w-80 h-px my-4 sm:my-5 overflow-hidden">
            <div
              className={`absolute inset-0 transition-transform duration-1000 origin-left ${
                phase === "text-reveal" || phase === "tagline" || phase === "exit"
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
              style={{
                transitionDelay: "700ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                background: "linear-gradient(90deg, transparent, hsl(20 35% 70% / 0.6), transparent)",
              }}
            />
            <div
              className={`absolute inset-0 blur-sm transition-transform duration-1000 origin-left ${
                phase === "text-reveal" || phase === "tagline" || phase === "exit"
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
              style={{
                transitionDelay: "750ms",
                background: "linear-gradient(90deg, transparent, hsl(20 35% 70% / 0.4), transparent)",
              }}
            />
            {/* Traveling spark */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                phase === "tagline" ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: "radial-gradient(circle, hsl(20 35% 70%), transparent)",
                boxShadow: "0 0 12px hsl(20 35% 70%), 0 0 24px hsl(20 35% 70% / 0.5)",
                animation: phase === "tagline" ? "introSparkTravel 2.2s ease-in-out infinite" : "none",
              }}
            />
          </div>

          {/* Tagline */}
          <div className="flex" style={{ lineHeight: 1.4 }}>
            {"ALIMENTAÇÃO".split("").map((char, i) => (
              <span
                key={`tag-${i}`}
                className={`text-[0.6rem] sm:text-xs md:text-sm font-light tracking-[0.25em] sm:tracking-[0.35em] uppercase transition-all duration-500 ${
                  phase === "tagline" || phase === "exit"
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-3 blur-[2px]"
                }`}
                style={{
                  transitionDelay: `${i * 50}ms`,
                  color: "hsl(20 35% 70% / 0.6)",
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents — hide on small mobile */}
      {[
        { pos: "top-4 left-4 sm:top-6 sm:left-6", border: "border-t border-l" },
        { pos: "top-4 right-4 sm:top-6 sm:right-6", border: "border-t border-r" },
        { pos: "bottom-4 left-4 sm:bottom-6 sm:left-6", border: "border-b border-l" },
        { pos: "bottom-4 right-4 sm:bottom-6 sm:right-6", border: "border-b border-r" },
      ].map(({ pos, border }, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-8 h-8 sm:w-12 sm:h-12 ${border} border-white/10 transition-opacity duration-1000 ${
            phase !== "curtain" ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: `${600 + i * 100}ms` }}
        />
      ))}

      {/* Scroll hint */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-opacity duration-700 ${
          phase === "tagline" ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        <span
          className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.25em] uppercase"
          style={{ color: "hsl(20 35% 70% / 0.35)" }}
        >
          NP Consultoria
        </span>
        <div
          className="w-px h-8 sm:h-10"
          style={{
            background: "linear-gradient(to bottom, hsl(20 35% 70% / 0.5), transparent)",
            animation: "introLinePulse 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes introLogoFloat {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
          80% { transform: translateY(-8px); }
        }

        @keyframes introGlowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }

        @keyframes introShineSweep {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        @keyframes introSparkTravel {
          0% { left: -2%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { left: 102%; opacity: 0; }
        }

        @keyframes introLinePulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
