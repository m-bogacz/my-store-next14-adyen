import React from "react";
import Image from "next/image";
import { Price } from "./Price";

interface ShopingCartItemProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const ShopingCartItem = ({
  name,
  price,
  image,
  quantity,
}: ShopingCartItemProps) => {
  return (
    <div className="flex border gap-5 py-3 px-5 max-w-4xl min-w-64 rounded-md">
      <div>
        <Image
          src={image}
          alt="logo"
          width={40}
          height={40}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <span>{name}</span>

        <Price price={price} />
      </div>
      <div className="flex items-center gap-1">
        <span>Ilość:</span>
        <span>{quantity}</span>
      </div>
    </div>
  );
};
