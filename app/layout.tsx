import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namangan shahridagi dzyudo klubi | Seven Sport Center",
  icons: "./mainlogo.png",
  description:
    "Seven Sport Center – Namangan shahridagi yetakchi dzyudo klubi. Bolalar uchun mashgulotlar.",
  keywords: "дзюдо, спорт, Namangan, дзюдо клуб, тренировки",
  openGraph: {
    title: "Namangan shahridagi dzyudo klubi | Seven Sport Center",
    description:
      "Namangandagi eng yaxshi dzyudo klubida mashq qiling! Professional murabbiylar, zamonaviy sharoitlar, qulay jadval.",
    url: "https://seven-sport-center-client.vercel.app/",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfAq6xh00HGmB98f1qWb0o4V0ZAZfPEpXgsvbMXSylo_k1HWl1CMzOBsywiYYGDpFUmE&usqp=CAU",
        width: 1200,
        height: 630,
        alt: "Дзюдо клуб в Намангане",
      },
    ],
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
