import { useState, useCallback } from "react";
import { LanguageProvider } from "@/hooks/useLanguage";
import LanguageToggle from "@/components/LanguageToggle";
import CurtainAnimation from "@/components/CurtainAnimation";
import AudioPlayer from "@/components/AudioPlayer";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import CountdownVenueSection from "@/components/CountdownVenueSection";
import ReceptionSection from "@/components/ReceptionSection";
import FamilyGratitudeSection from "@/components/FamilyGratitudeSection";

const Index = () => {
  const [curtainDone, setCurtainDone] = useState(false);
  const handleCurtainComplete = useCallback(() => setCurtainDone(true), []);

  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden">
        <CurtainAnimation onComplete={handleCurtainComplete} />
        {/* <LanguageToggle /> */}
        <AudioPlayer />
        <HeroSection />
        <ScheduleSection />
        <CountdownVenueSection />
        <ReceptionSection />
        <FamilyGratitudeSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
