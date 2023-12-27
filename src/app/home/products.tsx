import React from 'react';
import Image from 'next/image';
import { fetchAllProducts } from '@/utils/api';
import ColorBlockList, { Color } from '@/components/color-block-list';

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

interface ProductsType {
  data: Product[];
}

export default async function Products() {
  const products: ProductsType = await fetchAllProducts();

  // TODO: margin-top by props merging className
  return (
    <section className="xl:w-desktop-container xl:max-w-desktop-container mx-6 mt-[15px] flex flex-wrap justify-start gap-x-1.5 gap-y-6 xl:mx-auto xl:mt-[70px] xl:gap-x-10 xl:gap-y-[50px] xl:px-[60px]">
      {products.data.map((product) => (
        <React.Fragment key={product.id}>
          <div className="flex w-[calc(50%-6px)] grow flex-col xl:w-auto">
            <Image
              src={product.main_image}
              alt="product-image"
              width={360}
              height={480}
              className="mb-3 w-full xl:mb-5"
            />
            <div className="mb-2.5 xl:mb-5">
              <ColorBlockList colors={product.colors} />
            </div>
            <div className="group/products-text">
              <p className="text-stylish-gray-darker text-xs font-normal tracking-[2.4px] group-hover/products-text:underline group-hover/products-text:decoration-1 xl:text-xl xl:tracking-[4px]">
                {product.title}
              </p>
              <p className="text-stylish-gray-darker text-xs font-normal tracking-[2.4px] group-hover/products-text:underline group-hover/products-text:decoration-1 xl:text-xl xl:tracking-[4px]">
                {product.price}
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}
