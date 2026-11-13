import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";

export const metadata = {
  title: "The Bold Reviews | Case Study | A+ Digital Solutions",
  description:
    "Independent editorial publishing platform structured around crisp consumer buying guides, wellness articles, and everyday product comparisons.",
};

export default function TheBoldReviewsCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-[#0B1623] font-sans">
      {/* Studio Topbar */}
      <div className="bg-[#091A14] text-[#FAF9F5] py-3.5 px-6 sm:px-12 flex justify-between items-center text-xs sm:text-[13px] border-b border-[rgba(250,249,245,0.12)]">
        <Link href="/#case-studies" className="inline-flex items-center gap-2.5 font-medium hover:text-[#F3F1EA]">
          <BrandLogo mode="light" variant="mark" className="h-4 w-auto" />
          <span>← Back to A+ Selected Work</span>
        </Link>
        <span className="text-[11px] tracking-[1.4px] uppercase text-[#9FB0A8]">
          Web & Software · Editorial Publishing
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-9">
        {/* Hero */}
        <section className="py-12 sm:py-16 border-b border-[#E4E1D7]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3.5 flex-wrap">
                <span className="text-[11px] font-bold tracking-[1.8px] uppercase text-[#B91C1C]">
                  Web & Software · Editorial Publishing
                </span>
                <span className="text-[10px] font-bold tracking-[1px] uppercase py-1 px-2.5 rounded-full bg-[#FEF2F2] text-[#B91C1C]">
                  Live Website
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.12] mb-3.5 text-[#0B1623]">
                The Bold Reviews
              </h1>
              <p className="text-[15px] text-[#5C6A64] max-w-[500px] mb-6 leading-relaxed">
                Independent editorial publishing platform structured around crisp consumer buying guides, wellness articles, and everyday product comparisons.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://theboldreviews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B91C1C] text-white py-2.5 px-7 rounded-full text-[13px] font-bold transition-transform hover:-translate-y-0.5"
                >
                  Visit Live Website ↗
                </a>
                <Link
                  href="/contact?topic=wordpress"
                  className="border border-[#E4E1D7] hover:border-[#B91C1C] text-[#0B1623] py-2.5 px-5 rounded-full text-[13px] font-semibold transition-colors"
                >
                  Build Something Similar →
                </Link>
              </div>
            </div>

            {/* Stage Mockup */}
            <div className="bg-white rounded-[18px] min-h-[240px] p-8 flex flex-col items-center justify-center text-center border border-[#E4E1D7] shadow-sm">
              <Image
                src="/assets/clients/the_bold_reviews/tbr_logo_official.jpg"
                alt="The Bold Reviews Official Logo"
                width={250}
                height={155}
                className="max-w-[250px] max-h-[155px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-14 sm:py-16 border-b border-[#E4E1D7]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-[#FAF9F5] border border-[#E4E1D7] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#B91C1C] mb-2.5">
                01 / About The Bold Reviews
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#0B1623]">
                The Client & Mission
              </h2>
              <p className="text-[15px] text-[#5C6A64] leading-relaxed">
                The Bold Reviews is an independent consumer-focused review publication covering practical product guides and honest analysis across Fashion, Health & Wellness, Home & Living, and Kitchen & Dining.
              </p>
            </div>
            <div className="bg-[#FAF9F5] border border-[#E4E1D7] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#B91C1C] mb-2.5">
                02 / Project Scope
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#0B1623]">
                What We Worked On
              </h2>
              <p className="text-[15px] text-[#5C6A64] leading-relaxed">
                Delivered a fast, readable WordPress publishing platform tailored for editorial clarity, combining curated plugins, clean category layouts, readable long-form formatting, and reliable site maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-14 sm:py-16">
          <div className="flex justify-between items-baseline flex-wrap gap-3 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1623]">
              What We Delivered
            </h2>
            <span className="text-xs text-[#5C6A64] uppercase tracking-[1.2px]">
              End-to-End Execution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF9F5] border border-[#E4E1D7] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#B91C1C]">01</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#0B1623]">
                  Editorial Publishing Setup
                </h4>
                <p className="text-[13.5px] text-[#5C6A64] leading-relaxed">
                  Structured CMS theme and curated plugin setup tuned for fast publishing and clarity.
                </p>
              </div>
            </div>
            <div className="bg-[#FAF9F5] border border-[#E4E1D7] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#B91C1C]">02</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#0B1623]">
                  Category & Content Layout
                </h4>
                <p className="text-[13.5px] text-[#5C6A64] leading-relaxed">
                  Clean section browsing across Fashion, Wellness, Home & Living, and Kitchen.
                </p>
              </div>
            </div>
            <div className="bg-[#FAF9F5] border border-[#E4E1D7] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#B91C1C]">03</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#0B1623]">
                  Ongoing Maintenance & Support
                </h4>
                <p className="text-[13.5px] text-[#5C6A64] leading-relaxed">
                  Readable typography hierarchy backed by dependable performance monitoring and care.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 flex-wrap mt-7">
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#FAF9F5] border border-[#E4E1D7] text-[#0B1623]">
              Web & Software
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#FAF9F5] border border-[#E4E1D7] text-[#0B1623]">
              WordPress Publishing
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#FAF9F5] border border-[#E4E1D7] text-[#0B1623]">
              Curated Plugins
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#FAF9F5] border border-[#E4E1D7] text-[#0B1623]">
              Ongoing Care
            </span>
          </div>
        </section>
      </div>

      {/* Case CTA Footer */}
      <footer className="bg-[#091A14] text-[#FAF9F5] py-14 sm:py-20 px-6 sm:px-10 text-center font-sans border-t border-[#E4E1D7]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl leading-[1.2] mb-3 text-[#FAF9F5]">
            Looking for a custom website or WordPress build?
          </h2>
          <p className="text-[#A7B7B0] text-[15px] mb-7 leading-relaxed">
            Tell us about your website, app, or platform goals and let&apos;s map out the build.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link
              href="/contact?topic=wordpress"
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

