import { db } from '../config/firebase';
import { serverTimestamp, collection, addDoc, CollectionReference } from 'firebase/firestore';

import { User } from '../types/User';

const userCollection = collection(db, 'users') as CollectionReference<User>;

export const addUser = async (user: User) => {
  if (!user.name) {
    throw new Error('User name is required');
  }

  if (!user.email) {
    throw new Error('User email is required');
  }

  try {
    const userDoc = await addDoc(userCollection, {
      ...user,
      created_at: serverTimestamp(),
      modified_at: serverTimestamp(),
      role: 'user',
    });

    return userDoc;
  } catch {
    throw new Error('Error adding user');
  }
};
