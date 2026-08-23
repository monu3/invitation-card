import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Navigation } from "lucide-react";
// import venueImage from "@/assets/catring.jpg";
import venueImage from "@/assets/venue1.png";
import flora from "@/assets/flora.webp";

const BARAT_DATE = new Date("2026-11-26T19:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownVenueSection = () => {
  const { lang, t } = useLanguage();
  const isUrdu = lang === "ur";
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

  const CountdownUnit = ({
    value,
    labelEn,
    labelUr,
  }: {
    value: number;
    labelEn: string;
    labelUr: string;
  }) => (
    <div className="text-center">
      <div className="font-display text-4xl md:text-6xl text-primary leading-none">
        {String(value).padStart(2, "0")}
      </div>
      <div
        className={
          isUrdu
            ? "font-urdu text-sm text-primary mt-2"
            : "font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary mt-2"
        }
      >
        {t(labelEn, labelUr)}
      </div>
    </div>
  );

  return (
    <section className="relative py-8 md:py-32 px-6 cream-texture">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${flora})` }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Countdown */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <p
              className={
                isUrdu
                  ? "font-urdu text-base text-primary mb-3"
                  : "font-body text-sm tracking-[0.4em] uppercase text-primary mb-3"
              }
            >
              {t("Counting Down To", "گنتی شروع ہے")}
            </p>
            <h2
              className={
                isUrdu
                  ? "font-urdu text-3xl md:text-4xl text-primary mb-2"
                  : "font-display text-4xl md:text-5xl text-primary mb-2"
              }
            >
              {t("The Big Day", "بڑا دن")}
            </h2>
            <div className="gold-line w-24 mx-auto mt-6 mb-5" />

            <div className="flex items-center justify-center gap-3 md:gap-12">
              <CountdownUnit
                value={timeLeft.days}
                labelEn="Days"
                labelUr="دن"
              />
              <span className="font-display text-3xl text-primary/60 self-start mt-2">
                :
              </span>
              <CountdownUnit
                value={timeLeft.hours}
                labelEn="Hours"
                labelUr="گھنٹے"
              />
              <span className="font-display text-3xl text-primary/60 self-start mt-2">
                :
              </span>
              <CountdownUnit
                value={timeLeft.minutes}
                labelEn="Minutes"
                labelUr="منٹ"
              />
              <span className="font-display text-3xl text-primary/40 self-start mt-2">
                :
              </span>
              <CountdownUnit
                value={timeLeft.seconds}
                labelEn="Seconds"
                labelUr="سیکنڈ"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Venue */}
        <ScrollReveal delay={200}>
          <div className="relative rounded-sm overflow-hidden shadow-2xl mb-6">
            <img
              src={venueImage}
              alt="Wedding venue"
              className="w-full h-[200px] md:h-[200px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h3
                className={
                  isUrdu
                    ? "font-urdu text-2xl md:text-3xl text-ivory mb-1"
                    : "font-display text-2xl md:text-3xl text-ivory mb-1"
                }
              >
                {t("Avocado and Orchid Resort", "گرینڈ مارکی")}
              </h3>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card/60 backdrop-blur-sm border border-border rounded-sm p-6 md:p-8">
            <div className="flex items-start gap-3 text-center md:text-left">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p
                  className={
                    isUrdu
                      ? "font-urdu text-base text-primary mb-1"
                      : "font-body text-lg text-primary mb-1"
                  }
                >
                  {t(
                    "Chaukitole, Hetauda-2, Nepal",
                    "۱۲۳ گارڈن ایونیو، لاہور، پاکستان",
                  )}
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=27.435994473929117,85.03652759738166"
              target="_blank"
              rel="noopener noreferrer"
              className={
                isUrdu
                  ? "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-urdu text-sm rounded-sm hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
                  : "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              }
            >
              <Navigation className="w-4 h-4" />
              {t("Get Directions", "نقشہ")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountdownVenueSection;
