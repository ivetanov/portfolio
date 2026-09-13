import { useLanguage } from "../i18n/useLanguage";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={language === "cs" ? "Jazyk webu" : "Website language"}
      className="flex items-center gap-2 font-mono text-sm"
    >
      <button
        type="button"
        onClick={() => setLanguage("cs")}
        aria-pressed={language === "cs"}
        aria-label="Čeština"
        className={`cursor-pointer p-2 ${
          language === "cs" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        CZ
      </button>

      <span aria-hidden="true">/</span>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="English"
        className={`cursor-pointer p-2 ${
          language === "en" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
