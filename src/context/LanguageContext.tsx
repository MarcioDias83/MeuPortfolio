"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { pt, en, type Lang } from "@/lib/i18n";

type LangCode = "pt" | "en";

interface LangContextType {
  lang: LangCode;
  t: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "pt",
  t: pt,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LangCode>("pt");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const t = lang === "pt" ? pt : en;

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
