import { useState, useEffect } from "react";
import logoQuadrado from "@/assets/logo_np_quadrado.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 3200);
    const t2 = setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, 4000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      className="intro-root fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 38%, hsl(211 40% 26%) 0%, hsl(212 46% 13%) 68%)",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.04)" : "scale(1)",
        transition:
          "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 800ms cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Vinheta + textura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 45%, transparent 45%, hsl(212 50% 8% / 0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Card com a logo */}
      <div
        className="intro-card relative overflow-hidden"
        style={{
          background: "#F3F1EC",
          borderRadius: "1.6rem",
          padding: "clamp(1.4rem, 3vw, 2.2rem)",
          boxShadow:
            "0 44px 110px hsl(212 60% 4% / 0.5), 0 0 0 1px hsl(0 0% 100% / 0.06)",
        }}
      >
        <img
          src={logoQuadrado}
          alt="NP — Assessoria e Consultoria em Serviços de Alimentação"
          className="block object-contain"
          style={{ width: "clamp(210px, 42vw, 300px)", height: "auto" }}
        />
        {/* Brilho que varre o card */}
        <span className="intro-shine" aria-hidden="true" />
      </div>

      {/* Linha de acento */}
      <span className="intro-line" aria-hidden="true" />

      {/* Slogan de qualidade */}
      <div className="text-center px-6">
        <p
          className="intro-s1 font-playfair font-bold"
          style={{
            fontSize: "clamp(1.35rem, 3.4vw, 2.1rem)",
            color: "#FBF8F4",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Excelência técnica.
        </p>
        <p
          className="intro-s2 font-playfair italic"
          style={{
            fontSize: "clamp(1.35rem, 3.4vw, 2.1rem)",
            color: "hsl(20 45% 66%)",
            lineHeight: 1.25,
          }}
        >
          Confiança que alimenta.
        </p>
      </div>

      <style>{`
        .intro-root {
          --eo: cubic-bezier(0.22, 1, 0.36, 1);
          --es: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .intro-card { opacity: 0; transform: translateY(14px) scale(0.9); animation: introCard 1s var(--es) 0.15s both; }
        @keyframes introCard {
          from { opacity: 0; transform: translateY(14px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .intro-shine {
          position: absolute; top: -20%; left: 0;
          width: 55%; height: 140%;
          transform: translateX(-180%) skewX(-16deg);
          background: linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.55), transparent);
          animation: introShine 1.1s var(--eo) 0.85s both;
        }
        @keyframes introShine {
          from { transform: translateX(-180%) skewX(-16deg); }
          to   { transform: translateX(320%) skewX(-16deg); }
        }

        .intro-line {
          display: block; height: 2px; width: clamp(90px, 16vw, 150px);
          margin: clamp(1.5rem, 3vw, 2.2rem) 0 clamp(1.1rem, 2.4vw, 1.6rem);
          border-radius: 999px;
          background: linear-gradient(to right, transparent, hsl(20 45% 62%), transparent);
          transform: scaleX(0); animation: introLine 0.9s var(--eo) 1s both;
        }
        @keyframes introLine { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        .intro-s1 { opacity: 0; transform: translateY(16px); animation: introUp 0.85s var(--eo) 1.2s both; }
        .intro-s2 { opacity: 0; transform: translateY(16px); animation: introUp 0.85s var(--eo) 1.42s both; }
        @keyframes introUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        @media (prefers-reduced-motion: reduce) {
          .intro-card, .intro-line, .intro-s1, .intro-s2 {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .intro-shine { display: none; }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
