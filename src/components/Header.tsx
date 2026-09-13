import { useEffect, useState } from "react";
import { Menu, MoveUpRight, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

import { useLanguage } from "../i18n/useLanguage";

const Header = () => {
  const { texts } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeMenuOnEscape);

    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 border-b border-muted-foreground bg-background/90 text-lg uppercase backdrop-blur-md w-full">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-5 sm:px-6 md:py-8"
      >
        <a href="#home" className="mr-auto" onClick={closeMenu}>
          Iveta N.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#projects">{texts.nav.projects}</a>
          <a href="#profile">{texts.nav.profile}</a>
          <a
            href="https://www.linkedin.com/in/iveta-nováková-1300a2275"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {texts.nav.contact}
            <MoveUpRight size={18} aria-hidden="true" />
          </a>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-1 md:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={
          isMenuOpen ? "border-t border-muted-foreground md:hidden" : "hidden"
        }
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-6 sm:px-6"
        >
          <a href="#projects" onClick={closeMenu}>
            {texts.nav.projects}
          </a>
          <a href="#profile" onClick={closeMenu}>
            {texts.nav.profile}
          </a>
          <a
            href="https://www.linkedin.com/in/iveta-nováková-1300a2275"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            {texts.nav.contact}
            <MoveUpRight size={18} aria-hidden="true" />
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
