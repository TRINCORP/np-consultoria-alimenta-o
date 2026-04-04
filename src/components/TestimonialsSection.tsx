/* ─── TestimonialsSection — dark section, inspired by More Nutrition's "Clean. Green. Goodness." ─── */

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import consultationImg from "@/assets/consultation-meeting.jpg";

const testimonials = [
  {
    rating: 5,
    heading: "Passou na vistoria sem pendências!",
    text: "A NP Consultoria organizou toda a nossa operação. Passamos na vistoria da vigilância sanitária sem nenhuma pendência e hoje temos processos muito mais claros para a equipe.",
    name: "Fernanda Oliveira",
    role: "Proprietária de Restaurante, Indaiatuba",
    initials: "FO",
  },
  {
    rating: 5,
    heading: "Rotulagem impecável.",
    text: "Precisávamos regularizar a rotulagem dos nossos produtos para vender em supermercado. A NP Rotulagem cuidou de tudo: tabela nutricional, adequação à ANVISA e design do rótulo. Resultado impecável.",
    name: "Ricardo Mendes",
    role: "Produtor Artesanal, Campinas",
    initials: "RM",
  },
  {
    rating: 5,
    heading: "Equipe engajada e organizada.",
    text: "Contratamos a NP para o treinamento dos manipuladores de alimentos e elaboração do Manual de Boas Práticas. A equipe ficou muito mais engajada e organizada. Recomendo de olhos fechados.",
    name: "Juliana Campos",
    role: "Gerente de Cozinha Industrial, Salto",
    initials: "JC",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current text-primary" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const containerRef = useScrollReveal();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a1a1a 0%, #252220 50%, #1a1a1a 100%)" }}
    >
      {/* Parallax bg image */}
      <div className="absolute inset-0">
        <img
          src={consultationImg}
          alt=""
          className="w-full h-full object-cover opacity-10 object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/80" />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 py-16 sm:py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left: Big title (like More Nutrition "Clean. Green. Goodness.") ── */}
          <div className="lg:col-span-5">
            {/* Signature decoration */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary/60" />
              <span className="text-primary/80 text-xs font-semibold tracking-[0.25em] uppercase">
                Depoimentos
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 font-playfair">
              Operações
              <br />
              <span className="italic text-primary-glow">Seguras.</span>
              <br />
              Marcas
              <br />
              <span className="italic text-primary-glow">Fortes.</span>
            </h2>

            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xs">
              não acredite só em nós — veja o que nossos clientes dizem
            </p>

            {/* Rating summary */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current text-primary" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">300+ empresas atendidas</p>
                <p className="text-white/40 text-xs">92% de aprovação em inspeções</p>
              </div>
            </div>
          </div>

          {/* ── Right: Testimonial slider ── */}
          <div className="lg:col-span-7">
            <h3 className="text-white/60 text-base sm:text-lg mb-6 font-medium">
              O que nossos clientes dizem
            </h3>

            {/* Slider wrapper */}
            <div className="relative">
              {/* Arrow buttons */}
              <div className="flex gap-3 mb-5">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Active card */}
              <div
                key={active}
                className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-3xl p-7 sm:p-9
                  transition-all duration-500 animate-[fadeIn_0.4s_ease-out]"
              >
                {/* Stars */}
                <Stars count={testimonials[active].rating} />

                {/* Testimonial text */}
                <div className="mt-5 mb-7">
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-3">
                    {testimonials[active].heading}
                  </h4>
                  <p className="text-white/65 leading-relaxed text-sm sm:text-base">
                    "{testimonials[active].text}"
                  </p>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-glow flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonials[active].name}</p>
                    <p className="text-white/45 text-xs">{testimonials[active].role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 text-white/40 text-xs">
                    <svg className="w-4 h-4 fill-current text-primary/60" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Verificado
                  </div>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex gap-2 mt-5 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
