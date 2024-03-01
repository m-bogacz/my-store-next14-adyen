import React from "react";
import Image from "next/image";
import { Price } from "./Price";
import { AddToCartButton } from "./AddToCart";
import { addProductToCart, initOrFetchCart } from "@/api/cart/api";

interface CardProps {
  image: {
    url: string;
  };
  name: string;
  price: number;
  id: string;
}

export const Card = ({ image, name, price, id }: CardProps) => {
  async function addToCartAction() {
    "use server";
    const cart = await initOrFetchCart();
    await addProductToCart(id, cart);
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
