import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Specialist & Google Ads Expert UK | Paid Search & AdWords Specialist | Free Waste Report",
  description:
    "Senior PPC specialist, Google Ads expert, and paid search specialist with 16 years experience. Whether you need a pay per click expert or AdWords specialist — get a free waste report showing exactly where your budget is going.",
  openGraph: {
    title: "PPC Specialist & Google Ads Expert UK | Paid Search Specialist",
    description:
      "Senior PPC specialist, Google Ads expert, and paid search specialist with 16 years experience. Free waste report showing where your budget is going.",
    type: "website",
    url: "https://www.christopherhoole.com/ppc-specialist-expert",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Specialist & Google Ads Expert UK | Paid Search Specialist",
    description:
      "Senior PPC specialist, pay per click expert, and AdWords specialist. Free Google Ads waste report — see where your budget is going.",
  },
  alternates: {
    canonical: "https://www.christopherhoole.com/ppc-specialist-expert",
  },
};

export default function PPCSpecialistExpertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
