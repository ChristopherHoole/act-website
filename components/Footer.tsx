import Link from "next/link";

const WA_URL = 'https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%27m%20interested%20in%20discussing%20my%20Google%20Ads%20account.';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] border-t border-[#1e293b]">

      {/* ===== BRAND STATEMENT ===== */}
      <div className="py-16 px-6 md:px-20 text-center border-b border-[#1e293b]">
        <h3 className="text-[32px] font-bold text-[#f8fafc] leading-[1.3] mb-4 font-serif">
          16 years of experience.<br />
          <span className="text-primary">Proprietary AI.</span> Zero compromises.
        </h3>
        <p className="font-mono text-[15px] text-[#94a3b8] mb-8">
          Maximum 4 clients. Currently accepting new partnerships.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-lg font-mono text-[12px] font-bold uppercase tracking-widest hover:bg-[#1eb857] transition-colors no-underline"
          >
            <span className="text-[18px]">💬</span>
            Message on WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3.5 rounded-lg font-mono text-[12px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors no-underline"
          >
            Let&apos;s Discuss Your Paid Ads
          </a>
        </div>
      </div>

      {/* ===== THREE COLUMNS ===== */}
      <div className="py-12 px-6 md:px-20 border-b border-[#1e293b]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1: Brand + Logo */}
          <div>
            <div className="font-mono text-[11px] font-bold text-primary uppercase tracking-[2px] mb-4">
              Christopher Hoole
            </div>
            {/* Inline ACT logo */}
            <div className="flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="44" height="44">
                <circle cx="50" cy="50" r="41" fill="none" stroke="#4285F4" strokeWidth="10"/>
                <circle cx="50" cy="50" r="29" fill="none" stroke="#EA4335" strokeWidth="10"/>
                <circle cx="50" cy="50" r="17" fill="none" stroke="#FBBC05" strokeWidth="10"/>
                <circle cx="50" cy="50" r="10" fill="#34A853"/>
              </svg>
              <div className="font-mono text-[20px] font-bold text-[#f8fafc]">
                Christopher Hoole
              </div>
            </div>
            <div className="font-mono text-[14px] text-[#94a3b8] leading-relaxed">
              Senior Google Ads management.<br />
              Proprietary AI engine.<br />
              Maximum 4 clients.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="font-mono text-[11px] font-bold text-primary uppercase tracking-[2px] mb-4">
              Navigation
            </div>
            <ul className="list-none space-y-3">
              {[
                { label: "About Me", href: "#about" },
                { label: "Work History", href: "#experience" },
                { label: "What A.C.T Does", href: "#act" },
                { label: "Why I'm Different", href: "#different" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-[15px] text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <div className="font-mono text-[11px] font-bold text-primary uppercase tracking-[2px] mb-4">
              Get in Touch
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[18px]">🔗</span>
                <a
                  href="https://www.linkedin.com/in/christopherhoole/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[15px] text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[18px]">💬</span>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[15px] text-[#25D366] hover:text-[#1eb857] transition-colors"
                >
                  WhatsApp — +44 7999 500 184
                </a>
              </div>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-mono text-[12px] font-bold uppercase tracking-wider hover:bg-[#1eb857] transition-colors no-underline"
            >
              <span>💬</span> Message on WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM STRIP ===== */}
      <div className="py-4 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="font-mono text-[13px] text-[#475569]">
          © 2026 Christopher Hoole
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="font-mono text-[13px] text-[#475569] hover:text-[#94a3b8] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-mono text-[13px] text-[#475569] hover:text-[#94a3b8] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        <div className="font-mono text-[13px] text-[#475569]">
          Designed and Built by Christopher Hoole
        </div>
      </div>

    </footer>
  );
}
