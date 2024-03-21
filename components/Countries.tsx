'use client';
import React, { useEffect, useState } from 'react';
import { getAllCountries, getSingleCountry } from '@/helpers/getAppDatas';
import Country from '@/types/country';
import CountriesGrid from './CountriesGrid';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData: Country[] = await getAllCountries();
        setCountries(countriesData);
        console.log(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="px-20 pt-8 mx-auto container max-w-[118rem]">
      <CountriesGrid countries={countries} />
    </section>
  );
};

export default Countries;
