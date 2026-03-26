import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christopher Hoole — Freelance Google Ads Specialist (Archive Copy)",
  description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HpCopy1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
