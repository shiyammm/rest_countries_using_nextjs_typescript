'use client';
import React, { Suspense } from 'react';
import CountriesGrid from '@/components/CountriesGrid';
import { useCountries } from '@/context/CountriesContext';
import Loading from '@/components/Loading';

const Countries = () => {
  const { loading } = useCountries();

  return (
    <section>{loading ? <div>Loading...</div> : <CountriesGrid />} </section>
  );
};

export default Countries;
