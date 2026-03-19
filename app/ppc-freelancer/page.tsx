"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const WA_URL = "https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%20found%20your%20ppc-freelancer%20page%20and%20I%27d%20like%20to%20discuss%20my%20Google%20Ads.";

export default function PPCFreelancerPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const trackWhatsApp = (label: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: label,
      });
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18006514629/whatsapp_click',
        event_label: label,
      });
    }
  };

  const trackPhone = (page: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: page,
      });
    }
  };

  const trackFormSubmit = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'conversion',
        event_label: 'ppc-freelancer - contact form',
      });
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18006514629/fxGxCNeunoYcEMW3lopD',
        value: 40.0,
        currency: 'GBP',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setIsError(true);
      setErrorMessage("Name and email are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsError(true);
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          budget: formData.budget,
          source: "ppc-freelancer",
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      trackFormSubmit();

      setIsSuccess(true);
      setFormData({ name: "", company: "", email: "", phone: "", budget: "" });

    } catch (error) {
      setIsError(true);
      setErrorMessage("Something went wrong. Please try again or message me on WhatsApp.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#0f172a] text-white font-mono overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="bg-[#0a0a1a] border-b border-[#1e293b] px-6 md:px-10 flex justify-between items-center sticky top-0 z-50 h-[60px]">
        <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <img src="/act_logo.svg" alt="A.C.T Logo" width={28} height={28} />
          <span className="font-serif text-[14px] font-bold text-white whitespace-nowrap">Christopher Hoole</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-[14px] text-[#60a5fa] hidden md:block no-underline">About</a>
          <a href="#portfolio" className="text-[14px] text-[#60a5fa] hidden md:block no-underline">Work</a>
          <a href="#act" className="text-[14px] text-[#60a5fa] hidden md:block no-underline">A.C.T</a>
          <a href="#faq" className="text-[14px] text-[#60a5fa] hidden md:block no-underline">FAQs</a>
          <a href="#audit" className="bg-[#2563eb] text-white text-[14px] font-bold px-4 py-2 rounded-lg no-underline">Get Free PPC Audit</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[#0f172a] py-20 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-center">
            <div>
              <div className="inline-block bg-[#1e3a5f] text-[#60a5fa] text-[14px] px-3 py-1 rounded border border-[#2563eb]/30 mb-4">
                PPC Freelancer · Senior Level · UK
              </div>
              <h1 className="font-serif text-[28px] md:text-[42px] font-bold text-white leading-[1.15] mb-5">
                Hire a senior PPC freelancer who treats your account like his own
              </h1>
              <p className="text-[14px] text-white leading-[1.8] max-w-[500px] mb-7">
                Senior PPC freelancer and Google Ads specialist with 16 years experience. £50M+ managed. Maximum 4 clients. No agencies, no juniors. Just a dedicated freelance PPC expert fully focused on your results.
              </p>
              {/* Buttons — desktop only (shown inline with text column) */}
              <div className="hidden md:flex flex-wrap gap-3">
                <a href="#audit" className="bg-[#2563eb] text-white text-[14px] font-bold px-7 py-[14px] rounded-lg no-underline">Get a free PPC audit →</a>
                <a href="#portfolio" className="border border-[#334155] text-white text-[14px] font-bold px-7 py-[14px] rounded-lg no-underline">See my work</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#334155] shadow-[0_16px_48px_rgba(0,0,0,0.6)] max-w-[300px] mx-auto md:mx-0">
              <img src="/christopher-headshot.jpg" alt="Christopher Hoole — Senior PPC Freelancer" className="w-full block" />
            </div>
          </div>
          {/* Buttons — mobile only (below photo) */}
          <div className="flex md:hidden flex-wrap gap-3 mt-6">
            <a href="#audit" className="bg-[#2563eb] text-white text-[14px] font-bold px-7 py-[14px] rounded-lg no-underline">Get a free PPC audit →</a>
            <a href="#portfolio" className="border border-[#334155] text-white text-[14px] font-bold px-7 py-[14px] rounded-lg no-underline">See my work</a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[#0a0a1a] border-b border-[#1e293b] py-5 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-3 md:grid-cols-5 gap-0">
          {[
            { val: "16 yrs", lbl: "Experience" },
            { val: "£50M+", lbl: "Ad spend" },
            { val: "200+", lbl: "Accounts" },
            { val: "Max 4", lbl: "Clients ever" },
            { val: "41", lbl: "Ai rules" },
          ].map((item, i) => (
            <div key={i} className={`text-center px-3 ${i < 4 ? "border-r border-[#1e293b]" : ""} ${i >= 3 ? "hidden md:block" : ""}`}>
              <div className="font-serif text-[14px] font-bold text-[#60a5fa] mb-1">{item.val}</div>
              <div className="text-[14px] text-white">{item.lbl}</div>
            </div>
          ))}
        </div>
      </div>


      {/* ── WHAT YOU GET ── */}
      <section className="bg-[#0f172a] py-[72px] px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#60a5fa] m-0">What you get</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-white leading-[1.2] mb-4">
            What you get as a PPC freelancer client
          </h2>
          <p className="text-[14px] text-white leading-[1.8] mb-8 max-w-[620px]">
            Not a retainer. Not a report. A senior freelance PPC manager running your Google Ads account every single week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Full PPC Campaign Management",
                body: "As your freelance PPC manager, I handle Search, Shopping, and Display campaigns end-to-end. Strategy, structure, keywords, bids, ads, and reporting — all handled.",
              },
              {
                title: "Keyword Strategy & Negative Management",
                body: "Ongoing keyword expansion, match type optimisation, and negative keyword management. As a specialist Google Ads freelancer, I eliminate wasted spend every single week.",
              },
              {
                title: "Bid & Budget Optimisation",
                body: "Manual CPC management moving toward Smart Bidding once conversion data is established. Daily monitoring, weekly adjustments.",
              },
              {
                title: "Monthly Reporting",
                body: "Plain-English performance summaries. What changed, why it changed, what the outcome was. No tables full of metrics without explanation.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-[#1e293b] border border-[#334155] border-l-[3px] border-l-[#2563eb] rounded-xl p-5">
                <h3 className="text-[16px] font-bold text-white mb-2">{c.title}</h3>
                <div className="text-[14px] text-white leading-[1.75]">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREELANCE PPC SERVICES ── */}
      <section className="bg-[#0f172a] py-[72px] px-6 md:px-10 border-t border-[#1e293b]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#60a5fa] m-0">Freelance PPC services</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-white leading-[1.2] mb-4">
            What a freelance PPC specialist does differently
          </h2>
          <p className="text-[14px] text-white leading-[1.8] mb-7 max-w-[620px]">
            Hiring a freelance PPC manager means your account gets senior attention every day — not handed to a junior exec at an agency.
          </p>
          <div className="space-y-2 mb-7">
            <div className="text-[14px] text-white"><span className="text-[#2563eb] mr-2">→</span>As your freelance PPC consultant, I audit, restructure, and optimise your Google Ads account from day one.</div>
            <div className="text-[14px] text-white"><span className="text-[#2563eb] mr-2">→</span>Every change is logged. Every decision is explained. No black box — you always know what your freelance Google Ads manager is doing and why.</div>
            <div className="text-[14px] text-white"><span className="text-[#2563eb] mr-2">→</span>From keyword research to bid strategy, a dedicated freelance PPC expert handles the full account — not just the easy parts.</div>
            <div className="text-[14px] text-white"><span className="text-[#2563eb] mr-2">→</span>Unlike agencies that rotate staff, you always work directly with the same senior PPC freelancer.</div>
          </div>
          <a href="#audit" className="bg-[#2563eb] text-white text-[14px] font-bold px-7 py-[14px] rounded-lg no-underline inline-block">Get a free PPC audit →</a>
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section id="about" className="bg-[#0f172a] py-[72px] px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#60a5fa] m-0">About me</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-white leading-[1.2] mb-4">
            I&apos;ve managed Google Ads accounts since 2009.
          </h2>
          <div className="max-w-[820px]">
            <p className="text-[14px] text-white leading-[1.85] mb-4">
              As a freelance PPC consultant and Google Ads specialist, I&apos;ve worked across automotive (Lexus, Toyota), luxury travel, B2B (Virgin Media O2), ecommerce, property, and professional services over 16 years. I&apos;ve managed budgets from £5k to £400k per month and optimised 200+ accounts as a freelance PPC manager and specialist.
            </p>
            <p className="text-[14px] text-white leading-[1.85] mb-4">
              Over the past few years I noticed something: almost every Google Ads manager works the same way. Random tweaks. No systematic approach. No audit trails. No real Ai leverage.
            </p>
            <p className="text-[14px] text-white leading-[1.85] mb-5">
              So I spent 18 months building my own Google Ads AI engine called <strong>A.C.T (Ads Control Tower)</strong>. As a freelance PPC expert, my approach is data-driven, explainable, and guardrailed — not reckless automation.
            </p>
            <div className="space-y-2 mb-7">
              <div className="text-[14px] text-white"><span className="text-[#2563eb] mr-2">→</span>I build, A.C.T recommends, I review and approve or disapprove.</div>
              <div className="text-[14px] text-white"><span className="text-[#2563eb] mr-2">→</span>Every change is logged with reasoning, evidence, expected impact and tracked impact.</div>
              <div className="text-[14px] text-white"><span className="text-[#2563eb] mr-2">→</span>No random tweaks. No reckless automation.</div>
            </div>
            <a href="#audit" className="bg-[#2563eb] text-white text-[14px] font-bold px-7 py-[14px] rounded-lg no-underline inline-block">Get a free PPC audit →</a>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="bg-white py-[72px] px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#2563eb] m-0">The problem</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-[#0f172a] leading-[1.2] mb-4">
            Most Google Ads management looks the same.
          </h2>
          <p className="text-[14px] text-[#0f172a] leading-[1.8] mb-8 max-w-[620px]">
            If you&apos;re spending £5k–£50k/month on Google Ads and wondering why results feel opaque, you&apos;re not alone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🎲", title: "Random tweaks without a system", body: "Changes made on gut feel. No hypothesis. No accountability." },
              { icon: "📋", title: "No change log, no audit trail", body: "Nobody can tell you what changed last month, why it changed, or what the outcome was." },
              { icon: "🤖", title: "Ai used as a buzzword, not a tool", body: '"Ai-powered" on the pitch. Generic automation in practice.' },
            ].map((c) => (
              <div key={c.title} className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-xl p-5">
                <div className="text-[14px] mb-3">{c.icon}</div>
                <h3 className="text-[16px] font-bold text-[#0f172a] mb-2">{c.title}</h3>
                <div className="text-[14px] text-[#0f172a] leading-[1.75]">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="bg-white pt-0 pb-[72px] px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#2563eb] m-0">Portfolio</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-[#0f172a] leading-[1.2] mb-4">Real results. Recognised brands.</h2>
          <p className="text-[14px] text-[#0f172a] leading-[1.8] mb-8 max-w-[620px]">16 years of senior Google Ads across internationally recognised names.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { brand: "Toyota & Lexus", year: "2021–22", stats: [["500%+","Traffic to dealership sites with the same budget"],["100%+","Lead volume and test-drive requests increased"],["Full rebuild","Toyota's entire tracking and attribution system"]], tags: ["Automotive","Search","Lead gen"] },
              { brand: "Virgin Media O2", year: "2022–23", stats: [["0 → 2,000","B2B inbound leads per month — built from zero"],["Full migration","All paid accounts brought in-house"],["End-to-end","Always-on omni-channel funnel from scratch"]], tags: ["B2B","Enterprise","Lead gen"] },
              { brand: "Select Property Group", year: "2015–17", stats: [["£35M+","Revenue in one month — 120% above previous record"],["Global","Hnwi leads from Uk, Hk, Singapore, Dubai, Usa"]], tags: ["Property","Hnwi","Lead gen"] },
            ].map((c) => (
              <div key={c.brand} className="bg-[#1e293b] border border-[#334155] rounded-xl overflow-hidden">
                <div className="bg-[#1e3a5f] border-b border-[#2563eb]/20 px-4 py-3 flex justify-between items-center">
                  <span className="font-serif text-[14px] font-bold text-white">{c.brand}</span>
                  <span className="text-[14px] text-[#60a5fa]">{c.year}</span>
                </div>
                <div className="p-4">
                  {c.stats.map(([num, desc], i) => (
                    <div key={i} className={`flex items-baseline gap-2.5 ${i < c.stats.length - 1 ? "border-b border-[#334155] pb-3 mb-3" : "mb-3"}`}>
                      <span className="font-serif text-[14px] font-bold text-[#60a5fa] whitespace-nowrap flex-shrink-0">{num}</span>
                      <span className="text-[14px] text-white leading-[1.5]">{desc}</span>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {c.tags.map(t => <span key={t} className="bg-[#0f172a] border border-[#334155] text-[#60a5fa] text-[14px] px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { brand: "Destinology", year: "2017–20", stats: [["63% drop","Cpl reduced from £120 to £45"],["Hnwi geo","Targeted areas with £500k+ house prices"]], tags: ["Luxury travel","Lead gen"] },
              { brand: "SixStarHolidays", year: "2014–15", stats: [["120%","Lead volume increase with just 12% more budget"],["£100 → £36","New customer acquisition cost reduced by 64%"]], tags: ["Travel","Lead gen"] },
              { brand: "Pod Digital Agency", year: "2023–25", stats: [["8 clients","Search, Shopping and Performance Max"],["All accounts","Improved Roas and leads on every account"]], tags: ["Agency","White-label"] },
            ].map((c) => (
              <div key={c.brand} className="bg-[#1e293b] border border-[#334155] rounded-xl overflow-hidden">
                <div className="bg-[#1e3a5f] border-b border-[#2563eb]/20 px-4 py-3 flex justify-between items-center">
                  <span className="font-serif text-[14px] font-bold text-white">{c.brand}</span>
                  <span className="text-[14px] text-[#60a5fa]">{c.year}</span>
                </div>
                <div className="p-4">
                  {c.stats.map(([num, desc], i) => (
                    <div key={i} className={`flex items-baseline gap-2.5 ${i < c.stats.length - 1 ? "border-b border-[#334155] pb-3 mb-3" : "mb-3"}`}>
                      <span className="font-serif text-[14px] font-bold text-[#60a5fa] whitespace-nowrap flex-shrink-0">{num}</span>
                      <span className="text-[14px] text-white leading-[1.5]">{desc}</span>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {c.tags.map(t => <span key={t} className="bg-[#0f172a] border border-[#334155] text-[#60a5fa] text-[14px] px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOT AN AGENCY ── */}
      <section className="bg-[#f1f5f9] py-[72px] px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#2563eb] m-0">Why not an agency</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-[#0f172a] leading-[1.2] mb-4">
            Why a senior PPC freelancer and Google Ads specialist beats an agency
          </h2>
          <p className="text-[14px] text-[#0f172a] leading-[1.8] mb-8 max-w-[620px]">
            You&apos;ve probably been burned before. Here&apos;s the honest comparison.
          </p>
          <div className="border border-[#e2e8f0] rounded-xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#f1f5f9] text-[14px] text-[#0f172a] font-bold p-3 text-left border-b border-[#e2e8f0] w-[200px]"></th>
                  <th className="bg-[#f1f5f9] text-[14px] text-[#dc2626] font-bold p-3 text-left border-b border-l border-[#e2e8f0]">✕ Typical agency or manager</th>
                  <th className="bg-[#f1f5f9] text-[14px] text-[#16a34a] font-bold p-3 text-left border-b border-l border-[#e2e8f0]">✓ Christopher + A.C.T</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Who manages your account","Junior exec, 30+ accounts","Senior specialist. 16 years. Personal."],
                  ["How decisions are made","Gut feel and guesswork","41 rules, data-driven triggers"],
                  ["Ai and automation","Buzzword on the pitch deck","Proprietary engine built from scratch"],
                  ["When things go wrong","Manual detection, slow response","Auto-rollback on Kpi degradation"],
                  ["Change logging","Nothing documented","Full audit trail, every change logged"],
                  ["Reporting","Tables full of metrics","Plain-English summaries + reasoning"],
                  ["Account attention","Spread across 30+ accounts","Maximum 4 clients. Senior-only."],
                  ["Safety guardrails","None — reckless automation possible","Magnitude limits, cooldowns, data checks"],
                ].map(([label, bad, good], i) => (
                  <tr key={i} className="border-b border-[#e2e8f0] last:border-b-0">
                    <td className="p-3 text-[14px] font-bold text-[#0f172a] bg-white">{label}</td>
                    <td className="p-3 text-[14px] text-[#0f172a] bg-white border-l border-[#e2e8f0]">{bad}</td>
                    <td className="p-3 text-[14px] text-[#16a34a] font-semibold bg-white border-l border-[#e2e8f0]">{good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-7 text-center">
            <a href="#audit" className="bg-[#2563eb] text-white text-[14px] font-bold px-7 py-[14px] rounded-lg no-underline inline-block">Get a free PPC audit →</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-white py-[72px] px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#2563eb] m-0">FAQs</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-[#0f172a] leading-[1.2] mb-2">Common questions.</h2>
          <FaqSection />
        </div>
      </section>

      {/* ── LET'S TALK ── */}
      <section id="audit" className="bg-[#0f172a] py-[72px] px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-px bg-[#2563eb]"></div>
            <h3 className="text-[20px] font-bold tracking-[1px] text-[#60a5fa] m-0">Let&apos;s talk</h3>
          </div>
          <h2 className="font-serif text-[30px] font-bold text-white leading-[1.2] mb-4">Request your free PPC audit</h2>
          <p className="text-[14px] text-white leading-[1.8] max-w-[620px] mb-8">
            Whether you&apos;re a Uk business looking for senior Google Ads management or an agency needing a specialist partner — let&apos;s talk.
          </p>

          {/* WhatsApp box */}
          <div className="bg-[#f0fdf4] border-2 border-[#25D366] rounded-xl p-7 mb-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-mono text-[14px] font-bold text-[#15803d] mb-1">Message me directly on WhatsApp</h3>
              <p className="font-mono text-[14px] text-[#16a34a] leading-relaxed mb-1">Fastest way to reach me. I respond promptly during business hours.</p>
              <p className="font-mono text-[14px] text-[#16a34a]">Send your name, company, and what you&apos;re looking for.</p>
              <p className="font-mono text-[14px] font-bold text-[#16a34a] mt-2">+44 7999 500 184</p>
            </div>
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('ppc-freelancer - contact')} className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-7 py-[14px] rounded-lg font-mono text-[14px] font-bold no-underline">💬 Message on WhatsApp</a>
              <span className="font-mono text-[14px] text-[#16a34a]">⚡ Fastest response</span>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-7">
            <div className="flex-1 h-px bg-[#334155]"></div>
            <span className="font-mono text-[14px] text-[#475569]">Or send me a message</span>
            <div className="flex-1 h-px bg-[#334155]"></div>
          </div>

          {/* Form + What happens next */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              {isSuccess && (
                <div className="mb-5 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-green-100 font-mono text-[14px] m-0">Thank you! I&apos;ll be in touch soon.</p>
                </div>
              )}
              {isError && (
                <div className="mb-5 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-center gap-2">
                  <span className="text-red-400 text-xl">✕</span>
                  <p className="text-red-100 font-mono text-[14px] m-0">{errorMessage}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="bg-[#1e293b] border border-[#334155] rounded-xl p-7">
                <div className="font-mono text-[14px] font-bold text-[#60a5fa] mb-5">Prefer email? Send me a message</div>
                {[
                  { label: "Name *", name: "name", type: "text", placeholder: "Your name", required: true },
                  { label: "Company *", name: "company", type: "text", placeholder: "Company name", required: true },
                  { label: "Email *", name: "email", type: "email", placeholder: "your@email.com", required: true },
                  { label: "Phone (optional)", name: "phone", type: "tel", placeholder: "+44 7700 000 000", required: false },
                ].map(f => (
                  <div key={f.name} className="mb-4">
                    <label className="block text-[14px] text-[#60a5fa] mb-1.5 font-mono">{f.label}</label>
                    <input type={f.type} name={f.name} value={(formData as Record<string,string>)[f.name]} onChange={handleChange} required={f.required} placeholder={f.placeholder} disabled={isLoading} className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-3 text-[14px] text-white font-mono focus:outline-none focus:border-[#2563eb]" />
                  </div>
                ))}
                <div className="mb-5">
                  <label className="block text-[14px] text-[#60a5fa] mb-1.5 font-mono">Monthly Google Ads budget *</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} required disabled={isLoading} className="w-full bg-[#0f172a] border border-[#334155] rounded px-3 py-3 text-[14px] text-white font-mono focus:outline-none focus:border-[#2563eb] appearance-none">
                    <option value="">Select range</option>
                    <option value="under-1k">Under £1,000/mo</option>
                    <option value="1k-3k">£1,000 – £3,000/mo</option>
                    <option value="3k-10k">£3,000 – £10,000/mo</option>
                    <option value="10k-30k">£10,000 – £30,000/mo</option>
                    <option value="30k-plus">£30,000+/mo</option>
                  </select>
                </div>
                <button type="submit" disabled={isLoading} className="w-full bg-[#2563eb] text-white py-3.5 text-[14px] font-bold tracking-wide rounded font-mono disabled:opacity-50 disabled:cursor-not-allowed">
                  {isLoading ? "Sending..." : "Get a free PPC audit"}
                </button>
              </form>
            </div>

            <div>
              <div className="text-[14px] font-bold text-[#60a5fa] font-mono mb-5">What happens next:</div>
              {[
                { n: 1, title: "I review your application", body: "I review based on account size and goals to assess if there's a good fit." },
                { n: 2, title: "Fit call (30 min)", body: "Discuss your account, current challenges, and goals. I'll demo A.C.T and show you the dashboard live." },
                { n: 3, title: "Onboarding audit (2 weeks)", body: "Deep dive into tracking, structure, and measurement. We fix the foundation before optimising." },
              ].map(s => (
                <div key={s.n} className="flex gap-4 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#2563eb] text-white text-[14px] font-bold flex items-center justify-center flex-shrink-0 font-mono">{s.n}</div>
                  <div>
                    <div className="text-[14px] font-bold text-white mb-1 font-mono">{s.title}</div>
                    <div className="text-[14px] text-white leading-[1.7] font-mono">{s.body}</div>
                  </div>
                </div>
              ))}
              <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-4 mt-2">
                <div className="text-[14px] text-[#60a5fa] mb-1">16 years of experience · Proprietary Ai · Zero compromises</div>
                <div className="text-[14px] text-white">Maximum 4 clients. Currently accepting new partnerships.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp('ppc-freelancer - floating')}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#1eb857] transition-colors"
        aria-label="Message on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.099 1.523 5.824L0 24l6.341-1.498A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.373l-.36-.213-3.767.89.952-3.665-.234-.376A9.818 9.818 0 1 1 12 21.818z"/>
        </svg>
      </a>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a1a] border-t border-[#1e293b]">
        <div className="py-14 px-6 text-center border-b border-[#1e293b]">
          <h3 className="font-serif text-[30px] font-bold text-white leading-[1.3] mb-3">
            16 years of experience.<br />
            <span className="text-[#2563eb]">Proprietary Ai.</span> Zero compromises.
          </h3>
          <p className="font-mono text-[14px] text-white mb-6">Maximum 4 clients. Currently accepting new partnerships.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('ppc-freelancer - footer')} className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-lg font-mono text-[14px] font-bold no-underline">💬 Message on WhatsApp</a>
            <a href="#audit" className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3.5 rounded-lg font-mono text-[14px] font-bold no-underline">Let&apos;s discuss your paid ads</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-10 max-w-[1100px] mx-auto border-b border-[#1e293b]">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/act_logo.svg" alt="A.C.T Logo" width={36} height={36} />
              <span className="font-serif text-[14px] font-bold text-white">Christopher Hoole</span>
            </div>
            <div className="font-mono text-[14px] text-[#60a5fa] mb-2">PPC Freelancer</div>
            <div className="font-mono text-[14px] text-white leading-[1.8]">Senior Google Ads management.<br />Proprietary Ai engine.<br />Maximum 4 clients.</div>
          </div>
          <div>
            <div className="font-mono text-[14px] font-bold text-[#60a5fa] mb-3">Navigation</div>
            {[["#about","About me"],["#portfolio","Portfolio"],["#act","A.C.T platform"],["#faq","FAQs"],["#audit","Contact"]].map(([href,label]) => (
              <a key={label} href={href} className="block font-mono text-[14px] text-white no-underline mb-2">{label}</a>
            ))}
          </div>
          <div>
            <div className="font-mono text-[14px] font-bold text-[#60a5fa] mb-3">Get in touch</div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('ppc-freelancer - footer')} className="block font-mono text-[14px] text-[#25D366] no-underline mb-2">💬 WhatsApp +44 7999 500 184</a>
            <a href="https://www.linkedin.com/in/christopherhooleuk/" target="_blank" rel="noopener noreferrer" className="block font-mono text-[14px] text-white no-underline">🔗 LinkedIn</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 max-w-[1100px] mx-auto gap-2">
          <span className="font-mono text-[14px] text-[#475569]">© 2026 Christopher Hoole</span>
          <span className="font-mono text-[14px] text-[#475569]">
            <a href="/privacy-policy" className="text-[#475569] no-underline">Privacy Policy</a> · <a href="/terms" className="text-[#475569] no-underline">Terms of Service</a>
          </span>
          <span className="font-mono text-[14px] text-[#475569]">Designed and built by Christopher Hoole</span>
        </div>
      </footer>

    </main>
  );
}

// FAQ sub-component with accordion
function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What size accounts do you work with?", a: "I work with UK businesses spending between £2,000 and £100,000 per month on Google Ads. As a freelance PPC manager, I focus on accounts where senior specialist attention makes a meaningful difference to results." },
    { q: "What do you not do?", a: "I don't manage Meta Ads, TikTok, or programmatic as a primary service. I'm a Google Ads freelancer — Search, Shopping, and Performance Max is my focus. I don't work with accounts spending under £2,000/month." },
    { q: "How is this different from hiring an agency?", a: "At an agency, your account is managed by a junior PPC executive handling 30+ accounts. As a freelance PPC consultant, I personally manage every account I take on. Maximum 4 clients. Senior expertise on every account, every day." },
    { q: "Is A.C.T a SaaS product I can buy?", a: "No. A.C.T is my proprietary Google Ads AI engine — it's my competitive advantage as a freelance PPC specialist, not a product for sale. Every client benefits from it, but it's not available separately." },
    { q: "Can I see A.C.T in action?", a: "Yes — I demo A.C.T live on every fit call. You'll see the dashboard, the recommendations, and the reasoning behind every change. It's one of the key differences between working with a freelance Google Ads manager like me versus a standard agency." },
    { q: "What if my performance drops while working with you?", a: "A.C.T has automatic rollback triggers — if KPIs degrade by 15% or more, the system flags it immediately. As your freelance PPC expert, I review every alert and act fast. You're never left wondering what happened." },
    { q: "Can you take over an existing account or do you start from scratch?", a: "Both. Most clients come to me with existing Google Ads accounts. As a freelance PPC consultant, I start with a 2-week onboarding audit — fixing tracking, restructuring where needed, and building a clear optimisation plan before making any changes." },
    { q: "Can you work with my existing agency or team?", a: "Yes. Some clients use me as their dedicated Google Ads freelancer while keeping their broader agency for other channels. I can work alongside existing teams with clear scope separation." },
    { q: "What's the minimum commitment?", a: "There's no minimum contract. I don't believe in locking clients in. As a freelance PPC manager, I'd rather earn your trust month by month. Most clients stay long-term because the results speak for themselves." },
  ];
  return (
    <div className="max-w-[700px] mt-7">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#e2e8f0]">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center py-4 text-left gap-4 bg-transparent border-none cursor-pointer">
            <span className="font-mono text-[14px] font-bold text-[#0f172a]">{faq.q}</span>
            <span className="text-[#2563eb] text-[14px] leading-none flex-shrink-0" style={{transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s"}}>+</span>
          </button>
          <div className={`pb-4 font-mono text-[14px] text-[#0f172a] leading-[1.75]${open === i ? "" : " hidden"}`}>{faq.a}</div>
        </div>
      ))}
    </div>
  );
}
