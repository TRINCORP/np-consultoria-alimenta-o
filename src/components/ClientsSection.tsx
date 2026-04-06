import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Client = {
  id: number;
  name: string;
  image: string;
};

const ClientsSection: React.FC = () => {
  const containerRef = useScrollReveal();

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

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section ref={containerRef} id="clients" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <span className="scroll-reveal-scale inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Parceiros de Confiança
          </span>
          <h2 className="scroll-reveal-blur stagger-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Empresas que <span className="text-gradient">Confiam</span> em Nós
          </h2>
          <p className="scroll-reveal stagger-2 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 300 empresas já transformaram sua segurança alimentar conosco
          </p>
        </div>

        <div className="scroll-reveal-scale stagger-3">
          <Carousel
            opts={{ align: "start", loop: true, dragFree: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-6">
              {clients.map((client) => (
                <CarouselItem 
                  key={client.id} 
                  className="pl-3 sm:pl-4 md:pl-6 basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="group relative p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 
                    hover:border-primary/20 hover:bg-card/60 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 
                      group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                    <div className="relative aspect-square flex items-center justify-center">
                      <img
                        src={client.image}
                        alt={client.name}
                        loading="lazy"
                        className="w-full h-full object-contain filter grayscale-[60%] group-hover:grayscale-0 
                          opacity-60 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
