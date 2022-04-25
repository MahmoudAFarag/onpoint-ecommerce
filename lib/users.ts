import { db } from '../config/firebase';
import {
  serverTimestamp,
  collection,
  CollectionReference,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import { User } from '../types/User';

export const userCollection = collection(db, 'users') as CollectionReference<User>;

export const getUsers = async () => {
  try {
    const users: User[] = [];

    const usersSnapshot = await getDocs(userCollection);

    usersSnapshot.forEach((user) => {
      users.push({
        ...user.data(),
      });
    });

    if (users.length === 0) {
      throw new Error('No users found');
    }

    return users;
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const getUser = async (uid: string) => {
  const userRef = doc(userCollection, uid);
  const userSnap = await getDoc(userRef);

  return userSnap.data();
};

export const addUser = async (user: User) => {
  if (!user.name) {
    throw new Error('User name is required');
  }

  if (!user.email) {
    throw new Error('User email is required');
  }

  try {
    const userDoc = await setDoc(doc(userCollection, user.uid), {
      ...user,
      created_at: serverTimestamp(),
      modified_at: serverTimestamp(),
      role: 'user',
      status: 'active',
    });

    return userDoc;
  } catch {
    throw new Error('Error adding user');
  }
};

export const updateUser = async (user: User) => {
  const userRef = doc(userCollection, user.uid);

  try {
    const updatedUser = await updateDoc(userRef, {
      status: user.status,
    });

    console.log(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (uid: string) => {
  const userRef = doc(userCollection, uid);

  try {
    await deleteDoc(userRef);
  } catch (error) {
    console.error('Error deleting user: ', error);
  }
};
