// Core imports
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Components
import Spinner from '../../../components/Spinner';
import Forbidden from '../../../components/Forbidden';

// Utilities
import { shimmer, toBase64 } from '../../../lib/image_placeholder';
import useStore from '../../../store/useStore';
import { getUser, deleteUser } from '../../../lib/users';

// Types
import { User } from '../../../types/User';

interface UserPageProps {
  user: User;
}

const AdminUserProfilePage = ({ user }: UserPageProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const currentUser = useStore((state) => state.currentUser);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    getUser(currentUser.uid as string).then((user) => {
      if (user?.role === 'admin') {
        setIsAdmin(true);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [currentUser, isAdmin]);

  const handleUserDelete = async () => {
    await deleteUser(user.uid as string);

    router.replace('/admin/users');
  };

  let statusColor = 'bg-green-500';

  if (user.status === 'deactivated') {
    statusColor = 'bg-red-500';
  } else if (user.status === 'suspended') {
    statusColor = 'bg-orange-500';
  }

  if (loading) {
    return <Spinner />;
  }

  if (!isAdmin) {
    return <Forbidden />;
  }

  return (
    <div className='flex flex-col p-8'>
      <h1 className='mb-4 text-3xl'>User details:</h1>
      <div className='flex gap-4'>
        <div className='max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800'>
          <div className='flex flex-col items-center p-10'>
            <Image
              className='mb-7 h-24 w-24 rounded-full shadow-lg'
              src='https://placebeard.it/300/300'
              alt='profile picture'
              width={300}
              height={300}
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(250, 250))}`}
            />

            <h5 className='my-3 text-xl font-medium text-gray-900 dark:text-white'>{user.name}</h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>{user.role}</span>

            <span
              className={`mt-3 inline-flex items-center rounded-lg ${statusColor} py-2 px-4 text-center text-sm font-medium text-white`}
            >
              {user.status?.toUpperCase()}
            </span>
          </div>
        </div>

        <div className='w-[80vw] rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800'>
          <div className='flex flex-col justify-center gap-3 p-10'>
            <div className='flex w-full items-center'>
              <div className='mr-auto flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Email: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.email}</span>
              </div>

              <div className='flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Name: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.name}</span>
              </div>
            </div>

            <div className='flex w-full items-center'>
              <div className='mr-auto flex items-center gap-5 '>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Unique ID: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.uid}</span>
              </div>

              <div className='flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>City: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.city}</span>
              </div>
            </div>

            <div className='flex w-full items-center'>
              <div className='mr-auto flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Status: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.status}</span>
              </div>

              <div className='flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Role: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.role}</span>
              </div>
            </div>

            <div className='flex w-full items-center'>
              <div className='mr-auto flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Address 1: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.address1}</span>
              </div>

              <div className='flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Address 2: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{user.address2}</span>
              </div>
            </div>

            <div className='flex w-full items-center'>
              <div className='mr-auto flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Creation Date: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{new Date().toDateString()}</span>
              </div>

              <div className='flex items-center gap-5'>
                <h5 className='my-3 text-lg font-medium text-gray-900 dark:text-white'>Last Active: </h5>
                <span className='text-lg text-gray-500 dark:text-gray-400'>{new Date().toDateString()}</span>
              </div>
            </div>

            <div className='mt-7 flex items-center justify-end gap-5'>
              <button className='focus:shadow-outline rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'>
                Edit
              </button>

              <button
                className='focus:shadow-outline rounded-full bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700 focus:outline-none'
                onClick={handleUserDelete}
              >
                Delete
              </button>
            </div>
          </div>
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

export default AdminUserProfilePage;
