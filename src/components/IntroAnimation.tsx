import { useState, useEffect } from "react";
import logoNP from "@/assets/logoNP.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"in" | "hold" | "phrase" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"),   500);
    const t2 = setTimeout(() => setPhase("phrase"), 1300);
    const t3 = setTimeout(() => setPhase("out"),    3600);
    const t4 = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 4400);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  if (phase === "done") return null;

  const logoVisible   = phase === "hold" || phase === "phrase" || phase === "out";
  const phraseVisible = phase === "phrase" || phase === "out";
  const exiting       = phase === "out";

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "#D4CFC9",
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.06) 100%)",
        }}
      />

      {/* Logo */}
      <div
        style={{
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? "scale(1) translateY(0)" : "scale(0.82) translateY(16px)",
          transition: "opacity 900ms cubic-bezier(0.16,1,0.3,1), transform 900ms cubic-bezier(0.16,1,0.3,1)",
          filter: logoVisible ? "drop-shadow(0 8px 32px rgba(0,0,0,0.12))" : "none",
        }}
      >
        <img
          src={logoNP}
          alt="NP Consultoria"
          className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
        />
      </div>

      {/* Divider line */}
      <div
        className="relative overflow-hidden my-7"
        style={{ height: "1px", width: "120px" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, transparent, #9A8F86, transparent)",
            transform: phraseVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>

      {/* Eyebrow */}
      <p
        className="text-[10px] font-semibold tracking-[0.45em] uppercase mb-4"
        style={{
          color: "#7A726C",
          opacity: phraseVisible ? 1 : 0,
          transition: "opacity 600ms 100ms ease",
        }}
      >
        NP Consultoria
      </p>

      {/* Impactful phrase */}
      <div
        style={{
          opacity: phraseVisible ? 1 : 0,
          transform: phraseVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 800ms 200ms cubic-bezier(0.16,1,0.3,1), transform 800ms 200ms cubic-bezier(0.16,1,0.3,1)",
          textAlign: "center",
          padding: "0 1.5rem",
        }}
      >
        <p
          className="font-playfair font-bold"
          style={{
            fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
            color: "#2A211B",
            lineHeight: 1.25,
          }}
        >
          Alimentos seguros.
        </p>
        <p
          className="font-playfair italic"
          style={{
            fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
            color: "#7A5C4E",
            lineHeight: 1.25,
          }}
        >
          Negócios protegidos.
        </p>
      </div>

      <style>{`
        @keyframes intro-breathe {
          0%, 100% { opacity: 0.92; }
          50%      { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
