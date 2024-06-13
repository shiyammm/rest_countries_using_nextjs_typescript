import SearchCountries from './SearchCountries';
import FilterRegion from './FilterRegion';
import { useCountries } from '@/context/CountriesContext';

const Features: React.FC = () => {
  const { searchResult, setSearchResult, selectedRegion, setSelectedRegion } =
    useCountries();

  return (
    <section className="flex pb-10 justify-between w-full items-center md:flex-col md:items-start md:gap-5 mt-5">
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
