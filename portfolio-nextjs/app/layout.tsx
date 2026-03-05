import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gian Lopez | AI Engineer & Frontend Developer",
  description:
    "Building intelligent, user-centred web applications with React, Next.js, and AI — grounded in real UX research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
