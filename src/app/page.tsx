import React from 'react';
import { getProducts, searchProducts } from '@/utils/server-side-api';
import Carousel from './home/carousel';
import ProductList from './home/product-list';
import { Products } from '@/types/products';

type SearchParams =
  | {
      [key: string]: string | string[] | undefined;
    }
  | undefined;

async function fetchProducts(searchParams: SearchParams) {
  if (
    searchParams &&
    searchParams.keyword &&
    typeof searchParams.keyword === 'string'
  ) {
    return searchProducts(searchParams.keyword);
  }

  if (
    searchParams &&
    searchParams.category &&
    typeof searchParams.category === 'string'
  ) {
    return getProducts({
      category: searchParams.category,
    });
  }

  return getProducts({
    category: 'all',
  });
}

export default async function Home({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const products: Products = await fetchProducts(searchParams);
  return (
    <>
      <Carousel />
      <ProductList initialProducts={products} />
    </>
  );
}
