import { Timestamp } from 'firebase/firestore';

export interface User {
  name: string;
  email: string;
  uid?: string;
  role?: string;
  status?: string;
  created_at?: Timestamp;
  modified_at?: Timestamp;
  address1?: string;
  address2?: string;
  city?: string;
}
