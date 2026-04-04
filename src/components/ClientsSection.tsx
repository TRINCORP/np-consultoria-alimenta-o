/* ─── ClientsSection — floating bubbles layout inspired by More Nutrition ─── */

import React from "react";

const clients = [
  { id: 1,  name: "Driblix Pizzaria",        image: "/fotos_clientes/driblix.png" },
  { id: 2,  name: "Padaria Gianini",         image: "/fotos_clientes/gianini.png" },
  { id: 3,  name: "Benedito",                image: "/fotos_clientes/benedito.png" },
  { id: 4,  name: "A Boutique das Flores",   image: "/fotos_clientes/boutiqueFlores.png" },
  { id: 5,  name: "Caviúnas",                image: "/fotos_clientes/caviunas.png" },
  { id: 6,  name: "Della Torre Restaurante", image: "/fotos_clientes/dellatorre.png" },
  { id: 7,  name: "Pereira Pastelaria",      image: "/fotos_clientes/pereira.png" },
  { id: 8,  name: "Santa Ana Cafeteria",     image: "/fotos_clientes/santaana.png" },
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

const row1 = clients.slice(0, 9);
const row2 = clients.slice(9);

const ClientsSection: React.FC = () => {
  return (
    <section
      id="clients"
      className="overflow-hidden py-20 sm:py-24 md:py-28 relative"
      style={{ background: "hsl(20, 18%, 93%)" }}
    >
      {/* Headline area */}
      <div className="relative text-center px-6 mb-12 sm:mb-16">
        {/* Handwritten annotation — top left */}
        <span
          className="hidden sm:block absolute left-8 top-2 text-sm font-medium"
          style={{
            color: "hsl(20, 30%, 52%)",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            transform: "rotate(-5deg)",
            transformOrigin: "left center",
          }}
        >
          Indaiatuba e região
        </span>

        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: "hsl(20, 30%, 52%)" }}
        >
          Parceiros de Confiança
        </p>

        <h2
          className="font-black leading-[1.1] tracking-tight"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
            color: "hsl(20, 35%, 22%)",
          }}
        >
          Mais de 300 Empresas
        </h2>
        <h2
          className="font-black leading-[1.1] tracking-tight"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
            color: "hsl(20, 35%, 58%)",
          }}
        >
          Confiam na NP.
        </h2>

        {/* Handwritten annotation — bottom right */}
        <span
          className="hidden sm:block absolute right-8 bottom-0 text-sm font-medium"
          style={{
            color: "hsl(20, 30%, 52%)",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            transform: "rotate(4deg)",
            transformOrigin: "right center",
          }}
        >
          Desde 2009
        </span>
      </div>

      {/* Row 1 — scrolls left → */}
      <div className="mb-4">
        <div
          style={{
            display: "flex",
            gap: "18px",
            width: "max-content",
            animationName: "infinite-scroll",
            animationDuration: "32s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {[...row1, ...row1].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white flex items-center justify-center"
              style={{
                width: 152,
                height: 152,
                borderRadius: "50%",
                boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
                padding: "26px",
              }}
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

      {/* Row 2 — scrolls right ← */}
      <div>
        <div
          style={{
            display: "flex",
            gap: "18px",
            width: "max-content",
            animationName: "infinite-scroll",
            animationDuration: "38s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "reverse",
          }}
        >
          {[...row2, ...row2].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white flex items-center justify-center"
              style={{
                width: 130,
                height: 130,
                borderRadius: "50%",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
                padding: "22px",
              }}
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
    </section>
  );
};

export default ClientsSection;
