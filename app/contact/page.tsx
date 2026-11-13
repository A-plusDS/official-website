"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandLogo from "@/components/BrandLogo";
import SubpageReturn from "@/components/SubpageReturn";

function ContactContent() {
  const searchParams = useSearchParams();
  const [activePathway, setActivePathway] = useState<string>("branding");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "branding",
    timeline: "Exploring / Flexible",
    message: "",
  });

  useEffect(() => {
    const topic = searchParams.get("topic");
    if (topic) {
      setFormData((prev) => ({ ...prev, topic }));
      if (topic === "partnership" || topic === "discovery" || topic === "branding") {
        setActivePathway(topic);
      } else {
        setActivePathway("");
      }
    }
  }, [searchParams]);

  const selectPathway = (topic: string) => {
    setActivePathway(topic);
    setFormData((prev) => ({ ...prev, topic }));
    const formEl = document.getElementById("contact-form");
    if (formEl && window.innerWidth <= 900) {
      formEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const copyEmail = () => {
    const email = "Aplusdigitalsolutions.tech@gmail.com";
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const topicLabels: Record<string, string> = {
      branding: "Brand Strategy & Graphic Design",
      partnership: "Partner With Us / Co-Build Product",
      discovery: "Discovery Call / Consulting",
      design: "UI/UX & Product Design",
      web: "Web Engineering (Company, Portfolio, Shop)",
      wordpress: "WordPress Studio",
      software: "Web App, Mobile App or SaaS",
      private: "Request Access to Private Projects",
      general: "General Inquiry",
    };
    const topicText = topicLabels[formData.topic] || formData.topic;
    const subject = encodeURIComponent(`A+ Partnership / Inquiry (${topicText}) | ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nReply Email: ${formData.email}\nFocus: ${topicText}\nTimeline: ${formData.timeline}\n\n${formData.message}`
    );
    const link = `mailto:Aplusdigitalsolutions.tech@gmail.com?subject=${subject}&body=${body}`;
    setMailtoLink(link);
    setSubmitted(true);
  };

  return (
    <section className="contact-alabaster-hero">
      <div className="container-wide">
        <SubpageReturn theme="light" />

        <div className="contact-hero-head">
          <div className="eyebrow-dark">
            <BrandLogo mode="dark" variant="mark" className="h-3 w-auto flex-shrink-0" />
            <span>Partner With Us</span>
          </div>
          <h1>Bring the vision. We shape the brand and build.</h1>
          <p>
            Choose a pathway below, reach us by email, or share your project brief.
          </p>
        </div>

        <div className="contact-pathways-grid" role="tablist" aria-label="Choose how to engage A+ Digital Solutions">
          <button
            type="button"
            onClick={() => selectPathway("branding")}
            className={`pathway-card ${activePathway === "branding" ? "active" : ""}`}
          >
            <small>01 · Brand &amp; Web</small>
            <h3>Start a Project</h3>
            <p>Brand identity, UI/UX, custom websites, or WordPress.</p>
          </button>

          <button
            type="button"
            onClick={() => selectPathway("partnership")}
            className={`pathway-card ${activePathway === "partnership" ? "active" : ""}`}
          >
            <small>02 · Co-Creation</small>
            <h3>Partner / Co-Build</h3>
            <p>Long-term brand and custom software collaboration.</p>
          </button>

          <button
            type="button"
            onClick={() => selectPathway("discovery")}
            className={`pathway-card ${activePathway === "discovery" ? "active" : ""}`}
          >
            <small>03 · Advisory</small>
            <h3>Discovery &amp; Consulting</h3>
            <p>Focused scoping session, product review, or QA audit.</p>
          </button>
        </div>

        <div className="contact-bento-grid">
          <div className="bento-left-stack">
            <div className="bento-desk-card">
              <div className="eyebrow-dark" style={{ color: "#9BB0A8" }}>
                <span>Direct Studio Desk</span>
              </div>
              <h2>Prefer to write directly?</h2>
              <p>
                Reach our strategy, design, and engineering desk by email anytime.
              </p>
              <div className="copy-email-box">
                <strong>Aplusdigitalsolutions.tech@gmail.com</strong>
                <button
                  type="button"
                  className="copy-btn"
                  id="copy-email-btn"
                  onClick={copyEmail}
                >
                  {copied ? "✓ Copied" : "Copy Email"}
                </button>
              </div>
              <div className="direct-channels" style={{ marginTop: "12px" }}>
                <a href="mailto:Aplusdigitalsolutions.tech@gmail.com" className="channel-row-dark">
                  <strong>Open in Mail App</strong>
                  <span>Send Email →</span>
                </a>
              </div>
            </div>

            <div className="bento-steps-card">
              <h3>What Happens Next</h3>
              <div className="next-step-item">
                <b>01</b>
                <div>
                  <strong>Brief Review</strong>
                  <span>We review your goals, scope, and timeline.</span>
                </div>
              </div>
              <div className="next-step-item">
                <b>02</b>
                <div>
                  <strong>Discovery Call</strong>
                  <span>Short alignment session on direction and fit.</span>
                </div>
              </div>
              <div className="next-step-item">
                <b>03</b>
                <div>
                  <strong>Scope &amp; Kickoff</strong>
                  <span>Clear deliverables and roadmap before build begins.</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="contact-form-card"
            id="contact-form"
            style={{
              padding: "clamp(24px, 3vw, 34px)",
              border: "1px solid var(--border-light)",
              boxShadow: "0 14px 36px rgba(9, 26, 20, 0.06)",
            }}
          >
            <div style={{ marginBottom: "18px" }}>
              <small
                style={{
                  display: "block",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  color: "var(--slate-light)",
                  marginBottom: "4px",
                }}
              >
                Project Brief
              </small>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--pine)",
                }}
              >
                Tell us what you are building next.
              </h3>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="c-name">Your Name</label>
                  <input
                    id="c-name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="c-email">Email Address</label>
                  <input
                    id="c-email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="c-topic">How Can We Partner?</label>
                  <select
                    id="c-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  >
                    <option value="branding">Brand Strategy &amp; Graphic Design</option>
                    <option value="partnership">Partner With Us / Co-Build Product</option>
                    <option value="discovery">Discovery Call / Consulting</option>
                    <option value="design">UI/UX &amp; Product Design</option>
                    <option value="web">Web Engineering (Company, Portfolio, Shop)</option>
                    <option value="wordpress">WordPress Studio</option>
                    <option value="software">Web App, Mobile App or SaaS</option>
                    <option value="private">Request Access to Private Projects</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="c-timeline">Target Timeline</label>
                  <select
                    id="c-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="Exploring / Flexible">Exploring / Flexible</option>
                    <option value="Within 2-4 Weeks">Within 2 to 4 Weeks</option>
                    <option value="1-2 Months">1 to 2 Months</option>
                    <option value="Immediate Kickoff">Immediate Kickoff</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="c-msg">Project Vision &amp; Brief</label>
                <textarea
                  id="c-msg"
                  rows={5}
                  placeholder="Tell us about your brand, product idea, or goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn-pill-dark"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Bring Your Vision to Life →
              </button>

              {submitted && (
                <div
                  className="form-success"
                  style={{
                    display: "block",
                    marginTop: "10px",
                    padding: "10px 13px",
                    borderRadius: "8px",
                    background: "#E2EAE5",
                    color: "var(--pine)",
                    fontSize: "12.5px",
                    fontWeight: 500,
                  }}
                >
                  ✓ Ready to send!{" "}
                  <a
                    href={mailtoLink}
                    style={{ color: "var(--pine)", fontWeight: "bold", textDecoration: "underline" }}
                  >
                    Open in email app →
                  </a>{" "}
                  (Aplusdigitalsolutions.tech@gmail.com)
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5]">
      <Header />
      <Suspense fallback={<div className="p-12 text-center text-[#091A14]">Loading contact desk...</div>}>
        <ContactContent />
      </Suspense>
      <Footer />
    </main>
  );
}
