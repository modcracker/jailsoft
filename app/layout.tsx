import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css"; // Global styles
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Font setup matching geometric display sans paired with clean readable body sans
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jailsoft.com"),
  title: {
    default: "Jailsoft | Corrections & Justice Tech Systems",
    template: "%s | Jailsoft",
  },
  description: "Enterprise software, hardware, and communications systems for corrections, detention, and justice facilities.",
  keywords: [
    "Jailsoft",
    "corrections tech",
    "jail systems developer",
    "justice administration software",
    "detention administration platform",
    "CJIS compliant databases",
    "prison security systems"
  ],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jailsoft.com",
    siteName: "Jailsoft",
    title: "Jailsoft | Corrections & Justice Tech Systems",
    description: "Enterprise software, hardware, and communications systems for corrections, detention, and justice facilities.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jailsoft Corrections & Justice Tech Systems",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jailsoft | Corrections & Justice Tech Systems",
    description: "Enterprise software, hardware, and communications systems for corrections, detention, and justice facilities.",
    images: ["https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-black text-white min-h-screen flex flex-col selection:bg-white selection:text-black antialiased font-sans">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
