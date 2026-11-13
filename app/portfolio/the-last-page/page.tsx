import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";

export const metadata = {
  title: "The Last Page (TLP) | Brand Portfolio | A+ Digital Solutions",
  description:
    "A complete brand identity system and literary visual language crafted for an intimate, intentional community of readers.",
};

export default function TheLastPageCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#171717] font-montserrat">
      {/* Studio Topbar */}
      <div className="bg-[#091A14] text-[#FAF9F5] py-3.5 px-6 sm:px-12 flex justify-between items-center text-xs sm:text-[13px] font-sans">
        <Link href="/#case-studies" className="inline-flex items-center gap-2.5 font-medium hover:text-[#F3F1EA]">
          <BrandLogo mode="light" variant="mark" className="h-4 w-auto" />
          <span>← Back to A+ Selected Work</span>
        </Link>
        <span className="text-[11px] tracking-[1.4px] uppercase text-[#9FB0A8]">
          Client Brand Portfolio · Branding & Design
        </span>
      </div>

      <div className="max-w-[1220px] mx-auto px-5 sm:px-10">
        {/* Case Hero */}
        <section className="py-12 sm:py-20 border-b border-[#D9C9B8]">
          <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#6A0F1A] mb-4 flex items-center gap-2.5">
            <span>✦</span> Brand Identity · Guidelines · Social Templates
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-end">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] font-bold text-[#6A0F1A] mb-4">
                The Last Page
              </h1>
              <div className="text-xs tracking-[3px] uppercase text-[#171717] mb-5">
                Where the book ends, the conversation begins.
              </div>
              <p className="text-[15.5px] leading-[1.75] text-[#363636] max-w-[580px]">
                A complete brand identity system and literary visual language crafted for an intimate, intentional community of readers founded by Purity & Oyinna. Built to feel like an independent literary journal: warm, refined, and timeless.
              </p>
            </div>
            <div className="border-t border-[#D9C9B8]">
              <div className="flex justify-between py-3.5 border-b border-[#D9C9B8] text-[13px]">
                <span className="text-[#6B6259] uppercase tracking-[1px] text-[11px] font-semibold">Client</span>
                <strong className="font-semibold text-[#171717]">The Last Page (TLP)</strong>
              </div>
              <div className="flex justify-between py-3.5 border-b border-[#D9C9B8] text-[13px]">
                <span className="text-[#6B6259] uppercase tracking-[1px] text-[11px] font-semibold">Scope</span>
                <strong className="font-semibold text-[#171717]">Brand Identity, Guidelines & Social System</strong>
              </div>
              <div className="flex justify-between py-3.5 border-b border-[#D9C9B8] text-[13px]">
                <span className="text-[#6B6259] uppercase tracking-[1px] text-[11px] font-semibold">Ethos</span>
                <strong className="font-semibold text-[#171717]">“Small by design. Meaningful by nature.”</strong>
              </div>
              <div className="flex justify-between py-3.5 border-b border-[#D9C9B8] text-[13px]">
                <span className="text-[#6B6259] uppercase tracking-[1px] text-[11px] font-semibold">Palette</span>
                <strong className="font-semibold text-[#171717]">Burgundy, Antique Gold & Warm Ivory</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Logo System */}
        <section className="py-14 sm:py-20 border-b border-[#D9C9B8]">
          <div className="flex justify-between items-baseline mb-8 sm:mb-10 flex-wrap gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#6A0F1A] font-semibold">
              Logo System
            </h2>
            <span className="text-[11.5px] tracking-[1.8px] uppercase text-[#6B6259]">
              Primary · Burgundy Lockup · Monogram Submark
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-7">
            <div className="border border-[#D9C9B8] bg-white p-7 sm:p-9 flex flex-col justify-between gap-5">
              <div className="relative w-full h-[180px] sm:h-[220px] flex items-center justify-center">
                <Image
                  src="/assets/clients/tlp/tlp_logo_white.png"
                  alt="The Last Page Official Logo on White"
                  width={340}
                  height={140}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-xs tracking-[0.8px] uppercase text-[#6B6259] border-t border-[#D9C9B8] pt-3.5">
                01 / Primary Identity on Clean White (#FFFFFF)
              </div>
            </div>
            <div className="border border-[#6A0F1A] bg-[#6A0F1A] text-[#F7F3EE] p-7 sm:p-9 flex flex-col justify-between gap-5">
              <div className="relative w-full h-[180px] sm:h-[220px] flex items-center justify-center">
                <Image
                  src="/assets/clients/tlp/tlp_logo_burgundy.jpg"
                  alt="The Last Page Official Burgundy Lockup"
                  width={340}
                  height={140}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-xs tracking-[0.8px] uppercase text-[#D9C9B8] border-t border-[rgba(217,201,184,0.25)] pt-3.5">
                02 / Reverse Signature Edition on Burgundy (#6A0F1A)
              </div>
            </div>
          </div>
        </section>

        {/* Color & Typography System */}
        <section className="py-14 sm:py-20 border-b border-[#D9C9B8]">
          <div className="flex justify-between items-baseline mb-8 sm:mb-10 flex-wrap gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#6A0F1A] font-semibold">
              Color & Typography System
            </h2>
            <span className="text-[11.5px] tracking-[1.8px] uppercase text-[#6B6259]">
              Strict 5-Color Literary Palette · Zero Gradients
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            <div className="border border-[#D9C9B8] bg-white">
              <div className="h-[90px] sm:h-[110px] bg-[#6A0F1A] border-b border-[#D9C9B8]" />
              <div className="p-3 sm:p-4 text-xs">
                <strong className="block text-[13px] mb-0.5">Burgundy</strong>
                <code>#6A0F1A</code>
              </div>
            </div>
            <div className="border border-[#D9C9B8] bg-white">
              <div className="h-[90px] sm:h-[110px] bg-[#B08D57] border-b border-[#D9C9B8]" />
              <div className="p-3 sm:p-4 text-xs">
                <strong className="block text-[13px] mb-0.5">Antique Gold</strong>
                <code>#B08D57</code>
              </div>
            </div>
            <div className="border border-[#D9C9B8] bg-white">
              <div className="h-[90px] sm:h-[110px] bg-[#F7F3EE] border-b border-[#D9C9B8]" />
              <div className="p-3 sm:p-4 text-xs">
                <strong className="block text-[13px] mb-0.5">Warm Ivory</strong>
                <code>#F7F3EE</code>
              </div>
            </div>
            <div className="border border-[#D9C9B8] bg-white">
              <div className="h-[90px] sm:h-[110px] bg-[#171717] border-b border-[#D9C9B8]" />
              <div className="p-3 sm:p-4 text-xs">
                <strong className="block text-[13px] mb-0.5">Midnight Black</strong>
                <code>#171717</code>
              </div>
            </div>
            <div className="border border-[#D9C9B8] bg-white col-span-2 sm:col-span-1">
              <div className="h-[90px] sm:h-[110px] bg-[#D9C9B8] border-b border-[#D9C9B8]" />
              <div className="p-3 sm:p-4 text-xs">
                <strong className="block text-[13px] mb-0.5">Soft Stone</strong>
                <code>#D9C9B8</code>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="border border-[#D9C9B8] bg-white p-7 sm:p-8">
              <div className="text-[11px] tracking-[2px] uppercase text-[#B08D57] mb-2.5">
                Primary Serif · Headings & Quotes
              </div>
              <div className="font-serif text-3xl sm:text-[38px] text-[#6A0F1A] mb-2">
                Playfair Display
              </div>
              <p className="font-serif italic text-base text-[#3A3A3A]">
                “A good book leaves you with more questions than answers.”
              </p>
            </div>
            <div className="border border-[#D9C9B8] bg-white p-7 sm:p-8">
              <div className="text-[11px] tracking-[2px] uppercase text-[#B08D57] mb-2.5">
                Secondary Sans · Body & Metadata
              </div>
              <div className="font-montserrat text-2xl sm:text-[32px] font-semibold text-[#171717] mb-2">
                Montserrat
              </div>
              <p className="text-sm text-[#4A4A4A] leading-[1.65]">
                Clean modern body text with generous line-height (1.5 to 1.6) and tracked uppercase labels.
              </p>
            </div>
          </div>
        </section>

        {/* Social Templates & Collateral */}
        <section className="py-14 sm:py-20">
          <div className="flex justify-between items-baseline mb-8 sm:mb-10 flex-wrap gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#6A0F1A] font-semibold">
              Social Media Templates & Collateral
            </h2>
            <span className="text-[11.5px] tracking-[1.8px] uppercase text-[#6B6259]">
              Designed to Guideline Rules · Flat · Wide Margins · Zero Shadows
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-11 items-center mb-12 sm:mb-16">
            <div className="border border-[#D9C9B8] bg-white p-4">
              <Image
                src="/assets/clients/tlp/tlp_november_flyer.jpg"
                alt="TLP November Book of the Month Flyer"
                width={500}
                height={667}
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] tracking-[2px] uppercase text-[#B08D57] block mb-2.5">
                ✦ Launched Collateral
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#6A0F1A] mb-3.5">
                November Book of the Month
              </h3>
              <p className="text-[15px] text-[#363636] leading-relaxed mb-5">
                Editorial announcement template pairing the official burgundy lockup with restrained antique gold rules, subtle 4-point star accents, and calm Ivory paper stock balance.
              </p>
              <div className="border-t border-[#D9C9B8] pt-4 text-xs sm:text-[13px] text-[#6B6259]">
                Delivered: Master Brand PDF · Primary/Burgundy Logos · Monthly Book Flyer · Instagram & WhatsApp Template Suite
              </div>
            </div>
          </div>

          {/* 4 Social Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Template 1 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-semibold tracking-[1.5px] uppercase text-[#6A0F1A] flex justify-between">
                <span>01 / Instagram Feed Quote</span>
                <span>1080 × 1080</span>
              </div>
              <div className="aspect-square p-[11%] flex flex-col justify-between border border-[#6A0F1A] bg-[#6A0F1A] text-[#F7F3EE]">
                <div className="flex justify-between items-center text-[10px] tracking-[2.2px] uppercase pb-3.5 border-b border-[rgba(217,201,184,0.35)] text-[#D9C9B8]">
                  <span>From The Reading Room</span>
                  <span className="text-[#B08D57] text-base">✦</span>
                </div>
                <div className="font-serif italic text-2xl sm:text-[29px] leading-[1.32] font-medium">
                  “A good book leaves you with more questions than answers. A great book club helps you explore them.”
                </div>
                <div className="flex justify-between items-center pt-3.5 border-t border-[rgba(217,201,184,0.35)] text-[10px] tracking-[2px] uppercase text-[#D9C9B8]">
                  <span>The Last Page</span>
                  <span>TLP · 2026</span>
                </div>
              </div>
            </div>

            {/* Template 2 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-semibold tracking-[1.5px] uppercase text-[#6A0F1A] flex justify-between">
                <span>02 / Instagram Event Invitation</span>
                <span>1080 × 1080</span>
              </div>
              <div className="aspect-square p-[11%] flex flex-col justify-between border border-[#D9C9B8] bg-[#F7F3EE] text-[#171717]">
                <div className="flex justify-between items-center text-[10px] tracking-[2.2px] uppercase pb-3.5 border-b border-[#D9C9B8]">
                  <span>Evening Gathering</span>
                  <span className="text-[#B08D57] text-base">✦</span>
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-2xl sm:text-[34px] leading-[1.18] text-[#6A0F1A] font-semibold mb-4">
                    Turn the page with us this Thursday.
                  </h4>
                  <div className="w-11 h-px bg-[#B08D57] mx-auto mb-4" />
                  <p className="text-[13.5px] text-[#3A3A3A] leading-[1.65] max-w-[300px] mx-auto">
                    Quiet reading, honest debates, and warm conversation. Bring your book and an open mind.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-3.5 border-t border-[#D9C9B8] text-[10px] tracking-[2px] uppercase">
                  <span>Thursday · 6:30 PM</span>
                  <span>TLP</span>
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-semibold tracking-[1.5px] uppercase text-[#6A0F1A] flex justify-between">
                <span>03 / WhatsApp Community Card</span>
                <span>High Contrast</span>
              </div>
              <div className="aspect-square p-[11%] flex flex-col justify-between border border-[#171717] bg-[#171717] text-[#F7F3EE]">
                <div className="flex justify-between items-center text-[10px] tracking-[2.2px] uppercase pb-3.5 border-b border-[rgba(217,201,184,0.35)] text-[#D9C9B8]">
                  <span>Member Reminder</span>
                  <span className="text-[#B08D57] text-base">✦</span>
                </div>
                <div>
                  <div className="text-[11px] tracking-[2.2px] uppercase text-[#B08D57] mb-3">
                    Monthly Discussion
                  </div>
                  <h4 className="font-serif text-2xl sm:text-[32px] leading-[1.15] mb-4 text-[#F7F3EE]">
                    Chapters 8 to End
                  </h4>
                  <p className="text-[13.5px] text-[#D9C9B8] leading-[1.6]">
                    Saturday · 4:00 PM &nbsp;|&nbsp; Private Salon<br />
                    Come with one question that stayed with you.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-3.5 border-t border-[rgba(217,201,184,0.35)] text-[10px] tracking-[2px] uppercase text-[#D9C9B8]">
                  <span>Where Conversation Begins</span>
                  <span>TLP</span>
                </div>
              </div>
            </div>

            {/* Template 4 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-semibold tracking-[1.5px] uppercase text-[#6A0F1A] flex justify-between">
                <span>04 / Editorial Manifesto Tile</span>
                <span>1080 × 1080</span>
              </div>
              <div className="aspect-square p-[11%] flex flex-col justify-between border border-[#D9C9B8] bg-white text-[#171717]">
                <div className="flex justify-between items-center text-[10px] tracking-[2.2px] uppercase pb-3.5 border-b border-[#D9C9B8]">
                  <span>What We Stand For</span>
                  <span className="text-[#B08D57] text-base">✦</span>
                </div>
                <div className="text-center">
                  <div className="text-[11px] tracking-[2.4px] uppercase text-[#6A0F1A] mb-4.5">
                    Curiosity · Conversation · Community
                  </div>
                  <p className="font-serif italic text-2xl sm:text-[28px] text-[#6A0F1A] leading-[1.3]">
                    “Small by design.<br />Meaningful by nature.”
                  </p>
                </div>
                <div className="flex justify-between items-center pt-3.5 border-t border-[#D9C9B8] text-[10px] tracking-[2px] uppercase">
                  <span>Purity × Oyinna</span>
                  <span>The Last Page</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Case CTA Footer */}
      <footer className="bg-[#091A14] text-[#FAF9F5] py-14 sm:py-20 px-6 sm:px-10 text-center font-sans border-t border-[#1A3328]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl leading-[1.2] mb-3 text-[#FAF9F5]">
            Need brand guidelines & social templates built right?
          </h2>
          <p className="text-[#A7B7B0] text-[15px] mb-7 leading-relaxed">
            A+ Digital Solutions builds cohesive visual identities, brand books, and ready-to-publish social systems.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link
              href="/contact?topic=branding"
              className="bg-[#FAF9F5] text-[#091A14] py-3.5 px-7 rounded-full font-semibold text-[13.5px] hover:bg-[#F3F1EA] transition-colors"
            >
              Start a Project / Message Us →
            </Link>
            <a
              href="mailto:Aplusdigitalsolutions.tech@gmail.com"
              className="text-[#FAF9F5] border border-[rgba(250,249,245,0.35)] hover:border-[#FAF9F5] py-3 px-6 rounded-full font-medium text-[13.5px] transition-colors"
            >
              Aplusdigitalsolutions.tech@gmail.com
            </a>
          </div>
          <div className="mt-7 flex justify-center gap-5 flex-wrap">
            <Link
              href="/#case-studies"
              className="text-[#7C8A84] hover:text-[#FAF9F5] text-[13px] border-b border-[rgba(124,138,132,0.4)] pb-0.5 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/case-studies"
              className="text-[#7C8A84] hover:text-[#FAF9F5] text-[13px] border-b border-[rgba(124,138,132,0.4)] pb-0.5 transition-colors"
            >
              All Case Studies ↗
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

