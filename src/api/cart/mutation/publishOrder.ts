import { executeGraphql } from "@/api/graphql/executeGraphql";
import { PublishOrderDocument } from "@/gql/graphql";

export const publishOrder = async (orderId: string) => {
  await executeGraphql({
    query: PublishOrderDocument,
    variables: {
      orderId,
    },
  });
};
