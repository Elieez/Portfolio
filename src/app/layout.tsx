import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const siteUrl = "https://elieez.dev";
const siteTitle = "Elie Bou Absi - System Developer";
const siteDescription =
  "Portfolio of Elie Bou Absi, a systems development student in Gothenburg specialising in C#, .NET, and scalable full-stack solutions.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Elie Bou Absi",
    images: [
      {
        url: "/images/Ak_preview.PNG",
        width: 1200,
        height: 630,
        alt: "Elie Bou Absi – System Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/Ak_preview.PNG"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/my-favicon/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/my-favicon/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/my-favicon/icon0.svg', type: 'image/svg+xml' },
      { url: '/my-favicon/icon1.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/my-favicon/apple-icon.png',
  },
  manifest: '/my-favicon/manifest.json',
  appleWebApp: {
    title: "Elie's Portfolio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Elie Bou Absi",
  url: siteUrl,
  jobTitle: "System Developer",
  description: siteDescription,
  sameAs: [
    "https://github.com/Elieez",
    "https://www.linkedin.com/in/elie-bou-absi-5b722123a/",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="relative min-h-screen w-full">
          <Image
            src="/images/dmitry-voronov-ar9jizD0V88-unsplash.jpg"
            alt="Background"
            fill
            className="object-cover object-center -z-10"
            priority
            quality={85}
          />
          <Navbar />
          <main>{children}</main>
        </div>
    </body>
    </html>
  );
}
