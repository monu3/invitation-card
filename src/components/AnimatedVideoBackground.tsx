import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  sway: number;
  swaySpeed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  shape: "petal" | "sparkle" | "glow";
}

const RAJASTHANI_PALETTE = [
  "#C41E3A",
  "#E85D04",
  "#F4A300",
  "#F9C74F",
  "#2A9D8F",
  "#E6399B",
  "#D4A373",
];

const GOLD_SPARKS = ["#D4AF37", "#F0D78C", "#FFE9A8"];

const AnimatedVideoBackground = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let isVisible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = (): Petal[] => {
      const particles: Petal[] = [];
      const count = Math.min(42, Math.floor((width * height) / 24000));

      for (let i = 0; i < count; i++) {
        const isSparkle = Math.random() < 0.3;
        const isGlow = !isSparkle && Math.random() < 0.15;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: isSparkle
            ? 1.5 + Math.random() * 2
            : isGlow
              ? 40 + Math.random() * 60
              : 4 + Math.random() * 7,
          speedY: isSparkle ? 0.15 + Math.random() * 0.4 : 0.35 + Math.random() * 0.7,
          sway: isSparkle ? 0 : 1 + Math.random() * 2,
          swaySpeed: 0.5 + Math.random() * 0.8,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: isSparkle
            ? 0.4 + Math.random() * 0.6
            : 0.22 + Math.random() * 0.28,
          color:
            isSparkle || Math.random() < 0.12
              ? GOLD_SPARKS[Math.floor(Math.random() * GOLD_SPARKS.length)]
              : RAJASTHANI_PALETTE[Math.floor(Math.random() * RAJASTHANI_PALETTE.length)],
          shape: isSparkle ? "sparkle" : isGlow ? "glow" : "petal",
        });
      }
      return particles;
    };

    const drawPetal = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawSparkle = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number,
      time: number
    ) => {
      const twinkle = 0.6 + 0.4 * Math.sin(time * 2 + x + y);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation + time * 0.3);
      ctx.globalAlpha = opacity * twinkle;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      const s = size * 3;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(s * 0.15, -s * 0.15, s, 0);
      ctx.quadraticCurveTo(s * 0.15, s * 0.15, 0, s);
      ctx.quadraticCurveTo(-s * 0.15, s * 0.15, -s, 0);
      ctx.quadraticCurveTo(-s * 0.15, -s * 0.15, 0, -s);
      ctx.fill();
      ctx.restore();
    };

    const drawGlow = (
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number,
      time: number
    ) => {
      const pulse = 0.7 + 0.3 * Math.sin(time * 0.8 + x * 0.02);
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, `${color}`);
      gradient.addColorStop(0.4, `${color}aa`);
      gradient.addColorStop(1, `${color}00`);
      ctx.globalAlpha = opacity * pulse;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    };

    let particles: Petal[] = [];
    let isRunning = false;

    const draw = (time: number) => {
      if (!isVisible) {
        isRunning = false;
        return;
      }
      isRunning = true;
      ctx.clearRect(0, 0, width, height);

      const seconds = time / 1000;

      particles.forEach((p, i) => {
        if (p.shape === "petal") {
          p.y += p.speedY;
          p.x += Math.sin(seconds * p.swaySpeed + i) * p.sway * 0.4;
          p.rotation += p.rotationSpeed;
          if (p.y > height + 30) {
            p.y = -30;
            p.x = Math.random() * width;
          }
          if (p.x < -30) p.x = width + 30;
          if (p.x > width + 30) p.x = -30;
          drawPetal(p.x, p.y, p.size, p.rotation, p.color, p.opacity);
        } else if (p.shape === "sparkle") {
          p.y += p.speedY;
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          drawSparkle(
            p.x,
            p.y,
            p.size,
            p.rotation,
            p.color,
            p.opacity,
            seconds
          );
        } else {
          p.y -= 0.08;
          if (p.y < -100) {
            p.y = height + 100;
            p.x = Math.random() * width;
          }
          drawGlow(p.x, p.y, p.size, p.color, p.opacity, seconds);
        }
      });

      rafId = requestAnimationFrame(draw);
    };

    resize();
    particles = createParticles();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isRunning) {
          rafId = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    window.addEventListener("resize", handleResize);

    function handleResize() {
      resize();
      particles = createParticles();
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default AnimatedVideoBackground;