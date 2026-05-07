import React from "react";
import { useInView } from "react-intersection-observer";

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

const row1 = clients.slice(0, 11);
const row2 = clients.slice(5).concat(clients.slice(0, 5));

const LogoRow = ({
  items,
  reverse = false,
}: {
  items: Client[];
  reverse?: boolean;
}) => (
  <div className="overflow-hidden">
    <div
      className="flex gap-4 sm:gap-5"
      style={{
        animation: `${reverse ? "marqueeReverse" : "marqueeForward"} 32s linear infinite`,
        width: "max-content",
      }}
    >
      {[...items, ...items, ...items].map((client, i) => (
        <div
          key={`${client.id}-${i}`}
          className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
            rounded-2xl bg-white border border-[hsl(210_10%_88%)]
            shadow-[0_2px_12px_hsl(210_15%_12%/0.05)]
            flex items-center justify-center p-3 sm:p-4
            hover:shadow-[0_6px_24px_hsl(20_35%_60%/0.15)]
            hover:border-[hsl(20_35%_70%/0.3)]
            hover:scale-105
            transition-all duration-300"
        >
          <img
            src={client.image}
            alt={client.name}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

const ClientsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="clients" className="bg-[#FAF9F7] py-20 lg:py-28 overflow-hidden">

      {/* ── Header ── */}
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 mb-14 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className={`block text-[11px] font-semibold tracking-[0.32em] uppercase
              text-[hsl(20_35%_58%)] mb-5
              transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
              Parceiros de confiança
            </span>
            <h2
              className={`font-playfair font-bold text-[hsl(210_15%_10%)] leading-[1.08]
                transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Mais de{" "}
              <em className="italic text-[hsl(20_35%_58%)]">300 empresas</em>
              <br />confiam na NP.
            </h2>
          </div>

          <div className={`flex items-center gap-6 transition-all duration-700 delay-200
            ${inView ? "opacity-100" : "opacity-0"}`}>
            <div className="text-center">
              <span className="font-playfair font-bold text-[hsl(20_35%_58%)] text-3xl leading-none block">2009</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-[hsl(210_10%_55%)] mt-1 block">Desde</span>
            </div>
            <div className="w-px h-10 bg-[hsl(210_10%_88%)]" />
            <div className="text-center">
              <span className="font-playfair font-bold text-[hsl(20_35%_58%)] text-3xl leading-none block">SP</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-[hsl(210_10%_55%)] mt-1 block">Indaiatuba</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee rows ── */}
      <div className="space-y-4">
        <LogoRow items={row1} reverse={false} />
        <LogoRow items={row2} reverse={true} />
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
