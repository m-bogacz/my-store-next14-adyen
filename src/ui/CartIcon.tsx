import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CartIcon = ({ count }: { count: number }) => {
  return (
    <div className="cursor-pointer relative">
      <Link href="/cart">
        <Image src="/assets/cart.png" alt="logo" width={40} height={40} />
        <div className="absolute  top-[-5px] right-0 bg-slate-700 w-5 h-5 flex items-center justify-center rounded-full">
          <span className="text-white text-sm font-semibold">{count}</span>
        </div>
      </Link>
    </div>
  );
};
