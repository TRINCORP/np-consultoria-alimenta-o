import { useState, useEffect } from "react";
import logoNP from "@/assets/logoNP.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("out"),  2400);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 3200);

    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete]);

  if (phase === "done") return null;

  const visible = phase === "hold";
  const exiting = phase === "out";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1C1A18]"
      style={{
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Warm ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 50%, hsl(20 35% 62% / 0.12), transparent 70%)",
        }}
      />

      {/* Center: logo with elegant rotating loader ring */}
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring (gold sweep) */}
        <svg
          className="absolute"
          width="240"
          height="240"
          viewBox="0 0 240 240"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 600ms ease",
            animation: "intro-spin 2.4s linear infinite",
          }}
        >
          <defs>
            <linearGradient id="introRing" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(20 45% 68%)" stopOpacity="0" />
              <stop offset="100%" stopColor="hsl(20 45% 68%)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <circle
            cx="120"
            cy="120"
            r="110"
            fill="none"
            stroke="url(#introRing)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="180 520"
          />
        </svg>

        {/* Static thin ring */}
        <div
          className="absolute rounded-full border border-white/10"
          style={{
            width: 240,
            height: 240,
            opacity: visible ? 1 : 0,
            transition: "opacity 700ms ease",
          }}
        />

        {/* Soft inner glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, hsl(20 45% 65% / 0.35), transparent 70%)",
            filter: "blur(20px)",
            opacity: visible ? 1 : 0,
            transition: "opacity 900ms ease",
          }}
        />

        {/* Logo */}
        <img
          src={logoNP}
          alt="NP Consultoria"
          className="relative w-32 h-32 sm:w-40 sm:h-40 object-contain"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.85)",
            transition:
              "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
            filter: "drop-shadow(0 0 40px hsl(20 45% 65% / 0.55))",
            animation: visible ? "intro-breathe 3s ease-in-out infinite" : "none",
          }}
        />
      </div>

      <style>{`
        @keyframes intro-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes intro-breathe {
          0%, 100% { filter: drop-shadow(0 0 30px hsl(20 45% 65% / 0.45)); }
          50%      { filter: drop-shadow(0 0 55px hsl(20 45% 70% / 0.7)); }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
