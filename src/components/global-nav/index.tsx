import React from "react";
import Logo from "./logo";
import CategoriesNav from "./categories-nav";
import SearchBar from "./search-bar";
import CartButton from "./cart-button";
import ProfileButton from "./profile-button";

// TODO: global padding
// TODO: font Noto Sans TC

// TODO: fixed or sticky
export default function GlobalNav() {
  return (
    <nav className="sticky flex h-[140px] w-full items-center justify-between border-b-[40px] border-background-gray px-[60px] py-[26px]">
      <div className="flex items-end gap-[57px]">
        <Logo />
        <CategoriesNav />
      </div>
      <div className="flex gap-x-[42px]">
        <SearchBar />
        <CartButton />
        <ProfileButton />
      </div>
    </nav>
  );
}
