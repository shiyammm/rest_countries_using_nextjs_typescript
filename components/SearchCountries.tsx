import React from 'react';
import { SearchCountriesProps } from '@/types/countryTypes';
import { Input } from './ui/input';

const SearchCountries: React.FC<SearchCountriesProps> = ({
  searchResult,
  setSearchResult,
}) => {
  return (
    <div>
      <div className="w-[30rem] lg:w-[20rem]">
        <Input
          type="search"
          placeholder="Search Countries"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchCountries;
