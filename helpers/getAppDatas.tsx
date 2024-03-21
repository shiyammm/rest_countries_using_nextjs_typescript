import Country from '@/types/country';

const getAllCountries = async (): Promise<Country[]> => {
  try {
    const countriesResponse = await fetch('https://restcountries.com/v3.1/all');
    if (!countriesResponse.ok) {
      throw new Error('Failed to fetch countries');
    }
    const countriesData: Country[] = await countriesResponse.json();
    return countriesData;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

const getSingleCountry = async (countryName: string) => {
  try {
    const countryResponse = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`,
    );
    if (!countryResponse.ok) {
      throw new Error('Failed to fetch country');
    }
    const CountryData = await countryResponse.json();
  } catch (error) {
    console.error('Error fetching country:', error);
  }
};

export { getAllCountries, getSingleCountry };
