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
  title: "TioGaTech - Modern Technology Solutions for Your Business",
  description:
    "Empowering businesses with cutting-edge technology solutions. Web development, cloud services, consulting, and more.",
  keywords: ["web development", "cloud solutions", "technology consulting", "business solutions"],
  authors: [{ name: "TioGaTech" }],
  openGraph: {
    title: "TioGaTech - Modern Technology Solutions",
    description: "Empowering businesses with cutting-edge technology solutions.",
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
