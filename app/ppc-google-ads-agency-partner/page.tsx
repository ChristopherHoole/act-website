"use client";

import "./styles.css";
import { useState } from "react";

const WA_URL =
  "https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%20found%20your%20agency-partner%20page%20and%20I%27d%20like%20to%20discuss%20a%20PPC%20partnership.";

export default function AgencyPartnerPage() {
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
        event_label: "agency-partner - contact form",
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
          source: "ppc-google-ads-agency-partner",
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
      q: "What does a Google Ads agency partner actually do?",
      a: "As your Google Ads agency partner, I work alongside your team to deliver PPC results for your clients. I can operate as an extension of your agency \u2014 attending strategy calls, producing reports under your brand, and managing campaigns hands-on. Think of me as your dedicated paid search agency partner who plugs straight into your existing workflow.",
    },
    {
      q: "How is this different from a white label service?",
      a: "A white label provider stays hidden. As a PPC agency partner, I\u2019m more embedded \u2014 I can join client calls, collaborate on strategy, and work directly with your account managers. It\u2019s a deeper partnership than a standard Google AdWords agency partner arrangement. Whether you need a hands-on pay per click agency partner or prefer a more behind-the-scenes setup, I\u2019m flexible.",
    },
    {
      q: "What size accounts do you work with?",
      a: "I work with client accounts spending between \u00a32,000 and \u00a3100,000/month on Google Ads. Whether you need a paid search agency partner for one key account or a gads agency partner across multiple clients, the partnership scales to fit your agency\u2019s needs.",
    },
    {
      q: "What\u2019s the minimum commitment?",
      a: "No minimum contract. I\u2019d rather earn your trust month by month. Most agencies I partner with stay long-term because the results speak for themselves and their clients are happy. That\u2019s how a good AdWords agency partner relationship should work.",
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
              Google Ads Agency Partner &middot; PPC &middot; UK
            </div>
            <h1>
              Looking for a Google Ads agency partner?<br /> Scale your PPC offering without hiring <em>in-house.</em>
            </h1>
            <p className="hero-sub">
              I&apos;m a senior PPC specialist who partners with agencies to deliver Google Ads results for their clients.
              <br />
              16 years of hands-on experience.
              <br />
              I work as an extension of your team &mdash; your clients get senior-level paid search management, and you get a reliable agency partner you can count on.
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
                  Senior PPC Agency Partner &middot; 16 years &middot; £50M+ managed
                </div>
              </div>
            </div>
            <div className="cta-stack">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                onClick={() => trackWhatsApp("agency-partner - hero")}
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
              alt="Christopher Hoole — Google Ads Agency Partner & PPC Specialist"
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
        <h2>What&apos;s included in our Google Ads agency partnership</h2>
        <p className="section-intro">
          Everything your agency needs from a dedicated PPC agency partner &mdash; without the overhead of hiring.
          <br />
          Here&apos;s how I support your agency:
        </p>
        <div className="waste-list">
          {[
            {
              title: "Full campaign management",
              desc: "Campaign builds, keyword research, ad copy, bid management, and ongoing optimisation for your clients' Google Ads accounts",
            },
            {
              title: "Branded reporting",
              desc: "Reports your clients see as coming from your agency. Monthly or weekly performance updates \u2014 whatever your clients expect from their paid ads agency partner",
            },
            {
              title: "Conversion tracking & attribution",
              desc: "Proper tracking setup from day one \u2014 GA4, Google Ads conversion tags, call tracking. Your clients get accurate data, and you look good",
            },
            {
              title: "Strategy & growth planning",
              desc: "I don\u2019t just manage campaigns. As your pay per click agency partner, I advise on budgets, new opportunities, and growth strategy across your client portfolio",
            },
            {
              title: "Client-facing support (optional)",
              desc: "Happy to join client calls and QBRs as part of your team. Or stay behind the scenes \u2014 whatever works best for your agency. A flexible paid search agency partner arrangement",
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
            onClick={() => trackWhatsApp("agency-partner - what-you-get")}
          >
            💬 Let&apos;s discuss your clients
          </a>
          <p className="cta-note" style={{ marginTop: "10px" }}>
            Tell me about the accounts you&apos;re looking for a partner on
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="section alt">
        <div className="section-tag">Who this is for</div>
        <h2>This is for you if…</h2>
        <div className="who-list">
          {[
            "You\u2019re a digital agency looking for a reliable Google Ads agency partner to handle PPC for your clients",
            "You offer paid search as a service but need a senior gads agency partner to deliver the results",
            "You\u2019re growing fast and need a Google AdWords agency partner who can scale with you \u2014 without the cost of hiring",
            "You want a dedicated paid ads agency partner who treats your clients\u2019 accounts like their own",
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
        <div className="section-tag">Why partner with me</div>
        <h2>Why agencies choose me as their PPC agency partner</h2>
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
              <div className="compare-header-cell">Partnering with me</div>
            </div>
            {[
              ["£35k\u2013£55k salary + benefits + training", "Pay only for accounts managed"],
              ["Junior learning on your clients", "Senior AdWords agency partner. 16 years."],
              ["Sick days, holidays, staff turnover", "Consistent delivery, no gaps"],
              ["One person, limited capacity", "Flexible \u2014 scale up or down as your agency grows"],
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
              Senior Google Ads agency partner.
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
          Let&apos;s discuss a Google Ads agency partnership
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--grey-600)",
            marginBottom: "32px",
          }}
        >
          Whether you need a PPC agency partner for one key client or an AdWords agency partner across your entire portfolio &mdash; let&apos;s talk.
        </p>

        <div className="wa-card">
          <div className="wa-card-title">
            💬 Fastest &mdash; Message on WhatsApp
          </div>
          <div className="wa-card-sub">
            I respond promptly during UK business hours.
            <br />
            Send your name, agency, and what you&apos;re looking for in a paid search agency partner.
          </div>
          <div className="wa-card-num">+44 7999 500 184</div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            onClick={() => trackWhatsApp("agency-partner - contact")}
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
              placeholder="Tell me about your agency and what you're looking for in a PPC partner..."
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
        <h2>How the agency partnership works</h2>
        <div className="process-list">
          {[
            {
              title: "We have an intro call",
              desc: "You tell me about your agency, your clients, and what you need from a Google Ads agency partner. I\u2019ll explain exactly how I work and how we\u2019d collaborate as a paid ads agency partner team.",
            },
            {
              title: "I review the accounts",
              desc: "I\u2019ll audit your clients\u2019 Google Ads accounts and put together a plan. You\u2019ll see exactly what I\u2019d do as your gads agency partner before committing to anything.",
            },
            {
              title: "We agree the partnership",
              desc: "Once we\u2019re both happy, I start managing campaigns. I work as an extension of your team \u2014 your dedicated AdWords agency partner with direct communication and full transparency.",
            },
            {
              title: "Your clients see the results",
              desc: "Better results for your clients means happier clients for your agency. You get a senior pay per click agency partner delivering the performance, and your clients get the Google Ads management they deserve.",
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
          Google Ads Agency Partner &middot; PPC Agency Partner &middot; Google AdWords Agency Partner &middot; Paid Search Agency Partner &middot; Pay Per Click &amp; Gads Agency Partner &middot; Maximum 4
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
          onClick={() => trackWhatsApp("agency-partner - sticky")}
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
