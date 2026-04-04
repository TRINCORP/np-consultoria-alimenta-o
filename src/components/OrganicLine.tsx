/* ─── OrganicLine ────────────────────────────────────────────────────────────
   Linha orgânica/curva SVG animada conforme scroll — como o More Nutrition usa
   para criar continuidade visual entre seções.

   Técnica: stroke-dashoffset driven por scroll position.
   A linha se "desenha" progressivamente conforme o usuário scrolla pela seção.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useLayoutEffect, useRef } from "react";

const PATHS = {
  /* Onda suave — entre seções */
  wave: {
    d: "M-18 30 C 90 5, 230 75, 370 40 C 510 5, 640 75, 800 38 C 960 2, 1110 70, 1270 40 C 1380 20, 1460 35, 1460 35",
    viewBox: "0 0 1440 80",
  },
  /* S-curve — usada dentro de seções com muito conteúdo */
  sCurve: {
    d: "M-56 495 C -27 513, 54 569, 87 532 C 133 480, 88 385, -15 308 C -118 231, -81 158, -24 128 C 93 76, 284 365, 399 290 C 540 207, 627 41, 822 37 C 901 35, 960 69, 1005 110",
    viewBox: "0 0 1050 600",
  },
  /* Arco leve — bridge entre seções */
  arch: {
    d: "M-20 5 C 87 120, 207 115, 300 111 C 435 106, 600 45, 720 80 C 840 115, 980 160, 1150 120 C 1280 90, 1400 40, 1460 15",
    viewBox: "0 0 1440 180",
  },
  /* Linha com curva pronunciada — bridge dramático */
  dramatic: {
    d: "M-19 5 C -14 64, 87 121, 207 115 C 301 110, 434 77, 500 60 C 639 -48, 622 218, 674 298 C 712 357, 839 189, 965 189 C 1021 189, 1172 216, 1258 287 C 1330 346, 1393 350, 1461 338",
    viewBox: "0 0 1440 362",
  },
} as const;

type PathVariant = keyof typeof PATHS;

interface OrganicLineProps {
  variant?: PathVariant;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  opacity?: number;
}

export default function OrganicLine({
  variant = "wave",
  stroke = "hsl(20, 30%, 68%)",
  strokeWidth = 2.5,
  className = "",
  opacity = 0.7,
}: OrganicLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  /* Inicializa dasharray após o mount */
  useLayoutEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    try {
      const len = el.getTotalLength();
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len); // começa escondido
    } catch {
      el.style.strokeDasharray = "9999";
      el.style.strokeDashoffset = "9999";
    }
  }, []);

  /* Scroll-driven: desenha a linha conforme o usuário scrolla */
  useEffect(() => {
    const el = pathRef.current;
    const wrapper = wrapperRef.current;
    if (!el || !wrapper) return;

    const update = () => {
      const len = parseFloat(el.style.strokeDasharray) || 9999;
      const rect = wrapper.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 quando o topo do elemento chega na base da viewport
      // 1 quando o rodapé do elemento sai pelo topo
      const progress = Math.min(1, Math.max(0,
        (windowH - rect.top) / (windowH + rect.height)
      ));
      el.style.strokeDashoffset = String(len * (1 - progress));
    };

    window.addEventListener("scroll", update, { passive: true });
    update(); // roda ao montar
    return () => window.removeEventListener("scroll", update);
  }, []);

  const { d, viewBox } = PATHS[variant];

  return (
    <div
      ref={wrapperRef}
      className={`w-full pointer-events-none select-none ${className}`}
      aria-hidden
      style={{ opacity }}
    >
      <svg
        viewBox={viewBox}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
