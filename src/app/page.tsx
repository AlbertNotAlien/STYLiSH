import React from 'react';
import Carousel from './home/carousel';
import { fetchAllProducts } from '@/utils/server-side-api';
import Products from './home/products';
import { ProductsType } from '@/types/products';

export default async function Home() {
  const products: ProductsType = await fetchAllProducts();
  return (
    <>
      <Carousel />
      <Products initialProducts={products} />
    </>
  );
}
