'use server';

// import { API_HOST_NAME, API_VERSION } from '@/constants/config';
import { getProducts, searchProducts } from './server-side-api';

export async function getProductsByServerAction({ category = 'all', paging = 0 }: { category?: string, paging?: number }) {
  const result = await getProducts({ category, paging });
  return result;
}

export async function getProduct() {
  // const res = await fetch(
  //   `https://${API_HOST_NAME}/api/${API_VERSION}/products/all?paging=${paging}`,
  // );
  // return res.json();
}

export async function searchProductsByServerAction(keyword = '', paging = 0) {
  const result = await searchProducts(keyword, paging);
  return result;
}
