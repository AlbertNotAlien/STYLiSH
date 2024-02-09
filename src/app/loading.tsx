import React from 'react';
import ProductsSkeleton from '@/components/products-skeleton';

// TODO: RWD
// TODO: opacity & position transition like apple.com
// TODO: margin-bottom
export default function Loading() {
  return (
    <>
      <div className="h-[500px] w-full animate-pulse bg-stylish-gray-lightest" />
      <div className="mx-6 mt-[15px] flex flex-wrap justify-start gap-x-1.5 gap-y-6 xl:mx-auto xl:mt-[70px] xl:w-desktop-container xl:max-w-desktop-container xl:gap-x-10 xl:gap-y-[50px] xl:px-[60px]">
        <ProductsSkeleton />
      </div>
    </>
  );
}
