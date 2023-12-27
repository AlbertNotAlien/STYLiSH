'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import searchIcon from '@/public/images/icon/search.png';
import searchHoverIcon from '@/public/images/icon/search-hover.png';
import { searchProductsByServerAction } from '@/utils/server-actions-api';

const DESKTOP_BREAKPOINTS = 1280;

export default function SearchBar() {
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDesktopBreakpoints, setIsDesktopBreakpoints] = useState(() =>
    typeof window !== 'undefined'
      ? window.innerWidth > DESKTOP_BREAKPOINTS
      : false,
  );
  const [isOpenedInMobileSize, setIsOpenedInMobileSize] = useState(false);

  const clearInputValue = () => {
    if (inputRef.current && inputRef.current.value !== '') {
      inputRef.current.value = '';
    }
  };

  const closeSearchBar = useCallback(() => {
    setIsOpenedInMobileSize(false);
    clearInputValue();
  }, []);

  const toggleSearchBar = () => {
    setIsOpenedInMobileSize(!isOpenedInMobileSize);
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      (isDesktopBreakpoints || isOpenedInMobileSize) &&
      inputRef.current &&
      inputRef.current.value.length > 0
    ) {
      searchProductsByServerAction(inputRef.current.value);
      router.push(`${pathname}?keyword=${inputRef.current.value}`);
      closeSearchBar();
    } else {
      toggleSearchBar();
    }
  };

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth > DESKTOP_BREAKPOINTS) {
        setIsDesktopBreakpoints(true);
      } else {
        setIsDesktopBreakpoints(false);
      }
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isOpenedInMobileSize && isDesktopBreakpoints) {
      closeSearchBar();
    }
  }, [closeSearchBar, isDesktopBreakpoints, isOpenedInMobileSize]);

  return (
    <form className="top-0 flex h-10 w-full items-center justify-end xl:h-[46px] xl:w-[214px]">
      <input
        type="text"
        ref={inputRef}
        className={`text-stylish-gold focus:border-stylish-gold pointer-events-auto h-full w-full rounded-[20px] border border-stylish-gray-lighter bg-white py-2.5 pl-5 pr-[54px] text-xl outline-none xl:block xl:border-solid ${
          isOpenedInMobileSize ? 'block border-solid' : 'hidden border-none'
        }`}
      />
      <button
        className="group/search-icon pointer-events-auto absolute mr-1.5 h-10 w-10 focus:outline-none xl:mr-2.5 xl:h-11 xl:w-11"
        type="submit"
        onClick={handleSearch}
      >
        <Image
          src={searchHoverIcon}
          alt="search-hover-icon"
          width={44}
          height={44}
          priority
          className="hidden h-full w-full group-hover/search-icon:block"
        />
        <Image
          src={searchIcon}
          alt="search-icon"
          width={44}
          height={44}
          priority
          className="block h-full w-full group-hover/search-icon:hidden"
        />
      </button>
    </form>
  );
}
