import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import foto01 from "@/assets/food-services/field/servicos01.jpeg";
import foto02 from "@/assets/food-services/field/servicos02.jpeg";
import foto03 from "@/assets/food-services/field/servicos03.jpeg";
import foto04 from "@/assets/food-services/field/servicos04.jpeg";
import foto06 from "@/assets/food-services/field/servicos06.jpeg";
import foto10 from "@/assets/food-services/field/servicos10.jpeg";
import foto11 from "@/assets/food-services/field/servicos11.jpeg";
import foto13 from "@/assets/food-services/field/servicos13.jpeg";
import foto15 from "@/assets/food-services/field/servicos15.jpeg";

const galleryItems = [
  {
    src: foto01,
    alt: "Equipe NP Consultoria",
    category: "Nossa Equipe",
    caption: "Comprometimento em cada detalhe",
  },
  {
    src: foto02,
    alt: "Consultoria em campo",
    category: "Consultoria Ativa",
    caption: "Análise direta no ambiente real",
  },
  {
    src: foto03,
    alt: "Profissional em restaurante",
    category: "Avaliação de Produtos",
    caption: "Controle da origem ao prato",
  },
  {
    src: foto04,
    alt: "Atendimento nutricional",
    category: "Nutrição Clínica",
    caption: "Cuidado humano e técnico",
  },
  {
    src: foto06,
    alt: "Profissionais NP",
    category: "Excelência Profissional",
    caption: "Padrão e dedicação absolutos",
  },
  {
    src: foto10,
    alt: "Controle de qualidade no buffet",
    category: "Controle de Qualidade",
    caption: "Padrão elevado em cada etapa",
  },
  {
    src: foto11,
    alt: "Monitoramento de buffet",
    category: "Supervisão de Produção",
    caption: "Higiene, apresentação e sabor",
  },
  {
    src: foto13,
    alt: "Implantação de BPF",
    category: "Documentação NP",
    caption: "BPF implantada com rigor técnico",
  },
  {
    src: foto15,
    alt: "Equipe de cozinha",
    category: "Gestão de Cozinha",
    caption: "Liderança e eficiência operacional",
  },
];

const FoodServicesMural = () => {
  const { ref: headerRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  /* ── drag-to-scroll ── */
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    dragStart.current = { x: e.pageX, scrollLeft: trackRef.current.scrollLeft };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStart.current.x;
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };
  const stopDrag = () => setIsDragging(false);

  /* touch support */
  const touchStart = useRef({ x: 0, scrollLeft: 0 });
  const onTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    touchStart.current = { x: e.touches[0].pageX, scrollLeft: trackRef.current.scrollLeft };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    const dx = e.touches[0].pageX - touchStart.current.x;
    trackRef.current.scrollLeft = touchStart.current.scrollLeft - dx;
  };

  return (
    <section className="bg-[#1a1a1a] py-16 lg:py-24 overflow-hidden">

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className="px-6 lg:px-[6%] mb-10 lg:mb-14"
      >
        <span
          className={`block text-[0.72rem] font-semibold tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Nossa Atuação em Campo
        </span>

        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2
              className={`font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Cada visita.<br />
              Cada detalhe.<br />
              Cada{" "}
              <em className="font-playfair italic text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #e8a4b8 0%, #d4849a 45%, #b8607a 100%)" }}>
                resultado.
              </em>
            </h2>

            <p
              className={`mt-4 text-white/45 text-sm lg:text-base leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Conheça o trabalho que fazemos no campo, dentro das cozinhas,
              com as equipes — onde a transformação realmente acontece.
            </p>
          </div>

          <span
            className={`font-mono text-[0.75rem] tracking-[0.15em] uppercase text-white/25 flex items-center gap-2 transition-all duration-700 delay-300 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            ←→ Arraste para explorar
          </span>
        </div>
      </div>

      {/* ── Horizontal gallery ── */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        className={`flex gap-4 sm:gap-5 px-6 lg:px-[6%] pb-4 overflow-x-auto select-none
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`relative flex-none w-[280px] sm:w-[340px] lg:w-[370px] h-[380px] sm:h-[440px] lg:h-[490px]
              rounded-[18px] overflow-hidden group
              transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            style={{
              scrollSnapAlign: "start",
              transitionDelay: `${i * 60}ms`,
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] pointer-events-none"
            />

            {/* caption — slides up on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-7
                bg-gradient-to-t from-black/75 to-transparent
                translate-y-full group-hover:translate-y-0
                transition-transform duration-[450ms] ease-out"
            >
              <span className="block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-primary mb-1">
                {item.category}
              </span>
              <p className="font-playfair text-[1.05rem] font-semibold text-white leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodServicesMural;
