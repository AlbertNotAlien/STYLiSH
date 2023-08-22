import React from "react";
import Header from "../components/header";
import Carousel from "./home/carousel";
import Products from "./home/products";

// TODO: header, main, footer
export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Header />
      </header>
      <main className="mt-[140px]">
        <Carousel />
        <Products />
      </main>
    </>
  );
}
