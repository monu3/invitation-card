import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "@/components/ScrollReveal";
import menuFrame from "@/assets/menu-frame2.png";
import flora from "@/assets/flora.webp";

const ReceptionSection = () => {
  const { lang, t } = useLanguage();
  const isUrdu = lang === "ur";

  return (
    <section className="relative py-4 md:py-20 px-6 bg-background">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${flora})` }}
      />
      <div className="relative z-10 max-w-md mx-auto">
        <ScrollReveal>
          {/* Menu frame image as border */}
          <div className="relative min-h-[660px] md:min-h-[600px]">
            <img
              src={menuFrame}
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            {/* Content inside the frame - with top/bottom padding of 32px (8 units) */}
            <div className="relative py-8 px-8 md:px-12 text-center flex flex-col items-center justify-center min-h-[550px] md:min-h-[600px] gap-3">
              <p
                className={
                  isUrdu
                    ? "font-urdu text-base text-primary mb-1"
                    : "font-body text-sm tracking-[0.3em] uppercase text-primary mb-1"
                }
              >
                {/* {t("You Are Invited To", "آپ کو دعوت ہے")} */}
              </p>

              <h2
                className={
                  isUrdu
                    ? "font-urdu text-3xl md:text-4xl text-primary mb-1"
                    : "font-display text-4xl md:text-5xl text-primary mb-1"
                }
              >
                {t("Reception", "ولیمہ")}
              </h2>

              <div className="gold-line w-16 mx-auto my-2" />

              <div className="space-y-3 w-full">
                <div>
                  <h3
                    className={
                      isUrdu
                        ? "font-urdu text-lg text-primary mb-1"
                        : "font-display text-lg tracking-[0.25em] uppercase text-primary mb-1"
                    }
                  >
                    {t("Dinner", "عشائیہ")}
                  </h3>
                  <p
                    className={
                      isUrdu
                        ? "font-urdu text-base text-primary mb-1"
                        : "font-body text-base text-primary mb-1"
                    }
                  >
                    {t("A grand feast to celebrate the union", "شاندار ضیافت")}
                  </p>
                </div>

                <div>
                  <h3
                    className={
                      isUrdu
                        ? "font-urdu text-lg text-primary mb-1"
                        : "font-display text-lg tracking-[0.25em] uppercase text-primary mb-1"
                    }
                  >
                    {t("Entertainment", "تفریح")}
                  </h3>
                  <p
                    className={
                      isUrdu
                        ? "font-urdu text-base text-primary mb-1"
                        : "font-body text-base text-primary mb-1"
                    }
                  >
                    {t(
                      "Music & celebrations with family and friends",
                      "خاندان اور دوستوں کے ساتھ خوشیاں",
                    )}
                  </p>
                </div>
              </div>

              <div className="gold-line w-16 mx-auto my-2" />

              <p
                className={
                  isUrdu
                    ? "font-urdu text-lg text-primary mb-1"
                    : "font-display text-lg text-primary"
                }
              >
                {t("April 2, 2026", "۱۶ مارچ ۲۰۲۶")}
              </p>
              <p
                className={
                  isUrdu
                    ? "font-urdu text-base text-primary mb-1"
                    : "font-body text-base text-primary mb-1"
                }
              >
                {t("1:00 PM", "رات ۸ بجے")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReceptionSection;
