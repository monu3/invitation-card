import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart } from "lucide-react";
import flora from "@/assets/flora.webp";

const FamilyGratitudeSection = () => {
  const { lang, t } = useLanguage();
  const isUrdu = lang === "ur";

  return (
    <section className="relative py-8 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Family */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <p
              className={
                isUrdu
                  ? "font-urdu text-sm text-primary mb-3"
                  : "font-body text-sm tracking-[0.4em] uppercase text-primary mb-3"
              }
            >
              {t("With Compliments From", "آپ کی عنایات سے")}
            </p>
            <h2
              className={
                isUrdu
                  ? "font-urdu text-4xl md:text-5xl text-primary"
                  : "font-display text-4xl md:text-5xl text-primary"
              }
            >
              {t("Our Families", "ہمارے خاندان")}
            </h2>
            <div className="gold-line w-24 mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {/* Bride's family */}
          <ScrollReveal delay={100}>
            <div
              className="text-center p-8 border border-border rounded-sm bg-card/40"
              style={{
                backgroundImage: `url(${flora})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <p
                className={
                  isUrdu
                    ? "font-urdu text-sm text-primary mb-4"
                    : "font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
                }
              >
                {t("Bride's Family", "دلہن کا خاندان")}
              </p>
              <h3
                className={
                  isUrdu
                    ? "font-urdu text-xl md:text-2xl text-primary mb-1"
                    : "font-display text-xl md:text-2xl text-primary mb-1"
                }
              >
                {t("Mr. & Mrs. Khaitan", "جناب خالد حسین صاحب و اہلیہ")}
              </h3>
              <p
                className={
                  isUrdu
                    ? "font-urdu text-base text-primary"
                    : "font-body text-base text-primary"
                }
              >
                {t("Parents of the Bride", "والدین دلہن")}
              </p>
            </div>
          </ScrollReveal>

          {/* Groom's family */}
          <ScrollReveal delay={250}>
            <div
              className="text-center p-8 border border-border rounded-sm bg-card/40"
              style={{
                backgroundImage: `url(${flora})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <p
                className={
                  isUrdu
                    ? "font-urdu text-sm text-primary mb-4"
                    : "font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
                }
              >
                {t("Groom's Family", "دولہا کا خاندان")}
              </p>
              <h3
                className={
                  isUrdu
                    ? "font-urdu text-xl md:text-2xl text-primary mb-1"
                    : "font-display text-xl md:text-2xl text-primary mb-1"
                }
              >
                {t("Mr. & Mrs. Nayabaniya", "جناب طارق احمد صاحب و اہلیہ")}
              </h3>
              <p
                className={
                  isUrdu
                    ? "font-urdu text-base text-primary"
                    : "font-body text-base text-primary"
                }
              >
                {t("Parents of the Groom", "والدین دولہا")}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Thank You Card - styled with zigzag border and dark frame */}
        <ScrollReveal delay={200}>
          <div className="max-w-xl mx-auto">
            <div
              className="rounded-lg p-6 md:p-8"
              style={{ backgroundColor: "hsl(var(--gold-dark))" }}
            >
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
                <h2
                  className={
                    isUrdu
                      ? "font-urdu text-3xl md:text-4xl text-primary mb-2"
                      : "font-display text-3xl md:text-4xl italic text-primary mb-2"
                  }
                >
                  {t("Thank You", "شکریہ")}
                </h2>

                <p
                  className={
                    isUrdu
                      ? "font-urdu text-lg text-primary max-w-sm mx-auto leading-relaxed mb-6"
                      : "font-body text-lg text-primary max-w-sm mx-auto leading-relaxed mb-6"
                  }
                >
                  {t(
                    "For joining us on this special day. Your presence is the best gift we could receive.",
                    "اس خاص دن پر ہمارے ساتھ شامل ہونے کا شکریہ۔ آپ کی موجودگی ہمارے لیے سب سے بڑا تحفہ ہے۔",
                  )}
                </p>

                <p
                  className={
                    isUrdu
                      ? "font-urdu text-2xl text-primary"
                      : "font-display text-2xl italic text-primary"
                  }
                >
                  {t("Anant & Gauri", "عائشہ و احمد")}
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
