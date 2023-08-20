"use client";

import React, { useState, MouseEvent } from "react";
import Image from "next/image";

function ProfileIcon() {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (event: MouseEvent) => {
    if (event.type === "mouseenter") {
      setIsHover(true);
    } else if (event.type === "mouseleave") {
      setIsHover(false);
    }
  };

  return (
    <Image
      src={`${
        isHover ? "/images/icon/member-hover.png" : "/images/icon/member.png"
      }`}
      alt="profile-icon"
      width={44}
      height={44}
      priority
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    />
  );
}

export default function ProfileButton() {
  return (
    <button type="submit">
      <ProfileIcon />
    </button>
  );
}
