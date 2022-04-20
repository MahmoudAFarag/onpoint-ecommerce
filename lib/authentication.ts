import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInErrorMessages, signUpErrorMessages } from './errors';

export const firebaseSignIn = async (email: string, password: string) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);

    return {
      user: userCredentials.user,
      error: null,
    };
  } catch (e: any) {
    //   @ts-ignore
    const errorMessage = signInErrorMessages[e.code];

    return {
      user: null,
      error: errorMessage,
    };
  }
};

export const firebaseSignUp = async (email: string, password: string, name: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }

    return {
      user: auth.currentUser,
      error: null,
    };
  } catch (e: any) {
    // @ts-ignore
    const errorMessage = signUpErrorMessages[e.code];

    return {
      user: null,
      error: errorMessage,
    };
  }
};
