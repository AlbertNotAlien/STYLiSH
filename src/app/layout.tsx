import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import FixedFooter from "@/components/fixed-footer";

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
          <header className="fixed top-0 z-50 h-[102px] w-full xl:h-[140px]">
            <Header />
          </header>
          <main className="mb-[47px] mt-[102px] w-full xl:mb-[96px] xl:mt-[140px]">
            {children}
          </main>
          <footer className="mb-[60px] xl:mb-0">
            <Footer />
          </footer>
          <div className="fixed bottom-0 block w-full xl:hidden">
            <FixedFooter />
          </div>
        </>
      </body>
    </html>
  );
}
