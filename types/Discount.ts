import { Timestamp } from 'firebase/firestore';

export interface Discount {
  name: string;
  description: string;
  discount_percent: number;
  active: boolean;
}

export interface DiscountDoc extends Discount {
  id?: string;
  created_at: Timestamp;
  modified_at: Timestamp;
}
