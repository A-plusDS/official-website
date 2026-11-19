"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [stripVisible, setStripVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDeptsOpen, setMobileDeptsOpen] = useState(false);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const services = [
    {
      num: "01",
      tag: "IDENTITY & CRAFT",
      title: "Brand Strategy & Graphic Design",
      desc: "Positioning, naming, identity systems & master brand books",
      href: "/services#branding",
    },
    {
      num: "02",
      tag: "EXPERIENCE & FLOW",
      title: "UI/UX & Design Systems",
      desc: "Modular Figma libraries, user flows & interactive prototypes",
      href: "/services#design",
    },
    {
      num: "03",
      tag: "MODERN WEB",
      title: "Web Engineering",
      desc: "Bespoke company sites, portfolios & high-performance storefronts",
      href: "/services#web",
    },
    {
      num: "04",
      tag: "TAILORED CMS",
      title: "WordPress Studio",
      desc: "Custom themes, curated blocks, speed optimization & maintenance",
      href: "/services#wordpress",
    },
    {
      num: "05",
      tag: "CUSTOM SOFTWARE",
      title: "Web Apps, Mobile & SaaS",
      desc: "Full-stack software products, custom platforms & scalable APIs",
      href: "/services#software",
    },
    {
      num: "06",
      tag: "RELIABILITY & QA",
      title: "Consulting & QA Support",
      desc: "Product roadmaps, cross-device audits & ongoing care",
      href: "/services#qa",
    },
  ];

  return (
    <>
      {/* ANNOUNCEMENT STRIP */}
      {stripVisible && (
        <div className="bg-[#F3F1EA] text-[#091A14] text-[10px] md:text-[11px] font-medium tracking-[0.2px] py-1.5 px-10 text-center relative border-b border-[#E4E1D7] leading-[1.35]">
          <span>
            Your digital product and brand partner · Strategy, Graphic & UI/UX Design, Web & Custom Software
          </span>
          <button
            onClick={() => setStripVisible(false)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#5C6A64] hover:text-[#091A14] text-base w-6 h-6 inline-flex items-center justify-center cursor-pointer"
            title="Dismiss announcement"
            aria-label="Dismiss announcement"
          >
            ×
          </button>
        </div>
      )}

      {/* STICKY NAVIGATION */}
      <header className="bg-[#091A14] px-[clamp(18px,3.6vw,40px)] py-2.5 flex items-center justify-between gap-3.5 border-b border-[rgba(250,249,245,0.1)] sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center min-w-0" aria-label="A+ Digital Solutions Home">
          <BrandLogo mode="light" variant="lockup" className="h-[28px] sm:h-[32px] md:h-[35px] w-auto" />
        </Link>

        {/* Desktop Links (Hidden <= 880px) */}
        <nav className="hidden min-[881px]:flex items-center gap-6">
          <div className="relative">
            <button
              ref={triggerRef}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-[#DCE3E0] hover:text-[#FAF9F5] text-[14px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
              aria-expanded={dropdownOpen}
            >
              Services <span className="text-[12px]">{dropdownOpen ? "⌃" : "⌄"}</span>
            </button>
          </div>
          <Link
            href="/#case-studies"
            className="text-[#DCE3E0] hover:text-[#FAF9F5] text-[14px] font-medium transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/about"
            className={`text-[#DCE3E0] hover:text-[#FAF9F5] text-[14px] font-medium transition-colors ${
              pathname === "/about" ? "text-[#FAF9F5] border-b-[1.5px] border-[#FAF9F5] pb-0.5" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/careers"
            className={`text-[#DCE3E0] hover:text-[#FAF9F5] text-[14px] font-medium transition-colors ${
              pathname === "/careers" ? "text-[#FAF9F5] border-b-[1.5px] border-[#FAF9F5] pb-0.5" : ""
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link href="/contact" className="btn-pill-light hidden sm:inline-flex group">
            <span>Partner With Us</span>
            <span className="arrow-nudge">→</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[881px]:hidden bg-[rgba(250,249,245,0.08)] border border-[rgba(250,249,245,0.22)] text-[#FAF9F5] w-[38px] h-[38px] rounded-[9px] text-[17px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {/* DESKTOP SERVICES DROPDOWN (Elevated Farmily-style Glass Drawer) */}
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="hidden min-[881px]:block bg-[rgba(6,19,14,0.96)] backdrop-blur-[24px] px-[clamp(18px,3.6vw,40px)] py-6 pb-7 border-b border-[rgba(250,249,245,0.14)] shadow-[0_30px_70px_rgba(0,0,0,0.6)] sticky top-[53px] z-40 animate-dropdown"
        >
          <div className="max-w-[1100px] mx-auto">
            {/* Top Toolbar */}
            <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[1.6px] text-[#FAF9F5] mb-4 flex-wrap gap-3 pb-3 border-b border-[rgba(250,249,245,0.1)]">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OUR CORE CAPABILITIES · 6 SPECIALIZED DISCIPLINES</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/services"
                  onClick={() => setDropdownOpen(false)}
                  className="text-xs font-mono text-[#F3F1EA] hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Explore All Services</span>
                  <span className="arrow-nudge">→</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(false)}
                  className="bg-[rgba(250,249,245,0.06)] hover:bg-[rgba(250,249,245,0.14)] border border-[rgba(250,249,245,0.2)] text-[#FAF9F5] rounded-full px-3 py-1 text-[10px] font-mono tracking-[0.8px] uppercase transition-all cursor-pointer"
                >
                  Close ×
                </button>
              </div>
            </div>

            {/* 6 Capabilities Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {services.map((item) => (
                <Link
                  key={item.num}
                  href={item.href}
                  onClick={() => setDropdownOpen(false)}
                  className="group block bg-[rgba(250,249,245,0.03)] hover:bg-[rgba(250,249,245,0.07)] border border-[#1A3328] hover:border-emerald-500/40 rounded-xl p-3.5 md:p-4 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-wider">
                      STEP {item.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[1.2px] text-[#7C8A84] group-hover:text-[#A7B7B0] transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  <strong className="font-display text-[13.5px] text-[#FAF9F5] group-hover:text-white transition-colors flex items-center justify-between mb-1">
                    <span>{item.title}</span>
                    <span className="arrow-nudge text-xs text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </strong>
                  <span className="text-[11.5px] text-[#A0AFA8] group-hover:text-[#C4D0CB] block leading-[1.45] transition-colors">
                    {item.desc}
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom Spotlight Strip */}
            <div className="pt-3 border-t border-[rgba(250,249,245,0.08)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono">
              <span className="text-[#9FB0A8] flex items-center gap-2 text-[11px]">
                <span className="text-emerald-400">●</span>
                <span>Concept to Code: Direct collaboration with brand & software leads.</span>
              </span>
              <Link
                href="/contact?topic=discovery"
                onClick={() => setDropdownOpen(false)}
                className="text-[#FAF9F5] hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group font-semibold text-[11.5px]"
              >
                <span>Book a 20-Min Discovery Session</span>
                <span className="arrow-nudge">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="min-[881px]:hidden bg-[#06130E] border-b border-[#1A3328] px-[18px] py-4 pb-6 flex flex-col gap-1 sticky top-[53px] z-40">
          <button
            onClick={() => setMobileDeptsOpen(!mobileDeptsOpen)}
            className="w-full bg-transparent border-none border-b border-[rgba(250,249,245,0.08)] text-[#FAF9F5] text-sm font-medium py-2.5 flex justify-between items-center cursor-pointer"
          >
            <span>Services (6 Capabilities)</span>
            <span>{mobileDeptsOpen ? "⌃" : "⌄"}</span>
          </button>
          {mobileDeptsOpen && (
            <div className="flex flex-col gap-2 py-2 border-b border-[rgba(250,249,245,0.08)]">
              {services.map((s) => (
                <Link
                  key={s.num}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[rgba(250,249,245,0.04)] border border-[#1A3328] rounded-lg p-2.5"
                >
                  <strong className="block font-display text-xs text-[#FAF9F5] mb-0.5">{s.title}</strong>
                  <span className="block text-[11px] text-[#9FB0A8] leading-tight">{s.desc}</span>
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF9F5] text-sm font-medium py-2.5 border-b border-[rgba(250,249,245,0.08)] flex justify-between items-center"
          >
            Case Studies <span>→</span>
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF9F5] text-sm font-medium py-2.5 border-b border-[rgba(250,249,245,0.08)] flex justify-between items-center"
          >
            About A+ Studio <span>→</span>
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF9F5] text-sm font-medium py-2.5 border-b border-[rgba(250,249,245,0.08)] flex justify-between items-center"
          >
            All Services <span>→</span>
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF9F5] text-sm font-medium py-2.5 border-b border-[rgba(250,249,245,0.08)] flex justify-between items-center"
          >
            Careers <span>→</span>
          </Link>
          <Link
            href="/insights"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF9F5] text-sm font-medium py-2.5 border-b border-[rgba(250,249,245,0.08)] flex justify-between items-center"
          >
            Insights <span>→</span>
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 bg-[#FAF9F5] text-[#091A14] text-center text-[13.5px] font-semibold py-3 px-4 rounded-full"
          >
            Partner With Us →
          </Link>
        </div>
      )}
    </>
  );
}

