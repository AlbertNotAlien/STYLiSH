import React from "react";
import Link from "next/link";
import Image from "next/image";
import lineIcon from "@/public/images/icon/social-media/line.png";
import twitterIcon from "@/public/images/icon/social-media/twitter.png";
import facebookIcon from "@/public/images/icon/social-media/facebook.png";

const FOOTER_NAV_LINKS = [
  {
    title: "關於 STYLiSH",
    url: "/",
  },
  {
    title: "服務條款",
    url: "/",
  },
  {
    title: "隱私政策",
    url: "/",
  },
  {
    title: "聯絡我們",
    url: "/",
  },
  {
    title: "FAQ",
    url: "/",
  },
];

const SOCIAL_MEDIA_ICONS = [
  {
    alternative: "line-icon",
    src: lineIcon,
    url: "/",
  },
  {
    alternative: "twitter-icon",
    src: twitterIcon,
    url: "/",
  },
  {
    alternative: "facebook-icon",
    src: facebookIcon,
    url: "/",
  },
];

export default function Footer() {
  return (
    <div className="flex h-[115px] w-full justify-center bg-background-gray">
      <div className="flex w-page-container max-w-page-container items-center justify-between gap-x-[30px]">
        <div className="flex grow items-center justify-between">
          <nav>
            <ul className="divide-text-dark-gray flex divide-x">
              {FOOTER_NAV_LINKS.map((link) => (
                <li
                  key={link.title}
                  className="flex h-4 w-[134px] justify-center text-center"
                >
                  <Link
                    className="text-text-white text-base leading-4"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-x-[30px]">
            {SOCIAL_MEDIA_ICONS.map((socialMedia) => (
              <li key={socialMedia.alternative}>
                <Link href={socialMedia.url}>
                  <Image
                    src={socialMedia.src}
                    alt={socialMedia.alternative}
                    width={50}
                    height={50}
                    priority
                    className="min-w-[50px]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-text-dark-gray grow text-xs">
          © 2023. All rights reserved.
        </p>
      </div>
    </div>
  );
}
