'use server';

// import { API_HOST_NAME, API_VERSION } from '@/constants/config';
import { fetchAllProducts } from './server-side-api';

export async function fetchAllProductsByServerAction({ category = 'all', paging = 0 }: { category?: string, paging?: number }) {
  const result = await fetchAllProducts({ category, paging });
  return result;
}

export async function fetchSingleProduct() {
  // const res = await fetch(
  //   `https://${API_HOST_NAME}/api/${API_VERSION}/products/all?paging=${paging}`,
  // );
  // return res.json();
}
