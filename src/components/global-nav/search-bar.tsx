"use client";

import React, { useState } from "react";
import Image from "next/image";

function SearchIcon() {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (event: React.MouseEvent) => {
    if (event.type === "mouseenter") {
      setIsHover(true);
    } else if (event.type === "mouseleave") {
      setIsHover(false);
    }
  };

  return (
    <Image
      src={`${
        isHover ? "/images/icon/search-hover.png" : "/images/icon/search.png"
      }`}
      alt="search"
      width={44}
      height={44}
      priority
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    />
  );
}

export default function SearchBar() {
  return (
    <form className="flex h-[46px] w-[214px] justify-between overflow-hidden rounded-[20px] border border-border-gray pl-5 pr-2.5">
      <input
        type="text"
        className="w-[calc(100%-44px)] py-2.5 text-xl text-highlight-gold outline-none"
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
