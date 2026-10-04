import ScrollReveal from "@/components/ScrollReveal";
import curtainOpen from "@/assets/curtain-open.jpg";
import flora from "@/assets/flora.webp";
import ganeshImg from "@/assets/ganesh.png";
import ElephantMotif from "@/components/rajasthani/ElephantMotif";
import FloralMandala from "@/components/rajasthani/FloralMandala";
import AnimatedVideoBackground from "@/components/AnimatedVideoBackground";
import { FloatingSparkles } from "@/components/Sparkle";
import LazyLottie from "@/components/LazyLottie";
import mandalaSpin from "@/assets/lottie/mandala-spin.json";
import { useLanguage } from "@/hooks/useLanguage";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background (petals + sparkles, video-like) */}
      <AnimatedVideoBackground className="z-20" />

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

      {/* Floating golden sparkles */}
      <FloatingSparkles className="z-20" />

      {/* Decorative top mandala - slowly spinning */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 rajasthani-motif" style={{ opacity: 0.4 }}>
        <div className="mandala-spin-slow">
          <FloralMandala
            size={100}
            color="hsl(11, 65%, 25%)"
            weight={1.5}
            className="h-[72px] w-[72px] sm:h-[100px] sm:w-[100px]"
          />
        </div>
      </div>

      {/* Ganesh centered in the mandala */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 translate-y-2 sm:translate-y-[13px] z-30 pointer-events-none">
        <img src={ganeshImg} alt="" className="w-12 sm:w-16" />
      </div>

      {/* Spinning Lottie mandala */}
      <div className="absolute -bottom-8 -left-10 z-20 w-48 h-48 opacity-15 md:block hidden pointer-events-none">
        <LazyLottie src={mandalaSpin} loop autoplay speed={0.6} />
      </div>

      {/* Decorative elephants - left and right */}
      <div className="absolute bottom-32 left-4 z-30 rajasthani-motif hidden md:block">
        <ElephantMotif size={60} color="hsl(11, 65%, 25%)" />
      </div>
      <div className="absolute bottom-32 right-4 z-30 rajasthani-motif hidden md:block" style={{ transform: "scaleX(-1)" }}>
        <ElephantMotif size={60} color="hsl(11, 65%, 25%)" />
      </div>

      {/* Decorative top ornament */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line z-30" />

      <div className="relative z-30 text-center max-w-2xl mx-auto w-full min-h-screen flex flex-col items-center justify-between pt-24 sm:pt-32 pb-10 px-4 gap-8">
        {/* Welcome message with Sanskrit mantra arc */}
        <div className="animate-fade-in opacity-0">
          <svg viewBox="0 0 400 72" className="w-64 sm:w-80 md:w-96 mx-auto text-primary">
            <defs>
              <path id="welcomeArc" d="M 55 62 Q 200 0 345 62" fill="none" />
            </defs>
            <text
              className="uppercase tracking-[0.1em]"
              fontSize="18"
              fontWeight="bold"
              fill="currentColor"
              textAnchor="middle"
            >
              <textPath href="#welcomeArc" startOffset="50%">
                {t("Welcome to our land", "हमारे घर आइए")}
              </textPath>
            </text>
          </svg>
          <svg viewBox="0 0 400 120" className="w-64 sm:w-80 md:w-96 mx-auto mt-4 text-primary">
            <defs>
              <path id="mantraArc1" d="M 20 90 A 180 60 0 0 1 380 90" fill="none" />
              <path id="mantraArc2" d="M 20 105 A 180 45 0 0 1 380 105" fill="none" />
            </defs>
            <text className="font-bold" fontSize="13" fill="currentColor" textAnchor="middle">
              <textPath href="#mantraArc1" startOffset="50%">
                मंगलम भगवान विष्णु, मंगलम गरुड़ध्वज।
              </textPath>
            </text>
            <text className="font-bold" fontSize="13" fill="currentColor" textAnchor="middle">
              <textPath href="#mantraArc2" startOffset="50%">
                मंगलम पुण्डरीकाक्ष, मंगलाय तनो हरि।
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center content: invitation + names */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl">
          {/* We invite you */}
          <ScrollReveal delay={600}>
            <p className="font-body text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] uppercase text-inherit-foreground mb-8 leading-relaxed">
              <span className="block font-bold">{t("With Warm Regards", "शुभकामनाओं के साथ")}</span>
              <span className="block font-bold">{t("We Invite You To", "हम आपको आमंत्रित करते हैं")}</span>
              <span className="block font-bold">{t("Celebrate The Union Of", "इस शादी का जश्न मनाने")}</span>
            </p>
          </ScrollReveal>

          {/* Names with elephant decorations */}
          <ScrollReveal delay={900}>
            <div className="mb-4 relative">
              {/* Left elephant */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 rajasthani-motif hidden sm:block">
                <ElephantMotif size={45} color="hsl(11, 65%, 25%)" />
              </div>
              {/* Right elephant */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 rajasthani-motif hidden sm:block" style={{ transform: "translateY(-50%) scaleX(-1)" }}>
                <ElephantMotif size={45} color="hsl(11, 65%, 25%)" />
              </div>

              <h1 className="font-display text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-light gold-gradient leading-tight">
                Anant
              </h1>
              <div className="flex items-center justify-center gap-4 sm:gap-6 my-3 sm:my-4">
                <div className="gold-line flex-1 max-w-[80px] sm:max-w-[100px]" />
                <span className="font-display text-2xl sm:text-3xl md:text-4xl text-primary italic glow-pulse">
                  &
                </span>
                <div className="gold-line flex-1 max-w-[80px] sm:max-w-[100px]" />
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light gold-gradient leading-tight">
                Gauri
              </h1>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom section: Save the date + Scroll */}
        <div className="flex flex-col items-center gap-4 pb-4">
          {/* Save the date */}
          <ScrollReveal delay={1300}>
            <div className="rajasthani-border px-4 sm:px-6 py-3">
              <p className="font-body text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-primary">
                {t("Save the Date", "तिथि सुरक्षित रखें")}
              </p>
              <p className="font-display text-base sm:text-lg md:text-xl text-primary mt-1">
                {t("November 25 - 26, 2026", "२५ - २६ नवंबर, २०२६")}
              </p>
            </div>
          </ScrollReveal>

          {/* Scroll hint */}
          <div>
            <div className="scroll-triangle scroll-bounce mx-auto" />
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
              {t("Scroll", "नीचे स्क्रॉल करें")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
