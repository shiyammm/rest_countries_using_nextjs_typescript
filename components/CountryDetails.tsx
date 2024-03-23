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
    <section className="flex space-x-[8rem]">
      <div>
        <Image
          src={flag}
          width={400}
          height={400}
          className="w-[50rem] object-cover h-[30rem]"
          alt={altFlag}
        ></Image>
      </div>
      <div className="space-y-[3rem]">
        <div>
          <h1 className="text-[2rem] font-bold tracking-[0.1rem]">
            {countryName}
          </h1>
          <div className="flex mt-14 gap-14">
            <ul className="space-y-6">
              <li className="text-2xl font-medium">
                Native name: {'  '}
                <span className="font-normal">{countryName}</span>
              </li>
              <li className="text-2xl font-medium">
                Population: {'  '}
                <span className="font-normal">{population}</span>
              </li>
              <li className="text-2xl font-medium">
                Region: {'  '}
                <span className="font-normal">{countryRegion}</span>
              </li>
              <li className="text-2xl font-medium">
                Sub Region: {'  '}
                <span className="font-normal">{countrySubRegion}</span>
              </li>
              <li className="text-2xl font-medium">
                Capital: {'  '}
                <span className="font-normal">{capitalName}</span>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="text-2xl font-medium">
                Top Level Domain: {'  '}{' '}
                <span className="font-normal">{tld}</span>
              </li>
              <li className="text-2xl font-medium">
                Currencies:{' '}
                {Object.keys(currencies).map((currencyCode, i) => (
                  <span key={i}>
                    {currencies[currencyCode].name}
                    {i < Object.keys(currencies).length - 1 ? ', ' : ' '}
                  </span>
                ))}
              </li>
              <li className="text-2xl font-medium">
                Languages:{' '}
                {Object.keys(languages).map((language, i) => (
                  <span key={i}>
                    {languages[language]}
                    {i < Object.keys(languages).length - 1 ? ', ' : ''}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-5">
          <span className="text-2xl font-medium">Borders:{'  '}</span>
          {borders && borders.length > 0 ? (
            <ul className="flex gap-5">
              {Object.keys(borders).map((border, i) => (
                <li className="" key={i}>
                  <Button variant="outline">
                    <span className="">{borders[border]}</span>
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
