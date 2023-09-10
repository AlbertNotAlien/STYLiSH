import React from 'react';
import { fetchAllProducts } from '@/utils/server-side-api';
import Carousel from './home/carousel';
import Products from './home/products';
import { ProductsType } from '@/types/products';

export default async function Home(
  { searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }; },
) {
  const categoryParams = searchParams && searchParams.category && typeof searchParams.category === 'string' ? searchParams.category : 'all';
  const products: ProductsType = await fetchAllProducts({ category: categoryParams });
  return (
    <>
      <Carousel />
      <Products initialProducts={products} />
    </>
  );
}
