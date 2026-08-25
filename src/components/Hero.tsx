import { useEffect, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import TrincorpKineticHeadline from "@/components/effects/TrincorpKineticHeadline";
import heroSculpture from "@/assets/np-hero-sculpture-v3.webp";

const WHATSAPP_NUMBER = "5519989750741";

const withDelay = (delay: string) =>
  ({ "--np-delay": delay }) as CSSProperties;

const proofPoints = [
  "Diagnóstico que vira plano",
  "Proximidade técnica",
  "Decisões com segurança",
];

const expertise = [
  "Vigilância sanitária",
  "Rotulagem",
  "Boas práticas",
  "Treinamentos",
  "Gestão da qualidade",
];

const Hero = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de entender como a NP pode diagnosticar e fortalecer a minha operação.",
  );

  return (
    <section
      className={`np-cinematic-hero relative isolate min-h-[100svh] overflow-hidden bg-[#111214] text-[#F7F1EB] ${ready ? "is-ready" : ""}`}
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={heroSculpture}
          alt=""
          className="hero-sculpture absolute inset-0 h-full w-full object-cover object-[64%_center]"
          fetchPriority="high"
        />
        <div className="hero-image-shade absolute inset-0" />
        <div className="hero-vignette absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
        <div className="hero-light-sweep absolute -inset-y-1/2 left-[-35%] w-[28%] rotate-[13deg] bg-white/[0.055] blur-3xl" />
        <div className="hero-grain absolute inset-0 opacity-[0.075] mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 pb-7 pt-28 sm:px-8 sm:pb-9 sm:pt-32 lg:px-12 lg:pb-10 lg:pt-36">
        <div
          className="hero-reveal flex items-center justify-between gap-5"
          style={withDelay("0.02s")}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#E7A98F] sm:w-14" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/58 sm:text-[10px]">
              Consultoria alimentar · Indaiatuba
            </p>
          </div>

          <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.23em] text-white/46 sm:text-[10px]">
            <span className="hidden sm:inline">Estratégia técnica para crescer</span>
            <span className="font-playfair text-lg font-normal italic tracking-normal text-[#E7A98F]">
              NP / 01
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center py-12 sm:py-14 lg:py-8">
          <div className="relative">
            <div
              className="hero-reveal mb-5 flex items-center gap-2 sm:mb-7"
              style={withDelay("0.08s")}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E7A98F] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E7A98F]" />
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E9C0AF] sm:text-[10px]">
                Diagnóstico técnico disponível
              </span>
            </div>

            <TrincorpKineticHeadline active={ready} />

            <span
              className="hero-orbit absolute right-[4%] top-[42%] hidden h-24 w-24 rounded-full border border-white/15 xl:block"
              aria-hidden
            >
              <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#E7A98F] shadow-[0_0_20px_4px_rgba(231,169,143,.45)]" />
            </span>
          </div>

          <div className="mt-9 grid gap-8 lg:mt-11 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div
              className="hero-reveal lg:col-span-5 lg:col-start-2"
              style={withDelay("1.02s")}
            >
              <p className="max-w-xl text-[14px] font-light leading-relaxed text-white/65 sm:text-base lg:text-lg">
                Da cozinha ao rótulo, transformamos exigências técnicas em uma
                operação clara, preparada e capaz de crescer sem improviso.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-primary-cta group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E7A98F] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#191617] shadow-[0_20px_55px_-20px_rgba(231,169,143,.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Solicitar diagnóstico
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#solucoes"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.055] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/82 backdrop-blur-sm transition-colors duration-300 hover:border-white/35 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E7A98F]"
                >
                  Explorar soluções
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>
            </div>

            <div
              className="hero-reveal lg:col-span-5 lg:col-start-8"
              style={withDelay("1.14s")}
            >
              <ul
                className="grid gap-px overflow-hidden rounded-[1.3rem] border border-white/12 bg-white/12 sm:grid-cols-3 lg:ml-auto lg:max-w-2xl"
                aria-label="Diferenciais do atendimento"
              >
                {proofPoints.map((point, index) => (
                  <li
                    key={point}
                    className="group bg-[#17181A]/88 p-4 backdrop-blur-md transition-colors hover:bg-[#242528]/92 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E7A98F]" strokeWidth={1.7} />
                      <span className="font-playfair text-sm italic text-white/22">0{index + 1}</span>
                    </div>
                    <p className="mt-5 text-[10px] font-medium leading-relaxed text-white/66 sm:text-[11px]">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="hero-reveal flex items-end justify-between border-t border-white/12 pt-4"
          style={withDelay("1.28s")}
        >
          <div className="overflow-hidden">
            <div className="hero-expertise-ticker flex w-max items-center">
              {[...expertise, ...expertise].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center gap-4 whitespace-nowrap pr-5 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/35 sm:pr-8 sm:text-[9px]"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-[#E7A98F]" />
                </span>
              ))}
            </div>
          </div>

          <a
            href="#marca-segura"
            className="ml-6 hidden shrink-0 items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/38 transition-colors hover:text-white/75 sm:flex"
          >
            Continue
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15">
              <ArrowDown className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .np-cinematic-hero { --np-ease: cubic-bezier(.16, 1, .3, 1); }

        .np-cinematic-hero .hero-sculpture {
          opacity: 0;
          transform: scale(1.09);
          filter: saturate(.88) contrast(1.04);
          will-change: transform, opacity;
        }

        .np-cinematic-hero.is-ready .hero-sculpture {
          animation: npSculptureIn 1.65s var(--np-ease) .12s both, npSculptureDrift 11s ease-in-out 2s infinite alternate;
        }

        .np-cinematic-hero .hero-image-shade {
          background:
            linear-gradient(90deg, #111214 0%, rgba(17,18,20,.93) 24%, rgba(17,18,20,.5) 56%, rgba(17,18,20,.08) 82%),
            linear-gradient(0deg, rgba(17,18,20,.92) 0%, transparent 32%, rgba(17,18,20,.2) 100%);
        }

        .np-cinematic-hero .hero-vignette {
          box-shadow: inset 0 0 150px 30px rgba(0,0,0,.48);
        }

        .np-cinematic-hero .hero-grid {
          opacity: .1;
          background-image: linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to right, #000, transparent 78%);
        }

        .np-cinematic-hero .hero-light-sweep {
          transform: translateX(-120%) rotate(13deg);
        }

        .np-cinematic-hero.is-ready .hero-light-sweep {
          animation: npLightSweep 2.1s var(--np-ease) .48s both;
        }

        .np-cinematic-hero .hero-reveal {
          opacity: 0;
          transform: translateY(20px);
        }

        .np-cinematic-hero.is-ready .hero-reveal {
          animation: npHeroReveal .9s var(--np-ease) var(--np-delay, 0s) both;
        }

        .np-cinematic-hero .hero-primary-cta {
          transition: transform .35s var(--np-ease), box-shadow .35s ease, background-color .35s ease;
        }

        .np-cinematic-hero .hero-primary-cta:hover {
          transform: translateY(-4px);
          background: #f0bca6;
          box-shadow: 0 26px 65px -20px rgba(231,169,143,.72);
        }

        .np-cinematic-hero .hero-orbit {
          animation: npOrbit 9s linear infinite;
        }

        .np-cinematic-hero .hero-expertise-ticker {
          animation: npExpertiseTicker 24s linear infinite;
        }

        @keyframes npSculptureIn {
          from { opacity: 0; transform: scale(1.09); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes npSculptureDrift {
          from { transform: scale(1) translate3d(0,0,0); }
          to { transform: scale(1.025) translate3d(-.4%, -.5%, 0); }
        }

        @keyframes npLightSweep {
          to { transform: translateX(560%) rotate(13deg); }
        }

        @keyframes npHeroReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes npOrbit { to { transform: rotate(360deg); } }

        @keyframes npExpertiseTicker {
          to { transform: translateX(-50%); }
        }

        @media (max-width: 900px) {
          .np-cinematic-hero .hero-sculpture { object-position: 64% center; }
          .np-cinematic-hero .hero-image-shade {
            background:
              linear-gradient(90deg, rgba(17,18,20,.98) 0%, rgba(17,18,20,.77) 58%, rgba(17,18,20,.36) 100%),
              linear-gradient(0deg, rgba(17,18,20,.96) 0%, rgba(17,18,20,.12) 60%, rgba(17,18,20,.45) 100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .np-cinematic-hero *,
          .np-cinematic-hero *::before,
          .np-cinematic-hero *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
          .np-cinematic-hero .hero-sculpture,
          .np-cinematic-hero .hero-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
