// "use client";

import React from "react";
import Image from "next/image";
import searchIcon from "@/public/images/icon/search.png";
import searchHoverIcon from "@/public/images/icon/search-hover.png";

export default function SearchBar() {
  return (
    <form className="border-stylish-gray-lighter flex h-10 justify-between overflow-hidden rounded-[20px] border-none xl:h-[46px] xl:w-[214px] xl:border xl:border-solid xl:pl-5 xl:pr-2.5">
      <input
        type="text"
        className="text-stylish-gold hidden w-[calc(100%-44px)] py-2.5 text-xl outline-none xl:block"
      />
      <button
        className="group/search-icon relative h-10 w-10 xl:h-11 xl:w-11"
        type="submit"
      >
        <Image
          src={searchHoverIcon}
          alt="search-hover-icon"
          width={44}
          height={44}
          priority
          className="absolute top-0 hidden h-full w-full group-hover/search-icon:block"
        />
        <Image
          src={searchIcon}
          alt="search-icon"
          width={44}
          height={44}
          priority
          className="absolute top-0 block h-full w-full group-hover/search-icon:hidden"
        />
      </button>
    </form>
  );
}
