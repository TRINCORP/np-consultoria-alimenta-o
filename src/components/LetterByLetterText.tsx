import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LetterByLetterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

const LetterByLetterText = ({ 
  text, 
  className = '', 
  delay = 0, 
  speed = 40,
  as: Tag = 'span' 
}: LetterByLetterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasStarted) {
      const timer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay, hasStarted]);

  useEffect(() => {
    if (hasStarted && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [hasStarted, displayedText, text, speed]);

  return (
    <Tag ref={ref} className={className}>
      {displayedText}
      {displayedText.length < text.length && hasStarted && (
        <span className="inline-block w-0.5 h-[1em] bg-primary animate-pulse ml-0.5" />
      )}
    </Tag>
  );
};

export default LetterByLetterText;
