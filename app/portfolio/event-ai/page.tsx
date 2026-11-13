import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata = {
  title: "Evently AI | Case Study | A+ Digital Solutions",
  description:
    "An ongoing luxury AI-powered event microsite and digital invitation platform enabling hosts to craft animated event experiences.",
};

export default function EventlyAiCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F0E6] font-sans">
      {/* Studio Topbar */}
      <div className="bg-[#091A14] text-[#FAF9F5] py-3.5 px-6 sm:px-12 flex justify-between items-center text-xs sm:text-[13px] border-b border-[rgba(250,249,245,0.12)]">
        <Link href="/#case-studies" className="inline-flex items-center gap-2.5 font-medium hover:text-[#F3F1EA]">
          <BrandLogo mode="light" variant="mark" className="h-4 w-auto" />
          <span>← Back to A+ Selected Work</span>
        </Link>
        <span className="text-[11px] tracking-[1.4px] uppercase text-[#9FB0A8]">
          Web Applications · Web & Software
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-9">
        {/* Hero */}
        <section className="py-12 sm:py-16 border-b border-[#2A261E]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3.5 flex-wrap">
                <span className="text-[11px] font-bold tracking-[1.8px] uppercase text-[#C5A26F]">
                  Web Applications · Web & Software
                </span>
                <span className="text-[10px] font-bold tracking-[1px] uppercase py-1 px-2.5 rounded-full bg-[rgba(197,162,111,0.14)] text-[#C5A26F]">
                  ● Ongoing
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.12] mb-3.5 text-[#F5F0E6]">
                Evently AI
              </h1>
              <p className="text-[15px] text-[#BFB6A4] max-w-[500px] mb-6 leading-relaxed">
                An ongoing luxury AI-powered event microsite and digital invitation platform enabling hosts to craft animated event experiences in minutes.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://event-ai-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C5A26F] text-[#0A0A0A] py-2.5 px-7 rounded-full text-[13px] font-bold transition-transform hover:-translate-y-0.5"
                >
                  Visit Live Website ↗
                </a>
                <Link
                  href="/contact?topic=software"
                  className="border border-[#2A261E] hover:border-[#C5A26F] text-[#F5F0E6] py-2.5 px-5 rounded-full text-[13px] font-semibold transition-colors"
                >
                  Build Something Similar →
                </Link>
              </div>
            </div>

            {/* Stage Mockup */}
            <div className="bg-[radial-gradient(circle_at_top_right,rgba(197,162,111,0.16),transparent_60%),#111111] rounded-[18px] min-h-[240px] p-8 flex flex-col items-center justify-center text-center border border-[#2A261E] shadow-sm">
              <div className="inline-flex items-baseline gap-2 mb-2.5">
                <span className="font-editorial text-4xl sm:text-5xl font-semibold text-[#C5A26F] tracking-[-0.5px]">
                  Evently
                </span>
                <span className="font-sans text-sm sm:text-[15px] font-medium tracking-[3px] text-[rgba(197,162,111,0.78)]">
                  AI
                </span>
              </div>
              <div className="w-11 h-px bg-[rgba(197,162,111,0.45)] mx-auto mb-3" />
              <div className="text-[11px] tracking-[2px] uppercase text-[#BFB6A4]">
                Your Story, Beautifully Told
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-14 sm:py-16 border-b border-[#2A261E]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-[#141414] border border-[#2A261E] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#C5A26F] mb-2.5">
                01 / About Evently AI
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#F5F0E6]">
                The Client & Mission
              </h2>
              <p className="text-[15px] text-[#BFB6A4] leading-relaxed">
                Evently AI transforms how event hosts, planners, and celebrations share their story, generating refined, animated event microsites and digital invitations in minutes with zero code required.
              </p>
            </div>
            <div className="bg-[#141414] border border-[#2A261E] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#C5A26F] mb-2.5">
                02 / Project Scope
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#F5F0E6]">
                What We Worked On
              </h2>
              <p className="text-[15px] text-[#BFB6A4] leading-relaxed">
                Currently in active ongoing development, designing and engineering the luxury dark-mode web application combining Cormorant Garamond editorial typography, AI-assisted microsite generation, templates, and streamlined pricing flows.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-14 sm:py-16">
          <div className="flex justify-between items-baseline flex-wrap gap-3 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F0E6]">
              What We Delivered
            </h2>
            <span className="text-xs text-[#BFB6A4] uppercase tracking-[1.2px]">
              End-to-End Execution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-[#2A261E] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#C5A26F]">01</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#F5F0E6]">
                  AI Microsite Generator
                </h4>
                <p className="text-[13.5px] text-[#BFB6A4] leading-relaxed">
                  Guided event story creation and customizable luxury digital invitation layouts.
                </p>
              </div>
            </div>
            <div className="bg-[#141414] border border-[#2A261E] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#C5A26F]">02</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#F5F0E6]">
                  Editorial Design System
                </h4>
                <p className="text-[13.5px] text-[#BFB6A4] leading-relaxed">
                  Cohesive Obsidian (#0A0A0A), Warm Ivory (#F5F0E6), and Muted Custard Gold (#C5A26F) visual language.
                </p>
              </div>
            </div>
            <div className="bg-[#141414] border border-[#2A261E] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#C5A26F]">03</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#F5F0E6]">
                  Interactive Web Application
                </h4>
                <p className="text-[13.5px] text-[#BFB6A4] leading-relaxed">
                  Responsive Next.js frontend and Vercel deployment engineered for smooth animations.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 flex-wrap mt-7">
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#141414] border border-[#2A261E] text-[#F5F0E6]">
              Web Application
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#141414] border border-[#2A261E] text-[#F5F0E6]">
              Product Design
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#141414] border border-[#2A261E] text-[#F5F0E6]">
              Next.js Engineering
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#141414] border border-[#2A261E] text-[#F5F0E6]">
              Ongoing Build
            </span>
          </div>
        </section>
      </div>

      {/* Case CTA Footer */}
      <footer className="bg-[#091A14] text-[#FAF9F5] py-14 sm:py-20 px-6 sm:px-10 text-center font-sans border-t border-[#2A261E]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl leading-[1.2] mb-3 text-[#FAF9F5]">
            Building a custom web app or AI product?
          </h2>
          <p className="text-[#A7B7B0] text-[15px] mb-7 leading-relaxed">
            Tell us about your website, app, or platform goals and let&apos;s map out the build.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link
              href="/contact?topic=software"
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

