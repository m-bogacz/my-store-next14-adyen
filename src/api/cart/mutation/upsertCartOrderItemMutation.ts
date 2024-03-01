import { executeGraphql } from "@/api/graphql/executeGraphql";
import { CartUpsertOrderItemDocument } from "@/gql/graphql";
import { publishOrderItem } from "./publishOrderItem";

interface UpsertCartOrderItemProps {
  orderId: string;
  productId: string;
  quantity: number;
  orderItemId?: string;
}

export const upsertCartOrderItemMutation = async ({
  orderId,
  productId,
  quantity,
  orderItemId,
}: UpsertCartOrderItemProps) => {
  const response = await executeGraphql({
    query: CartUpsertOrderItemDocument,
    variables: {
      orderId,
      productId,
      quantity,
      orderItemId,
    },
  });
  if (!response.upsertOrderItem) {
    throw new Error("Order item not created");
  }

  await publishOrderItem(response.upsertOrderItem.id);

  return response.upsertOrderItem;
};
