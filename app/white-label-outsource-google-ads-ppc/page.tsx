"use client";

import "./styles.css";
import { useState } from "react";

const WA_URL =
  "https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%20found%20your%20white-label-ppc%20page%20and%20I%27d%20like%20to%20discuss%20outsourcing%20Google%20Ads%20management.";

export default function WhiteLabelOutsourcePage() {
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
        event_label: "white-label-outsource - contact form",
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
          source: "white-label-outsource-google-ads-ppc",
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
      q: "How does white label PPC work with your agency?",
      a: "You introduce me as part of your team \u2014 or keep me completely invisible. I manage your clients\u2019 Google Ads accounts under your brand. All reporting, communication, and deliverables can be white-labelled. Your clients never know you\u2019ve partnered with an external paid search specialist.",
    },
    {
      q: "What size accounts can I outsource Google Ads for?",
      a: "I work with client accounts spending between \u00a32,000 and \u00a3100,000/month on Google Ads. Whether you need to outsource pay per click for one key client or white label paid search across several accounts, the service scales to fit. Many agencies outsource gads management to free up their team for other channels.",
    },
    {
      q: "How is this different from other white label Google Ads providers?",
      a: "Most white label gads providers use junior staff managing dozens of accounts. When you outsource Google AdWords to me, you get a senior specialist with 16 years of hands-on experience \u2014 not a junior exec. I take a maximum of 4 agency partners at any time. That\u2019s the difference between a white label Google AdWords service and a generic outsource provider.",
    },
    {
      q: "What\u2019s the minimum commitment?",
      a: "There\u2019s no minimum contract. I\u2019d rather earn your trust month by month. Most agency partners stay long-term because the results speak for themselves and their clients are happy.",
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
          Get in touch
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-eyebrow">
              White Label PPC &middot; Outsource Google Ads &middot; UK
            </div>
            <h1>
              White label PPC &amp; outsource Google Ads.<br /> Your clients. My expertise. <em>Your brand.</em>
            </h1>
            <p className="hero-sub">
              I&apos;m a senior Google Ads specialist with 16 years of hands-on experience.
              I&apos;ll manage your clients&apos; accounts under your brand &mdash; so you can offer white label Google Ads without hiring in-house.
              Outsource PPC to someone who treats your clients&apos; accounts like their own.
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
                onClick={() => trackWhatsApp("white-label-outsource - hero")}
              >
                💬 Discuss a partnership (WhatsApp)
              </a>
              <a href="#contact" className="btn-email">
                Request via email form →
              </a>
            </div>
            <p className="cta-note">
              No obligation &middot; Confidential &middot; I&apos;ll respond within 24
              hours
            </p>
          </div>
          <div className="hero-desktop-photo">
            <img
              src="/christopher-headshot.jpg"
              alt="Christopher Hoole — White Label PPC & Outsource Google Ads Specialist"
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
          { num: "Max 4", label: "Agency partners" },
        ].map((item) => (
          <div key={item.label} className="trust-item">
            <span className="trust-num">{item.num}</span>
            <span className="trust-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── WHAT YOU GET ── */}
      <section className="section">
        <div className="section-tag">What you get</div>
        <h2>What&apos;s included when you outsource Google Ads to me</h2>
        <p className="section-intro">
          Everything your agency needs to offer white label paid search without hiring in-house.
          <br />
          Here&apos;s what I handle for your clients:
        </p>
        <div className="waste-list">
          {[
            {
              title: "Full account management",
              desc: "Campaign builds, keyword research, ad copy, bid management, and ongoing optimisation \u2014 all under your brand",
            },
            {
              title: "White label reporting",
              desc: "Branded reports your clients see as coming from your agency. Monthly or weekly \u2014 whatever your clients expect",
            },
            {
              title: "Conversion tracking setup",
              desc: "Proper tracking from day one \u2014 GA4, Google Ads conversion tags, call tracking, and attribution",
            },
            {
              title: "Strategy and recommendations",
              desc: "I don\u2019t just execute. I advise on strategy, budgets, and growth opportunities so you can outsource paid search with confidence",
            },
            {
              title: "Client call support (optional)",
              desc: "Happy to join client calls as part of your team, or stay completely behind the scenes \u2014 your choice",
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
            onClick={() => trackWhatsApp("white-label-outsource - what-you-get")}
          >
            💬 Let&apos;s discuss your clients
          </a>
          <p className="cta-note" style={{ marginTop: "10px" }}>
            Tell me about the accounts you&apos;re looking to outsource
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section alt">
        <div className="section-tag">Who this is for</div>
        <h2>This is for you if…</h2>
        <div className="who-list">
          {[
            "You\u2019re an agency that needs to outsource Google Ads to a senior specialist",
            "You offer PPC as a service but don\u2019t have the in-house expertise to deliver it",
            "You want to outsource AdWords management without your clients knowing",
            "You need a reliable white label pay per click partner \u2014 someone you can outsource adwords to without worrying",
          ].map((text) => (
            <div key={text} className="who-item">
              <div className="who-check">✓</div>
              <div className="who-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY ME VS ALTERNATIVES (D1) ── */}
      <section className="section">
        <div className="section-tag">Why outsource to me</div>
        <h2>Why agencies outsource PPC to me instead of hiring</h2>
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
                This is who manages your clients&apos; accounts.
              </div>
            </div>
          </div>
          <div className="compare-table">
            <div className="compare-header">
              <div className="compare-header-cell">Hiring in-house</div>
              <div className="compare-header-cell">White label with me</div>
            </div>
            {[
              ["£35k–£55k salary + training", "Pay only for accounts managed"],
              ["Junior learning on your clients", "Senior specialist. 16 years."],
              ["Sick days, holidays, turnover", "Consistent delivery, no gaps"],
              ["One person, limited capacity", "Outsource Google AdWords for multiple clients"],
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
              White label Google AdWords specialist.
              <br />
              16 years experience.
              <br />
              Maximum 4 agency partners at any time.
            </div>
            <div className="personal-strip-sub">
              Your clients&apos; accounts are managed by me personally &mdash; not handed off to a junior.
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
          Let&apos;s discuss a white label partnership
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--grey-600)",
            marginBottom: "32px",
          }}
        >
          Whether you want to outsource paid ads for one client or white label adwords across your entire book &mdash; let&apos;s talk.
        </p>

        <div className="wa-card">
          <div className="wa-card-title">
            💬 Fastest &mdash; Message on WhatsApp
          </div>
          <div className="wa-card-sub">
            I respond promptly during UK business hours.
            <br />
            Send your name, agency, and how many accounts you&apos;re looking to outsource.
          </div>
          <div className="wa-card-num">+44 7999 500 184</div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            onClick={() => trackWhatsApp("white-label-outsource - contact")}
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
            <label>Agency *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Agency name"
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
            <label>Total client Google Ads spend *</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              disabled={isLoading}
            >
              <option value="">Select range</option>
              <option value="under-5k">Under £5,000/mo (across clients)</option>
              <option value="5k-15k">£5,000 – £15,000/mo</option>
              <option value="15k-50k">£15,000 – £50,000/mo</option>
              <option value="50k-100k">£50,000 – £100,000/mo</option>
              <option value="100k-plus">£100,000+/mo</option>
            </select>
          </div>
          <div className="field">
            <label>Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your agency and the accounts you're looking to outsource..."
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="btn-submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Start the conversation →"}
          </button>
        </form>
        <p className="form-reassurance">
          100% confidential &middot; Your details are never shared &middot;
          I&apos;ll respond within 24 hours
        </p>
      </section>

      {/* ── PROCESS ── */}
      <section className="section alt">
        <div className="section-tag">Process</div>
        <h2>How the white label partnership works</h2>
        <div className="process-list">
          {[
            {
              title: "We have an intro call",
              desc: "You tell me about your agency, your clients, and what you need. I\u2019ll explain exactly how I work as a white label paid ads partner and how to outsource paid ads seamlessly.",
            },
            {
              title: "I review the accounts",
              desc: "I\u2019ll audit your clients\u2019 Google Ads accounts and put together a plan. You\u2019ll see exactly what I\u2019d do before committing.",
            },
            {
              title: "I manage under your brand",
              desc: "Once we agree, I manage the accounts as if I\u2019m part of your team. White label gads reporting, strategy calls, the lot.",
            },
            {
              title: "Your clients see the results",
              desc: "Better results for your clients means happier clients for your agency. You outsource paid search, I deliver the performance.",
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
          White Label PPC &middot; Outsource Google Ads &middot; White Label Paid Ads &middot; Outsource Pay Per Click &amp; Outsource Gads &middot; Maximum 4
          agency partners.
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
          onClick={() => trackWhatsApp("white-label-outsource - sticky")}
        >
          💬 Discuss a partnership
        </a>
        <a href="#contact" className="sticky-email">
          Request via email form →
        </a>
      </div>
    </div>
  );
}
