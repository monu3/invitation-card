import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Navigation } from "lucide-react";
import venueImage from "@/assets/venue1.png";
import flora from "@/assets/flora.webp";
import LazyLottie from "@/components/LazyLottie";
import mandalaSpin from "@/assets/lottie/mandala-spin.json";
import ElephantMotif from "@/components/rajasthani/ElephantMotif";
import { useLanguage } from "@/hooks/useLanguage";

const BARAT_DATE = new Date("2026-11-26T07:15:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownUnit = ({
  value,
  label,
  index = 0,
}: {
  value: number;
  label: string;
  index?: number;
}) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    <div className="relative overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={value}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-4xl md:text-6xl text-primary leading-none"
        >
          {String(value).padStart(2, "0")}
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary mt-2">
      {label}
    </div>
  </motion.div>
);

const WeddingCountdown = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, BARAT_DATE - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <ScrollReveal>
      <div className="text-center mb-8">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-3">
          {t("Counting Down To", "गिनती हो रही है")}
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-2">
          {t("The Big Day", "बड़ा दिन")}
        </h2>
        <div className="rajasthani-divider w-48 mx-auto mt-6 mb-5" />

        <div className="flex items-center justify-center gap-3 md:gap-12">
          <CountdownUnit index={0} value={timeLeft.days} label={t("Days", "दिन")} />
          <span className="font-display text-3xl text-primary/60 self-start mt-2">
            :
          </span>
          <CountdownUnit index={1} value={timeLeft.hours} label={t("Hours", "घंटे")} />
          <span className="font-display text-3xl text-primary/60 self-start mt-2">
            :
          </span>
          <CountdownUnit index={2} value={timeLeft.minutes} label={t("Minutes", "मिनट")} />
          <span className="font-display text-3xl text-primary/40 self-start mt-2">
            :
          </span>
          <CountdownUnit index={3} value={timeLeft.seconds} label={t("Seconds", "सेकंड")} />
        </div>
      </div>
    </ScrollReveal>
  );
};

const CountdownVenueSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-8 md:py-32 px-6 cream-texture">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${flora})` }}
      />

      {/* Decorative spinning mandala behind countdown */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] max-w-[90vw] max-h-[60vh] opacity-[0.18] pointer-events-none">
        <LazyLottie src={mandalaSpin} loop autoplay speed={0.8} />
      </div>

      {/* Decorative elephants */}
      <div className="absolute bottom-10 left-10 rajasthani-motif hidden lg:block">
        <ElephantMotif size={70} color="hsl(11, 65%, 25%)" />
      </div>
      <div className="absolute bottom-10 right-10 rajasthani-motif hidden lg:block" style={{ transform: "scaleX(-1)" }}>
        <ElephantMotif size={70} color="hsl(11, 65%, 25%)" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Countdown */}
        <WeddingCountdown />

        {/* Venue */}
        <ScrollReveal delay={200}>
          <div className="rajasthani-arch rounded-sm overflow-hidden shadow-2xl mb-6">
            <img
              src={venueImage}
              alt="Wedding venue"
              className="w-full h-[300px] md:h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl text-ivory mb-1">
                Avocado and Orchid Resort
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card/60 backdrop-blur-sm border-2 border-primary/30 rounded-sm p-4 md:p-5">
            <div className="flex items-start gap-2 text-center md:text-left">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-body text-sm text-primary mb-0">
                  Chaukitole, Hetauda-2, Nepal
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=27.435994473929117,85.03652759738166"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
            >
              <Navigation className="w-4 h-4" />
              {t("Get Directions", "दिशा प्राप्त करें")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountdownVenueSection;
