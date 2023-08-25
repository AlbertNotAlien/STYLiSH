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

// TODO: CategoriesNav links onClick padding
export default function CategoriesNav() {
  const selectedIndex = 0;
  return (
    <ul
      role="list"
      className="col mb-[5px] flex h-5 divide-x-[1px] divide-text-gray"
    >
      {NAV_LINK_LIST.map((category, index) => (
        <li
          key={category.title}
          className={`w-[150px] text-center indent-[30px] text-xl leading-5 tracking-[30px] ${
            selectedIndex === index ? "text-highlight-gold" : "text-text-gray"
          }`}
        >
          <Link href={category.url}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}
