import { useState, useEffect } from "react";

/* Paleta oficial NP */
const CREAM = "#F6F1EC";
const INK = "#1F1F21";
const GREY = "#6E6E70";
const SALMON = "#E9B6A2";

interface IntroAnimationProps {
  onComplete?: () => void;
}

/**
 * Assinatura curta de entrada: preserva a lembrança de marca sem atrasar
 * o acesso ao conteúdo principal.
 */
const NAME = "NP";
const SUB = "Segurança que alimenta crescimento";

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 1850);
    const t2 = setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, 2350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      className="intro-root fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: CREAM,
        opacity: exiting ? 0 : 1,
        transition: "opacity 500ms cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Halo salmão sutil */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${SALMON}33 0%, transparent 55%)`,
          filter: "blur(20px)",
        }}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Nome principal — serif monumental, letra a letra */}
        <h1
          className="intro-name font-playfair"
          style={{
            fontSize: "clamp(6rem, 22vw, 14rem)",
            color: INK,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            fontWeight: 700,
            display: "flex",
            gap: "0.02em",
          }}
          aria-label="NP Consultoria Alimentação"
        >
          {NAME.split("").map((ch, i) => (
            <span
              key={i}
              className="intro-char"
              style={{ animationDelay: `${0.15 + i * 0.09}s` }}
            >
              {ch}
            </span>
          ))}
        </h1>

        {/* Linha salmão que assina */}
        <span
          aria-hidden
          className="intro-line block mt-6 h-[2px] rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${SALMON}, transparent)`,
            width: "clamp(120px, 20vw, 240px)",
          }}
        />

        {/* Subtítulo — reveal por mask, letra a letra */}
        <p
          className="intro-sub mt-6 uppercase font-semibold"
          style={{
            color: GREY,
            fontSize: "clamp(0.72rem, 1.4vw, 0.95rem)",
            letterSpacing: "0.42em",
          }}
          aria-hidden
        >
          {SUB.split("").map((ch, i) => (
            <span
              key={i}
              className="intro-sub-char"
              style={{ animationDelay: `${0.72 + i * 0.018}s` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </p>
      </div>

      <style>{`
        .intro-root { --eo: cubic-bezier(0.22, 1, 0.36, 1); }

        .intro-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(0.35em) rotate(4deg);
          filter: blur(10px);
          animation: charIn 1s var(--eo) both;
        }
        @keyframes charIn {
          to { opacity: 1; transform: translateY(0) rotate(0); filter: blur(0); }
        }

        .intro-line {
          transform: scaleX(0);
          transform-origin: center;
          animation: lineIn 0.9s var(--eo) 0.75s both;
        }
        @keyframes lineIn { to { transform: scaleX(1); } }

        .intro-sub-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(6px);
          animation: subIn 0.5s var(--eo) both;
        }
        @keyframes subIn {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-root *,
          .intro-root *::before,
          .intro-root *::after {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
