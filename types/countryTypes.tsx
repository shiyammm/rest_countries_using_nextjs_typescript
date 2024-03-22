import { Dispatch, SetStateAction } from 'react';

export type CountriesProps = {
  searchResult: string;
  setSearchResult: Dispatch<SetStateAction<string>>;
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
};
export type SearchCountriesProps = {
  searchResult: string;
  setSearchResult: Dispatch<SetStateAction<string>>;
};
export type FilterCountriesByRegionProps = {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
};

export type CountriesGridProps = {
  filteredCountries: Country[];
};

export type FlagFormat = 'png' | 'svg' | 'alt';

export type Name = {
  official: string;
  common: string;
};

export type Country = {
  name: Name;
  region: string;
  population: string;
  capital: string;
  flags: { [format in FlagFormat]: string };
};
