import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Common Integrals Flashcards",
  description: "Flashcards to study your table of integrals for integration bees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="text-center py-8 text-6xl text-white font-serif font-extrabold italic bg-gradient-to-r from-rose-500 from-10% via-red-700 via-50% to-rose-500 to-90%" >INTEGRAL FLASHCARDS</h1>
        {children}
      </body>
    </html>
  );
}
