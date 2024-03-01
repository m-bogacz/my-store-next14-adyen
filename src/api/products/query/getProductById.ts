import { executeGraphql } from "@/api/graphql/executeGraphql";
import { GetProductByIdDocument } from "@/gql/graphql";

export const getProductById = async (id: string) => {
  const product = await executeGraphql({
    query: GetProductByIdDocument,
    variables: { id },
  });

  if (!product.product) {
    throw new Error("Product not found");
  }

  return product.product;
};
