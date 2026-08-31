import type { CSSProperties } from "react";

interface TrincorpKineticHeadlineProps {
  active: boolean;
  className?: string;
}

const withDelay = (delay: string) =>
  ({ "--tk-delay": delay }) as CSSProperties;

/**
 * Biblioteca cinética TRINCORP aplicada à linguagem da NP.
 * A sequência combina Vertical Slice, Focus Pull, Outline Fill,
 * Elastic Width, Hard Impact e Chromatic Split em um único H1 acessível.
 */
const TrincorpKineticHeadline = ({
  active,
  className = "",
}: TrincorpKineticHeadlineProps) => (
  <h1
    id="hero-title"
    className={`tk-headline ${active ? "is-active" : ""} ${className}`}
  >
    <span className="sr-only">Segurança que alimenta crescimento.</span>

    <span
      className="tk-line tk-vertical-slice"
      style={withDelay("0.08s")}
      aria-hidden
    >
      <span className="tk-slice-base">SEGURANÇA</span>
      <span className="tk-slice tk-slice-top">SEGURANÇA</span>
      <span className="tk-slice tk-slice-bottom">SEGURANÇA</span>
    </span>

    <span
      className="tk-line tk-focus-pull tk-elastic-width"
      style={withDelay("0.34s")}
      aria-hidden
    >
      <span className="tk-quiet-word">QUE&nbsp;</span>
      <span className="tk-outline-fill">ALIMENTA</span>
    </span>

    <span
      className="tk-line tk-hard-impact tk-chromatic-split"
      data-text="CRESCIMENTO."
      style={withDelay("0.62s")}
      aria-hidden
    >
      <span>CRESCIMENTO.</span>
    </span>

    <style>{`
      .tk-headline {
        --tk-cream: #f7f1eb;
        --tk-rose: #e7a98f;
        --tk-blue: #71808a;
        --tk-ease: cubic-bezier(.16, 1, .3, 1);
        color: var(--tk-cream);
        font-family: Poppins, Inter, system-ui, sans-serif;
        font-size: clamp(3.35rem, 8.25vw, 9.4rem);
        font-weight: 720;
        letter-spacing: -.05em;
        line-height: .82;
        inline-size: 100%;
        max-inline-size: 100%;
        margin: 0;
        text-transform: uppercase;
        word-break: normal;
        overflow-wrap: normal;
        hyphens: none;
      }

      .tk-line {
        position: relative;
        display: block;
        inline-size: fit-content;
        max-inline-size: 100%;
        white-space: normal;
        text-wrap: balance;
        will-change: transform, filter, opacity;
      }

      .tk-vertical-slice {
        min-inline-size: 0;
      }

      .tk-slice-base {
        position: relative;
        z-index: 1;
        display: block;
        opacity: .8;
        transform: translate3d(0, .06em, 0);
      }

      .tk-headline.is-active .tk-slice-base {
        animation: tkSliceBase .95s var(--tk-ease) var(--tk-delay) both;
      }

      .tk-slice {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: block;
        opacity: 0;
        pointer-events: none;
      }

      .tk-slice-top {
        clip-path: inset(0 0 50% 0);
        transform: translate3d(0, -.18em, 0) skewX(-4deg);
      }

      .tk-slice-bottom {
        clip-path: inset(50% 0 0 0);
        transform: translate3d(0, .18em, 0) skewX(4deg);
      }

      .tk-headline.is-active .tk-slice {
        animation: tkVerticalSlice 1.05s var(--tk-ease) var(--tk-delay) both;
      }

      .tk-focus-pull {
        margin-left: clamp(.75rem, 7vw, 7rem);
        padding-block: .08em .11em;
        opacity: .68;
        filter: blur(8px);
        transform: translate3d(0, .12em, 0) scaleX(.92);
        transform-origin: left center;
      }

      .tk-headline.is-active .tk-focus-pull {
        animation: tkFocusElastic 1.25s var(--tk-ease) var(--tk-delay) both;
      }

      .tk-quiet-word {
        color: #9ca3a6;
        font-weight: 430;
      }

      .tk-outline-fill {
        color: var(--tk-rose);
        -webkit-text-stroke: .35px rgba(247, 241, 235, .86);
        text-shadow: 0 0 34px rgba(231, 169, 143, .18);
      }

      .tk-headline.is-active .tk-outline-fill {
        animation: tkOutlineFill .9s var(--tk-ease) calc(var(--tk-delay) + .48s) both;
      }

      .tk-hard-impact {
        z-index: 2;
        margin-left: clamp(.15rem, 1.7vw, 1.9rem);
        opacity: .72;
        transform: translate3d(0, .06em, 0) scale(.94);
        transform-origin: left center;
      }

      .tk-headline.is-active .tk-hard-impact {
        animation: tkHardImpact .92s cubic-bezier(.12, .82, .18, 1) var(--tk-delay) both;
      }

      .tk-chromatic-split::before,
      .tk-chromatic-split::after {
        position: absolute;
        inset: 0;
        z-index: -1;
        content: attr(data-text);
        pointer-events: none;
        opacity: 0;
      }

      .tk-chromatic-split::before { color: var(--tk-rose); }
      .tk-chromatic-split::after { color: #7c9da8; }

      .tk-headline.is-active .tk-chromatic-split::before {
        animation: tkChromaticRose .62s steps(2, end) calc(var(--tk-delay) + .16s) both;
      }

      .tk-headline.is-active .tk-chromatic-split::after {
        animation: tkChromaticBlue .62s steps(2, end) calc(var(--tk-delay) + .16s) both;
      }

      @keyframes tkVerticalSlice {
        0% { opacity: 0; }
        18% { opacity: .85; }
        68% { opacity: .32; transform: translate3d(0, .02em, 0) skewX(0); }
        100% { opacity: 0; transform: translate3d(0, 0, 0) skewX(0); }
      }

      @keyframes tkSliceBase {
        0% { opacity: .8; transform: translate3d(0, .06em, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); }
      }

      @keyframes tkFocusElastic {
        0% { opacity: .68; filter: blur(8px); transform: translate3d(0, .12em, 0) scaleX(.92); }
        64% { opacity: 1; filter: blur(0); transform: translate3d(0, 0, 0) scaleX(1.01); }
        100% { opacity: 1; filter: blur(0); transform: translate3d(0, 0, 0) scaleX(1); }
      }

      @keyframes tkOutlineFill {
        0% { color: var(--tk-cream); opacity: .72; -webkit-text-stroke-width: .8px; }
        100% { color: var(--tk-rose); opacity: 1; -webkit-text-stroke-width: .35px; }
      }

      @keyframes tkHardImpact {
        0% { opacity: .72; transform: translate3d(0, .06em, 0) scale(.94); filter: blur(2px); }
        64% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
        82% { transform: translate3d(.012em, 0, 0) scale(.998); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }

      @keyframes tkChromaticRose {
        0%, 18% { opacity: .78; transform: translate(-.075em, .018em); }
        42% { opacity: .52; transform: translate(.035em, -.01em); }
        72% { opacity: .3; transform: translate(-.015em, 0); }
        100% { opacity: 0; transform: translate(0); }
      }

      @keyframes tkChromaticBlue {
        0%, 18% { opacity: .78; transform: translate(.075em, -.018em); }
        42% { opacity: .52; transform: translate(-.035em, .01em); }
        72% { opacity: .3; transform: translate(.015em, 0); }
        100% { opacity: 0; transform: translate(0); }
      }

      @media (max-width: 1024px) {
        .tk-headline {
          font-size: clamp(3rem, 10vw, 7rem);
          letter-spacing: -.042em;
          line-height: .84;
        }
      }

      @media (max-width: 640px) {
        .tk-headline {
          font-size: clamp(2.7rem, 11.8vw, 4.8rem);
          letter-spacing: -.028em;
          line-height: .88;
        }
        .tk-focus-pull { margin-left: .35rem; }
        .tk-hard-impact { margin-left: 0; }
      }

      @media (prefers-reduced-motion: reduce) {
        .tk-headline *,
        .tk-headline *::before,
        .tk-headline *::after {
          animation: none !important;
        }
        .tk-slice-base { opacity: 1 !important; transform: none !important; }
        .tk-slice { display: none !important; }
        .tk-focus-pull,
        .tk-hard-impact { opacity: 1; filter: none; transform: none; }
        .tk-outline-fill { color: var(--tk-rose) !important; opacity: 1 !important; }
        .tk-chromatic-split::before,
        .tk-chromatic-split::after { display: none; }
      }
    `}</style>
  </h1>
);

export default TrincorpKineticHeadline;
