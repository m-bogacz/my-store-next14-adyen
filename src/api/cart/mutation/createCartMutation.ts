import { executeGraphql } from "@/api/graphql/executeGraphql";
import { CreateCartDocument } from "@/gql/graphql";
import { publishOrder } from "./publishOrder";

export const createCart = async () => {
  const cart = await executeGraphql({
    query: CreateCartDocument,
  });

  if (!cart.createOrder) {
    throw new Error("Cart not created");
  }

  await publishOrder(cart.createOrder.id);

  return cart.createOrder.id;
};
