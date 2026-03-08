import type { Metadata } from "next";
import { Inter, Archivo, Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://momentifyapp.com"),
  title: {
    default: "Momentify | Empower Every Moment",
    template: "%s | Momentify",
  },
  description:
    "Stop paying for moments you cannot measure. Momentify captures engagement at trade shows, recruiting events, field sales, and more.",
  keywords: [
    "event engagement platform",
    "trade show lead capture",
    "ROX",
    "return on experience",
    "field sales enablement",
    "technical recruiting events",
    "badge scanning alternative",
    "event analytics",
    "Momentify",
  ],
  authors: [{ name: "Momentify" }],
  creator: "Momentify",
  publisher: "Momentify",
  icons: {
    icon: "/Momentify-Icon.svg",
    apple: "/Momentify-Icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momentifyapp.com",
    siteName: "Momentify",
    title: "Momentify | Empower Every Moment",
    description:
      "Stop paying for moments you cannot measure. Momentify captures engagement at trade shows, recruiting events, field sales, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Momentify - Empower Every Moment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentify | Empower Every Moment",
    description:
      "Stop paying for moments you cannot measure. Momentify captures engagement at trade shows, recruiting events, field sales, and more.",
    images: ["/og-image.png"],
    creator: "@mymomentify",
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
  alternates: {
    canonical: "https://momentifyapp.com",
  },
};

/* JSON-LD structured data for rich search results */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Momentify",
  applicationCategory: "BusinessApplication",
  description:
    "Enterprise engagement platform that captures, scores, and converts in-person interactions at trade shows, recruiting events, field sales, and facilities.",
  url: "https://momentifyapp.com",
  logo: "https://momentifyapp.com/Momentify-Icon.svg",
  sameAs: [
    "https://linkedin.com/company/mymomentify",
    "https://instagram.com/mymomentify",
    "https://x.com/mymomentify",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Schedule a demo for personalized pricing",
    url: "https://momentifyapp.com/demo",
  },
  publisher: {
    "@type": "Organization",
    name: "Momentify",
    logo: {
      "@type": "ImageObject",
      url: "https://momentifyapp.com/Momentify-Icon.svg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${manrope.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
