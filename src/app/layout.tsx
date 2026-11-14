import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PathForge — Free AI for Digital Products & Online Business",
  description: "The free AI platform that gives clear logical routes to create digital products and start an online business. No cluelessness required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
