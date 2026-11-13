"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const [servicesOpen, setServicesOpen] = useState(true);
  const [studioOpen, setStudioOpen] = useState(false);

  return (
    <footer className="bg-[#06130E] text-[#FAF9F5] border-t border-[#1A3328] pt-9 pb-5 relative z-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.55fr_1fr_0.9fr] gap-7 pb-[22px] border-b border-[#1A3328]">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-1 border-b md:border-b-0 border-[#1A3328] pb-4 md:pb-0">
            <Link href="/" className="inline-flex items-center" aria-label="A+ Digital Solutions">
              <BrandLogo mode="light" variant="lockup" className="h-[30px] sm:h-[34px] w-auto" />
            </Link>
            <p className="text-xs text-[#A7B7B0] leading-[1.5] max-w-[290px] my-2.5 mb-3">
              A creative digital partner shaping strategy, brand identity, product design, and custom software for ambitious teams.
            </p>
            <div className="flex flex-col items-start gap-2">
              <a
                href="mailto:Aplusdigitalsolutions.tech@gmail.com"
                className="inline-flex items-center gap-[7px] py-1.5 px-3 rounded-full bg-[rgba(250,249,245,0.06)] hover:bg-[rgba(250,249,245,0.1)] border border-[#1A3328] hover:border-[#F3F1EA] text-[#FAF9F5] text-[11.5px] font-medium transition-colors break-all"
              >
                <span>Aplusdigitalsolutions.tech@gmail.com</span>
                <span>↗</span>
              </a>
              <div className="flex gap-[7px] flex-wrap" aria-label="Social Media Channels">
                <a
                  href="#instagram-url"
                  className="inline-flex items-center gap-[5px] py-1 px-2.5 rounded-full border border-[#1A3328] hover:border-[rgba(250,249,245,0.45)] bg-[rgba(250,249,245,0.03)] text-[#C4D0CB] hover:text-[#FAF9F5] text-[11px] font-medium transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="#linkedin-url"
                  className="inline-flex items-center gap-[5px] py-1 px-2.5 rounded-full border border-[#1A3328] hover:border-[rgba(250,249,245,0.45)] bg-[rgba(250,249,245,0.03)] text-[#C4D0CB] hover:text-[#FAF9F5] text-[11px] font-medium transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#x-url"
                  className="inline-flex items-center gap-[5px] py-1 px-2.5 rounded-full border border-[#1A3328] hover:border-[rgba(250,249,245,0.45)] bg-[rgba(250,249,245,0.03)] text-[#C4D0CB] hover:text-[#FAF9F5] text-[11px] font-medium transition-colors"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                  </svg>
                  <span>X</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="border-b sm:border-b-0 border-[#1A3328] pb-3 sm:pb-0">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center text-left font-display text-[12.5px] font-bold tracking-[1.4px] uppercase text-[#F3F1EA] mb-3 cursor-pointer sm:cursor-default"
            >
              <span>Services</span>
              <span className="sm:hidden text-sm text-[#9BB0A8]">{servicesOpen ? "−" : "+"}</span>
            </button>
            <ul className={`flex flex-col gap-1.5 ${servicesOpen ? "flex" : "hidden sm:flex"}`}>
              <li><Link href="/services#branding" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Brand, Strategy & Graphic Design</Link></li>
              <li><Link href="/services#design" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">UI/UX & Product Design</Link></li>
              <li><Link href="/services#web" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Web Engineering</Link></li>
              <li><Link href="/services#wordpress" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">WordPress Studio</Link></li>
              <li><Link href="/services#software" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Web Apps, Mobile & SaaS</Link></li>
              <li><Link href="/services#qa" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Consulting & QA Support</Link></li>
            </ul>
          </div>

          {/* Studio Column */}
          <div className="pb-3 sm:pb-0">
            <button
              type="button"
              onClick={() => setStudioOpen(!studioOpen)}
              className="w-full flex justify-between items-center text-left font-display text-[12.5px] font-bold tracking-[1.4px] uppercase text-[#F3F1EA] mb-3 cursor-pointer sm:cursor-default"
            >
              <span>Studio</span>
              <span className="sm:hidden text-sm text-[#9BB0A8]">{studioOpen ? "−" : "+"}</span>
            </button>
            <ul className={`flex flex-col gap-1.5 ${studioOpen ? "flex" : "hidden sm:flex"}`}>
              <li><Link href="/" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Home</Link></li>
              <li><Link href="/case-studies" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Case Studies</Link></li>
              <li><Link href="/about" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">About</Link></li>
              <li><Link href="/insights" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Insights</Link></li>
              <li><Link href="/careers" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-[#A7B7B0] hover:text-[#FAF9F5] text-xs transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 text-[11px] text-[#7C8A84]">
          <span>© 2026 A+ Digital Solutions. Strategy · Brand Craft · Technology.</span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[#A7B7B0] hover:text-[#FAF9F5] font-medium transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

