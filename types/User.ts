import { Timestamp } from 'firebase/firestore';

export interface User {
  name: string;
  email: string;
  role?: 'user';
  created_at?: Timestamp;
  modified_at?: Timestamp;
}

export interface UserDoc extends User {
  id: string;
  address1?: string;
  address2?: string;
  city?: string;
}
