"use client";

import Image from "next/image";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 56;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-dark-darker/85 backdrop-blur-xl border-b border-white/[0.06] flex items-center justify-between px-6 md:px-12">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-3">
        <Image 
          src="/act_logo.svg" 
          alt="A.C.T Logo" 
          width={32} 
          height={32}
          className="w-8 h-8"
        />
        <div className="font-mono text-[20px] font-bold text-white">Christopher Hoole</div>
      </div>

      {/* Right: Nav Links + CTA */}
      <div className="flex gap-4 md:gap-8 items-center">
        <button
          onClick={() => scrollToSection("about")}
          className="font-mono text-[18px] text-white hover:text-primary transition-colors hidden md:block"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="font-mono text-[18px] text-white hover:text-primary transition-colors hidden md:block"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("act")}
          className="font-mono text-[18px] text-white hover:text-primary transition-colors hidden md:block"
        >
          A.C.T
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="font-mono text-[14px] text-white bg-primary px-5 py-2 rounded uppercase tracking-wider hover:bg-blue-600 transition-colors"
        >
          Let&apos;s Discuss Your Paid Ads
        </button>
      </div>
    </nav>
  );
}
