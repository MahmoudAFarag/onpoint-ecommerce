import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUser, getUsers } from '../../../lib/users';
import useStore from '../../../store/useStore';
import { User } from '../../../types/User';

const ManageUsersPage = () => {
  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const [users, setUsers] = useState<User[] | undefined>([]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    if (currentUser.role === 'admin') {
      getUsers().then((allUsers) => setUsers(allUsers));
      return;
    }

    getUser(currentUser.uid as string).then((user) => {
      if (user?.role === 'admin') {
        setCurrentUser({
          email: user.email,
          name: user.name,
          role: user.role,
          uid: user.uid,
        });
      }
    });
  }, [currentUser, setCurrentUser]);

  if (currentUser?.role !== 'admin') {
    return (
      <div className='grid h-screen place-items-center'>
        <h1 className='text-4xl'>401 | Forbidden</h1>
      </div>
    );
  }

  return (
    <div className='relative flex min-h-[70vh] flex-col items-center gap-8 overflow-x-auto p-8 shadow-md sm:rounded-lg'>
      <h1 className='text-2xl'>Manage Users</h1>
      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
        <thead className='text-md bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Email
            </th>

            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Role
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr
              className='border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700'
              key={user.uid}
            >
              <th scope='row' className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'>
                {user.email}
              </th>

              <td className='px-6 py-4'>{user.name}</td>
              <td className='px-6 py-4'>{user.role}</td>
              <td className='px-6 py-4'>{user.status}</td>
              <td className='px-6 py-4 text-right'>
                <Link href={`/admin/users/${user.uid}`} passHref>
                  <a className='text-sm text-gray-600 dark:text-gray-400'>
                    <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsersPage;
