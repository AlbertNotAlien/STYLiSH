import React from "react";
import Image from "next/image";
import ColorBlockList, { Color } from "@/components/color-block-list";

type ProductProps = {
  src: string;
  colors: Color[];
  title: string;
  price: number;
};

export default function Product({ src, colors, title, price }: ProductProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <Image src={src} alt="product-image" width={360} height={480} />
      <ColorBlockList colors={colors} />
      <div className="group/products-text">
        <p className="text-xl font-normal tracking-[4px] text-text-gray group-hover/products-text:underline group-hover/products-text:decoration-1">
          {title}
        </p>
        <p className="text-xl font-normal tracking-[4px] text-text-gray group-hover/products-text:underline group-hover/products-text:decoration-1">
          {price}
        </p>
      </div>
    </div>
  );
}
