'use client';
import React from 'react';
import CountriesGrid from '@/components/CountriesGrid';
import { useCountries } from '@/context/CountriesContext';

const Countries = () => {
  const { loading } = useCountries();

  return (
    <section>{loading ? <div>Loading...</div> : <CountriesGrid />} </section>
  );
};

export default Countries;
