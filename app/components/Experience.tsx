"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].experience;

  // Map the static experiences to use translated text
  // We need to preserve the image and color which are not in translations
  const experiences = t.items.map((item, index) => {
    const staticData = [
      {
        image: "/pictures/Portait2.png",
        color: "text-[#0071e3]",
      },
      {
        image: "/pictures/MainPortait.png",
        color: "text-purple-400",
      },
      {
        image: "/pictures/Portait2.png",
        color: "text-white",
      },
    ];
    return {
      ...item,
      ...staticData[index],
    };
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] relative flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-white/40">
            {t.title}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center perspective-1000">
          {experiences.map((exp, index) => {
            // Calculate offset relative to current index
            // Handle wrapping logic for "infinite" feel or just clamped
            // For simple wrapping with 3 items:
            let offset = index - currentIndex;

            // Adjust offset for wrapping (e.g. if current is 2 and index is 0, offset should be 1, not -2)
            // This simple logic works best if we assume we want to show neighbors.
            // With only 3 items: 0, 1, 2.
            // If current=0: 0->0, 1->1 (right), 2->-1 (left)
            // If current=1: 0->-1 (left), 1->0, 2->1 (right)
            // If current=2: 0->1 (right), 1->-1 (left), 2->0

            if (experiences.length === 3) {
              if (offset === -2) offset = 1;
              if (offset === 2) offset = -1;
            }

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;

            // Styles based on position
            let transformClass = "translate-x-0 scale-0 opacity-0 z-0";
            if (isActive) {
              transformClass = "translate-x-0 scale-100 opacity-100 z-20";
            } else if (isPrev) {
              transformClass =
                "-translate-x-[85%] scale-90 opacity-40 z-10 blur-[2px] hover:opacity-60 hover:blur-0 cursor-pointer";
            } else if (isNext) {
              transformClass =
                "translate-x-[85%] scale-90 opacity-40 z-10 blur-[2px] hover:opacity-60 hover:blur-0 cursor-pointer";
            }

            return (
              <div
                key={exp.id}
                onClick={() => {
                  if (isPrev) prevSlide();
                  if (isNext) nextSlide();
                }}
                className={`absolute w-full max-w-4xl aspect-video md:aspect-21/9 bg-white/80 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-200 dark:border-white/10 overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-700 ease-in-out ${transformClass}`}
              >
                {/* Content Container */}
                <div className="absolute inset-0 flex items-center justify-between p-8 md:p-20">
                  {/* Text Content */}
                  <div
                    className={`flex-1 max-w-xl z-20 space-y-6 transition-opacity duration-500 ${
                      isActive ? "opacity-100 delay-200" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold ${exp.color}`}
                    >
                      {exp.year}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Image Content (Right Side) */}
                  <div className="absolute right-0 top-0 bottom-0 w-2/3 md:w-1/2 z-10 opacity-40 md:opacity-100 mask-image-linear-gradient">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white/90 dark:to-zinc-900/90 z-20" />
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Buttons (Floating) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-10 z-30 w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-10 z-30 w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-zinc-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  idx === currentIndex
                    ? "bg-zinc-900 dark:bg-white w-10"
                    : "bg-zinc-300 dark:bg-white/40 w-2 hover:bg-zinc-500 dark:hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
