import { useState, useRef, FormEvent } from 'react';

// Utilityes
import { checkEmail, checkUsername } from '../../lib/validation';
import { firebaseSignUp } from '../../lib/authentication';

// Components
import FormLegend from './FormLegend';
import Input from './Input';
import SecondaryButton from './SecondaryButton';

const SignupForm = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repasswordRef = useRef(null);

  const handleError = (message: string) => {
    setError(true);
    setErrorMessage(message);
    setIsSubmited(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmited(true);

    // @ts-ignore
    const name = nameRef.current.value;
    // @ts-ignore
    const email = emailRef.current.value;
    // @ts-ignore
    const password = passwordRef.current.value;
    // @ts-ignore
    const repassword = repasswordRef.current.value;

    if (!name || !email || !password || !repassword) {
      handleError('Please fill all the fields');
      return;
    }

    const isName = checkUsername(name);
    const isEmail = checkEmail(email);

    if (!isName) {
      handleError('Please Make Sure Your Name is larger than 4 characters and less than 20 characters');
      return;
    }

    if (!isEmail) {
      handleError('Please Add a Valid Email');
      return;
    }

    if (password !== repassword) {
      handleError('Please Make Sure Your Password is the same');
      return;
    }

    setError(false);
    setErrorMessage('');

    try {
      const data = await firebaseSignUp(email, password, name);

      if (data.error) {
        handleError(data.error);
        return;
      }

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='mx-9 flex min-h-[80vh] min-w-full items-center justify-center rounded bg-white py-6 px-2.5 md:mx-0 md:px-5'>
      <form onSubmit={handleSubmit} className='h-[60%] w-[30%]'>
        <fieldset>
          <FormLegend txt='Sign Up' />

          {error && <div className='w-full bg-error p-1 text-center font-serif text-sm text-white'>{errorMessage}</div>}

          <div className='flex flex-col gap-3.5 md:gap-2.5'>
            <Input type='text' label='name' placeholder='Name' autoComplete='signup-fullname' ref={nameRef} />

            <Input type='email' label='email' placeholder='Email' autoComplete='signup-email' ref={emailRef} />

            <Input type='password' label='password' placeholder='Password' autoComplete='signup-password' ref={passwordRef} />

            <Input
              type='password'
              label='re-enter password'
              placeholder='re-enter Password'
              autoComplete='signup-reenter-password'
              ref={repasswordRef}
            />

            <SecondaryButton txt='Sign Up' disabled={isSubmited} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignupForm;
