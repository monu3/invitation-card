import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import peacefulAudio from "@/assets/peaceful.mp3";

const AUDIO_TOGGLE_SELECTOR = "[data-audio-toggle]";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Once the visitor deliberately pauses, never auto-resume behind their back.
  const userPausedRef = useRef(false);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || userPausedRef.current) return false;

    try {
      audio.muted = false;
      audio.volume = 1;
      await audio.play();
      setIsPlaying(true);
      return true;
    } catch {
      // Autoplay blocked by the browser (mobile policies, low-power mode, ...)
      setIsPlaying(false);
      return false;
    }
  }, []);

  // Start the music as soon as the page loads. Browsers that already trust the
  // site (repeat visits, installed PWA, desktop with media engagement) play it
  // immediately.
  useEffect(() => {
    let cancelled = false;
    let removeGestureFallback: (() => void) | undefined;

    // Mobile browsers require a user gesture before audible playback. On this
    // page the first gesture is the curtain's "Tap to Open", so the music
    // starts exactly when the invitation is opened.
    const armGestureFallback = () => {
      const events = ["pointerdown", "touchstart", "mousedown", "click", "keydown"] as const;

      function remove() {
        events.forEach((event) => document.removeEventListener(event, onGesture));
        if (removeGestureFallback === remove) removeGestureFallback = undefined;
      }

      function onGesture(event: Event) {
        const target = event.target as Element | null;
        // Let the mute/play button make its own decision.
        if (target?.closest?.(AUDIO_TOGGLE_SELECTOR)) return;

        // Not every browser grants user activation for every event type, so
        // keep listening until playback actually starts.
        void play().then((started) => {
          if (started) remove();
        });
      }

      events.forEach((event) =>
        document.addEventListener(event, onGesture, { passive: true })
      );

      removeGestureFallback = remove;
    };

    void play().then((started) => {
      if (cancelled || started) return;
      armGestureFallback();
    });

    return () => {
      cancelled = true;
      removeGestureFallback?.();
    };
  }, [play]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      userPausedRef.current = false;
      void play();
    } else {
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={peacefulAudio}
        loop
        preload="auto"
        autoPlay
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        data-audio-toggle
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
        aria-label={isPlaying ? "Mute audio" : "Play audio"}
        aria-pressed={isPlaying}
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
