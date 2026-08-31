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
        font-size: clamp(3.65rem, 9.35vw, 10.6rem);
        font-weight: 750;
        letter-spacing: -.092em;
        line-height: .755;
        text-transform: uppercase;
      }

      .tk-line {
        position: relative;
        display: block;
        width: fit-content;
        white-space: nowrap;
        will-change: transform, filter, opacity;
      }

      .tk-vertical-slice {
        height: .82em;
        min-width: 6.9em;
      }

      .tk-slice {
        position: absolute;
        inset: 0 auto auto 0;
        display: block;
        opacity: 0;
      }

      .tk-slice-top {
        clip-path: inset(0 0 50% 0);
        transform: translate3d(0, -.58em, 0) skewX(-5deg);
      }

      .tk-slice-bottom {
        clip-path: inset(50% 0 0 0);
        transform: translate3d(0, .58em, 0) skewX(5deg);
      }

      .tk-headline.is-active .tk-slice {
        animation: tkVerticalSlice 1.05s var(--tk-ease) var(--tk-delay) both;
      }

      .tk-focus-pull {
        margin-left: clamp(1rem, 8.6vw, 9rem);
        padding-block: .08em .11em;
        opacity: 0;
        filter: blur(22px);
        transform: scaleX(.58) scale(1.08);
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
        color: transparent;
        -webkit-text-stroke: 1.4px rgba(247, 241, 235, .86);
        background: linear-gradient(90deg, var(--tk-rose) 0 52%, var(--tk-cream) 52% 100%);
        background-clip: text;
        -webkit-background-clip: text;
        background-repeat: no-repeat;
        background-size: 0% 100%;
      }

      .tk-headline.is-active .tk-outline-fill {
        animation: tkOutlineFill .9s var(--tk-ease) calc(var(--tk-delay) + .48s) both;
      }

      .tk-hard-impact {
        z-index: 2;
        margin-left: clamp(.2rem, 2.5vw, 2.8rem);
        opacity: 0;
        transform: scale(1.42) rotate(.7deg);
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
        18% { opacity: 1; }
        68% { transform: translate3d(0, .035em, 0) skewX(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) skewX(0); }
      }

      @keyframes tkFocusElastic {
        0% { opacity: 0; filter: blur(22px); transform: scaleX(.58) scale(1.08); }
        62% { opacity: 1; filter: blur(0); transform: scaleX(1.045) scale(1); }
        100% { opacity: 1; filter: blur(0); transform: scaleX(1) scale(1); }
      }

      @keyframes tkOutlineFill {
        0% { background-size: 0% 100%; }
        100% { background-size: 100% 100%; }
      }

      @keyframes tkHardImpact {
        0% { opacity: 0; transform: scale(1.42) rotate(.7deg); filter: blur(4px); }
        62% { opacity: 1; transform: scale(.975) rotate(0); filter: blur(0); }
        78% { transform: translateX(.025em) scale(1.008); }
        88% { transform: translateX(-.012em) scale(1); }
        100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
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

      @media (max-width: 640px) {
        .tk-headline {
          font-size: clamp(3.2rem, 17.2vw, 5.8rem);
          letter-spacing: -.082em;
          line-height: .78;
        }
        .tk-vertical-slice { min-width: 0; }
        .tk-focus-pull { margin-left: .5rem; }
        .tk-hard-impact { margin-left: 0; }
      }

      @media (prefers-reduced-motion: reduce) {
        .tk-headline *,
        .tk-headline *::before,
        .tk-headline *::after {
          animation: none !important;
        }
        .tk-slice { opacity: 1; transform: none; }
        .tk-focus-pull,
        .tk-hard-impact { opacity: 1; filter: none; transform: none; }
        .tk-outline-fill { background-size: 100% 100%; }
        .tk-chromatic-split::before,
        .tk-chromatic-split::after { display: none; }
      }
    `}</style>
  </h1>
);

export default TrincorpKineticHeadline;
