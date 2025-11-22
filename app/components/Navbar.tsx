"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
          <div className="hidden md:flex gap-8 text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80">
            {["Overview", "Experience", "Skills", "Connect"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
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
