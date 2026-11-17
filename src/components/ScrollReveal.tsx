import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Lightweight reveal-on-scroll.
 *
 * Only `opacity` + `transform` are animated (compositor friendly), the observed
 * element is unobserved as soon as it reveals, and reduced-motion users get the
 * content immediately.
 */
const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      el.classList.add("revealed");
      return;
    }

    let timer: number | undefined;
    let frame = 0;

    const reveal = () => {
      el.classList.add("revealed");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        if (delay > 0) {
          timer = window.setTimeout(reveal, delay);
        } else {
          // Double rAF guarantees the initial styles are painted first so the
          // CSS transition actually runs instead of snapping into place.
          frame = window.requestAnimationFrame(() => {
            frame = window.requestAnimationFrame(reveal);
          });
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
