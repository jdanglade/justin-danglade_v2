import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./Components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Danglade",
  description: "A simple NextJS web application hosted on Varcel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-slate-300 overflow-x-hidden`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
