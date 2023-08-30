"use client";

import React, { useState } from "react";
import Image from "next/image";

const CAROUSEL_LIST = ["1", "2", "3"];

export default function Carousel() {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const handleSelectDot = (index: number) => {
    setActiveDotIndex(index);
  };

  return (
    // TODO: remove bg-yellow-500
    <div className="relative z-10 flex h-[500px] justify-center bg-yellow-500">
      <Image
        src="/images/carousel/carousel-1.png"
        alt="carousel"
        width={1920}
        height={500}
        style={{ minHeight: "500px", objectFit: "cover" }}
        priority
      />
      <div className="absolute flex h-full w-[1280px] max-w-[1280px] items-center">
        <section className="absolute ml-[87px]">
          <p className="text-3xl leading-[57px] text-text-black">
            於是
            <br />
            我也想要給你
            <br />
            一個那麼美好的自己。
          </p>
          <p className="text-xl leading-[64px] text-text-black">
            不朽《與自己和好如初》
          </p>
        </section>
        <section>
          <ul className="absolute bottom-0 left-1/2 mb-[34px] flex -translate-x-1/2 gap-x-[22px]">
            {CAROUSEL_LIST.map((item, index) => {
              const isActive = activeDotIndex === index;
              return (
                <li key={item}>
                  <button
                    type="button"
                    aria-label="carousel"
                    className={`h-[10px] w-[10px] rounded-full ${
                      isActive ? "bg-highlight-gold" : "bg-white/40"
                    }`}
                    onClick={() => handleSelectDot(index)}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
