"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";
import { getBasePath } from "./utils/basePath";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let resizeTimeout: NodeJS.Timeout;

    const setupObserver = () => {
      // Cleanup existing observer
      if (observer) {
        observer.disconnect();
        observer = null;
      }

      // Only run on mobile
      if (window.innerWidth >= 768) {
        setActiveSkillIndex(null);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.id.replace("skill-card-", ""));
              setActiveSkillIndex(index);
            }
          });
        },
        {
          root: null,
          // Increased active area to 40% of viewport height (30% top/bottom margin)
          // This ensures cards are detected earlier and stay active longer
          rootMargin: "-30% 0px -30% 0px",
          // Lower threshold to trigger even if card is partially obscured or tall
          threshold: 0.2,
        }
      );

      const cards = document.querySelectorAll('[id^="skill-card-"]');
      cards.forEach((card) => observer?.observe(card));
    };

    // Debounced resize handler to prevent thrashing on mobile scroll (address bar resize)
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setupObserver, 150);
    };

    // Initial setup
    setupObserver();

    window.addEventListener("resize", handleResize);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] font-sans selection:bg-[#0071e3] selection:text-white">
      {/* Apple-style Navigation */}
      <Navbar />

      <main className="pt-16">
        {/* Hero Section - Product Reveal Style */}
        <section
          id="overview"
          className="min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-10 text-center px-6 overflow-hidden"
        >
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-semibold text-[#0071e3] dark:text-[#2997ff]">
              {t.hero.subtitle}
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1d1d1f] dark:text-[#f5f5f7] whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {t.hero.description}
            </p>
            <div className="flex items-center justify-center gap-4 pt-6">
              <a
                href="https://www.linkedin.com/in/jirawat-damung-023791343/"
                className="bg-[#0071e3] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors"
              >
                {t.hero.contact}
              </a>
            </div>
          </div>

          <div className="relative mt-16 w-full max-w-[1000px] aspect-[16/9] md:aspect-video">
            {/* Main Image with subtle reflection/glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src={getBasePath("/pictures/MainPortait.png")}
                  alt="Jirawat Portrait"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <Experience />

        {/* Skills Section - Clean Grid */}
        <section id="skills" className="py-32 bg-[#f5f5f7] dark:bg-[#000000]">
          <div className="max-w-[980px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                {t.skills.title}{" "}
                <span className="text-[#86868b]">{t.skills.subtitle}</span>
              </h2>
              <p className="text-xl font-medium text-[#86868b]">
                {t.skills.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.skills.items.map((skill, index) => {
                const icons = [
                  getBasePath("/pictures/ProgrammingSkill.png"),
                  getBasePath("/pictures/Unity.png"),
                  getBasePath("/pictures/WebDev.png"),
                  getBasePath("/pictures/DevSecOps.png"),
                  getBasePath("/pictures/AI.png"),
                  getBasePath("/pictures/Brain.png"),
                ];
                const isActive = activeSkillIndex === index;
                return (
                  <div
                    key={skill.name}
                    id={`skill-card-${index}`}
                    onClick={() => {
                      // Only allow click toggle on desktop (md and up)
                      if (window.innerWidth >= 768) {
                        setActiveSkillIndex(isActive ? null : index);
                      }
                    }}
                    className={`group relative h-80 bg-white dark:bg-[#1d1d1f] rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out cursor-pointer shadow-sm z-0
                      ${
                        isActive
                          ? "!shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] scale-110 z-10 md:!shadow-sm md:scale-100 md:z-0"
                          : ""
                      }
                      md:hover:!shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] md:hover:scale-110 md:hover:z-10`}
                  >
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src={icons[index]}
                        alt={skill.name}
                        fill
                        className="object-contain drop-shadow-md invert dark:invert-0"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                    <div className="flex items-center justify-center w-full">
                      <p
                        className={`text-[#86868b] font-medium transition-opacity duration-300 whitespace-pre-line
                          ${isActive ? "opacity-100" : "opacity-0"}
                          md:opacity-0 md:group-hover:opacity-100`}
                      >
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section - Minimalist */}
        <section id="connect" className="py-32 bg-white dark:bg-[#1d1d1f]">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              {t.connect.title1} <br />
              <span className="text-[#0071e3] dark:text-[#2997ff]">
                {t.connect.title2}
              </span>
            </h2>
            <p className="text-[#86868b] text-lg mb-10 leading-relaxed whitespace-pre-line">
              {t.connect.description}
            </p>
            <a
              href="https://www.linkedin.com/in/jirawat-damung-023791343/"
              className="inline-block bg-[#0071e3] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-transform hover:scale-105 duration-300"
            >
              {t.connect.button}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
