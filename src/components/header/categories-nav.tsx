import React from "react";
import Link from "next/link";

const NAV_LINK_LIST = [
  {
    title: "女裝",
    url: "/",
  },
  {
    title: "男裝",
    url: "/",
  },
  {
    title: "配件",
    url: "/",
  },
];

// TODO: #808080
// TODO: CategoriesNav links onClick padding
export default function CategoriesNav() {
  const selectedIndex = 0;
  return (
    <ul
      role="list"
      className="col xl:divide-stylish-gray-darker flex h-full w-full items-center divide-x-[1px] divide-[#808080]"
    >
      {NAV_LINK_LIST.map((category, index) => (
        <li
          key={category.title}
          className={`w-full text-center text-base xl:w-[150px] xl:indent-[30px] xl:text-xl xl:leading-5 xl:tracking-[30px] ${
            selectedIndex === index
              ? "text-stylish-white xl:text-stylish-gold"
              : "text-stylish-gray-medium xl:text-stylish-gray-darker"
          }`}
        >
          <Link href={category.url}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}
