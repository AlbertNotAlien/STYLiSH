import React from "react";
import Logo from "./logo";
import CategoriesNav from "./categories-nav";
import SearchBar from "./search-bar";
import CartButton from "./cart-button";
import ProfileButton from "./profile-button";

// TODO: global padding
// TODO: font Noto Sans TC
// TODO: global color setting
// const BACKGROUND_COLOR_GRAY = "#313538";
// const BORDER_COLOR_GRAY = "#979797";
// const COLOR_AND_DIVIDER_GRAY = "#3F3A3A";
// const COLOR_GOLD = "#8B572A";

export default function GlobalNav() {
  return (
    <nav className="flex h-[140px] w-full items-center justify-between border-b-[40px] border-[#313538] px-[60px] py-[26px]">
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
