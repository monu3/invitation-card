import ScrollReveal from "@/components/ScrollReveal";
import menuFrame from "@/assets/menu-frame2.png";
import flora from "@/assets/flora.webp";
import PeacockMotif from "@/components/rajasthani/PeacockMotif";
import PaisleyPattern from "@/components/rajasthani/PaisleyPattern";
import { useLanguage } from "@/hooks/useLanguage";

const ReceptionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-4 md:py-20 px-6 bg-background/80">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${flora})` }}
      />

      {/* Decorative peacocks */}
      <div className="absolute top-10 left-10 rajasthani-motif hidden md:block">
        <PeacockMotif size={60} color="hsl(11, 65%, 25%)" />
      </div>
      <div className="absolute top-10 right-10 rajasthani-motif hidden md:block" style={{ transform: "scaleX(-1)" }}>
        <PeacockMotif size={60} color="hsl(11, 65%, 25%)" />
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        <ScrollReveal>
          {/* Menu frame image as border */}
          <div className="relative min-h-[660px] md:min-h-[600px]">
            <img
              src={menuFrame}
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />

            {/* Paisley decorations on frame */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rajasthani-motif z-20">
              <PaisleyPattern size={30} color="hsl(11, 65%, 25%)" />
            </div>

            {/* Content inside the frame - with top/bottom padding of 32px (8 units) */}
            <div className="relative py-8 px-8 md:px-12 text-center flex flex-col items-center justify-center min-h-[550px] md:min-h-[600px] gap-3">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-1">
              </p>

              <h2 className="font-display text-4xl md:text-5xl text-primary mb-1">
                {t("Reception", "स्वागत समारोह")}
              </h2>

              <div className="rajasthani-divider w-32 mx-auto my-2" />

              <div className="space-y-3 w-full">
                <div>
                  <h3 className="font-display text-lg tracking-[0.25em] uppercase text-primary mb-1">
                    {t("Dinner", "भोज")}
                  </h3>
                  <p className="font-body text-base text-primary mb-1">
                    {t("A grand feast to celebrate the union", "शादी का जश्न मनाने के लिए भव्य भोज")}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-lg tracking-[0.25em] uppercase text-primary mb-1">
                    {t("Entertainment", "मनोरंजन")}
                  </h3>
                  <p className="font-body text-base text-primary mb-1">
                    {t("Music & celebrations with family and friends", "परिवार और दोस्तों के संग संगीत और जश्न")}
                  </p>
                </div>
              </div>

              <div className="rajasthani-divider w-32 mx-auto my-2" />

              <p className="font-display text-lg text-primary">
                {t("November 26, 2026", "२६ नवंबर, २०२६")}
              </p>
              <p className="font-body text-base text-primary mb-1">
                {t("1:00 PM", "दोपहर 1:00 बजे")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReceptionSection;
