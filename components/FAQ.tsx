"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What type of role are you looking for?",
      answer: "Contract, freelance or permanent. Remote-first, UK-based. Open to global companies."
    },
    {
      question: "What's your availability?",
      answer: "Available immediately."
    },
    {
      question: "Do you work in-house or remotely?",
      answer: "Remote-first. I've worked remotely for the last 16 years across agencies, in-house and consultancy."
    },
    {
      question: "What size budgets have you managed?",
      answer: "£5k to £400k per month. 100+ accounts across 16 years. B2B and B2C."
    },
    {
      question: "What industries have you worked in?",
      answer: "Automotive (Lexus, Toyota), luxury travel, B2B (Virgin Media O2), ecommerce, property, financial services and telecoms."
    },
    {
      question: "What campaign types do you cover?",
      answer: "Search, Shopping, Performance Max, Display and Paid Social. A.C.T generates recommendations across all five."
    },
    {
      question: "Do you only do Google Ads?",
      answer: "Google Ads is my specialism, but I have hands-on experience with Meta, LinkedIn, TikTok, Taboola and Outbrain. I also set up analytics, tracking and CRM integrations — I think about the full impression-to-sale journey."
    },
    {
      question: "Can you work alongside an existing team?",
      answer: "Yes. I've worked as a sole operator, embedded in teams, and collaboratively with agencies. Flexible to the setup."
    },
    {
      question: "How do you communicate and report?",
      answer: "Weekly updates via Slack or email. Monthly plain-English reports. Full visibility into every change and decision. Happy to adapt to whatever reporting structure is already in place."
    },
    {
      question: "Can I see A.C.T in action?",
      answer: "Yes. I can demo the dashboard, recommendations, change log and reporting on a call."
    },
    {
      question: "What makes A.C.T different from other AI tools?",
      answer: "A.C.T isn't a third-party tool — I built it from scratch with Python, Flask, DuckDB and the Google Ads API. It's tailored to how I work, with safety guardrails and human oversight built in. Nothing executes without my review."
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
                <span className="text-[20px] font-bold text-[#0f172a] pr-4 font-mono">
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
                <div className="text-[16px] text-[#0f172a] leading-[1.7] font-sans">
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
