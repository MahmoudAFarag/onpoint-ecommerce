// Core imports
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import type { NextPage } from 'next';
import Head from 'next/head';

import { auth } from '../config/firebase';
import { signUpErrorMessages } from '../lib/errors';

const Signup: NextPage = () => {
  const [error, setError] = useState('');

  const handleSignup = async (e: any) => {
    e.preventDefault();

    const { email, password, name } = e.target;

    if (e.target.name === '') {
      setError('Please enter your name');
      return;
    }

    if (e.target.email.value === '') {
      setError('Email is required');
      return;
    }

    if (e.target.password.value === '') {
      setError('Password is required');
      return;
    }

    if (e.target.password.value !== e.target.passwordConfirm.value) {
      setError('Passwords do not match');
      return;
    }

    if (password !== e.target.confirmPassword.value) {
      alert('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      console.log(auth.currentUser);
    } catch (e: any) {
      // @ts-ignore
      const errorMessage = signUpErrorMessages[e.code];
      setError(errorMessage);
    }
  };

  return (
    <div>
      <Head>
        <title>SignUp - onPoint</title>
        <meta name='description' content='onPoint Ecommerce sign up page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <form onSubmit={handleSignup}>
        <h1>Sign up</h1>
        <input type='text' placeholder='name' name='name' required />
        <input type='text' placeholder='Email' name='email' required />
        {error && <p>{error}</p>}
        <input type='password' placeholder='Password' name='password' required />
        <input type='password' placeholder='Confirm Password' name='confirmPassword' required />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
