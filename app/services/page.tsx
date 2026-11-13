import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubpageReturn from "@/components/SubpageReturn";

export const metadata = {
  title: "Services | A+ Digital Solutions",
  description:
    "From brand strategy and graphic craft to websites, apps, and QA. Organized cleanly across six specialized capabilities so ambitious businesses and organizations can partner with one coherent team from day one.",
};

export default function ServicesPage() {
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
            <span>Capabilities &amp; Services</span>
          </div>
          <h1>From brand strategy and graphic craft to websites, apps, and QA.</h1>
          <p>
            Organized cleanly across six specialized capabilities so ambitious businesses and organizations can partner with one coherent team from day one.
          </p>

          {/* Jump Links */}
          <div className="subpage-jump-row">
            <a href="#branding" className="jump-pill">01 Brand &amp; Graphic Design</a>
            <a href="#design" className="jump-pill">02 UI/UX Design</a>
            <a href="#web" className="jump-pill">03 Web Engineering</a>
            <a href="#wordpress" className="jump-pill">04 WordPress Studio</a>
            <a href="#software" className="jump-pill">05 Apps &amp; SaaS</a>
            <a href="#qa" className="jump-pill">06 Consulting &amp; QA</a>
          </div>
        </div>
      </section>

      {/* Services List Sheet - Overlapping Sheet Alabaster */}
      <section className="sheet-alabaster">
        <div className="container-wide">
          <div className="service-detail-list">
            {/* 01 Branding */}
            <article id="branding" className="service-detail-card">
              <div>
                <small>01 · Strategy, Brand Identity &amp; Graphic Design</small>
                <h2>Brand Identity, Strategy &amp; Graphic Design</h2>
                <p>
                  We structure graphic design right alongside brand strategy so your visual voice stays consistent everywhere. From positioning and naming to guidelines books, campaign artwork, and social kits.
                </p>
                <Link href="/contact?topic=branding" className="btn-pill-dark">
                  Bring Your Vision to Life →
                </Link>
              </div>
              <div className="deliverable-grid">
                <div className="deliverable-box">Brand Positioning &amp; Naming</div>
                <div className="deliverable-box">Logo &amp; Identity Systems</div>
                <div className="deliverable-box">Graphic Design &amp; Collateral</div>
                <div className="deliverable-box">Social Templates &amp; Decks</div>
              </div>
            </article>

            {/* 02 UI/UX Design (card-pine) */}
            <article id="design" className="service-detail-card card-pine">
              <div>
                <small>02 · UI/UX &amp; Digital Product Design</small>
                <h2>UI/UX &amp; Product Design</h2>
                <p>
                  Responsive Figma component libraries and interactive prototypes built for clarity, usability, and smooth developer handoff across desktop and mobile products.
                </p>
                <Link href="/contact?topic=design" className="btn-pill-light">
                  Bring Your Vision to Life →
                </Link>
              </div>
              <div className="deliverable-grid">
                <div className="deliverable-box">UX Research &amp; User Flows</div>
                <div className="deliverable-box">Figma Component Libraries</div>
                <div className="deliverable-box">Interactive Prototypes</div>
                <div className="deliverable-box">Interface Design Audits</div>
              </div>
            </article>

            {/* 03 Web Engineering */}
            <article id="web" className="service-detail-card">
              <div>
                <small>03 · Web Engineering</small>
                <h2>Custom Websites Across Every Format</h2>
                <p>
                  We engineer tailored websites beyond corporate pages: personal sites, founder portfolios, editorial hubs, landing pages, and custom e-commerce storefronts shaped cleanly around your brief.
                </p>
                <Link href="/contact?topic=web" className="btn-pill-dark">
                  Bring Your Vision to Life →
                </Link>
              </div>
              <div className="deliverable-grid">
                <div className="deliverable-box">Business &amp; Brand Websites</div>
                <div className="deliverable-box">Personal &amp; Portfolio Sites</div>
                <div className="deliverable-box">Online Storefronts</div>
                <div className="deliverable-box">Speed &amp; SEO Foundations</div>
              </div>
            </article>

            {/* 04 WordPress Studio (card-pine) */}
            <article id="wordpress" className="service-detail-card card-pine">
              <div>
                <small>04 · Dedicated WordPress Department</small>
                <h2>WordPress Studio</h2>
                <p>
                  Bespoke WordPress themes, curated plugin builds, structured editorial publishing workflows, content setup, and dependable ongoing maintenance.
                </p>
                <Link href="/contact?topic=wordpress" className="btn-pill-light">
                  Bring Your Vision to Life →
                </Link>
              </div>
              <div className="deliverable-grid">
                <div className="deliverable-box">Custom WordPress Themes</div>
                <div className="deliverable-box">Plugin Configuration</div>
                <div className="deliverable-box">Content &amp; Publishing Setup</div>
                <div className="deliverable-box">Updates &amp; Ongoing Care</div>
              </div>
            </article>

            {/* 05 Apps & SaaS */}
            <article id="software" className="service-detail-card">
              <div>
                <small>05 · Custom Software &amp; Product Engineering</small>
                <h2>Web Applications, Mobile &amp; SaaS</h2>
                <p>
                  Tailored web applications, cross-platform mobile apps, multi-user SaaS platforms, dashboards, and API integrations built cleanly for real-world scale.
                </p>
                <Link href="/contact?topic=software" className="btn-pill-dark">
                  Bring Your Vision to Life →
                </Link>
              </div>
              <div className="deliverable-grid">
                <div className="deliverable-box">Custom Web Applications</div>
                <div className="deliverable-box">Mobile Apps (iOS / Android)</div>
                <div className="deliverable-box">SaaS Products &amp; Portals</div>
                <div className="deliverable-box">Backend &amp; API Engineering</div>
              </div>
            </article>

            {/* 06 Consulting & QA (card-pine) */}
            <article id="qa" className="service-detail-card card-pine">
              <div>
                <small>06 · Digital Consulting, Ventures &amp; QA</small>
                <h2>Digital Consulting &amp; QA Support</h2>
                <p>
                  Idea validation, product roadmaps, technical scoping for co-built ventures, cross-device QA testing, bug remediation, and dedicated post-launch support.
                </p>
                <Link href="/contact?topic=partnership" className="btn-pill-light">
                  Bring Your Vision to Life →
                </Link>
              </div>
              <div className="deliverable-grid">
                <div className="deliverable-box">Product &amp; Digital Strategy</div>
                <div className="deliverable-box">Co-Build &amp; Venture Advisory</div>
                <div className="deliverable-box">Cross-Device QA Testing</div>
                <div className="deliverable-box">Long-Term Support</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How We Partner Process Sheet - Sheet Cream */}
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
            <span>How We Partner</span>
          </div>
          <h2 className="section-heading">Clarity first. Disciplined execution next.</h2>
          <div className="process-grid">
            <div className="process-step">
              <span>01 · Align</span>
              <h3>Discovery &amp; Strategy</h3>
              <p>Clarify positioning, visual direction, and technical scope before writing code.</p>
            </div>
            <div className="process-step">
              <span>02 · Craft</span>
              <h3>Brand, Graphic &amp; UI/UX</h3>
              <p>Shape visual identities, graphic assets, responsive flows, and Figma systems.</p>
            </div>
            <div className="process-step">
              <span>03 · Build</span>
              <h3>Web, WordPress &amp; Apps</h3>
              <p>Develop sites across every format, WordPress builds, and scalable custom software.</p>
            </div>
            <div className="process-step">
              <span>04 · Assure</span>
              <h3>QA &amp; Partnership</h3>
              <p>Verify across devices, refine interaction polish, and support long-term product growth.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
