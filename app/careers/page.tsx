import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubpageReturn from "@/components/SubpageReturn";

export const metadata: Metadata = {
  title: "Careers & Open Talent Roster",
  description:
    "Collaborate with A+ Digital Solutions: Core studio full-time roles, fixed-term contract specialists, and freelance creative/engineering roster.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Open Talent Roster | A+ Digital Solutions",
    description:
      "We work with designers, strategists, creatives, and engineers across flexible engagement models.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#091A14]">
      <Header />

      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container-wide">
          <SubpageReturn theme="dark" />

          <div className="eyebrow-dark " style={{ color: "#9BB0A8" }}>
            <span>Careers at A+</span>
          </div>
          <h1>Build with a studio that takes craft seriously.</h1>
          <p>
            We work with designers, strategists, creatives, and engineers across flexible engagement models.
          </p>
        </div>
      </section>

      {/* Engagement Models - Overlapping Sheet Alabaster */}
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
            <span>Engagement Models</span>
          </div>
          <h2 className="section-heading">Ways to collaborate with our team.</h2>

          <div className="three-col-grid">
            {/* Pathway 1 */}
            <div className="soft-card">
              <div>
                <small>Pathway 01 · Core Studio</small>
                <h3 style={{ margin: "6px 0 8px" }}>Full-Time Roles</h3>
                <p>Dedicated collaborators shaping client engagements and in-house digital products.</p>
                <ul className="role-list">
                  <li>Brand Strategist</li>
                  <li>Front-end Engineer</li>
                  <li>Back-end Engineer</li>
                  <li>Software Engineer &amp; Technical Lead</li>
                  <li>Graphic Designer</li>
                  <li>Social Media Specialist &amp; Other Roles</li>
                </ul>
              </div>
              <div className="badge-row" style={{ marginTop: "14px" }}>
                <span className="mini-tag">Core Studio</span>
                <span className="mini-tag">Long-Term</span>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="soft-card">
              <div>
                <small>Pathway 02 · Fixed-Term (4 to 6 Months)</small>
                <h3 style={{ margin: "6px 0 8px" }}>Contract Specialists</h3>
                <p>Focused specialists embedded for 4 to 6 month product launches, brand systems, and structured sprint cycles.</p>
                <ul className="role-list">
                  <li>Brand Strategist (4 to 6 Months)</li>
                  <li>UI/UX &amp; Design System Leads</li>
                  <li>Custom WordPress &amp; Web Developers</li>
                  <li>QA &amp; Release Specialists</li>
                </ul>
              </div>
              <div className="badge-row" style={{ marginTop: "14px" }}>
                <span className="mini-tag">4 to 6 Months</span>
                <span className="mini-tag">Remote</span>
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="soft-card">
              <div>
                <small>Pathway 03 · Roster</small>
                <h3 style={{ margin: "6px 0 8px" }}>Freelance &amp; Project-Based</h3>
                <p>Independent specialists collaborating with our studio leads on clearly scoped creative and technical deliverables.</p>
                <ul className="role-list">
                  <li>Graphic Designers</li>
                  <li>Copywriters</li>
                  <li>Mobile Engineers</li>
                  <li>Creative Directors</li>
                </ul>
              </div>
              <div className="badge-row" style={{ marginTop: "14px" }}>
                <span className="mini-tag">Scoped Deliverables</span>
                <span className="mini-tag">Flexible</span>
              </div>
            </div>
          </div>

          {/* Open Talent Roster CTA - conversation-card */}
          <div className="conversation-card" style={{ marginTop: "30px", padding: "clamp(22px, 3vw, 32px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "580px" }}>
                <small style={{ display: "block", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#9BB0A8", marginBottom: "6px" }}>
                  Open Talent Roster
                </small>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(19px, 2vw, 24px)", marginBottom: "8px", color: "var(--alabaster)" }}>
                  Show your portfolio / CV or GitHub to our team.
                </h3>
                <p style={{ fontSize: "13.5px", color: "#B7C5BF", lineHeight: "1.55" }}>
                  Tell us your discipline and preferred engagement.
                </p>
              </div>
              <a
                href="mailto:Aplusdigitalsolutions.tech@gmail.com?subject=Portfolio%20/%20CV%20Submission%20-%20A%2B%20Digital%20Solutions"
                className="btn-pill-light"
              >
                Submit Portfolio / CV →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
