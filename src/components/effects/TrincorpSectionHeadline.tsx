import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type SectionHeadlineEffect =
  | "vertical-slice"
  | "focus-pull"
  | "outline-fill"
  | "elastic-width"
  | "hard-impact"
  | "chromatic-split";

export interface SectionHeadlineLine {
  content: ReactNode;
  effects?: SectionHeadlineEffect[];
  className?: string;
}

interface TrincorpSectionHeadlineProps {
  id?: string;
  label: string;
  lines: SectionHeadlineLine[];
  tone?: "light" | "dark";
  className?: string;
}

const TrincorpSectionHeadline = ({
  id,
  label,
  lines,
  tone = "light",
  className = "",
}: TrincorpSectionHeadlineProps) => {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: "0px 0px -10% 0px",
  });

  // Failsafe: never leave the headline stuck in its hidden/clipped pre-animation
  // state, even if the IntersectionObserver never fires (huge headline taller
  // than the viewport, reduced-motion quirks, tab restored in background, etc.).
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setForceVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const isVisible = inView || forceVisible;

  return (
    <h2
      ref={ref}
      id={id}
      className={`trincorp-section-headline is-${tone} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden>
        {lines.map(({ content, effects = [], className: lineClass = "" }, index) => {
          const effectClasses = effects.map((effect) => `effect-${effect}`).join(" ");
          const isVerticalSlice = effects.includes("vertical-slice");
          const isChromatic = effects.includes("chromatic-split");

          return (
            <span
              key={index}
              className={`trincorp-line-mask block overflow-hidden ${lineClass}`}
              style={{ "--section-line-delay": `${index * 130}ms` } as CSSProperties}
            >
              <span className={`trincorp-line ${effectClasses}`}>
                {isVerticalSlice ? (
                  <span className="trincorp-sliced-line">
                    <span className="trincorp-slice trincorp-slice-top">{content}</span>
                    <span className="trincorp-slice trincorp-slice-bottom">{content}</span>
                  </span>
                ) : (
                  <>
                    {isChromatic && (
                      <>
                        <span className="trincorp-chroma trincorp-chroma-rose">{content}</span>
                        <span className="trincorp-chroma trincorp-chroma-blue">{content}</span>
                      </>
                    )}
                    <span className="trincorp-line-main">{content}</span>
                  </>
                )}
              </span>
            </span>
          );
        })}
      </span>

      <style>{`
        .trincorp-section-headline {
          --section-ink: #1a1a1c;
          --section-cream: #f7f1eb;
          --section-rose: #d98f72;
          --section-blue: #71808a;
          --section-outline: #1a1a1c;
          --section-ease: cubic-bezier(.16, 1, .3, 1);
          color: var(--section-ink);
          font-family: Poppins, Inter, system-ui, sans-serif;
          font-size: clamp(2.35rem, 5.9vw, 6.6rem);
          font-weight: 720;
          letter-spacing: -.045em;
          line-height: .9;
          text-transform: uppercase;
          max-width: 100%;
        }

        .trincorp-section-headline.is-dark {
          --section-outline: #f7f1eb;
          color: var(--section-cream);
        }
        .trincorp-section-headline em {
          color: var(--section-rose);
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          letter-spacing: -.055em;
          text-transform: none;
        }

        /* Extra vertical breathing room so PT-BR accents (Ã, Ç, Ê, Á) are not
           clipped by the reveal mask's overflow: hidden. */
        .trincorp-line-mask { padding-block: .16em; margin-block: -.08em; }
        .trincorp-line {
          position: relative;
          display: block;
          width: fit-content;
          max-width: 100%;
          transform-origin: left center;
          will-change: transform, opacity, filter;
        }
        .trincorp-line-main {
          position: relative;
          z-index: 2;
          display: block;
          overflow-wrap: break-word;
        }

        .trincorp-line:not(.effect-vertical-slice) {
          opacity: 0;
          transform: translateY(108%);
        }
        .trincorp-section-headline.is-visible .trincorp-line:not(.effect-vertical-slice) {
          animation: sectionMaskReveal 1.05s var(--section-ease) var(--section-line-delay) both;
        }

        .trincorp-sliced-line {
          position: relative;
          display: block;
          min-height: .9em;
          min-width: 7em;
        }
        .trincorp-slice { position: absolute; inset: 0 auto auto 0; white-space: nowrap; opacity: 0; }
        .trincorp-slice-top { clip-path: inset(0 0 50% 0); transform: translateY(-.55em) skewX(-4deg); }
        .trincorp-slice-bottom { clip-path: inset(50% 0 0 0); transform: translateY(.55em) skewX(4deg); }
        .trincorp-section-headline.is-visible .trincorp-slice {
          animation: sectionVerticalSlice 1.1s var(--section-ease) var(--section-line-delay) both;
        }

        .effect-focus-pull { filter: blur(22px); }
        .trincorp-section-headline.is-visible .effect-focus-pull {
          animation-name: sectionFocusPull !important;
          animation-duration: 1.2s !important;
        }

        /* NOTE: the initial transform must NOT be !important. In CSS, !important
           author declarations beat @keyframes, so the reveal animation could never
           move the line and it stayed clipped inside the overflow:hidden mask
           ("transforma" invisible, "SUA OPERAÇÃO" stuck at scale 1.34).
           Specificity is raised with .trincorp-line instead. */
        .trincorp-line.effect-elastic-width { transform: translateY(108%) scaleX(.58); }
        .trincorp-section-headline.is-visible .effect-elastic-width {
          animation-name: sectionElasticWidth !important;
          animation-duration: 1.2s !important;
        }

        /* focus-pull + elastic-width on the SAME line: each effect alone forces
           its own animation-name, so the later rule (elastic) won and the blur
           from focus-pull was never animated away — the line stayed a smudge
           ("PRÁTICA E", "MERECE"). Use a merged keyframe when both are present. */
        .trincorp-line.effect-focus-pull.effect-elastic-width {
          filter: blur(22px);
          transform: translateY(108%) scaleX(.58);
        }
        .trincorp-section-headline.is-visible .effect-focus-pull.effect-elastic-width {
          animation-name: sectionFocusElastic !important;
          animation-duration: 1.25s !important;
        }

        .trincorp-line.effect-hard-impact { transform: translateY(0) scale(1.34) rotate(.6deg); }
        .trincorp-section-headline.is-visible .effect-hard-impact {
          animation-name: sectionHardImpact !important;
          animation-duration: .95s !important;
        }

        .effect-outline-fill .trincorp-line-main {
          color: transparent;
          -webkit-text-stroke: clamp(1px, 0.11em, 2.4px) var(--section-outline);
          background: linear-gradient(90deg, var(--section-rose) 0 48%, var(--section-outline) 48% 100%);
          background-clip: text;
          -webkit-background-clip: text;
          background-repeat: no-repeat;
          background-size: 0% 100%;
        }
        .effect-outline-fill .trincorp-line-main em {
          color: inherit;
          -webkit-text-stroke: inherit;
        }
        .trincorp-section-headline.is-visible .effect-outline-fill .trincorp-line-main {
          animation: sectionOutlineFill .92s var(--section-ease) calc(var(--section-line-delay) + 420ms) both;
        }

        .trincorp-chroma {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: block;
          opacity: 0;
          pointer-events: none;
        }
        .trincorp-chroma-rose { color: var(--section-rose); }
        .trincorp-chroma-blue { color: var(--section-blue); }
        .trincorp-section-headline.is-visible .trincorp-chroma-rose {
          animation: sectionChromaRose .64s steps(2, end) calc(var(--section-line-delay) + 180ms) both;
        }
        .trincorp-section-headline.is-visible .trincorp-chroma-blue {
          animation: sectionChromaBlue .64s steps(2, end) calc(var(--section-line-delay) + 180ms) both;
        }

        @keyframes sectionMaskReveal {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sectionVerticalSlice {
          0% { opacity: 0; }
          20% { opacity: 1; }
          72% { transform: translateY(.025em) skewX(0); }
          100% { opacity: 1; transform: translateY(0) skewX(0); }
        }
        @keyframes sectionFocusPull {
          0% { opacity: 0; filter: blur(22px); transform: translateY(48%) scale(1.06); }
          64% { opacity: 1; filter: blur(0); transform: translateY(0) scale(.988); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
        }
        @keyframes sectionElasticWidth {
          0% { opacity: 0; transform: translateY(108%) scaleX(.58); }
          68% { opacity: 1; transform: translateY(0) scaleX(1.04); }
          100% { opacity: 1; transform: translateY(0) scaleX(1); }
        }
        @keyframes sectionFocusElastic {
          0% { opacity: 0; filter: blur(22px); transform: translateY(108%) scaleX(.58); }
          66% { opacity: 1; filter: blur(0); transform: translateY(0) scaleX(1.04); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0) scaleX(1); }
        }
        @keyframes sectionHardImpact {
          0% { opacity: 0; transform: scale(1.34) rotate(.6deg); filter: blur(3px); }
          62% { opacity: 1; transform: scale(.975) rotate(0); filter: blur(0); }
          80% { transform: translateX(.018em) scale(1.006); }
          100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes sectionOutlineFill { to { background-size: 100% 100%; } }
        @keyframes sectionChromaRose {
          0%, 20% { opacity: .7; transform: translate(-.055em, .015em); }
          55% { opacity: .42; transform: translate(.025em, -.01em); }
          100% { opacity: 0; transform: translate(0); }
        }
        @keyframes sectionChromaBlue {
          0%, 20% { opacity: .7; transform: translate(.055em, -.015em); }
          55% { opacity: .42; transform: translate(-.025em, .01em); }
          100% { opacity: 0; transform: translate(0); }
        }

        @media (max-width: 640px) {
          .trincorp-section-headline {
            font-size: clamp(2rem, 10vw, 3.6rem);
            letter-spacing: -.038em;
            line-height: .95;
          }
          .trincorp-sliced-line { min-width: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .trincorp-section-headline *,
          .trincorp-section-headline *::before,
          .trincorp-section-headline *::after { animation: none !important; }
          .trincorp-line,
          .trincorp-slice { opacity: 1 !important; transform: none !important; filter: none !important; }
          .effect-outline-fill .trincorp-line-main { background-size: 100% 100%; }
          .trincorp-chroma { display: none; }
        }
      `}</style>
    </h2>
  );
};

export default TrincorpSectionHeadline;
