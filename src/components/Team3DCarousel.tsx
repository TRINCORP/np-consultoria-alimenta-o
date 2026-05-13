import React, { useState, useEffect, useCallback } from "react";
import { TeamMember } from "@/data/teamMembers";

interface Team3DCarouselProps {
  members: TeamMember[];
}

const Team3DCarousel: React.FC<Team3DCarouselProps> = ({ members }) => {
  const [active, setActive] = useState(0);

  /* ── keyboard navigation ── */
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setActive((p) => (p - 1 + members.length) % members.length);
      if (e.key === "ArrowRight")
        setActive((p) => (p + 1) % members.length);
    },
    [members.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  /* ── touch / swipe ── */
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => (startX = e.changedTouches[0].screenX);
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50)
        setActive((p) =>
          diff > 0
            ? (p + 1) % members.length
            : (p - 1 + members.length) % members.length
        );
    };
    document.addEventListener("touchstart", onStart);
    document.addEventListener("touchend", onEnd);
    return () => {
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchend", onEnd);
    };
  }, [members.length]);

  const current = members[active];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] relative overflow-hidden py-20 px-4">

      {/* ── Background title ── */}
      <h1
        className="absolute top-[45px] left-1/2 -translate-x-1/2 text-[4.5rem] md:text-[7.5rem] font-black uppercase tracking-tight pointer-events-none whitespace-nowrap select-none"
        style={{
          fontFamily: "Arial Black, Arial Bold, Arial, sans-serif",
          background:
            "linear-gradient(to bottom, rgba(195,156,144,0.35) 30%, rgba(255,255,255,0) 76%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        NOSSA EQUIPE
      </h1>

      {/* ── Cards row ── */}
      <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-6 mt-24 sm:mt-28 w-full max-w-[1100px] px-2">
        {members.map((member, i) => {
          const isActive = i === active;
          return (
            <button
              key={member.id}
              onClick={() => setActive(i)}
              aria-label={`Ver perfil de ${member.name}`}
              className="relative flex-shrink-0 rounded-[16px] sm:rounded-[20px] overflow-hidden focus:outline-none"
              style={{
                width: isActive ? "clamp(100px, 22vw, 280px)" : "clamp(68px, 14vw, 200px)",
                height: isActive ? "clamp(140px, 32vw, 400px)" : "clamp(96px, 22vw, 290px)",
                transition: "width 600ms cubic-bezier(0.4,0,0.2,1), height 600ms cubic-bezier(0.4,0,0.2,1), box-shadow 600ms, transform 600ms",
                boxShadow: isActive
                  ? "0 32px 64px rgba(0,0,0,0.22)"
                  : "0 8px 24px rgba(0,0,0,0.10)",
                transform: isActive ? "translateY(-12px)" : "translateY(0px)",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover select-none"
                style={{
                  filter: isActive ? "none" : "grayscale(100%)",
                  transition: "filter 600ms",
                  objectPosition: "top center",
                }}
              />

              {/* Active glow ring */}
              {isActive && (
                <span
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 2.5px rgba(195,156,144,0.7)",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Member info ── */}
      <div className="text-center mt-10 px-4 transition-all duration-500">
        <h2
          className="text-[2.2rem] sm:text-[2.5rem] font-bold mb-0 relative inline-block"
          style={{ color: "rgb(195,156,144)" }}
        >
          {/* decorative lines */}
          <span
            className="hidden sm:block absolute right-[calc(100%+1.2rem)] top-1/2 -translate-y-1/2 h-[2px] w-[70px]"
            style={{ background: "rgb(195,156,144)" }}
          />
          {current.name}
          <span
            className="hidden sm:block absolute left-[calc(100%+1.2rem)] top-1/2 -translate-y-1/2 h-[2px] w-[70px]"
            style={{ background: "rgb(195,156,144)" }}
          />
        </h2>

        <p className="text-[#848696] text-base sm:text-[1.25rem] font-medium uppercase tracking-[0.1em] opacity-80 mt-1">
          {current.role}
        </p>
      </div>

      {/* ── Dots ── */}
      <div className="flex justify-center gap-[10px] mt-10">
        {members.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ir para membro ${i + 1}`}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              background:
                i === active
                  ? "rgb(195,156,144)"
                  : "rgba(195,156,144,0.2)",
              transform: i === active ? "scale(1.25)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Team3DCarousel;
