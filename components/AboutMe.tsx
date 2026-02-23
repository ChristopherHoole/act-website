"use client";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            About Me
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-5 font-serif">
          I've managed Google Ads accounts since 2009.
        </h3>

        {/* Content - max-width 1020px */}
        <div className="max-w-[1020px]">
          <p className="text-body-dark mb-6">
            Over 16 years I've worked across automotive (Lexus, Toyota), luxury travel, B2B (Virgin Media O2), ecommerce, property, and professional services.
            <br />
            I've managed budgets from £5k to £400k per month and optimized 200+ accounts.
          </p>

          <p className="text-body-dark mb-6">
            Over the past few years I noticed something: almost every Google Ads manager works the same way.
            <br />
            Random tweaks. No real AI leverage. No audit trails. No systematic approach.
          </p>

          <p className="text-body-dark mb-6">
            So I spent 18 months building my own Google Ads AI engine: <strong className="text-primary">Ads Control Tower (A.C.T)</strong>.
          </p>

          <p className="text-body-dark mb-3">
            <span className="text-primary font-bold">My approach:</span> data-driven, explainable, guardrailed automation.
          </p>
          <ul className="list-none space-y-2 ml-0">
            <li className="text-body-dark flex items-start">
              <span className="text-primary mr-3">→</span>
              <span>A.C.T recommends, I review, you approve.</span>
            </li>
            <li className="text-body-dark flex items-start">
              <span className="text-primary mr-3">→</span>
              <span>Every change is logged with reasoning, evidence, and expected impact.</span>
            </li>
            <li className="text-body-dark flex items-start">
              <span className="text-primary mr-3">→</span>
              <span>No black boxes. No reckless automation.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
