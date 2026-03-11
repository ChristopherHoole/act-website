import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Hoole - Senior Google Ads Specialist",
  description: "16 years of Google Ads experience with a proprietary AI engine (A.C.T). Maximum 4 clients. Agency partnerships available.",
  openGraph: {
    title: "Christopher Hoole - Senior Google Ads Specialist",
    description: "16 years of Google Ads experience with a proprietary AI engine.",
    type: "website",
    url: "https://christopherhoole.online",
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
      </head>
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-180006514629"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-180006514629');
        `}
      </Script>
    </html>
  );
}
