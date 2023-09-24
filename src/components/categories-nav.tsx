'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryParams =
    CATEGORY_LIST.find(
      (category) => searchParams.get('category') === category.category,
    )?.category || 'all';

  return (
    <nav
      role="list"
      className="col flex h-full w-full items-center divide-x-[1px] divide-stylish-gray-medium xl:divide-stylish-gray-darker"
    >
      {CATEGORY_LIST.map((item) => (
        <Link
          key={item.title}
          href={`${pathname}?category=${item.category}`}
          className={`w-full text-center text-base hover:brightness-125 xl:w-[150px] xl:indent-[30px] xl:text-xl xl:leading-5 xl:tracking-[30px] ${
            categoryParams === item.category
              ? 'text-stylish-white xl:text-stylish-gold'
              : 'text-stylish-gray-medium xl:text-stylish-gray-darker'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
