"use client";

export default function WeeklyDeliverables() {
  return (
    <section className="section-padding bg-dark">
      <div className="section-max-width">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#2563eb' }}></div>
              <div className="font-monospace text-uppercase" style={{ fontSize: '11px', letterSpacing: '2.5px', color: '#2563eb' }}>
                Weekly Deliverables
              </div>
            </div>
            <h2 className="fw-bold mb-4" style={{ fontSize: '42px', color: '#f8fafc', lineHeight: '1.1' }}>
              What You Receive<br />
              Every Week
            </h2>
            <p className="font-monospace mb-0" style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.7', maxWidth: '800px' }}>
              Transparency is non-negotiable. Every Monday morning, you receive a comprehensive update on what A.C.T found, what I changed, and why.
            </p>
          </div>

          <div className="col-12">
            <div className="row g-4">
              {/* Performance Summary */}
              <div className="col-md-6">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="mb-3" style={{ fontSize: '32px' }}>📈</div>
                  <h3 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#f8fafc' }}>
                    Performance Summary
                  </h3>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Week-over-week comparison of key metrics:
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Spend vs Budget
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Conversions & Conversion Rate
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> CPA / ROAS Performance
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Impression Share & Rank
                    </li>
                    <li className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Quality Score Trends
                    </li>
                  </ul>
                </div>
              </div>

              {/* A.C.T Insights */}
              <div className="col-md-6">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="mb-3" style={{ fontSize: '32px' }}>🤖</div>
                  <h3 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#f8fafc' }}>
                    A.C.T Insights Report
                  </h3>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    What A.C.T discovered this week:
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Performance Anomalies Detected
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Hidden Patterns Identified
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Budget Utilization Analysis
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Competitive Pressure Changes
                    </li>
                    <li className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Predicted Trends (Next 7 Days)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Changes Made */}
              <div className="col-md-6">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="mb-3" style={{ fontSize: '32px' }}>✏️</div>
                  <h3 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#f8fafc' }}>
                    Changes Implemented
                  </h3>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Complete log of all optimizations:
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Bid Adjustments (Before/After)
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Keywords Added/Paused
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Ad Copy Tests Launched
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Budget Reallocations
                    </li>
                    <li className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Negative Keywords Added
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recommendations */}
              <div className="col-md-6">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <div className="mb-3" style={{ fontSize: '32px' }}>💡</div>
                  <h3 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#f8fafc' }}>
                    Strategic Recommendations
                  </h3>
                  <p className="font-monospace mb-3" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                    Opportunities for next week:
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Scaling Opportunities Identified
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Tests to Run
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Audience Expansion Ideas
                    </li>
                    <li className="font-monospace mb-2" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Landing Page Suggestions
                    </li>
                    <li className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                      <span style={{ color: '#2563eb' }}>→</span> Competitor Intelligence
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Delivery Format */}
            <div className="mt-5 p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #2563eb' }}>
              <h3 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#2563eb' }}>
                Delivery Format
              </h3>
              <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                Reports delivered every Monday by 9 AM via email and Slack. Each section includes visual charts, before/after comparisons, and plain-English explanations—no jargon, no fluff. If you have questions, I&apos;m available for a quick call the same day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
