import React from "react";

type CarouselDotProps = {
  index: number;
  activeDotIndex: number;
  handleSelectDot: Function;
};

export default function CarouselDot({
  index,
  activeDotIndex,
  handleSelectDot,
}: CarouselDotProps) {
  const isActive = activeDotIndex === index;
  return (
    <button
      type="button"
      aria-label="carousel"
      className={`h-[10px] w-[10px] rounded-full ${
        isActive ? "bg-highlight-gold" : "bg-white/40"
      }`}
      onClick={() => handleSelectDot(index)}
    />
  );
}
