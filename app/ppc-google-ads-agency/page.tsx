"use client";

import "./styles.css";
import { useState } from "react";

const WA_URL =
  "https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%20found%20your%20ppc-agency%20page%20and%20I%27d%20like%20to%20discuss%20Google%20Ads%20management.";

export default function PPCAgencyPage() {
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
        event_label: "ppc-agency - contact form",
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
          source: "ppc-google-ads-agency",
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
      q: "You\u2019re not a PPC agency \u2014 so what are you?",
      a: "I\u2019m a senior PPC specialist who delivers everything a Google Ads agency would \u2014 campaign management, reporting, strategy, tracking \u2014 but without the layers. No account managers, no juniors. You work directly with me. Think of it as getting paid search agency quality from someone with 16 years of hands-on experience, without the typical adwords agency overhead.",
    },
    {
      q: "How can one person deliver what a full PPC agency does?",
      a: "Because most of what a pay per click agency charges for is overhead \u2014 account managers, office costs, layers of approval. The actual Google Ads work is done by one person. With me, that person has 16 years experience and has managed \u00a350M+ in ad spend. You\u2019re getting the senior gads agency specialist directly, not the intern.",
    },
    {
      q: "What if I need to scale beyond what one person can handle?",
      a: "I take a maximum of 4 clients at any time. That\u2019s deliberate \u2014 it means your account gets the attention a large paid ads agency would spread across dozens of clients. If your needs genuinely outgrow what I can deliver, I\u2019ll tell you honestly and help you transition.",
    },
    {
      q: "What\u2019s the minimum commitment?",
      a: "No minimum contract. Unlike most Google AdWords agencies that lock you in for 6\u201312 months, I work month to month. I\u2019d rather earn your trust through results than trap you in a contract. That\u2019s one of the biggest differences between me and a typical paid search agency.",
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
              PPC Agency Alternative &middot; Senior Level &middot; UK
            </div>
            <h1>
              Looking for a Google Ads agency?<br /> There&apos;s a <em>better way.</em>
            </h1>
            <p className="hero-sub">
              Everything you&apos;d expect from a PPC agency &mdash; campaign management, reporting, strategy, tracking &mdash; delivered by one senior specialist with 16 years of hands-on experience.
              <br />
              No juniors.
              <br />
              No account manager middlemen.
              <br />
              Just direct access to the person actually managing your Google Ads.
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
                onClick={() => trackWhatsApp("ppc-agency - hero")}
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
              alt="Christopher Hoole — PPC Agency Alternative & Google Ads Specialist"
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
        <h2>Everything a Google Ads agency delivers &mdash; without the agency</h2>
        <p className="section-intro">
          You searched for a PPC agency because you want your Google Ads managed properly.
          <br />
          Here&apos;s exactly what you get working with me instead:
        </p>
        <div className="waste-list">
          {[
            {
              title: "Full campaign management",
              desc: "Campaign builds, keyword research, ad copy, bid management, and ongoing optimisation \u2014 the same work a Google Ads agency would do, handled by a senior specialist with 16 years experience",
            },
            {
              title: "Monthly reporting & performance reviews",
              desc: "Clear, plain-English reports showing what\u2019s working, what\u2019s not, and what we\u2019re doing about it. No vanity metrics \u2014 unlike a typical paid ads agency that buries the real numbers",
            },
            {
              title: "Conversion tracking & attribution",
              desc: "Proper tracking setup from day one \u2014 GA4, Google Ads conversion tags, call tracking. Most pay per click agencies get this wrong. I don\u2019t",
            },
            {
              title: "Strategy & growth planning",
              desc: "I don\u2019t just manage campaigns. I advise on budgets, new opportunities, and growth strategy \u2014 the kind of strategic thinking a paid search agency charges a premium for",
            },
            {
              title: "Direct access to your specialist",
              desc: "No account managers, no ticket systems, no waiting. You message me directly. That\u2019s the biggest difference between working with me and a typical adwords agency",
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
            onClick={() => trackWhatsApp("ppc-agency - what-you-get")}
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
            "You\u2019ve been searching for a Google Ads agency but you\u2019re not sure you need a full agency \u2014 you need the right person",
            "You\u2019ve used a PPC agency before and were disappointed by juniors managing your account or poor communication",
            "You want gads agency-level service but with direct access to the person doing the work",
            "You\u2019re spending between \u00a32,000 and \u00a3100,000/month on Google Ads and want better results than your current adwords agency is delivering",
          ].map((text) => (
            <div key={text} className="who-item">
              <div className="who-check">✓</div>
              <div className="who-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY ME VS AGENCY (D1) ── */}
      <section className="section">
        <div className="section-tag">Why choose me over an agency</div>
        <h2>A typical PPC agency vs. working with me</h2>
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
                This is who manages your Google Ads.
              </div>
            </div>
          </div>
          <div className="compare-table">
            <div className="compare-header">
              <div className="compare-header-cell">Typical Google Ads agency</div>
              <div className="compare-header-cell">Working with me</div>
            </div>
            {[
              ["Junior exec manages your account", "Senior specialist. 16 years. Personally."],
              ["Account manager middleman", "Direct access \u2014 message me anytime"],
              ["6\u201312 month contracts", "Month to month. No lock-in."],
              ["Your account is one of dozens", "Max 4 clients at any time"],
              ["Generic strategy, cookie-cutter approach", "Tailored strategy for your business"],
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
              Senior Google Ads specialist.
              <br />
              16 years experience.
              <br />
              Maximum 4 clients at any time.
            </div>
            <div className="personal-strip-sub">
              Your account is managed by me personally &mdash; not handed off to a junior like at a typical PPC agency.
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
          Whether you want to switch from your current paid search agency or you&apos;re looking for a Google AdWords agency alternative &mdash; get in touch today.
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
            onClick={() => trackWhatsApp("ppc-agency - contact")}
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
              desc: "Message me on WhatsApp or fill in the form above. I\u2019ll need your name, company, and monthly ad spend. Unlike a typical Google Ads agency, I\u2019ll respond personally \u2014 not an account manager.",
            },
            {
              title: "I audit your Google Ads account",
              desc: "I\u2019ll manually review your account and produce a plain-English waste report showing exactly where your budget is going and what needs fixing. No automated tools \u2014 a real senior paid ads agency-level audit.",
            },
            {
              title: "We discuss the findings",
              desc: "We\u2019ll go through the report together. You\u2019ll see exactly what a gads agency would typically charge thousands for \u2014 and decide if you want to work together.",
            },
            {
              title: "I manage your Google Ads",
              desc: "If we\u2019re a good fit, I take over your campaigns. You get everything an adwords agency delivers \u2014 managed by one senior specialist who actually knows your account inside out.",
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
          PPC Agency Alternative &middot; Google Ads Agency &middot; Google AdWords Agency &middot; Paid Search Agency &middot; Pay Per Click Agency &amp; Gads Agency Alternative &middot; Paid Ads Agency &middot; Adwords Agency &middot; Maximum 4
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
          onClick={() => trackWhatsApp("ppc-agency - sticky")}
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
