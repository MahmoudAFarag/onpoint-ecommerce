import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInErrorMessages, signUpErrorMessages } from './errors';
import { addUser } from './users';

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
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: name,
    });

    await addUser({
      name: userCredential.user.displayName as string,
      email: userCredential.user.email as string,
      uid: userCredential.user.uid,
    });

    return {
      user: userCredential.user,
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
