/* ─── CurvedMarquee ─────────────────────────────────────────────────────────
   Faixa curva animada inspirada no "IT'S A MATCH(A)" do More Nutrition.
   Arco dramático com faixa grossa e texto grande scrollando sobre o arco.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef } from "react";

const SEGMENT = "NP CONSULTORIA · SEGURANÇA ALIMENTAR · NP ROTULAGEM · BOAS PRÁTICAS · ";
const FULL_TEXT = SEGMENT.repeat(3);

/*
  viewBox: 1440 × 560
  BAND_PATH: arco dramático saindo dos cantos inferiores até o topo central
  TEXT_PATH: levemente abaixo do centro da faixa, dentro da área visível do arco
*/
const BAND_PATH = "M -200 590 C 300 10, 1140 10, 1640 590";
const TEXT_PATH = "M -200 590 C 300 78, 1140 78, 1640 590";

export default function CurvedMarquee() {
  const textPathRef = useRef<SVGTextPathElement>(null);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const SPEED = 0.022;
    const LOOP_AT = -33.33;

    const tick = () => {
      offsetRef.current -= SPEED;
      if (offsetRef.current <= LOOP_AT) offsetRef.current = 0;
      textPathRef.current?.setAttribute("startOffset", `${offsetRef.current}%`);
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      className="relative w-full pointer-events-none select-none"
      style={{ height: "clamp(190px, 22vw, 295px)", overflow: "hidden", marginTop: "-2px" }}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 560"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMin slice"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <path id="np-text-curve" d={TEXT_PATH} />
        </defs>

        {/* Faixa grossa — o arco escuro dramático */}
        <path
          d={BAND_PATH}
          fill="none"
          stroke="hsl(20, 30%, 22%)"
          strokeWidth="215"
          strokeLinecap="butt"
        />

        {/* Texto animado sobre o arco */}
        <text
          fill="hsl(20, 30%, 73%)"
          fontSize="52"
          fontWeight="800"
          letterSpacing="5"
          fontFamily="'Inter', sans-serif"
        >
          <textPath ref={textPathRef} href="#np-text-curve" startOffset="0%">
            {FULL_TEXT}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
