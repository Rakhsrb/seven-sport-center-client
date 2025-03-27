import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seven sport klub",
  description: "Namangandagi eng zamonaviy dzyudo sport klubi",
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
