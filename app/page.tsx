'use client';
import Countries from '@/components/Countries';
import Features from '@/components/Features';
import Pagination from '@/components/Pagination';
import { CountriesProvider } from '@/context/CountriesContext';

export default function Home() {
  return (
    <main
      className="pt-8 mx-auto container max-w-[120rem]"
      style={{
        paddingInline: 'calc(2.5rem + 2.5vw)',
      }}
    >
      <CountriesProvider>
        <Features />
        <Countries />
        <Pagination />
      </CountriesProvider>
    </main>
  );
}
