import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TeamMember } from "@/data/teamMembers";

interface Team3DCarouselProps {
  members: TeamMember[];
}

const Team3DCarousel: React.FC<Team3DCarouselProps> = ({ members }) => {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setActive((p) => (p + dir + members.length) % members.length),
    [members.length],
  );

  /* keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const current = members[active];
  const total = members.length;

  return (
    <section className="relative overflow-hidden bg-[#FAF9F7] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
      {/* Faint NP monogram — matches the watermark language used across the site */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 select-none font-playfair text-[clamp(11rem,32vw,30rem)] font-bold leading-none text-[#1A1A1C]/[0.022]"
      >
        NP
      </span>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-[hsl(20_35%_55%)]">
            Quem faz acontecer
          </span>
          <h1
            className="mt-4 font-playfair font-bold leading-[1.04] text-[hsl(210_15%_12%)]"
            style={{ fontSize: "clamp(2.3rem, 5.4vw, 3.75rem)" }}
          >
            Nossa Equipe
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[hsl(210_10%_42%)] sm:text-base">
            Consultoras que unem técnica regulatória, gestão e vivência real de
            operação para transformar cada estabelecimento atendido.
          </p>
        </div>

        {/* Stage */}
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14">
          {/* Active photo */}
          <div
            className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-[440px]"
            onTouchStart={(e) => {
              touchStartX.current = e.changedTouches[0].screenX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current == null) return;
              const diff = touchStartX.current - e.changedTouches[0].screenX;
              if (Math.abs(diff) > 45) go(diff > 0 ? 1 : -1);
              touchStartX.current = null;
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#E7DED9] shadow-[0_34px_80px_-34px_rgba(60,40,32,0.5)]">
              {members.map((m, i) => (
                <img
                  key={m.id}
                  src={m.image}
                  alt={m.name}
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                  className={`team-photo absolute inset-0 h-full w-full select-none object-cover object-top transition-all duration-[700ms] ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                {String(active + 1).padStart(2, "0")}
                <span className="mx-1 text-white/40">/</span>
                {String(total).padStart(2, "0")}
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-[rgba(195,156,144,0.5)]" />
            </div>
          </div>

          {/* Info */}
          <div className="min-w-0">
            <h2
              key={current.id}
              className="team-name font-playfair font-bold leading-tight text-[hsl(210_15%_12%)]"
              style={{ fontSize: "clamp(1.85rem, 4.2vw, 2.9rem)" }}
            >
              {current.name}
            </h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(20_35%_50%)] sm:text-sm">
              {current.role}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[hsl(210_10%_40%)] sm:text-[15px] sm:leading-7">
              {current.bio
                ? current.bio
                : `${current.name} integra o time da NP no atendimento próximo e no acompanhamento técnico das operações.`}
            </p>

            {current.specializations.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {current.specializations.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[hsl(20_35%_70%/0.35)] bg-white px-3 py-1.5 text-[11px] font-medium text-[hsl(210_15%_25%)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            {/* Thumbnail strip */}
            <div
              className="mt-9 flex gap-2.5 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
              style={{ scrollbarWidth: "none" }}
            >
              {members.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  aria-label={`Ver ${m.name}`}
                  aria-pressed={i === active}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl transition-all duration-300 sm:h-[68px] sm:w-[68px] ${
                    i === active
                      ? "ring-2 ring-[rgb(195,156,144)] ring-offset-2 ring-offset-[#FAF9F7]"
                      : "opacity-55 hover:opacity-100"
                  }`}
                >
                  <img
                    src={m.image}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover object-top"
                    style={{ filter: i === active ? "none" : "grayscale(100%)" }}
                  />
                </button>
              ))}
            </div>

            {/* Dots + arrows */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-1.5">
                {members.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Ir para membro ${i + 1}`}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "1.6rem" : "0.5rem",
                      background:
                        i === active ? "rgb(195,156,144)" : "rgba(195,156,144,0.28)",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Membro anterior"
                  className="grid h-11 w-11 place-items-center rounded-full border border-[hsl(20_35%_70%/0.4)] text-[hsl(20_35%_42%)] transition-colors hover:bg-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Próximo membro"
                  className="grid h-11 w-11 place-items-center rounded-full border border-[hsl(20_35%_70%/0.4)] text-[hsl(20_35%_42%)] transition-colors hover:bg-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .team-name { animation: teamNameIn .5s cubic-bezier(.16,1,.3,1) both; }
        @keyframes teamNameIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .team-photo { transition-duration: .01ms !important; }
          .team-name { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Team3DCarousel;
