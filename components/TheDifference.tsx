"use client";

export default function TheDifference() {
  return (
    <section className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            The Difference
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-5 font-serif">
          16 years operator judgment + proprietary AI = your edge.
        </h3>

        {/* Content - max-width 1020px */}
        <div className="max-w-[1020px]">
          <p className="text-body-dark mb-6">
            Most managers either work manually (slow, inconsistent) or use generic automation (reckless, unexplainable).
          </p>

          <p className="text-body-dark mb-6">
            I combine <strong className="text-primary">senior-level operator experience</strong> with <strong className="text-primary">A.C.T's AI-powered insights</strong>.
            <br />
            You get systematic decision-making, explainable recommendations, and full accountability.
          </p>

          <p className="text-body-dark mb-0">
            A.C.T doesn't replace judgment — it enhances it.
            <br />
            I see what A.C.T recommends, add context, prioritize, and you or I approve what executes.
          </p>
        </div>
      </div>
    </section>
  );
}
