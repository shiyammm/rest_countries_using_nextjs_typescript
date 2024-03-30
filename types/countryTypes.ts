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
export type singleCountryState = {
  singleCountry: string;
  setSingleCountry: Dispatch<SetStateAction<string>>;
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
  nativeName: string;
  region: string;
  population: string;
  capital: string;
  flags: { [format in FlagFormat]: string };
};

export type CountryParams = {
  slug: string;
};
export type CountryData = {
  CountryData: SingleCountry;
};

export type SingleCountry = {
  name: Name;
  region: string;
  subregion: string;
  population: string;
  capital: string;
  currencies: { name: string }[] | string;
  languages: { name: string }[] | string;
  borders: string[] | string;
  tld: string[];
  flags: { [format in FlagFormat]: string };
};

export type fetchSingleCountry = {
  countryName: string;
  countryRegion: string;
  countrySubRegion: string;
  population: string;
  capitalName: string;
  currencies: { name: string }[] | string;
  languages: { name: string }[] | string;
  borders: string[];
  tld: string;
  flag: string;
  altFlag: string;
};
