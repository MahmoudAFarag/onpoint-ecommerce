import { NextPage } from 'next';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../config/firebase';
import { signInErrorMessages } from '../lib/errors';

const Login: NextPage = () => {
  const [error, setError] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const { email, password } = e.target;

    if (email.value === '') {
      setError('Email is required');
      return;
    }

    if (password.value === '') {
      setError('Password is required');
      return;
    }

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
    } catch (e: any) {
      //   @ts-ignore
      const errorMessage = signInErrorMessages[e.code];
      setError(errorMessage);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Sign in</h1>
      {error && <p>{error}</p>}
      <input type='text' placeholder='Email' name='email' required />
      <input type='password' placeholder='Password' name='password' required />
      <button type='submit'>Sign in</button>
    </form>
  );
};

export default Login;
