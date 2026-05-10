import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Camera, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    alt: "Equipe NP Consultoria em visita técnica de boas práticas em restaurante de Indaiatuba",
    category: "Nossa Equipe",
    caption: "Comprometimento em cada detalhe",
    location: "Indaiatuba, SP",
  },
  {
    src: foto02,
    alt: "Consultoria em campo realizando diagnóstico sanitário em cozinha industrial",
    category: "Consultoria Ativa",
    caption: "Análise direta no ambiente real",
    location: "Campinas, SP",
  },
  {
    src: foto03,
    alt: "Profissional NP avaliando recebimento de produtos em restaurante",
    category: "Avaliação de Produtos",
    caption: "Controle da origem ao prato",
    location: "Indaiatuba, SP",
  },
  {
    src: foto04,
    alt: "Atendimento de nutrição clínica e orientação alimentar especializada",
    category: "Nutrição Clínica",
    caption: "Cuidado humano e técnico",
    location: "Indaiatuba, SP",
  },
  {
    src: foto06,
    alt: "Profissionais da NP Consultoria em treinamento de manipuladores de alimentos",
    category: "Excelência Profissional",
    caption: "Padrão e dedicação absolutos",
    location: "Região de Campinas",
  },
  {
    src: foto10,
    alt: "Controle de qualidade e temperatura em buffet de restaurante comercial",
    category: "Controle de Qualidade",
    caption: "Padrão elevado em cada etapa",
    location: "Indaiatuba, SP",
  },
  {
    src: foto11,
    alt: "Monitoramento de buffet e supervisão de produção em cozinha industrial",
    category: "Supervisão de Produção",
    caption: "Higiene, apresentação e sabor",
    location: "Campinas, SP",
  },
  {
    src: foto13,
    alt: "Implantação de Manual de Boas Práticas de Fabricação BPF em indústria de alimentos",
    category: "Documentação NP",
    caption: "BPF implantada com rigor técnico",
    location: "Indaiatuba, SP",
  },
  {
    src: foto15,
    alt: "Equipe de cozinha treinada pela NP em gestão e padronização operacional",
    category: "Gestão de Cozinha",
    caption: "Liderança e eficiência operacional",
    location: "Região de Campinas",
  },
];

const FoodServicesMural = () => {
  const { ref: headerRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  /* ── drag-to-scroll ── */
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

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

  const scrollBy = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
  };

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
    <section
      className="relative bg-[#1a1a1a] py-16 lg:py-24 overflow-hidden"
      aria-labelledby="mural-heading"
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[520px] h-[520px] pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, hsl(20 35% 62% / 0.10), transparent 65%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[420px] h-[420px] pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, hsl(340 35% 62% / 0.08), transparent 65%)" }}
      />

      {/* SEO meta — invisible but indexable */}
      <meta itemProp="name" content="Atuação em Campo da NP Consultoria Alimentar" />
      <meta
        itemProp="description"
        content="Mural de atendimentos reais da NP Consultoria em restaurantes, cozinhas industriais e indústrias de alimentos em Indaiatuba e região de Campinas."
      />

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className="px-6 lg:px-[6%] mb-10 lg:mb-14"
      >
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-primary/30 bg-primary/10">
            <Camera className="w-3.5 h-3.5 text-primary" strokeWidth={1.8} />
          </span>
          <span className="text-[0.72rem] font-semibold tracking-[0.3em] uppercase text-primary">
            Nossa Atuação em Campo
          </span>
        </div>

        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2
              id="mural-heading"
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
              Registros reais da NP Consultoria Alimentar dentro de restaurantes,
              cozinhas industriais e indústrias de alimentos em Indaiatuba e região
              de Campinas. Onde a vigilância sanitária encontra método, e o método
              vira resultado.
            </p>

            {/* Mini stats / trust strip */}
            <ul
              className={`mt-6 flex flex-wrap gap-x-8 gap-y-3 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { n: "+10mil", l: "consumidores impactados" },
                { n: "15+", l: "anos em campo" },
                { n: "92%", l: "aprovação sanitária" },
              ].map((s) => (
                <li key={s.l} className="flex items-baseline gap-2">
                  <span className="font-playfair text-2xl text-white">{s.n}</span>
                  <span className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">{s.l}</span>
                </li>
              ))}
            </ul>
          </div>

          <span className={`font-mono text-[0.72rem] tracking-[0.15em] uppercase text-white/25 transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}>
            Arraste para explorar
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-px w-full bg-white/5 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary/70 to-primary/20 transition-[width] duration-150 ease-out"
            style={{ width: `${Math.max(8, progress)}%` }}
          />
        </div>
      </div>

      {/* ── Horizontal gallery ── */}
      <div className="relative">

        {/* Seta esquerda */}
        <button
          onClick={() => scrollBy("left")}
          aria-label="Anterior"
          className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-20
            w-9 h-9 sm:w-11 sm:h-11 rounded-full
            bg-black/60 backdrop-blur-md border border-white/15
            flex items-center justify-center
            hover:bg-[hsl(20_35%_62%/0.25)] hover:border-[hsl(20_35%_62%/0.5)]
            transition-all duration-300 group"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-[hsl(20_45%_72%)] transition-colors duration-300" />
        </button>

        {/* Seta direita */}
        <button
          onClick={() => scrollBy("right")}
          aria-label="Próximo"
          className="absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-20
            w-9 h-9 sm:w-11 sm:h-11 rounded-full
            bg-black/60 backdrop-blur-md border border-white/15
            flex items-center justify-center
            hover:bg-[hsl(20_35%_62%/0.25)] hover:border-[hsl(20_35%_62%/0.5)]
            transition-all duration-300 group"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-[hsl(20_45%_72%)] transition-colors duration-300" />
        </button>

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
          <figure
            key={i}
            itemProp="associatedMedia"
            itemScope
            itemType="https://schema.org/ImageObject"
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
            {/* index badge */}
            <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-[0.65rem] font-mono tracking-[0.15em] text-white/80">
              {String(i + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
            </span>

            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              draggable={false}
              itemProp="contentUrl"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] pointer-events-none"
            />
            <meta itemProp="caption" content={`${item.category}: ${item.caption}`} />

            {/* permanent gradient base */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* caption — always visible, expands on hover */}
            <figcaption className="absolute bottom-0 left-0 right-0 px-6 py-6 z-10">
              <span className="block text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-primary mb-1.5">
                {item.category}
              </span>
              <p className="font-playfair text-[1.05rem] font-semibold text-white leading-snug">
                {item.caption}
              </p>
              <div className="mt-3 flex items-center gap-2 text-white/60 text-[0.72rem] tracking-[0.12em] uppercase opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Atendimento NP <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </figcaption>

            {/* hover ring */}
            <div className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/0 group-hover:ring-white/15 transition-all duration-500 pointer-events-none" />
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FoodServicesMural;
