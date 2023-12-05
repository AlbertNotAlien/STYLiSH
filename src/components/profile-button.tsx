import React from 'react';
import Image from 'next/image';
import profileIcon from '@/public/images/icon/member.png';
import profileMobileIcon from '@/public/images/icon/member-mobile.png';
import profileHoverIcon from '@/public/images/icon/member-hover.png';

export default function ProfileButton() {
  return (
    <button
      className="group/profile-icon flex w-1/2 items-center justify-center xl:block xl:w-auto "
      type="submit"
    >
      <div className="relative h-11 w-11">
        <Image
          src={profileHoverIcon}
          alt="profile-hover-icon"
          width={44}
          height={44}
          priority
          className="absolute top-0 hidden h-full w-full group-hover/profile-icon:block"
        />
        <div>
          <Image
            src={profileIcon}
            alt="profile-icon"
            width={44}
            height={44}
            priority
            className="absolute top-0 hidden h-full w-full group-hover/profile-icon:hidden xl:block"
          />
          <Image
            src={profileMobileIcon}
            alt="profile-mobile-icon"
            width={44}
            height={44}
            priority
            className="absolute top-0 block h-full w-full group-hover/profile-icon:hidden xl:hidden"
          />
        </div>
      </div>
      <p className="group-hover/profile-icon:text-stylish-gold-default text-base text-stylish-white xl:hidden">
        會員
      </p>
    </button>
  );
}
