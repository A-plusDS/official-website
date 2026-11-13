"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubpageReturn from "@/components/SubpageReturn";

interface CaseStudyItem {
  id: string;
  title: string;
  categoryTag: string;
  desc: string;
  href: string;
  cats: string[];
  stageType: "light" | "dark" | "custom";
  bgStyle: React.CSSProperties;
  logoSrc?: string;
  logoAlt?: string;
  isCustomContent?: boolean;
  statusBadge?: string;
}

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const caseStudies: CaseStudyItem[] = [
    {
      id: "tlp",
      title: "The Last Page (TLP)",
      categoryTag: "Brand & Strategy · Graphic Design",
      desc: "Literary identity system, master guidelines book, and Book of the Month social graphics.",
      href: "/portfolio/the-last-page",
      cats: ["brand"],
      stageType: "light",
      bgStyle: { backgroundColor: "#FFFFFF" },
      logoSrc: "/assets/clients/tlp/tlp_logo_white.png",
      logoAlt: "The Last Page Official Logo",
    },
    {
      id: "vd-autos",
      title: "VD Autos",
      categoryTag: "Brand & Strategy · Guidelines",
      desc: "Automotive identity refinement, cobalt brand guidelines, and social launch templates.",
      href: "/portfolio/vd-autos",
      cats: ["brand"],
      stageType: "dark",
      bgStyle: {
        background: "radial-gradient(circle at center, #122F57 0%, #0B1F3A 100%)",
      },
      logoSrc: "/assets/clients/vd_autos/vd_autos_logo_clean.png",
      logoAlt: "VD Autos Official Logo",
    },
    {
      id: "evently",
      title: "Evently AI",
      categoryTag: "Web Applications · Web & Software",
      desc: "AI-assisted private event microsite builder finished in Obsidian Noir and Champagne Gold.",
      href: "/portfolio/event-ai",
      cats: ["software", "webapp"],
      stageType: "custom",
      statusBadge: "● Ongoing",
      bgStyle: {
        background:
          "radial-gradient(circle at top right, rgba(197, 162, 111, 0.16), transparent 60%), #0A0A0A",
      },
      isCustomContent: true,
    },
    {
      id: "griggs",
      title: "Griggs Specialist Hospital",
      categoryTag: "Web & Software · Healthcare",
      desc: "Patient-centric clinical platform focused on clear specialty navigation and appointment flow.",
      href: "/portfolio/griggs-hospital",
      cats: ["software"],
      stageType: "light",
      bgStyle: {
        background: "linear-gradient(145deg, #FFFFFF 0%, #DBEFF0 100%)",
      },
      logoSrc: "/assets/clients/griggs/griggs_logo_dark.png",
      logoAlt: "Griggs Specialist Hospital Logo",
    },
    {
      id: "breed",
      title: "Breed Perfumes",
      categoryTag: "Web & Software · E-Commerce",
      desc: "Artisanal fragrance commerce interface built around sensory notes and tactile packaging.",
      href: "/portfolio/breed-perfumes",
      cats: ["software"],
      stageType: "dark",
      bgStyle: {
        background: "radial-gradient(circle at center, #221B17 0%, #120E0C 100%)",
      },
      logoSrc: "/assets/clients/breed/breed_logo.png",
      logoAlt: "Breed Perfume Limited Official Logo",
    },
    {
      id: "tbr",
      title: "The Bold Reviews",
      categoryTag: "Web & Software · Publishing",
      desc: "High-contrast ink and crimson editorial magazine engineered for structured reading speed.",
      href: "/portfolio/the-bold-reviews",
      cats: ["software"],
      stageType: "light",
      bgStyle: { backgroundColor: "#FFFFFF" },
      logoSrc: "/assets/clients/the_bold_reviews/tbr_logo_official.jpg",
      logoAlt: "The Bold Reviews Official Logo",
    },
  ];

  const filtered = caseStudies.filter(
    (cs) => activeFilter === "all" || cs.cats.includes(activeFilter)
  );

  return (
    <main className="min-h-screen bg-[#091A14]">
      <Header />

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container-wide">
          <SubpageReturn theme="dark" />

          <div className="eyebrow-dark" style={{ color: "#9BB0A8" }}>
            <svg
              viewBox="0 0 100 84"
              style={{ height: "12px", width: "auto", display: "block", flexShrink: 0 }}
            >
              <path
                d="M 10 76 L 42 8 L 74 76"
                fill="none"
                stroke="#FAF9F5"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="24" y1="48" x2="92" y2="48" stroke="#FAF9F5" strokeWidth="3.8" strokeLinecap="round" />
              <line x1="78" y1="34" x2="78" y2="62" stroke="#FAF9F5" strokeWidth="3.8" strokeLinecap="round" />
            </svg>
            <span>Case Studies</span>
          </div>
          <h1>Selected projects shaped across brand craft and software engineering.</h1>
          <p>
            Explore how we pair authentic brand direction, tailored UI/UX design, and reliable engineering across real client engagements.
          </p>

          {/* Filter Pills */}
          <div className="subpage-jump-row">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`jump-pill cursor-pointer ${activeFilter === "all" ? "active" : ""}`}
            >
              All Projects (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("brand")}
              className={`jump-pill cursor-pointer ${activeFilter === "brand" ? "active" : ""}`}
            >
              Brand &amp; Strategy
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("software")}
              className={`jump-pill cursor-pointer ${activeFilter === "software" ? "active" : ""}`}
            >
              Web &amp; Software
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("webapp")}
              className={`jump-pill cursor-pointer ${activeFilter === "webapp" ? "active" : ""}`}
            >
              Web Applications
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Overlapping Sheet Alabaster */}
      <section className="sheet-alabaster">
        <div className="container-wide">
          <div className="work-archive-grid">
            {filtered.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="archive-card"
              >
                {/* Stage */}
                <div
                  className={`archive-stage ${item.stageType === "light" ? "stage-light" : "stage-dark"}`}
                  style={item.bgStyle}
                >
                  {item.statusBadge && (
                    <span className="status-badge">
                      {item.statusBadge}
                    </span>
                  )}

                  {item.isCustomContent ? (
                    <div style={{ textAlign: "center" }}>
                      <div style={{ display: "inline-flex", alignItems: "baseline", gap: "5px" }}>
                        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 600, color: "#C5A26F" }}>
                          Evently
                        </span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "2.2px", color: "rgba(197, 162, 111, 0.8)" }}>
                          AI
                        </span>
                      </div>
                      <div style={{ fontSize: "8.5px", letterSpacing: "1.6px", textTransform: "uppercase", color: "#BFB6A4", marginTop: "5px" }}>
                        Luxury Event Microsites
                      </div>
                    </div>
                  ) : (
                    item.logoSrc && (
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt || item.title}
                        width={240}
                        height={90}
                        style={item.id === "breed" ? { filter: "brightness(0) invert(1)" } : undefined}
                      />
                    )
                  )}
                </div>

                {/* Card Body */}
                <div className="archive-body">
                  <small>
                    {item.categoryTag}
                  </small>
                  <h3>
                    {item.title}
                  </h3>
                  <p>
                    {item.desc}
                  </p>
                  <span className="archive-link">
                    View Case Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
