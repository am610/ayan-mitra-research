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
  title: "Ayan Mitra | Research Scientist",
  description:
    "Research scientist working across cosmology, scientific machine learning, uncertainty, and reproducible computing.",
  openGraph: {
    title: "Ayan Mitra | Research Scientist",
    description:
      "Cosmology, scientific AI, uncertainty, and reproducible research systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Mitra | Research Scientist",
    description:
      "Cosmology, scientific AI, uncertainty, and reproducible research systems.",
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
