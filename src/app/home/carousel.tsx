'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const CAROUSEL_LIST = ['1', '2', '3'];

export default function Carousel() {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const handleSelectDot = (index: number) => {
    setActiveDotIndex(index);
  };

  return (
    // TODO: remove bg-yellow-500
    <section className="relative z-10 flex h-[185px] justify-center bg-yellow-500 xl:h-[500px]">
      <Image
        src="/images/carousel/carousel-1.png"
        alt="carousel"
        width={1920}
        height={500}
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute flex h-full w-full items-center xl:w-[1280px] xl:max-w-[1280px]">
        <div className="absolute ml-[23px] xl:ml-[87px]">
          <p className="text-stylish-black text-[15px] leading-7 xl:text-3xl xl:leading-[57px]">
            於是
            <br />
            我也想要給你
            <br />
            一個那麼美好的自己。
          </p>
          <p className="text-stylish-black text-xs leading-7 xl:text-xl xl:leading-[64px]">
            不朽《與自己和好如初》
          </p>
        </div>
        <ul className="absolute bottom-[18px] left-1/2 flex -translate-x-1/2 gap-x-[8.8px] xl:bottom-[34px] xl:gap-x-[22px]">
          {CAROUSEL_LIST.map((item, index) => {
            const isActive = activeDotIndex === index;
            return (
              <li key={item}>
                <button
                  type="button"
                  aria-label="carousel"
                  className={`h-1 w-1 rounded-full xl:h-2.5 xl:w-2.5 ${
                    isActive ? 'bg-stylish-gold' : 'bg-white/40'
                  }`}
                  onClick={() => handleSelectDot(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
