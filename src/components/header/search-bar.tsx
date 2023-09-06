'use client';

import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';
import Image from 'next/image';
import searchIcon from '@/public/images/icon/search.png';
import searchHoverIcon from '@/public/images/icon/search-hover.png';

const DESKTOP_BREAKPOINTS = 1280;

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMobileOpened, setIsMobileOpened] = useState(false);
  const [isDesktopBreakpoints, setIsDesktopBreakpoints] = useState(
    () => window.innerWidth > DESKTOP_BREAKPOINTS,
  );

  const clearInputValue = () => {
    if (inputRef.current && inputRef.current.value !== '') {
      inputRef.current.value = '';
    }
  };

  const closeSearchBar = useCallback(() => {
    setIsMobileOpened(false);
    clearInputValue();
  }, []);

  const toggleSearchBar = () => {
    setIsMobileOpened(!isMobileOpened);
  };

  const searchProducts = () => {
    if (inputRef.current && inputRef.current.value.length > 0) {
      console.log(
        '🚀 ~ file: search-bar.tsx:38 ~ searchProducts ~ inputRef.current.value:',
        inputRef.current.value,
      );
    }
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isDesktopBreakpoints || isMobileOpened) {
      searchProducts();
      closeSearchBar();
    } else {
      toggleSearchBar();
    }
  };

  useEffect(() => {
    function handleWindowResize() {
      const newIsDesktopBreakpoints = window.innerWidth > DESKTOP_BREAKPOINTS;
      setIsDesktopBreakpoints(newIsDesktopBreakpoints);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileOpened && isDesktopBreakpoints) {
      closeSearchBar();
    }
  }, [closeSearchBar, isDesktopBreakpoints, isMobileOpened]);

  return (
    <form
      className={`top-0 flex h-[46px] w-full items-center justify-end overflow-hidden rounded-[20px] border border-stylish-gray-lighter xl:w-[214px] xl:border-solid xl:pr-2.5 ${
        isMobileOpened ? 'border-solid pr-1.5' : 'border-none pr-[7px]'
      }`}
    >
      <input
        type="text"
        ref={inputRef}
        className={`w-[calc(100%-44px)] bg-white py-2.5 pl-5 text-xl text-stylish-gold outline-none xl:block ${
          isMobileOpened ? 'block' : 'hidden'
        }`}
      />
      <button
        className="group/search-icon h-10 w-10 focus:outline-none xl:h-11 xl:w-11"
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
