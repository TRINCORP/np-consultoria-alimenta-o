import { useState, useEffect } from 'react';

export const useThreeGuard = () => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl) {
      setCanRender(true);
    }
    
    return () => {
      canvas.remove();
    };
  }, []);

  return canRender;
};
