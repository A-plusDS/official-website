import type { Metadata } from "next";
import { Inter, Sora, Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import ScrollEffects from "@/components/ScrollEffects";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Automatically resolve domain for Vercel preview/production deployments or custom domain
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://aplusdigitalsolutions.com";
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A+ Digital Solutions | Strategy, Brand Design & Software Studio",
    template: "%s | A+ Digital Solutions",
  },
  description:
    "A creative digital partner shaping strategy, brand identity, product design, and custom software for ambitious teams.",
  keywords: [
    "A+ Digital Solutions",
    "brand strategy",
    "brand identity design",
    "UI/UX product design",
    "custom software development",
    "WordPress development studio",
    "web engineering",
    "digital design studio",
  ],
  authors: [{ name: "A+ Digital Solutions", url: siteUrl }],
  creator: "A+ Digital Solutions",
  publisher: "A+ Digital Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A+ Digital Solutions | Strategy, Brand Design & Software Studio",
    description:
      "A creative digital partner shaping strategy, brand identity, product design, and custom software for ambitious teams.",
    url: siteUrl,
    siteName: "A+ Digital Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hero_billboard_official.jpg",
        secureUrl: `${siteUrl}/assets/hero_billboard_official.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "A+ Digital Solutions Studio billboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A+ Digital Solutions | Strategy, Brand Design & Software Studio",
    description:
      "A creative digital partner shaping strategy, brand identity, product design, and custom software for ambitious teams.",
    images: ["/assets/hero_billboard_official.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logos/aplus_mark_dark.svg",
    shortcut: "/assets/logos/aplus_mark_dark.svg",
    apple: "/assets/logos/aplus_mark_dark.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "A+ Digital Solutions",
      "url": siteUrl,
      "logo": `${siteUrl}/assets/logos/aplus_mark_dark.svg`,
      "description":
        "A creative digital partner shaping strategy, brand identity, product design, and custom software for ambitious teams.",
      "email": "Aplusdigitalsolutions.tech@gmail.com",
      "sameAs": ["https://github.com/A-plusDS"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      "name": "A+ Digital Solutions",
      "url": siteUrl,
      "parentOrganization": {
        "@id": `${siteUrl}/#organization`,
      },
      "areaServed": "Global",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Studio Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Strategy & Graphic Craft",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX & Product Design",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Engineering & Bespoke Portfolios",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tailored WordPress Studio",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software & Web Applications",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Quality Assurance & Systems Auditing",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "A+ Digital Solutions",
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${playfair.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}

