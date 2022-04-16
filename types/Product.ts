import { Timestamp } from 'firebase/firestore';

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  discount: string;
}

export interface ProductDoc extends Product {
  id?: string;
  created_at: Timestamp;
  modified_at: Timestamp;
}

export interface ProductCart extends Product, ProductDoc {
  cartQuantity: number;
}
