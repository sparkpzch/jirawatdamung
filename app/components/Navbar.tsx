"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
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
            ? "max-w-[600px] rounded-full bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-md shadow-lg border border-zinc-200/50 dark:border-zinc-800/50 px-6"
            : "max-w-[980px] bg-transparent px-6 border-b border-transparent"
        }`}
      >
        <div className="h-12 flex items-center justify-between text-xs font-medium tracking-wide relative">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
          >
            Jirawat<span className="text-[#86868b]">Damung</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80">
            {Object.entries(t).map(([key, value]) => (
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
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-zinc-200 dark:border-zinc-700">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-2 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-bold"
                aria-label="Toggle Language"
              >
                {language === "en" ? "TH" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full width border for initial state only */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-200/50 dark:bg-zinc-800/50 max-w-[980px] mx-auto" />
      )}
    </nav>
  );
}
