import { useState, useEffect } from "react";
import logoNP from "@/assets/logoNP.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"),  2600);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 3500);

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
        transition: exiting ? "opacity 900ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Subtle warm ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(20 35% 62% / 0.07), transparent)",
        }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-7">

        {/* Logo */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1) translateY(0)" : "scale(0.88) translateY(10px)",
            transition: "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            filter: "drop-shadow(0 0 32px hsl(20 35% 62% / 0.35))",
          }}
        >
          <img
            src={logoNP}
            alt="NP Consultoria"
            className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
          />
        </div>

        {/* Name + line */}
        <div className="flex flex-col items-center gap-4">

          {/* NP CONSULTORIA */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 700ms 120ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms 120ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="flex flex-col items-center gap-1"
          >
            <span
              className="font-playfair font-bold text-white tracking-[0.06em]"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
            >
              NP
            </span>
            <span
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.45em] uppercase text-[hsl(20_35%_62%)]"
            >
              Consultoria
            </span>
          </div>

          {/* Thin line */}
          <div
            style={{
              width: visible ? "80px" : "0px",
              transition: "width 800ms 300ms cubic-bezier(0.16, 1, 0.3, 1)",
              height: "1px",
              background: "linear-gradient(to right, transparent, hsl(20 35% 62% / 0.5), transparent)",
            }}
          />

          {/* Tagline */}
          <span
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 700ms 450ms ease",
              color: "hsl(20 35% 62% / 0.4)",
            }}
            className="text-[9px] sm:text-[10px] tracking-[0.5em] uppercase font-medium"
          >
            Alimentação
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
