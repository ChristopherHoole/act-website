"use client";

import { useState } from "react";

export default function WhyDifferentOriginal() {
  const [activePanel, setActivePanel] = useState<number | null>(0);

  const togglePanel = (index: number) => {
    setActivePanel(activePanel === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-[#f1f5f9]">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            Why I&apos;m Different
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-3 font-serif">
          Three things no other Google Ads manager can offer.
        </h3>
        <p className="text-[14px] text-[#64748b] mb-12 font-mono">
          Expand each section to see exactly what separates this approach from the industry standard.
        </p>

        {/* Panels */}
        <div className="flex flex-col gap-3">

          {/* ===== PANEL 1: HOW I WORK ===== */}
          <div style={{borderTop: "3px solid #4285F4"}} className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${activePanel === 0 ? "border border-primary shadow-[0_4px_20px_rgba(66,133,244,0.12)]" : "border border-[#e2e8f0]"}`}>
            <div
              className={`px-7 py-6 cursor-pointer flex items-center gap-5 select-none transition-colors duration-200 ${activePanel === 0 ? "bg-[#f0f6ff]" : "bg-white hover:bg-[#f8fafc]"}`}
              onClick={() => togglePanel(0)}
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[2px] text-primary min-w-[56px]">01</span>
              <div className="flex-1">
                <div className="text-[20px] font-bold text-[#4285F4] mb-1 font-mono">How I Work</div>
                <div className="text-[13px] text-[#64748b] font-mono">A 7-step systematic process. Every client. Every month. No exceptions.</div>
              </div>
              <div className="flex gap-2 mr-5">
                <span className={`font-mono text-[11px] px-2.5 py-1 rounded border uppercase tracking-wider ${activePanel === 0 ? "bg-[#eff6ff] text-primary border-[#bfdbfe]" : "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"}`}>7 steps</span>
                <span className={`font-mono text-[11px] px-2.5 py-1 rounded border uppercase tracking-wider ${activePanel === 0 ? "bg-[#eff6ff] text-primary border-[#bfdbfe]" : "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"}`}>Full process</span>
              </div>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[18px] transition-all duration-300 flex-shrink-0 ${activePanel === 0 ? "border-primary text-primary bg-[#eff6ff] rotate-180" : "border-[#e2e8f0] text-[#94a3b8]"}`}>↓</div>
            </div>

            {/* Preview */}
            {activePanel !== 0 && (
              <div className="px-7 pb-0 pl-[102px] overflow-hidden max-h-[110px] relative">
                <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
                <div className="opacity-30 pb-3">
                  <div className="flex gap-3 pt-3">
                    {[["Step 1", "Deep Audit — Fix foundations first"], ["Step 3", "A.C.T Analyses — 41 rules scan daily"], ["Step 4", "I Review — Add judgment and context"], ["Step 6", "Radar Monitors — Auto-rollback protection"]].map(([title, body]) => (
                      <div key={title} className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-2.5">
                        <div className="font-mono text-[11px] font-bold text-primary mb-1">{title}</div>
                        <div className="font-mono text-[12px] text-[#94a3b8] leading-relaxed">{body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Full content */}
            <div className={`overflow-hidden transition-all duration-500 ${activePanel === 0 ? "max-h-[2000px]" : "max-h-0"}`}>
              <div className="px-7 pb-8 pl-[102px]">
                {/* Flow steps */}
                <div className="flex items-start gap-0 mb-5 overflow-x-auto">
                  {[
                    { num: "Step 1", emoji: "🔍", name: "Deep Audit", desc: "Tracking, structure, measurement. Fix foundations first." },
                    { num: "Step 2", emoji: "🎯", name: "Strategise", desc: "Set KPIs, thresholds and rules aligned to your business." },
                    { num: "Step 3", emoji: "🤖", name: "A.C.T Analyses", desc: "41 rules scan your account daily. Flags opportunities and risks." },
                    { num: "Step 4", emoji: "👤", name: "I Review", desc: "I add context and judgment. Approve or override each recommendation." },
                    { num: "Step 5", emoji: "⚡", name: "Execute", desc: "Changes applied with full audit trail and before/after logging." },
                    { num: "Step 6", emoji: "📡", name: "Radar Monitors", desc: "Auto-rollback if KPIs degrade. Protection from bad outcomes." },
                    { num: "Step 7", emoji: "📊", name: "Report", desc: "Plain-English summary. What changed, why, and what's next." },
                  ].map((step, i, arr) => (
                    <div key={step.num} className="flex-1 min-w-[110px] text-center relative px-1.5">
                      {i < arr.length - 1 && (
                        <span className="absolute right-[-8px] top-[26px] text-primary text-[16px] z-10">→</span>
                      )}
                      <div style={{borderTop: "2px solid #4285F4"}} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
                        <div className="font-mono text-[11px] text-primary uppercase tracking-wider mb-1.5">{step.num}</div>
                        <div className="text-[20px] mb-1.5">{step.emoji}</div>
                        <div className="font-mono text-[13px] font-bold text-[#4285F4] mb-1">{step.name}</div>
                        <div className="font-mono text-[12px] text-[#64748b] leading-snug">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Detail cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: "A.C.T Engine", items: ["41 optimisation rules", "5 campaign types covered", "Daily performance scan", "1,492 live recommendations"] },
                    { title: "Radar Protection", items: ["≥15% ROAS drop triggers rollback", "Spend spike detection", "Feed issue alerts", "Tracking break detection"] },
                    { title: "Monthly Report", items: ["Plain-English summary", "Every change logged", "Expected vs actual outcomes", "Next month's priorities"] },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f8fafc] border border-[#e2e8f0] border-l-[3px] border-l-primary rounded-r-md p-3.5">
                      <div className="font-mono text-[12px] font-bold text-[#4285F4] uppercase tracking-wider mb-2">{card.title}</div>
                      <ul className="list-none">
                        {card.items.map((item) => (
                          <li key={item} className="font-mono text-[12px] text-[#64748b] py-0.5 before:content-['·__'] before:text-primary">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== PANEL 2: THREE PILLARS ===== */}
          <div style={{borderTop: "3px solid #4285F4"}} className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${activePanel === 1 ? "border border-primary shadow-[0_4px_20px_rgba(66,133,244,0.12)]" : "border border-[#e2e8f0]"}`}>
            <div
              className={`px-7 py-6 cursor-pointer flex items-center gap-5 select-none transition-colors duration-200 ${activePanel === 1 ? "bg-[#f0f6ff]" : "bg-white hover:bg-[#f8fafc]"}`}
              onClick={() => togglePanel(1)}
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[2px] text-primary min-w-[56px]">02</span>
              <div className="flex-1">
                <div className="text-[20px] font-bold text-[#4285F4] mb-1 font-mono">The Three Pillars</div>
                <div className="text-[13px] text-[#64748b] font-mono">Experience. Proprietary AI. Full accountability. The combination no one else has.</div>
              </div>
              <div className="flex gap-2 mr-5">
                <span className={`font-mono text-[11px] px-2.5 py-1 rounded border uppercase tracking-wider ${activePanel === 1 ? "bg-[#eff6ff] text-primary border-[#bfdbfe]" : "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"}`}>3 pillars</span>
                <span className={`font-mono text-[11px] px-2.5 py-1 rounded border uppercase tracking-wider ${activePanel === 1 ? "bg-[#eff6ff] text-primary border-[#bfdbfe]" : "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"}`}>In depth</span>
              </div>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[18px] transition-all duration-300 flex-shrink-0 ${activePanel === 1 ? "border-primary text-primary bg-[#eff6ff] rotate-180" : "border-[#e2e8f0] text-[#94a3b8]"}`}>↓</div>
            </div>

            {/* Preview */}
            {activePanel !== 1 && (
              <div className="px-7 pb-0 pl-[102px] overflow-hidden max-h-[110px] relative">
                <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
                <div className="opacity-30 pb-3">
                  <div className="flex gap-3 pt-3">
                    {[["16 Years Senior Experience", "Max 4 clients · Every account managed personally · £50M+ ad spend · Nothing delegated..."], ["Proprietary AI Engine", "41 optimisation rules · 1,492 active recs · Safety guardrails · Auto-rollback..."], ["Full Accountability", "Every change logged · Reasoning included · Post-change monitoring · No black boxes..."]].map(([title, body]) => (
                      <div key={title} className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-2.5">
                        <div className="font-mono text-[11px] font-bold text-primary mb-1">{title}</div>
                        <div className="font-mono text-[12px] text-[#94a3b8] leading-relaxed">{body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Full content */}
            <div className={`overflow-hidden transition-all duration-500 ${activePanel === 1 ? "max-h-[2000px]" : "max-h-0"}`}>
              <div className="px-7 pb-8 pl-[102px]">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { emoji: "🧠", title: "16 Years of Senior Experience", sub: "Not junior execution", items: ["Automotive, luxury travel, B2B, ecommerce", "£5k–£400k/month budgets managed", "Maximum 4 clients — I manage every account personally", "Nothing delegated. No account managers between us.", "£50M+ in total ad spend managed"] },
                    { emoji: "⚙️", title: "A Proprietary AI Engine", sub: "Built from scratch. Not a third-party tool.", items: ["41 optimisation rules across 5 campaign types", "1,492 active recommendations right now", "Safety guardrails — magnitude limits and cooldowns", "Automatic rollback if KPIs degrade", "Built with Python, Flask, DuckDB + Google Ads API"] },
                    { emoji: "📋", title: "Full Accountability", sub: "Every change explained and tracked", items: ["Every recommendation includes why and expected impact", "Every change logged with evidence and outcome", "No blind automation — I review before anything executes", "Post-change monitoring validates every decision", "Plain-English summaries — no tables full of metrics"] },
                  ].map((pillar) => (
                    <div key={pillar.title} style={{borderTop: "3px solid #4285F4"}} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-5">
                      <div className="text-[26px] mb-2.5">{pillar.emoji}</div>
                      <div className="font-mono text-[15px] font-bold text-[#4285F4] mb-1">{pillar.title}</div>
                      <div className="font-mono text-[11px] text-primary uppercase tracking-wider mb-3">{pillar.sub}</div>
                      <ul className="list-none">
                        {pillar.items.map((item) => (
                          <li key={item} className="font-mono text-[12px] text-[#475569] py-1 flex gap-2 border-b border-[#f1f5f9] last:border-0 leading-snug">
                            <span className="text-primary flex-shrink-0">→</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== PANEL 3: ME VS INDUSTRY ===== */}
          <div style={{borderTop: "3px solid #4285F4"}} className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${activePanel === 2 ? "border border-primary shadow-[0_4px_20px_rgba(66,133,244,0.12)]" : "border border-[#e2e8f0]"}`}>
            <div
              className={`px-7 py-6 cursor-pointer flex items-center gap-5 select-none transition-colors duration-200 ${activePanel === 2 ? "bg-[#f0f6ff]" : "bg-white hover:bg-[#f8fafc]"}`}
              onClick={() => togglePanel(2)}
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[2px] text-primary min-w-[56px]">03</span>
              <div className="flex-1">
                <div className="text-[20px] font-bold text-[#4285F4] mb-1 font-mono">Me vs The Industry</div>
                <div className="text-[13px] text-[#64748b] font-mono">A direct, honest comparison. See exactly where the gap is.</div>
              </div>
              <div className="flex gap-2 mr-5">
                <span className={`font-mono text-[11px] px-2.5 py-1 rounded border uppercase tracking-wider ${activePanel === 2 ? "bg-[#eff6ff] text-primary border-[#bfdbfe]" : "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"}`}>7 comparisons</span>
                <span className={`font-mono text-[11px] px-2.5 py-1 rounded border uppercase tracking-wider ${activePanel === 2 ? "bg-[#eff6ff] text-primary border-[#bfdbfe]" : "bg-[#f1f5f9] text-[#94a3b8] border-[#e2e8f0]"}`}>Side by side</span>
              </div>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[18px] transition-all duration-300 flex-shrink-0 ${activePanel === 2 ? "border-primary text-primary bg-[#eff6ff] rotate-180" : "border-[#e2e8f0] text-[#94a3b8]"}`}>↓</div>
            </div>

            {/* Preview */}
            {activePanel !== 2 && (
              <div className="px-7 pb-0 pl-[102px] overflow-hidden max-h-[110px] relative">
                <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
                <div className="opacity-30 pb-3">
                  <div className="flex gap-3 pt-3">
                    {[["Typical Manager", "Gut feel decisions · Nothing documented · AI as a buzzword · Tables of metrics..."], ["Christopher + A.C.T", "41 rules, data-driven · Full audit trail · Proprietary engine · Plain-English reports..."]].map(([title, body]) => (
                      <div key={title} className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-2.5">
                        <div className="font-mono text-[11px] font-bold text-primary mb-1">{title}</div>
                        <div className="font-mono text-[12px] text-[#94a3b8] leading-relaxed">{body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Full content */}
            <div className={`overflow-hidden transition-all duration-500 ${activePanel === 2 ? "max-h-[2000px]" : "max-h-0"}`}>
              <div className="px-7 pb-8 pl-[102px]">
                <table className="w-full border-collapse font-mono text-[13px]">
                  <thead>
                    <tr>
                      <th className="text-left p-3 text-[11px] uppercase tracking-wider text-[#64748b] bg-[#f8fafc] border border-[#e2e8f0] w-[35%]">The Comparison</th>
                      <th className="text-center p-3 text-[11px] uppercase tracking-wider text-[#dc2626] bg-[#fef2f2] border border-[#fecaca] w-[32.5%]">❌ Typical Manager</th>
                      <th className="text-center p-3 text-[11px] uppercase tracking-wider text-[#16a34a] bg-[#f0fdf4] border border-[#bbf7d0] w-[32.5%]">✅ Christopher + A.C.T</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["How decisions are made", "Gut feel and guesswork", "41 rules, data-driven triggers"],
                      ["Change logging", "Nothing documented", "Full audit trail, every change logged"],
                      ["AI usage", "Buzzword on the pitch deck", "Proprietary engine built from scratch"],
                      ["When things go wrong", "Manual detection, slow response", "Auto-rollback on KPI degradation"],
                      ["Reporting", "Tables full of metrics", "Plain-English summaries + reasoning"],
                      ["Account attention", "Spread across 30+ accounts", "Maximum 4 clients. Senior-only."],
                      ["Safety guardrails", "None — reckless automation possible", "Magnitude limits, cooldowns, data checks"],
                    ].map(([label, bad, good]) => (
                      <tr key={label} className="hover:brightness-[0.97]">
                        <td className="p-3 border border-[#e2e8f0] bg-[#f8fafc] text-[#475569] font-bold">{label}</td>
                        <td className="p-3 border border-[#e2e8f0] bg-[#fff5f5] text-[#dc2626] text-center">{bad}</td>
                        <td className="p-3 border border-[#e2e8f0] bg-[#f7fef7] text-[#16a34a] text-center">{good}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
