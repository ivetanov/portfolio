import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./LanguageContext";
import { cs } from "./cs";
import { en } from "./en";

const translations = { cs, en };

function getLanguageFromUrl(): Language {
  return window.location.pathname.split("/")[1] === "en" ? "en" : "cs";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrentLanguage] = useState<Language>(getLanguageFromUrl);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentLanguage(getLanguageFromUrl());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(nextLanguage: Language) {
    const url = new URL(window.location.href);
    url.pathname = `/${nextLanguage}`;

    if (url.pathname !== window.location.pathname) {
      window.history.pushState(null, "", url);
    }

    setCurrentLanguage(nextLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        texts: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
