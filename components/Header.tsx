import React from 'react';
import Link from 'next/link';
import useUser from '../lib/useUser';
import { useRouter } from 'next/router';
import fetchJson from '../lib/fetchJson';

const Header = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {!user?.isLoggedIn ? (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/tickets">
                  <a>Tickets</a>
                </Link>
              </li>
              <li>
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    await mutateUser(fetchJson('/api/logout'));
                    router.push('/login');
                  }}
                >
                  <img src={user.avatarUrl} width={20} height={20} />
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
