import { executeGraphql } from "@/api/graphql/executeGraphql";
import { PublishOrderItemDocument } from "@/gql/graphql";

export const publishOrderItem = async (orderItemId: string) => {
  await executeGraphql({
    query: PublishOrderItemDocument,
    variables: {
      orderItemId,
    },
  });
};
