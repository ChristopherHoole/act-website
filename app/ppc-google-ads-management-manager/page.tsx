"use client";

import "./styles.css";
import { useState } from "react";

const WA_URL =
  "https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%20found%20your%20ppc-management%20page%20and%20I%27d%20like%20to%20discuss%20Google%20Ads%20management.";

export default function PPCManagementManagerPage() {
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
        event_label: "ppc-management-manager - contact form",
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
          source: "ppc-google-ads-management-manager",
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
      q: "What does your PPC management include?",
      a: "Everything you\u2019d expect from professional Google Ads management \u2014 campaign builds, keyword research, ad copy, bid management, conversion tracking, and ongoing optimisation. The difference is that your paid search management is handled personally by a senior specialist with 16 years experience, not a junior or an automated tool. That\u2019s what proper adwords management looks like.",
    },
    {
      q: "Will I have a dedicated Google Ads manager?",
      a: "Yes \u2014 me. I\u2019m your dedicated PPC manager from day one. You won\u2019t be passed between account managers or have a different gads manager every few months. I take a maximum of 4 clients at any time, so your Google Ads management gets the attention it deserves. When you message me, you\u2019re messaging the person who actually manages your campaigns.",
    },
    {
      q: "How is your PPC management different from an agency?",
      a: "At most agencies, your pay per click management is handled by a junior exec managing 15\u201320 accounts. Your \u2018paid search manager\u2019 is really just an account manager who doesn\u2019t touch the campaigns. With me, the person you speak to is the same person optimising your ads. Senior-level paid ads management with direct access \u2014 no middlemen, no layers.",
    },
    {
      q: "What\u2019s the minimum commitment?",
      a: "No minimum contract. I work month to month. I\u2019d rather earn your trust through results than lock you into a contract like most Google AdWords management providers do. If my adwords management isn\u2019t delivering, you\u2019re free to leave at any time.",
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
              PPC Management &middot; Google Ads Manager &middot; UK
            </div>
            <h1>
              Looking for Google Ads management?<br /> Hands-on PPC management by one <em>senior specialist.</em>
            </h1>
            <p className="hero-sub">
              Not an intern.
              <br />
              A dedicated Google Ads manager with 16 years of hands-on experience managing £50M+ in ad spend.
              <br />
              Your PPC management is handled personally by me &mdash; from strategy to optimisation to reporting.
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
                  Senior PPC Manager &middot; 16 years &middot; £50M+ managed
                </div>
              </div>
            </div>
            <div className="cta-stack">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                onClick={() => trackWhatsApp("ppc-management - hero")}
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
              alt="Christopher Hoole — Senior PPC Manager & Google Ads Management Specialist"
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

      {/* ── WHAT YOU GET ── */}
      <section className="section">
        <div className="section-tag">What you get</div>
        <h2>What proper Google Ads management looks like</h2>
        <p className="section-intro">
          Most PPC management is set-and-forget.
          <br />
          Mine isn&apos;t.
          <br />
          Here&apos;s what&apos;s included when you work with a dedicated paid search manager:
        </p>
        <div className="waste-list">
          {[
            {
              title: "Full campaign management",
              desc: "Campaign builds, keyword research, ad copy, bid management, and ongoing optimisation. Proper pay per click management \u2014 not an automated tool running on autopilot",
            },
            {
              title: "Proactive optimisation",
              desc: "I don\u2019t wait for things to go wrong. Your Google Ads management includes weekly optimisation \u2014 reviewing search terms, adjusting bids, testing ads, and cutting waste. That\u2019s what separates good gads management from bad",
            },
            {
              title: "Conversion tracking & attribution",
              desc: "Proper tracking from day one \u2014 GA4, Google Ads conversion tags, call tracking. Most paid ads management providers get this wrong. I set it up properly so every lead and sale is tracked accurately",
            },
            {
              title: "Monthly reporting in plain English",
              desc: "Clear reports showing what\u2019s working, what\u2019s not, and what we\u2019re doing about it. No vanity metrics. Your paid search management reports tell you what actually matters",
            },
            {
              title: "Strategy & growth planning",
              desc: "I don\u2019t just manage campaigns. As your dedicated Google AdWords manager, I advise on budgets, new opportunities, and long-term growth \u2014 the strategic thinking that most adwords management providers skip",
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
            onClick={() => trackWhatsApp("ppc-management - what-you-get")}
          >
            💬 Get my free waste report
          </a>
          <p className="cta-note" style={{ marginTop: "10px" }}>
            I&apos;ll show you exactly where your budget is going
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section alt">
        <div className="section-tag">Who this is for</div>
        <h2>This is for you if…</h2>
        <div className="who-list">
          {[
            "You\u2019re looking for professional PPC management but don\u2019t want the typical agency experience \u2014 juniors, middlemen, and long contracts",
            "You\u2019ve had a Google Ads manager before who didn\u2019t deliver \u2014 and you want someone senior who actually knows what they\u2019re doing",
            "You\u2019re spending between \u00a32,000 and \u00a3100,000/month on Google Ads and want a dedicated paid ads manager who treats your budget like their own",
            "You want hands-on adwords management with direct access to the person optimising your campaigns \u2014 not a ticket system or account manager",
          ].map((text) => (
            <div key={text} className="who-item">
              <div className="who-check">✓</div>
              <div className="who-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY ME VS TYPICAL MANAGEMENT (D1) ── */}
      <section className="section">
        <div className="section-tag">Why choose me</div>
        <h2>Typical PPC management vs. your dedicated manager</h2>
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
                This is your dedicated PPC manager.
              </div>
            </div>
          </div>
          <div className="compare-table">
            <div className="compare-header">
              <div className="compare-header-cell">Typical PPC management</div>
              <div className="compare-header-cell">Your dedicated manager</div>
            </div>
            {[
              ["Junior exec managing 15\u201320 accounts", "Senior Google Ads manager. 16 years. Max 4 clients."],
              ["Account manager who doesn\u2019t touch campaigns", "Direct access to the person doing the work"],
              ["6\u201312 month lock-in contracts", "Month to month. No lock-in."],
              ["Set-and-forget, reactive approach", "Proactive weekly optimisation"],
              ["Generic reports full of vanity metrics", "Plain-English reporting that tells you what matters"],
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
              Your dedicated Google Ads manager.
              <br />
              Not a team. Not a bot.
              <br />
              One senior specialist. 16 years.
            </div>
            <div className="personal-strip-sub">
              Your PPC management is handled by me personally &mdash; not handed off to a junior or run by an algorithm.
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
          Request your free Google Ads waste report
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--grey-600)",
            marginBottom: "32px",
          }}
        >
          Whether you&apos;re looking for a new PPC manager or want to see if your current Google AdWords management is wasting budget &mdash; get in touch today.
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
            onClick={() => trackWhatsApp("ppc-management - contact")}
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
            <label>Monthly Google Ads spend *</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              disabled={isLoading}
            >
              <option value="">Select range</option>
              <option value="under-2k">Under £2,000/mo</option>
              <option value="2k-5k">£2,000 – £5,000/mo</option>
              <option value="5k-15k">£5,000 – £15,000/mo</option>
              <option value="15k-50k">£15,000 – £50,000/mo</option>
              <option value="50k-plus">£50,000+/mo</option>
            </select>
          </div>
          <div className="field">
            <label>Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your business and what you're looking for..."
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="btn-submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Request free waste report →"}
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
        <h2>What happens next</h2>
        <div className="process-list">
          {[
            {
              title: "Request your free waste report",
              desc: "Message me on WhatsApp or fill in the form above. I\u2019ll need your name, company, and monthly ad spend. You\u2019ll hear back from me personally \u2014 your future PPC manager, not a sales team.",
            },
            {
              title: "I audit your Google Ads account",
              desc: "I\u2019ll manually review your account and produce a plain-English waste report. No automated tools. This is the kind of thorough paid search management audit that shows you exactly where budget is being wasted and what to fix.",
            },
            {
              title: "We discuss the findings",
              desc: "We go through the report together. You\u2019ll see what proper Google Ads management looks like \u2014 and decide if you want a dedicated gads manager handling your campaigns going forward.",
            },
            {
              title: "I manage your Google Ads",
              desc: "If we\u2019re a good fit, I take over your campaigns. You get hands-on paid ads management from a senior adwords manager who knows your account inside out. No juniors, no middlemen, no autopilot.",
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
          PPC Management &middot; Google Ads Manager &middot; Google AdWords Management &middot; Paid Search Manager &middot; Pay Per Click Management &amp; Gads Manager &middot; AdWords Manager &middot; Paid Ads Management &middot; Maximum 4
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
          onClick={() => trackWhatsApp("ppc-management - sticky")}
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
