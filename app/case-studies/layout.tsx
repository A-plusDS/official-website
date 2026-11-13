import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Client Engagements",
  description:
    "Explore our portfolio of brand identity systems, product design, custom web engineering, and software platforms crafted for ambitious businesses.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Client Engagements | A+ Digital Solutions",
    description:
      "Explore our portfolio of brand identity systems, product design, custom web engineering, and software platforms.",
    url: "/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

