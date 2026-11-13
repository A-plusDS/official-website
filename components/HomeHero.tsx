import React from "react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[clamp(410px,68vh,590px)] min-h-[380px] sm:min-h-[440px] bg-[#06130E] bg-[url('/assets/hero_billboard_official.jpg')] bg-cover bg-[center_24%] sm:bg-[center_35%] flex flex-col justify-end items-center px-3 sm:px-5 pb-6 sm:pb-11">
      {/* Readability Scrim Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 19, 14, 0.0) 0%, rgba(6, 19, 14, 0.0) 64%, rgba(9, 26, 20, 0.68) 92%, rgba(9, 26, 20, 0.90) 100%)",
        }}
      />

      {/* Floating CTA Dock */}
      <div className="relative z-10 inline-flex items-center gap-2 sm:gap-3.5 bg-[rgba(9,26,20,0.84)] backdrop-blur-[14px] border border-[rgba(250,249,245,0.22)] py-1 sm:py-1.5 pr-2.5 sm:pr-3 pl-1 sm:pl-1.5 rounded-full shadow-[0_16px_36px_rgba(0,0,0,0.34)] max-w-full">
        <Link
          href="/contact?topic=partnership"
          className="bg-[#FAF9F5] text-[#091A14] text-[11.5px] sm:text-[12.5px] font-semibold py-2 px-3.5 sm:px-4.5 rounded-full whitespace-nowrap min-h-[34px] sm:min-h-[36px] inline-flex items-center transition-transform hover:-translate-y-0.5"
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

