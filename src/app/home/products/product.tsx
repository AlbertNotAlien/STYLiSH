import React from "react";
import Image from "next/image";
import ColorBlockList from "../../../components/color-block-list";

export default function Product() {
  return (
    <div className="flex flex-col gap-y-5">
      <Image
        src="/images/product/product-demo.png"
        alt="product"
        width={360}
        height={480}
      />
      <ColorBlockList />
      <div className="group/products-text">
        <p className="text-xl font-normal tracking-[4px] text-text-gray group-hover/products-text:underline group-hover/products-text:decoration-1">
          前開衩扭結洋裝
        </p>
        <p className="text-xl font-normal tracking-[4px] text-text-gray group-hover/products-text:underline group-hover/products-text:decoration-1">
          TWD.799
        </p>
      </div>
    </div>
  );
}
