"use client";

export default function WorkHistory() {
  return (
    <section id="work" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            My Work History
          </h2>
        </div>

        {/* Heading */}
        <h3 className="text-[36px] font-bold text-[#0f172a] leading-[1.2] mb-8 font-serif">
          16 years across agencies, in-house, and my own consultancy.
        </h3>

        {/* Timeline with vertical line and dots */}
        <div className="relative mt-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e2e8f0] hidden md:block"></div>

          <div className="space-y-8">
            {/* Timeline Item 1 - ACT */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">Founder & Developer — Ads Control Tower (A.C.T)</div>
                  <div className="font-mono text-[14px] text-primary">2025–Present</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">Independent</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Built a proprietary AI-powered Google Ads optimisation platform from scratch. A.C.T generates bid, budget, keyword and campaign recommendations across 5 entity types with full audit trail, safety guardrails and rollback capabilities. 75 rules, 99 monitoring flags, 507 live recommendations. Built using Python, Flask, DuckDB and the Google Ads API. Live at christopherhoole.online.</div>
              </div>
            </div>

            {/* Timeline Item 2 - Pod */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">Paid Ads Account Manager</div>
                  <div className="font-mono text-[14px] text-primary">Nov 2023–Feb 2026</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">Pod Digital Marketing Agency</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Managed up to 8 clients in parallel across Google Search, Shopping and Performance Max. Dramatically improved ROAS and inbound lead count across all accounts. Introduced new Google Ads techniques and funnel structures to all but 1 client. Upgraded client analytics and reporting infrastructure across the board.</div>
              </div>
            </div>

            {/* Timeline Item 3 - Virgin Media */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">Digital Marketing Manager</div>
                  <div className="font-mono text-[14px] text-primary">Mar 2022–Oct 2023</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">Virgin Media O2 Business (18 month contract via agency)</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Created and executed a migration plan to bring all Google Ads accounts in-house. Designed full end-to-end, always-on, omni-channel digital marketing funnel. Grew B2B inbound leads from 0 to 2,000 per month primarily through Google Ads.</div>
              </div>
            </div>

            {/* Timeline Item 4 - TMW */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">Digital Marketing Consultant</div>
                  <div className="font-mono text-[14px] text-primary">May 2020–Feb 2022</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">TMW Unlimited Agency (Lexus & Toyota) (6 month contract)</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Increased traffic to local dealership sites by 500%+ with the same Google Ads spend. Increased lead volume and test-drive requests by over 100%. Overhauled Toyota&apos;s entire Google Ads tracking and attribution system.</div>
              </div>
            </div>

            {/* Timeline Item 5 - Destinology */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">Digital Marketing Consultant</div>
                  <div className="font-mono text-[14px] text-primary">Apr 2017–Apr 2020</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">Destinology.co.uk</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Reduced Google Ads new business CPL from £120 to £45 (63% reduction). Implemented geo-targeting campaigns targeting HNWI areas. Hired, trained and mentored a team of Paid Ads executives. Oversaw eCRM migration and reduced costs by 60%+.</div>
              </div>
            </div>

            {/* Timeline Item 7 - Select Property */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">Lead Acquisition Manager</div>
                  <div className="font-mono text-[14px] text-primary">Nov 2015–Mar 2017</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">Select Property Group</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Brought all Google Ads and digital marketing channels in-house. Part of the team that delivered £35M+ revenue in March 2016 (120% increase on record). Delivered high-converting leads from UK HNWIs and global markets (HK, Singapore, Dubai, USA, Canada).</div>
              </div>
            </div>

            {/* Timeline Item 8 - SixStar */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">Digital Marketing Manager</div>
                  <div className="font-mono text-[14px] text-primary">Jul 2014–Oct 2015</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">SixStarHolidays</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Increased Google Ads lead volume 120% with only a 12% budget increase. Reduced paid ads new customer acquisition cost from £100+ to £36. Built the fastest-growing social media presence in the UK travel industry. Grew email database from 200,000 to 300,000 organically in 9 months.</div>
              </div>
            </div>

            {/* Timeline Item 9 - Apple Copywriting */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[20px] font-bold text-[#0f172a] mb-2 md:mb-0 font-mono">CEO & Founder</div>
                  <div className="font-mono text-[14px] text-primary">Jan 2009–Mar 2014</div>
                </div>
                <div className="text-[16px] text-[#0f172a] mb-2 font-sans font-bold">Apple Copywriting Agency</div>
                <div className="text-[16px] text-[#0f172a] leading-[1.6] font-sans">Built from a 1-man operation to 8 in-house staff and 40+ freelancers. Grew revenue from £0 to £800,000 per annum within 2 years. Designed and project-managed a bespoke CMS for copywriting management.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
