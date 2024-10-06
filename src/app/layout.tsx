import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local'
import "./globals.css";

const calsans = localFont({ src: './fonts/CalSans-SemiBold.woff2', variable: '--font-calsans' })

export const metadata: Metadata = {
  title: "Raven",
  description: "Raven is an open source chat application, built using Frappe Framework.",
  viewport: "width=device-width, initial-scale=1",  // Meta tag for responsive design
  keywords: "Raven, raven chat, Frappe Framework, raven AI, messaging app, work chat, open source",  // Keywords for SEO
  openGraph: {
    title: "Raven - Chat + AI for your business",
    description: "Use Raven, an open-source chat application for the Frappe ecosystem.",
    url: "https://ravenchat.ai",
    siteName: "Raven",
    images: [
      {
        url: "assets/MetaImage.webp",  // Path to your OG image
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
      <body className={"antialiased " + calsans.variable}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
