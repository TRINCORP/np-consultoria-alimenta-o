import React from "react";
import { useInView } from "react-intersection-observer";
import npLogo from "@/assets/logo-np-circle.png";
import gorilasLogo from "@/assets/gorilas.png";
import graoParaLogo from "@/assets/grao_para.png";
import stagioneLogo from "@/assets/stagione.png";
import staldenLogo from "@/assets/stalden_np.png";
import TrincorpSectionHeadline from "@/components/effects/TrincorpSectionHeadline";

type Client = { id: number; name: string; image: string };

const clients: Client[] = [
  { id: 1,  name: "Driblix Pizzaria",        image: "/fotos_clientes/driblix.png" },
  { id: 2,  name: "Padaria Gianini",         image: "/fotos_clientes/gianini.png" },
  { id: 3,  name: "Benedito",                image: "/fotos_clientes/benedito.png" },
  { id: 4,  name: "Della Torre Restaurante", image: "/fotos_clientes/dellatorre.png" },
  { id: 5,  name: "Pastelaria Pereira",      image: "/fotos_clientes/pereira.png" },
  { id: 6,  name: "Summer Gastro Bar",       image: "/fotos_clientes/summer.png" },
  { id: 7,  name: "Azeite Restaurante",      image: "/fotos_clientes/azeite.png" },
  { id: 8,  name: "Fabi Back",               image: "/fotos_clientes/fabi.png" },
  { id: 9,  name: "Gerbelli Doceria",        image: "/fotos_clientes/gerbelli.png" },
  { id: 10, name: "Mosteiro de Itaici",      image: "/fotos_clientes/jesuita.png" },
  { id: 11, name: "Na Rua",                  image: "/fotos_clientes/narua.png" },
  { id: 12, name: "Gorilas Bee",             image: gorilasLogo },
  { id: 13, name: "Grão Pará Restaurante",   image: graoParaLogo },
  { id: 14, name: "Stagione",                image: stagioneLogo },
  { id: 15, name: "Stalden Café e Chocolate",image: staldenLogo },
];

/* Divide clients into 2 non-overlapping groups for the rows */
const half = Math.ceil(clients.length / 2);
const rowA = clients.slice(0, half);
const rowB = clients.slice(half).reverse();

/* Curated light tile background palette so all logos render naturally */
const tileBgs = [
  "#FFFFFF", "#F5E9DA", "#FAF3E7", "#E8C9A8",
  "#EDE3D2", "#F2D7C2", "#E5DACB", "#FBF6EC",
];

const LogoRow = ({
  items,
  reverse = false,
  duration = 60,
  offsetIndex = 0,
}: {
  items: Client[];
  reverse?: boolean;
  duration?: number;
  offsetIndex?: number;
}) => (
  <div className="np-client-row-shell overflow-hidden">
    <div
      className="np-client-logo-row flex gap-3 sm:gap-4"
      style={{
        animation: `${reverse ? "marqueeReverse" : "marqueeForward"} ${duration}s linear infinite`,
        width: "max-content",
      }}
    >
      {[...items, ...items, ...items].map((client, i) => {
        const bg = tileBgs[(client.id + offsetIndex + i) % tileBgs.length];
        return (
          <div
            key={`${client.id}-${i}`}
            className="relative h-24 w-28 shrink-0 rounded-[1.25rem] p-4 sm:h-32 sm:w-40 sm:p-5 lg:h-36 lg:w-44
              flex items-center justify-center
              shadow-[0_8px_28px_rgba(0,0,0,0.35)]
              transition-transform duration-500 hover:scale-[1.04]"
            style={{ backgroundColor: bg }}
          >
            {/* Country tag */}
            <span
              className="absolute top-1.5 right-2 text-[9px] font-semibold tracking-[0.2em] text-black/45"
            >
              BR
            </span>
            <img
              src={client.image}
              alt={client.name}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        );
      })}
    </div>
  </div>
);

const ClientsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="clients" className="relative overflow-hidden bg-[#0B0B0C] py-20 sm:py-24 lg:py-32">
      {/* Ambient warm glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(20 35% 30% / 0.25), transparent 60%)" }} />

      {/* ── Header ── */}
      <div ref={ref} className="relative mx-auto mb-12 max-w-[1540px] px-5 sm:mb-16 sm:px-8 lg:px-12">
        <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
          text-[hsl(20_45%_68%)] mb-5
          transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          Parceiros de confiança
        </span>
        <TrincorpSectionHeadline
          label="Clientes que já impactamos."
          tone="dark"
          lines={[
            { content: "CLIENTES QUE JÁ", effects: ["vertical-slice"] },
            { content: <><em>impactamos</em>.</>, effects: ["outline-fill", "elastic-width"] },
          ]}
        />
        <p className={`mt-7 max-w-xl text-sm leading-relaxed text-white/50 sm:mt-9
          transition-all duration-700 delay-200 ${inView ? "opacity-100" : "opacity-0"}`}>
          Estabelecimentos de restaurantes, padarias, indústrias e cozinhas de toda a região.
        </p>
      </div>

      {/* ── Logo wall + center NP ── */}
      <div className="relative">
        {/* Marquee rows in the background */}
        <div className="space-y-3 sm:space-y-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <LogoRow items={rowA} reverse={false} duration={70} offsetIndex={0} />
          <LogoRow items={rowB} reverse={true}  duration={80} offsetIndex={3} />
        </div>

        {/* Center NP medallion */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full blur-2xl"
              style={{ background: "radial-gradient(circle, hsl(20 45% 65% / 0.55), transparent 70%)" }} />
            {/* Soft halo ring */}
            <div className="absolute -inset-6 rounded-full border border-white/10" />
            <div className="absolute -inset-12 rounded-full border border-white/[0.05]" />
            {/* Disc */}
            <div className="relative h-24 w-24 rounded-full sm:h-40 sm:w-40 lg:h-52 lg:w-52
              bg-white flex items-center justify-center overflow-hidden
              shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
              <img
                src={npLogo}
                alt="NP Consultoria"
                className="w-[92%] h-[92%] object-cover scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .np-client-logo-row:hover { animation-play-state: paused !important; }
        @keyframes marqueeForward {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .np-client-logo-row { animation: none !important; }
          .np-client-row-shell {
            overflow-x: auto;
            overscroll-behavior-inline: contain;
            scrollbar-width: none;
          }
          .np-client-row-shell::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
