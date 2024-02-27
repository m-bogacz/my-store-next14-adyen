import { Card } from "@/ui/Card";

import { getProducts } from "@/api/products/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-center gap-10 p-24">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </main>
  );
}
