import React from "react";
import CartButton from "./cart-button";
import ProfileButton from "./profile-button";

export default function FixedFooter() {
  return (
    <section className="bg-stylish-gray-darkest flex h-[60px] w-full items-center justify-between">
      <CartButton />
      <span className="bg-stylish-gray-medium h-[24px] w-[1px]" />
      <ProfileButton />
    </section>
  );
}
