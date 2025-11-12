import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

type Client = {
  id: number;
  name: string;
  image: string;
};

const ClientsSection: React.FC = () => {
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
  ];

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="clients" className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Nossos <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empresas e instituições que confiam em nosso trabalho
          </p>
        </div>

        {/* Premium Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {clients.map((client) => (
              <CarouselItem 
                key={client.id} 
                className="pl-4 md:pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 via-card/30 to-transparent backdrop-blur-sm hover:from-card/70 hover:via-card/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-primary/10 transition-all duration-500 rounded-lg" />
                    
                    {/* Border gradient */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-xl" />
                    
                    <img
                      src={client.image}
                      alt={client.name}
                      loading="lazy"
                      className="relative z-10 w-full h-full object-contain filter grayscale-[70%] group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
