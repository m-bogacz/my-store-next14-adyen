import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CartIcon = () => {
  return (
    <div className="cursor-pointer">
      <Link href="/cart">
        <Image src="/assets/cart.png" alt="logo" width={40} height={40} />
      </Link>
    </div>
  );
};
