"use client";

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            My Skills & Platforms
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-8 font-serif">
          Google Ads Specialist with technical expertise across the full paid ads stack.
        </h3>

        {/* 4-column skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Paid Advertising */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              Paid Advertising
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • Google Search — since 2009<br />
              • Google Shopping — since 2009<br />
              • Performance Max — since 2021<br />
              • Google Display — since 2009<br />
              • Meta Ads — since 2014<br />
              • LinkedIn Ads — since 2015<br />
              • TikTok, Twitter/X<br />
              • Taboola, Outbrain
            </div>
          </div>

          {/* Card 2: AI & Automation */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              AI & Automation
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • A.C.T — proprietary Google Ads AI engine<br />
              • 41 optimisation rules<br />
              • 1,492 active recommendations<br />
              • Built with Python, Flask, DuckDB<br />
              • Google Ads API integration<br />
              • Claude, ChatGPT, Gemini, Grok<br />
              • Google Ads Scripts<br />
              • Prompt engineering
            </div>
          </div>

          {/* Card 3: Budget Management */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              Budget Management
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • £5k–£400k/month managed<br />
              • £50M+ total ad spend<br />
              • 100+ accounts optimised<br />
              • 16 years experience<br />
              • Multi-channel allocation<br />
              • Pacing, forecasting, reporting
            </div>
          </div>

          {/* Card 4: Analytics & Tracking */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              Analytics & Tracking
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • GA4 & Looker Studio — since 2009<br />
              • Google Tag Manager<br />
              • Google Search Console<br />
              • Google Merchant Centre<br />
              • Triple Whale, Hyros<br />
              • Meta Pixel & Reporting<br />
              • SEMrush
            </div>
          </div>

          {/* Card 5: CRM & Email */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              CRM & Email
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • HubSpot, Salesforce<br />
              • Pardot<br />
              • Klaviyo, MailChimp<br />
              • InfusionSoft
            </div>
          </div>

          {/* Card 6: E-commerce Platforms */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              E-commerce Platforms
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • Shopify<br />
              • BigCommerce<br />
              • WordPress<br />
              • ClickFunnels<br />
              • Leadpages<br />
              • DataFeedWatch, Shoptimised
            </div>
          </div>

          {/* Card 7: Industries */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              Industries
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • Automotive<br />
              • Luxury Travel<br />
              • B2B<br />
              • E-commerce<br />
              • Property<br />
              • Professional Services<br />
              • Coaching & Education
            </div>
          </div>

          {/* Card 8: Languages */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2 font-mono">
              Languages
            </div>
            <div className="text-[14px] text-white leading-[1.9] font-mono">
              • English (native)<br />
              • Portuguese (fluent)<br />
              • Spanish (basic)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
