import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Consultant & Google Ads Consultant UK | AdWords & Paid Search Consultant | Free Waste Report",
  description:
    "Senior PPC consultant, Google Ads consultant, and paid search consultant with 16 years experience. Whether you need a pay per click consultant or AdWords consultant — get a free waste report showing exactly where your budget is going.",
  openGraph: {
    title: "PPC Consultant & Google Ads Consultant UK | Paid Search Consultant",
    description:
      "Senior PPC consultant, Google Ads consultant, and paid search consultant with 16 years experience. Free waste report showing where your budget is going.",
    type: "website",
    url: "https://www.christopherhoole.com/ppc-google-adwords-consultant",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Consultant & Google Ads Consultant UK | Paid Search Consultant",
    description:
      "Senior PPC consultant, pay per click consultant, and AdWords consultant. Free Google Ads waste report — see where your budget is going.",
  },
  alternates: {
    canonical: "https://www.christopherhoole.com/ppc-google-adwords-consultant",
  },
};

export default function PPCConsultantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
