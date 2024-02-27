import React from "react";
import Image from "next/image";
import { Price } from "./Price";
import { AddToCartButton } from "./AddToCart";
import { addProductToCart } from "@/api/cart/cartApi";

interface CardProps {
  image: {
    url: string;
  };
  name: string;
  price: number;
}

export const Card = ({ image, name, price }: CardProps) => {
  async function addToCartAction() {
    "use server";

    await addProductToCart({ image: image.url, name, price, quantity: 1 });
  }

  return (
    <div className="border-slate-300 rounded-sm border flex flex-col justify-center items-center cursor-pointer">
      <div className="overflow-hidden p-5  ">
        <Image
          src={image.url}
          alt={name}
          width={150}
          height={200}
          className="h-full w-full object-cover object-center transform rounded transition-transform hover:scale-105"
        />
      </div>
      <div className="flex justify-around w-full ">
        <h4 className="text-slate-500">{name}</h4>
        <Price price={price} />
      </div>
      <form action={addToCartAction}>
        <AddToCartButton />
      </form>
    </div>
  );
};
