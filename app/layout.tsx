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
  title: "Tioga Technologies Ltd - IoT Infrastructure & Renewable Energy Solutions",
  description:
    "IoT infrastructure and embedded systems company developing intelligent renewable energy management platforms to power Africa's clean energy transition.",
  keywords: [
    "IoT infrastructure",
    "embedded systems",
    "renewable energy",
    "clean energy",
    "energy management",
    "Africa",
    "smart grid",
  ],
  authors: [{ name: "Tioga Technologies Ltd" }],
  openGraph: {
    title: "Tioga Technologies Ltd - Renewable Energy Management Platforms",
    description: "Powering Africa's clean energy transition through IoT infrastructure and intelligent renewable energy solutions.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
