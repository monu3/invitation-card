import ScrollReveal from "@/components/ScrollReveal";
import { Heart } from "lucide-react";
import flora from "@/assets/flora.webp";
import ElephantMotif from "@/components/rajasthani/ElephantMotif";
import FloralMandala from "@/components/rajasthani/FloralMandala";
import PaisleyPattern from "@/components/rajasthani/PaisleyPattern";
import { useLanguage } from "@/hooks/useLanguage";

const FamilyGratitudeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-8 md:py-32 px-6 bg-background/80">
      <div className="max-w-5xl mx-auto">
        {/* Decorative mandala */}
        <div className="absolute top-10 left-10 rajasthani-motif hidden md:block">
          <FloralMandala size={120} color="hsl(11, 65%, 25%)" />
        </div>
        <div className="absolute top-10 right-10 rajasthani-motif hidden md:block">
          <FloralMandala size={120} color="hsl(11, 65%, 25%)" />
        </div>

        {/* Family */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-3">
              {t("With Compliments From", "शुभकामनाएं")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              {t("Our Families", "हमारा परिवार")}
            </h2>
            <div className="rajasthani-divider w-48 mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {/* Groom's family */}
          <ScrollReveal delay={100}>
            <div
              className="text-center p-8 border-2 border-primary/30 rounded-sm bg-card/40 relative"
              style={{
                backgroundImage: `url(${flora})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* Paisley corner */}
              <div className="absolute top-2 left-2 rajasthani-motif">
                <PaisleyPattern size={20} color="hsl(11, 65%, 25%)" />
              </div>
              <div className="absolute top-2 right-2 rajasthani-motif" style={{ transform: "scaleX(-1)" }}>
                <PaisleyPattern size={20} color="hsl(11, 65%, 25%)" />
              </div>

              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {t("Groom's Family", "दूल्हे का परिवार")}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-primary mb-1">
                {t("Mr. & Mrs. Nayabaniya", "श्री एवं श्रीमती नयाबानिया")}
              </h3>
              <p className="font-body text-base text-primary">
                {t("Parents of the Groom", "दूल्हे के माता-पिता")}
              </p>
            </div>
          </ScrollReveal>

          {/* Bride's family */}
          <ScrollReveal delay={250}>
            <div
              className="text-center p-8 border-2 border-primary/30 rounded-sm bg-card/40 relative"
              style={{
                backgroundImage: `url(${flora})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* Paisley corner */}
              <div className="absolute top-2 left-2 rajasthani-motif">
                <PaisleyPattern size={20} color="hsl(11, 65%, 25%)" />
              </div>
              <div className="absolute top-2 right-2 rajasthani-motif" style={{ transform: "scaleX(-1)" }}>
                <PaisleyPattern size={20} color="hsl(11, 65%, 25%)" />
              </div>

              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {t("Bride's Family", "दुल्हन का परिवार")}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-primary mb-1">
                {t("Mr. & Mrs. Khaitan", "श्री एवं श्रीमती खैतान")}
              </h3>
              <p className="font-body text-base text-primary">
                {t("Parents of the Bride", "दुल्हन के माता-पिता")}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Thank You Card - styled with zigzag border and dark frame */}
        <ScrollReveal delay={200}>
          <div className="max-w-xl mx-auto">
            <div
              className="rounded-lg p-6 md:p-8 relative"
              style={{ backgroundColor: "hsl(var(--gold-dark))" }}
            >
              {/* Elephant decorations */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 rajasthani-motif hidden md:block">
                <ElephantMotif size={50} color="hsl(40, 40%, 97%)" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 rajasthani-motif hidden md:block" style={{ transform: "translateY(-50%) scaleX(-1)" }}>
                <ElephantMotif size={50} color="hsl(40, 40%, 97%)" />
              </div>

              {/* Inner card with zigzag/wavy edge effect */}
              <div
                className="relative py-6 px-8 md:px-12 text-center"
                style={{
                  backgroundColor: "hsl(var(--ivory))",
                  backgroundImage: `url(${flora})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  clipPath: `polygon(
                    0% 4%, 3% 0%, 6% 4%, 9% 0%, 12% 4%, 15% 0%, 18% 4%, 21% 0%, 24% 4%, 27% 0%, 30% 4%, 33% 0%, 36% 4%, 39% 0%, 42% 4%, 45% 0%, 48% 4%, 51% 0%, 54% 4%, 57% 0%, 60% 4%, 63% 0%, 66% 4%, 69% 0%, 72% 4%, 75% 0%, 78% 4%, 81% 0%, 84% 4%, 87% 0%, 90% 4%, 93% 0%, 96% 4%, 100% 0%,
                    100% 4%, 97% 8%, 100% 12%, 97% 16%, 100% 20%, 97% 24%, 100% 28%, 97% 32%, 100% 36%, 97% 40%, 100% 44%, 97% 48%, 100% 52%, 97% 56%, 100% 60%, 97% 64%, 100% 68%, 97% 72%, 100% 76%, 97% 80%, 100% 84%, 97% 88%, 100% 92%, 97% 96%, 100% 100%,
                    96% 96%, 93% 100%, 90% 96%, 87% 100%, 84% 96%, 81% 100%, 78% 96%, 75% 100%, 72% 96%, 69% 100%, 66% 96%, 63% 100%, 60% 96%, 57% 100%, 54% 96%, 51% 100%, 48% 96%, 45% 100%, 42% 96%, 39% 100%, 36% 96%, 33% 100%, 30% 96%, 27% 100%, 24% 96%, 21% 100%, 18% 96%, 15% 100%, 12% 96%, 9% 100%, 6% 96%, 3% 100%, 0% 96%,
                    0% 96%, 3% 92%, 0% 88%, 3% 84%, 0% 80%, 3% 76%, 0% 72%, 3% 68%, 0% 64%, 3% 60%, 0% 56%, 3% 52%, 0% 48%, 3% 44%, 0% 40%, 3% 36%, 0% 32%, 3% 28%, 0% 24%, 3% 20%, 0% 16%, 3% 12%, 0% 8%, 3% 4%
                  )`,
                }}
              >
                <h2 className="font-display text-3xl md:text-4xl italic text-primary mb-2">
                  {t("Thank You", "धन्यवाद")}
                </h2>

                <div className="rajasthani-divider w-32 mx-auto my-4" />

                <p className="font-body text-lg text-primary max-w-sm mx-auto leading-relaxed mb-6">
                  {t("For joining us on this special day. Your presence is the best gift we could receive.", "इस विशेष दिन पर हमसे जुड़ने के लिए धन्यवाद। आपकी उपस्थिति हमारे लिए सबसे बड़ा उपहार है।")}
                </p>

                <p className="font-display text-2xl italic text-primary">
                  Anant & Gauri
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FamilyGratitudeSection;
