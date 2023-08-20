"use client";

import React, { useState, MouseEvent } from "react";
import Image from "next/image";

function CartIcon() {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (event: MouseEvent) => {
    if (event.type === "mouseenter") {
      setIsHover(true);
    } else if (event.type === "mouseleave") {
      setIsHover(false);
    }
  };

  return (
    <Image
      src={`${
        isHover ? "/images/icon/cart-hover.png" : "/images/icon/cart.png"
      }`}
      alt="cart-icon"
      width={44}
      height={44}
      priority
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    />
  );
}

export default function CartButton() {
  return (
    <button type="submit">
      <CartIcon />
    </button>
  );
}
