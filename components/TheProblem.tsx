"use client";

export default function TheProblem() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            The Problem
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-5 font-serif">
          Most Google Ads management looks the same.
        </h3>

        {/* Intro paragraph - max-width 1020px */}
        <div className="max-w-[1020px] mb-8">
          <p className="text-body-light">
            If you're spending £5k–£50k/month on Google Ads and wondering why results feel opaque, you're not alone.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
            <div className="text-[32px] mb-3">🎲</div>
            <h4 className="text-[20px] font-bold text-[#0f172a] mb-2">
              Random tweaks without a system
            </h4>
            <p className="text-[19px] text-[#0f172a] leading-[1.6] m-0">
              Changes made on gut feel. No hypothesis. No accountability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
            <div className="text-[32px] mb-3">📋</div>
            <h4 className="text-[20px] font-bold text-[#0f172a] mb-2">
              No change log, no audit trail
            </h4>
            <p className="text-[19px] text-[#0f172a] leading-[1.6] m-0">
              Nobody can tell you what changed last month, why, or what the outcome was.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
            <div className="text-[32px] mb-3">🤖</div>
            <h4 className="text-[20px] font-bold text-[#0f172a] mb-2">
              AI as a buzzword, not a tool
            </h4>
            <p className="text-[19px] text-[#0f172a] leading-[1.6] m-0">
              "AI-powered" on the pitch. Generic automation in practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
