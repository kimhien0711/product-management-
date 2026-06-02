import type { Product } from "../types/product";

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "MacBook Pro M4",
    category: "Laptop",
    price: 1999,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    category: "Phone",
    price: 1299,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];