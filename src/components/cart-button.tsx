import React from 'react';
import Image from 'next/image';
import cartIcon from '@/public/images/icon/cart.png';
import cartMobileIcon from '@/public/images/icon/cart-mobile.png';
import cartHoverIcon from '@/public/images/icon/cart-hover.png';

export default function CartButton() {
  return (
    <button
      className="group/cart-icon flex w-1/2 items-center justify-center xl:block xl:w-auto "
      type="submit"
    >
      <div className="relative h-11 w-11">
        <Image
          src={cartHoverIcon}
          alt="cart-hover-icon"
          width={44}
          height={44}
          priority
          className="absolute top-0 h-full w-full group-hover/cart-icon:block"
        />
        <div>
          <Image
            src={cartIcon}
            alt="cart-icon"
            width={44}
            height={44}
            priority
            className="absolute top-0 hidden h-full w-full group-hover/cart-icon:hidden xl:block"
          />
          <Image
            src={cartMobileIcon}
            alt="cart-mobile-icon"
            width={44}
            height={44}
            priority
            className="absolute top-0 block h-full w-full group-hover/cart-icon:hidden xl:hidden"
          />
        </div>
      </div>
      <p className="group-hover/cart-icon:text-stylish-gold-default text-base text-stylish-white xl:hidden">
        購物車
      </p>
    </button>
  );
}
