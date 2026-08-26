import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-primary transition-transform duration-300 group-hover:rotate-180" />
      <span className="font-body text-sm tracking-wider text-foreground">
        {lang === "en" ? "हिन्दी" : "English"}
      </span>
    </button>
  );
};

export default LanguageToggle;
