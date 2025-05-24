import { textFont, titleFont } from "../utils/fonts";
import "./globals.css";

import Header from "@/components/Header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const titleStr = "Li Ang Camp 2025";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: titleStr ,
  description: "Li Ang camp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${titleFont.className}`}>
      <body className="bg-gray-200 text-black">
        <main className="min-h-screen flex flex-col items-center mx-4 mt-20">
          <Menu />
          <Header title={titleStr} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
