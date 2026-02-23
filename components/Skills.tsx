"use client";

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            Skills & Platforms
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#f8fafc] leading-[1.2] mb-8 font-serif">
          Technical expertise across the full paid ads stack.
        </h3>

        {/* 4-column skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Paid Advertising */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              Paid Advertising
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
              • Google Ads (Search, PMAX, Shopping, Display) — since 2009<br />
              • Meta Ads — since 2014<br />
              • LinkedIn Ads — since 2015<br />
              • TikTok, Twitter/X<br />
              • Taboola, Outbrain
            </div>
          </div>

          {/* Card 2: Analytics & Tracking */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              Analytics & Tracking
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
              • GA4, Google Analytics, Looker Studio — since 2009<br />
              • Triple Whale, Hyros<br />
              • Google Tag Manager<br />
              • Search Console<br />
              • Merchant Centre
            </div>
          </div>

          {/* Card 3: CRM & Email */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              CRM & Email
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
              • HubSpot, Salesforce<br />
              • Pardot<br />
              • MailChimp, Klaviyo<br />
              • InfusionSoft
            </div>
          </div>

          {/* Card 4: E-commerce Platforms */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              E-commerce Platforms
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
              • Shopify<br />
              • BigCommerce<br />
              • WordPress<br />
              • ClickFunnels<br />
              • Leadpages
            </div>
          </div>

          {/* Card 5: AI & Automation */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              AI & Automation
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
              • Custom A.C.T engine<br />
              • ChatGPT, Claude, Gemini<br />
              • Python scripting<br />
              • Google Ads Scripts
            </div>
          </div>

          {/* Card 6: Budget Management */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              Budget Management
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
              • £5k–£400k/month<br />
              • Multi-channel allocation<br />
              • 16 years experience<br />
              • 200+ accounts optimized
            </div>
          </div>

          {/* Card 7: Industries */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              Industries
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
              • Automotive<br />
              • Luxury Travel<br />
              • B2B<br />
              • E-commerce<br />
              • Property<br />
              • Professional Services
            </div>
          </div>

          {/* Card 8: Languages */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-md p-4">
            <div className="text-[20px] font-bold text-primary mb-2">
              Languages
            </div>
            <div className="text-[16px] text-white leading-[1.7]">
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
