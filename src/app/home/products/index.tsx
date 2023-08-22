import React from "react";
import Product from "./product";

export default function Products() {
  return (
    <div className="mt-[70px] flex justify-center">
      <div className="flex w-page-container max-w-page-container flex-wrap justify-start gap-x-10 gap-y-[50px]">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
