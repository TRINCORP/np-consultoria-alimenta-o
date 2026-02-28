import { useEffect, useRef } from 'react';

export const SmokeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isVisible = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const style = getComputedStyle(document.documentElement);
    const accentHsl = style.getPropertyValue('--accent').trim().split(' ');
    const primaryHsl = style.getPropertyValue('--primary').trim().split(' ');

    const particles: Array<{
      x: number; y: number; size: number;
      speedX: number; speedY: number;
      opacity: number; fadeRate: number;
    }> = [];

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 60 + 40,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: -(Math.random() * 0.8 + 0.3),
      opacity: Math.random() * 0.3 + 0.1,
      fadeRate: 0.002,
    });

    for (let i = 0; i < 6; i++) particles.push(createParticle());

    // Visibility observer — pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const animate = () => {
      if (!isVisible) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= p.fadeRate;
        p.size += 0.15;

        if (p.opacity <= 0 || p.y < -100) {
          particles[i] = createParticle();
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `hsla(${accentHsl[0]}, ${accentHsl[1]}, ${accentHsl[2]}, ${p.opacity})`);
        gradient.addColorStop(0.5, `hsla(${primaryHsl[0]}, ${primaryHsl[1]}, ${primaryHsl[2]}, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
