import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Management & Google Ads Manager UK | Paid Search Management | Senior AdWords Manager",
  description:
    "Hands-on PPC management by a senior Google Ads manager with 16 years experience. Whether you need pay per click management, a dedicated paid search manager, or AdWords management — get a free waste report showing where your budget is going.",
  openGraph: {
    title: "PPC Management & Google Ads Manager UK | Paid Search Management",
    description:
      "Senior PPC management and dedicated Google Ads manager. 16 years experience, £50M+ managed. Hands-on paid search management by one specialist.",
    type: "website",
    url: "https://www.christopherhoole.com/ppc-google-ads-management-manager",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Management & Google Ads Manager UK",
    description:
      "Hands-on Google Ads management by a senior PPC manager. 16 years, £50M+ managed. Free waste report.",
  },
  alternates: {
    canonical: "https://www.christopherhoole.com/ppc-google-ads-management-manager",
  },
};

export default function PPCManagementManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
