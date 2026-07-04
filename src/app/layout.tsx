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
  title: "Bhavesh Works | Premium Web Developer & Frontend Architect",
  description: "Bhavesh Works: Crafting Websites That Clients Remember. I build premium websites, SaaS products, AI dashboards, and high-converting digital experiences.",
  keywords: ["Bhavesh Works", "bhavesworks", "workwitbhavesh", "bhaveshwork", "bhaveshworks.online", "Web Developer", "Frontend Architect", "UX Design", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Bhavesh" }],
  metadataBase: new URL("https://bhaveshworks.online"),
  openGraph: {
    title: "Bhavesh Works | Premium Web Developer",
    description: "Crafting Websites That Clients Remember.",
    url: "https://bhaveshworks.online",
    siteName: "Bhavesh Works",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhavesh Works Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavesh Works | Premium Web Developer",
    description: "Crafting Websites That Clients Remember.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bhavesh Works",
  image: "https://bhaveshworks.online/og-image.png",
  url: "https://bhaveshworks.online",
  description: "Bhavesh Works: Crafting Websites That Clients Remember.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent-glow selection:text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <MagneticCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
