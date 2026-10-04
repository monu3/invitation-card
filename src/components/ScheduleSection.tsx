import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import preweddingImage from "@/assets/prewedding.png";
import feraImage from "@/assets/fera.png";
import PaisleyPattern from "@/components/rajasthani/PaisleyPattern";
import LazyLottie from "@/components/LazyLottie";
import mandalaSpin from "@/assets/lottie/mandala-spin.json";
import { useLanguage } from "@/hooks/useLanguage";

interface EventItemProps {
  name: string;
  time?: string;
  delay: number;
  textColor?: string;
  mutedColor?: string;
}

const EventItem = ({ name, time, delay, textColor = "text-primary", mutedColor = "text-muted-foreground" }: EventItemProps) => (
  <ScrollReveal delay={delay}>
    <div className={`flex items-center gap-4 py-2.5 border-b last:border-b-0`} style={{ borderColor: "rgba(255,255,255,0.2)" }}>
      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(40, 40%, 93%)" }} />
      <div className="flex-1">
        <p className={`font-display text-base md:text-lg ${textColor}`}>{name}</p>
      </div>
      {time && (
        <div className="flex items-center gap-1 flex-shrink-0">
          <Clock className={`w-3 h-3 ${mutedColor}`} />
          <p className={`font-body text-sm font-bold ${mutedColor}`}>{time}</p>
        </div>
      )}
    </div>
  </ScrollReveal>
);

interface DayCardProps {
  day: number;
  date: string;
  label: string;
  events: { name: string; time?: string }[];
  bgImage: string;
  delay: number;
  light?: boolean;
}

const DayCard = ({ day, date, label, events, bgImage, delay, light = false }: DayCardProps) => {
  const textColor = light ? "text-ivory" : "text-primary";
  const mutedColor = light ? "text-ivory/70" : "text-muted-foreground";

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`group relative overflow-hidden backdrop-blur-sm border-2 hover:border-primary/60 rounded-sm transition-colors duration-500 hover:shadow-lg ${light ? "border-ivory/30" : "border-primary/30 bg-card/60"}`}
      >
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-500 group-hover:opacity-50"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {light && <div className="absolute inset-0 bg-black/40" />}

        {/* Paisley corner decorations */}
        <div className="absolute top-2 left-2 rajasthani-motif">
          <PaisleyPattern size={25} color={light ? "hsl(40, 40%, 93%)" : "hsl(11, 65%, 25%)"} />
        </div>
        <div className="absolute top-2 right-2 rajasthani-motif" style={{ transform: "scaleX(-1)" }}>
          <PaisleyPattern size={25} color={light ? "hsl(40, 40%, 93%)" : "hsl(11, 65%, 25%)"} />
        </div>

        <div className="relative z-10 p-5 md:p-6">
          {/* Day header */}
          <div className="text-center mb-4">
            <p className={`font-body text-xs tracking-[0.4em] uppercase mb-1 ${mutedColor}`}>
              {label.includes("Pre") ? "दिन" : "दिन"} {day}
            </p>
            <h3 className={`font-display text-xl md:text-2xl mb-1 ${textColor}`}>
              {label}
            </h3>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <Calendar className={`w-4 h-4 ${textColor}`} />
              <p className={`font-body text-sm font-bold ${textColor}`}>{date}</p>
            </div>
            <div className="gold-line w-16 mx-auto mt-3" />
          </div>

          {/* Events list */}
          <div className="space-y-0">
            {events.map((event, index) => (
              <EventItem
                key={index}
                name={event.name}
                time={event.time}
                delay={delay + (index + 1) * 100}
                textColor={textColor}
                mutedColor={mutedColor}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const ScheduleSection = () => {
  const { t } = useLanguage();

  const day1Events = [
    { name: t("Mayara (Bhaat)", "मायरा (भाट)"), time: "12:15 PM" },
    { name: t("Tilak + Sangeet", "तिलक + संगीत"), time: "6:15 PM" },
  ];

  const day2Events = [
    { name: t("Haldi", "हल्दी"), time: "9:15 AM" },
    { name: t("War Mala", "वर माला"), time: "6:15 PM" },
    { name: t("Fera", "फेरा"), time: "9:15 PM" },
  ];

  return (
    <section className="relative py-8 md:py-32 px-6 bg-background/80 overflow-hidden">
      {/* Spinning mandala decorations */}
      <div className="absolute -top-16 -right-16 w-64 h-64 opacity-10 pointer-events-none hidden md:block">
        <LazyLottie src={mandalaSpin} loop autoplay speed={0.5} />
      </div>
      <div className="absolute -bottom-16 -left-16 w-72 h-72 opacity-10 pointer-events-none hidden md:block">
        <LazyLottie src={mandalaSpin} loop autoplay speed={0.7} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-3">
              {t("The Celebrations", "उत्सव")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              {t("Wedding Schedule", "शादी का कार्यक्रम")}
            </h2>
            <div className="rajasthani-divider w-48 mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 items-start gap-5 md:gap-6 max-w-3xl mx-auto">
          <DayCard
            day={1}
            date={t("November 25, 2026", "२५ नवंबर, २०२६")}
            label={t("Pre-Wedding", "शादी पूर्व")}
            events={day1Events}
            bgImage={preweddingImage}
            delay={150}
            light
          />
          <DayCard
            day={2}
            date={t("November 26, 2026", "२६ नवंबर, २०२६")}
            label={t("Wedding Day", "शादी का दिन")}
            events={day2Events}
            bgImage={feraImage}
            delay={250}
            light
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
