import { API_HOST_NAME, API_VERSION } from '@/constants/config';

export const fetchAllProducts = async ({ category = 'all', paging = 0 }) => {
  const res = await fetch(
    `https://${API_HOST_NAME}/api/${API_VERSION}/products/${category}?paging=${paging}`,
  );
  return res.json();
};

export const fetchSingleProduct = async () => {
  // const res = await fetch(
  //   `https://${API_HOST_NAME}/api/${API_VERSION}/products/all`,
  // );
  // return res.json();
};
