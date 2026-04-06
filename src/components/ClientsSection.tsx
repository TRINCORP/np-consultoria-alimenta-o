import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Client = {
  id: number;
  name: string;
  image: string;
};

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

const ClientsSection: React.FC = () => {
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} id="clients" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with side labels */}
        <div className="relative mb-10 sm:mb-16 md:mb-20">
          <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-primary/50 text-xs sm:text-sm italic">
            Indaiatuba e região
          </span>
          <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-primary/50 text-xs sm:text-sm italic">
            Desde 2009
          </span>

          <div className="text-center">
            <span className="scroll-reveal-scale inline-block text-primary/80 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Parceiros de Confiança
            </span>
            <h2 className="scroll-reveal-blur stagger-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Mais de 300 Empresas
              <br />
              <span className="text-gradient">Confiam na NP.</span>
            </h2>
          </div>
        </div>

        {/* Row 1 - scrolls left */}
        <div className="scroll-reveal stagger-2 overflow-hidden mb-4 sm:mb-6">
          <div className="flex animate-scroll-x gap-4 sm:gap-5 md:gap-6">
            {[...row1, ...row1, ...row1].map((client, i) => (
              <div
                key={`r1-${i}`}
                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white border border-border/20 shadow-sm flex items-center justify-center p-2 sm:p-3 md:p-4 hover:shadow-md hover:scale-105 transition-all duration-300"
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

        {/* Row 2 - scrolls right */}
        <div className="scroll-reveal stagger-3 overflow-hidden">
          <div className="flex animate-scroll-x-reverse gap-4 sm:gap-5 md:gap-6">
            {[...row2, ...row2, ...row2].map((client, i) => (
              <div
                key={`r2-${i}`}
                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white border border-border/20 shadow-sm flex items-center justify-center p-2 sm:p-3 md:p-4 hover:shadow-md hover:scale-105 transition-all duration-300"
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
      </div>
    </section>
  );
};

export default ClientsSection;
