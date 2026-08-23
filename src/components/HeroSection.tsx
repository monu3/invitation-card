import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/ScrollReveal";
import curtainOpen from "@/assets/curtain-open.jpg";
import flora from "@/assets/flora.webp";

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const isUrdu = lang === "ur";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${flora})` }}
      />
      <div
        className="absolute inset-0 z-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255, 248, 236, 0.35) 0%, rgba(255, 248, 236, 0.15) 35%, rgba(255, 248, 236, 0.0) 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 bg-center bg-cover opacity-70"
        style={{ backgroundImage: `url(${curtainOpen})` }}
      />
      <div className="absolute inset-0 z-20 bg-background/10" />
      {/* Decorative top ornament */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line z-30" />

      <div className="relative z-30 text-center max-w-2xl mx-auto w-full min-h-screen flex flex-col items-center justify-between pt-4 pb-10 px-4 gap-8">
        {/* Bismillah */}
        <div className="animate-fade-in opacity-0">
          {isUrdu ? (
            <p className="font-urdu text-base sm:text-base text-primary max-w-xs sm:max-w-sm mx-auto leading-relaxed">
              <span className="block">بِسْمِ اللَّهِ</span>
              <span className="block">الرَّحْمَٰنِ</span>
              <span className="block">الرَّحِيمِ</span>
            </p>
          ) : (
            <p className="font-body text-base sm:text-base text-primary max-w-xs sm:max-w-sm mx-auto leading-relaxed">
              <span className="block font-bold">मंगलम भगवान विष्णु, मंगलम गरुड़ध्वज।</span>
              <span className="block font-bold">मंगलम पुण्डरीकाक्ष, मंगलाय तनो हरि।</span>
            </p>
          )}
        </div>

        {/* Center content: invitation + names */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl">
          {/* We invite you */}
          <ScrollReveal delay={600}>
            {isUrdu ? (
              <p className="font-urdu text-xs sm:text-sm md:text-base text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
                <span className="block">ہم خوشی سے</span>
                <span className="block">آپ کو اس مبارک</span>
                <span className="block">موقع پر مدعو کرتے ہیں</span>
              </p>
            ) : (
              <p className="font-body text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase text-inherit-foreground mb-8 leading-relaxed">
                <span className="block font-bold">We Invite You</span>
                <span className="block font-bold">To Celebrate The</span>
                <span className="block font-bold">Union Of</span>
              </p>
            )}
          </ScrollReveal>

          {/* Names */}
          <ScrollReveal delay={900}>
            {isUrdu ? (
              <div className="mb-4">
                <div className="font-urdu text-3xl sm:text-4xl md:text-5xl text-primary leading-tight max-w-sm mx-auto">
                  <span className="block">سونو</span>
                  <span className="block">&</span>
                  <span className="block">فارین</span>
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <h1 className="font-display text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-light gold-gradient leading-tight">
                  Anant
                </h1>
                <div className="flex items-center justify-center gap-4 sm:gap-6 my-3 sm:my-4">
                  <div className="gold-line flex-1 max-w-[80px] sm:max-w-[100px]" />
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl text-primary italic">
                    &
                  </span>
                  <div className="gold-line flex-1 max-w-[80px] sm:max-w-[100px]" />
                </div>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light gold-gradient leading-tight">
                  Gauri
                </h1>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* Bottom section: Save the date + Scroll */}
        <div className="flex flex-col items-center gap-4 pb-4">
          {/* Save the date */}
          <ScrollReveal delay={1300}>
            <div className="inline-block border border-primary/30 rounded-sm px-4 sm:px-6 py-2">
              <p
                className={
                  isUrdu
                    ? "font-urdu text-xs sm:text-sm text-primary"
                    : "font-body text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-primary"
                }
              >
                {t("Save the Date", "تاریخ محفوظ کریں")}
              </p>
              <p
                className={
                  isUrdu
                    ? "font-urdu text-sm sm:text-base text-primary mt-1"
                    : "font-display text-base sm:text-lg md:text-xl text-primary mt-1"
                }
              >
                {t("November 26, 2026", "۳۱ مارچ ۲۰۲۶")}
              </p>
            </div>
          </ScrollReveal>

          {/* Scroll hint */}
          <div>
            <div className="scroll-triangle scroll-bounce mx-auto" />
            <p
              className={
                isUrdu
                  ? "font-urdu text-xs text-muted-foreground mt-2"
                  : "font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-2"
              }
            >
              {t("Scroll", "نیچے دیکھیں")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
