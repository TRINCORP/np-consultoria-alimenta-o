import { useEffect, useState } from "react";
import logoNP from "@/assets/logoNP.png";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setExiting(true), 1280);
    const doneTimer = window.setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, 1740);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      className={`np-intro-v3 fixed inset-0 z-[9999] overflow-hidden bg-[#111214] ${exiting ? "is-exiting" : ""}`}
      aria-label="NP Consultoria Alimentar"
    >
      <div className="intro-panel intro-panel-top absolute inset-x-0 top-0 h-1/2 bg-[#111214]" />
      <div className="intro-panel intro-panel-bottom absolute inset-x-0 bottom-0 h-1/2 bg-[#111214]" />

      <div className="absolute inset-0 grid place-items-center px-6">
        <div className="intro-signature flex flex-col items-center">
          <div className="intro-emblem relative grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-white/[0.04] p-2.5 shadow-[0_30px_80px_-24px_rgba(231,169,143,.45)] sm:h-28 sm:w-28">
            <span className="intro-orbit absolute -inset-3 rounded-full border border-[#E7A98F]/35" />
            <img src={logoNP} alt="" className="h-full w-full rounded-full object-cover" />
          </div>

          <div className="mt-7 overflow-hidden">
            <p className="intro-name text-center text-[10px] font-bold uppercase tracking-[0.34em] text-[#F7F1EB] sm:text-xs">
              NP Consultoria Alimentar
            </p>
          </div>
          <span className="intro-rule mt-4 h-px w-36 bg-gradient-to-r from-transparent via-[#E7A98F] to-transparent" />
          <p className="intro-sub mt-4 text-[8px] font-semibold uppercase tracking-[0.28em] text-white/42 sm:text-[9px]">
            Segurança que alimenta crescimento
          </p>
        </div>
      </div>

      <style>{`
        .np-intro-v3 { transition: visibility 0s linear .46s; }
        .np-intro-v3 .intro-panel { z-index: 2; transition: transform .46s cubic-bezier(.76,0,.24,1); }
        .np-intro-v3.is-exiting .intro-panel-top { transform: translateY(-102%); }
        .np-intro-v3.is-exiting .intro-panel-bottom { transform: translateY(102%); }

        .np-intro-v3 .intro-signature { position: relative; z-index: 3; }
        .np-intro-v3.is-exiting .intro-signature {
          opacity: 0;
          transform: scale(.93);
          transition: opacity .18s ease, transform .3s ease;
        }

        .np-intro-v3 .intro-emblem {
          opacity: 0;
          transform: scale(.55) rotate(-14deg);
          filter: blur(10px);
          animation: npIntroEmblem .72s cubic-bezier(.16,1,.3,1) .06s both;
        }

        .np-intro-v3 .intro-orbit { animation: npIntroOrbit 7s linear infinite; }
        .np-intro-v3 .intro-orbit::after {
          content: '';
          position: absolute;
          left: 50%;
          top: -3px;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #e7a98f;
          box-shadow: 0 0 18px rgba(231,169,143,.75);
        }

        .np-intro-v3 .intro-name {
          transform: translateY(110%);
          animation: npIntroName .62s cubic-bezier(.16,1,.3,1) .4s both;
        }
        .np-intro-v3 .intro-rule { transform: scaleX(0); animation: npIntroRule .6s cubic-bezier(.16,1,.3,1) .62s both; }
        .np-intro-v3 .intro-sub { opacity: 0; filter: blur(8px); animation: npIntroSub .55s ease .72s both; }

        @keyframes npIntroEmblem { to { opacity: 1; transform: scale(1) rotate(0); filter: blur(0); } }
        @keyframes npIntroOrbit { to { transform: rotate(360deg); } }
        @keyframes npIntroName { to { transform: translateY(0); } }
        @keyframes npIntroRule { to { transform: scaleX(1); } }
        @keyframes npIntroSub { to { opacity: 1; filter: blur(0); } }

        @media (prefers-reduced-motion: reduce) {
          .np-intro-v3 *,
          .np-intro-v3 *::before,
          .np-intro-v3 *::after { animation: none !important; }
          .np-intro-v3 .intro-emblem,
          .np-intro-v3 .intro-name,
          .np-intro-v3 .intro-rule,
          .np-intro-v3 .intro-sub { opacity: 1; transform: none; filter: none; }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
