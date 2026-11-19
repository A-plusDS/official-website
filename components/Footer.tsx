"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const scrollToTop = (e: React.FormEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050E0A] text-[#FAF9F5] border-t border-[#1A3328] pt-14 sm:pt-20 pb-10 relative z-10 font-sans">
      <div className="container-wide">
        {/* Top Presence & Studio Status Banner (Farmily Institutional Style) */}
        <div className="pb-10 mb-12 border-b border-[#1A3328] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <Link href="/" className="inline-flex items-center shrink-0" aria-label="A+ Digital Solutions Home">
              <BrandLogo mode="light" variant="lockup" className="h-8 sm:h-9 w-auto" />
            </Link>
            <span className="hidden sm:inline-block w-px h-5 bg-[#1A3328]" />
            <div className="inline-flex items-center gap-2.5 py-1 px-3 rounded-full bg-[rgba(250,249,245,0.04)] border border-[#1A3328] text-xs font-mono text-[#DCE3E0]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for Select Engagements</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 flex-wrap">
            <span className="text-[11px] font-mono uppercase tracking-[1.5px] text-[#7C8A84]">
              HUBS: LAGOS · LONDON · REMOTE WORLDWIDE
            </span>
            <a
              href="mailto:aplusdigitalsolutions.tech@gmail.com"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#FAF9F5] hover:bg-[#F3F1EA] text-[#091A14] text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <span>aplusdigitalsolutions.tech@gmail.com</span>
              <span className="arrow-nudge">↗</span>
            </a>
          </div>
        </div>

        {/* 4-Column Structured Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-10 pb-14 border-b border-[#1A3328]">
          {/* Column 1: Brand & Philosophy */}
          <div>
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-emerald-400 font-bold block mb-3">
              ABOUT THE STUDIO
            </span>
            <p className="font-serif italic text-lg sm:text-xl text-[#FAF9F5] mb-3 leading-snug">
              “Strategy before design. Craft before code.”
            </p>
            <p className="text-xs text-[#9FB0A8] leading-relaxed max-w-sm mb-6">
              A creative digital partner shaping strategy, visual identity systems, product design, and custom software for ambitious organizations.
            </p>

            {/* Social Channels with Hover Lift */}
            <div className="flex gap-2 flex-wrap" aria-label="Studio Social Channels">
              <a
                href="https://github.com/A-plusDS"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-[#1A3328] hover:border-[#FAF9F5] bg-[rgba(250,249,245,0.03)] text-[#C4D0CB] hover:text-[#FAF9F5] text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <span>GitHub</span>
                <span className="arrow-nudge text-[10px]">↗</span>
              </a>
              <a
                href="#linkedin"
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-[#1A3328] hover:border-[#FAF9F5] bg-[rgba(250,249,245,0.03)] text-[#C4D0CB] hover:text-[#FAF9F5] text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <span>LinkedIn</span>
                <span className="arrow-nudge text-[10px]">↗</span>
              </a>
              <a
                href="#x-twitter"
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-[#1A3328] hover:border-[#FAF9F5] bg-[rgba(250,249,245,0.03)] text-[#C4D0CB] hover:text-[#FAF9F5] text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <span>X</span>
                <span className="arrow-nudge text-[10px]">↗</span>
              </a>
              <a
                href="#instagram"
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-[#1A3328] hover:border-[#FAF9F5] bg-[rgba(250,249,245,0.03)] text-[#C4D0CB] hover:text-[#FAF9F5] text-xs font-mono transition-all hover:-translate-y-0.5"
              >
                <span>Instagram</span>
                <span className="arrow-nudge text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Capabilities & Services */}
          <div>
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#7C8A84] font-bold block mb-4">
              CAPABILITIES
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#9FB0A8]">
              <li>
                <Link href="/services#branding" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Brand Strategy & Graphic Craft</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/services#design" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>UI/UX & Design Systems</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Custom Web Engineering</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/services#wordpress" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Tailored WordPress Studio</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Web Apps, Mobile & SaaS</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/services#qa" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Consulting & QA Support</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Navigation */}
          <div>
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#7C8A84] font-bold block mb-4">
              STUDIO
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#9FB0A8]">
              <li>
                <Link href="/#pipeline" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Concept to Code Pipeline</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/#workbench" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>The Interactive Workbench</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Selected Case Studies</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>About & Standards</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Careers & Talent Roster</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FAF9F5] transition-colors inline-flex items-center gap-1 group">
                  <span>Start a Conversation</span>
                  <span className="arrow-nudge text-[#7C8A84] group-hover:text-emerald-400">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards & Architectural Quality (Farmily Proof Block) */}
          <div className="bg-[#091A14] border border-[#1A3328] rounded-xl p-5 text-xs space-y-3 font-mono text-[#FAF9F5]">
            <div className="flex items-center justify-between border-b border-[#1A3328] pb-2 text-[10px] text-[#7C8A84] uppercase tracking-wider">
              <span>STANDARDS SPEC</span>
              <span className="text-emerald-400">AUDIT PASS</span>
            </div>
            <div className="flex items-center gap-2 text-[#C4D0CB]">
              <span className="text-emerald-400">●</span>
              <span>100/100 Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-2 text-[#C4D0CB]">
              <span className="text-emerald-400">●</span>
              <span>Strict TypeScript Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-[#C4D0CB]">
              <span className="text-emerald-400">●</span>
              <span>Zero Handoff Loss (Figma ➔ Code)</span>
            </div>
            <div className="flex items-center gap-2 text-[#C4D0CB]">
              <span className="text-emerald-400">●</span>
              <span>Direct Lead Access on Every Build</span>
            </div>
            <div className="pt-2 border-t border-[#1A3328] text-[10px] text-[#7C8A84]">
              DEPLOY: VERCEL EDGE CDN
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-[#7C8A84]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span>© 2026 A+ Digital Solutions Inc. All rights reserved.</span>
            <span className="hidden sm:inline-block text-[#1A3328]">|</span>
            <span className="text-[#9FB0A8]">Timezones: GMT · WAT · EST</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 py-1.5 px-3 rounded-lg border border-[#1A3328] hover:border-[#FAF9F5] text-[#FAF9F5] text-xs font-mono transition-all hover:-translate-y-0.5 cursor-pointer bg-[rgba(250,249,245,0.02)]"
          >
            <span>Back to top</span>
            <span className="text-emerald-400">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
