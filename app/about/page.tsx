import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubpageReturn from "@/components/SubpageReturn";

export const metadata: Metadata = {
  title: "About & Standards",
  description:
    "Learn about A+ Digital Solutions: our studio philosophy, standards of craft, integrated team structure, and commitment to bridging brand strategy with software engineering.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About & Standards | A+ Digital Solutions",
    description:
      "A creative digital partner shaping strategy, brand identity, product design, and custom software for ambitious teams.",
    url: "/about",
    images: ["/assets/about_studio_identity.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#091A14]">
      <Header />

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container-wide ">
          <SubpageReturn theme="dark" />

          <div className="eyebrow-dark" style={{ color: "#9BB0A8" }}>
            <svg
              viewBox="0 0 100 84"
              style={{ height: "12px", width: "auto", display: "block", flexShrink: 0 }}
            >
              <path
                d="M 10 76 L 42 8 L 74 76"
                fill="none"
                stroke="#FAF9F5"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="24" y1="48" x2="92" y2="48" stroke="#FAF9F5" strokeWidth="3.8" strokeLinecap="round" />
              <line x1="78" y1="34" x2="78" y2="62" stroke="#FAF9F5" strokeWidth="3.8" strokeLinecap="round" />
            </svg>
            <span>About A+ Digital Solutions</span>
          </div>
          <h1>Strategy before design. Craft before code.</h1>
          <p>
            We are a multidisciplinary brand, UI/UX, and software studio helping ambitious organizations bridge clear brand storytelling with dependable digital engineering.
          </p>
        </div>
      </section>

      {/* Split Visual Section (Who We Are) - Overlapping Sheet Alabaster */}
      <section className="sheet-alabaster">
        <div className="container-wide">
          <div className="split-visual-grid">
            {/* Image Frame */}
            <div className="visual-showcase-card">
              <Image
                src="/assets/about_studio_identity.jpg"
                alt="A+ Digital Solutions studio philosophy uniting brand craft, UI/UX systems, and technology"
                width={600}
                height={450}
                className="w-full h-full object-cover block"
                priority
              />
            </div>

            {/* Who We Are Text */}
            <div>
              <div className="eyebrow-dark">
                <svg
                  viewBox="0 0 100 84"
                  style={{ height: "12px", width: "auto", display: "block", flexShrink: 0 }}
                >
                  <path
                    d="M 10 76 L 42 8 L 74 76"
                    fill="none"
                    stroke="#091A14"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="24" y1="48" x2="92" y2="48" stroke="#091A14" strokeWidth="3.8" strokeLinecap="round" />
                  <line x1="78" y1="34" x2="78" y2="62" stroke="#091A14" strokeWidth="3.8" strokeLinecap="round" />
                </svg>
                <span>Who We Are</span>
              </div>
              <h2 className="section-heading">
                One cohesive studio uniting strategy, brand design, and software execution.
              </h2>
              <p style={{ fontSize: "13.5px", color: "var(--slate-light)", lineHeight: "1.65", marginBottom: "14px" }}>
                A+ Digital Solutions was built to eliminate the common divide between creative branding teams and technical software builders. When brand identity, user experience, and engineering happen in disconnected silos, products lose coherence before they ever launch.
              </p>
              <p style={{ fontSize: "13.5px", color: "var(--slate-light)", lineHeight: "1.65", marginBottom: "20px" }}>
                We keep positioning, visual craft, and software development inside one integrated team. Alongside bespoke client engagements, we also design and develop our own in-house digital products with the exact same care.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link href="/contact?topic=partnership" className="btn-pill-dark">
                  Partner With Us →
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-pill-cream"
                  style={{ background: "var(--cream)", color: "var(--pine)", border: "1px solid var(--border-light)" }}
                >
                  Explore Case Studies ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Sheet Cream */}
      <section className="sheet-cream">
        <div className="container-wide">
          <div className="eyebrow-dark">
            <svg
              viewBox="0 0 100 84"
              style={{ height: "12px", width: "auto", display: "block", flexShrink: 0 }}
            >
              <path
                d="M 10 76 L 42 8 L 74 76"
                fill="none"
                stroke="#091A14"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="24" y1="48" x2="92" y2="48" stroke="#091A14" strokeWidth="3.8" strokeLinecap="round" />
              <line x1="78" y1="34" x2="78" y2="62" stroke="#091A14" strokeWidth="3.8" strokeLinecap="round" />
            </svg>
            <span>What We Do &amp; Our Philosophy</span>
          </div>
          <h2 className="section-heading">
            Thoughtful thinking behind every mark, screen, and system.
          </h2>

          <div className="three-col-grid">
            <div className="soft-card">
              <small>01 · Identity &amp; Voice</small>
              <h3 style={{ margin: "6px 0 8px" }}>Brand Strategy &amp; Graphic Craft</h3>
              <p>
                Positioning, naming, logo systems, guidelines books, and graphic design collateral structured so your business speaks with clarity everywhere.
              </p>
            </div>
            <div className="soft-card">
              <small>02 · Experience &amp; Flow</small>
              <h3 style={{ margin: "6px 0 8px" }}>UI/UX &amp; Design Systems</h3>
              <p>
                User research, intuitive user flows, modular Figma component libraries, and refined interfaces built for readability across desktop and mobile.
              </p>
            </div>
            <div className="soft-card">
              <small>03 · Engineering &amp; Care</small>
              <h3 style={{ margin: "6px 0 8px" }}>Web, WordPress &amp; Software</h3>
              <p>
                Custom company sites, e-commerce stores, tailored WordPress platforms, full-stack web apps, mobile apps, and structured QA testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Sheet Alabaster flat */}
      <section className="sheet-alabaster" style={{ marginTop: 0, borderRadius: 0 }}>
        <div className="container-wide">
          <div className="eyebrow-dark">
            <svg
              viewBox="0 0 100 84"
              style={{ height: "12px", width: "auto", display: "block", flexShrink: 0 }}
            >
              <path
                d="M 10 76 L 42 8 L 74 76"
                fill="none"
                stroke="#091A14"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="24" y1="48" x2="92" y2="48" stroke="#091A14" strokeWidth="3.8" strokeLinecap="round" />
              <line x1="78" y1="34" x2="78" y2="62" stroke="#091A14" strokeWidth="3.8" strokeLinecap="round" />
            </svg>
            <span>What Sets Us Apart</span>
          </div>
          <h2 className="section-heading">
            What we stand for on every build.
          </h2>

          <div className="process-grid">
            <div className="process-step">
              <span>01 · Clarity First</span>
              <h3>Aligned Before Building</h3>
              <p>
                Every engagement starts with clear strategy and visual direction before production begins.
              </p>
            </div>
            <div className="process-step">
              <span>02 · Integrated</span>
              <h3>Zero Handoff Friction</h3>
              <p>
                Brand designers and software engineers work side by side from concept to launch.
              </p>
            </div>
            <div className="process-step">
              <span>03 · Makers</span>
              <h3>In-House Product Mindset</h3>
              <p>
                Building our own studio software sharpens how we think about usability and durability.
              </p>
            </div>
            <div className="process-step">
              <span>04 · Craft</span>
              <h3>Built for Lasting Value</h3>
              <p>
                Attention to typography, responsive polish, and clean code ensures work holds up over time.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/services" className="btn-pill-dark">
              Explore All Services →
            </Link>
            <Link
              href="/contact?topic=partnership"
              className="btn-pill-cream"
              style={{ background: "var(--cream)", color: "var(--pine)", border: "1px solid var(--border-light)" }}
            >
              Start a Conversation ↗
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
