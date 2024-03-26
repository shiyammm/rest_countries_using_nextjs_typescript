import React from 'react';
import { ModeToggle } from '@/components/Theme';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between px-10 items-center h-[100px]">
        <div className="space-y-1">
          <Link href={`/`} className="text-xl font-semibold block">
            CountryInsight
          </Link>
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
