import { API_HOST_NAME, API_VERSION } from "@/constants/config";

export const fetchAllProducts = async () => {
  const res = await fetch(
    `https://${API_HOST_NAME}/api/${API_VERSION}/products/all`,
  );
  return res.json();
};
