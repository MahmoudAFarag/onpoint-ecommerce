import { Timestamp } from 'firebase/firestore';

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  discount: string;
}

export interface ProductDoc extends Product {
  id?: string;
  created_at: Timestamp;
  modified_at: Timestamp;
}
