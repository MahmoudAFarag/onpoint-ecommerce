import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { shimmer, toBase64 } from '../../../lib/image_placeholder';
import Input from '../../../components/Forms/Input';
import { useRouter } from 'next/router';

import useStore from '../../../store/useStore';
import { getUser } from '../../../lib/users';
import { User } from '../../../types/User';

interface UserPageProps {
  user: User;
}

const UserPage = ({ user }: UserPageProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(true);
  const currentUser = useStore((state) => state.currentUser);

  useEffect(() => {
    if (currentUser?.role === 'admin') {
      setIsAdmin(true);
    }
  }, [currentUser]);

  if (!isAdmin) {
    return (
      <div className='grid h-screen place-items-center'>
        <h1 className='text-4xl'>401 | Forbidden</h1>
      </div>
    );
  }

  return (
    <div className='flex h-screen flex-col p-8'>
      <h1 className='mb-4 text-3xl'>User details:</h1>
      <div className='border-2 border-yellow-400'>
        <div className='flex items-center gap-8 p-4'>
          <Image
            src='https://via.placeholder.com/300'
            alt='profile picture'
            width={300}
            height={300}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 250))}`}
          />

          {/* <div className='mr-auto flex flex-col gap-4'>
            <input value={`Name: ${user.name}`} disabled={inputDisabled} className='w' />

            <h1 className='text-xl'>Email: {user.email}</h1>
            <h1 className='text-xl'>Status: {user.status}</h1>
            <h1 className='text-xl'>Role: {user.role}</h1>
          </div> */}

          {/* <div className='flex gap-4 self-end'>
            <button className='bg-yellow-400 p-2 text-2xl' onClick={() => setInputDisabled(false)}>
              Edit
            </button>

            <button className='bg-red-400 p-2 text-2xl'>
              <Link href={`/admin/users/${user.uid}/delete`}>Delete</Link>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getUser(context.params?.id as string);
  const user = JSON.parse(JSON.stringify(data));

  return {
    props: {
      user,
    },
  };
};

export default UserPage;
