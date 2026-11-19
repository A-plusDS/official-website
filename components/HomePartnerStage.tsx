"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function HomePartnerStage() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const stages = [
    {
      num: "01 · Co-Create",
      desc: "Align vision & scope early",
    },
    {
      num: "02 · Craft & Build",
      desc: "Design & engineering as one",
    },
    {
      num: "03 · Launch Value",
      desc: "Built cleanly for the long run",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 3400);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="bg-[#FAF9F5] text-[#091A14] rounded-t-[18px] sm:rounded-t-[24px] -mt-3.5 sm:-mt-5 relative z-30 py-9 sm:py-[54px] pb-10 sm:pb-[58px] shadow-[0_-14px_36px_rgba(6,19,14,0.14)]"
      id="partner"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-7 sm:gap-[38px] items-center reveal-up">
          {/* Visual Frame */}
          <div
            className="relative rounded-[20px] overflow-hidden bg-[#091A14] border border-[#E4E1D7] shadow-[0_20px_48px_rgba(9,26,20,0.12)] aspect-[4/3]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Image
              src="/assets/partner_collaboration_visual.jpg"
              alt="A+ Digital Solutions collaborative workshop bringing brand and product ideas to life"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 550px"
            />

            {/* Bottom Floating Stage Bar */}
            <div
              className="absolute left-2.5 sm:left-3 right-2.5 sm:right-3 bottom-2.5 sm:bottom-3 bg-[rgba(9,26,20,0.84)] backdrop-blur-[12px] border border-[rgba(250,249,245,0.16)] rounded-xl p-2 sm:p-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 text-[#FAF9F5]"
              role="tablist"
              aria-label="How A+ Collaborates With Partners"
            >
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={stage.num}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`p-1.5 sm:p-2 rounded-lg text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-[rgba(250,249,245,0.12)] border border-[rgba(250,249,245,0.26)] text-[#FAF9F5]"
                        : "border border-transparent text-[#B7C5BF] hover:text-[#FAF9F5]"
                    }`}
                  >
                    <strong className="block font-display text-[10.5px] font-semibold mb-0.5">
                      {stage.num}
                    </strong>
                    <span className="block text-[10px] opacity-85 leading-tight">
                      {stage.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Text & Standards */}
          <div>
            <div className="inline-flex items-center gap-[7px] text-[10px] font-bold tracking-[1.8px] uppercase text-[#5C6A64] mb-2">
              <BrandLogo mode="dark" variant="mark" className="h-3 w-auto" />
              <span>Partner With Us</span>
            </div>
            <h2 className="font-display text-[clamp(22px,2.4vw,29px)] leading-[1.15] font-bold tracking-[-0.02em] text-[#091A14] mb-3">
              Built on strategy, craft, and lasting value.
            </h2>
            <p className="text-[13.5px] leading-[1.65] text-[#5C6A64] mb-4.5 max-w-[48ch]">
              We partner with ambitious businesses and create our own in-house digital products. Every project brings together strategic thinking, thoughtful execution, and fine attention to detail to deliver work built for the long term.
            </p>

            <div className="flex flex-col gap-2 mb-5">
              <div className="flex gap-2.5 sm:gap-3 items-baseline p-2.5 px-3 rounded-[10px] border border-[#E4E1D7] bg-white text-[12.5px] leading-[1.45] text-[#5C6A64]">
                <b className="font-display text-[11px] text-[#091A14] whitespace-nowrap">01</b>
                <div>
                  <strong className="text-[#091A14] font-semibold">Strategic Clarity & Craft:</strong>{" "}
                  Research, positioning, and visual design work as one system before any code ships.
                </div>
              </div>
              <div className="flex gap-2.5 sm:gap-3 items-baseline p-2.5 px-3 rounded-[10px] border border-[#E4E1D7] bg-white text-[12.5px] leading-[1.45] text-[#5C6A64]">
                <b className="font-display text-[11px] text-[#091A14] whitespace-nowrap">02</b>
                <div>
                  <strong className="text-[#091A14] font-semibold">Attention to Detail:</strong>{" "}
                  Typography, interactive polish, and engineering rigor treated with equal care at every step.
                </div>
              </div>
              <div className="flex gap-2.5 sm:gap-3 items-baseline p-2.5 px-3 rounded-[10px] border border-[#E4E1D7] bg-white text-[12.5px] leading-[1.45] text-[#5C6A64]">
                <b className="font-display text-[11px] text-[#091A14] whitespace-nowrap">03</b>
                <div>
                  <strong className="text-[#091A14] font-semibold">Client & In-House Ventures:</strong>{" "}
                  Alongside bespoke client partnerships, we actively invest in developing original A+ products.
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              <Link href="/contact?topic=partnership" className="btn-pill-dark">
                Let&apos;s Build Something Together →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

