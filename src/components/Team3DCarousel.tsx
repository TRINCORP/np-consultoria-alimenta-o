import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TeamMember } from "@/data/teamMembers";

interface Team3DCarouselProps {
  members: TeamMember[];
}

const Team3DCarousel: React.FC<Team3DCarouselProps> = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + members.length) % members.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const getCardPosition = (index: number) => {
    const offset = (index - currentIndex + members.length) % members.length;
    
    if (offset === 0) return "center";
    if (offset === 1) return "right-1";
    if (offset === 2) return "right-2";
    if (offset === members.length - 1) return "left-1";
    if (offset === members.length - 2) return "left-2";
    return "hidden";
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Touch navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      const swipeThreshold = 50;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(currentIndex + 1);
        } else {
          updateCarousel(currentIndex - 1);
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] relative overflow-hidden">
      {/* Background Title */}
      <h1 className="absolute top-[45px] left-1/2 transform -translate-x-1/2 text-[4.5rem] md:text-[7.5rem] font-black uppercase tracking-tight pointer-events-none whitespace-nowrap select-none font-[Arial_Black,Arial_Bold,Arial,sans-serif] bg-gradient-to-b from-[rgba(8,42,123,0.35)] via-[rgba(8,42,123,0.25)] to-transparent bg-clip-text text-transparent">
        NOSSA EQUIPE
      </h1>

      {/* Carousel Container */}
      <div className="w-full max-w-[1200px] h-[450px] relative mt-20" style={{ perspective: "1000px" }}>
        {/* Navigation Arrows */}
        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[rgba(8,42,123,0.6)] hover:bg-[rgba(0,0,0,0.8)] text-white rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110 text-2xl pb-1"
          style={{ paddingRight: "3px" }}
          aria-label="Membro anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[rgba(8,42,123,0.6)] hover:bg-[rgba(0,0,0,0.8)] text-white rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110 text-2xl pb-1"
          style={{ paddingLeft: "3px" }}
          aria-label="Próximo membro"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Track */}
        <div className="w-full h-full flex justify-center items-center relative" style={{ transformStyle: "preserve-3d" }}>
          {members.map((member, index) => {
            const position = getCardPosition(index);
            
            let transformClasses = "";
            let opacityClasses = "";
            let zIndexClasses = "";
            let filterClasses = "";

            switch (position) {
              case "center":
                transformClasses = "translate-x-0 scale-110 translate-z-0";
                opacityClasses = "opacity-100";
                zIndexClasses = "z-[10]";
                filterClasses = "";
                break;
              case "left-1":
                transformClasses = "-translate-x-[200px] scale-90";
                opacityClasses = "opacity-90";
                zIndexClasses = "z-[5]";
                filterClasses = "grayscale";
                break;
              case "left-2":
                transformClasses = "-translate-x-[400px] scale-[0.8]";
                opacityClasses = "opacity-70";
                zIndexClasses = "z-[1]";
                filterClasses = "grayscale";
                break;
              case "right-1":
                transformClasses = "translate-x-[200px] scale-90";
                opacityClasses = "opacity-90";
                zIndexClasses = "z-[5]";
                filterClasses = "grayscale";
                break;
              case "right-2":
                transformClasses = "translate-x-[400px] scale-[0.8]";
                opacityClasses = "opacity-70";
                zIndexClasses = "z-[1]";
                filterClasses = "grayscale";
                break;
              default:
                transformClasses = "";
                opacityClasses = "opacity-0";
                zIndexClasses = "z-0";
                filterClasses = "";
            }

            return (
              <div
                key={member.id}
                onClick={() => updateCarousel(index)}
                className={`absolute w-[280px] h-[380px] bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${transformClasses} ${opacityClasses} ${zIndexClasses} ${position === "hidden" ? "pointer-events-none" : ""}`}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${filterClasses}`}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center mt-10 transition-all duration-500 ease-out px-4">
        <h2 className="text-[rgb(8,42,123)] text-[2.5rem] font-bold mb-[10px] relative inline-block">
          {members[currentIndex].name}
          <span className="absolute left-[-120px] top-full w-[100px] h-[2px] bg-[rgb(8,42,123)]"></span>
          <span className="absolute right-[-120px] top-full w-[100px] h-[2px] bg-[rgb(8,42,123)]"></span>
        </h2>
        <p className="text-[#848696] text-[1.5rem] font-medium uppercase tracking-[0.1em] opacity-80 py-[10px] -mt-[15px]">
          {members[currentIndex].role}
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-[10px] mt-[60px]">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => updateCarousel(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "bg-[rgb(8,42,123)] scale-[1.2]"
                : "bg-[rgba(8,42,123,0.2)] hover:bg-[rgba(8,42,123,0.3)]"
            }`}
            aria-label={`Ir para membro ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Team3DCarousel;
