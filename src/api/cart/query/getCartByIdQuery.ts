import { executeGraphql } from "@/api/graphql/executeGraphql";
import { GetCartByIdDocument } from "@/gql/graphql";

export const getCartByIdQuery = async (id: string) => {
  const cart = await executeGraphql({
    query: GetCartByIdDocument,
    variables: { id },
    next: {
      tags: ["cart"],
    },
    cache: "no-store",
  });

  return cart.order;
};
