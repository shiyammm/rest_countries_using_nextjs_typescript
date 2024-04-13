import { Country, CountriesGridProps } from '@/types/countryTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CountriesGrid: React.FC<CountriesGridProps> = ({
  filteredCountries,
  page,
}) => {
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
            style={{
              width: 'calc(9.1rem + 9.1vw)',
              height: 'calc(9.1rem + 9.1vw)',
            }}
            className=" dark:shadow-stone-800 shadow-stone-400 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="h-1/2 overflow-hidden object-cover object-center ">
              <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                width={500}
                height={600}
                className=""
              ></Image>
            </div>
            <div
              className=" h-1/2"
              style={{
                padding: 'calc(0.45rem + 0.45vw)',
              }}
            >
              <h1
                className="text-xl  font-semibold"
                style={{
                  fontSize: 'calc(0.55rem + 0.55vw)',
                  // marginTop: 'calc(0.45rem + 0.45vw)',
                }}
              >
                {country.name.common}
              </h1>
              <ul
                className="flex flex-col"
                style={{
                  marginTop: 'calc(0.25rem + 0.25vw)',
                  gap: 'calc(0.15rem + 0.15vw)',
                }}
              >
                <li
                  className="font-medium"
                  style={{
                    fontSize: 'calc(0.45rem + 0.45vw)',
                  }}
                >
                  Population:{' '}
                  <span
                    className="font-normal"
                    style={{
                      fontSize: 'calc(0.45rem + 0.45vw)',
                    }}
                  >
                    {country.population.toLocaleString()}
                  </span>
                </li>
                <li
                  className="font-medium"
                  style={{
                    fontSize: 'calc(0.45rem + 0.45vw)',
                  }}
                >
                  Region:{' '}
                  <span
                    className="font-normal"
                    style={{
                      fontSize: 'calc(0.45rem + 0.45vw)',
                    }}
                  >
                    {country.region}
                  </span>
                </li>
                <li
                  className="font-medium"
                  style={{
                    fontSize: 'calc(0.45rem + 0.45vw)',
                  }}
                >
                  Capital:{' '}
                  <span
                    className="font-normal"
                    style={{
                      fontSize: 'calc(0.45rem + 0.45vw)',
                    }}
                  >
                    {country.capital}
                  </span>
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
