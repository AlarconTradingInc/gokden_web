"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "tr",
  setLocale: () => {},
  t: translations.tr,
});

const SUPPORTED: Locale[] = ["tr", "en", "de", "fr"];

/** Maps a BCP-47 language tag (e.g. "de-AT") to a supported locale. */
function detectLocale(): Locale {
  const tags = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const tag of tags) {
    const lang = tag.split("-")[0].toLowerCase() as Locale;
    if (SUPPORTED.includes(lang)) return lang;
  }
  return "tr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  /* Restore saved preference, or fall back to browser language */
  useEffect(() => {
    const saved = localStorage.getItem("gokden-locale") as Locale | null;
    if (saved && SUPPORTED.includes(saved)) {
      setLocaleState(saved);
    } else {
      setLocaleState(detectLocale());
    }
  }, []);

  const setLocale = (next: Locale) => {
    if (!SUPPORTED.includes(next)) return;
    setLocaleState(next);
    localStorage.setItem("gokden-locale", next);
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook — access translations and locale switcher from any Client Component. */
export function useLanguage() {
  return useContext(LanguageContext);
}
