import { ProductsEnity } from "@/types/types";

export const getFormatPrice = (price: number) => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(price / 100);
};

export const getCartPrice = (orders: ProductsEnity) => {
  return orders.items.reduce((acc, item) => acc + item.price, 0);
};
