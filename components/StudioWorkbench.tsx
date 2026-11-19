"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";

export default function StudioWorkbench() {
  const [activeTab, setActiveTab] = useState<"brand" | "uiux" | "code" | "audit">("brand");

  // State for Brand System Tab
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);
  const [activeLogoVariant, setActiveLogoVariant] = useState<"mark" | "lockup">("lockup");
  const [activeLogoTheme, setActiveLogoTheme] = useState<"dark" | "light">("light");

  const brandSwatches = [
    { name: "Pine Deep", hex: "#06130E", rgb: "6, 19, 14", role: "Primary Canvas / Deep Contrast" },
    { name: "Pine Primary", hex: "#091A14", rgb: "9, 26, 20", role: "Brand Signature / Editorial Text" },
    { name: "Alabaster", hex: "#FAF9F5", rgb: "250, 249, 245", role: "Primary Light Surface / Contrast" },
    { name: "Warm Cream", hex: "#F3F1EA", rgb: "243, 241, 234", role: "Subtle Section / Card Fills" },
    { name: "Hunter Green", hex: "#37573E", rgb: "55, 87, 62", role: "Accent Brand Tone / Botanical" },
  ];

  // State for UI/UX Tab
  const [mobileScreen, setMobileScreen] = useState<"feed" | "metrics" | "profile">("feed");

  return (
    <section className="bg-[#091A14] text-[#FAF9F5] py-16 sm:py-24 border-t border-[#1A3328] relative z-20" id="workbench">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-10 border-b border-[#1A3328] pb-7 reveal-up">
          <div>
            <div className="inline-flex items-center gap-[7px] text-[10.5px] font-bold tracking-[2px] uppercase text-[#9FB0A8] mb-2.5">
              <span className="text-emerald-400">✦</span>
              <span>THE WORKBENCH · INTERACTIVE OUTPUTS</span>
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] leading-[1.12] font-bold tracking-[-0.02em] text-[#FAF9F5]">
              See the craft, working.
            </h2>
          </div>
          <p className="text-[14px] leading-[1.6] text-[#A7B7B0] max-w-sm">
            We don’t just deliver static files. Interact with the live deliverables we construct across brand, interface design, code, and speed.
          </p>
        </div>

        {/* 4-Tab Switcher Bar (Farmily TRACE-style) */}
        <div className="flex flex-wrap gap-2 mb-8 bg-[#06130E] p-1.5 rounded-xl border border-[#1A3328] max-w-2xl reveal-up delay-100">
          <button
            type="button"
            onClick={() => setActiveTab("brand")}
            className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg font-mono text-xs font-bold transition-all text-center cursor-pointer ${
              activeTab === "brand"
                ? "bg-[#FAF9F5] text-[#091A14] shadow-md"
                : "text-[#9FB0A8] hover:text-[#FAF9F5] hover:bg-[rgba(250,249,245,0.05)]"
            }`}
          >
            01 · BRAND SYSTEM
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("uiux")}
            className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg font-mono text-xs font-bold transition-all text-center cursor-pointer ${
              activeTab === "uiux"
                ? "bg-[#FAF9F5] text-[#091A14] shadow-md"
                : "text-[#9FB0A8] hover:text-[#FAF9F5] hover:bg-[rgba(250,249,245,0.05)]"
            }`}
          >
            02 · UI/UX PROTOTYPE
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg font-mono text-xs font-bold transition-all text-center cursor-pointer ${
              activeTab === "code"
                ? "bg-[#FAF9F5] text-[#091A14] shadow-md"
                : "text-[#9FB0A8] hover:text-[#FAF9F5] hover:bg-[rgba(250,249,245,0.05)]"
            }`}
          >
            03 · ARCHITECTURE & CODE
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("audit")}
            className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg font-mono text-xs font-bold transition-all text-center cursor-pointer ${
              activeTab === "audit"
                ? "bg-[#FAF9F5] text-[#091A14] shadow-md"
                : "text-[#9FB0A8] hover:text-[#FAF9F5] hover:bg-[rgba(250,249,245,0.05)]"
            }`}
          >
            04 · 100/100 SPEED AUDIT
          </button>
        </div>

        {/* Workbench Viewport Window */}
        <div className="bg-[#06130E] border border-[#1A3328] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] reveal-up delay-200">
          {/* Top Window Chrome Bar */}
          <div className="px-5 py-3 bg-[rgba(250,249,245,0.03)] border-b border-[#1A3328] flex items-center justify-between text-xs font-mono text-[#9FB0A8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
              <span className="ml-2 text-[11px] text-[#A7B7B0]">
                aplus-studio://workbench/{activeTab}
              </span>
            </div>
            <span className="hidden sm:inline-block text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded">
              INTERACTIVE PREVIEW READY
            </span>
          </div>

          {/* TAB 1: BRAND SYSTEM INTERACTIVE */}
          {activeTab === "brand" && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-2">
                  Interactive Token Inspector
                </span>
                <h3 className="font-display text-2xl font-bold mb-3 text-[#FAF9F5]">
                  Color Tokens & Brand Identity Scaler
                </h3>
                <p className="text-sm text-[#A7B7B0] leading-relaxed mb-6">
                  Click any swatch below to inspect how design tokens, RGB values, and logo lockups dynamically respond across light and dark backgrounds.
                </p>

                {/* Swatches Grid */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {brandSwatches.map((swatch, idx) => (
                    <button
                      key={swatch.hex}
                      type="button"
                      onClick={() => setActivePaletteIndex(idx)}
                      className={`flex items-center gap-2 py-1.5 px-3 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                        activePaletteIndex === idx
                          ? "border-emerald-400 bg-[rgba(250,249,245,0.12)] text-[#FAF9F5] scale-105"
                          : "border-[#1A3328] bg-[rgba(9,26,20,0.6)] text-[#A7B7B0] hover:border-[#FAF9F5]"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/20"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span>{swatch.name}</span>
                    </button>
                  ))}
                </div>

                {/* Active Swatch Specs */}
                <div className="bg-[#091A14] border border-[#1A3328] p-4 rounded-xl font-mono text-xs space-y-1.5 text-[#FAF9F5]">
                  <div className="flex justify-between">
                    <span className="text-[#7C8A84]">TOKEN NAME:</span>
                    <strong className="text-emerald-400">{brandSwatches[activePaletteIndex].name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7C8A84]">HEX CODE:</span>
                    <code>{brandSwatches[activePaletteIndex].hex}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7C8A84]">RGB VALUE:</span>
                    <code>rgb({brandSwatches[activePaletteIndex].rgb})</code>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#1A3328]">
                    <span className="text-[#7C8A84]">PURPOSE:</span>
                    <span className="text-right text-[#C4D0CB]">{brandSwatches[activePaletteIndex].role}</span>
                  </div>
                </div>
              </div>

              {/* Live Preview Display Box */}
              <div
                className="p-8 rounded-2xl flex flex-col items-center justify-center min-h-[300px] border transition-colors duration-300"
                style={{
                  backgroundColor: brandSwatches[activePaletteIndex].hex,
                  borderColor: activePaletteIndex === 2 || activePaletteIndex === 3 ? "#E4E1D7" : "#1A3328",
                  color: activePaletteIndex === 2 || activePaletteIndex === 3 ? "#091A14" : "#FAF9F5",
                }}
              >
                <div className="mb-6 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveLogoVariant("lockup")}
                    className={`text-[11px] font-mono py-1 px-3 rounded-full border transition-all cursor-pointer ${
                      activeLogoVariant === "lockup"
                        ? "bg-emerald-500 text-black font-bold border-transparent"
                        : "border-current opacity-70 hover:opacity-100"
                    }`}
                  >
                    Lockup View
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLogoVariant("mark")}
                    className={`text-[11px] font-mono py-1 px-3 rounded-full border transition-all cursor-pointer ${
                      activeLogoVariant === "mark"
                        ? "bg-emerald-500 text-black font-bold border-transparent"
                        : "border-current opacity-70 hover:opacity-100"
                    }`}
                  >
                    Mark Only
                  </button>
                </div>

                <BrandLogo
                  mode={activePaletteIndex === 2 || activePaletteIndex === 3 ? "dark" : "light"}
                  variant={activeLogoVariant}
                  className="h-10 sm:h-12 w-auto mb-4"
                />

                <p className="font-serif italic text-sm text-center max-w-xs opacity-80">
                  “Strategy before design. Craft before code.”
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: UI/UX INTERACTIVE PROTOTYPE */}
          {activeTab === "uiux" && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div>
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-2">
                  Interactive Figma Component Engine
                </span>
                <h3 className="font-display text-2xl font-bold mb-3 text-[#FAF9F5]">
                  Modular Design Systems That Feel Real
                </h3>
                <p className="text-sm text-[#A7B7B0] leading-relaxed mb-6">
                  We construct responsive design systems that eliminate guesswork for developers. Try clicking the bottom navigation inside this simulated mobile product prototype.
                </p>

                <div className="space-y-3 font-mono text-xs text-[#C4D0CB]">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#091A14] border border-[#1A3328]">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>140+ Auto-Layout Components with Interactive Variants</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#091A14] border border-[#1A3328]">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>4-8-16 Spatial System & Dynamic Type Ramp</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#091A14] border border-[#1A3328]">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Dark & Light Token Sets Synced with Tailwind CSS</span>
                  </div>
                </div>
              </div>

              {/* Interactive Phone Frame */}
              <div className="flex justify-center">
                <div className="w-[280px] bg-[#091A14] border-[3px] border-[#1A3328] rounded-[36px] p-3.5 shadow-2xl">
                  {/* Speaker Notch */}
                  <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-3" />

                  {/* Phone Screen */}
                  <div className="bg-[#FAF9F5] text-[#091A14] rounded-[24px] p-4 min-h-[340px] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#7C8A84]">
                          A+ CLIENT PORTAL
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>

                      {mobileScreen === "feed" && (
                        <div>
                          <h4 className="font-display font-bold text-sm text-[#091A14] mb-1">
                            Current Sprint
                          </h4>
                          <p className="text-[11px] text-[#5C6A64] mb-3">
                            Design System v2.4 in production.
                          </p>
                          <div className="bg-[#E2EAE5] p-2.5 rounded-lg mb-2 text-[10.5px]">
                            <strong className="block text-[#091A14]">Sprint Progress</strong>
                            <div className="w-full bg-white h-1.5 rounded-full mt-1.5 overflow-hidden">
                              <div className="bg-emerald-600 h-full w-[85%]" />
                            </div>
                            <span className="text-[9px] text-[#5C6A64] mt-1 block">85% Completed · QA Ready</span>
                          </div>
                        </div>
                      )}

                      {mobileScreen === "metrics" && (
                        <div>
                          <h4 className="font-display font-bold text-sm text-[#091A14] mb-1">
                            Live Analytics
                          </h4>
                          <p className="text-[11px] text-[#5C6A64] mb-3">
                            Core Web Vitals health check.
                          </p>
                          <div className="space-y-1.5">
                            <div className="p-2 bg-white rounded border border-[#E4E1D7] flex justify-between text-[10px]">
                              <span>LCP (Largest Paint)</span>
                              <strong className="text-emerald-600">0.8s (Fast)</strong>
                            </div>
                            <div className="p-2 bg-white rounded border border-[#E4E1D7] flex justify-between text-[10px]">
                              <span>CLS (Stability)</span>
                              <strong className="text-emerald-600">0.00 (Zero Shift)</strong>
                            </div>
                          </div>
                        </div>
                      )}

                      {mobileScreen === "profile" && (
                        <div>
                          <h4 className="font-display font-bold text-sm text-[#091A14] mb-1">
                            Direct Support
                          </h4>
                          <p className="text-[11px] text-[#5C6A64] mb-3">
                            Direct contact with technical leads.
                          </p>
                          <div className="p-2.5 bg-[#091A14] text-[#FAF9F5] rounded-lg text-[10.5px]">
                            <span className="text-emerald-400 block text-[9px]">ONLINE NOW</span>
                            <span>Dedicated Slack & Weekly Sprints</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Phone Nav */}
                    <div className="grid grid-cols-3 gap-1 pt-2 border-t border-[#E4E1D7] text-center text-[9px] font-mono">
                      <button
                        type="button"
                        onClick={() => setMobileScreen("feed")}
                        className={`py-1.5 rounded ${
                          mobileScreen === "feed" ? "bg-[#091A14] text-white font-bold" : "text-[#7C8A84]"
                        }`}
                      >
                        Sprint
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileScreen("metrics")}
                        className={`py-1.5 rounded ${
                          mobileScreen === "metrics" ? "bg-[#091A14] text-white font-bold" : "text-[#7C8A84]"
                        }`}
                      >
                        Metrics
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileScreen("profile")}
                        className={`py-1.5 rounded ${
                          mobileScreen === "profile" ? "bg-[#091A14] text-white font-bold" : "text-[#7C8A84]"
                        }`}
                      >
                        Leads
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE & CODE TERMINAL */}
          {activeTab === "code" && (
            <div className="p-6 sm:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-1">
                    Production Architecture
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAF9F5]">
                    Strict TypeScript & Next.js 14 App Router
                  </h3>
                </div>
                <span className="text-xs font-mono py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                  BUILD: PASSING (ZERO WARNINGS)
                </span>
              </div>

              {/* Code Snippet Frame */}
              <div className="bg-[#050D0A] border border-[#1A3328] rounded-xl p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#C4D0CB]">
                <div className="text-[#5C6A64] mb-2">// app/api/partner/route.ts — Clean Edge-Ready Architecture</div>
                <div><span className="text-[#E57373]">import</span> &#123; NextResponse &#125; <span className="text-[#E57373]">from</span> <span className="text-[#81C784]">&quot;next/server&quot;</span>;</div>
                <div><span className="text-[#E57373]">import type</span> &#123; StudioEngagement &#125; <span className="text-[#E57373]">from</span> <span className="text-[#81C784]">&quot;@/types/engagement&quot;</span>;</div>
                <br />
                <div><span className="text-[#E57373]">export async function</span> <span className="text-[#64B5F6]">POST</span>(req: Request) &#123;</div>
                <div className="pl-4"><span className="text-[#E57373]">const</span> data: StudioEngagement = <span className="text-[#E57373]">await</span> req.json();</div>
                <br />
                <div className="pl-4 text-[#5C6A64]">// Strict validation, zero middleware overhead</div>
                <div className="pl-4"><span className="text-[#E57373]">if</span> (!data.scope || !data.timeline) &#123;</div>
                <div className="pl-8"><span className="text-[#E57373]">return</span> NextResponse.json(&#123; error: <span className="text-[#81C784]">&quot;Malformed brief&quot;</span> &#125;, &#123; status: 400 &#125;);</div>
                <div className="pl-4">&#125;</div>
                <br />
                <div className="pl-4 text-[#5C6A64]">// Direct response from our core studio leads</div>
                <div className="pl-4"><span className="text-[#E57373]">return</span> NextResponse.json(&#123;</div>
                <div className="pl-8">status: <span className="text-[#81C784]">&quot;confirmed&quot;</span>,</div>
                <div className="pl-8">lead: <span className="text-[#81C784]">&quot;A+ Engineering Lead&quot;</span>,</div>
                <div className="pl-8">turnaround: <span className="text-[#81C784]">&quot;&lt; 24h&quot;</span>,</div>
                <div className="pl-4">&#125;);</div>
                <div>&#125;</div>
              </div>
            </div>
          )}

          {/* TAB 4: 100/100 SPEED AUDIT */}
          {activeTab === "audit" && (
            <div className="p-6 sm:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-1">
                    Google Lighthouse Verification
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAF9F5]">
                    Perfect 100/100 Performance Scorecard
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#9FB0A8]">
                  ENGINE: CHROMIUM AUDIT ENGINE
                </div>
              </div>

              {/* 4 Score Dials */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#091A14] border border-[#1A3328] rounded-xl p-5 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center font-mono font-bold text-2xl text-emerald-400 mb-2">
                    100
                  </div>
                  <strong className="text-xs text-[#FAF9F5]">Performance</strong>
                  <span className="text-[10px] text-[#7C8A84] font-mono mt-0.5">Core Web Vitals</span>
                </div>
                <div className="bg-[#091A14] border border-[#1A3328] rounded-xl p-5 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center font-mono font-bold text-2xl text-emerald-400 mb-2">
                    100
                  </div>
                  <strong className="text-xs text-[#FAF9F5]">Accessibility</strong>
                  <span className="text-[10px] text-[#7C8A84] font-mono mt-0.5">WCAG AAA Contrast</span>
                </div>
                <div className="bg-[#091A14] border border-[#1A3328] rounded-xl p-5 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center font-mono font-bold text-2xl text-emerald-400 mb-2">
                    100
                  </div>
                  <strong className="text-xs text-[#FAF9F5]">Best Practices</strong>
                  <span className="text-[10px] text-[#7C8A84] font-mono mt-0.5">Modern Web Standards</span>
                </div>
                <div className="bg-[#091A14] border border-[#1A3328] rounded-xl p-5 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center font-mono font-bold text-2xl text-emerald-400 mb-2">
                    100
                  </div>
                  <strong className="text-xs text-[#FAF9F5]">SEO Indexing</strong>
                  <span className="text-[10px] text-[#7C8A84] font-mono mt-0.5">Schema.org Valid</span>
                </div>
              </div>

              {/* Verified Hardware Devices List */}
              <div className="bg-[#091A14] border border-[#1A3328] rounded-xl p-4 flex flex-wrap justify-between items-center gap-3 text-xs font-mono text-[#A7B7B0]">
                <span>VERIFIED HARDWARE:</span>
                <span className="text-emerald-400">● iPhone 15 Pro (Safari)</span>
                <span className="text-emerald-400">● Google Pixel 8 (Chrome)</span>
                <span className="text-emerald-400">● MacBook Pro M3 (Safari/Chrome)</span>
                <span className="text-emerald-400">● Windows 11 (Edge)</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
