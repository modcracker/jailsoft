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
  title: "Jailsoft | Corrections & Justice Tech Systems",
  description: "Enterprise software, hardware, and communications systems for corrections, detention, and justice facilities.",
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
