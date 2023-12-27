import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STYLiSH",
  description:
    "Elevate your wardrobe with STYLiSH – where fashion meets individuality in every piece",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Header />
          <main className="mb-[96px] mt-[140px]">{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
