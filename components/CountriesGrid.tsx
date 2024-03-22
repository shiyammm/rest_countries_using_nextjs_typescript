import { Country, CountriesGridProps } from '@/types/countryTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CountriesGrid: React.FC<CountriesGridProps> = ({ filteredCountries }) => {
  return (
    <Link href="" className="grid grid-cols-4 gap-10 ">
      {filteredCountries.map((country, i) => (
        <div
          key={i}
          className="h-[25rem] dark:shadow-stone-800 shadow-stone-400 shadow-lg rounded-lg overflow-hidden"
        >
          <div className="bg-blue-400 h-1/2 overflow-hidden object-cover object-center ">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt}
              width={500}
              height={600}
              className=""
            ></Image>
          </div>
          <div className=" h-1/2 p-7">
            <h1 className="text-xl font-semibold mb-5">
              {country.name.common}
            </h1>
            <ul className="space-y-2">
              <li className="text-lg font-medium">
                Population:{' '}
                <span className="text-lg font-normal">
                  {country.population.toLocaleString()}
                </span>
              </li>
              <li className="text-lg font-medium">
                Region:{' '}
                <span className="text-lg font-normal">{country.region}</span>
              </li>
              <li className="text-lg font-medium">
                Capital:{' '}
                <span className="text-lg font-normal">{country.capital}</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </Link>
  );
};

export default CountriesGrid;
