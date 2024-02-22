import { Card } from "@/ui/Card";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-10 p-24">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </main>
  );
}
