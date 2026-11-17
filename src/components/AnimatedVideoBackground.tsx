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

const ROTATION_STEPS = 8; // pre-rendered rotation buckets
const TWO_PI = Math.PI * 2;

/**
 * Pre-renders a particle once into a small offscreen canvas.
 * Drawing a cached bitmap with `drawImage` is dramatically cheaper than running
 * `ellipse`/`quadraticCurveTo` + `shadowBlur` + gradients every single frame,
 * which is what used to make scrolling stutter on phones.
 */
const createSprite = (
  w: number,
  h: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void
): HTMLCanvasElement => {
  const sprite = document.createElement("canvas");
  sprite.width = Math.max(1, Math.ceil(w));
  sprite.height = Math.max(1, Math.ceil(h));
  const ctx = sprite.getContext("2d");
  if (ctx) draw(ctx, sprite.width, sprite.height);
  return sprite;
};

const AnimatedVideoBackground = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let running = false;
    let inView = true;
    let lastFrame = 0;

    // Phones get fewer particles, a smaller render resolution and ~30fps.
    const maxDpr = isCoarse ? 1.5 : 2;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const frameBudget = isCoarse ? 1000 / 30 : 1000 / 60;

    const spriteCache = new Map<string, HTMLCanvasElement[]>();

    const getSprites = (
      shape: Petal["shape"],
      color: string,
      size: number
    ): HTMLCanvasElement[] => {
      const key = `${shape}|${color}|${size.toFixed(1)}`;
      const cached = spriteCache.get(key);
      if (cached) return cached;

      // Keep memory bounded on long sessions / repeated resizes.
      if (spriteCache.size > 90) spriteCache.clear();

      const sprites: HTMLCanvasElement[] = [];
      const steps = shape === "glow" ? 1 : ROTATION_STEPS;

      for (let step = 0; step < steps; step++) {
        const angle = (step / ROTATION_STEPS) * TWO_PI;

        if (shape === "petal") {
          const pad = 2;
          const w = size * 2 + pad * 2;
          const h = size * 2 + pad * 2;
          sprites.push(
            createSprite(w, h, (sctx) => {
              sctx.translate(w / 2, h / 2);
              sctx.rotate(angle);
              sctx.fillStyle = color;
              sctx.beginPath();
              sctx.ellipse(0, 0, size, size * 0.55, 0, 0, TWO_PI);
              sctx.fill();
            })
          );
        } else if (shape === "sparkle") {
          const s = size * 3;
          const pad = s + 4;
          const dim = pad * 2;
          sprites.push(
            createSprite(dim, dim, (sctx) => {
              sctx.translate(dim / 2, dim / 2);
              sctx.rotate(angle);
              sctx.fillStyle = color;
              // A soft glow baked into the sprite (no per-frame shadowBlur).
              sctx.shadowColor = color;
              sctx.shadowBlur = 6;
              sctx.beginPath();
              sctx.moveTo(0, -s);
              sctx.quadraticCurveTo(s * 0.15, -s * 0.15, s, 0);
              sctx.quadraticCurveTo(s * 0.15, s * 0.15, 0, s);
              sctx.quadraticCurveTo(-s * 0.15, s * 0.15, -s, 0);
              sctx.quadraticCurveTo(-s * 0.15, -s * 0.15, 0, -s);
              sctx.fill();
            })
          );
        } else {
          const dim = size * 2;
          sprites.push(
            createSprite(dim, dim, (sctx) => {
              const gradient = sctx.createRadialGradient(
                size,
                size,
                0,
                size,
                size,
                size
              );
              gradient.addColorStop(0, color);
              gradient.addColorStop(0.4, `${color}aa`);
              gradient.addColorStop(1, `${color}00`);
              sctx.fillStyle = gradient;
              sctx.beginPath();
              sctx.arc(size, size, size, 0, TWO_PI);
              sctx.fill();
            })
          );
        }
      }

      spriteCache.set(key, sprites);
      return sprites;
    };

    const createParticles = (): Petal[] => {
      const particles: Petal[] = [];
      const density = isCoarse ? 1 / 42000 : 1 / 26000;
      const maxCount = isCoarse ? 16 : 38;
      const count = Math.max(6, Math.min(maxCount, Math.floor(width * height * density)));

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
          rotation: Math.random() * TWO_PI,
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

    const drawParticle = (p: Petal, seconds: number, time: number) => {
      // Sizes are bucketed so the sprite cache stays small.
      const size =
        p.shape === "glow"
          ? Math.round(p.size / 10) * 10
          : Math.round(p.size * 2) / 2;
      const sprites = getSprites(p.shape, p.color, size);

      if (p.shape === "glow") {
        // Pulse written straight into globalAlpha instead of rebuilding a gradient.
        const pulse = 0.7 + 0.3 * Math.sin(time * 0.0008 + p.x * 0.02);
        const sprite = sprites[0];
        ctx.globalAlpha = p.opacity * pulse;
        const dim = size * 2;
        ctx.drawImage(sprite, p.x - size, p.y - size, dim, dim);
        return;
      }

      const spriteIndex =
        Math.floor((p.rotation / TWO_PI) * ROTATION_STEPS) % ROTATION_STEPS;
      const sprite = sprites[spriteIndex];

      if (p.shape === "sparkle") {
        const twinkle = 0.6 + 0.4 * Math.sin(seconds * 2 + p.x + p.y);
        ctx.globalAlpha = p.opacity * twinkle;
      } else {
        ctx.globalAlpha = p.opacity;
      }

      const w = sprite.width;
      const h = sprite.height;
      ctx.drawImage(sprite, p.x - w / 2, p.y - h / 2, w, h);
    };

    let particles: Petal[] = [];

    const draw = (time: number) => {
      if (!inView || document.hidden) {
        running = false;
        return;
      }

      rafId = window.requestAnimationFrame(draw);

      const elapsed = time - lastFrame;
      if (elapsed < frameBudget) return;
      lastFrame = time;

      // Movement is expressed per second so 30fps and 60fps look identical.
      const step = Math.min(elapsed, 50) / 16.667;
      const seconds = time / 1000;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.shape === "petal") {
          p.y += p.speedY * step;
          p.x += Math.sin(seconds * p.swaySpeed + i) * p.sway * 0.4 * step;
          p.rotation += p.rotationSpeed * step;
          if (p.y > height + 30) {
            p.y = -30;
            p.x = Math.random() * width;
          }
          if (p.x < -30) p.x = width + 30;
          if (p.x > width + 30) p.x = -30;
        } else if (p.shape === "sparkle") {
          p.y += p.speedY * step;
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
        } else {
          p.y -= 0.08 * step;
          if (p.y < -100) {
            p.y = height + 100;
            p.x = Math.random() * width;
          }
        }

        drawParticle(p, seconds, time);
      }

      ctx.globalAlpha = 1;
    };

    const start = () => {
      if (running) return;
      running = true;
      lastFrame = 0;
      rafId = window.requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(rafId);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const nextWidth = parent.clientWidth;
      const nextHeight = parent.clientHeight;
      if (!nextWidth || !nextHeight) return;

      // Mobile browsers fire resize when the URL bar collapses mid-scroll.
      // Re-allocating the canvas there used to cause a visible hitch, so tiny
      // height-only changes are ignored (CSS keeps the canvas stretched).
      if (width === nextWidth && Math.abs(height - nextHeight) < 80) return;

      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles();
    };

    resize();
    if (!particles.length) particles = createParticles();

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let resizeFrame = 0;
    const onResize = () => {
      if (resizeFrame) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = 0;
        resize();
      });
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else if (inView) start();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      spriteCache.clear();
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
