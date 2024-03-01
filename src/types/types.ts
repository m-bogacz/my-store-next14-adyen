export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ProductsEnity {
  items: Product[];
}
