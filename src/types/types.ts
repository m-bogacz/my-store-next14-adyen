export interface Product {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ProductsEnity {
  items: Product[];
}
