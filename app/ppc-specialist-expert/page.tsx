"use client";

import "./styles.css";
import { useState } from "react";

const WA_URL =
  "https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%20found%20your%20ppc-specialist%20page%20and%20I%27d%20like%20to%20discuss%20my%20Google%20Ads.";

export default function PPCSpecialistExpertPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const trackWhatsApp = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: label,
      });
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18006514629/whatsapp_click",
        event_label: label,
      });
    }
  };

  const trackFormSubmit = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submit", {
        event_category: "conversion",
        event_label: "ppc-specialist-expert - contact form",
      });
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18006514629/fxGxCNeunoYcEMW3lopD",
        value: 40.0,
        currency: "GBP",
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
          budget: formData.budget,
          message: formData.message.trim(),
          source: "ppc-specialist-expert",
        }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      trackFormSubmit();
      setIsSuccess(true);
      setFormData({ name: "", company: "", email: "", budget: "", message: "" });
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        "Something went wrong. Please try again or message me on WhatsApp."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What size accounts does a paid search expert like you work with?",
      a: "UK businesses spending between \u00a32,000 and \u00a3100,000/month on Google Ads. I focus on accounts where senior pay per click specialist attention makes a meaningful difference to results.",
    },
    {
      q: "What\u2019s involved in the free waste report?",
      a: "You give me read-only access to your Google Ads account. I manually review your campaigns, keywords, search terms, bidding, tracking, and conversion data. I send you a plain-English report within 24 hours. No tools, no automation \u2014 just a senior Google Ads expert looking at your account.",
    },
    {
      q: "How is a Google AdWords expert different from an agency?",
      a: "An agency spreads junior staff across dozens of accounts. An AdWords specialist like me works with a maximum of four clients at any time, giving your account the senior-level focus it needs. Every decision is made by a Google Ads expert with 16 years of hands-on experience.",
    },
    {
      q: "What\u2019s the minimum commitment if I want to work together?",
      a: "There\u2019s no minimum contract. I\u2019d rather earn your trust month by month. Most clients stay long-term because the results speak for themselves.",
    },
  ];

  return (
    <div className="ppc-lp">
      {/* ── NAV ── */}
      <nav className="nav">
        <a href="/" className="nav-brand">
          <img src="/act_logo.svg" alt="A.C.T Logo" width={28} height={28} />
          <span className="nav-name">Christopher Hoole</span>
        </a>
        <a href="#contact" className="nav-cta">
          Free waste report
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-eyebrow">
              PPC Specialist &middot; Senior Level &middot; UK
            </div>
            <h1>
              Looking for a PPC specialist?<br /> Is your Google Ads budget being <em>wasted?</em> Find out free.
            </h1>
            <p className="hero-sub">
              I&apos;m a senior Google Ads specialist and pay per click expert with 16 years of hands-on experience.
              I&apos;ll analyse your account and send you a plain-English waste report &mdash; showing exactly where your budget is going and what to fix.
              Free.
              No obligation.
              10 minutes of your time.
            </p>
            <div className="hero-person">
              <div className="hero-photo">
                <img
                  src="/christopher-headshot.jpg"
                  alt="Christopher Hoole"
                />
              </div>
              <div className="hero-person-text">
                <div className="hero-person-name">Christopher Hoole</div>
                <div className="hero-person-sub">
                  Senior PPC Specialist &middot; 16 years &middot; £50M+ managed
                </div>
              </div>
            </div>
            <div className="cta-stack">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                onClick={() => trackWhatsApp("ppc-specialist-expert - hero")}
              >
                💬 Get my free waste report (WhatsApp)
              </a>
              <a href="#contact" className="btn-email">
                Request via email form →
              </a>
            </div>
            <p className="cta-note">
              No obligation &middot; Free &middot; Typically delivered within 24
              hours
            </p>
          </div>
          <div className="hero-desktop-photo">
            <img
              src="/christopher-headshot.jpg"
              alt="Christopher Hoole — Senior PPC Specialist & Google Ads Expert"
            />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust">
        {[
          { num: "16 yrs", label: "Experience" },
          { num: "£50M+", label: "Ad spend managed" },
          { num: "100+", label: "Accounts optimised" },
          { num: "Max 4", label: "Clients at once" },
        ].map((item) => (
          <div key={item.label} className="trust-item">
            <span className="trust-num">{item.num}</span>
            <span className="trust-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── WASTE REPORT ── */}
      <section className="section">
        <div className="section-tag">Free waste report</div>
        <h2>What&apos;s inside your free Google Ads waste report</h2>
        <p className="section-intro">
          I manually review your account and produce a plain-English report.
          <br />
          No automated tool.
          <br />
          No generic recommendations.
          <br />
          Here&apos;s exactly what a senior PPC expert looks at:
        </p>
        <div className="waste-list">
          {[
            {
              title: "Budget waste — keyword by keyword",
              desc: "Exact keywords, match types, and search terms burning your budget with no conversions",
            },
            {
              title: "Quality Score analysis",
              desc: "Why your QS is low, what it\u2019s costing you per click, and what to fix first",
            },
            {
              title: "Conversion tracking health check",
              desc: "Whether your conversions are being tracked correctly \u2014 gaps, duplicates, and attribution issues",
            },
            {
              title: "Bid and bidding strategy review",
              desc: "Whether your bidding strategy is right for your stage, budget, and conversion data",
            },
            {
              title: "Priority fix list",
              desc: "Plain-English summary of what to fix first and the likely impact on your cost per lead",
            },
          ].map((item, i) => (
            <div key={item.title} className="waste-item">
              <div className="waste-num">{i + 1}</div>
              <div>
                <div className="waste-title">{item.title}</div>
                <div className="waste-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "28px" }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ maxWidth: "400px" }}
            onClick={() => trackWhatsApp("ppc-specialist-expert - waste-report")}
          >
            💬 Get my free waste report
          </a>
          <p className="cta-note" style={{ marginTop: "10px" }}>
            Send me a WhatsApp and I&apos;ll request read-only access to your
            account
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section alt">
        <div className="section-tag">Who this is for</div>
        <h2>This is for you if…</h2>
        <div className="who-list">
          {[
            "You\u2019re spending between \u00a32,000 and \u00a3100,000/month on Google Ads",
            "You suspect budget is being wasted but don\u2019t know exactly where",
            "You\u2019re not getting the results your agency or current manager promised",
            "You want a senior paid search specialist \u2014 not a junior exec \u2014 looking at your account",
          ].map((text) => (
            <div key={text} className="who-item">
              <div className="who-check">✓</div>
              <div className="who-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY NOT AGENCY (D1) ── */}
      <section className="section">
        <div className="section-tag">Why not an agency</div>
        <h2>Why a senior PPC specialist beats an agency</h2>
        <div className="agency-layout">
          <div className="agency-headshot">
            <img
              className="agency-headshot-img"
              src="/christopher-headshot.jpg"
              alt="Christopher Hoole"
            />
            <div>
              <div className="agency-headshot-name">Christopher Hoole</div>
              <div className="agency-headshot-role">
                This is who works on your account.
              </div>
            </div>
          </div>
          <div className="compare-table">
            <div className="compare-header">
              <div className="compare-header-cell">Typical agency</div>
              <div className="compare-header-cell">Christopher + A.C.T</div>
            </div>
            {[
              ["Junior exec, 30+ accounts", "Senior PPC expert. Personal."],
              ["Gut feel, no audit trail", "41 rules, every change logged"],
              [
                "\u201CAI\u201D on the pitch deck",
                "Proprietary AI built from scratch",
              ],
              [
                "Spread across 30+ clients",
                "Maximum 4 clients. Full focus.",
              ],
            ].map(([bad, good], i) => (
              <div key={i} className="compare-row">
                <div className="compare-cell">{bad}</div>
                <div className="compare-cell">{good}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="section alt">
        <div className="section-tag">Results</div>
        <h2>Real results. Recognised brands.</h2>
        <div className="results-grid">
          {[
            {
              client: "Toyota & Lexus",
              stats: [
                { num: "500%+", desc: "traffic increase, same budget" },
                { num: "100%+", desc: "lead volume increase" },
              ],
              tags: ["Automotive", "Search", "Lead gen"],
            },
            {
              client: "Virgin Media O2",
              stats: [
                { num: "0→2,000", desc: "B2B leads/month, from zero" },
              ],
              tags: ["B2B", "Enterprise", "Lead gen"],
            },
            {
              client: "Destinology",
              stats: [
                { num: "63%", desc: "CPL reduction — £120 to £45" },
              ],
              tags: ["Luxury travel", "Lead gen"],
            },
          ].map((card) => (
            <div key={card.client} className="result-card">
              <div className="result-header">
                <span className="result-client">{card.client}</span>
              </div>
              <div className="result-body">
                {card.stats.map((stat) => (
                  <div key={stat.num} className="result-stat">
                    <span className="result-num">{stat.num}</span>
                    <span className="result-desc">{stat.desc}</span>
                  </div>
                ))}
                <div className="result-tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="result-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERSONAL STRIP (D3) ── */}
      <section className="personal-strip">
        <div className="personal-strip-inner">
          <div className="personal-strip-photo">
            <img
              src="/christopher-headshot.jpg"
              alt="Christopher Hoole"
            />
          </div>
          <div className="personal-strip-text">
            <div className="personal-strip-quote">
              Senior paid search expert.
              <br />
              Google AdWords specialist.
              <br />
              16 years experience.
              <br />
              Maximum 4 clients at any time.
            </div>
            <div className="personal-strip-sub">
              Your account is managed by me personally &mdash; not handed off to
              a junior.
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="section">
        <div className="section-tag">FAQs</div>
        <h2>Common questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className={`faq-q${openFaq === i ? " open" : ""}`}
                onClick={() => toggleFaq(i)}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              <div className={`faq-a${openFaq === i ? " open" : ""}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="form-section" id="contact">
        <div className="section-tag">Get in touch</div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(24px, 6vw, 36px)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.3px",
            marginBottom: "12px",
          }}
        >
          Request your free waste report
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--grey-600)",
            marginBottom: "32px",
          }}
        >
          Whether you want to start with the free report or discuss working
          with a dedicated Google Ads specialist &mdash; get in touch today.
        </p>

        <div className="wa-card">
          <div className="wa-card-title">
            💬 Fastest &mdash; Message on WhatsApp
          </div>
          <div className="wa-card-sub">
            I respond promptly during UK business hours.
            <br />
            Send your name, company, and monthly ad spend.
          </div>
          <div className="wa-card-num">+44 7999 500 184</div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            onClick={() => trackWhatsApp("ppc-specialist-expert - contact")}
          >
            Message on WhatsApp ⚡
          </a>
        </div>

        <div className="divider">or email me</div>

        <div className="form-title">Send me a message</div>

        {isSuccess && (
          <div className="form-success">
            <span>✓</span> Thank you! I&apos;ll be in touch soon.
          </div>
        )}
        {isError && (
          <div className="form-error">
            <span>✕</span> {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              disabled={isLoading}
            />
          </div>
          <div className="field">
            <label>Company *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
              disabled={isLoading}
            />
          </div>
          <div className="field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              disabled={isLoading}
            />
          </div>
          <div className="field">
            <label>Monthly Google Ads budget *</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              disabled={isLoading}
            >
              <option value="">Select range</option>
              <option value="under-1k">Under £1,000/mo</option>
              <option value="1k-3k">£1,000 – £3,000/mo</option>
              <option value="3k-10k">£3,000 – £10,000/mo</option>
              <option value="10k-30k">£10,000 – £30,000/mo</option>
              <option value="30k-plus">£30,000+/mo</option>
            </select>
          </div>
          <div className="field">
            <label>Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your account and what you're looking to achieve..."
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="btn-submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Request free waste report →"}
          </button>
        </form>
        <p className="form-reassurance">
          No obligation &middot; Your details are never shared &middot;
          I&apos;ll respond within 24 hours
        </p>
      </section>

      {/* ── PROCESS ── */}
      <section className="section alt">
        <div className="section-tag">Process</div>
        <h2>What happens next</h2>
        <div className="process-list">
          {[
            {
              title: "You get in touch",
              desc: "WhatsApp or the form above. Tell me your name, company, and monthly ad spend.",
            },
            {
              title: "I request read-only access",
              desc: "I\u2019ll ask for read-only access to your Google Ads account. No changes \u2014 I\u2019m just looking.",
            },
            {
              title: "You receive your waste report",
              desc: "Within 24 hours you\u2019ll have a plain-English breakdown of where your budget is going and what to fix.",
            },
            {
              title: "We discuss next steps (optional)",
              desc: "If you want to work with a dedicated AdWords expert, we book a 30-minute call. No hard sell. No obligation.",
            },
          ].map((step, i) => (
            <div key={step.title} className="process-item">
              <div className="process-num">{i + 1}</div>
              <div>
                <div className="process-title">{step.title}</div>
                <div className="process-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-name">
          <img src="/act_logo.svg" alt="A.C.T Logo" width={28} height={28} />
          <span>Christopher Hoole</span>
        </div>
        <div className="footer-tagline">
          Senior PPC Specialist &middot; Google Ads Expert &middot; Pay Per Click &amp; Paid Search Specialist &middot; Maximum 4
          clients.
        </div>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a> &middot;{" "}
          <a href="/terms">Terms</a>
        </div>
      </footer>

      {/* ── STICKY BAR (mobile) ── */}
      <div className="sticky-spacer"></div>
      <div className="sticky">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-wa"
          onClick={() => trackWhatsApp("ppc-specialist-expert - sticky")}
        >
          💬 Get my free waste report
        </a>
        <a href="#contact" className="sticky-email">
          Request via email form →
        </a>
      </div>
    </div>
  );
}
