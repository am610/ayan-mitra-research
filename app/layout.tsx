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
  metadataBase: new URL("https://ayan-mitra-research.ayanmitra.chatgpt.site"),
  title: "Ayan Mitra | Pipeline Scientist, LSST DESC",
  description:
    "Pipeline Scientist for LSST DESC working across cosmology, scientific machine learning, uncertainty, and reproducible computing.",
  openGraph: {
    title: "Ayan Mitra | Pipeline Scientist, LSST DESC",
    description:
      "Cosmology, scientific AI, uncertainty, and reproducible research systems.",
    type: "website",
    url: "https://ayan-mitra-research.ayanmitra.chatgpt.site",
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "Ayan Mitra, Cosmology, Scientific AI, Reproducible Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Mitra | Pipeline Scientist, LSST DESC",
    description:
      "Cosmology, scientific AI, uncertainty, and reproducible research systems.",
    images: ["/og.png"],
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
