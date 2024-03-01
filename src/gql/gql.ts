/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation createCart {\n  createOrder(data: {}) {\n    id\n  }\n}": types.CreateCartDocument,
    "mutation PublishOrder($orderId: ID) {\n  publishOrder(where: {id: $orderId}, to: PUBLISHED) {\n    id\n  }\n}": types.PublishOrderDocument,
    "mutation PublishOrderItem($orderItemId: ID!) {\n  publishOrderItem(where: {id: $orderItemId}, to: PUBLISHED) {\n    id\n  }\n}": types.PublishOrderItemDocument,
    "mutation CartUpsertOrderItem($orderId: ID!, $productId: ID!, $quantity: Int!, $orderItemId: ID) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: 1, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}, update: {quantity: $quantity}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}": types.CartUpsertOrderItemDocument,
    "query getCartById($id: ID) {\n  order(where: {id: $id}) {\n    id\n    orderItem {\n      quantity\n      id\n      product {\n        id\n        name\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n}": types.GetCartByIdDocument,
    "query GetProductById($id: ID) {\n  product(where: {id: $id}) {\n    id\n    name\n    price\n    image {\n      url\n    }\n  }\n}": types.GetProductByIdDocument,
    "query GetProducts {\n  products {\n    id\n    name\n    price\n    image {\n      url\n    }\n  }\n}": types.GetProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createCart {\n  createOrder(data: {}) {\n    id\n  }\n}"): typeof import('./graphql').CreateCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishOrder($orderId: ID) {\n  publishOrder(where: {id: $orderId}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').PublishOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishOrderItem($orderItemId: ID!) {\n  publishOrderItem(where: {id: $orderItemId}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').PublishOrderItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpsertOrderItem($orderId: ID!, $productId: ID!, $quantity: Int!, $orderItemId: ID) {\n  upsertOrderItem(\n    upsert: {create: {quantity: 1, total: 1, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}, update: {quantity: $quantity}}\n    where: {id: $orderItemId}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartUpsertOrderItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCartById($id: ID) {\n  order(where: {id: $id}) {\n    id\n    orderItem {\n      quantity\n      id\n      product {\n        id\n        name\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCartByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductById($id: ID) {\n  product(where: {id: $id}) {\n    id\n    name\n    price\n    image {\n      url\n    }\n  }\n}"): typeof import('./graphql').GetProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts {\n  products {\n    id\n    name\n    price\n    image {\n      url\n    }\n  }\n}"): typeof import('./graphql').GetProductsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
