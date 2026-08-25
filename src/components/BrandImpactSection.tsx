import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import brandDetail from "@/assets/np-brand-detail-v3.webp";

const outcomes = [
  ["01", "Fiscalização", "Processos preparados antes da urgência."],
  ["02", "Produto", "Rótulos seguros para chegar ao mercado."],
  ["03", "Equipe", "Padrões que continuam mesmo sem supervisão."],
];

const BrandImpactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.12,
    triggerOnce: true,
  });

  return (
    <section
      id="marca-segura"
      ref={ref}
      className={`np-brand-impact relative overflow-hidden bg-[#F2ECE6] text-[#1A1A1C] ${inView ? "is-visible" : ""}`}
      aria-labelledby="brand-impact-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="brand-impact-grid absolute inset-0" />
        <span className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#E7A98F]/25 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1540px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="flex items-center justify-between border-b border-[#CFC5BD] pb-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8F5845] sm:text-[10px]">
            A confiança também é uma marca
          </p>
          <span className="font-playfair text-lg italic text-[#9D8F87]">NP / 02</span>
        </div>

        <h2
          id="brand-impact-title"
          className="mt-10 max-w-[1320px] font-sans font-semibold uppercase tracking-[-0.075em] sm:mt-14"
          style={{ fontSize: "clamp(3rem, 7.65vw, 8.8rem)", lineHeight: 0.82 }}
        >
          <span className="brand-word-mask block overflow-hidden pb-[.08em]">
            <span className="brand-word block">O CUIDADO QUE</span>
          </span>
          <span className="brand-word-mask block overflow-hidden pb-[.08em] lg:pl-[9vw]">
            <span className="brand-word brand-word-outline block">NINGUÉM VÊ</span>
          </span>
          <span className="brand-word-mask block overflow-hidden pb-[.08em] lg:pl-[2vw]">
            <span className="brand-word block">
              É O QUE <em className="font-playfair font-normal normal-case tracking-[-0.055em] text-[#A6634D]">todos sentem.</em>
            </span>
          </span>
        </h2>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="brand-photo-wrap relative lg:col-span-5">
            <div className="brand-photo relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-[#C9C0BA]">
              <img
                src={brandDetail}
                alt="Emblema físico da NP sobre uma superfície técnica de aço escovado"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.035]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/55 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-[#F7F1EB] sm:inset-x-7 sm:bottom-7">
                <div>
                  <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/55">
                    Símbolo em matéria
                  </span>
                  <p className="mt-2 max-w-[13rem] font-playfair text-xl leading-tight sm:text-2xl">
                    Técnica que ganha forma.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-black/10 backdrop-blur-md">
                  <ArrowDownRight className="h-5 w-5" strokeWidth={1.4} />
                </span>
              </div>
            </div>
            <span className="brand-photo-index absolute -right-4 top-8 hidden rounded-full border border-[#BFB3AA] bg-[#F2ECE6] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[#6D625D] sm:block">
              Identidade NP · 2026
            </span>
          </div>

          <div className="flex flex-col justify-between lg:col-span-7 lg:pl-6">
            <div className="brand-copy max-w-2xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#A6634D] sm:text-[10px]">
                Muito além de documentos
              </p>
              <h3 className="mt-5 font-playfair text-[clamp(2.2rem,4.8vw,4.8rem)] font-semibold leading-[.98] tracking-[-0.045em]">
                Estruturamos a confiança que sustenta a sua reputação.
              </h3>
              <p className="mt-7 max-w-xl text-sm font-light leading-7 text-[#625D5B] sm:text-base">
                A NP conecta conformidade, rotina e pessoas. Assim, cada exigência
                deixa de ser um obstáculo isolado e passa a proteger a marca, a
                experiência do cliente e o próximo passo do negócio.
              </p>
              <a
                href="#solucoes"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#9C6653] pb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#6F3F30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9C6653] sm:text-[10px]"
              >
                Ver como a NP atua
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <ol className="brand-outcomes mt-14 border-t border-[#CFC5BD] lg:mt-20">
              {outcomes.map(([number, title, description]) => (
                <li
                  key={number}
                  className="group grid grid-cols-[auto_1fr] gap-5 border-b border-[#CFC5BD] py-5 sm:grid-cols-[auto_10rem_1fr_auto] sm:items-center sm:gap-7"
                >
                  <span className="font-playfair text-lg italic text-[#AA9D95]">{number}</span>
                  <strong className="text-xs font-semibold text-[#292628] sm:text-sm">{title}</strong>
                  <p className="col-start-2 text-[11px] leading-relaxed text-[#746D69] sm:col-start-auto sm:text-xs">
                    {description}
                  </p>
                  <ArrowUpRight className="hidden h-4 w-4 text-[#A6634D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <style>{`
        .np-brand-impact { --brand-ease: cubic-bezier(.16, 1, .3, 1); }

        .np-brand-impact .brand-impact-grid {
          opacity: .055;
          background-image: linear-gradient(#1a1a1c 1px, transparent 1px), linear-gradient(90deg, #1a1a1c 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent);
        }

        .np-brand-impact .brand-word {
          transform: translateY(115%) rotate(1deg);
          transform-origin: left bottom;
          will-change: transform;
        }

        .np-brand-impact.is-visible .brand-word {
          animation: npBrandWord 1.08s var(--brand-ease) both;
        }

        .np-brand-impact.is-visible .brand-word-mask:nth-of-type(2) .brand-word { animation-delay: .12s; }
        .np-brand-impact.is-visible .brand-word-mask:nth-of-type(3) .brand-word { animation-delay: .24s; }

        .np-brand-impact .brand-word-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(26,26,28,.72);
        }

        .np-brand-impact .brand-photo-wrap {
          opacity: 0;
          transform: translateY(48px) rotate(-1.5deg);
        }

        .np-brand-impact.is-visible .brand-photo-wrap {
          animation: npBrandPhoto 1.1s var(--brand-ease) .38s both;
        }

        .np-brand-impact .brand-photo { clip-path: inset(100% 0 0 0 round 1.8rem); }
        .np-brand-impact.is-visible .brand-photo {
          animation: npBrandClip 1.2s var(--brand-ease) .42s both;
        }

        .np-brand-impact .brand-copy,
        .np-brand-impact .brand-outcomes {
          opacity: 0;
          transform: translateY(34px);
        }

        .np-brand-impact.is-visible .brand-copy {
          animation: npBrandCopy .9s var(--brand-ease) .52s both;
        }

        .np-brand-impact.is-visible .brand-outcomes {
          animation: npBrandCopy .9s var(--brand-ease) .66s both;
        }

        @keyframes npBrandWord { to { transform: translateY(0) rotate(0); } }
        @keyframes npBrandPhoto { to { opacity: 1; transform: translateY(0) rotate(0); } }
        @keyframes npBrandClip { to { clip-path: inset(0 0 0 0 round 1.8rem); } }
        @keyframes npBrandCopy { to { opacity: 1; transform: translateY(0); } }

        @media (prefers-reduced-motion: reduce) {
          .np-brand-impact *,
          .np-brand-impact *::before,
          .np-brand-impact *::after { animation: none !important; }
          .np-brand-impact .brand-word,
          .np-brand-impact .brand-photo-wrap,
          .np-brand-impact .brand-copy,
          .np-brand-impact .brand-outcomes { opacity: 1; transform: none; }
          .np-brand-impact .brand-photo { clip-path: none; }
        }
      `}</style>
    </section>
  );
};

export default BrandImpactSection;
