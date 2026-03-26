"use client";

export default function WhatACTDoes() {
  return (
    <section id="act" className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            What A.C.T Does
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-5 font-serif">
          Four AI-powered modules.
        </h3>

        {/* Intro paragraph - max-width 1020px */}
        <div className="max-w-[1020px] mb-8">
          <p className="text-body-dark font-mono">
            A.C.T is my proprietary Google Ads AI engine — it&apos;s what sets me apart from other candidates.
          </p>
        </div>

        {/* 2x2 Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module 1: Lighthouse */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1 font-mono">Lighthouse</div>
            <div className="text-[18px] text-primary mb-3 font-mono font-bold">Diagnostics & Insights</div>
            <div className="text-[16px] font-bold text-[#0f172a] leading-[1.6] mb-3 font-sans">
              Deep campaign analysis with 200+ calculated performance features.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>Anomaly detection across spend, CTR and conversions</li>
              <li>Quality Score diagnostics and recovery strategies</li>
              <li>Search term mining and negative keyword suggestions</li>
              <li>Account structure and hygiene audits</li>
            </ul>
          </div>

          {/* Module 2: Radar */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1 font-mono">Radar</div>
            <div className="text-[18px] text-primary mb-3 font-mono font-bold">Monitoring & Protection</div>
            <div className="text-[16px] font-bold text-[#0f172a] leading-[1.6] mb-3 font-sans">
              99 monitoring flags with automatic safeguards.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>Automatic rollback on KPI degradation</li>
              <li>Budget pacing and spend spike detection</li>
              <li>Feed and tracking break alerts</li>
              <li>Post-change outcome validation</li>
            </ul>
          </div>

          {/* Module 3: Flight Plan */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1 font-mono">Flight Plan</div>
            <div className="text-[18px] text-primary mb-3 font-mono font-bold">Experiments & Structured Testing</div>
            <div className="text-[16px] font-bold text-[#0f172a] leading-[1.6] mb-3 font-sans">
              Hypothesis-driven testing framework.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>Structured experiment design and rollout</li>
              <li>A/B tests with clear success criteria</li>
              <li>Statistical significance validation</li>
              <li>Scale, iterate or rollback based on results</li>
            </ul>
          </div>

          {/* Module 4: Autopilot */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1 font-mono">Autopilot</div>
            <div className="text-[18px] text-primary mb-3 font-mono font-bold">Rules Engine</div>
            <div className="text-[16px] font-bold text-[#0f172a] leading-[1.6] mb-3 font-sans">
              75 optimisation rules across budgets, bids, keywords and Shopping.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>507 active recommendations across 5 campaign types</li>
              <li>Safety guardrails with magnitude limits and cooldowns</li>
              <li>Human-in-the-loop — A.C.T recommends, I decide</li>
              <li>Every change logged with reasoning and tracked impact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
