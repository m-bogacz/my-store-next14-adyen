import { GetProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql/executeGraphql";

export const getProducts = async () => {
  const data = await executeGraphql({ query: GetProductsDocument });

  return data.products;
};
