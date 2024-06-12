'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getAllCountries } from '@/helpers/getAppDatas';
import { CountriesContextProps, Country } from '@/types/countryTypes';

const CountriesContext = createContext<CountriesContextProps | undefined>(
  undefined,
);

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider');
  }
  return context;
};

export const CountriesProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchResult, setSearchResult] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData: Country[] = await getAllCountries();
        setCountries(countriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      const matchSearch =
        !searchResult ||
        country.name.common.toLowerCase().includes(searchResult.toLowerCase());
      const matchRegion = !selectedRegion || country.region === selectedRegion;
      return matchSearch && matchRegion;
    });
    setFilteredCountries(result);
  }, [countries, selectedRegion, searchResult]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        loading,
        searchResult,
        setSearchResult,
        selectedRegion,
        setSelectedRegion,
        filteredCountries,
        page,
        setPage,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
