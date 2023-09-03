import React from "react";
import Link from "next/link";
import Image from "next/image";
import CategoriesNav from "./categories-nav";
import SearchBar from "./search-bar";
import CartButton from "../cart-button";
import ProfileButton from "../profile-button";

// TODO: global padding
// TODO: font Noto Sans TC
// TODO: Button Component

export default function Header() {
  return (
    <>
      <div className="flex h-[52px] items-center justify-between bg-white px-4 py-1.5 xl:h-[100px] xl:px-[60px] xl:py-[26px]">
        <div className="w-11 xl:hidden" />
        <div className="flex items-end gap-[57px]">
          <Link
            href="/"
            className="relative h-[24px] w-[129px] xl:h-[48px] xl:w-[258px]"
          >
            <Image
              src="/images/logo/logo.png"
              alt="STYLiSH-logo"
              priority
              fill
              style={{
                objectFit: "cover",
              }}
              className="h-[24px] xl:h-[48px] "
            />
          </Link>
          <nav className="hidden h-5 xl:mb-[5px] xl:block">
            <CategoriesNav />
          </nav>
        </div>
        <div className="flex gap-x-[42px]">
          <SearchBar />
          <div className="hidden xl:flex xl:gap-x-[42px]">
            <CartButton />
            <ProfileButton />
          </div>
        </div>
      </div>
      <section className="bg-stylish-gray-darkest h-[50px] xl:h-[40px]">
        <nav className="block h-full xl:hidden">
          <CategoriesNav />
        </nav>
      </section>
    </>
  );
}
