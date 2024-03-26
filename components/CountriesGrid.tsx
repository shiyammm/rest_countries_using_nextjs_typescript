import { Country, CountriesGridProps } from '@/types/countryTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CountriesGrid: React.FC<CountriesGridProps> = ({ filteredCountries }) => {
  return (
    <div className="grid grid-cols-4 gap-10 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1">
      {filteredCountries.map((country, i) => {
        const countrySlug = country.name.common
          .toLowerCase()
          .replace(/[^a-z0-9À-ÿ]+/g, '-');
        return (
          <Link
            href={`/country/${countrySlug}`}
            key={i}
            className="h-[25rem] md:h-[20rem] sm:h-[25rem] dark:shadow-stone-800 shadow-stone-400 shadow-lg rounded-lg overflow-hidden"
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
            <div className=" h-1/2 p-7 md:p-4 sm:p-7">
              <h1 className="text-xl  font-semibold mb-5 md:mb-2">
                {country.name.common}
              </h1>
              <ul className="space-y-2 md:space-y-1">
                <li className="text-lg md:text-lg  font-medium">
                  Population:{' '}
                  <span className="text-lg md:text-lg  font-normal">
                    {country.population.toLocaleString()}
                  </span>
                </li>
                <li className="text-lg md:text-lg  font-medium">
                  Region:{' '}
                  <span className="text-lg md:text-lg  font-normal">
                    {country.region}
                  </span>
                </li>
                <li className="text-lg md:text-lg  font-medium">
                  Capital:{' '}
                  <span className="text-lg md:text-lg  font-normal">
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
