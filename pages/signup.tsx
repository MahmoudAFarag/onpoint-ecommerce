// Components
import SignupForm from '../components/Forms/SignupForm';

import Head from 'next/head';

const Signup = () => {
  return <>
      <Head>
        <title>on point | Sign Up</title>
        <meta name="description" content="on point sign up page" />
      </Head>
  <SignupForm />
  </>;
};

export default Signup;
