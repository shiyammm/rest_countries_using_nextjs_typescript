'use client';
import React from 'react';
import CountriesGrid from '@/components/CountriesGrid';
import { useCountries } from '@/context/CountriesContext';
import CountriesSkeleton from './ui/CountriesSkeleton';

const Countries = () => {
  const { loading } = useCountries();

  return (
    <section>{loading ? <CountriesSkeleton /> : <CountriesGrid />} </section>
  );
};

export default Countries;
