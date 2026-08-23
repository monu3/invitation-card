import { useState, useEffect } from "react";
import curtainClosed from "@/assets/curtain-closed.jpg";

const CurtainAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"closed" | "opening" | "open">("closed");
  const OPEN_DURATION_MS = 2600;

  useEffect(() => {
    if (phase === "opening") {
      const timer = setTimeout(() => {
        setPhase("open");
        onComplete();
      }, OPEN_DURATION_MS);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete, OPEN_DURATION_MS]);

  return (
    <>
      {/* Curtain overlay that splits open */}
      {phase !== "open" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Left curtain half */}
          <div
            className={`curtain-panel curtain-left ${
              phase === "opening" ? "curtain-open-left" : "translate-x-0"
            }`}
            style={{
              backgroundImage: `url(${curtainClosed})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "left center",
            }}
          />

          {/* Right curtain half */}
          <div
            className={`curtain-panel curtain-right ${
              phase === "opening" ? "curtain-open-right" : "translate-x-0"
            }`}
            style={{
              backgroundImage: `url(${curtainClosed})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
            }}
          />

          {/* Tap prompt */}
          {phase === "closed" && (
            <button
              onClick={() => setPhase("opening")}
              className="relative z-10 flex flex-col items-center gap-4 cursor-pointer animate-pulse"
            >
              <div className="w-16 h-16 rounded-full border-2 border-cream flex items-center justify-center backdrop-blur-sm bg-cream/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-cream"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>
              </div>
              <span className="font-display text-cream text-lg tracking-widest uppercase drop-shadow-lg">
                Tap to Open
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CurtainAnimation;
