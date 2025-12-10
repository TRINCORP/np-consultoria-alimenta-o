import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail, Linkedin, Instagram } from "lucide-react";
import { TeamMember } from "@/data/teamMembers";

interface Team3DCarouselProps {
  members: TeamMember[];
}

const Team3DCarousel: React.FC<Team3DCarouselProps> = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = useCallback((newIndex: number, dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrentIndex((newIndex + members.length) % members.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [isAnimating, members.length]);

  const goNext = useCallback(() => {
    updateCarousel(currentIndex + 1, 1);
  }, [currentIndex, updateCarousel]);

  const goPrev = useCallback(() => {
    updateCarousel(currentIndex - 1, -1);
  }, [currentIndex, updateCarousel]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Touch navigation
  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goNext() : goPrev();
      }
    };
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + members.length) % members.length;
      cards.push({ member: members[index], position: i, originalIndex: index });
    }
    return cards;
  };

  const getCardStyles = (position: number) => {
    const baseTransition = {
      type: "spring",
      stiffness: 300,
      damping: 30,
    };

    switch (position) {
      case 0: // Center
        return {
          x: 0,
          scale: 1,
          zIndex: 50,
          opacity: 1,
          rotateY: 0,
          filter: "grayscale(0%) brightness(1)",
          transition: baseTransition,
        };
      case -1: // Left 1
        return {
          x: -220,
          scale: 0.85,
          zIndex: 40,
          opacity: 0.9,
          rotateY: 15,
          filter: "grayscale(60%) brightness(0.9)",
          transition: baseTransition,
        };
      case 1: // Right 1
        return {
          x: 220,
          scale: 0.85,
          zIndex: 40,
          opacity: 0.9,
          rotateY: -15,
          filter: "grayscale(60%) brightness(0.9)",
          transition: baseTransition,
        };
      case -2: // Left 2
        return {
          x: -380,
          scale: 0.7,
          zIndex: 30,
          opacity: 0.6,
          rotateY: 25,
          filter: "grayscale(80%) brightness(0.8)",
          transition: baseTransition,
        };
      case 2: // Right 2
        return {
          x: 380,
          scale: 0.7,
          zIndex: 30,
          opacity: 0.6,
          rotateY: -25,
          filter: "grayscale(80%) brightness(0.8)",
          transition: baseTransition,
        };
      default:
        return {
          x: position < 0 ? -500 : 500,
          scale: 0.5,
          zIndex: 0,
          opacity: 0,
          rotateY: position < 0 ? 35 : -35,
          filter: "grayscale(100%) brightness(0.7)",
          transition: baseTransition,
        };
    }
  };

  const currentMember = members[currentIndex];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#faf9f8] via-[#f5f3f1] to-[#f0edeb] relative overflow-hidden py-16 sm:py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      {/* Background Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-12 sm:top-16 left-1/2 transform -translate-x-1/2 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight pointer-events-none whitespace-nowrap select-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(183, 166, 161, 0.25) 0%, rgba(255, 255, 255, 0) 80%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontFamily: 'Arial Black, Arial Bold, Arial, sans-serif',
        }}
      >
        NOSSA EQUIPE
      </motion.h1>

      {/* Carousel Container */}
      <div 
        className="w-full max-w-[1400px] h-[400px] sm:h-[450px] relative mt-24 sm:mt-28 px-4"
        style={{ perspective: "1200px" }}
      >
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goPrev}
          className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-[60] backdrop-blur-sm border border-white/30 shadow-lg"
          style={{ 
            background: 'linear-gradient(135deg, rgba(183, 166, 161, 0.8), rgba(214, 185, 178, 0.8))',
          }}
          aria-label="Membro anterior"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goNext}
          className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-[60] backdrop-blur-sm border border-white/30 shadow-lg"
          style={{ 
            background: 'linear-gradient(135deg, rgba(183, 166, 161, 0.8), rgba(214, 185, 178, 0.8))',
          }}
          aria-label="Próximo membro"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </motion.button>

        {/* Cards Track */}
        <div 
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {getVisibleCards().map(({ member, position, originalIndex }) => {
            const styles = getCardStyles(position);
            
            return (
              <motion.div
                key={member.id}
                onClick={() => position !== 0 && updateCarousel(originalIndex, position > 0 ? 1 : -1)}
                animate={{
                  x: styles.x,
                  scale: styles.scale,
                  rotateY: styles.rotateY,
                  opacity: styles.opacity,
                  zIndex: styles.zIndex,
                }}
                transition={styles.transition}
                className={`absolute w-[240px] sm:w-[280px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden ${
                  position !== 0 ? 'cursor-pointer' : ''
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: position === 0 
                    ? '0 25px 60px rgba(183, 166, 161, 0.4), 0 10px 20px rgba(0, 0, 0, 0.1)'
                    : '0 15px 35px rgba(0, 0, 0, 0.15)',
                  filter: styles.filter,
                }}
                whileHover={position === 0 ? { y: -5 } : {}}
              >
                {/* Card Glow Effect for Center */}
                {position === 0 && (
                  <motion.div 
                    className="absolute -inset-1 rounded-2xl opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, rgba(214, 185, 178, 0.5), rgba(183, 166, 161, 0.3))',
                      filter: 'blur(15px)',
                    }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                
                {/* Card Content */}
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient overlay for center card */}
                  {position === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Member Info with AnimatePresence */}
      <div className="text-center mt-8 sm:mt-12 px-4 min-h-[180px] sm:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Name with decorative lines */}
            <div className="relative mb-3">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair"
                style={{ color: 'rgb(183, 166, 161)' }}
              >
                {currentMember.name}
              </motion.h2>
              
              {/* Decorative lines */}
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute -left-16 sm:-left-24 top-1/2 -translate-y-1/2 w-12 sm:w-20 h-0.5 origin-right hidden sm:block"
                style={{ background: 'linear-gradient(to left, rgb(183, 166, 161), transparent)' }}
              />
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="absolute -right-16 sm:-right-24 top-1/2 -translate-y-1/2 w-12 sm:w-20 h-0.5 origin-left hidden sm:block"
                style={{ background: 'linear-gradient(to right, rgb(183, 166, 161), transparent)' }}
              />
            </div>
            
            {/* Role */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.15em] mb-4"
            >
              {currentMember.role}
            </motion.p>

            {/* Bio */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-muted-foreground/80 text-xs sm:text-sm max-w-xl leading-relaxed mb-4 line-clamp-3"
            >
              {currentMember.bio}
            </motion.p>

            {/* Specializations */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap justify-center gap-2 mb-4"
            >
              {currentMember.specializations.slice(0, 3).map((spec, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                >
                  {spec}
                </span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-4"
            >
              {currentMember.social.email && (
                <a 
                  href={`mailto:${currentMember.social.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
              {currentMember.social.linkedin && (
                <a 
                  href={currentMember.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {currentMember.social.instagram && (
                <a 
                  href={currentMember.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-6">
        {members.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => updateCarousel(index, index > currentIndex ? 1 : -1)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-3 h-3 rounded-full transition-all duration-300"
            style={{
              background: index === currentIndex 
                ? 'linear-gradient(135deg, rgb(214, 185, 178), rgb(183, 166, 161))' 
                : 'rgba(183, 166, 161, 0.25)'
            }}
            aria-label={`Ir para membro ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgb(214, 185, 178), rgb(183, 166, 161))',
                  boxShadow: '0 0 10px rgba(183, 166, 161, 0.5)',
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Team3DCarousel;
