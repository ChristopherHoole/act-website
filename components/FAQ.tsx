"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What size accounts do you work with?",
      answer: "£5k–£100k/month ad spend. You need enough budget for the data to be meaningful and for A.C.T's insights to have impact."
    },
    {
      question: "Is A.C.T a SaaS product I can buy?",
      answer: "No. A.C.T is my internal tool. It's my competitive advantage, not a product for sale. You get access through working with me."
    },
    {
      question: "How long is onboarding?",
      answer: "2 weeks. Account audit, tracking review, structure fixes, strategy alignment, then we're live. We fix the foundation before pushing spend."
    },
    {
      question: "Can I see A.C.T in action?",
      answer: "Yes. I demo it on the fit call. You'll see the dashboard, recommendations, change log, and reporting live."
    },
    {
      question: "What do you NOT do?",
      answer: "Social ads, SEO, creative production, landing page design. Google Ads only. I'm a specialist, not a generalist."
    },
    {
      question: "How does pricing work?",
      answer: "10 hours/week block rate. We discuss on the fit call based on account complexity, number of campaigns, and current state."
    },
    {
      question: "What if A.C.T recommends something I disagree with?",
      answer: "You have final say. A.C.T recommends, you decide. If you reject a recommendation, I'll explain the reasoning and we'll discuss alternatives. No blind automation."
    },
    {
      question: "How quickly will I see results?",
      answer: "Account cleanup and structure fixes: 2-4 weeks. Performance improvements: 4-8 weeks minimum (we need statistical significance). This isn't magic — it's rigorous testing and optimization."
    },
    {
      question: "What happens if you reach 4 clients?",
      answer: "I maintain a short waitlist. Average client retention is 12+ months, so slots open periodically. If there's urgency, we can discuss interim audit/consulting work."
    },
    {
      question: "Can you work with my existing agency or team?",
      answer: "Yes. I work as freelancer (direct), partner (collaborative), or white-label (behind the scenes). Flexible models depending on your setup."
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
              {/* Question - Clickable */}
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

              {/* Answer - Collapsible */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-[16px] text-[#64748b] leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
