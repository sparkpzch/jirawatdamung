"use client";

import Image from "next/image";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] font-sans selection:bg-[#0071e3] selection:text-white">
      {/* Apple-style Navigation */}
      <Navbar />

      <main className="pt-12">
        {/* Hero Section - Product Reveal Style */}
        <section
          id="overview"
          className="min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-10 text-center px-6 overflow-hidden"
        >
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-xl md:text-2xl font-semibold text-[#0071e3] dark:text-[#2997ff]">
              {t.hero.subtitle}
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1d1d1f] dark:text-[#f5f5f7]">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex items-center justify-center gap-4 pt-6">
              <a
                href="#connect"
                className="bg-[#0071e3] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors"
              >
                {t.hero.contact}
              </a>
              <a
                href="#experience"
                className="text-[#0071e3] dark:text-[#2997ff] text-sm font-medium hover:underline flex items-center gap-1"
              >
                {t.hero.learnMore} <span className="text-xs">›</span>
              </a>
            </div>
          </div>

          <div className="relative mt-16 w-full max-w-[1000px] aspect-[16/9] md:aspect-video">
            {/* Main Image with subtle reflection/glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src="/pictures/MainPortait.png"
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
                  "/pictures/csharp.png",
                  "/pictures/Python.png",
                  "/pictures/Unity.png",
                ];
                return (
                  <div
                    key={skill.name}
                    className="group relative h-80 bg-white dark:bg-[#1d1d1f] rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] hover:scale-110 transition-all duration-300 ease-out z-0 hover:z-10"
                  >
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src={icons[index]}
                        alt={skill.name}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                    <div className="h-8 flex items-center justify-center">
                      <p className="text-[#86868b] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <p className="text-[#86868b] text-lg mb-10 leading-relaxed">
              {t.connect.description}
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block bg-[#0071e3] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-transform hover:scale-105 duration-300"
            >
              {t.connect.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#f5f5f7] dark:bg-[#000000] py-10 border-t border-zinc-200 dark:border-zinc-800 text-xs text-[#86868b]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              Copyright &copy; {new Date().getFullYear()} Jirawat Damung.{" "}
              {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:underline">
                {t.footer.terms}
              </a>
              <a href="#" className="hover:underline">
                {t.footer.sitemap}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
