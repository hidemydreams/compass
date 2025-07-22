'use client';

import Link from 'next/link';
import Routes from '@/constants/routes';
import Logo from '@/shared/components/Logo';
import ButtonLink from '@/shared/components/ButtonLink';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useUser } from '@/shared/hooks/use-user';
import Button from '@/shared/components/Button';
import { logout } from '@/app/login/actions';

const links = [
  {
    href: Routes.PRICING,
    label: 'Pricing',
  },
  {
    href: Routes.PORTFOLIO,
    label: 'Portfolio',
  },
  // {
  //   href: '/about',
  //   label: 'About',
  // },
  // {
  //   href: '/contact',
  //   label: 'Contact',
  // },
];

const Header = () => {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        <div className='flex items-center gap-10'>
          <Logo onClick={() => setMenuOpen(false)} />
          {/* Desktop nav */}
          <nav className='hidden md:flex items-center gap-6 mt-[2px]'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-gray-600 hover:text-gray-900'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          className='md:hidden text-gray-600 hover:text-gray-900'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>

        <div className='hidden md:flex items-center gap-2'>
          {!user && (
            <div className='flex gap-4 items-center'>
              <a
                className='text-sm font-medium text-gray-600 hover:text-gray-900'
                href={`${Routes.AUTH_LOG_IN}`}
              >
                Log in
              </a>
              <a
                className='btn-grad p-4 rounded-lg px-5 py-2 text-sm text-white'
                href={`${Routes.AUTH_SIGN_UP}`}
              >
                Sign up
              </a>
            </div>
          )}

          {user && (
            <div className='flex gap-4'>
              <ButtonLink
                className='btn-grad'
                text='Dashboard'
                href={Routes.DASHBOARD_DESIGN}
                variant='secondary'
              />
              <Button onClick={logout}>Log out</Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <div className='md:hidden bg-white border-t px-4 py-3 space-y-3'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='block text-sm font-medium text-gray-600 hover:text-gray-900'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className='pt-3 border-t space-y-2'>
            {!user && (
              <>
                <a
                  className='block text-sm font-medium text-gray-600 hover:text-gray-900'
                  href={`${Routes.AUTH_LOG_IN}`}
                >
                  Log in
                </a>
                <a
                  className='block text-sm font-medium text-gray-600 hover:text-gray-900'
                  href={Routes.AUTH_SIGN_UP}
                >
                  Sign up
                </a>
              </>
            )}

            {user && (
              <>
                <ButtonLink
                  className='w-full btn-grad'
                  text='Dashboard'
                  href={Routes.DASHBOARD_DESIGN}
                  variant='secondary'
                />
                <Button onClick={logout}>Log out</Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
