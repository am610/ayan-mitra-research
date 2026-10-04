import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://ayan-mitra-research.vercel.app";
const pageTitle = "Ayan Mitra | Pipeline Scientist, NCSA / LSST DESC";
const pageDescription =
  "Pipeline Scientist at NCSA, University of Illinois Urbana-Champaign, working across cosmology, scientific machine learning, uncertainty, and reproducible computing for LSST DESC.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "profile",
    url: `${siteUrl}/`,
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
    title: pageTitle,
    description: pageDescription,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfilePage",
                  "@id": `${siteUrl}/#profilepage`,
                  url: `${siteUrl}/`,
                  name: pageTitle,
                  description: pageDescription,
                  mainEntity: { "@id": `${siteUrl}/#person` },
                },
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: "Ayan Mitra",
                  jobTitle: "Pipeline Scientist, LSST DESC",
                  url: `${siteUrl}/`,
                  image: `${siteUrl}/ayan-mitra.jpg`,
                  affiliation: [
                    {
                      "@type": "Organization",
                      name: "LSST Dark Energy Science Collaboration",
                    },
                    {
                      "@type": "Organization",
                      name: "National Center for Supercomputing Applications",
                      parentOrganization: {
                        "@type": "CollegeOrUniversity",
                        name: "University of Illinois Urbana-Champaign",
                      },
                    },
                  ],
                  sameAs: [
                    "https://github.com/am610/",
                    "https://www.linkedin.com/in/ayan-mitra-supernova/",
                    "https://orcid.org/0000-0002-9436-8871",
                  ],
                  knowsAbout: [
                    "Type Ia supernova cosmology",
                    "LSST data pipelines",
                    "Scientific machine learning",
                    "Uncertainty quantification",
                    "Reproducible scientific computing",
                  ],
                },
              ],
            }),
          }}
        />
        <Script id="leadfeeder-tracker" strategy="afterInteractive">
          {`(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('lAxoEaK0NRw8OYGd');`}
        </Script>
      </body>
    </html>
  );
}
