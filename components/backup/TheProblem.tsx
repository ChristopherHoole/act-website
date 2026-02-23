"use client";

export default function TheProblem() {
  return (
    <section className="section-padding bg-dark">
      <div className="section-max-width">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#2563eb' }}></div>
              <div className="font-monospace text-uppercase" style={{ fontSize: '11px', letterSpacing: '2.5px', color: '#2563eb' }}>
                The Problem
              </div>
            </div>
            <h2 className="fw-bold mb-4" style={{ fontSize: '42px', color: '#f8fafc', lineHeight: '1.1' }}>
              Most Google Ads Managers<br />
              Work the Same Way
            </h2>
          </div>

          <div className="col-lg-8 mx-auto">
            <div className="mb-5">
              <h3 className="fw-bold mb-3" style={{ fontSize: '20px', color: '#f8fafc' }}>
                The Typical Approach:
              </h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="p-4 rounded" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Reactive Management
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                      They wait for problems to appear in reports, then react. By then, you&apos;ve already wasted budget.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 rounded" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Manual Optimizations
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                      They check campaigns once a week, make a few tweaks, and hope for the best.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 rounded" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Limited Analysis
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                      They look at surface metrics (clicks, impressions) but miss the deeper patterns that drive ROI.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 rounded" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                    <div className="font-monospace fw-bold mb-2" style={{ fontSize: '14px', color: '#ef4444' }}>
                      ✗ Generic Strategies
                    </div>
                    <p className="font-monospace mb-0" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                      They apply the same playbook to every client, regardless of industry or business model.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
              <p className="font-monospace mb-0" style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: '1.7' }}>
                <span style={{ color: '#2563eb' }}>The result?</span> Campaigns that perform &ldquo;okay&rdquo; but never reach their full potential. You pay for clicks that don&apos;t convert, miss opportunities to scale, and wonder if your ads could be doing better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
