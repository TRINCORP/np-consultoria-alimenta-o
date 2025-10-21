import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useTextReveal = (text: string, delay = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 30 + delay);
      return () => clearTimeout(timeout);
    }
  }, [inView, displayedText, text, delay]);

  return { ref, displayedText: inView ? displayedText : '' };
};
