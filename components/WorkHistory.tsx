"use client";

export default function WorkHistory() {
  return (
    <section id="work" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-content mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h2 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            Work History
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
            {/* Timeline Item 1 */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[16px] font-bold text-[#0f172a] mb-2 md:mb-0">Paid Ads Account Manager</div>
                  <div className="font-mono text-[14px] text-primary">2023–2025</div>
                </div>
                <div className="text-[13px] text-[#64748b] mb-2">Pod Digital Marketing Agency</div>
                <div className="text-[13px] text-[#64748b] leading-[1.6]">Managed 8 parallel clients. Dramatically improved ROAS and inbound lead count for all accounts. Introduced new marketing techniques and upgraded analytics/reporting systems.</div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[16px] font-bold text-[#0f172a] mb-2 md:mb-0">Digital Marketing Manager</div>
                  <div className="font-mono text-[14px] text-primary">2022–2023</div>
                </div>
                <div className="text-[13px] text-[#64748b] mb-2">Virgin Media O2 Business</div>
                <div className="text-[13px] text-[#64748b] leading-[1.6]">Brought all paid ad accounts in-house. Designed full omni-channel funnel. Scaled from 0 to 2,000 B2B leads per month.</div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[16px] font-bold text-[#0f172a] mb-2 md:mb-0">Digital Marketing Consultant</div>
                  <div className="font-mono text-[14px] text-primary">2021–2022</div>
                </div>
                <div className="text-[13px] text-[#64748b] mb-2">TMW Unlimited Agency (Lexus & Toyota)</div>
                <div className="text-[13px] text-[#64748b] leading-[1.6]">Increased traffic to local dealership sites by 500%+ with same budget. 100%+ increase in leads and test-drive requests. Overhauled Toyota's entire tracking and attribution.</div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[16px] font-bold text-[#0f172a] mb-2 md:mb-0">Digital Marketing Consultant</div>
                  <div className="font-mono text-[14px] text-primary">2017–2020</div>
                </div>
                <div className="text-[13px] text-[#64748b] mb-2">Destinology.co.uk</div>
                <div className="text-[13px] text-[#64748b] leading-[1.6]">Reduced Google Ads CPL from £120 to £45 (63% reduction). Implemented geo-targeting in HNWI areas. Hired and trained paid ads team. Oversaw ECRM migration reducing costs 60%+.</div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[16px] font-bold text-[#0f172a] mb-2 md:mb-0">Lead Acquisition Manager</div>
                  <div className="font-mono text-[14px] text-primary">2015–2017</div>
                </div>
                <div className="text-[13px] text-[#64748b] mb-2">Select Property Group</div>
                <div className="text-[13px] text-[#64748b] leading-[1.6]">Brought all digital marketing in-house. Part of team that delivered £35m revenue in March 2016 (120%+ increase on previous record). Delivered high-net-worth leads from UK and global markets.</div>
              </div>
            </div>

            {/* Timeline Item 6 */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[16px] font-bold text-[#0f172a] mb-2 md:mb-0">Digital Marketing Manager</div>
                  <div className="font-mono text-[14px] text-primary">2014–2015</div>
                </div>
                <div className="text-[13px] text-[#64748b] mb-2">SixStarHolidays</div>
                <div className="text-[13px] text-[#64748b] leading-[1.6]">Increased lead volume 120% with 12% budget increase. Reduced new customer acquisition cost from £100+ to £36. Built fastest-growing social media presence in travel industry (50k organic likes in 6 months).</div>
              </div>
            </div>

            {/* Timeline Item 7 */}
            <div className="relative md:pl-12">
              <div className="hidden md:block absolute left-[-6px] top-2 w-[14px] h-[14px] rounded-full bg-primary border-2 border-white"></div>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="text-[16px] font-bold text-[#0f172a] mb-2 md:mb-0">CEO & Founder</div>
                  <div className="font-mono text-[14px] text-primary">2009–2014</div>
                </div>
                <div className="text-[13px] text-[#64748b] mb-2">Apple Copywriting</div>
                <div className="text-[13px] text-[#64748b] leading-[1.6]">Built company from 1 person to 48 staff (8 in-house, 40 freelance). Scaled from £0 to £800k annual revenue in 2 years. Designed and built custom project management system.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
