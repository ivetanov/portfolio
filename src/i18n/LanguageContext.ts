import { createContext } from "react";
import type { Translations } from "./cs";

export type Language = "cs" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  texts: Translations;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
