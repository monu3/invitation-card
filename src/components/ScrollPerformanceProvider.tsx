import { useEffect, ReactNode } from "react";

/**
 * Adds an `is-scrolling` class on <html> while the page is being scrolled.
 *
 * Decorative CSS animations (sparkles, spinning mandalas, glows) are paused
 * through `index.css` while scrolling. Keeping the scroll gesture cheap for the
 * compositor is what makes scrolling feel "buttery" on mobile: the browser can
 * focus on moving pixels instead of also animating paint-heavy effects.
 *
 * The class is removed ~140ms after the last scroll event, so animations
 * resume (and nobody notices they paused).
 */
const ScrollPerformanceProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;

    let idleTimer: number | undefined;
    let isScrolling = false;
    let frame = 0;

    const markScrolling = () => {
      frame = 0;
      if (!isScrolling) {
        isScrolling = true;
        root.classList.add("is-scrolling");
      }

      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        isScrolling = false;
        root.classList.remove("is-scrolling");
      }, 140);
    };

    // rAF-throttled so the handler itself never becomes the bottleneck.
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(markScrolling);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
      window.clearTimeout(idleTimer);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("is-scrolling");
    };
  }, []);

  return <>{children}</>;
};

export default ScrollPerformanceProvider;
