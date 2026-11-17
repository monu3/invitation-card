import { ChevronDown } from "lucide-react";

interface ScrollDownButtonProps {
  targetId: string;
  label: string;
  className?: string;
}

/**
 * Large, thumb-friendly "scroll down" button.
 * Uses native smooth scrolling (no JS animation loop) so it stays smooth on
 * low-end phones.
 */
const ScrollDownButton = ({ targetId, label, className = "" }: ScrollDownButtonProps) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={`scroll-down-btn group relative inline-flex min-h-[60px] max-w-full items-center justify-center gap-2 rounded-full border-2 border-primary/60 bg-card/90 px-5 py-3 text-primary shadow-[0_10px_28px_-10px_rgba(92,32,24,0.65)] transition-transform duration-200 active:scale-[0.97] sm:min-h-[54px] sm:px-6 ${className}`}
    >
      <span className="font-body text-[11px] font-bold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.3em]">
        {label}
      </span>
      <ChevronDown className="h-6 w-6 scroll-nudge" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollDownButton;
