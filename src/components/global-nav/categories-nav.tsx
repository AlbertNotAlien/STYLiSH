import React from "react";
import Link from "next/link";

const NAV_LINK_LIST = [
  {
    title: "女裝",
    link: "/",
  },
  {
    title: "男裝",
    link: "/",
  },
  {
    title: "配件",
    link: "/",
  },
];

// TODO: CategoriesNav links onClick padding
export default function CategoriesNav() {
  const selectedIndex = 0;
  return (
    <li
      role="list"
      className="col mb-[5px] flex h-5 divide-x-[1px] divide-[#3F3A3A]"
    >
      {NAV_LINK_LIST.map((category, index) => (
        <ul
          key={category.title}
          className={`w-[150px] text-center indent-[30px] text-xl leading-5 tracking-[30px] ${
            selectedIndex === index ? "text-[#8B572A]" : "text-[#3F3A3A]"
          }`}
        >
          <Link href={category.link}>{category.title}</Link>
        </ul>
      ))}
    </li>
  );
}
