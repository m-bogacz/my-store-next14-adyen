import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CartIcon = ({ count }: { count: number }) => {
  return (
    <div className="cursor-pointer relative">
      <Link href="/cart">
        <Image src="/assets/cart.png" alt="logo" width={40} height={40} />
        <div className="absolute  top-6 left-0 border-2 border-slate-600 p-1 w-5 h-5 flex items-center justify-center rounded-full">
          <span className="text-slate-600 text-sm font-bold">{count}</span>
        </div>
      </Link>
    </div>
  );
};
