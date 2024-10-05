import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import "cal-sans";

export const metadata: Metadata = {
  title: "Raven",
  description: "Raven is an open source chat application, built using Frappe Framework.",
  viewport: "width=device-width, initial-scale=1",  // Meta tag for responsive design
  keywords: "Raven, Frappe Framework, raven AI, messaging app, work chat, open source",  // Keywords for SEO
  openGraph: {
    title: "Raven - Chat + AI for your business",
    description: "Use Raven, an open-source chat application for the Frappe ecosystem.",
    url: "https://ravenchat.ai",
    siteName: "Raven Chat",
    images: [
      {
        url: "assets/MetaImage.png",  // Path to your OG image
        width: 800,
        height: 600,
        alt: "Raven Website Cover Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
