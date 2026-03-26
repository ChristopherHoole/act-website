"use client";

export default function TheDifferenceOriginal() {
  return (
    <section className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            The Difference I Bring
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-5 font-serif">
          16 years of senior Google Ads operator judgment + my proprietary AI engine = your competitive edge.
        </h3>

        {/* Content - max-width 1020px */}
        <div className="max-w-[1020px]">
          <p className="text-body-dark mb-6">
            Most managers either work manually (slow, inconsistent) or use generic automation (reckless, unexplainable).
          </p>

          <p className="text-body-dark mb-6">
            I combine <strong className="text-primary">senior-level Google Ads operator experience</strong> with <strong className="text-primary">A.C.T&apos;s AI-powered insights</strong>.
            <br />
            You get systematic decision-making, explainable recommendations, and full accountability.
          </p>

          <p className="text-body-dark mb-0">
            A.C.T doesn&apos;t replace my judgment, strategy and results — it enhances them.
            <br />
            I see what A.C.T recommends, add context, prioritize, and you or I approve what executes.
            <br />
            The changes are then tracked to monitor the outcome.
          </p>
        </div>
      </div>
    </section>
  );
}
