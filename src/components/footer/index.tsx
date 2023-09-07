import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import lineIcon from '@/public/images/icon/social-media/line.png';
import twitterIcon from '@/public/images/icon/social-media/twitter.png';
import facebookIcon from '@/public/images/icon/social-media/facebook.png';

const FOOTER_NAV_LINKS = [
  {
    title: '關於 STYLiSH',
    url: '/',
  },
  {
    title: '服務條款',
    url: '/',
  },
  {
    title: '隱私政策',
    url: '/',
  },
  {
    title: '聯絡我們',
    url: '/',
  },
  {
    title: 'FAQ',
    url: '/',
  },
];

const SOCIAL_MEDIA_ICONS = [
  {
    alternative: 'line-icon',
    src: lineIcon,
    url: '/',
  },
  {
    alternative: 'twitter-icon',
    src: twitterIcon,
    url: '/',
  },
  {
    alternative: 'facebook-icon',
    src: facebookIcon,
    url: '/',
  },
];

export default function Footer() {
  return (
    <section className="bg-stylish-gray-darkest flex h-[146px] w-full justify-center xl:h-[115px]">
      <div className="xl:w-desktop-container xl:max-w-desktop-container mt-[23px] flex flex-col items-center justify-start gap-y-[13px] xl:mt-0 xl:flex-row xl:justify-between xl:gap-x-[30px] xl:px-[60px]">
        <div className="flex w-[360px] items-center justify-between px-8 xl:grow xl:px-0">
          <nav>
            <ul className="xl:divide-stylish-gray-medium flex h-[76px] w-full flex-col flex-wrap items-start gap-x-9 gap-y-2 xl:h-[22px] xl:w-auto xl:flex-row xl:flex-nowrap xl:items-center xl:gap-x-0 xl:gap-y-0 xl:divide-x">
              {FOOTER_NAV_LINKS.map((link) => (
                <li
                  key={link.title}
                  className="flex h-5 w-auto justify-center text-center xl:h-4 xl:w-[134px]"
                >
                  <Link
                    className="text-stylish-white text-[14px] xl:text-base xl:leading-4"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-3.5 xl:gap-x-[30px]">
            {SOCIAL_MEDIA_ICONS.map((socialMedia) => (
              <li key={socialMedia.alternative}>
                <Link href={socialMedia.url}>
                  <Image
                    src={socialMedia.src}
                    alt={socialMedia.alternative}
                    width={50}
                    height={50}
                    priority
                    className="w-5 xl:w-[50px]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-stylish-gray-medium text-[10px] xl:text-xs">
          © 2023. All rights reserved.
        </p>
      </div>
    </section>
  );
}
