import { GetState, SetState } from 'zustand';
import produce from 'immer';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { User } from '../types/User';
import { MyState } from './useStore';

export interface IAuthSlice {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  firebaseSignOut: () => void;
}

const createAuthSlice = (set: SetState<MyState>, _get: GetState<MyState>) => {
  return {
    currentUser: null,

    setCurrentUser: (user: User | null) =>
      set(
        produce((state) => {
          state.currentUser = user;
        }),
        false,
        // @ts-ignore
        'auth/setCurrentUser'
      ),

    firebaseSignOut: async () => {
      await signOut(auth);

      set(
        produce((state) => {
          state.currentUser = null;
        }),
        false,
        // @ts-ignore
        'auth/firebaseSignOut'
      );
    },
  };
};

export default createAuthSlice;
