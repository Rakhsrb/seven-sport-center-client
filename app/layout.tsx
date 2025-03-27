import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seven Sport Center | Dzyudo Klubi",
  description: "Namangandagi eng zamonaviy dzyudo sport klubi.",
  keywords: "dzyudo, sport, Namangan, judo club, тренировки",
  authors: [{ name: "Seven Sport Center", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Seven Sport Center | Dzyudo Klubi",
    description: "Namangandagi eng zamonaviy dzyudo sport klubi.",
    url: "https://yourwebsite.com",
    type: "website",
    locale: "uz_UZ",
    siteName: "Seven Sport Center",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seven Sport Center - Namangandagi dzyudo klubi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Seven Sport Center | Dzyudo Klubi",
    description: "Namangandagi eng zamonaviy dzyudo sport klubi.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yourwebsite.com",
    languages: {
      "uz-UZ": "https://yourwebsite.com/uz",
      "ru-RU": "https://yourwebsite.com/ru",
      "en-US": "https://yourwebsite.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
