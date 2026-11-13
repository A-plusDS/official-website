import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";

export const metadata = {
  title: "Griggs Specialist Hospital | Case Study | A+ Digital Solutions",
  description:
    "Digital web platform for a multi-specialty medical and fertility hospital serving patients in Lagos, Nigeria.",
};

export default function GriggsHospitalCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0D1A28] font-sans">
      {/* Studio Topbar */}
      <div className="bg-[#091A14] text-[#FAF9F5] py-3.5 px-6 sm:px-12 flex justify-between items-center text-xs sm:text-[13px] border-b border-[rgba(250,249,245,0.12)]">
        <Link href="/#case-studies" className="inline-flex items-center gap-2.5 font-medium hover:text-[#F3F1EA]">
          <BrandLogo mode="light" variant="mark" className="h-4 w-auto" />
          <span>← Back to A+ Selected Work</span>
        </Link>
        <span className="text-[11px] tracking-[1.4px] uppercase text-[#9FB0A8]">
          Web & Software · Healthcare
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-9">
        {/* Hero */}
        <section className="py-12 sm:py-16 border-b border-[#E4E1D7]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3.5 flex-wrap">
                <span className="text-[11px] font-bold tracking-[1.8px] uppercase text-[#007A78]">
                  Web & Software · Healthcare
                </span>
                <span className="text-[10px] font-bold tracking-[1px] uppercase py-1 px-2.5 rounded-full bg-[#DBEFF0] text-[#006A69]">
                  Live Website
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.12] mb-3.5 text-[#0D1A28]">
                Griggs Specialist Hospital
              </h1>
              <p className="text-[15px] text-[#5C6A64] max-w-[500px] mb-6 leading-relaxed">
                Digital web platform for a multi-specialty medical and fertility hospital serving patients along the Lekki-Epe corridor in Lagos, Nigeria.
              </p>
              <div className="flex gap-3 flex-wrap ">
                <a
                  href="https://griggsspecialisthospital.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#007A78] text-white py-2.5 px-7 rounded-full text-[13px] font-bold transition-transform hover:-translate-y-0.5"
                >
                  Visit Live Website ↗
                </a>
                <Link
                  href="/contact?topic=web"
                  className="border border-[#E4E1D7] hover:border-[#007A78] text-[#0D1A28] py-2.5 px-5 rounded-full text-[13px] font-semibold transition-colors"
                >
                  Build Something Similar →
                </Link>
              </div>
            </div>

            {/* Stage Mockup */}
            <div className="bg-gradient-to-br from-white to-[#DBEFF0] rounded-[18px] min-h-[240px] p-8 flex flex-col items-center justify-center text-center border border-[#E4E1D7] shadow-sm">
              <Image
                src="/assets/clients/griggs/griggs_logo_dark.png"
                alt="Griggs Specialist Hospital Official Logo"
                width={240}
                height={110}
                className="max-w-[240px] max-h-[110px] object-contain mb-3"
              />
              <div className="w-12 h-0.5 bg-[#F59D2B] rounded-sm mx-auto mb-2.5" />
              <div className="text-[10.5px] font-bold tracking-[2px] uppercase text-[#007A78]">
                Healthcare · Fertility · Specialist Care
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-14 sm:py-16 border-b border-[#E4E1D7]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-white border border-[#E4E1D7] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#007A78] mb-2.5">
                01 / About Griggs Specialist Hospital
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#0D1A28]">
                The Client & Mission
              </h2>
              <p className="text-[15px] text-[#5C6A64] leading-relaxed">
                Griggs Specialist Hospital provides specialized healthcare in Abijo, Lagos, featuring a dedicated fertility and IVF center in collaboration with the Houston Fertility Institute alongside nephrology, dialysis, obstetrics, and surgical care.
              </p>
            </div>
            <div className="bg-white border border-[#E4E1D7] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#007A78] mb-2.5">
                02 / Project Scope
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#0D1A28]">
                What We Worked On
              </h2>
              <p className="text-[15px] text-[#5C6A64] leading-relaxed">
                Created a clear, reassuring healthcare web platform aligned with the hospital&apos;s signature teal and warm amber identity, making IVF/ICSI fertility programs, Foreign Transfer Patient pathways, and dialysis services easy to navigate.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-14 sm:py-16">
          <div className="flex justify-between items-baseline flex-wrap gap-3 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0D1A28]">
              What We Delivered
            </h2>
            <span className="text-xs text-[#5C6A64] uppercase tracking-[1.2px]">
              End-to-End Execution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E4E1D7] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#007A78]">01</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#0D1A28]">
                  Patient-First Structure
                </h4>
                <p className="text-[13.5px] text-[#5C6A64] leading-relaxed">
                  Clear navigation separating Fertility & IVF, Dialysis & Nephrology, Surgery, and Diagnostics.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E4E1D7] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#007A78]">02</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#0D1A28]">
                  Specialist Service Pages
                </h4>
                <p className="text-[13.5px] text-[#5C6A64] leading-relaxed">
                  Informative clinical overviews explaining procedures, partnerships, and care pathways.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E4E1D7] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#007A78]">03</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#0D1A28]">
                  Accessible Contact Pathways
                </h4>
                <p className="text-[13.5px] text-[#5C6A64] leading-relaxed">
                  Direct Lagos hospital address, phone routing, and consultation inquiry access.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 flex-wrap mt-7">
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-white border border-[#E4E1D7] text-[#0D1A28]">
              Web & Software
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-white border border-[#E4E1D7] text-[#0D1A28]">
              Healthcare Digital Experience
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-white border border-[#E4E1D7] text-[#0D1A28]">
              Responsive Design
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-white border border-[#E4E1D7] text-[#0D1A28]">
              Live Website
            </span>
          </div>
        </section>
      </div>

      {/* Case CTA Footer */}
      <footer className="bg-[#091A14] text-[#FAF9F5] py-14 sm:py-20 px-6 sm:px-10 text-center font-sans border-t border-[#1A3328]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl leading-[1.2] mb-3 text-[#FAF9F5]">
            Need a credible digital presence for your organization?
          </h2>
          <p className="text-[#A7B7B0] text-[15px] mb-7 leading-relaxed">
            Tell us about your website, app, or platform goals and let&apos;s map out the build.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link
              href="/contact?topic=web"
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

