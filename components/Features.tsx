import React from 'react';
import SearchCountries from './SearchCountries';
import FilterRegion from './FilterRegion';

const Features = () => {
  return (
    <section className="flex px-20 py-10 justify-between w-full items-center">
      <SearchCountries />
      <FilterRegion />
    </section>
  );
};

export default Features;
