"use client";

import { useState } from "react";

const API_URL = 'https://act-website-fawn.vercel.app/api/leads';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    lookingFor: "",
    email: "",
    phone: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setIsError(false);
    setErrorMessage("");
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setIsError(true);
      setErrorMessage("Name and email are required.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsError(true);
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Map lookingFor to looking_for for API compatibility
      const payload = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        role: formData.role,
        looking_for: formData.lookingFor,
        email: formData.email.trim(),
        phone: formData.phone.trim()
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Success
      setIsSuccess(true);
      
      // Clear form
      setFormData({
        name: "",
        company: "",
        role: "",
        lookingFor: "",
        email: "",
        phone: ""
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error) {
      setIsError(true);
      setErrorMessage("Something went wrong. Please try again or email us directly at chrishoole101@gmail.com");
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            Let's Talk
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-5 font-serif">
          Let's Discuss Your Paid Ads
        </h3>

        {/* Intro */}
        <div className="max-w-[1020px] mb-10">
          <p className="text-body-dark">
            Whether you're an agency looking for a partner or an in-house team needing senior oversight, let's talk.
          </p>
        </div>

        {/* 2-column layout: Form + Next Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Contact Form */}
          <div>
            {/* Success Message */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-green-100 font-mono text-[14px] m-0">
                    Thank you! We'll be in touch soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {isError && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-xl">✕</span>
                  <p className="text-red-100 font-mono text-[14px] m-0">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-[#1e293b] border border-[#334155] rounded-lg p-8">
              {/* Name */}
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">
                  Name *
                </label>
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
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">
                  Company Name *
                </label>
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

              {/* Role */}
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">
                  Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-[#334155] rounded px-3 py-3 text-[13px] text-[#f1f5f9] font-mono focus:outline-none focus:border-primary"
                  disabled={isLoading}
                >
                  <option value="">Select your role</option>
                  <option value="agency-owner">Agency owner</option>
                  <option value="ppc-lead">PPC lead</option>
                  <option value="marketing-director">Marketing director</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Looking for */}
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">
                  Looking for *
                </label>
                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-[#334155] rounded px-3 py-3 text-[13px] text-[#f1f5f9] font-mono focus:outline-none focus:border-primary"
                  disabled={isLoading}
                >
                  <option value="">Select engagement type</option>
                  <option value="freelancer">Freelancer (direct)</option>
                  <option value="partner">Partner (collaborative)</option>
                  <option value="white-label">White-label</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">
                  Email *
                </label>
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
              <div className="mb-5">
                <label className="block text-[12px] text-[#94a3b8] mb-1.5 uppercase tracking-wide font-mono">
                  Phone number (optional)
                </label>
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
                {isLoading ? "Sending..." : "Submit Application"}
              </button>

              {/* Note */}
              <div className="text-[11px] text-[#475569] text-center mt-3 font-mono">
                POSTs to /api/leads — lead appears in A.C.T dashboard
              </div>
            </form>
          </div>

          {/* RIGHT: What Happens Next */}
          <div>
            <div className="text-[20px] font-bold text-[#f8fafc] mb-6">
              What happens next:
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-white text-[18px] font-bold flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="text-[20px] font-bold text-[#f8fafc] mb-1.5">
                    I review within 48 hours
                  </div>
                  <div className="text-[16px] text-white leading-[1.7]">
                    Quick review of your application to see if there's a potential fit based on account size and goals.
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-white text-[18px] font-bold flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="text-[20px] font-bold text-[#f8fafc] mb-1.5">
                    Short fit call (30 min)
                  </div>
                  <div className="text-[16px] text-white leading-[1.7]">
                    Discuss your account, current challenges, goals. I'll demo A.C.T and show you the dashboard live.
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-white text-[18px] font-bold flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="text-[20px] font-bold text-[#f8fafc] mb-1.5">
                    Onboarding audit (2 weeks)
                  </div>
                  <div className="text-[16px] text-white leading-[1.7]">
                    Deep dive into tracking, structure, measurement. We fix the foundation before optimizing.
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
