"use server";
import { getCartFromCookies } from "@/app/actions";
import { Product } from "@/types/types";
import { cookies } from "next/headers";

export const addProductToCart = async (product: Product) => {
  const cart = await getCartFromCookies();

  if (!cart) {
    cookies().set("cart", JSON.stringify({ items: [product] }));
    return;
  }
  const newCart = {
    ...cart,
    items: [...cart.items, product],
  };

  cookies().set("cart", JSON.stringify(newCart));
};
