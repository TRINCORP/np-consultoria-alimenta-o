import type { CSSProperties, ReactNode } from "react";
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
    threshold: 0.18,
    triggerOnce: true,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <h2
      ref={ref}
      id={id}
      className={`trincorp-section-headline is-${tone} ${inView ? "is-visible" : ""} ${className}`}
    >
      <span className="sr-only">{label}</span>
      <span className="trincorp-visible-lines" aria-hidden>
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
                    <span className="trincorp-slice-base">{content}</span>
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
          font-size: clamp(2.65rem, 5.85vw, 6.9rem);
          font-weight: 700;
          letter-spacing: -.038em;
          line-height: .91;
          inline-size: 100%;
          max-inline-size: 100%;
          margin: 0;
          text-transform: uppercase;
          word-break: normal;
          overflow-wrap: normal;
          hyphens: none;
        }

        .trincorp-section-headline.is-dark {
          --section-outline: #f7f1eb;
          color: var(--section-cream);
        }
        .trincorp-section-headline em {
          color: var(--section-rose);
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          letter-spacing: -.025em;
          text-transform: none;
        }

        .trincorp-np-accent {
          display: inline-block;
          margin-inline-start: .16em;
          color: #f0b49d !important;
          -webkit-text-fill-color: #f0b49d !important;
          letter-spacing: -.01em;
        }

        .trincorp-persistent-accent {
          display: inline-block;
          color: var(--section-rose) !important;
          -webkit-text-fill-color: var(--section-rose) !important;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
          letter-spacing: -.025em;
          text-transform: none;
          opacity: 1 !important;
          visibility: visible !important;
        }

        .trincorp-visible-lines,
        .trincorp-line-mask {
          display: block;
          inline-size: 100%;
          max-inline-size: 100%;
        }
        .trincorp-line-mask {
          box-sizing: border-box;
          padding-block: .12em;
          margin-block: -.02em;
          overflow: visible;
        }
        .trincorp-line {
          position: relative;
          display: block;
          inline-size: fit-content;
          max-inline-size: 100%;
          transform-origin: left center;
          text-wrap: balance;
          white-space: normal;
          will-change: transform, opacity, filter;
        }
        .trincorp-line-main {
          position: relative;
          z-index: 2;
          display: block;
          max-inline-size: 100%;
        }

        .trincorp-line-mask.trincorp-persistent-line .trincorp-line {
          opacity: 1 !important;
          visibility: visible !important;
          transform: none !important;
          filter: none !important;
          animation: none !important;
        }

        .trincorp-line:not(.effect-vertical-slice) {
          opacity: .72;
          transform: translate3d(0, .18em, 0);
        }
        .trincorp-section-headline.is-visible .trincorp-line:not(.effect-vertical-slice) {
          animation: sectionMaskReveal 1.05s var(--section-ease) var(--section-line-delay) both;
        }

        .trincorp-sliced-line {
          position: relative;
          display: block;
          inline-size: fit-content;
          max-inline-size: 100%;
        }
        .trincorp-slice-base {
          position: relative;
          z-index: 1;
          display: block;
          opacity: .76;
          transform: translate3d(0, .08em, 0);
        }
        .trincorp-section-headline.is-visible .trincorp-slice-base {
          animation: sectionSliceBase 1s var(--section-ease) var(--section-line-delay) both;
        }
        .trincorp-slice {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: block;
          max-inline-size: 100%;
          white-space: normal;
          opacity: 0;
          pointer-events: none;
        }
        .trincorp-slice-top { clip-path: inset(0 0 50% 0); transform: translate3d(0, -.18em, 0) skewX(-3deg); }
        .trincorp-slice-bottom { clip-path: inset(50% 0 0 0); transform: translate3d(0, .18em, 0) skewX(3deg); }
        .trincorp-section-headline.is-visible .trincorp-slice {
          animation: sectionVerticalSlice 1.1s var(--section-ease) var(--section-line-delay) both;
        }

        .effect-focus-pull { filter: blur(8px); }
        .trincorp-section-headline.is-visible .effect-focus-pull {
          animation-name: sectionFocusPull !important;
          animation-duration: 1.2s !important;
        }

        .effect-elastic-width { transform: translate3d(0, .18em, 0) scaleX(.92) !important; }
        .trincorp-section-headline.is-visible .effect-elastic-width {
          animation-name: sectionElasticWidth !important;
          animation-duration: 1.2s !important;
        }
        .trincorp-section-headline.is-visible .effect-focus-pull.effect-elastic-width {
          animation-name: sectionFocusElastic !important;
        }

        .effect-hard-impact { transform: translate3d(0, .08em, 0) scale(.94) !important; }
        .trincorp-section-headline.is-visible .effect-hard-impact {
          animation-name: sectionHardImpact !important;
          animation-duration: .95s !important;
        }

        .effect-outline-fill .trincorp-line-main {
          color: var(--section-rose);
          -webkit-text-fill-color: var(--section-rose);
          -webkit-text-stroke: .35px var(--section-outline);
          text-shadow: 0 0 32px color-mix(in srgb, var(--section-rose) 18%, transparent);
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
          max-inline-size: 100%;
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
          from { opacity: .72; transform: translate3d(0, .18em, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); filter: none; }
        }
        @keyframes sectionSliceBase {
          from { opacity: .76; transform: translate3d(0, .08em, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes sectionVerticalSlice {
          0% { opacity: 0; }
          18% { opacity: .82; }
          70% { opacity: .34; transform: translate3d(0, .015em, 0) skewX(0); }
          100% { opacity: 0; transform: translate3d(0, 0, 0) skewX(0); }
        }
        @keyframes sectionFocusPull {
          0% { opacity: .62; filter: blur(8px); transform: translate3d(0, .16em, 0) scale(.985); }
          66% { opacity: 1; filter: blur(0); transform: translate3d(0, 0, 0) scale(.995); }
          100% { opacity: 1; filter: blur(0); transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes sectionElasticWidth {
          0% { opacity: .68; transform: translate3d(0, .18em, 0) scaleX(.92); }
          68% { opacity: 1; transform: translate3d(0, 0, 0) scaleX(1.01); }
          100% { opacity: 1; transform: translate3d(0, 0, 0) scaleX(1); }
        }
        @keyframes sectionFocusElastic {
          0% { opacity: .62; filter: blur(8px); transform: translate3d(0, .18em, 0) scaleX(.92); }
          68% { opacity: 1; filter: blur(0); transform: translate3d(0, 0, 0) scaleX(1.01); }
          100% { opacity: 1; filter: blur(0); transform: translate3d(0, 0, 0) scaleX(1); }
        }
        @keyframes sectionHardImpact {
          0% { opacity: .68; transform: translate3d(0, .08em, 0) scale(.94); filter: blur(2px); }
          64% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
          82% { transform: translate3d(.012em, 0, 0) scale(.998); }
          100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        }
        @keyframes sectionOutlineFill {
          0% { color: var(--section-outline); opacity: .72; -webkit-text-stroke-width: .75px; }
          100% { color: var(--section-rose); opacity: 1; -webkit-text-stroke-width: .35px; }
        }
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

        @media (max-width: 1024px) {
          .trincorp-section-headline {
            font-size: clamp(2.5rem, 7.2vw, 5.35rem);
            letter-spacing: -.032em;
            line-height: .92;
          }
        }

        @media (max-width: 640px) {
          .trincorp-section-headline {
            font-size: clamp(2.2rem, 10.6vw, 4.15rem);
            letter-spacing: -.022em;
            line-height: .95;
          }
          .trincorp-line-mask { padding-block: .14em; }
        }

        @media (prefers-reduced-motion: reduce) {
          .trincorp-section-headline *,
          .trincorp-section-headline *::before,
          .trincorp-section-headline *::after { animation: none !important; }
          .trincorp-line,
          .trincorp-slice-base { opacity: 1 !important; transform: none !important; filter: none !important; }
          .trincorp-slice { display: none !important; }
          .effect-outline-fill .trincorp-line-main { color: var(--section-rose) !important; opacity: 1 !important; }
          .trincorp-chroma { display: none; }
        }
      `}</style>
    </h2>
  );
};

export default TrincorpSectionHeadline;
