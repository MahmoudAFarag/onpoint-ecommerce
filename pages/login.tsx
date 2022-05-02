import Head from 'next/head';
import SignInFrom from '../components/Forms/SignInFrom';


const Signin = () => {

  return <>
   <Head>
        <title>on point | Sign In</title>
        <meta name="description" content="on point sign in page" />
      </Head>
  <SignInFrom />
  
  </>
};

export default Signin;
