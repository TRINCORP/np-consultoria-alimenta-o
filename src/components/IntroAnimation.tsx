import { useState, useEffect } from "react";
import LOGO_URL from "@/assets/np_logo_oficial.png";

/* Paleta oficial da logo NP */
const GREY_DEEP = "#4B4B4D";
const GREY = "#6E6E70";
const SALMON = "#E9B6A2";
const SALMON_SOFT = "#F1CFC0";
const CREAM = "#F6F1EC";
const INK = "#2A2A2C";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 3600);
    const t2 = setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, 4400);
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
        background: CREAM,
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.02)" : "scale(1)",
        transition:
          "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Grid corporativo sutil */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(${GREY}12 1px, transparent 1px), linear-gradient(90deg, ${GREY}12 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, #000 30%, transparent 75%)",
        }}
      />
      {/* Halo salmão à esquerda / cinza à direita */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 18% 30%, ${SALMON}55 0%, transparent 55%), radial-gradient(circle at 82% 72%, ${GREY}22 0%, transparent 55%)`,
          filter: "blur(20px)",
        }}
      />
      {/* Textura */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Metadata topo esquerdo */}
      <div className="intro-meta absolute top-8 left-8 sm:top-10 sm:left-10 flex items-center gap-3">
        <span className="block h-px w-8" style={{ background: GREY }} />
        <span className="text-[10px] uppercase tracking-[0.32em] font-semibold" style={{ color: GREY_DEEP }}>
          NP · est. 2021
        </span>
      </div>
      {/* Metadata topo direito */}
      <div className="intro-meta absolute top-8 right-8 sm:top-10 sm:right-10 flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.32em] font-semibold" style={{ color: GREY_DEEP }}>
          Indaiatuba · SP
        </span>
        <span className="block h-px w-8" style={{ background: GREY }} />
      </div>

      {/* Cross-hair marks */}
      <div className="intro-mark absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 h-3 w-px" style={{ background: SALMON }} />
      <div className="intro-mark absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 h-3 w-px" style={{ background: SALMON }} />

      {/* Bloco central — logo com reveal por mask */}
      <div className="relative flex flex-col items-center px-6">
        {/* Etiqueta pré-logo */}
        <p
          className="intro-eyebrow uppercase text-[10px] sm:text-[11px] font-semibold tracking-[0.4em] mb-8"
          style={{ color: GREY }}
        >
          Assessoria &nbsp;·&nbsp; Consultoria &nbsp;·&nbsp; Alimentação
        </p>

        {/* Logo com máscara vertical (reveal debaixo para cima) */}
        <div className="intro-logo-wrap relative">
          <div className="intro-logo-mask">
            <img
              src={LOGO_URL}
              alt="NP — Assessoria e Consultoria em Serviços de Alimentação"
              className="block object-contain intro-logo-img"
              style={{ width: "clamp(240px, 44vw, 380px)", height: "auto" }}
            />
          </div>
          {/* Barra que "assina" a revelação */}
          <span className="intro-scan" aria-hidden="true" style={{ background: SALMON }} />
        </div>

        {/* Linhas de acento cruzadas */}
        <div className="mt-10 flex items-center gap-4">
          <span className="intro-hair block h-px" style={{ background: GREY, width: "clamp(70px, 12vw, 130px)" }} />
          <span
            className="intro-dot block h-2 w-2 rounded-full"
            style={{ background: SALMON, boxShadow: `0 0 0 6px ${SALMON}22` }}
          />
          <span className="intro-hair block h-px" style={{ background: GREY, width: "clamp(70px, 12vw, 130px)" }} />
        </div>

        {/* Slogan editorial */}
        <div className="text-center mt-8">
          <p
            className="intro-s1 font-playfair"
            style={{
              fontSize: "clamp(1.15rem, 2.6vw, 1.75rem)",
              color: INK,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              fontWeight: 500,
            }}
          >
            Excelência técnica,
            <em className="not-italic italic-serif" style={{ color: GREY_DEEP, fontStyle: "italic", fontWeight: 400 }}>
              {" "}confiança que alimenta.
            </em>
          </p>
        </div>
      </div>

      {/* Rodapé — barra de progresso */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="intro-progress relative h-[2px] w-40 overflow-hidden" style={{ background: `${GREY}33` }}>
          <span
            className="intro-progress-fill absolute inset-y-0 left-0"
            style={{ background: `linear-gradient(90deg, ${GREY_DEEP}, ${SALMON})` }}
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.4em] font-semibold" style={{ color: GREY }}>
          Carregando experiência
        </span>
      </div>

      <style>{`
        .intro-root {
          --eo: cubic-bezier(0.22, 1, 0.36, 1);
          --es: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Metadata dos cantos */
        .intro-meta { opacity: 0; animation: fadeIn 0.9s var(--eo) 0.2s both; }
        .intro-mark { transform: scaleY(0); transform-origin: center; animation: growV 0.7s var(--eo) 0.35s both; }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes growV { to { transform: scaleY(1); } }

        /* Eyebrow */
        .intro-eyebrow { opacity: 0; transform: translateY(8px); animation: rise 0.9s var(--eo) 0.35s both; }

        /* Logo — reveal por mask (debaixo para cima), com leve escala */
        .intro-logo-wrap { display: inline-block; }
        .intro-logo-mask {
          display: inline-block;
          clip-path: inset(0 0 100% 0);
          animation: logoWipe 1.1s var(--eo) 0.55s forwards;
        }
        .intro-logo-img {
          transform: translateY(28px) scale(0.98);
          filter: blur(6px);
          opacity: 0;
          animation: logoBloom 1.2s var(--eo) 0.6s forwards;
        }
        @keyframes logoWipe { to { clip-path: inset(0 0 0% 0); } }
        @keyframes logoBloom {
          to { transform: translateY(0) scale(1); filter: blur(0); opacity: 1; }
        }

        /* Barra scanline que assina a revelação */
        .intro-scan {
          position: absolute; left: 0; right: 0; height: 2px; top: 100%;
          transform: scaleX(0); transform-origin: left;
          animation: scanBar 1.15s var(--eo) 0.55s both, scanFade 0.5s ease-out 1.7s forwards;
          border-radius: 999px;
          box-shadow: 0 0 24px rgba(233, 182, 162, 0.7);
        }
        @keyframes scanBar {
          0%   { top: 100%; transform: scaleX(0); }
          40%  { top: 100%; transform: scaleX(1); }
          100% { top: 0%;   transform: scaleX(1); }
        }
        @keyframes scanFade { to { opacity: 0; } }

        /* Linhas + ponto */
        .intro-hair { transform: scaleX(0); transform-origin: center; animation: growH 0.9s var(--eo) 1.55s both; }
        .intro-dot  { opacity: 0; transform: scale(0.2); animation: pop 0.7s var(--es) 1.75s both; }
        @keyframes growH { to { transform: scaleX(1); } }
        @keyframes pop   { to { opacity: 1; transform: scale(1); } }

        /* Slogan */
        .intro-s1 { opacity: 0; transform: translateY(14px); animation: rise 0.9s var(--eo) 1.9s both; }
        @keyframes rise { to { opacity: 1; transform: translateY(0); } }

        /* Progresso */
        .intro-progress { opacity: 0; animation: fadeIn 0.6s var(--eo) 0.4s both; }
        .intro-progress-fill { width: 0%; animation: fill 2.9s var(--eo) 0.5s forwards; }
        @keyframes fill { to { width: 100%; } }

        @media (prefers-reduced-motion: reduce) {
          .intro-root *,
          .intro-root *::before,
          .intro-root *::after { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; clip-path: none !important; }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
