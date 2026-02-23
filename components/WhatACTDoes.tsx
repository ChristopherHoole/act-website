"use client";

export default function WhatACTDoes() {
  return (
    <section id="act" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            What A.C.T Does
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-5 font-serif">
          Four AI-powered modules. All features live and operational.
        </h3>

        {/* Intro paragraph - max-width 1020px */}
        <div className="max-w-[1020px] mb-8">
          <p className="text-body-light">
            A.C.T is my proprietary Google Ads AI engine.
            <br />
            It's not a product for sale — it's my internal competitive advantage.
          </p>
        </div>

        {/* 2x2 Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Module 1: Lighthouse */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1">Lighthouse</div>
            <div className="text-[18px] text-primary mb-3">Diagnostics & Insights</div>
            <div className="text-[16px] text-[#64748b] leading-[1.6] mb-3">
              Deep campaign analysis with 200+ calculated performance features.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5">
              <li>Anomaly detection (spend spikes, CTR drops, conversion anomalies)</li>
              <li>Quality Score diagnostics and improvement recommendations</li>
              <li>Impression share analysis and recovery strategies</li>
              <li>Search term mining and negative keyword suggestions</li>
              <li>Campaign structure and account hygiene audits</li>
            </ul>
          </div>

          {/* Module 2: Radar */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1">Radar</div>
            <div className="text-[18px] text-primary mb-3">Monitoring & Protection</div>
            <div className="text-[16px] text-[#64748b] leading-[1.6] mb-3">
              Real-time performance monitoring with automatic safeguards.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5">
              <li>Automatic rollback on KPI degradation (≥15% ROAS/CVR drop)</li>
              <li>Budget pacing alerts and spend spike detection</li>
              <li>Feed issue detection for Shopping campaigns</li>
              <li>Tracking break detection and alerts</li>
              <li>Post-change monitoring with outcome validation</li>
            </ul>
          </div>

          {/* Module 3: Flight Plan */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1">Flight Plan</div>
            <div className="text-[18px] text-primary mb-3">Experiments & Structured Testing</div>
            <div className="text-[16px] text-[#64748b] leading-[1.6] mb-3">
              Hypothesis-driven testing framework. No random tweaks.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5">
              <li>Structured experiment design and rollout</li>
              <li>A/B test setup with clear success criteria</li>
              <li>Statistical significance validation</li>
              <li>Scale/iterate/rollback decisions based on results</li>
              <li>Prevents "random busywork" — every change is a documented test</li>
            </ul>
          </div>

          {/* Module 4: Autopilot */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-1">Autopilot</div>
            <div className="text-[18px] text-primary mb-3">AI-Powered Optimization</div>
            <div className="text-[16px] text-[#64748b] leading-[1.6] mb-3">
              40+ optimization rules with safety guardrails and human oversight.
            </div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5">
              <li>Budget, bid, campaign status, keyword, ad, and Shopping optimizations</li>
              <li>Constitution safety framework (magnitude limits, cooldown periods, data sufficiency)</li>
              <li>Risk-tiered changes (low/medium/high with appropriate review)</li>
              <li>Human-in-the-loop approval — A.C.T recommends, you decide</li>
              <li>Full change preview before execution</li>
            </ul>
          </div>
        </div>

        {/* Additional Capabilities Box */}
        <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg">
          <div className="text-[20px] font-bold text-[#0f172a] mb-3">Additional Capabilities</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[16px] text-[#0f172a] leading-[1.7]">
            <div>
              <strong className="text-[#0f172a]">Multi-Campaign Support:</strong> Search, Shopping, Performance Max, Display (Video/Demand Gen coming soon)
            </div>
            <div>
              <strong className="text-[#0f172a]">Automated Reports:</strong> Monthly slide-based reports with AI-generated insights and plain-English summaries
            </div>
            <div>
              <strong className="text-[#0f172a]">Smart Alerts:</strong> Urgent issue notifications for budget overruns, conversion drops, tracking failures
            </div>
            <div>
              <strong className="text-[#0f172a]">Full Audit Trail:</strong> Every change logged with reasoning, evidence, risk level, and rollback notes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
