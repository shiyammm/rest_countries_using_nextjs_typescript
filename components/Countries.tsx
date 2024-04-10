'use client';
import React, { useEffect, useState } from 'react';
import { getAllCountries } from '@/helpers/getAppDatas';
import { Country } from '@/types/countryTypes';
import CountriesGrid from '@/components/CountriesGrid';
import Features from '@/components/Features';
import Pagination from './Pagination';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchResult, setSearchResult] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData: Country[] = await getAllCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      const matchSearch =
        !searchResult ||
        country.name.common.toLowerCase().includes(searchResult);
      const matchRegion = !selectedRegion || country.region === selectedRegion;
      return matchSearch && matchRegion;
    });
    setFilteredCountries(result);
  }, [countries, selectedRegion, searchResult]);

  return (
    <section className="px-20 md:px-10 pt-8 mx-auto container max-w-[118rem]">
      <Features
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      {searchResult.length > 0 ? (
        <CountriesGrid page={page} filteredCountries={filteredCountries} />
      ) : (
        <CountriesGrid page={page} filteredCountries={filteredCountries} />
      )}
      <Pagination
        page={page}
        setPage={setPage}
        filteredCountries={filteredCountries}
      />
    </section>
  );
};

export default Countries;
