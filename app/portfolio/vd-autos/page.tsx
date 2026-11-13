import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";

export const metadata = {
  title: "VD Autos | Brand Portfolio | A+ Digital Solutions",
  description:
    "Master identity guidelines, positioning strategy, and automotive social media framework for VD Autos.",
};

export default function VdAutosCaseStudy() {
  return (
    <main className="min-h-screen bg-[#101820] text-white font-sans">
      {/* Studio Topbar */}
      <div className="bg-[#091A14] text-[#FAF9F5] py-3.5 px-6 sm:px-12 flex justify-between items-center text-xs sm:text-[13px] border-b border-[rgba(250,249,245,0.12)]">
        <Link href="/#case-studies" className="inline-flex items-center gap-2.5 font-medium hover:text-[#F3F1EA]">
          <BrandLogo mode="light" variant="mark" className="h-4 w-auto" />
          <span>← Back to A+ Selected Work</span>
        </Link>
        <span className="text-[11px] tracking-[1.4px] uppercase text-[#9FB0A8]">
          Client Brand Portfolio · Automotive Identity
        </span>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#101820] py-14 sm:py-20 border-b border-[rgba(255,255,255,0.14)]">
        <div className="max-w-[1220px] mx-auto px-5 sm:px-10">
          <div className="text-[11px] font-bold tracking-[2.2px] uppercase text-[#1769D2] mb-4">
            Brand Master Guidelines · Visual Identity · Social System
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08] mb-4">
                VD Autos
              </h1>
              <div className="inline-block text-[11px] font-bold tracking-[3px] uppercase py-1.5 px-3.5 border border-[#1769D2] rounded-md text-white mb-5">
                DRIVEN BY TRUST
              </div>
              <p className="text-[15.5px] text-[#C7D4E5] leading-[1.7] max-w-[580px]">
                Master identity guidelines, positioning strategy, and automotive social media framework for VD Autos (a VD Group company). Designed for clarity, credibility, and modern automotive confidence without unnecessary luxury excess.
              </p>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.14)]">
              <div className="flex justify-between py-3.5 border-b border-[rgba(255,255,255,0.14)] text-[13px]">
                <span className="text-[#9EB1C9] uppercase tracking-[1px] text-[11px] font-semibold">Client</span>
                <strong className="font-semibold text-white">VD Autos (VD Group)</strong>
              </div>
              <div className="flex justify-between py-3.5 border-b border-[rgba(255,255,255,0.14)] text-[13px]">
                <span className="text-[#9EB1C9] uppercase tracking-[1px] text-[11px] font-semibold">Essence</span>
                <strong className="font-semibold text-white">Confidence in every car decision.</strong>
              </div>
              <div className="flex justify-between py-3.5 border-b border-[rgba(255,255,255,0.14)] text-[13px]">
                <span className="text-[#9EB1C9] uppercase tracking-[1px] text-[11px] font-semibold">Deliverables</span>
                <strong className="font-semibold text-white">Brand Master Book, Logo Governance, Social System</strong>
              </div>
              <div className="flex justify-between py-3.5 border-b border-[rgba(255,255,255,0.14)] text-[13px]">
                <span className="text-[#9EB1C9] uppercase tracking-[1px] text-[11px] font-semibold">Palette</span>
                <strong className="font-semibold text-white">Deep Navy, Clear Blue, Black & White</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1220px] mx-auto px-5 sm:px-10">
        {/* Official Master Logo & Service Pillars */}
        <section className="py-14 sm:py-20 border-b border-[rgba(255,255,255,0.14)]">
          <div className="flex justify-between items-baseline mb-8 sm:mb-10 flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Official Master Logo & Service Pillars</h2>
            <span className="text-[11.5px] tracking-[1.6px] uppercase text-[#9EB1C9]">Strict Artwork Governance · Zero AI Alteration</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-7">
            <div className="bg-[#0B1F3A] border border-[rgba(255,255,255,0.14)] rounded-[14px] p-8 sm:p-11 flex flex-col items-center justify-center gap-5">
              <Image
                src="/assets/clients/vd_autos/vd_autos_logo_clean.png"
                alt="VD Autos Official Master Logo"
                width={460}
                height={160}
                className="w-full max-w-[460px] h-auto object-contain"
              />
              <div className="text-[11px] tracking-[3px] uppercase text-[#9EB1C9]">
                ─── &nbsp; DRIVEN BY TRUST &nbsp; ───
              </div>
              <p className="text-xs text-[#9EB1C9] text-center max-w-[380px]">
                Supplied master artwork preserved with exact proportions on uncluttered dark Deep Navy (#0B1F3A) grounds.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3.5">
              <div className="bg-[rgba(11,31,58,0.55)] border border-[rgba(255,255,255,0.14)] rounded-xl p-4 sm:p-5">
                <strong className="flex justify-between items-center text-[15px] mb-1">01. Automotive Sales</strong>
                <span className="text-[13px] text-[#9EB1C9]">Connecting buyers to inspected vehicles suited to budget and needs.</span>
              </div>
              <div className="bg-[rgba(11,31,58,0.55)] border border-[rgba(255,255,255,0.14)] rounded-xl p-4 sm:p-5">
                <strong className="flex justify-between items-center text-[15px] mb-1">02. Vehicle Sourcing & Importation</strong>
                <span className="text-[13px] text-[#9EB1C9]">Structured sourcing and transparent importation guidance.</span>
              </div>
              <div className="bg-[rgba(11,31,58,0.55)] border border-[rgba(255,255,255,0.14)] rounded-xl p-4 sm:p-5">
                <strong className="flex justify-between items-center text-[15px] mb-1">03. Trade-Ins</strong>
                <span className="text-[13px] text-[#9EB1C9]">Fair inspection-backed trade-in valuations and transitions.</span>
              </div>
              <div className="bg-[rgba(11,31,58,0.55)] border border-[#1769D2] rounded-xl p-4 sm:p-5">
                <strong className="flex justify-between items-center text-[15px] mb-1">
                  04. Vehicle Verification{" "}
                  <span className="text-[10px] font-bold uppercase tracking-[1px] bg-[#1769D2] text-white py-0.5 px-2 rounded-full">Coming Soon</span>
                </strong>
                <span className="text-[13px] text-[#9EB1C9]">Planned digital product for vehicle risk & history checks (clearly labeled until live).</span>
              </div>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="py-14 sm:py-20 border-b border-[rgba(255,255,255,0.14)]">
          <div className="flex justify-between items-baseline mb-8 sm:mb-10 flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Approved Color System</h2>
            <span className="text-[11.5px] tracking-[1.6px] uppercase text-[#9EB1C9]">Deep Navy · Clear Blue · Black · White</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-[rgba(255,255,255,0.14)] rounded-xl overflow-hidden bg-[#0B1F3A]">
              <div className="h-24 sm:h-28 bg-[#0B1F3A] border-b border-[rgba(255,255,255,0.14)]" />
              <div className="p-4 text-xs">
                <strong className="block text-sm mb-0.5">Deep Navy</strong>
                <code className="text-[#9EB1C9]">#0B1F3A</code>
              </div>
            </div>
            <div className="border border-[rgba(255,255,255,0.14)] rounded-xl overflow-hidden bg-[#0B1F3A]">
              <div className="h-24 sm:h-28 bg-[#1769D2] border-b border-[rgba(255,255,255,0.14)]" />
              <div className="p-4 text-xs">
                <strong className="block text-sm mb-0.5">Clear Blue</strong>
                <code className="text-[#9EB1C9]">#1769D2</code>
              </div>
            </div>
            <div className="border border-[rgba(255,255,255,0.14)] rounded-xl overflow-hidden bg-[#0B1F3A]">
              <div className="h-24 sm:h-28 bg-[#101820] border-b border-[rgba(255,255,255,0.14)]" />
              <div className="p-4 text-xs">
                <strong className="block text-sm mb-0.5">Black</strong>
                <code className="text-[#9EB1C9]">#101820</code>
              </div>
            </div>
            <div className="border border-[rgba(255,255,255,0.14)] rounded-xl overflow-hidden bg-[#0B1F3A]">
              <div className="h-24 sm:h-28 bg-white border-b border-[rgba(255,255,255,0.14)]" />
              <div className="p-4 text-xs">
                <strong className="block text-sm mb-0.5 text-white">White</strong>
                <code className="text-[#9EB1C9]">#FFFFFF</code>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Graphics & Social Templates */}
        <section className="py-14 sm:py-20">
          <div className="flex justify-between items-baseline mb-8 sm:mb-10 flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Launch Graphics & Social Media Templates</h2>
            <span className="text-[11.5px] tracking-[1.6px] uppercase text-[#9EB1C9]">Instagram Carousels · Trade-In Explainers · X Updates</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12 sm:mb-14">
            <div className="border border-[rgba(255,255,255,0.14)] rounded-2xl overflow-hidden bg-[#0B1F3A]">
              <Image
                src="/assets/clients/vd_autos/vd_autos_social_1.jpg"
                alt="VD Autos Launch Service Flyer v1"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-xs text-[#9EB1C9] border-t border-[rgba(255,255,255,0.14)]">
                Concept 01: Core 4-Service Automotive Announcement
              </div>
            </div>
            <div className="border border-[rgba(255,255,255,0.14)] rounded-2xl overflow-hidden bg-[#0B1F3A]">
              <Image
                src="/assets/clients/vd_autos/vd_autos_social_2.jpg"
                alt="VD Autos Compliant Flyer with Coming Soon Badge"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-xs text-[#9EB1C9] border-t border-[rgba(255,255,255,0.14)]">
                Concept 02: Guideline-Compliant Revision (with “Coming Soon” Verification Tag)
              </div>
            </div>
          </div>

          {/* Social Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#9EB1C9] flex justify-between">
                <span>01 / Instagram Vehicle Listing Card</span>
                <span>1080 × 1080</span>
              </div>
              <div className="aspect-square rounded-2xl border border-[rgba(23,105,210,0.45)] p-7 sm:p-9 flex flex-col justify-between bg-[radial-gradient(circle_at_top_right,rgba(23,105,210,0.25),transparent_55%),#0B1F3A]">
                <div className="flex justify-between items-center">
                  <Image src="/assets/clients/vd_autos/vd_autos_logo_clean.png" alt="VD Autos" width={110} height={36} className="h-8 sm:h-9 w-auto object-contain" />
                  <span className="text-[10.5px] font-bold tracking-[1.4px] uppercase py-1 px-3 rounded-md bg-[rgba(23,105,210,0.2)] border border-[#1769D2] text-[#DCEBFF]">Available Now</span>
                </div>
                <div>
                  <div className="text-xs text-[#9EB1C9] mb-1.5">2022 · FOREIGN USED · INSPECTED</div>
                  <h3 className="text-2xl sm:text-[28px] font-extrabold leading-[1.15] mb-3">Clean Title SUV · Verified Spec Sheet</h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="border border-[rgba(255,255,255,0.16)] rounded-lg p-2.5 text-xs"><small className="block text-[#9EB1C9] text-[10px] uppercase tracking-[1px]">Mileage</small><strong>42,800 mi</strong></div>
                    <div className="border border-[rgba(255,255,255,0.16)] rounded-lg p-2.5 text-xs"><small className="block text-[#9EB1C9] text-[10px] uppercase tracking-[1px]">Drivetrain</small><strong>AWD · Automatic</strong></div>
                    <div className="border border-[rgba(255,255,255,0.16)] rounded-lg p-2.5 text-xs"><small className="block text-[#9EB1C9] text-[10px] uppercase tracking-[1px]">Inspection</small><strong>Passed Full Check</strong></div>
                    <div className="border border-[rgba(255,255,255,0.16)] rounded-lg p-2.5 text-xs"><small className="block text-[#9EB1C9] text-[10px] uppercase tracking-[1px]">Inquiry</small><strong>DM for Pricing →</strong></div>
                  </div>
                </div>
                <div className="text-[11px] tracking-[2px] text-[#9EB1C9] uppercase">DRIVEN BY TRUST &nbsp;·&nbsp; A VD GROUP COMPANY</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#9EB1C9] flex justify-between">
                <span>02 / Trade-In Explainer Post</span>
                <span>1080 × 1080</span>
              </div>
              <div className="aspect-square rounded-2xl border border-[rgba(23,105,210,0.45)] p-7 sm:p-9 flex flex-col justify-between bg-[radial-gradient(circle_at_bottom_right,rgba(23,105,210,0.22),transparent_60%),#101820]">
                <div className="flex justify-between items-center">
                  <span className="text-[10.5px] font-bold tracking-[1.4px] uppercase py-1 px-3 rounded-md bg-[rgba(23,105,210,0.2)] border border-[#1769D2] text-[#DCEBFF]">Trade-Ins</span>
                  <Image src="/assets/clients/vd_autos/vd_autos_logo_clean.png" alt="VD Autos" width={110} height={36} className="h-8 sm:h-9 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-[30px] font-extrabold leading-[1.15] mb-4">Ready to upgrade your current drive?</h3>
                  <div className="flex flex-col gap-2.5">
                    <div className="border border-[rgba(255,255,255,0.16)] rounded-lg p-2.5 text-xs"><strong>01 / Book Vehicle Inspection:</strong> Honest physical assessment</div>
                    <div className="border border-[rgba(255,255,255,0.16)] rounded-lg p-2.5 text-xs"><strong>02 / Clear Valuation Offer:</strong> Transparent terms upfront</div>
                    <div className="border border-[rgba(255,255,255,0.16)] rounded-lg p-2.5 text-xs"><strong>03 / Seamless Upgrade:</strong> Apply value to your next car</div>
                  </div>
                </div>
                <div className="text-[11px] tracking-[2px] text-[#9EB1C9] uppercase">CONFIDENCE IN EVERY CAR DECISION</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#9EB1C9] flex justify-between">
                <span>03 / Buyer Education Tip</span>
                <span>Light Contrast</span>
              </div>
              <div className="aspect-square rounded-2xl border border-[#DCE5F2] p-7 sm:p-9 flex flex-col justify-between bg-white text-[#101820]">
                <div className="flex justify-between items-center">
                  <span className="text-[10.5px] font-bold tracking-[1.4px] uppercase py-1 px-3 rounded-md bg-[#EBF3FE] text-[#0B1F3A]">Buyer Guide</span>
                  <span className="text-[11px] font-bold tracking-[1.5px] text-[#0B1F3A]">VD AUTOS</span>
                </div>
                <div>
                  <div className="w-12 h-1 bg-[#1769D2] mb-4.5 rounded-sm" />
                  <h3 className="text-2xl sm:text-[30px] font-extrabold leading-[1.16] text-[#0B1F3A] mb-3.5">
                    3 Questions Every Smart Buyer Asks Before Paying
                  </h3>
                  <p className="text-sm text-[#3D4E63] leading-[1.65]">
                    1. Can I verify true VIN & import customs status?<br />
                    2. Has a full diagnostic scan been run?<br />
                    3. Are valuation & handover steps clear on paper?
                  </p>
                </div>
                <div className="border-t border-[#DCE5F2] pt-3.5 flex justify-between text-[11px] font-bold tracking-[1.6px] text-[#0B1F3A]">
                  <span>DRIVEN BY TRUST</span>
                  <span>SWIPE TO SAVE →</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-3">
              <div className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#9EB1C9] flex justify-between">
                <span>04 / Sourcing & Importation Card</span>
                <span>X / Instagram</span>
              </div>
              <div className="aspect-square rounded-2xl border border-[rgba(23,105,210,0.45)] p-7 sm:p-9 flex flex-col justify-between bg-[radial-gradient(circle_at_top_right,rgba(23,105,210,0.25),transparent_55%),#0B1F3A]">
                <div className="flex justify-between items-center">
                  <Image src="/assets/clients/vd_autos/vd_autos_logo_clean.png" alt="VD Autos" width={110} height={36} className="h-8 sm:h-9 w-auto object-contain" />
                  <span className="text-[10.5px] font-bold tracking-[1.4px] uppercase py-1 px-3 rounded-md bg-[rgba(23,105,210,0.2)] border border-[#1769D2] text-[#DCEBFF]">Sourcing</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-[32px] font-extrabold leading-[1.15] mb-3.5">
                    You choose the spec.<br /><span className="text-[#6EA8FE]">We source it properly.</span>
                  </h3>
                  <p className="text-sm text-[#C7D4E5] leading-[1.65]">
                    Direct sourcing, structured inspection updates, and clear importation milestones from order to keys in hand.
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-[rgba(255,255,255,0.14)] pt-3.5 text-xs text-[#9EB1C9]">
                  <span>Automotive Sales · Sourcing · Trade-Ins</span>
                  <strong className="text-white">Message Us →</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Case CTA Footer */}
      <footer className="bg-[#091A14] text-[#FAF9F5] py-14 sm:py-20 px-6 sm:px-10 text-center font-sans border-t border-[rgba(255,255,255,0.14)]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl leading-[1.2] mb-3 text-[#FAF9F5]">
            Need brand guidelines & social templates built right?
          </h2>
          <p className="text-[#A7B7B0] text-[15px] mb-7 leading-relaxed">
            Let&apos;s discuss your brand identity, guidelines package, or social rollout.
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

