import React from "react";
import Image from "next/image";
import { Price } from "./Price";

interface ShopingCartItemProps {
  name: string;
  price: number;
  image: string;
}

export const ShopingCartItem = ({
  name,
  price,
  image,
}: ShopingCartItemProps) => {
  return (
    <div className="flex border gap-5 p-3 max-w-md w-56">
      <Image
        src={image}
        alt="logo"
        width={40}
        height={40}
        className="h-full w-full object-cover object-center"
      />
      <div>
        <span>{name}</span>

        <Price price={price} />
      </div>
      <div className="flex items-center gap-1">
        <span>Ilość:</span>
        <span>1</span>
      </div>
    </div>
  );
};
