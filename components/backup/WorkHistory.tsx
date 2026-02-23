"use client";

export default function WorkHistory() {
  return (
    <section id="work" className="section-padding bg-dark">
      <div className="section-max-width">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#2563eb' }}></div>
              <div className="font-monospace text-uppercase" style={{ fontSize: '11px', letterSpacing: '2.5px', color: '#2563eb' }}>
                Work History
              </div>
            </div>
            <h2 className="fw-bold mb-4" style={{ fontSize: '42px', color: '#f8fafc', lineHeight: '1.1' }}>
              16 Years Across<br />
              Agency, In-House & Freelance
            </h2>
          </div>

          <div className="col-lg-10 mx-auto">
            <div className="position-relative">
              {/* Timeline line */}
              <div className="position-absolute d-none d-md-block" style={{ left: '0', top: '0', bottom: '0', width: '2px', backgroundColor: '#1e293b' }}></div>

              {/* Experience items */}
              <div className="mb-5 position-relative ps-md-5">
                <div className="d-none d-md-block position-absolute rounded-circle" style={{ left: '-6px', top: '8px', width: '14px', height: '14px', backgroundColor: '#2563eb', border: '2px solid #0f172a' }}></div>
                <div className="p-4 rounded" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
                    <h3 className="fw-bold mb-2 mb-md-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      Freelance Google Ads Consultant
                    </h3>
                    <span className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                      2019 - Present
                    </span>
                  </div>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Independent consultant managing 4 high-value client accounts. Built and deployed A.C.T (Ads Control Tower) proprietary AI optimization engine.
                  </p>
                  <div className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                    <span style={{ color: '#2563eb' }}>→</span> Managed £15M+ in annual ad spend
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Developed custom AI automation platform
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Agency partnership program launched
                  </div>
                </div>
              </div>

              <div className="mb-5 position-relative ps-md-5">
                <div className="d-none d-md-block position-absolute rounded-circle" style={{ left: '-6px', top: '8px', width: '14px', height: '14px', backgroundColor: '#64748b', border: '2px solid #0f172a' }}></div>
                <div className="p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
                    <h3 className="fw-bold mb-2 mb-md-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      Head of Paid Media
                    </h3>
                    <span className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                      2015 - 2019
                    </span>
                  </div>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Led paid media strategy for e-commerce company with £8M annual revenue. Managed team of 3 PPC specialists.
                  </p>
                  <div className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                    <span style={{ color: '#2563eb' }}>→</span> Reduced CPA by 43% year-over-year
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Scaled monthly ad spend from £50k to £180k
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Built automated bidding algorithms (pre-A.C.T)
                  </div>
                </div>
              </div>

              <div className="mb-5 position-relative ps-md-5">
                <div className="d-none d-md-block position-absolute rounded-circle" style={{ left: '-6px', top: '8px', width: '14px', height: '14px', backgroundColor: '#64748b', border: '2px solid #0f172a' }}></div>
                <div className="p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
                    <h3 className="fw-bold mb-2 mb-md-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      Senior PPC Manager
                    </h3>
                    <span className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                      2012 - 2015
                    </span>
                  </div>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Managed 40+ client accounts at digital marketing agency specializing in lead generation and e-commerce.
                  </p>
                  <div className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                    <span style={{ color: '#2563eb' }}>→</span> Managed £20M+ combined client spend
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Google Ads certified trainer for junior team members
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Developed agency-wide optimization frameworks
                  </div>
                </div>
              </div>

              <div className="position-relative ps-md-5">
                <div className="d-none d-md-block position-absolute rounded-circle" style={{ left: '-6px', top: '8px', width: '14px', height: '14px', backgroundColor: '#64748b', border: '2px solid #0f172a' }}></div>
                <div className="p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
                    <h3 className="fw-bold mb-2 mb-md-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      PPC Specialist
                    </h3>
                    <span className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                      2009 - 2012
                    </span>
                  </div>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Started career managing small-to-medium business Google Ads accounts. Earned Google Ads certification in first year.
                  </p>
                  <div className="font-monospace" style={{ fontSize: '12px', color: '#64748b' }}>
                    <span style={{ color: '#2563eb' }}>→</span> Managed 20+ SMB accounts
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Google Ads certified 2009
                    <br />
                    <span style={{ color: '#2563eb' }}>→</span> Built foundation in auction dynamics and bidding
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
