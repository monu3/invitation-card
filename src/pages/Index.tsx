import { LanguageProvider } from "@/hooks/useLanguage";
import LanguageToggle from "@/components/LanguageToggle";
import CurtainAnimation from "@/components/CurtainAnimation";
import AudioPlayer from "@/components/AudioPlayer";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import CountdownVenueSection from "@/components/CountdownVenueSection";
import ReceptionSection from "@/components/ReceptionSection";
import FamilyGratitudeSection from "@/components/FamilyGratitudeSection";
import ScrollPerformanceProvider from "@/components/ScrollPerformanceProvider";
import overallBg from "@/assets/overall-background.webp";

const Index = () => {
  return (
    <LanguageProvider>
      <ScrollPerformanceProvider>
        <div className="relative">
          {/*
            Full page backdrop.
            NOTE: never use `background-attachment: fixed` (bg-fixed) for this.
            On mobile browsers it forces a full-page repaint on every scroll
            frame (the "sticky / fuzzy" feeling). A fixed, GPU-composited layer
            is free to scroll over.
          */}
          <div
            aria-hidden="true"
            className="page-backdrop fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${overallBg})` }}
          />

          {/* Fixed overlays live outside the clipping container so they can
              never be clipped by it on any browser. */}
          <CurtainAnimation />
          <LanguageToggle />
          <AudioPlayer />

          <main className="relative overflow-x-clip">
            <HeroSection />
            <ScheduleSection />
            <CountdownVenueSection />
            <ReceptionSection />
            <FamilyGratitudeSection />
          </main>
        </div>
      </ScrollPerformanceProvider>
    </LanguageProvider>
  );
};

export default Index;
