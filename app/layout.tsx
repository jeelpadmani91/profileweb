import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Vox Media Agency | YouTube Growth & Dubbing Experts",
    template: "%s | Vox Media Agency",
  },
  description:
    "Professional YouTube dubbing, thumbnail optimization, and channel growth strategies. Transform your content and reach global audiences with our expert services.",
  keywords: [
    "YouTube dubbing",
    "Hindi dubbing",
    "thumbnail optimization",
    "CTR improvement",
    "channel growth",
    "YouTube SEO",
  ],
  authors: [{ name: "Vox Media Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vox Media Agency",
    title: "Vox Media Agency | YouTube Growth & Dubbing Experts",
    description:
      "Professional YouTube dubbing, thumbnail optimization, and channel growth strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vox Media Agency",
    description:
      "Professional YouTube dubbing, thumbnail optimization, and channel growth strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
