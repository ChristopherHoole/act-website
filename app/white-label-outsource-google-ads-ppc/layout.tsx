import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label PPC & Outsource Google Ads UK | White Label Google Ads & Paid Search | Senior Specialist",
  description:
    "White label PPC and outsource Google Ads to a senior specialist with 16 years experience. White label Google Ads, white label AdWords, outsource paid search — your clients' accounts managed under your brand. Maximum 4 agency partners.",
  openGraph: {
    title: "White Label PPC & Outsource Google Ads UK | Senior PPC Specialist",
    description:
      "White label PPC and outsource Google Ads to a senior specialist. White label paid search and AdWords management under your brand. 16 years experience.",
    type: "website",
    url: "https://www.christopherhoole.com/white-label-outsource-google-ads-ppc",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Label PPC & Outsource Google Ads UK | Senior Specialist",
    description:
      "White label PPC and outsource Google Ads to a senior specialist. White label AdWords, outsource paid search — managed under your brand.",
  },
  alternates: {
    canonical: "https://www.christopherhoole.com/white-label-outsource-google-ads-ppc",
  },
};

export default function WhiteLabelOutsourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
