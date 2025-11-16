import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Elie Bou Absi - System Developer",
  description:
    "Portfolio of Elie Bou Absi, a system developer focused on building scalable digital solutions.",
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
