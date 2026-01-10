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
  title: "Kağan Sofoğlu | Web Geliştirici & Yazılım Çözümleri",
  description: "Profesyonel web geliştirme, Next.js, React, TypeScript. Kurumsal standartlarda, ölçeklenebilir ve güvenli web uygulamaları.",
  keywords: ["web geliştirici", "yazılım geliştirme", "Next.js", "React", "Kağan Sofoğlu", "web tasarımı"],
  authors: [{ name: "Kağan Sofoğlu" }],
  creator: "Kağan Sofoğlu",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://kagan-sofoglu.com",
    siteName: "Kağan Sofoğlu",
    title: "Kağan Sofoğlu | Web Geliştirici",
    description: "Profesyonel web geliştirme ve yazılım çözümleri",
    images: [
      {
        url: "https://kagan-sofoglu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kağan Sofoğlu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kağan Sofoğlu | Web Geliştirici",
    description: "Profesyonel web geliştirme ve yazılım çözümleri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://kagan-sofoglu.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kağan Sofoğlu",
              url: "https://kagan-sofoglu.com",
              jobTitle: "Web Geliştirici",
              image: "https://kagan-sofoglu.com/og-image.png",
              sameAs: [
                "https://github.com/1kagan1",
                "https://linkedin.com/in/kagan-sofoglu",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}