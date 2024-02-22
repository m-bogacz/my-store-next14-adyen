import { Product, ProductsEnity } from "@/types/types";
import { cookies } from "next/headers";
import { getCartFromCookies } from "../actions";
import { redirect } from "next/navigation";
import { Card } from "@/ui/Card";
import { ShopingCartItem } from "@/ui/ShopingCartItem";

interface Carts {
  items: Product[];
}

export default async function Cart() {
  const cart = (await getCartFromCookies()) as unknown as ProductsEnity;

  if (!cart) {
    redirect("/");
  }

  console.log(cart.items);
  return (
    <main className="flex m-20">
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
      <div id="payment-container">
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 transform rounded-b-sm m-5 transition-transform rounded-md p-5 hover:scale-105">
          checkout
        </button>
      </div>
    </main>
  );
}
