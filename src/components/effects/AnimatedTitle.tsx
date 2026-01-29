import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const AnimatedTitle = ({ children, className = "", glowColor = "primary" }: AnimatedTitleProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsRevealed(true), 200);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Glow backdrop */}
      <div 
        className={`absolute inset-0 blur-3xl transition-opacity duration-1000 ${
          isRevealed ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(ellipse at center, hsl(var(--${glowColor})) 0%, transparent 70%)`,
        }}
      />
      
      {/* Main content with reveal effect */}
      <div className={`relative transition-all duration-1000 ${
        isRevealed 
          ? 'opacity-100 transform-none' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}>
        {children}
      </div>
    </div>
  );
};

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className={`relative inline-block cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      {isHovered && (
        <>
          <span className="absolute inset-0 text-primary/50 animate-glitch-1 z-0" aria-hidden>
            {text}
          </span>
          <span className="absolute inset-0 text-accent/50 animate-glitch-2 z-0" aria-hidden>
            {text}
          </span>
        </>
      )}
    </span>
  );
};

interface SplitRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitRevealText = ({ text, className = "", delay = 0 }: SplitRevealTextProps) => {
  const [revealed, setRevealed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setRevealed(true), delay);
    }
  }, [inView, delay]);

  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span 
          key={i} 
          className="inline-block overflow-hidden mr-[0.25em]"
        >
          <span
            className={`inline-block transition-all duration-700 ease-out ${
              revealed 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-full opacity-0'
            }`}
            style={{ 
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

interface TypewriterTitleProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  lineDelay?: number;
}

export const TypewriterTitle = ({ 
  lines, 
  className = "", 
  lineClassName = "",
  cursorClassName = "",
  typingSpeed = 50,
  lineDelay = 500 
}: TypewriterTitleProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView || isComplete) return;

    if (currentLine >= lines.length) {
      setIsComplete(true);
      return;
    }

    const targetText = lines[currentLine];

    if (currentText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentText('');
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [inView, currentLine, currentText, lines, typingSpeed, lineDelay, isComplete]);

  return (
    <div ref={ref} className={className}>
      {lines.slice(0, currentLine).map((line, i) => (
        <div key={i} className={lineClassName}>{line}</div>
      ))}
      {currentLine < lines.length && (
        <div className={lineClassName}>
          {currentText}
          <span className={`inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse ${cursorClassName}`} />
        </div>
      )}
    </div>
  );
};

interface MorphingTitleProps {
  primaryText: string;
  accentText: string;
  className?: string;
}

export const MorphingTitle = ({ primaryText, accentText, className = "" }: MorphingTitleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [inView]);

  return (
    <h1 ref={ref} className={`relative ${className}`}>
      {/* Background glow */}
      <div className={`absolute -inset-x-10 inset-y-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Primary text with 3D effect */}
      <span className={`relative inline-block transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <span className="relative">
          {/* Shadow layers for 3D effect */}
          <span className="absolute inset-0 text-primary/5 translate-x-1 translate-y-1 select-none" aria-hidden>
            {primaryText}
          </span>
          <span className="absolute inset-0 text-primary/10 translate-x-0.5 translate-y-0.5 select-none" aria-hidden>
            {primaryText}
          </span>
          {/* Main text */}
          <span className="relative text-white drop-shadow-lg">
            {primaryText}
          </span>
        </span>
      </span>
      
      {/* Accent text with shimmer */}
      <span className={`inline-block transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <span className="relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-shimmer-text">
            {accentText}
          </span>
        </span>
      </span>
    </h1>
  );
};

export default AnimatedTitle;
