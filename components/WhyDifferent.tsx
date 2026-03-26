"use client";

export default function WhyDifferent() {
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
        <h3 className="text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-10 font-serif">
          What I bring that other candidates don&apos;t.
        </h3>

        {/* 2x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-3 font-mono">16 Years Senior Experience</div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>Every account managed personally, nothing delegated</li>
              <li>£50M+ in total ad spend managed</li>
              <li>£5k–£400k/month budgets across every major vertical</li>
              <li>Automotive, luxury travel, B2B, ecommerce, property and financial services</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-3 font-mono">Proprietary AI Engine</div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>75 optimisation rules + 99 monitoring flags</li>
              <li>507 active recommendations across 5 campaign types</li>
              <li>Safety guardrails — magnitude limits and cooldowns</li>
              <li>Built with Python, Flask, DuckDB + Google Ads API</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-3 font-mono">Full Accountability</div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>Every recommendation includes why and expected impact</li>
              <li>Every change logged with evidence and outcome</li>
              <li>I review before anything executes — no blind automation</li>
              <li>Post-change monitoring validates every decision</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#e2e8f0] border-l-4 border-l-primary rounded-lg p-6">
            <div className="text-[20px] font-bold text-[#0f172a] mb-3 font-mono">Full-Stack Paid Media Expertise</div>
            <ul className="list-disc list-inside text-[16px] text-[#0f172a] leading-[1.8] space-y-1.5 font-sans">
              <li>Google Ads specialist with hands-on Paid Social, Native and Display</li>
              <li>Analytics, tracking and attribution across GA4, GTM and Looker Studio</li>
              <li>CRM and email marketing integration (HubSpot, Salesforce, Klaviyo)</li>
              <li>Full-funnel perspective — not just ads, but the entire impression-to-sale journey</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
