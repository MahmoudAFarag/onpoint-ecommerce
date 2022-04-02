import { Timestamp } from 'firebase/firestore';

export interface Category {
  name: string;
  description: string;
}

export interface CategoryDoc extends Category {
  id?: string;
  created_at: Timestamp;
  modified_at: Timestamp;
}
