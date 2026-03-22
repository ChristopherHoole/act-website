import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Freelancer UK | Free Google Ads Waste Report | Christopher Hoole",
  description:
    "Senior PPC freelancer with 16 years experience. Get a free Google Ads waste report — I'll show you exactly where your budget is going and what to fix.",
};

export default function PPCFreelancer1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
