import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Hoole — Senior Google Ads Specialist",
  description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
  metadataBase: new URL("https://www.christopherhoole.com"),
  openGraph: {
    title: "Christopher Hoole — Senior Google Ads Specialist",
    description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
    url: "https://www.christopherhoole.com",
    siteName: "Christopher Hoole",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Hoole — Senior Google Ads Specialist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Hoole — Senior Google Ads Specialist",
    description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=9697497&fmt=gif" />
        </noscript>
      </head>
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18006514629"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18006514629');
          gtag('config', 'G-YK75LP5620');
        `}
      </Script>
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "9697497";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript"; b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
    </html>
  );
}
