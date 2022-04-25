// Core Imports
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Components
import Spinner from '../../../components/Spinner';
import Forbidden from '../../../components/Forbidden';

// Utilities
import useStore from '../../../store/useStore';
import { getUser, getUsers } from '../../../lib/users';

// Types
import { User } from '../../../types/User';

const ManageUsersPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>([]);
  const currentUser = useStore((state) => state.currentUser);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    if (isAdmin) {
      getUsers().then((allUsers) => {
        setFilteredUsers(allUsers);
        setUsers(allUsers);
      });
      setLoading(false);
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

  //  Name filter dropdown handler
  const handleNameFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    if (name === 'all') {
      setFilteredUsers(users);
      return;
    }

    const filteredUsers = users?.filter((user) => user.name === name);
    setFilteredUsers(filteredUsers);
  };

  // Role filter dropdown handler
  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    if (status === 'all') {
      setFilteredUsers(users);
      return;
    }

    const filteredUsers = users?.filter((user) => user.status === status);
    setFilteredUsers(filteredUsers);
  };

  if (loading) {
    return <Spinner />;
  }

  if (!isAdmin) {
    return <Forbidden />;
  }

  return (
    <div className='relative flex min-h-[70vh] flex-col items-center gap-8 overflow-x-auto p-8 shadow-md sm:rounded-lg'>
      <h1 className='text-2xl'>Manage Users</h1>
      <div className=' w-full  rounded-lg bg-white p-5 shadow'>
        <p className='font-medium'>Filter</p>

        <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
          <select
            className='w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0'
            onChange={handleNameFilter}
          >
            <option value='all'>Name</option>
            {users?.map((user) => (
              <option key={user.uid} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>

          <select
            className='w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0'
            onChange={handleStatusFilter}
          >
            <option value='all'>Status</option>
            <option value='active'>Active</option>
            <option value='deactivated'>Deactivated</option>
            <option value='suspended'>Suspended</option>
          </select>

          <select className='w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0'>
            <option value='all'>Creation Date</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
      </div>
      {/* TABLE */}
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
            <th scope='col' className='px-6 py-3'>
              Creation Date
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((user) => (
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
              <td className='px-6 py-4'>
                {new Date(+new Date() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()}
              </td>

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
