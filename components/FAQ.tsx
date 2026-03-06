"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What size accounts do you work with?",
      answer: "£5k–£100k/month ad spend.\nYou need enough budget for the data to be meaningful and for A.C.T's insights to have impact."
    },
    {
      question: "What do you NOT do?",
      answer: "Social ads, SEO, creative production, landing page design.\nGoogle Ads only.\nI'm a specialist, not a generalist."
    },
    {
      question: "How is this different from hiring an agency?",
      answer: "At an agency, your account is managed by a junior exec across 30+ other accounts.\nWith me, you get 16 years of senior experience, maximum 4 clients, and a proprietary AI engine built specifically for this.\nNo account managers, no handoffs, no diluted attention."
    },
    {
      question: "Is A.C.T a SaaS product I can buy?",
      answer: "No.\nA.C.T is my internal tool.\nIt's my competitive advantage, not a product for sale.\nYou get access through working with me."
    },
    {
      question: "Can I see A.C.T in action?",
      answer: "Yes.\nI demo it on the fit call.\nYou'll see the dashboard, recommendations, change log, and reporting live."
    },
    {
      question: "What if A.C.T recommends something I disagree with?",
      answer: "You have final say.\nA.C.T recommends, you decide.\nIf you reject a recommendation, I'll explain the reasoning and we'll discuss alternatives.\nNo blind automation."
    },
    {
      question: "What if my performance drops while working with you?",
      answer: "A.C.T's Radar module monitors every change made and automatically rolls back anything that causes KPI degradation.\nOn top of that, I review performance daily.\nIf something goes wrong, I know about it fast and I fix it fast — with a full audit trail of what happened and why."
    },
    {
      question: "Can you take over an existing account or do you start from scratch?",
      answer: "Both.\nMost clients come with an existing account.\nThe first 2 weeks are an audit — I find what's broken, what's wasted, and what's working.\nWe fix the foundation before touching spend.\nStarting from scratch follows the same process, just without the baggage."
    },
    {
      question: "Do you need access to my Google Ads account?",
      answer: "Yes.\nRead access to start — for the audit.\nThen standard admin access once we agree to work together.\nI use the Google Ads API to connect A.C.T directly to your account.\nYour credentials stay yours."
    },
    {
      question: "Can you work with my existing agency or team?",
      answer: "Yes.\nI work as freelancer (direct), partner (collaborative), or white-label (behind the scenes).\nFlexible models depending on your setup."
    },
    {
      question: "How long is onboarding?",
      answer: "2 weeks.\nAccount audit, tracking review, structure fixes, strategy alignment, then we're live.\nWe fix the foundation before pushing spend."
    },
    {
      question: "How do you communicate and report progress?",
      answer: "Monthly plain-English report: what changed, why, and what the outcome was.\nWeekly Slack or email updates on anything notable.\nYou always have visibility into A.C.T's recommendation log — every change is documented with reasoning and before/after data."
    },
    {
      question: "How quickly will I see results?",
      answer: "Account cleanup and structure fixes: 2–4 weeks.\nPerformance improvements: 4–8 weeks minimum — we need statistical significance.\nThis isn't magic.\nIt's rigorous testing and optimisation."
    },
    {
      question: "What's the minimum commitment?",
      answer: "3 months.\nThe first month is audit and foundation.\nMonths 2 and 3 is where performance improvement happens.\nGoogle Ads needs time and data to show results — anyone promising faster than that is either lucky or lying."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            FAQ
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-8 font-serif">
          Common questions.
        </h3>

        {/* FAQ List */}
        <div className="max-w-[800px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-5 border-b border-[#e2e8f0] last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="text-[20px] font-bold text-[#0f172a] pr-4">
                  {faq.question}
                </span>
                <span className="text-[20px] text-[#64748b] flex-shrink-0 transition-transform duration-200">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <div className="text-[16px] text-[#64748b] leading-[1.7]">
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className="mb-1 last:mb-0">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
