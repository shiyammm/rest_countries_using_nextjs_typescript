import { getSingleCountry } from '@/helpers/getAppDatas';
import { SingleCountry, fetchSingleCountry } from '@/types/countryTypes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const CountryDetails: React.FC<fetchSingleCountry> = ({
  countryName,
  countryRegion,
  countrySubRegion,
  population,
  capitalName,
  currencies,
  languages,
  borders,
  tld,
  flag,
  altFlag,
}) => {
  return (
    <section className="flex gap-x-[7rem] xl:gap-x-[4rem] lg:flex-col lg:gap-y-[3rem] lg:mt-[7rem] sm:mt-[8rem]">
      <div>
        <Image
          src={flag}
          width={400}
          height={400}
          className="w-[50rem] lg:w-[40rem] md:w-[35rem] sm:w-[30rem] xs:w-[20rem] xs:h-[10rem] sm:h-[15rem] object-cover  h-[30rem] countryImage"
          alt={altFlag}
        ></Image>
      </div>
      <div className="space-y-[3rem] xl:space-y-[2rem]">
        <div>
          <h1 className="text-[2rem] 2xl:text-2xl font-bold w-[30rem] 2xl:w-[18rem] sm:text-[1.2rem] text-part-width">
            {countryName}
          </h1>
          <div className="flex sm:flex-col sm:gap-9 mt-14 gap-x-4 unordered-lists">
            <ul className="space-y-5 xl:space-y-3 md:space-y-1  w-[30rem] 2xl:w-[18rem] text-part-width">
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Native name: {'  '}
                <span className="font-normal">{countryName}</span>
              </li>
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Population: {'  '}
                <span className="font-normal">{population}</span>
              </li>
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Region: {'  '}
                <span className="font-normal">{countryRegion}</span>
              </li>
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Sub Region: {'  '}
                <span className="font-normal">{countrySubRegion}</span>
              </li>
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Capital: {'  '}
                <span className="font-normal">{capitalName}</span>
              </li>
            </ul>
            <ul className="space-y-6 w-[20rem] md:w-[15rem]  md:space-y-1  text-part-width2 xl:space-y-3">
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Top Level Domain: {'  '}{' '}
                <span className="font-normal">{tld}</span>
              </li>
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Currencies:{' '}
                {Object.values(currencies).map((currency, i) => (
                  <span key={i}>
                    {currency.name}
                    {i < Object.values(currencies).length - 1 ? ', ' : ' '}
                  </span>
                ))}
              </li>
              <li className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
                Languages:{' '}
                {Object.values(languages).map((language, i) => (
                  <span key={i}>
                    {language.name}
                    {i < Object.keys(languages).length - 1 ? ', ' : ''}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-5">
          <span className="text-2xl list-text 2xl:text-lg md:text-[1rem] font-medium">
            Borders:{'  '}
          </span>
          {borders && borders.length > 0 ? (
            <ul className="flex gap-5">
              {borders.map((border, i) => (
                <li className="" key={i}>
                  <Button variant="outline">
                    <span className="">{border}</span>
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            'No Borders'
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
