import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Hoole — Senior Google Ads Specialist",
  description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
  metadataBase: new URL("https://www.christopherhoole.online"),
  openGraph: {
    title: "Christopher Hoole — Senior Google Ads Specialist",
    description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
    url: "https://www.christopherhoole.online",
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
