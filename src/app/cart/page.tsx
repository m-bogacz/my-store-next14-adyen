import { Product, ProductsEnity } from "@/types/types";
import { cookies } from "next/headers";
import { getCartFromCookies } from "../actions";
import { redirect } from "next/navigation";
import { ShopingCartItem } from "@/ui/ShopingCartItem";
import { Adyen } from "@/module/adyen/Adyen";
import { getCart } from "@/api/cart/api";

interface Carts {
  items: Product[];
}

export default async function Cart() {
  const cart = await getCart();
  console.log(cart);

  if (!cart) {
    redirect("/");
  }

  return (
    <main className="flex flex-col md:flex-row md:m-20 gap-10 justify-around md:justify-normal">
      <section className="flex flex-col md:items-start  items-center gap-5 ">
        {cart.orderItem.map((item) => (
          <ShopingCartItem
            key={item.product?.name ?? ""}
            name={item.product?.name ?? ""}
            price={item.product?.price ? item.product.price : 0}
            image={item.product?.image.url ?? ""}
            quantity={item.quantity}
          />
        ))}
      </section>
      <div className="max-w-sm md:max-w-md">
        <Adyen />
      </div>
    </main>
  );
}
