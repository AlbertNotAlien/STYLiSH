import React from "react";
import Image from "next/image";
import { fetchAllProducts } from "@/utils/api";
import ColorBlockList, { Color } from "@/components/color-block-list";

// TODO: tailwind container

type Variant = {
  color_code: string;
  size: string;
  stock: number;
};

interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  texture: string;
  wash: string;
  place: string;
  note: string;
  story: string;
  colors: Color[];
  sizes: string[];
  variants: Variant[];
  main_image: string;
  images: string[];
}

interface Products {
  data: Product[];
}

export default async function Products() {
  const products: Products = await fetchAllProducts();

  return (
    <div className="mt-[70px] flex justify-center">
      <div className="flex w-page-container max-w-page-container flex-wrap justify-start gap-x-10 gap-y-[50px]">
        {products.data.map((product) => (
          <React.Fragment key={product.id}>
            <div className="flex flex-col gap-y-5">
              <Image
                src={product.main_image}
                alt="product-image"
                width={360}
                height={480}
              />
              <ColorBlockList colors={product.colors} />
              <div className="group/products-text">
                <p className="text-xl font-normal tracking-[4px] text-text-gray group-hover/products-text:underline group-hover/products-text:decoration-1">
                  {product.title}
                </p>
                <p className="text-xl font-normal tracking-[4px] text-text-gray group-hover/products-text:underline group-hover/products-text:decoration-1">
                  {product.price}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
