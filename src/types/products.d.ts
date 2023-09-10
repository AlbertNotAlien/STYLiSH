export type Color = {
  name: string;
  code: string;
};

export type Variant = {
  color_code: string;
  size: string;
  stock: number;
};

export type Product = {
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
};

export type ProductsType = {
  data: Product[];
  next_paging: number | undefined;
};
