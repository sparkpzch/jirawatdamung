"use client";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="bg-black text-[#f5f5f7] relative">
      <div className="relative">
        {/* Sticky Image Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-w-7xl opacity-60 transition-opacity duration-500">
            <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black z-10" />
            <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black z-10" />
            <Image
              src="/pictures/Portait2.png"
              alt="Experience Background"
              fill
              className="object-cover md:object-contain"
            />
          </div>
        </div>

        {/* Scrolling Content */}
        <div className="relative z-20 -mt-[100vh]">
          {/* Intro Block */}
          <div className="min-h-screen flex items-center justify-center">
            <h2 className="text-6xl md:text-9xl font-bold text-center tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-white/40 drop-shadow-2xl">
              Experience <br /> The Extraordinary.
            </h2>
          </div>

          {/* Timeline Block */}
          <div className="min-h-screen flex items-center justify-center md:justify-end px-6 md:px-20 py-20">
            <div className="max-w-lg p-10 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-[#0071e3]/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4 text-[#0071e3]">
                3+ Years
              </h3>
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                Forging digital landscapes with precision. From indie games to
                enterprise software, I bring code to life with a focus on
                performance and user experience.
              </p>
            </div>
          </div>

          {/* Mastery Block */}
          <div className="min-h-screen flex items-center justify-center md:justify-start px-6 md:px-20 py-20">
            <div className="max-w-lg p-10 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4 text-purple-400">
                Full Stack Mastery
              </h3>
              <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                Bridging the gap between complex backends and immersive
                frontends. Expertise in C#, Python, React, and Unity allows me
                to build complete solutions.
              </p>
            </div>
          </div>

          {/* Projects Block */}
          <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-3xl text-center space-y-8 p-10 rounded-3xl bg-black/40 backdrop-blur-md">
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight">
                20+ Projects Delivered
              </h3>
              <p className="text-2xl text-zinc-400 max-w-xl mx-auto">
                Each one a step towards perfection. Ready to build the next one?
              </p>
              <a
                href="#contact"
                className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-transform hover:bg-zinc-200"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
