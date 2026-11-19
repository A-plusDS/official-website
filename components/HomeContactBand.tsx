"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";

export default function HomeContactBand() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "general",
    timeline: "Exploring / Flexible",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const topicLabels: Record<string, string> = {
      general: "General Inquiry",
      partnership: "Partner With Us / Co-Build Product",
      branding: "Brand Strategy & Graphic Design",
      design: "UI/UX & Product Design",
      web: "Web Engineering (Company, Portfolio, Shop)",
      wordpress: "WordPress Studio",
      software: "Web App, Mobile App or SaaS",
      private: "Request Access to Private Projects",
      discovery: "Discovery Call / Consulting",
    };
    const topicText = topicLabels[formData.topic] || formData.topic;
    const subject = encodeURIComponent(
      `A+ Partnership / Inquiry (${topicText}) | ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nReply Email: ${formData.email}\nFocus: ${topicText}\nTimeline: ${formData.timeline}\n\n${formData.message}`
    );
    const link = `mailto:Aplusdigitalsolutions.tech@gmail.com?subject=${subject}&body=${body}`;
    setMailtoUrl(link);
    setSubmitted(true);
  };

  return (
    <section className="bg-[#F3F1EA] border-t border-[#E4E1D7] py-10 sm:py-[46px] pb-14 sm:pb-[60px] relative z-30" id="contact">
      <div className="container-wide">
        <div className="bg-[#091A14] text-[#FAF9F5] border border-[#1A3328] rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 lg:p-[clamp(24px,3.8vw,42px)] shadow-[0_20px_50px_rgba(9,26,20,0.13)]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-7 sm:gap-[34px] items-start min-w-0 reveal-up">
            {/* Left Column */}
            <div className="min-w-0 w-full">
              <div className="inline-flex items-center gap-[7px] text-[10px] font-bold tracking-[1.8px] uppercase text-[#9FB0A8] mb-2">
                <BrandLogo mode="light" variant="mark" className="h-3 w-auto" />
                <span>Start a Conversation</span>
              </div>
              <h2 className="font-display text-[clamp(22px,2.5vw,30px)] leading-[1.15] font-bold tracking-[-0.02em] text-[#FAF9F5] mb-2.5">
                Bring the vision. We shape the brand and build.
              </h2>
              <p className="text-[13.5px] text-[#B7C5BF] max-w-[390px] mb-4 leading-[1.6]">
                Whether you need a fresh brand identity, a custom site or portfolio, a software product, or an idea-stage partner, reach our leads directly.
              </p>
              <div className="inline-flex items-center gap-2 text-[11.5px] text-[#DCE3E0] py-1.5 px-3 rounded-full bg-[rgba(250,249,245,0.06)] border border-[#1A3328] mb-4">
                <span className="text-emerald-400">●</span>
                <span>Direct response from our studio leads</span>
              </div>

              <div className="border-t border-[#1A3328] pt-3.5 flex flex-col gap-2">
                <a
                  href="mailto:Aplusdigitalsolutions.tech@gmail.com"
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2.5 px-3.5 bg-[#0D241C] hover:bg-[#122E24] border border-[#1E3B30] hover:border-[#F3F1EA] rounded-[10px] text-[#FAF9F5] text-[13px] font-medium gap-1 sm:gap-2.5 min-h-[42px] transition-all"
                >
                  <strong className="break-all font-semibold">
                    Aplusdigitalsolutions.tech@gmail.com
                  </strong>
                  <span className="text-[10px] uppercase tracking-[0.9px] text-[#9BB0A8] font-semibold whitespace-nowrap">
                    Email Directly →
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, topic: "discovery" }));
                    const el = document.getElementById("c-topic");
                    if (el) el.focus();
                  }}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2.5 px-3.5 bg-[#0D241C] hover:bg-[#122E24] border border-[#1E3B30] hover:border-[#F3F1EA] rounded-[10px] text-[#FAF9F5] text-[13px] font-medium gap-1 sm:gap-2.5 min-h-[42px] transition-all cursor-pointer text-left w-full"
                >
                  <strong className="font-semibold">Book a 20-Min Discovery Call</strong>
                  <span className="text-[10px] uppercase tracking-[0.9px] text-[#9BB0A8] font-semibold whitespace-nowrap">
                    Scope & Fit →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-[#FAF9F5] text-[#091A14] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 w-full min-w-0 shadow-sm">
              <form onSubmit={handleSubmit} className="w-full min-w-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 min-w-0">
                  <div className="flex flex-col gap-1 min-w-0">
                    <label htmlFor="c-name" className="text-[10.5px] font-semibold uppercase tracking-[0.8px] text-[#5C6A64]">
                      Your Name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-w-0 py-2.5 px-3.5 rounded-lg border border-[#D8D3C6] focus:border-[#091A14] focus:ring-1 focus:ring-[#091A14] bg-white text-[#091A14] text-[16px] sm:text-[13px] outline-none min-h-[40px] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <label htmlFor="c-email" className="text-[10.5px] font-semibold uppercase tracking-[0.8px] text-[#5C6A64]">
                      Email Address
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-w-0 py-2.5 px-3.5 rounded-lg border border-[#D8D3C6] focus:border-[#091A14] focus:ring-1 focus:ring-[#091A14] bg-white text-[#091A14] text-[16px] sm:text-[13px] outline-none min-h-[40px] transition-colors"
                    />
                  </div>
                </div>

                {/* Quick-Select Intake Pathways (Farmily-style instant action) */}
                <div className="mb-3.5">
                  <span className="block text-[10px] font-mono uppercase tracking-[1.2px] text-[#7C8A84] mb-1.5 font-bold">
                    SELECT PROJECT FOCUS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: "branding", label: "Brand Identity" },
                      { id: "design", label: "UI/UX & App" },
                      { id: "web", label: "Custom Web" },
                      { id: "wordpress", label: "WordPress" },
                      { id: "discovery", label: "Discovery Call" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, topic: item.id }))}
                        className={`text-[11px] font-mono py-1 px-2.5 rounded-md border transition-all cursor-pointer ${
                          formData.topic === item.id
                            ? "bg-[#091A14] text-[#FAF9F5] border-[#091A14] font-bold shadow-sm"
                            : "bg-white text-[#5C6A64] border-[#D8D3C6] hover:border-[#091A14] hover:text-[#091A14]"
                        }`}
                      >
                        ✦ {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 min-w-0">
                  <div className="flex flex-col gap-1 min-w-0">
                    <label htmlFor="c-topic" className="text-[10.5px] font-semibold uppercase tracking-[0.8px] text-[#5C6A64]">
                      How Can We Partner?
                    </label>
                    <select
                      id="c-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full min-w-0 max-w-full py-2.5 px-3.5 rounded-lg border border-[#D8D3C6] focus:border-[#091A14] focus:ring-1 focus:ring-[#091A14] bg-white text-[#091A14] text-[16px] sm:text-[13px] outline-none min-h-[40px] transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partner With Us / Co-Build Product</option>
                      <option value="branding">Brand Strategy & Graphic Design</option>
                      <option value="design">UI/UX & Product Design</option>
                      <option value="web">Web Engineering (Company, Portfolio, Shop)</option>
                      <option value="wordpress">WordPress Studio</option>
                      <option value="software">Web App, Mobile App or SaaS</option>
                      <option value="private">Request Access to Private Projects</option>
                      <option value="discovery">Discovery Call / Consulting</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <label htmlFor="c-timeline" className="text-[10.5px] font-semibold uppercase tracking-[0.8px] text-[#5C6A64]">
                      Timeline
                    </label>
                    <select
                      id="c-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full min-w-0 max-w-full py-2.5 px-3.5 rounded-lg border border-[#D8D3C6] focus:border-[#091A14] focus:ring-1 focus:ring-[#091A14] bg-white text-[#091A14] text-[16px] sm:text-[13px] outline-none min-h-[40px] transition-colors"
                    >
                      <option value="Exploring / Flexible">Exploring / Flexible</option>
                      <option value="Within 2-4 Weeks">Within 2 to 4 Weeks</option>
                      <option value="1-2 Months">1 to 2 Months</option>
                      <option value="Immediate Kickoff">Immediate Kickoff</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-4 min-w-0">
                  <label htmlFor="c-msg" className="text-[10.5px] font-semibold uppercase tracking-[0.8px] text-[#5C6A64]">
                    Project Vision & Goals
                  </label>
                  <textarea
                    id="c-msg"
                    rows={3}
                    placeholder="Tell us about your idea, product, or brand goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-w-0 py-2.5 px-3.5 rounded-lg border border-[#D8D3C6] focus:border-[#091A14] focus:ring-1 focus:ring-[#091A14] bg-white text-[#091A14] text-[16px] sm:text-[13px] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill-dark w-full justify-center text-center cursor-pointer min-h-[42px]"
                >
                  Bring Your Vision to Life →
                </button>

                {submitted && (
                  <div className="mt-3 p-3 rounded-lg bg-[#E2EAE5] text-[#091A14] text-[12.5px] font-medium border border-[#C5D7CE]">
                    ✓ Ready to send!{" "}
                    <a
                      href={mailtoUrl}
                      className="text-[#091A14] font-bold underline"
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
      </div>
    </section>
  );
}

