'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { getProductsByServerAction } from '@/utils/server-actions-api';
import { Products } from '@/types/products';
import ProductsSkeleton from '@/components/products-skeleton';

// TODO: tailwind container in Products
// TODO: margin-top by props merging className in Products

const CATEGORY_LIST = [
  {
    title: '女裝',
    category: 'women',
  },
  {
    title: '男裝',
    category: 'men',
  },
  {
    title: '配件',
    category: 'accessories',
  },
];

type ProductsListProps = {
  initialProducts: Products;
};

export default function ProductList({ initialProducts }: ProductsListProps) {
  const [products, setProducts] = useState<Products>(initialProducts);
  const searchParams = useSearchParams();
  const categoryParams =
    CATEGORY_LIST.find(
      (category) => searchParams.get('category') === category.category,
    )?.category || 'all';

  async function getNextPagingProducts(paging: number) {
    const newProducts = (await getProductsByServerAction({
      category: categoryParams,
      paging,
    })) as Products;
    setProducts((prev: Products) => ({
      data: [...prev.data, ...newProducts.data],
      next_paging: newProducts.next_paging,
    }));
  }

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  const [skeletonRef] = useInView({
    threshold: 0,
    onChange(inView) {
      if (inView && products.next_paging) {
        getNextPagingProducts(products.next_paging);
      }
    },
  });

  return (
    <section>
      {products?.data.length > 0 && (
        <div className="mx-6 mt-[15px] flex flex-wrap justify-start gap-x-1.5 gap-y-6 xl:mx-auto xl:mt-[70px] xl:w-desktop-container xl:max-w-desktop-container xl:gap-x-10 xl:gap-y-[50px] xl:px-[60px]">
          {products.data.map((product) => (
            <React.Fragment key={`${product.id}_${categoryParams}`}>
              <div className="flex w-[calc(50%-6px)] flex-col xl:w-auto">
                <Image
                  src={product.main_image}
                  alt="product-image"
                  width={360}
                  height={480}
                  className="mb-3 w-full xl:mb-5 xl:w-[360px]"
                />
                <div className="mb-2.5 xl:mb-5">
                  <ul className="flex gap-x-1.5 xl:gap-x-2.5">
                    {product.colors.map((color) => (
                      <React.Fragment key={color.name}>
                        <li
                          className="h-3 w-3 border border-stylish-gray-lightest xl:h-6 xl:w-6"
                          style={{ backgroundColor: `#${color.code}` }}
                        />
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
                <div className="group/products-text">
                  <p className="text-xs font-normal tracking-[2.4px] text-stylish-gray-darker group-hover/products-text:underline group-hover/products-text:decoration-1 xl:text-xl xl:tracking-[4px]">
                    {product.title}
                  </p>
                  <p className="text-xs font-normal tracking-[2.4px] text-stylish-gray-darker group-hover/products-text:underline group-hover/products-text:decoration-1 xl:text-xl xl:tracking-[4px]">
                    {product.price}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
          {products.next_paging && <ProductsSkeleton ref={skeletonRef} />}
        </div>
      )}
    </section>
  );
}
