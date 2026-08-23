import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock } from "lucide-react";
import haldiImage from "@/assets/haldi.jpg";
import baratImage from "@/assets/sangeet.png";
import flora from "@/assets/flora.webp";

interface EventCardProps {
  dateEn: string;
  dateUr: string;
  delay: number;
  bgImage: string;
}

const EventCard = ({ dateEn, dateUr, delay, bgImage }: EventCardProps) => {
  const { lang, t } = useLanguage();
  const isUrdu = lang === "ur";

  return (
    <ScrollReveal delay={delay}>
      <div className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border border-border hover:border-primary/40 rounded-sm p-6 min-h-[140px] md:min-h-[160px] transition-all duration-500 hover:shadow-lg">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 transition-opacity duration-500 group-hover:opacity-80"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Date in bottom right corner */}
        <div className="absolute bottom-1 right-2 z-10 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <p
            className={
              isUrdu
                ? "font-urdu text-base sm:text-base text-primary font-bold"
                : "font-body text-base sm:text-base text-primary font-bold"
            }
          >
            {t(dateEn, dateUr)}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ScheduleSection = () => {
  const { lang, t } = useLanguage();
  const isUrdu = lang === "ur";

  return (
    <section className="relative py-8 md:py-32 px-6 bg-background">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${flora})` }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p
              className={
                isUrdu
                  ? "font-urdu text-base text-primary mb-3"
                  : "font-body text-sm tracking-[0.4em] uppercase text-primary mb-3"
              }
            >
              {t("The Celebrations", "تقریبات")}
            </p>
            <h2
              className={
                isUrdu
                  ? "font-urdu text-3xl md:text-4xl text-primary"
                  : "font-display text-4xl md:text-5xl text-primary"
              }
            >
              {t("Wedding Schedule", "شادی کا شیڈول")}
            </h2>
            <div className="gold-line w-24 mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          <EventCard
            dateEn="November 24, 2026"
            dateUr="۱۳ مارچ ۲۰۲۶"
            delay={150}
            bgImage={haldiImage}
          />
          <EventCard
            dateEn="November 25, 2026"
            dateUr="۱۵ مارچ ۲۰۲۶"
            delay={250}
            bgImage={baratImage}
            // icon="💍"
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
