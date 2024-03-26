import SearchCountries from './SearchCountries';
import FilterRegion from './FilterRegion';
import { CountriesProps } from '@/types/countryTypes';

const Features: React.FC<CountriesProps> = ({
  searchResult,
  setSelectedRegion,
  setSearchResult,
  selectedRegion,
}) => {
  return (
    <section className="flex pb-10 justify-between w-full items-center md:flex-col md:items-start md:gap-5">
      <SearchCountries
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <FilterRegion
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </section>
  );
};

export default Features;
