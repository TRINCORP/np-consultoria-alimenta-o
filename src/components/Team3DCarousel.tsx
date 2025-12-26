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

  const getCardStyles = (position: number, isMobile: boolean) => {
    const baseTransition = {
      type: "spring",
      stiffness: 300,
      damping: 30,
    };

    // Responsive offsets
    const offsets = isMobile 
      ? { side1: 140, side2: 240 }
      : { side1: 180, side2: 320 };

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
          x: -offsets.side1,
          scale: 0.8,
          zIndex: 40,
          opacity: 0.85,
          rotateY: 12,
          filter: "grayscale(50%) brightness(0.9)",
          transition: baseTransition,
        };
      case 1: // Right 1
        return {
          x: offsets.side1,
          scale: 0.8,
          zIndex: 40,
          opacity: 0.85,
          rotateY: -12,
          filter: "grayscale(50%) brightness(0.9)",
          transition: baseTransition,
        };
      case -2: // Left 2
        return {
          x: -offsets.side2,
          scale: 0.65,
          zIndex: 30,
          opacity: isMobile ? 0 : 0.5,
          rotateY: 20,
          filter: "grayscale(70%) brightness(0.8)",
          transition: baseTransition,
        };
      case 2: // Right 2
        return {
          x: offsets.side2,
          scale: 0.65,
          zIndex: 30,
          opacity: isMobile ? 0 : 0.5,
          rotateY: -20,
          filter: "grayscale(70%) brightness(0.8)",
          transition: baseTransition,
        };
      default:
        return {
          x: position < 0 ? -400 : 400,
          scale: 0.5,
          zIndex: 0,
          opacity: 0,
          rotateY: position < 0 ? 30 : -30,
          filter: "grayscale(100%) brightness(0.7)",
          transition: baseTransition,
        };
    }
  };

  // Responsive check
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentMember = members[currentIndex];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-[#f8f6f4] to-[#f2efec] relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      {/* Background Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-8 sm:top-12 lg:top-16 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight pointer-events-none whitespace-nowrap select-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(183, 166, 161, 0.2) 0%, rgba(255, 255, 255, 0) 85%)',
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
        className="w-full max-w-5xl h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] relative mt-20 sm:mt-24 lg:mt-28 px-4"
        style={{ perspective: "1000px" }}
      >
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(183, 166, 161, 0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={goPrev}
          className="absolute left-0 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-[60] backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300"
          style={{ 
            background: 'linear-gradient(135deg, rgba(183, 166, 161, 0.9), rgba(214, 185, 178, 0.9))',
          }}
          aria-label="Membro anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(183, 166, 161, 0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={goNext}
          className="absolute right-0 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-[60] backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300"
          style={{ 
            background: 'linear-gradient(135deg, rgba(183, 166, 161, 0.9), rgba(214, 185, 178, 0.9))',
          }}
          aria-label="Próximo membro"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>

        {/* Cards Track */}
        <div 
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {getVisibleCards().map(({ member, position, originalIndex }) => {
            const styles = getCardStyles(position, isMobile);
            
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
                className={`absolute w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[240px] sm:h-[270px] md:h-[300px] lg:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden ${
                  position !== 0 ? 'cursor-pointer' : ''
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: position === 0 
                    ? '0 20px 50px rgba(183, 166, 161, 0.35), 0 8px 16px rgba(0, 0, 0, 0.08)'
                    : '0 10px 25px rgba(0, 0, 0, 0.12)',
                  filter: styles.filter,
                }}
                whileHover={position === 0 ? { y: -8, boxShadow: '0 30px 60px rgba(183, 166, 161, 0.45), 0 12px 24px rgba(0, 0, 0, 0.1)' } : {}}
              >
                {/* Card Glow Effect for Center */}
                {position === 0 && (
                  <motion.div 
                    className="absolute -inset-0.5 sm:-inset-1 rounded-xl sm:rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(214, 185, 178, 0.6), rgba(183, 166, 161, 0.4), rgba(214, 185, 178, 0.6))',
                      filter: 'blur(12px)',
                    }}
                    animate={{
                      opacity: [0.4, 0.6, 0.4],
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                
                {/* Card Content */}
                <div className="relative w-full h-full bg-background rounded-xl sm:rounded-2xl overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Elegant gradient overlay for center card */}
                  {position === 0 && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Shimmer effect on center card */}
                  {position === 0 && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Member Info with AnimatePresence */}
      <div className="text-center mt-6 sm:mt-8 lg:mt-10 px-4 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Name with decorative lines */}
            <div className="relative mb-2 sm:mb-3">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-primary"
              >
                {currentMember.name}
              </motion.h2>
              
              {/* Decorative lines */}
              <motion.span 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="absolute -left-12 sm:-left-20 lg:-left-24 top-1/2 -translate-y-1/2 w-8 sm:w-16 lg:w-20 h-px origin-right hidden sm:block bg-gradient-to-l from-primary/60 to-transparent"
              />
              <motion.span 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="absolute -right-12 sm:-right-20 lg:-right-24 top-1/2 -translate-y-1/2 w-8 sm:w-16 lg:w-20 h-px origin-left hidden sm:block bg-gradient-to-r from-primary/60 to-transparent"
              />
            </div>
            
            {/* Role */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-muted-foreground text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.12em] sm:tracking-[0.15em] mb-3 sm:mb-4"
            >
              {currentMember.role}
            </motion.p>

            {/* Bio */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-muted-foreground/70 text-xs sm:text-sm max-w-md lg:max-w-lg leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
            >
              {currentMember.bio}
            </motion.p>

            {/* Specializations */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4"
            >
              {currentMember.specializations.slice(0, 3).map((spec, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + idx * 0.1 }}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-primary/10 text-primary/80 border border-primary/20 hover:bg-primary/15 transition-colors duration-300"
                >
                  {spec}
                </motion.span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              {currentMember.social.email && (
                <motion.a 
                  href={`mailto:${currentMember.social.email}`}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              {currentMember.social.linkedin && (
                <motion.a 
                  href={currentMember.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              {currentMember.social.instagram && (
                <motion.a 
                  href={currentMember.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-6">
        {members.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => updateCarousel(index, index > currentIndex ? 1 : -1)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.85 }}
            className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300"
            style={{
              background: index === currentIndex 
                ? 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))' 
                : 'hsl(var(--primary) / 0.2)'
            }}
            aria-label={`Ir para membro ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  boxShadow: '0 0 12px hsl(var(--primary) / 0.5)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Team3DCarousel;
