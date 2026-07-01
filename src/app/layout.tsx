import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import MagneticCursor from "@/components/ui/MagneticCursor";
import Navbar from "@/components/layout/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhavesh Studio | Premium Web Developer",
  description: "Crafting Websites That Clients Remember. I build premium websites, SaaS products, AI dashboards, and high-converting digital experiences.",
  keywords: ["Web Developer", "Frontend Architect", "UX Design", "Next.js", "React", "GSAP", "Three.js", "Framer Motion", "Portfolio"],
  authors: [{ name: "Bhavesh" }],
  openGraph: {
    title: "Bhavesh Studio | Premium Web Developer",
    description: "Crafting Websites That Clients Remember.",
    url: "https://bhavesh.studio",
    siteName: "Bhavesh Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhavesh Studio Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavesh Studio | Premium Web Developer",
    description: "Crafting Websites That Clients Remember.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent-glow selection:text-white font-sans">
        <SmoothScroll>
          <Navbar />
          <MagneticCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
