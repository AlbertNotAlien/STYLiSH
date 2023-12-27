"use client";

import React, { useState } from "react";
import CarouselDot from "./carousel-dot";

type CarouselDotsProps = {
  carouselList: string[];
};

export default function CarouselDots({ carouselList }: CarouselDotsProps) {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const handleSelectDot = (index: number) => {
    setActiveDotIndex(index);
  };

  return (
    <ul className="absolute bottom-0 left-1/2 mb-[34px] flex -translate-x-1/2 gap-x-[22px]">
      {carouselList.map((item, index) => (
        <li key={item}>
          <CarouselDot
            index={index}
            activeDotIndex={activeDotIndex}
            handleSelectDot={handleSelectDot}
          />
        </li>
      ))}
    </ul>
  );
}
