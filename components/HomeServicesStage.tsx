"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

interface ServiceStageItem {
  num: string;
  title: string;
  desc: string;
  mobileCtaText: string;
  href: string;
  mockupTag: string;
  mockupTitle: string;
  pills: string[];
  departmentLabel: string;
  mobileDesc: string;
  mobilePills: string[];
}

export default function HomeServicesStage() {
  const [activeIdx, setActiveIdx] = useState(0);

  const services: ServiceStageItem[] = [
    {
      num: "01",
      title: "Brand, Strategy & Graphic Design",
      desc: "Naming, identity systems, guidelines & collateral.",
      mobileCtaText: "Explore Brand Services ↗",
      href: "/services#branding",
      mockupTag: "01 / Brand & Strategy",
      mockupTitle: "Identity Systems & Graphic Design",
      pills: ["Positioning", "Graphic Design", "Guidelines", "Social Kits"],
      departmentLabel: "A+ BRAND STUDIO",
      mobileDesc: "Positioning, naming, identity systems, brand guidelines, and graphic collateral.",
      mobilePills: ["Identity", "Graphic Design", "Brand Strategy"],
    },
    {
      num: "02",
      title: "Web, UI/UX & Custom Software",
      desc: "Figma systems, custom sites, personal portfolios, apps & SaaS.",
      mobileCtaText: "Explore Web & Software ↗",
      href: "/services#web",
      mockupTag: "02 / Design & Engineering",
      mockupTitle: "Websites, UI/UX & Applications",
      pills: ["Figma UI/UX", "Portfolios & Biz", "Web & Mobile Apps", "SaaS"],
      departmentLabel: "A+ PRODUCT ENGINEERING",
      mobileDesc: "Figma systems, personal & company sites, online storefronts, mobile apps, and SaaS platforms.",
      mobilePills: ["Figma UI/UX", "Custom Web", "Apps & SaaS"],
    },
    {
      num: "03",
      title: "WordPress Studio",
      desc: "Custom themes, curated plugins, content & maintenance.",
      mobileCtaText: "Explore WordPress Studio ↗",
      href: "/services#wordpress",
      mockupTag: "03 / WordPress Studio",
      mockupTitle: "Editorial & Business WordPress",
      pills: ["Custom Builds", "Plugins", "Content Setup", "Care"],
      departmentLabel: "WORDPRESS DEPARTMENT",
      mobileDesc: "Dedicated WordPress builds, custom plugins, editorial setup, content writing, and care.",
      mobilePills: ["Themes & Plugins", "Publishing", "Maintenance"],
    },
    {
      num: "04",
      title: "Consulting & QA Support",
      desc: "Product strategy, cross-device QA & ongoing care.",
      mobileCtaText: "Explore Consulting & QA ↗",
      href: "/services#qa",
      mockupTag: "04 / Advisory & QA",
      mockupTitle: "Strategy Roadmaps & QA Care",
      pills: ["Product Consulting", "QA Testing", "Post-Launch Care"],
      departmentLabel: "A+ RELIABILITY",
      mobileDesc: "Technical roadmaps, product discovery, cross-device QA audits, and post-launch care.",
      mobilePills: ["Digital Consulting", "QA Testing", "Support"],
    },
  ];

  const current = services[activeIdx];

  return (
    <div className="relative z-10 -mt-4 sm:-mt-6 bg-[#F3F1EA] rounded-t-[18px] sm:rounded-t-[24px] pt-1.5 sm:pt-2 shadow-[0_-14px_36px_rgba(6,19,14,0.2)]">
      <section className="bg-[#FAF9F5] rounded-t-[14px] sm:rounded-t-[20px] py-8 sm:py-[52px] pb-10 sm:pb-[60px] border-t border-[#E4E1D7]" id="services">
        <div className="container-wide">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8 items-end mb-7 sm:mb-[30px]">
            <div>
              <div className="inline-flex items-center gap-[7px] text-[10px] font-bold tracking-[1.8px] uppercase text-[#5C6A64] mb-2">
                <BrandLogo mode="dark" variant="mark" className="h-3 w-auto" />
                <span>What We Deliver</span>
              </div>
              <h2 className="font-display text-[clamp(22px,2.4vw,29px)] leading-[1.16] font-bold tracking-[-0.02em] text-[#091A14]">
                We build digital products and brands people remember.
              </h2>
            </div>
            <p className="text-[13.5px] leading-[1.6] text-[#5C6A64] lg:max-w-[280px] lg:justify-self-end">
              Strategy, brand and graphic craft, UI/UX design, and custom software aligned cleanly under one roof.
            </p>
          </div>

          {/* Interactive Stage */}
          <div className="grid grid-cols-1 min-[901px]:grid-cols-[1fr_1.12fr] gap-0 min-[901px]:gap-[34px] items-center">
            {/* Left List */}
            <div className="flex flex-col">
              {services.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={item.num}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className={`py-3.5 border-t border-[#E4E1D7] ${
                      idx === services.length - 1 ? "border-b border-[#E4E1D7]" : ""
                    } cursor-pointer group`}
                  >
                    <div className="flex justify-between items-center min-h-[32px]">
                      <div className="flex items-baseline gap-3.5">
                        <span className="font-display text-[11px] font-semibold text-[#5C6A64]">
                          {item.num}
                        </span>
                        <span
                          className={`font-display text-[clamp(16px,1.55vw,18.5px)] font-semibold tracking-[-0.015em] transition-all ${
                            isActive
                              ? "text-[#091A14] translate-x-1"
                              : "text-[#5C6A64] group-hover:text-[#091A14] group-hover:translate-x-1"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <span
                        className={`text-[15px] transition-all ${
                          isActive
                            ? "opacity-100 translate-x-0 text-[#091A14]"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#091A14]"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {/* Mobile Inline Drawer (shown on mobile when active) */}
                    {isActive && (
                      <div className="min-[901px]:hidden mt-2.5 bg-[#091A14] text-[#FAF9F5] rounded-xl p-3.5">
                        <p className="text-[12.5px] text-[#C4D0CB] mb-2.5 leading-[1.5]">
                          {item.mobileDesc}
                        </p>
                        <div className="flex gap-1.5 flex-wrap mb-2.5">
                          {item.mobilePills.map((p) => (
                            <span
                              key={p}
                              className="text-[10px] py-[3px] px-2 rounded-full border border-[rgba(250,249,245,0.22)] text-[#DCE3E0]"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={item.href}
                          className="text-xs font-semibold text-[#FAF9F5] border-b border-[rgba(250,249,245,0.4)] pb-0.5"
                        >
                          {item.mobileCtaText}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Stage Preview Card */}
            <div className="hidden min-[901px]:flex flex-col justify-between bg-[#F3F1EA] border border-[#E4E1D7] rounded-2xl p-4 min-h-[274px]">
              <div className="rounded-[11px] overflow-hidden h-[188px] bg-[#091A14] flex items-center justify-center mb-3">
                <div className="w-full h-full p-4 flex flex-col justify-between text-[#FAF9F5] bg-[radial-gradient(circle_at_top_right,rgba(250,249,245,0.06),transparent_60%)]">
                  <div className="flex justify-between items-center text-[9.5px] tracking-[1.3px] uppercase text-[#7C8A84]">
                    <span>{current.mockupTag}</span>
                    <BrandLogo mode="light" variant="mark" className="h-3.5 w-auto" />
                  </div>
                  <div className="bg-[rgba(250,249,245,0.05)] border border-[rgba(250,249,245,0.14)] rounded-[9px] p-3 flex flex-col gap-2">
                    <h4 className="font-display text-[15.5px] leading-tight text-[#FAF9F5]">
                      {current.mockupTitle}
                    </h4>
                    <div className="flex gap-1.5 flex-wrap">
                      {current.pills.map((pill) => (
                        <span
                          key={pill}
                          className="text-[10px] py-[3px] px-2 rounded-full border border-[rgba(250,249,245,0.22)] text-[#DCE3E0]"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[9.5px] text-[#7C8A84] tracking-[1px]">
                    {current.departmentLabel}
                  </div>
                </div>
              </div>

              {/* Stage Meta Bottom */}
              <div className="flex justify-between items-center gap-3">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#091A14]">
                    {current.title}
                  </h3>
                  <p className="text-xs text-[#5C6A64] mt-0.5">{current.desc}</p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#091A14] whitespace-nowrap border-b-[1.5px] border-[#091A14] pb-0.5"
                >
                  Full Services ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Center CTA */}
          <div className="mt-8 sm:mt-[34px] flex flex-col items-center text-center gap-2.5">
            <p className="text-[13.5px] text-[#5C6A64]">Ready to bring your vision to life?</p>
            <a href="#contact" className="btn-pill-dark">
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

