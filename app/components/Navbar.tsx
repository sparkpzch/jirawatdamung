"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Shrink navbar logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[language].navbar;

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? "max-w-[95%] md:max-w-[700px] rounded-2xl md:rounded-full bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-md shadow-lg border border-zinc-200/50 dark:border-zinc-800/50 px-6 md:px-8"
            : "max-w-[980px] bg-transparent px-8 border-b border-transparent"
        }`}
      >
        <div className="h-14 flex items-center justify-between text-xs font-medium tracking-wide relative">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight cursor-pointer opacity-90 hover:opacity-100 transition-opacity z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            {language === "th" ? (
              <>
                จิรวัฒน์<span className="text-[#86868b]"> ดามัง</span>
              </>
            ) : (
              <>
                Jirawat<span className="text-[#86868b]">Damung</span>
              </>
            )}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80">
            {Object.entries(t).map(([key, value]) => {
              if (key === "resume") {
                return (
                  <a
                    key={key}
                    href="https://www.canva.com/design/DAG617JI80Q/Q070iLzZ1cz9mNI68m2spQ/view?utm_content=DAG617JI80Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hade31bcc8b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300"
                  >
                    {value}
                  </a>
                );
              }
              // Regular sections - scroll to element
              return (
                <button
                  key={key}
                  onClick={() => {
                    const element = document.getElementById(key);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300"
                >
                  {value}
                </button>
              );
            })}

            <div className="flex items-center gap-5 pl-6 border-l border-zinc-200 dark:border-zinc-700">
              {/* Theme Toggle */}
              <button
                onClick={() => {
                  const currentTheme = resolvedTheme || theme;
                  setTheme(currentTheme === "dark" ? "light" : "dark");
                }}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {(resolvedTheme || theme) === "dark" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-2 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-bold"
                aria-label="Toggle Language"
              >
                {language === "en" ? "EN" : "TH"}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-[#1d1d1f] dark:text-[#f5f5f7]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 mx-auto w-[95%] md:max-w-[600px] mt-2 p-4 rounded-2xl bg-white/90 dark:bg-[#1d1d1f]/90 backdrop-blur-md shadow-xl border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden transition-all duration-300 ease-in-out origin-top md:hidden ${
          isMenuOpen
            ? "opacity-100 scale-100 translate-y-[-10px]"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-lg">
          {Object.entries(t).map(([key, value]) => {
            if (key === "resume") {
              return (
                <a
                  key={key}
                  href="https://www.canva.com/design/DAG617JI80Q/Q070iLzZ1cz9mNI68m2spQ/view?utm_content=DAG617JI80Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hade31bcc8b"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 w-full py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl text-center"
                >
                  {value}
                </a>
              );
            }
            // Regular sections - scroll to element
            return (
              <button
                key={key}
                onClick={() => {
                  setIsMenuOpen(false);
                  const element = document.getElementById(key);
                  if (element) {
                    // Small delay to allow menu to close first
                    setTimeout(() => {
                      element.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }
                }}
                className="text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 w-full py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl text-center"
              >
                {value}
              </button>
            );
          })}

          <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-2" />

          <div className="flex items-center justify-center gap-8 w-full pb-2">
            <button
              onClick={() => {
                const currentTheme = resolvedTheme || theme;
                setTheme(currentTheme === "dark" ? "light" : "dark");
              }}
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {(resolvedTheme || theme) === "dark" ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-bold text-lg"
              aria-label="Toggle Language"
            >
              {language === "en" ? "EN" : "TH"}
            </button>
          </div>
        </div>
      </div>

      {/* Full width border for initial state only - Desktop only */}
      {!isScrolled && (
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-zinc-200/50 dark:bg-zinc-800/50 max-w-[980px] mx-auto" />
      )}
    </nav>
  );
}
