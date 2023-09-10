'use client';

import React, { useState, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

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

// TODO: CategoriesNav links onClick padding
export default function CategoriesNav() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryParams = CATEGORY_LIST.find((category) => searchParams.get('category') === category.category)?.category || 'all';
  const [category, setCategory] = useState(categoryParams);

  const createQueryString = useCallback(
    // TODO: maybe move to utils
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const selectCategory = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`${pathname}?${createQueryString('category', newCategory)}`);
  };

  return (
    <nav
      role="list"
      className="col xl:divide-stylish-gray-darker flex h-full w-full items-center divide-x-[1px] divide-stylish-gray-medium"
    >
      {CATEGORY_LIST.map((item) => (
        <div
          key={item.title}
          className={`w-full text-center text-base xl:w-[150px] xl:indent-[30px] xl:text-xl xl:leading-5 xl:tracking-[30px] ${
            category === item.category
              ? 'text-stylish-white xl:text-stylish-gold'
              : 'text-stylish-gray-medium xl:text-stylish-gray-darker'
          }`}
        >
          <button type="submit" onClick={() => selectCategory(item.category)}>{item.title}</button>
        </div>
      ))}
    </nav>
  );
}
