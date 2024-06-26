import { useCountries } from '@/context/CountriesContext';
import Image from 'next/image';
import Link from 'next/link';

const CountriesGrid = () => {
  const { filteredCountries, page } = useCountries();

  return (
    <div
      className="grid grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"
      style={{
        gap: 'calc(1.5rem + 1.5vw)',
      }}
    >
      {filteredCountries.slice(page * 50 - 50, page * 50).map((country, i) => {
        const countrySlug = country.name.common
          .toLowerCase()
          .replace(/[^a-z0-9À-ÿ]+/g, '-');
        return (
          <Link
            href={`/country/${countrySlug}`}
            key={i}
            className="shadow-lg dark:shadow-md dark:shadow-stone-900 rounded-lg overflow-hidden country"
          >
            <div className="h-1/2 overflow-hidden object-cover">
              <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                width={500}
                height={500}
                className="object-cover h-full"
              ></Image>
            </div>
            <div
              className="h-1/2 country-details"
              style={{
                padding: 'calc(0.45rem + 0.45vw)',
              }}
            >
              <h1 className="text-xl  font-semibold">{country.name.common}</h1>
              <ul
                className="flex flex-col"
                style={{
                  marginTop: 'calc(0.25rem + 0.25vw)',
                  gap: 'calc(0.15rem + 0.15vw)',
                }}
              >
                <li className="font-medium">
                  Population:{' '}
                  <span className="font-normal">
                    {country.population.toLocaleString()}
                  </span>
                </li>
                <li className="font-medium">
                  Region: <span className="font-normal">{country.region}</span>
                </li>
                <li className="font-medium">
                  Capital:{' '}
                  <span className="font-normal">{country.capital}</span>
                </li>
              </ul>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesGrid;
