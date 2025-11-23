"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { getBasePath } from "../utils/basePath";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewMode, setPreviewMode] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].experience;

  // Map the static experiences to use translated text
  // We need to preserve the image and color which are not in translations
  const experiences = t.items.map((item, index) => {
    const staticData = [
      {
        image: getBasePath("/pictures/IEEE.png"),
        color: "text-[#0071e3]",
      },
      {
        image: getBasePath("/pictures/yoorod.png"),
        color: "text-purple-400",
      },
      {
        image: getBasePath("/pictures/Drone.jpg"),
        color: "text-sky-600",
      },
      {
        image: getBasePath("/pictures/stin.png"),
        color: "text-orange-400",
      },
      {
        image: getBasePath("/pictures/GoodNurse.jpg"),
        color: "text-green-400",
      },
      {
        image: getBasePath("/pictures/CoSI.png"),
        color: "text-blue-400",
      },
    ];
    return {
      ...item,
      ...staticData[index],
    };
  });

  const currentExp = experiences[currentIndex];

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
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            {t.title}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center perspective-1000">
          {experiences.map((exp, index) => {
            // Calculate offset relative to current index
            // Handle wrapping logic for "infinite" feel or just clamped

            const len = experiences.length;
            let offset = index - currentIndex;

            // Normalize offset to be within -len/2 to len/2 for circular wrapping
            if (len > 0) {
              offset = ((offset % len) + len) % len;
              if (offset > len / 2) offset -= len;
            }

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;

            // Styles based on position
            let transformClass = "translate-x-0 scale-0 opacity-0 z-0";
            if (isActive) {
              transformClass =
                "translate-x-0 scale-100 opacity-100 z-20 hover:scale-110 hover:z-50 md:hover:aspect-video";
            } else if (isPrev) {
              transformClass =
                "-translate-x-[85%] scale-90 opacity-40 z-10 blur-[2px] hover:opacity-60 hover:blur-0 cursor-pointer";
            } else if (isNext) {
              transformClass =
                "translate-x-[85%] scale-90 opacity-40 z-10 blur-[2px] hover:opacity-60 hover:blur-0 cursor-pointer";
            }

            return (
              <motion.div
                layoutId={isActive ? `card-${exp.id}` : undefined}
                key={exp.id}
                onClick={() => {
                  if (isPrev) prevSlide();
                  if (isNext) nextSlide();
                  if (isActive) setPreviewMode(true);
                }}
                className={`group absolute w-full max-w-5xl aspect-video md:aspect-21/9 bg-white/80 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-200 dark:border-white/10 overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-700 ease-in-out ${transformClass}`}
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
                      className={`text-2xl md:text-3xl font-bold ${exp.color} whitespace-pre-line`}
                    >
                      {exp.header}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-lg font-medium ${exp.color} hover:underline mt-4`}
                      >
                        {exp.linkText}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Image Content (Right Side) */}
                  <div className="absolute right-0 top-0 bottom-0 w-2/3 md:w-1/2 z-10 opacity-40 md:opacity-100 group-hover:opacity-100 mask-image-linear-gradient">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-white/90 dark:to-zinc-900/90 z-20" />
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className={`object-cover object-center blur-[3px] group-hover:blur-none transition-all duration-500 ${
                          exp.image.toLowerCase().endsWith(".png")
                            ? "invert dark:invert-0"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Buttons (Floating) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-10 z-60 w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
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
            className="absolute right-4 md:right-10 z-60 w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
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

      {/* Mobile Preview Modal */}
      <AnimatePresence>
        {previewMode && currentExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setPreviewMode(false)}
          >
            <motion.div
              layoutId={`card-${currentExp.id}`}
              className="relative w-[80%] max-w-2xl max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPreviewMode(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors backdrop-blur-md"
              >
                <svg
                  className="w-5 h-5 text-zinc-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Image Header */}
              <motion.div className="relative w-full h-48 md:h-64 shrink-0">
                <Image
                  src={currentExp.image}
                  alt={currentExp.title}
                  fill
                  className={`object-cover ${
                    currentExp.image.toLowerCase().endsWith(".png")
                      ? "invert dark:invert-0"
                      : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent" />
              </motion.div>

              {/* Content */}
              <motion.div className="p-6 md:p-8 -mt-6 relative z-10">
                <div className={`text-lg font-bold ${currentExp.color} mb-2`}>
                  {currentExp.header}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight">
                  {currentExp.title}
                </h3>
                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                  {currentExp.description}
                </p>
                {currentExp.link && (
                  <a
                    href={currentExp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-base font-medium ${currentExp.color} hover:underline mt-6`}
                  >
                    {currentExp.linkText}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
