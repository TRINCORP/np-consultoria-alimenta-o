import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const clientStyles: Record<string, string> = {
  "Driblix pizzaria": "object-contain bg-white p-4",
  "Padaria gianini": "object-contain bg-white p-4",
  "Benedito": "object-contain bg-white p-3",
  "A boutique das flores": "object-contain bg-white p-3",
  "Caviúnas": "object-contain bg-white p-4",
  "Della Torre restaurante": "object-contain bg-black p-4",
  "Pereira pastelaria": "object-contain bg-white p-3",
  "Santa Ana cafeteria": "object-contain bg-white p-3",
  "Summer": "object-contain bg-white p-3",
  "Azeite": "object-contain bg-white p-4",
  "Bandeira": "object-contain bg-white p-4",
  "Fabi": "object-contain bg-white p-4",
  "Florência Gourmet": "object-contain bg-white p-4",
  "Gerbelli": "object-contain bg-white p-4",
  "Jesuita": "object-contain bg-white p-4",
  "Maria Ana": "object-contain bg-white p-4",
  "Na Rua": "object-contain bg-white p-4",
};

type Client = {
  id: number;
  name: string;
  image: string;
  description?: string;
};

const ClientsSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const clients: Client[] = [
    { id: 1,  name: "Driblix pizzaria",        image: "/fotos_clientes/driblix.png",      },
    { id: 2,  name: "Padaria gianini",         image: "/fotos_clientes/gianini.png",      },
    { id: 3,  name: "Benedito",                image: "/fotos_clientes/benedito.png",     },
    { id: 4,  name: "A boutique das flores",   image: "/fotos_clientes/boutiqueFlores.png",  },
    { id: 5,  name: "Caviúnas",                image: "/fotos_clientes/caviunas.png",      },
    { id: 6,  name: "Della Torre restaurante", image: "/fotos_clientes/dellatorre.png",    },
    { id: 7,  name: "Pereira pastelaria",      image: "/fotos_clientes/pereira.png",       },
    { id: 8,  name: "Santa Ana cafeteria",     image: "/fotos_clientes/santaana.png",      },
    { id: 9,  name: "Summer",                  image: "/fotos_clientes/summer.png",        },
    { id: 10, name: "Azeite",                  image: "/fotos_clientes/azeite.png",        },
    { id: 11, name: "Bandeira",                image: "/fotos_clientes/bandeira.png",      },
    { id: 12, name: "Fabi",                    image: "/fotos_clientes/fabi.png",          },
    { id: 13, name: "Florência Gourmet",       image: "/fotos_clientes/florencia.png",     },
    { id: 14, name: "Gerbelli",                image: "/fotos_clientes/gerbelli.png",      },
    { id: 15, name: "Jesuita",                 image: "/fotos_clientes/jesuita.png",       },
    { id: 16, name: "Maria Ana",               image: "/fotos_clientes/mariaana.png",      },
    { id: 17, name: "Na Rua",                  image: "/fotos_clientes/narua.png",         },
  ].map(c => ({ ...c, name: c.name.trim() }));

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
  }, [api]);

  return (
    <section id="clients" className="section-padding bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container-custom relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Nossos Clientes
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mx-auto max-w-3xl animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            Empresas e instituições que confiam em nosso trabalho para melhorar a saúde e o bem-estar de seus colaboradores e clientes.
          </p>
        </div>

        <Carousel
          className="w-full max-w-7xl mx-auto"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }) as any,
          ]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => {
              const isActive = index === current;
              return (
                <CarouselItem
                  key={client.id}
                  className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <Card className={`card-elegant h-full border-none overflow-hidden bg-white/80 backdrop-blur-sm transition
                    ${isActive ? "ring-2 ring-primary/40 shadow-lg" : "hover:shadow-md"}`}>
                    <CardContent className="p-6 h-full flex flex-col items-center text-center gap-4">
                      <div className={`w-32 h-32 md:w-36 md:h-36 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-sm
                        transition-transform duration-500 ${isActive ? "scale-105" : ""}`}>
                        <img
                          src={client.image}
                          alt={client.name}
                          loading="lazy"
                          className={`${clientStyles[client.name] || "object-contain w-full h-full p-4"} transition-all duration-500
                            ${isActive ? "" : "filter grayscale hover:grayscale-0 opacity-80"}`}
                        />
                      </div>

                      <div>
                        <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">{client.name}</h3>
                        {client.description && (
                          <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                            {client.description}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
