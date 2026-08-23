import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ur";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (en: string, ur: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggle = () => setLang((prev) => (prev === "en" ? "ur" : "en"));
  const t = (en: string, ur: string) => (lang === "en" ? en : ur);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
