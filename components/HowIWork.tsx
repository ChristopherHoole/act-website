"use client";

export default function HowIWork() {
  return (
    <section className="section-padding bg-dark-darker">
      <div className="section-max-width">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#2563eb' }}></div>
              <div className="font-monospace text-uppercase" style={{ fontSize: '11px', letterSpacing: '2.5px', color: '#2563eb' }}>
                How I Work
              </div>
            </div>
            <h2 className="fw-bold mb-4" style={{ fontSize: '42px', color: '#f8fafc', lineHeight: '1.1' }}>
              My Process:<br />
              From Onboarding to Optimization
            </h2>
          </div>

          <div className="col-12">
            <div className="row g-4">
              {/* Step 1 */}
              <div className="col-md-6 col-lg-3">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: '#ffffff', fontSize: '18px' }}>
                      1
                    </div>
                    <h3 className="fw-bold mb-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      Discovery Call
                    </h3>
                  </div>
                  <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    30-minute call to understand your business model, margins, conversion goals, and current ad performance. I assess if we&apos;re a good fit.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-md-6 col-lg-3">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: '#ffffff', fontSize: '18px' }}>
                      2
                    </div>
                    <h3 className="fw-bold mb-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      Account Audit
                    </h3>
                  </div>
                  <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Deep analysis of your current Google Ads setup. I identify quick wins, inefficiencies, and opportunities most managers miss.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-md-6 col-lg-3">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: '#ffffff', fontSize: '18px' }}>
                      3
                    </div>
                    <h3 className="fw-bold mb-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      A.C.T Integration
                    </h3>
                  </div>
                  <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    I connect A.C.T to your account and configure custom monitoring rules based on your specific business constraints and goals.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="col-md-6 col-lg-3">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="fw-bold rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#2563eb', color: '#ffffff', fontSize: '18px' }}>
                      4
                    </div>
                    <h3 className="fw-bold mb-0" style={{ fontSize: '18px', color: '#f8fafc' }}>
                      Optimization
                    </h3>
                  </div>
                  <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    A.C.T monitors 24/7, generating optimization recommendations. I review, approve, and implement changes weekly—or instantly if urgent.
                  </p>
                </div>
              </div>
            </div>

            {/* Ongoing Management */}
            <div className="mt-5 p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #2563eb' }}>
              <h3 className="fw-bold mb-4" style={{ fontSize: '20px', color: '#2563eb' }}>
                Ongoing Management
              </h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#10b981' }}>
                    ✓ Daily Monitoring
                  </div>
                  <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                    A.C.T checks campaigns every hour. Critical issues trigger instant alerts to my phone.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#10b981' }}>
                    ✓ Weekly Optimization
                  </div>
                  <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                    Every Monday, I review A.C.T&apos;s recommendations and implement approved changes.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#10b981' }}>
                    ✓ Monthly Strategy Review
                  </div>
                  <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                    Detailed performance review call to discuss trends, tests, and strategic adjustments.
                  </p>
                </div>
              </div>
            </div>

            {/* Communication */}
            <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#f8fafc' }}>
                Communication & Transparency
              </h3>
              <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                You have direct access to me via email and Slack. No account managers, no layers. I respond within 4 hours during business hours.
              </p>
              <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                All changes are logged and explained. You see exactly what A.C.T recommends, why I approved it, and the expected impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
