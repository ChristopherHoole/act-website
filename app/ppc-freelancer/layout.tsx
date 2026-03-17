import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Freelancer UK | 16 Years Experience | Christopher Hoole",
  description:
    "Senior PPC freelancer with 16 years experience. Maximum 4 clients. AI-powered optimisation. Get a free PPC audit today.",
};

export default function PPCFreelancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
