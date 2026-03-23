import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Agency Partner | PPC Agency Partner UK | Paid Search & AdWords Agency Partner",
  description:
    "Looking for a Google Ads agency partner? Senior PPC agency partner with 16 years experience. Whether you need a pay per click agency partner, paid search agency partner, or AdWords agency partner — let's talk about growing your agency.",
  openGraph: {
    title: "Google Ads Agency Partner | PPC Agency Partner UK",
    description:
      "Senior Google Ads agency partner with 16 years experience. Paid search agency partner helping agencies deliver better PPC results for their clients.",
    type: "website",
    url: "https://www.christopherhoole.com/ppc-google-ads-agency-partner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Agency Partner | PPC Agency Partner UK",
    description:
      "Senior Google Ads agency partner and paid search agency partner. 16 years experience. Helping agencies scale their PPC offering.",
  },
  alternates: {
    canonical: "https://www.christopherhoole.com/ppc-google-ads-agency-partner",
  },
};

export default function PPCAgencyPartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
