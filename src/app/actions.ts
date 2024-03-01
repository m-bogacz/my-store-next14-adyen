"use server";

import { cookies } from "next/headers";

export async function getCartFromCookies() {
  const cart = cookies().get("cartId")?.value;

  if (!cart) {
    return null;
  }

  return JSON.parse(cart);
}
