import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubpageReturn from "@/components/SubpageReturn";

export const metadata = {
  title: "Insights | A+ Digital Solutions",
  description:
    "Thinking on brand strategy, product craft, and digital builds from the A+ Digital Solutions studio desk.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#091A14]">
      <Header />

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container-wide">
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
            <span>Insights &amp; Perspectives</span>
          </div>
          <h1>Thinking on brand strategy, product craft, and digital builds.</h1>
          <p>
            Notes from our studio desk covering positioning, design systems, engineering decisions, and product announcements as A+ Digital Solutions grows.
          </p>
        </div>
      </section>

      {/* Upcoming Dispatches - Overlapping Sheet Alabaster */}
      <section className="sheet-alabaster">
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
            <span>Upcoming Dispatches</span>
          </div>
          <h2 className="section-heading">Featured topics in preparation.</h2>

          <div className="three-col-grid">
            <article className="soft-card">
              <div>
                <small>Brand &amp; Strategy · Upcoming</small>
                <h3 style={{ margin: "6px 0 8px" }}>Why Brand Clarity Matters Before Writing Line One of Code</h3>
                <p>How naming, positioning, and visual guidelines eliminate costly product redesigns later.</p>
              </div>
              <div className="badge-row">
                <span className="mini-tag">Brand Strategy</span>
                <span className="mini-tag">Identity Systems</span>
              </div>
            </article>

            <article className="soft-card">
              <div>
                <small>UI/UX &amp; Engineering · Upcoming</small>
                <h3 style={{ margin: "6px 0 8px" }}>Bridging Figma Component Systems to Production Software</h3>
                <p>Practical patterns our designers and engineers use so live interfaces preserve visual discipline.</p>
              </div>
              <div className="badge-row">
                <span className="mini-tag">Product Design</span>
                <span className="mini-tag">Web &amp; SaaS</span>
              </div>
            </article>

            <article className="soft-card">
              <div>
                <small>Studio Updates · Announcements</small>
                <h3 style={{ margin: "6px 0 8px" }}>Inside A+ Ventures &amp; Upcoming Studio Releases</h3>
                <p>Updates on the proprietary software products and partnerships taking shape inside our studio.</p>
              </div>
              <div className="badge-row">
                <span className="mini-tag">Company Updates</span>
                <span className="mini-tag">Ventures</span>
              </div>
            </article>
          </div>

          <div
            style={{
              marginTop: "28px",
              background: "var(--cream)",
              border: "1px solid var(--border-light)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "15px" }}>
                Want to collaborate on a topic or partner briefing?
              </strong>
              <span style={{ fontSize: "13px", color: "var(--slate-light)" }}>
                Our editorial pipeline opens alongside upcoming product launches and client stories.
              </span>
            </div>
            <Link href="/contact" className="btn-pill-dark">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
