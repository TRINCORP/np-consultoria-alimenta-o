import { useInView } from "react-intersection-observer";
import { BrilliantReflection } from "@/components/effects/BrilliantReflection";
import { Tag, Palette, FileCheck, SearchCheck } from "lucide-react";
import consultoriaReg from "@/assets/food-services/consultoria-regulatoria.jpg";

const rotulagemServices = [
  {
    icon: Tag,
    title: "Desenvolvimento e Adequação de Rótulos",
    description:
      "Elaboramos rótulos 100% conforme a legislação da Anvisa, garantindo segurança jurídica e credibilidade para sua marca.",
    items: [
      "Tabela nutricional atualizada",
      "Lista de ingredientes conforme RDC vigente",
      "Declaração de alergênicos",
      "Informação sobre glúten",
      "Rotulagem nutricional frontal",
      "Alegações nutricionais permitidas",
    ],
  },
  {
    icon: Palette,
    title: "Design e Identidade Visual",
    description:
      "Criamos rótulos que vendem, comunicam e transmitem credibilidade no ponto de venda. Unimos estética, marketing e legislação.",
    items: [
      "Criação de layout de rótulos",
      "Desenvolvimento de logotipo",
      "Identidade visual para marcas alimentícias",
      "Adequação visual conforme exigências legais",
      "Organização estratégica das informações",
      "Arte final pronta para impressão",
    ],
  },
  {
    icon: FileCheck,
    title: "Regularização e Enquadramento de Produtos",
    description:
      "Auxiliamos no correto enquadramento sanitário dos produtos alimentícios junto aos órgãos competentes.",
    items: [
      "Análise de categoria",
      "Orientação sobre necessidade de registro",
      "Adequação de embalagens",
      "Revisão técnica preventiva",
    ],
  },
  {
    icon: SearchCheck,
    title: "Auditoria e Revisão Técnica de Rótulos",
    description:
      "Analisamos rótulos já existentes e apontamos não conformidades antes que gerem notificações ou multas.",
    items: [],
  },
];

const FoodServicesRegulatorio = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] via-[#1e1e1e] to-[#1a1a1a] py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.06),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <span
            className={`inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wider uppercase mb-6 transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            NP Rotulagem & Assuntos Regulatórios
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Rotulagem que gera{" "}
            <span className="text-gradient italic">Confiança</span> e Valor
          </h2>
          <p
            className={`text-white/60 text-base lg:text-lg leading-relaxed transition-all duration-700 delay-200 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Da tabela nutricional à identidade visual, entregamos rótulos conformes, competitivos e prontos para o mercado.
          </p>
        </div>

        {/* Featured image + intro */}
        <div
          ref={imageRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-24 transition-all duration-700 ${
            imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
            <img
              src={consultoriaReg}
              alt="Consultoria regulatória NP Rotulagem"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
          </div>
          <div className="flex items-center">
            <div>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
                A NP Rotulagem oferece soluções completas para adequação, desenvolvimento e regularização
                de rótulos de alimentos conforme as normas da Anvisa. Nosso trabalho garante segurança jurídica,
                credibilidade no mercado e competitividade no ponto de venda.
              </p>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                Unimos estética, marketing e legislação para que seu produto esteja regularizado e competitivo no mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {rotulagemServices.map((service, index) => {
            const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={ref}
                className={`group relative bg-white/[0.03] backdrop-blur-sm border border-primary/15 rounded-2xl p-8 lg:p-10
                  transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:border-primary/40
                  hover:shadow-[0_0_40px_hsl(var(--primary)/0.12)]
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:left-full transition-all duration-700" />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
                  <BrilliantReflection />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center mb-6
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{service.description}</p>
                  {service.items.length > 0 && (
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-white/70 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodServicesRegulatorio;
