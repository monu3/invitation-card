import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import peacefulAudio from "@/assets/peaceful.mp3";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().catch(() => {
          // Autoplay prevented by browser, wait for user interaction
        });
        setIsPlaying(true);
        setHasInteracted(true);
        document.removeEventListener("pointerdown", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
      }
    };

    // Deliberately NOT listening to `scroll`: a global scroll listener that is
    // never removed (when the visitor never interacts) adds work to every
    // scroll frame on mobile.
    document.addEventListener("pointerdown", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return () => {
      document.removeEventListener("pointerdown", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={peacefulAudio} type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
        aria-label={isPlaying ? "Mute audio" : "Play audio"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
};

export default AudioPlayer;
