import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "./BrandLogo";

export default function HomeCaseStudies() {
  return (
    <section
      className="bg-[#091A14] text-[#FAF9F5] rounded-t-[18px] sm:rounded-t-[24px] -mt-3.5 sm:-mt-5 relative z-20 py-9 sm:py-[52px] pb-11 sm:pb-[68px] shadow-[0_-14px_36px_rgba(6,19,14,0.22)]"
      id="case-studies"
    >
      <div className="container-wide">
        {/* Top Row */}
        <div className="flex justify-between items-end gap-4 sm:gap-5 mb-5 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-[7px] text-[10px] font-bold tracking-[1.8px] uppercase text-[#9FB0A8] mb-2">
              <BrandLogo mode="light" variant="mark" className="h-3 w-auto" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="font-display text-[clamp(22px,2.4vw,29px)] leading-[1.15] font-bold tracking-[-0.02em] max-w-[500px] text-[#FAF9F5]">
              Crafted across brand, software, and web.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3.5">
            <p className="text-[13px] text-[#9FB0A8] max-w-[280px] leading-[1.5]">
              Each client engagement carries its own visual identity, built for lasting value.
            </p>
            <Link
              href="/case-studies"
              className="py-1.5 px-3.5 rounded-full bg-[#FAF9F5] text-[#091A14] text-[11.5px] font-semibold inline-flex items-center hover:bg-[#F3F1EA] transition-colors"
            >
              View All Case Studies ↗
            </Link>
          </div>
        </div>

        {/* 3 Work Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          {/* 1. The Last Page (TLP) */}
          <Link
            href="/portfolio/the-last-page"
            className="group bg-[#06130E] border border-[#1A3328] hover:border-[rgba(250,249,245,0.34)] rounded-[14px] overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1"
          >
            <div className="h-[142px] sm:h-[166px] w-full relative flex items-center justify-center p-5 bg-white border-b border-[#1A3328]">
              <div className="relative w-full h-[74px] sm:h-[82px] flex items-center justify-center">
                <Image
                  src="/assets/clients/tlp/tlp_logo_white.png"
                  alt="The Last Page Official Logo"
                  width={220}
                  height={82}
                  className="max-w-[64%] max-h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-3.5 sm:p-4 flex justify-between items-end gap-2.5">
              <div>
                <small className="block text-[9.5px] tracking-[1px] uppercase text-[#7C8A84] mb-0.5">
                  Branding · Visual Identity
                </small>
                <h4 className="font-display text-[14.5px] font-semibold text-[#FAF9F5] leading-snug">
                  The Last Page (TLP)
                </h4>
              </div>
              <span className="text-[11px] text-[#DCE3E0] whitespace-nowrap font-medium">
                Case Study →
              </span>
            </div>
          </Link>

          {/* 2. Breed Perfumes */}
          <Link
            href="/portfolio/breed-perfumes"
            className="group bg-[#06130E] border border-[#1A3328] hover:border-[rgba(250,249,245,0.34)] rounded-[14px] overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1"
          >
            <div
              className="h-[142px] sm:h-[166px] w-full relative flex items-center justify-center p-5 border-b border-[#1A3328]"
              style={{
                background: "radial-gradient(circle at center, #221B17 0%, #120E0C 100%)",
              }}
            >
              <div className="flex flex-col items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/assets/clients/breed/breed_logo.png"
                  alt="Breed Perfume Limited Official Logo"
                  width={220}
                  height={82}
                  className="max-w-[74%] max-h-[74px] sm:max-h-[82px] object-contain brightness-0 invert"
                />
                <div className="w-[34px] h-px bg-[#D4B483] mt-2" />
              </div>
            </div>
            <div className="p-3.5 sm:p-4 flex justify-between items-end gap-2.5">
              <div>
                <small className="block text-[9.5px] tracking-[1px] uppercase text-[#7C8A84] mb-0.5">
                  Website · E-Commerce Storefront
                </small>
                <h4 className="font-display text-[14.5px] font-semibold text-[#FAF9F5] leading-snug">
                  Breed Perfumes
                </h4>
              </div>
              <span className="text-[11px] text-[#DCE3E0] whitespace-nowrap font-medium">
                Case Study →
              </span>
            </div>
          </Link>

          {/* 3. The Bold Reviews */}
          <Link
            href="/portfolio/the-bold-reviews"
            className="group bg-[#06130E] border border-[#1A3328] hover:border-[rgba(250,249,245,0.34)] rounded-[14px] overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1 sm:col-span-2 md:col-span-1"
          >
            <div className="h-[142px] sm:h-[166px] w-full relative flex items-center justify-center p-5 bg-white border-b border-[#1A3328]">
              <div className="relative w-full h-[74px] sm:h-[82px] flex items-center justify-center">
                <Image
                  src="/assets/clients/the_bold_reviews/tbr_logo_official.jpg"
                  alt="The Bold Reviews Official Logo"
                  width={220}
                  height={82}
                  className="max-w-[64%] max-h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-3.5 sm:p-4 flex justify-between items-end gap-2.5">
              <div>
                <small className="block text-[9.5px] tracking-[1px] uppercase text-[#7C8A84] mb-0.5">
                  WordPress · Editorial Publishing
                </small>
                <h4 className="font-display text-[14.5px] font-semibold text-[#FAF9F5] leading-snug">
                  The Bold Reviews
                </h4>
              </div>
              <span className="text-[11px] text-[#DCE3E0] whitespace-nowrap font-medium">
                Case Study →
              </span>
            </div>
          </Link>
        </div>

        {/* Confidential Client Work Banner */}
        <div className="mt-5 sm:mt-5.5 p-4 sm:p-5 rounded-[14px] border border-[rgba(250,249,245,0.14)] bg-[rgba(250,249,245,0.04)] flex justify-between items-center gap-4 flex-wrap">
          <div>
            <strong className="block font-display text-sm text-[#FAF9F5] mb-0.5">
              Confidential & Private Client Work
            </strong>
            <span className="text-[12.5px] text-[#A7B7B0]">
              Additional client projects are kept out of public view and can be shared privately upon request.
            </span>
          </div>
          <Link
            href="/contact?topic=private"
            className="py-1.5 px-3.5 rounded-full border border-[rgba(250,249,245,0.28)] hover:border-[#FAF9F5] text-[#FAF9F5] text-[11.5px] font-medium whitespace-nowrap transition-colors"
          >
            Request Private Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

