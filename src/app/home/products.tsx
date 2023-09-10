'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { fetchAllProductsByServerAction } from '@/utils/server-actions-api';
import { ProductsType } from '@/types/products';

// TODO: tailwind container in Products
// TODO: margin-top by props merging className in Products

type ProductsProps = {
  initialProducts: ProductsType;
};

export default function Products({ initialProducts }: ProductsProps) {
  const [products, setProducts] = useState(initialProducts);

  const addProducts = (newProducts: ProductsType) => {
    setProducts((prev: ProductsType) => (
      { data: [...prev.data, ...newProducts.data], next_paging: newProducts.next_paging }
    ));
  };

  async function getNextPagingProducts(page: number) {
    const newProducts = await fetchAllProductsByServerAction(page) as ProductsType;
    addProducts(newProducts);
  }

  const { ref } = useInView({
    threshold: 0,
    onChange(inView) {
      if (inView && products.next_paging) {
        getNextPagingProducts(products.next_paging);
      }
    },
  });

  return (
    <section
      className="xl:w-desktop-container xl:max-w-desktop-container mx-6 mt-[15px] flex flex-wrap justify-start gap-x-1.5 gap-y-6 xl:mx-auto xl:mt-[70px] xl:gap-x-10 xl:gap-y-[50px] xl:px-[60px]"
    >
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
              <ul className="flex gap-x-1.5 xl:gap-x-2.5">
                {product.colors.map((color) => (
                  <React.Fragment key={color.name}>
                    <li
                      className="border-stylish-gray-lightest h-3 w-3 border xl:h-6 xl:w-6"
                      style={{ backgroundColor: `#${color.code}` }}
                    />
                  </React.Fragment>
                ))}
              </ul>
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
      {
        products.next_paging
      && <div ref={ref} className="fake-loading h-[500px] w-full bg-gray-200" />
      }
    </section>
  );
}
