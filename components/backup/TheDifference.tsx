"use client";

export default function TheDifference() {
  return (
    <section className="section-padding bg-dark-darker">
      <div className="section-max-width">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#2563eb' }}></div>
              <div className="font-monospace text-uppercase" style={{ fontSize: '11px', letterSpacing: '2.5px', color: '#2563eb' }}>
                The Difference
              </div>
            </div>
            <h2 className="fw-bold mb-4" style={{ fontSize: '42px', color: '#f8fafc', lineHeight: '1.1' }}>
              How A.C.T Changes<br />
              Everything
            </h2>
          </div>

          <div className="col-12">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                  <h3 className="fw-bold mb-4" style={{ fontSize: '20px', color: '#94a3b8' }}>
                    Traditional Management
                  </h3>
                  
                  <div className="mb-3">
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Weekly Check-ins
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                      Manager reviews campaigns once a week, missing real-time opportunities and threats.
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Manual Analysis
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                      Human limitations mean only surface-level metrics get reviewed.
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Reactive Fixes
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                      Problems identified after budget is wasted, optimizations lag behind market changes.
                    </p>
                  </div>

                  <div>
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Generic Playbook
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                      Same strategies applied to all clients regardless of unique business needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-4 rounded h-100" style={{ backgroundColor: '#0f172a', border: '1px solid #2563eb' }}>
                  <h3 className="fw-bold mb-4" style={{ fontSize: '20px', color: '#2563eb' }}>
                    A.C.T AI-Powered Management
                  </h3>
                  
                  <div className="mb-3">
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#10b981' }}>
                      ✓ 24/7 Monitoring
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                      A.C.T analyzes your campaigns every hour, catching issues before they cost you money.
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#10b981' }}>
                      ✓ Deep Pattern Recognition
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                      AI identifies hidden correlations across thousands of data points humans would miss.
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#10b981' }}>
                      ✓ Predictive Optimizations
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                      A.C.T forecasts performance trends and adjusts before problems appear.
                    </p>
                  </div>

                  <div>
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#10b981' }}>
                      ✓ Custom Strategies
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                      Every recommendation tailored to your specific business model, margins, and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5 p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
              <p className="font-monospace mb-0" style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: '1.7' }}>
                <span style={{ color: '#2563eb' }}>The outcome:</span> You get proactive management that scales profitably, catches opportunities in real-time, and continuously learns from your account&apos;s unique performance patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
