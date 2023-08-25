import React from "react";
import Product from "./product";
import { fetchAllProducts } from "@/utils/api";
import { Color } from "@/components/color-block-list";

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
            <Product
              src={product.main_image}
              colors={product.colors}
              title={product.title}
              price={product.price}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
