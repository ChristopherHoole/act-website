"use client";

export default function AboutMe() {
  return (
    <section id="about" className="section-padding bg-dark-darker">
      <div className="section-max-width">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#2563eb' }}></div>
              <div className="font-monospace text-uppercase" style={{ fontSize: '11px', letterSpacing: '2.5px', color: '#2563eb' }}>
                About Me
              </div>
            </div>
            <h2 className="fw-bold mb-4" style={{ fontSize: '42px', color: '#f8fafc', lineHeight: '1.1' }}>
              16 Years in Paid Ads.<br />
              One Mission: Better Results.
            </h2>
          </div>

          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="font-monospace mb-4" style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>
              I&apos;ve managed over <span style={{ color: '#2563eb' }}>£50 million in Google Ads spend</span> across 200+ accounts. I&apos;ve worked agency-side, in-house, and as a freelance consultant.
            </p>
            <p className="font-monospace mb-4" style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>
              Early in my career, I noticed something: most Google Ads managers follow the same playbook. They check the same metrics, make the same optimizations, and get the same results.
            </p>
            <p className="font-monospace mb-4" style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>
              That&apos;s when I started building <span style={{ color: '#2563eb' }}>A.C.T (Ads Control Tower)</span> — my proprietary AI engine that doesn&apos;t just automate tasks, it <span style={{ color: '#2563eb' }}>thinks ahead</span>.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="p-4 rounded" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
              <h3 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#f8fafc' }}>
                What Makes Me Different
              </h3>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2" style={{ color: '#2563eb' }}>→</span>
                  <span className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                    Google Ads certified since 2009
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2" style={{ color: '#2563eb' }}>→</span>
                  <span className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                    Built custom AI optimization engine (A.C.T)
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2" style={{ color: '#2563eb' }}>→</span>
                  <span className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                    Maximum 4 clients (you get full attention)
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2" style={{ color: '#2563eb' }}>→</span>
                  <span className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                    Agency partnerships available
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2563eb' }}>→</span>
                  <span className="font-monospace" style={{ fontSize: '13px', color: '#cbd5e1' }}>
                    No long-term contracts required
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
