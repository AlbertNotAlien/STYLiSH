import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Carousel from "./home/carousel";
import Products from "./home/products";

// TODO: header, main, footer
export default function Home() {
  return (
    <>
      <Header />
      <main className="mb-[96px] mt-[140px]">
        <Carousel />
        <Products />
      </main>
      <Footer />
    </>
  );
}
