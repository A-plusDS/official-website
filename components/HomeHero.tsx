import React from "react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[clamp(440px,72vh,620px)] min-h-[420px] sm:min-h-[480px] bg-[#06130E] flex flex-col justify-end items-center px-4 sm:px-6 pb-6 sm:pb-10 overflow-hidden">
      {/* Accessible semantic heading for Google indexing and screen readers */}
      <h1 className="sr-only">
        A+ Digital Solutions — Brand Strategy, Design Systems & Custom Software Studio
      </h1>

      {/* Cinematic Ken Burns Background Layer (Farmily hero effect) */}
      <div className="absolute -inset-6 bg-[url('/assets/hero_billboard_official.jpg')] bg-cover bg-[center_24%] sm:bg-[center_35%] animate-kenburns pointer-events-none" />

      {/* Readability Scrim Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 19, 14, 0.0) 0%, rgba(6, 19, 14, 0.1) 45%, rgba(9, 26, 20, 0.72) 85%, rgba(9, 26, 20, 0.94) 100%)",
        }}
      />

      {/* Floating Studio Proof Chips (Farmily-style ambient live status) */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-6 z-10 items-center gap-3 bg-[rgba(9,26,20,0.86)] backdrop-blur-[14px] border border-[rgba(250,249,245,0.18)] py-2.5 px-4 rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-7 duration-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <div className="text-left">
          <span className="block text-[9.5px] uppercase tracking-[1.4px] font-bold text-[#9FB0A8]">
            Design Systems
          </span>
          <span className="text-xs font-semibold text-[#FAF9F5] font-sans">
            140+ Tokens · Figma & Code Intact
          </span>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-6 z-10 items-center gap-3 bg-[rgba(9,26,20,0.86)] backdrop-blur-[14px] border border-[rgba(250,249,245,0.18)] py-2.5 px-4 rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-7 duration-300">
        <span className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-[11px] font-bold">
          100
        </span>
        <div className="text-left">
          <span className="block text-[9.5px] uppercase tracking-[1.4px] font-bold text-[#9FB0A8]">
            Lighthouse Performance
          </span>
          <span className="text-xs font-semibold text-[#FAF9F5] font-sans">
            Fast Core Web Vitals · Zero Bloat
          </span>
        </div>
      </div>

      {/* Proof ticker ribbon above dock */}
      <div className="relative z-10 mb-3.5 flex items-center gap-2 sm:gap-3 flex-wrap justify-center text-[10.5px] sm:text-[11.5px] text-[#C4D0CB]">
        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(9,26,20,0.7)] backdrop-blur-md border border-[rgba(250,249,245,0.12)]">
          <span className="text-emerald-400 text-[8px]">●</span> Brand Identity
        </span>
        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(9,26,20,0.7)] backdrop-blur-md border border-[rgba(250,249,245,0.12)]">
          <span className="text-emerald-400 text-[8px]">●</span> Custom Web & Apps
        </span>
        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(9,26,20,0.7)] backdrop-blur-md border border-[rgba(250,249,245,0.12)]">
          <span className="text-emerald-400 text-[8px]">●</span> Tailored WordPress
        </span>
      </div>

      {/* Floating CTA Dock */}
      <div className="relative z-10 inline-flex items-center gap-2 sm:gap-3.5 bg-[rgba(9,26,20,0.88)] backdrop-blur-[16px] border border-[rgba(250,249,245,0.24)] py-1 sm:py-1.5 pr-2.5 sm:pr-3 pl-1 sm:pl-1.5 rounded-full shadow-[0_16px_36px_rgba(0,0,0,0.4)] max-w-full">
        <Link
          href="/contact?topic=partnership"
          className="bg-[#FAF9F5] text-[#091A14] text-[11.5px] sm:text-[12.5px] font-semibold py-2 px-3.5 sm:px-5 rounded-full whitespace-nowrap min-h-[34px] sm:min-h-[36px] inline-flex items-center transition-transform hover:-translate-y-0.5"
        >
          Partner With Us →
        </Link>
        <span className="w-px h-4 bg-[rgba(250,249,245,0.26)] shrink-0" />
        <a
          href="#case-studies"
          className="text-[#FAF9F5] text-[11.5px] sm:text-[12.5px] font-medium py-1.5 pr-1.5 sm:pr-2.5 whitespace-nowrap inline-flex items-center gap-1.5 hover:text-[#F3F1EA]"
        >
          Case Studies ↗
        </a>
      </div>
    </section>
  );
}

