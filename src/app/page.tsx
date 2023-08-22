import React from "react";
import GlobalNav from "../components/global-nav";
import Carousel from "./home/carousel";
import Products from "./home/products";

// TODO: header, main, footer
export default function Home() {
  return (
    <main>
      <GlobalNav />
      <Carousel />
      <Products />
    </main>
  );
}
