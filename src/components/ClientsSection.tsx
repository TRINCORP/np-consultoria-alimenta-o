import React from "react";

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

        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="overflow-hidden py-8 md:py-12">
            <div className="flex animate-infinite-scroll hover:pause-animation">
              {/* First Set of Logos */}
              {clients.map((client) => (
                <div
                  key={`first-${client.id}`}
                  className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12"
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center transition-all duration-500 hover:scale-110">
                    <img
                      src={client.image}
                      alt={client.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {clients.map((client) => (
                <div
                  key={`second-${client.id}`}
                  className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12"
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center transition-all duration-500 hover:scale-110">
                    <img
                      src={client.image}
                      alt={client.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
