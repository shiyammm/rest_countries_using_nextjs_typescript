import React from 'react';
import { ModeToggle } from '@/components/Theme';

const Navbar = () => {
  return (
    <header className='shadow-md dark:shadow-stone-900' >
      <nav className="flex justify-between px-10 items-center h-[100px]">
        <div className="space-y-1">
          <a href="/" className="text-xl font-semibold block">
            CountryInsight
          </a>
          <span className="text-gray-500 text-sm block">
            Viewing the World's Colors{' '}
          </span>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
