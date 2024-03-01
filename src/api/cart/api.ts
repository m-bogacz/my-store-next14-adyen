import { Product } from "@/types/types";
import { createCart } from "@/api/cart/mutation/createCartMutation";
import { cookies } from "next/headers";
import { getCartByIdQuery } from "./query/getCartByIdQuery";
import { getProductById } from "@/api/products/query/getProductById";
import { upsertCartOrderItemMutation } from "./mutation/upsertCartOrderItemMutation";
import { revalidateTag } from "next/cache";

export const getCart = async () => {
  const cartId = cookies().get("cartId")?.value;
  if (!cartId) {
    return;
  }
  const cart = await getCartByIdQuery(cartId);
  return cart;
};

export const initOrFetchCart = async () => {
  const cart = await getCart();
  if (cart) {
    return cart.id;
  }
  const newCart = await createCart();

  if (!newCart) {
    throw new Error("Cart not created");
  }
  cookies().set("cartId", newCart);
  return newCart;
};

export const addProductToCart = async (
  productId: Product["id"],
  orderId: string
) => {
  const product = await getProductById(productId);

  console.log("product =>", product);
  if (!product) {
    throw new Error("Product not found");
  }

  const cart = await getCart();

  const orderItemExist = cart?.orderItem.find(
    (item) => item.product?.id === productId
  );

  await upsertCartOrderItemMutation({
    orderId,
    productId: productId,
    quantity: orderItemExist ? orderItemExist.quantity + 1 : 1,
    orderItemId: orderItemExist?.id,
  });

  revalidateTag("cart");
};
