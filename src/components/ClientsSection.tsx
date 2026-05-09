import React from "react";
import { useInView } from "react-intersection-observer";
import npLogo from "@/assets/logo-np-circle.png";

type Client = { id: number; name: string; image: string };

const clients: Client[] = [
  { id: 1,  name: "Driblix pizzaria",        image: "/fotos_clientes/driblix.png" },
  { id: 2,  name: "Padaria gianini",         image: "/fotos_clientes/gianini.png" },
  { id: 3,  name: "Benedito",                image: "/fotos_clientes/benedito.png" },
  { id: 4,  name: "A boutique das flores",   image: "/fotos_clientes/boutiqueFlores.png" },
  { id: 5,  name: "Caviúnas",                image: "/fotos_clientes/caviunas.png" },
  { id: 6,  name: "Della Torre restaurante", image: "/fotos_clientes/dellatorre.png" },
  { id: 7,  name: "Pereira pastelaria",      image: "/fotos_clientes/pereira.png" },
  { id: 8,  name: "Santa Ana cafeteria",     image: "/fotos_clientes/santaana.png" },
  { id: 9,  name: "Summer",                  image: "/fotos_clientes/summer.png" },
  { id: 10, name: "Azeite",                  image: "/fotos_clientes/azeite.png" },
  { id: 11, name: "Bandeira",                image: "/fotos_clientes/bandeira.png" },
  { id: 12, name: "Fabi",                    image: "/fotos_clientes/fabi.png" },
  { id: 13, name: "Florência Gourmet",       image: "/fotos_clientes/florencia.png" },
  { id: 14, name: "Gerbelli",                image: "/fotos_clientes/gerbelli.png" },
  { id: 15, name: "Jesuita",                 image: "/fotos_clientes/jesuita.png" },
  { id: 16, name: "Maria Ana",               image: "/fotos_clientes/mariaana.png" },
  { id: 17, name: "Na Rua",                  image: "/fotos_clientes/narua.png" },
];

/* Divide clients into 3 non-overlapping groups for the rows */
const rowA = clients.slice(0, 6);
const rowB = clients.slice(6, 12).reverse();
const rowC = clients.slice(12, 17);

/* Curated tile background palette (warm + earthy, on-brand) */
const tileBgs = [
  "#F5E9DA", "#FFFFFF", "#1F2937", "#E8C9A8", "#0F3D2E",
  "#C9542F", "#FAF3E7", "#2D2A26", "#D9B382", "#0E1B2C",
  "#EDE3D2", "#3A2A1F", "#F2D7C2", "#1C1A18", "#E5DACB",
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
  <div className="overflow-hidden">
    <div
      className="flex gap-3 sm:gap-4"
      style={{
        animation: `${reverse ? "marqueeReverse" : "marqueeForward"} ${duration}s linear infinite`,
        width: "max-content",
      }}
    >
      {[...items, ...items, ...items].map((client, i) => {
        const bg = tileBgs[(client.id + offsetIndex + i) % tileBgs.length];
        const isDark = ["#1F2937","#0F3D2E","#2D2A26","#0E1B2C","#3A2A1F","#1C1A18","#C9542F"].includes(bg);
        return (
          <div
            key={`${client.id}-${i}`}
            className="relative shrink-0 w-32 h-28 sm:w-40 sm:h-32 lg:w-44 lg:h-36
              rounded-2xl flex items-center justify-center p-5
              shadow-[0_8px_28px_rgba(0,0,0,0.35)]
              transition-transform duration-500 hover:scale-[1.04]"
            style={{ backgroundColor: bg }}
          >
            {/* Country tag */}
            <span
              className={`absolute top-1.5 right-2 text-[9px] font-semibold tracking-[0.2em]
                ${isDark ? "text-white/55" : "text-black/45"}`}
            >
              BR
            </span>
            <img
              src={client.image}
              alt={client.name}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
              style={isDark ? { filter: "brightness(0) invert(1)" } : undefined}
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
    <section id="clients" className="relative bg-[#0B0B0C] py-20 lg:py-28 overflow-hidden">
      {/* Ambient warm glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(20 35% 30% / 0.25), transparent 60%)" }} />

      {/* ── Header ── */}
      <div ref={ref} className="relative max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 mb-12 lg:mb-14 text-center">
        <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
          text-[hsl(20_45%_68%)] mb-5
          transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          Parceiros de confiança
        </span>
        <h2
          className={`font-playfair font-bold text-white leading-[1.1]
            transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
        >
          Mais de{" "}
          <em className="italic text-[hsl(20_45%_70%)]">300 empresas</em>
          {" "}confiam na NP.
        </h2>
        <p className={`mt-4 text-white/50 text-sm max-w-xl mx-auto
          transition-all duration-700 delay-200 ${inView ? "opacity-100" : "opacity-0"}`}>
          Restaurantes, indústrias e cozinhas reconhecidos por marcas oficiais.
        </p>
      </div>

      {/* ── Logo wall + center NP ── */}
      <div className="relative">
        {/* Marquee rows in the background */}
        <div className="space-y-3 sm:space-y-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <LogoRow items={rowA} reverse={false} duration={70} offsetIndex={0} />
          <LogoRow items={rowB} reverse={true}  duration={60} offsetIndex={5} />
          <LogoRow items={rowC} reverse={false} duration={80} offsetIndex={10} />
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
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full
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
        @keyframes marqueeForward {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
