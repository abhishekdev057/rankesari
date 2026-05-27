import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import WhatsAppFab from "@/components/whatsapp-fab";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rankesari.com"),
  title: {
    default: "Ran Kesari — Luxury Desert Camping & Tent Infrastructure",
    template: "%s · Ran Kesari Camping"
  },
  description:
    "Royal Rajasthan luxury Swiss tents, premium desert camps, wedding tent cities and event hospitality infrastructure — installed anywhere. End-to-end luxury temporary accommodation by Ran Kesari Camping.",
  keywords: [
    "luxury camping Rajasthan",
    "Swiss cottage tents",
    "wedding tent infrastructure",
    "desert camp setup",
    "luxury glamping India",
    "Maharaja tents",
    "event tent city",
    "corporate retreat camps",
    "Ran Kesari"
  ],
  openGraph: {
    title: "Ran Kesari — Luxury Desert Camping Infrastructure",
    description:
      "Premium Swiss tents, royal desert camps and end-to-end luxury hospitality infrastructure — installed anywhere in India.",
    url: "https://rankesari.com",
    siteName: "Ran Kesari Camping",
    images: ["/brand/og-cover.jpg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ran Kesari — Luxury Desert Camping Infrastructure",
    description:
      "Royal Rajasthan luxury Swiss tents & premium camp infrastructure — installed anywhere.",
    images: ["/brand/og-cover.jpg"]
  },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-ink text-ivory">
        <SmoothScroll />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
