import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Agency Alternative | Google Ads Agency UK | Senior Paid Search & AdWords Agency Alternative",
  description:
    "Looking for a PPC agency? Get everything a Google Ads agency delivers — managed by one senior specialist with 16 years experience. No juniors, no middlemen. A smarter alternative to a typical pay per click agency or paid search agency.",
  openGraph: {
    title: "PPC Agency Alternative | Google Ads Agency UK",
    description:
      "Everything a Google Ads agency delivers, managed by one senior specialist. 16 years experience. No juniors, no account manager middlemen. Free waste report.",
    type: "website",
    url: "https://www.christopherhoole.com/ppc-google-ads-agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Agency Alternative | Google Ads Agency UK",
    description:
      "Looking for a PPC agency? Get senior-level Google Ads management without the agency overhead. 16 years, £50M+ managed.",
  },
  alternates: {
    canonical: "https://www.christopherhoole.com/ppc-google-ads-agency",
  },
};

export default function PPCAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
