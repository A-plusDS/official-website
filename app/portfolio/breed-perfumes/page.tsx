import React from "react";
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";

export const metadata = {
  title: "Breed Perfumes | Case Study | A+ Digital Solutions",
  description:
    "Online fragrance storefront built to showcase luxury-inspired scents, niche formulations, and signature collections.",
};

export default function BreedPerfumesCaseStudy() {
  return (
    <main className="min-h-screen bg-[#221B17] text-[#FAF9F5] font-sans">
      {/* Studio Topbar */}
      <div className="bg-[#091A14] text-[#FAF9F5] py-3.5 px-6 sm:px-12 flex justify-between items-center text-xs sm:text-[13px] border-b border-[rgba(250,249,245,0.12)]">
        <Link href="/#case-studies" className="inline-flex items-center gap-2.5 font-medium hover:text-[#F3F1EA]">
          <BrandLogo mode="light" variant="mark" className="h-4 w-auto" />
          <span>← Back to A+ Selected Work</span>
        </Link>
        <span className="text-[11px] tracking-[1.4px] uppercase text-[#9FB0A8]">
          Web & Software · E-Commerce
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-9">
        {/* Hero */}
        <section className="py-12 sm:py-16 border-b border-[#3D3028]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3.5 flex-wrap">
                <span className="text-[11px] font-bold tracking-[1.8px] uppercase text-[#D4B483]">
                  Web & Software · E-Commerce
                </span>
                <span className="text-[10px] font-bold tracking-[1px] uppercase py-1 px-2.5 rounded-full bg-[rgba(212,180,131,0.16)] text-[#D4B483]">
                  Live Website
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.12] mb-3.5 text-[#FAF9F5]">
                Breed Perfumes
              </h1>
              <p className="text-[15px] text-[#C7B7A9] max-w-[500px] mb-6 leading-relaxed">
                Online fragrance storefront built to showcase luxury-inspired scents, niche formulations, and signature Eau de Parfum collections.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://breedperfumes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4B483] text-[#120E0C] py-2.5 px-7 rounded-full text-[13px] font-bold transition-transform hover:-translate-y-0.5"
                >
                  Visit Live Website ↗
                </a>
                <Link
                  href="/contact?topic=web"
                  className="border border-[#3D3028] hover:border-[#D4B483] text-[#FAF9F5] py-2.5 px-5 rounded-full text-[13px] font-semibold transition-colors"
                >
                  Build Something Similar →
                </Link>
              </div>
            </div>

            {/* Stage Mockup */}
            <div className="bg-[radial-gradient(circle_at_center,#221B17_0%,#120E0C_100%)] rounded-[18px] min-h-[240px] p-8 flex flex-col items-center justify-center text-center border border-[#3D3028] shadow-sm">
              <Image
                src="/assets/clients/breed/breed_logo.png"
                alt="Breed Perfume Limited Official Logo"
                width={240}
                height={105}
                className="max-w-[240px] max-h-[105px] object-contain brightness-0 invert mb-3.5"
              />
              <div className="w-12 h-px bg-[#D4B483] mx-auto mb-2.5" />
              <div className="text-[10px] tracking-[2.6px] uppercase text-[#D4B483]">
                Signature Scents & Oud
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-14 sm:py-16 border-b border-[#3D3028]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-[#181310] border border-[#3D3028] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#D4B483] mb-2.5">
                01 / About Breed Perfumes
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#FAF9F5]">
                The Client & Mission
              </h2>
              <p className="text-[15px] text-[#C7B7A9] leading-relaxed">
                Breed Perfumes delivers accessible sophistication through long-lasting designer-inspired and niche perfumes, spanning collections across masculine, feminine, unisex blends, and signature series like Evoque and Deep Reflection.
              </p>
            </div>
            <div className="bg-[#181310] border border-[#3D3028] rounded-2xl p-7 sm:p-9">
              <small className="block text-[11px] font-bold tracking-[1.8px] uppercase text-[#D4B483] mb-2.5">
                02 / Project Scope
              </small>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3.5 text-[#FAF9F5]">
                What We Worked On
              </h2>
              <p className="text-[15px] text-[#C7B7A9] leading-relaxed">
                Built a modern e-commerce storefront structuring catalog collections, bestseller discovery, scent notes presentation, and streamlined mobile shopping.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-14 sm:py-16">
          <div className="flex justify-between items-baseline flex-wrap gap-3 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF9F5]">
              What We Delivered
            </h2>
            <span className="text-xs text-[#C7B7A9] uppercase tracking-[1.2px]">
              End-to-End Execution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181310] border border-[#3D3028] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#D4B483]">01</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#FAF9F5]">
                  Collection Merchandising
                </h4>
                <p className="text-[13.5px] text-[#C7B7A9] leading-relaxed">
                  Organized browsing across best-sellers, men&apos;s, women&apos;s, unisex, and niche scent collections.
                </p>
              </div>
            </div>
            <div className="bg-[#181310] border border-[#3D3028] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#D4B483]">02</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#FAF9F5]">
                  Storefront UX
                </h4>
                <p className="text-[13.5px] text-[#C7B7A9] leading-relaxed">
                  Clean product cards highlighting projection, scent profiles, and new arrivals.
                </p>
              </div>
            </div>
            <div className="bg-[#181310] border border-[#3D3028] rounded-xl p-7 flex flex-col gap-3">
              <strong className="font-display text-[13px] text-[#D4B483]">03</strong>
              <div>
                <h4 className="font-display text-lg font-bold mb-1.5 text-[#FAF9F5]">
                  Conversion Checkout Flow
                </h4>
                <p className="text-[13.5px] text-[#C7B7A9] leading-relaxed">
                  Responsive shopping flow built for direct mobile and desktop purchasing.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 flex-wrap mt-7">
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#181310] border border-[#3D3028] text-[#FAF9F5]">
              Web & Software
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#181310] border border-[#3D3028] text-[#FAF9F5]">
              E-Commerce Storefront
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#181310] border border-[#3D3028] text-[#FAF9F5]">
              Mobile Shopping UX
            </span>
            <span className="text-xs font-semibold py-1.5 px-3.5 rounded-full bg-[#181310] border border-[#3D3028] text-[#FAF9F5]">
              Live Store
            </span>
          </div>
        </section>
      </div>

      {/* Case CTA Footer */}
      <footer className="bg-[#091A14] text-[#FAF9F5] py-14 sm:py-20 px-6 sm:px-10 text-center font-sans border-t border-[#3D3028]">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl leading-[1.2] mb-3 text-[#FAF9F5]">
            Launching an e-commerce store or product brand?
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

