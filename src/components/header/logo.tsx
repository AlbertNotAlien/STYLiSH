import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="h-12">
      <Image
        src="/images/logo/logo.png"
        alt="STYLiSH-logo"
        width={258}
        height={48}
        priority
      />
    </Link>
  );
}
