"use client";

export default function TheProblemOriginal() {
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

        {/* Intro paragraph - full width so sentence stays on one line */}
        <div className="mb-8">
          <p className="text-body-light">
            If you&apos;re spending £5k–£50k/month on Google Ads and wondering why results feel opaque, you&apos;re not alone.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
            <div className="text-[32px] mb-3">🎲</div>
            <h4 className="text-[20px] font-bold text-[#0f172a] mb-2 font-mono">
              Random tweaks without a system
            </h4>
            <p className="text-[16px] text-[#0f172a] leading-[1.6] m-0 font-mono">
              Changes made on gut feel.<br />
              No hypothesis.<br />
              No accountability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
            <div className="text-[32px] mb-3">📋</div>
            <h4 className="text-[20px] font-bold text-[#0f172a] mb-2 font-mono">
              No change log, no audit trail
            </h4>
            <p className="text-[16px] text-[#0f172a] leading-[1.6] m-0 font-mono">
              Nobody can tell you what changed last month.<br />
              Why it changed.<br />
              Or what the outcome was.<br />
              All you get are tables full of metrics.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
            <div className="text-[32px] mb-3">🤖</div>
            <h4 className="text-[20px] font-bold text-[#0f172a] mb-2 font-mono">
              AI is used as a buzzword, not a tool
            </h4>
            <p className="text-[16px] text-[#0f172a] leading-[1.6] m-0 font-mono">
              &ldquo;AI-powered&rdquo; on the pitch.<br />
              Generic automation in practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
