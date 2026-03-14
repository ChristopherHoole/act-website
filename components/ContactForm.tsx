"use client";

import { useState } from "react";

const API_URL = '/api/leads';
const WA_URL = 'https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%20found%20your%20contact%20form%20and%20I%27d%20like%20to%20discuss%20my%20Google%20Ads.';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      const payload = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim()
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      // Fire Google Ads conversion event
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18006514629/fxGxCNeunoYcEMW3lopD',
          value: 40.00,
          currency: 'GBP',
        });
      }

      setIsSuccess(true);
      setFormData({ name: "", company: "", email: "", phone: "" });
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      setIsError(true);
      setErrorMessage("Something went wrong. Please try again or email us directly at chris@christopherhoole.com");
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            Let&apos;s Talk
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-5 font-serif">
          Let&apos;s Discuss Your Paid Ads
        </h3>

        {/* Intro */}
        <p className="text-[14px] text-[#94a3b8] mb-10 font-mono max-w-[700px]">
          Whether you&apos;re an agency looking for a partner or an in-house team needing senior oversight, let&apos;s talk.
        </p>

        {/* WhatsApp hero CTA */}
        <div className="bg-[#f0fdf4] border-2 border-[#25D366] rounded-xl p-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-mono text-[22px] font-bold text-[#15803d] mb-2">
              Message me directly on WhatsApp
            </h4>
            <p className="font-mono text-[13px] text-[#16a34a] leading-relaxed mb-1">
              Fastest way to reach me. I respond promptly during business hours.
            </p>
            <p className="font-mono text-[13px] text-[#16a34a]">
              Send your name, company, and what you&apos;re looking for.
            </p>
            <p className="font-mono text-[12px] text-[#16a34a] mt-2">+44 7999 500 184</p>
          </div>
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-mono text-[13px] font-bold uppercase tracking-widest hover:bg-[#1eb857] transition-colors no-underline"
            >
              <span className="text-[22px]">💬</span>
              Message on WhatsApp
            </a>
            <span className="font-mono text-[11px] text-[#16a34a] uppercase tracking-wider">⚡ Fastest response</span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#334155]"></div>
          <span className="font-mono text-[11px] text-[#475569] uppercase tracking-widest">Or send me a message</span>
          <div className="flex-1 h-px bg-[#334155]"></div>
        </div>

        {/* Form + What happens next */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Form */}
          <div>
            {/* Success */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-green-100 font-mono text-[14px] m-0">Thank you! I&apos;ll be in touch soon.</p>
                </div>
              </div>
            )}

            {/* Error */}
            {isError && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-xl">✕</span>
                  <p className="text-red-100 font-mono text-[14px] m-0">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-[#1e293b] border border-[#334155] rounded-lg p-8">
              <div className="font-mono text-[13px] font-bold text-[#64748b] uppercase tracking-wider mb-6">
                Prefer email? Send me a message
              </div>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-dark border border-[#334155] rounded px-3 py-3 text-[13px] text-[#f1f5f9] font-mono focus:outline-none focus:border-primary"
                  disabled={isLoading}
                />
              </div>

              {/* Company */}
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Company name"
                  className="w-full bg-dark border border-[#334155] rounded px-3 py-3 text-[13px] text-[#f1f5f9] font-mono focus:outline-none focus:border-primary"
                  disabled={isLoading}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-dark border border-[#334155] rounded px-3 py-3 text-[13px] text-[#f1f5f9] font-mono focus:outline-none focus:border-primary"
                  disabled={isLoading}
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 7999 500 184"
                  className="w-full bg-dark border border-[#334155] rounded px-3 py-3 text-[13px] text-[#f1f5f9] font-mono focus:outline-none focus:border-primary"
                  disabled={isLoading}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-3.5 text-[12px] uppercase tracking-widest rounded font-mono hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT: What happens next */}
          <div>
            <div className="text-[14px] font-bold text-[#64748b] uppercase tracking-wider font-mono mb-6">
              What happens next:
            </div>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-white text-[16px] font-bold flex items-center justify-center flex-shrink-0 font-mono">1</div>
                <div>
                  <div className="text-[18px] font-bold text-[#f8fafc] mb-1.5 font-mono">I review your application</div>
                  <div className="text-[14px] text-[#94a3b8] leading-[1.7] font-mono">
                    I review based on account size and goals to assess if there&apos;s a good fit.
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-white text-[16px] font-bold flex items-center justify-center flex-shrink-0 font-mono">2</div>
                <div>
                  <div className="text-[18px] font-bold text-[#f8fafc] mb-1.5 font-mono">Fit call (30 min)</div>
                  <div className="text-[14px] text-[#94a3b8] leading-[1.7] font-mono">
                    Discuss your account, current challenges, and goals. I&apos;ll demo A.C.T and show you the dashboard live.
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-white text-[16px] font-bold flex items-center justify-center flex-shrink-0 font-mono">3</div>
                <div>
                  <div className="text-[18px] font-bold text-[#f8fafc] mb-1.5 font-mono">Onboarding audit (2 weeks)</div>
                  <div className="text-[14px] text-[#94a3b8] leading-[1.7] font-mono">
                    Deep dive into tracking, structure, and measurement. We fix the foundation before optimising.
                  </div>
                </div>
          </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
