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
    <main className="flex flex-col md:flex-row md:m-20 gap-10 justify-around md:justify-normal">
      <section className="flex flex-col md:items-start  items-center gap-5 ">
        {cart.items.map((product) => (
          <ShopingCartItem
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
      <div className="max-w-sm md:max-w-md">
        <Adyen />
      </div>
    </main>
  );
}
