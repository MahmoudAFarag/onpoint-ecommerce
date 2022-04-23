import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUser, getUsers } from '../../../lib/users';
import useStore from '../../../store/useStore';
import { User } from '../../../types/User';

const ManageUsersPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<User[] | undefined>([]);
  const currentUser = useStore((state) => state.currentUser);

  useEffect(() => {
    if (currentUser?.role === 'admin') {
      setIsAdmin(true);

      getUsers().then((allUsers) => setUsers(allUsers));
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
    <div className='flex flex-col gap-8 p-10'>
      <h1 className='text-3xl'>Manage Users</h1>
      <h1 className='text-xl'>Select a user to edit:</h1>
      <ul className='flex flex-col gap-5'>
        {users?.map((user) => (
          <Link href={`/admin/users/${user.uid}`} passHref key={user.uid}>
            <li className='w-[150px] cursor-pointer border-2 border-solid bg-yellow-400 p-2 text-center'>
              <a>{user.name}</a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsersPage;
