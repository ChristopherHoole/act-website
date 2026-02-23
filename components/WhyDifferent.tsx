"use client";

export default function WhyDifferent() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f1f5f9]">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            Why I'm Different
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-8 font-serif">
          Explainability by default. Not by request.
        </h3>

        {/* 3-column USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🔎</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">No black box</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Every recommendation includes why, evidence, and expected impact. You can always see the reasoning.</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🛡️</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Guardrails prevent runaway changes</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Magnitude limits, cooldown periods, data sufficiency checks. A.C.T can't make reckless moves.</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🟡</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Risk-tiered changes</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Every action classified: low/medium/high risk. Staging and review rules apply accordingly.</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">📓</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Full decision journal</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">What changed, when, why, rollback notes. Complete audit trail from day one.</div>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">👤</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Senior attention, not junior execution</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">4 clients max. I manage every account myself. Nothing is delegated.</div>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">📊</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Evidence-led, not gut-feel</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Data sufficiency checks before acting. A.C.T won't recommend changes on insufficient signal.</div>
          </div>

          {/* Card 7 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">📝</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Weekly plain-English summaries</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">What changed, what we learned, what's next. No jargon, no BS.</div>
          </div>

          {/* Card 8 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🤖</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Human-in-the-loop</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">A.C.T recommends, I review, you approve. No blind automation.</div>
          </div>

          {/* Card 9 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🔧</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Account hygiene first</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Fix tracking, structure, and measurement before pushing spend. No garbage in, garbage out.</div>
          </div>

          {/* Card 10 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🎯</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Priority engine</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Focus on highest-leverage actions first. Stops random busywork and wasted effort.</div>
          </div>

          {/* Card 11 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🧪</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Experiment discipline</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Hypothesis → test design → measurement → decision. Every change is a documented experiment.</div>
          </div>

          {/* Card 12 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">⚙️</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Config-driven approach</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Actions aligned to your business model and constraints. Not one-size-fits-all automation.</div>
          </div>

          {/* Card 13 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🚫</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">No runaway automation</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Magnitude and frequency limits. A.C.T can't make reckless moves even if it wanted to.</div>
          </div>

          {/* Card 14 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">🔍</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Onboarding audit depth</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">2-week deep dive fixes tracking, structure, and measurement before we touch anything.</div>
          </div>

          {/* Card 15 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">✅</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Measurement sanity checks</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Data sufficiency requirements before recommendations. No changes on insufficient signal.</div>
          </div>

          {/* Card 16 */}
          <div className="bg-white border border-[#e2e8f0] rounded-md p-5">
            <div className="text-[28px] mb-3">📅</div>
            <div className="text-[20px] font-bold text-[#0f172a] mb-2">Monthly strategy sessions</div>
            <div className="text-[16px] text-[#0f172a] leading-[1.6]">Review learnings, align on priorities, set next month's focus. Not just execution — strategy.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
