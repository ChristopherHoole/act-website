"use client";

const WA_URL = 'https://wa.me/447999500184?text=Hi%20Christopher%2C%20I%27d%20like%20to%20discuss%20my%20Google%20Ads%20account.';

const trackWhatsApp = (label: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: label,
    });
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-18006514629/whatsapp_click',
      event_label: label,
    });
  }
};

export default function WhatsAppFloatOriginal() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp('homepage - floating')}
        aria-label="Message on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1eb857] transition-colors shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.738 5.472 2.027 7.773L0 32l8.469-2.001A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.771-1.849l-.486-.289-5.026 1.187 1.22-4.899-.317-.503A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.961c-.399-.199-2.36-1.163-2.727-1.296-.366-.133-.632-.199-.898.2-.267.399-1.031 1.296-1.264 1.562-.233.267-.466.3-.865.1-.399-.2-1.683-.62-3.205-1.977-1.185-1.057-1.985-2.363-2.218-2.762-.233-.399-.025-.615.175-.813.18-.179.399-.466.598-.699.2-.233.267-.399.4-.665.133-.267.066-.499-.033-.699-.1-.2-.898-2.163-1.23-2.962-.324-.778-.654-.672-.898-.685l-.765-.013c-.266 0-.699.1-1.065.499-.366.399-1.397 1.363-1.397 3.326s1.43 3.859 1.63 4.125c.2.267 2.815 4.298 6.821 6.027.953.411 1.697.657 2.277.841.957.304 1.828.261 2.516.158.767-.114 2.36-.964 2.693-1.895.333-.932.333-1.731.233-1.895-.1-.167-.366-.267-.765-.466z"/>
        </svg>
      </a>
    </div>
  );
}
