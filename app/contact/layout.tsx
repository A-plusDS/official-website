import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Partnership Inquiry",
  description:
    "Start a conversation with A+ Digital Solutions: partner on a new brand, build custom software, schedule a discovery call, or submit a project brief.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Partnership Inquiry | A+ Digital Solutions",
    description:
      "Start a conversation with A+ Digital Solutions: partner on a new brand, build custom software, or schedule a discovery call.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

