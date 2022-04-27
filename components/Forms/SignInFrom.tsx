import { useState, useRef, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firebaseSignIn } from '../../lib/authentication';

// Components
import { checkEmail } from '../../lib/validation';
import FormLegend from './FormLegend';

// Utilityes
import Input from './Input';
import SecondaryButton from './SecondaryButton';

const SignInFrom = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const urlRef = useRef<string>(router.asPath);

  // check if current url is not login page to avoid urls such as /login?from=product/:id?from=product/:id   if clicked multiple times do not path router as the dependancy as it will create inifinite loops
  useEffect(() => {
    // shallow to update the url without reloading the page
    router.push(urlRef.current, urlRef.current, { shallow: true });
    // false positive explained in the comment above
    // eslint-disable-next-line
  }, [router.asPath]);

  const handleError = (message: string) => {
    setError(true);
    setErrorMessage(message);
    setIsSubmited(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmited(true);

    // @ts-ignore
    const email = emailRef.current.value;
    // @ts-ignore
    const password = passwordRef.current.value;

    const isEmail = checkEmail(email);

    if (!isEmail) {
      handleError('Please Add a Valid Email');
      return;
    }

    setError(false);
    setErrorMessage('');

    try {
      const data = await firebaseSignIn(email, password);

      if (data.error) {
        handleError(data.error);
        return;
      }

      if (data.user) {
        router.push(`${router.query.from}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='mx-9 flex min-h-[80vh] min-w-full items-center justify-center rounded bg-white py-6 px-2.5 md:mx-0 md:px-5'>
      <form onSubmit={handleSubmit} className='h-[60%] w-[30%]'>
        <fieldset>
          <FormLegend txt='Sign In' />

          {error && <div className='w-full bg-error p-1 text-center font-serif text-sm text-white'>{errorMessage}</div>}

          <div className='flex flex-col gap-3.5 md:gap-2.5'>
            <Input type='email' label='email' placeholder='Email' ref={emailRef} autoComplete='signin-email' />

            <Input type='password' label='password' placeholder='Password' autoComplete='signin-password' ref={passwordRef} />

            <Link href='/forgot-password'>
              <a className='text-sm text-shark hover:text-mystic-dark'>Forgot Password?</a>
            </Link>

            <SecondaryButton txt='Sign In' disabled={isSubmited} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInFrom;
