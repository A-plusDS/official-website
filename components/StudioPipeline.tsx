"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";

interface PipelineStage {
  id: string;
  step: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techPills: string[];
  statusLabel: string;
}

const pipelineStages: PipelineStage[] = [
  {
    id: "strategy",
    step: "01",
    title: "Strategy & Discovery",
    category: "DISCOVERY & SCOPE",
    tagline: "Aligned before sketching a line or writing code.",
    description:
      "We unpack your business goals, target audience, brand positioning, and technical architecture. Every engagement starts with architectural clarity so engineering and design work toward the exact same milestone.",
    deliverables: [
      "Brand Positioning Manifesto",
      "Information Architecture & Scope Spec",
      "Tech Stack & Infrastructure Plan",
    ],
    techPills: ["Competitive Audit", "Product Scoping", "Milestone Roadmap"],
    statusLabel: "PHASE_01_ALIGNED",
  },
  {
    id: "brand",
    step: "02",
    title: "Brand Strategy & Craft",
    category: "IDENTITY & VOICE",
    tagline: "Timeless marks and rigorous guidelines.",
    description:
      "We design comprehensive visual identity systems: memorable logo marks, cohesive color palettes, editorial typography scales, and master brand books that speak with authority everywhere.",
    deliverables: [
      "Vector Logo Suite (Primary, Reverse, Monograms)",
      "Master Brand Guidelines Book (40+ pages)",
      "Digital Collateral & Social Media Templates",
    ],
    techPills: ["Vector SVG", "Editorial Typography", "Brand Manual"],
    statusLabel: "PHASE_02_IDENTITY",
  },
  {
    id: "design",
    step: "03",
    title: "UI/UX & Design Systems",
    category: "EXPERIENCE & FLOW",
    tagline: "Modular Figma libraries with zero handoff loss.",
    description:
      "Intuitive customer journeys, high-fidelity responsive wireframes, and scalable design token systems in Figma. Components are structured with auto-layout and variant states so code mirrors design 1:1.",
    deliverables: [
      "Figma Modular Component Library (140+ components)",
      "Interactive High-Fidelity Mobile/Desktop Prototypes",
      "Design Tokens (JSON) ready for development",
    ],
    techPills: ["Figma Systems", "Interaction Design", "Token Architecture"],
    statusLabel: "PHASE_03_PROTOTYPED",
  },
  {
    id: "engineering",
    step: "04",
    title: "Custom Web & Software",
    category: "ENGINEERING & CARE",
    tagline: "Production-grade code engineered for durability.",
    description:
      "Clean, scalable web development using Next.js 14 App Router, TypeScript, Tailwind CSS, or tailored WordPress. We build fast, accessible digital experiences with zero technical debt.",
    deliverables: [
      "Production Repository with Strict TypeScript",
      "Automated CI/CD Deployment on Vercel / Cloudflare",
      "SEO, Semantic HTML & JSON-LD Structured Data",
    ],
    techPills: ["Next.js 14", "TypeScript", "Tailwind CSS", "WordPress"],
    statusLabel: "PHASE_04_SHIPPED",
  },
  {
    id: "qa",
    step: "05",
    title: "Audit Verification & Care",
    category: "QUALITY ASSURANCE",
    tagline: "100/100 Core Web Vitals and multi-device audit.",
    description:
      "Rigorous quality assurance across physical iOS, Android, macOS, and Windows hardware. We verify 100/100 Lighthouse performance, WCAG accessibility, and provide long-term product stewardship.",
    deliverables: [
      "100/100 Lighthouse Performance & SEO Audit",
      "Cross-Device & Cross-Browser Signoff Matrix",
      "Post-Launch Maintenance & Ongoing Support",
    ],
    techPills: ["Core Web Vitals", "WCAG AAA", "Hardware Testing"],
    statusLabel: "PHASE_05_VERIFIED",
  },
];

export default function StudioPipeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = pipelineStages[activeIdx];

  return (
    <section className="bg-[#FAF9F5] text-[#091A14] py-16 sm:py-24 border-t border-[#E4E1D7] relative z-20" id="pipeline">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-10 sm:mb-14 border-b border-[#E4E1D7] pb-7 reveal-up">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-[7px] text-[10.5px] font-bold tracking-[2px] uppercase text-[#5C6A64] mb-2.5">
              <BrandLogo mode="dark" variant="mark" className="h-3 w-auto" />
              <span>How We Build · Concept to Code</span>
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#091A14]">
              One coherent pipeline. From initial brief to durable launch.
            </h2>
          </div>
          <p className="text-[14px] leading-[1.6] text-[#5C6A64] max-w-sm">
            We eliminate the traditional divide between creative brand designers and software engineers. Explore each stage of our engagement model below.
          </p>
        </div>

        {/* 5-Step Pipeline Rail (Farmily-style interactive connector) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8 reveal-up delay-100" role="tablist" aria-label="Studio Pipeline Stages">
          {pipelineStages.map((stage, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(idx)}
                className={`relative text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#091A14] text-[#FAF9F5] border-[#091A14] shadow-[0_12px_28px_rgba(9,26,20,0.18)] -translate-y-0.5"
                    : "bg-[#F3F1EA] text-[#091A14] border-[#E4E1D7] hover:border-[#1A3328] hover:bg-white"
                }`}
              >
                {/* Step pill */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[10px] tracking-[1.5px] font-bold uppercase ${
                      isActive ? "text-emerald-400" : "text-[#7C8A84]"
                    }`}
                  >
                    STEP {stage.step}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-emerald-400" : "bg-[#C4D0CB]"
                    }`}
                  />
                </div>
                <h3 className="font-display text-[13px] sm:text-[13.5px] font-bold leading-snug">
                  {stage.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Stage Active Showcase Card */}
        <div className="bg-white border border-[#E4E1D7] rounded-2xl p-6 sm:p-9 shadow-[0_18px_45px_rgba(9,26,20,0.06)] grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center reveal-up delay-200">
          {/* Left Column: Stage Details */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-[11px] font-bold tracking-[1.5px] uppercase text-[#75AC55] bg-[#E0F0D4] py-1 px-2.5 rounded-md">
                {active.category}
              </span>
              <span className="font-mono text-[10.5px] text-[#7C8A84] tracking-[1px]">
                {active.statusLabel}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-[28px] font-bold text-[#091A14] mb-2 leading-snug">
              {active.title}
            </h3>
            <p className="font-serif italic text-[16px] sm:text-[17px] text-[#37573E] mb-4">
              “{active.tagline}”
            </p>
            <p className="text-[14px] text-[#5C6A64] leading-[1.65] mb-6 max-w-xl">
              {active.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F3F1EA]">
              {active.techPills.map((pill) => (
                <span
                  key={pill}
                  className="font-mono text-[11px] py-1 px-3 rounded-full bg-[#F3F1EA] text-[#091A14] border border-[#E4E1D7] font-medium"
                >
                  ✦ {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Tangible Deliverables Box */}
          <div className="bg-[#091A14] text-[#FAF9F5] rounded-xl p-5 sm:p-6 border border-[#1A3328] shadow-inner">
            <div className="flex items-center justify-between border-b border-[#1A3328] pb-3 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[1.8px] text-[#9FB0A8] font-bold">
                TANGIBLE DELIVERABLES
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                AUDIT-READY
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {active.deliverables.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-[rgba(250,249,245,0.05)] border border-[rgba(250,249,245,0.08)] p-3 rounded-lg text-[13px] text-[#FAF9F5]"
                >
                  <span className="font-mono text-emerald-400 font-bold shrink-0">
                    0{i + 1}
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-[#1A3328] flex justify-between items-center text-[11px] text-[#9FB0A8] font-mono">
              <span>ZERO HANDOFF LOSS</span>
              <span className="text-[#FAF9F5]">CLIENT SIGN-OFF →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
