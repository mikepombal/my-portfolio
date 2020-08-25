import React, { MouseEvent } from 'react';
import Link from 'next/link';
import useUser from '../lib/useUser';
import { useRouter } from 'next/router';
import fetchJson from '../lib/fetchJson';

interface LiProps {
  label: string;
  href: string;
  isSelected?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => Promise<void>;
}
const Li: React.FC<LiProps> = ({ label, href, isSelected, onClick }) => (
  <li>
    <Link href={href}>
      <a
        onClick={onClick}
        className={`h-20 flex justify-center items-center font-bold ${
          isSelected && 'bg-indigo-500'
        }`}
      >
        {label}
      </a>
    </Link>
  </li>
);

const Nav = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <nav className="bg-indigo-900 flex-0 w-20 text-gray-400">
      <ul className="flex-col">
        <Li label="H" href="/" isSelected={router.route === '/'} />
        {!user?.isLoggedIn ? (
          <Li
            label="Login"
            href="/login"
            isSelected={router.route === '/login'}
          />
        ) : (
          <>
            <Li
              label="TK"
              href="/tickets"
              isSelected={router.route === '/tickets'}
            />
            <Li
              label="Out"
              href="/api/logout"
              onClick={async (e) => {
                e.preventDefault();
                await mutateUser(fetchJson('/api/logout'));
                router.push('/login');
              }}
            />
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
