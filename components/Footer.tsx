export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#1e293b]">
      {/* Left */}
      <div className="text-[18px] text-white font-mono">
        Christopher Hoole · © 2026
      </div>

      {/* Right */}
      <div className="text-[18px] text-white font-mono flex flex-wrap items-center justify-center gap-2">
        <a 
          href="https://www.linkedin.com/in/christopherhoole/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
        <span>·</span>
        <a 
          href="mailto:chrishoole101@gmail.com"
          className="hover:text-primary transition-colors"
        >
          chrishoole101@gmail.com
        </a>
        <span>·</span>
        <span>Built by Christopher Hoole 2026</span>
      </div>
    </footer>
  );
}
