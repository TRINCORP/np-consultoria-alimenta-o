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
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      
      {/* Background Title */}
      <h1 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-[4.5rem] md:text-[7.5rem] font-black uppercase tracking-tight pointer-events-none whitespace-nowrap select-none bg-gradient-to-b from-primary/35 to-transparent bg-clip-text text-transparent magnetic-float">
        NOSSA EQUIPE
      </h1>

      {/* Carousel Container */}
      <div className="w-full max-w-6xl mx-auto h-[380px] relative mt-16" style={{ perspective: "1000px" }}>
        {/* Navigation Arrows */}
        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/60 hover:bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center z-20 energy-pulse hover:scale-110 shadow-md glow-border"
          style={{ paddingRight: "3px" }}
          aria-label="Membro anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/60 hover:bg-primary/80 text-primary-foreground rounded-full flex items-center justify-center z-20 energy-pulse hover:scale-110 shadow-md glow-border"
          style={{ paddingLeft: "3px" }}
          aria-label="Próximo membro"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Container */}
        <div className="w-full h-full flex justify-center items-center relative">
          {members.map((member, index) => {
            const position = getCardPosition(index);
            
            let transformClasses = "";
            let opacityClasses = "";
            let zIndexClasses = "";
            let filterClasses = "";

            switch (position) {
              case "center":
                transformClasses = "scale-110";
                opacityClasses = "opacity-100";
                zIndexClasses = "z-[10]";
                filterClasses = "";
                break;
              case "left-1":
                transformClasses = "-translate-x-48 md:-translate-x-52 scale-90";
                opacityClasses = "opacity-90";
                zIndexClasses = "z-[5]";
                filterClasses = "grayscale";
                break;
              case "left-2":
                transformClasses = "-translate-x-80 md:-translate-x-96 scale-80";
                opacityClasses = "opacity-70";
                zIndexClasses = "z-[1]";
                filterClasses = "grayscale";
                break;
              case "right-1":
                transformClasses = "translate-x-48 md:translate-x-52 scale-90";
                opacityClasses = "opacity-90";
                zIndexClasses = "z-[5]";
                filterClasses = "grayscale";
                break;
              case "right-2":
                transformClasses = "translate-x-80 md:translate-x-96 scale-80";
                opacityClasses = "opacity-70";
                zIndexClasses = "z-[1]";
                filterClasses = "grayscale";
                break;
              default:
                transformClasses = "scale-0";
                opacityClasses = "opacity-0";
                zIndexClasses = "z-0";
                filterClasses = "";
            }

            return (
              <div
                key={member.id}
                onClick={() => updateCarousel(index)}
                className={`absolute w-52 md:w-60 h-64 md:h-80 bg-card rounded-3xl shadow-2xl cursor-pointer transition-all duration-700 ease-out will-change-transform card-premium ${transformClasses} ${opacityClasses} ${zIndexClasses} ${position === "hidden" ? "pointer-events-none" : ""}`}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover object-top transition-all duration-700 ease-out ${filterClasses}`}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center mt-8 transition-all duration-500 ease-out px-4">
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-3 relative inline-block text-glow">
          {members[currentIndex].name}
          <span className="absolute -left-24 md:-left-28 top-1/2 w-16 md:w-24 h-0.5 bg-primary glow-border"></span>
          <span className="absolute -right-24 md:-right-28 top-1/2 w-16 md:w-24 h-0.5 bg-primary glow-border"></span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl font-medium uppercase tracking-wider opacity-80 -mt-4 text-gradient-subtle">
          {members[currentIndex].role}
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-12">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => updateCarousel(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125 glow-border"
                : "bg-primary/20 hover:bg-primary/40"
            }`}
            aria-label={`Ir para membro ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Team3DCarousel;
