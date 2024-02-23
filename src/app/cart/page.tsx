import { Product, ProductsEnity } from "@/types/types";
import { cookies } from "next/headers";
import { getCartFromCookies } from "../actions";
import { redirect } from "next/navigation";
import { ShopingCartItem } from "@/ui/ShopingCartItem";
import { Adyen } from "@/module/adyen/Adyen";

interface Carts {
  items: Product[];
}

export default async function Cart() {
  const cart = (await getCartFromCookies()) as unknown as ProductsEnity;

  if (!cart) {
    redirect("/");
  }

  return (
    <main className="flex m-20 justify-around">
      <section className="flex min-h-screen  flex-col md:items-start  items-center gap-5 ">
        {cart.items.map((product) => (
          <ShopingCartItem
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
      <div className="min-w-min w-96 max-w-md min-h-screen">
        <Adyen />
      </div>
    </main>
  );
}
