import { getSingleCountry, getAllCountries } from '@/helpers/getAppDatas';
import CountryDetails from '@/components/CountryDetails';
import {
  CountryData,
  CountryParams,
  SingleCountry,
} from '@/types/countryTypes';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export async function generateStaticParams() {
  const Countries = await getAllCountries();

  const slugCountries = Countries.map((country) =>
    country.name.official.replace(/-/g, ' '),
  );

  return slugCountries.map((slugCountry) => ({
    params: {
      slug: slugCountry,
    },
  }));
}

export async function generateMetadata({ params }: { params: CountryParams }) {
  const { slug } = params;
  const formattedSlug = slug.replace(/-/g, ' ');

  const CountryInfo = await getSingleCountry(formattedSlug);

  if (CountryInfo && CountryInfo.length > 0) {
    const exactMatch = CountryInfo.find(
      (country) =>
        country.name.common.toLowerCase() === formattedSlug.toLowerCase() ||
        country.name.official.toLowerCase() === formattedSlug.toLowerCase(),
    );
    if (exactMatch) {
      return {
        title: exactMatch.name.official,
      };
    }

    const containingTerm = CountryInfo.find(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(formattedSlug.toLowerCase()) ||
        country.name.official
          .toLowerCase()
          .includes(formattedSlug.toLowerCase()),
    );

    if (containingTerm) {
      return {
        title: containingTerm.name.official,
      };
    }
  }
  return {
    title: 'Country Not Found',
  };
}

const page = async ({ params }: { params: CountryParams }) => {
  const { slug } = params;
  const formattedSlug = slug.replace(/-/g, ' ');
  const CountryData: SingleCountry[] | undefined = await getSingleCountry(
    formattedSlug,
  );
  let countryName;
  let countryCommonName;
  let countryRegion;
  let countrySubRegion;
  let population;
  let capitalName;
  let currencies;
  let languages;
  let borders;
  let tld;
  let flag;
  let altFlag;
  if (CountryData) {
    countryName = CountryData[0].name.official;
    countryCommonName = CountryData[0].name.common ?? '';
    countryRegion = CountryData[0].region;
    countrySubRegion = CountryData[0].subregion;
    population = CountryData[0].population.toLocaleString();
    capitalName = CountryData[0].capital[0];
    currencies = CountryData[0].currencies;
    languages = CountryData[0].languages;
    borders = CountryData[0].borders;
    tld = CountryData[0].tld[0];
    flag = CountryData[0].flags.svg;
    altFlag = CountryData[0].flags.alt;
  } else {
    countryName = '';
    countryRegion = '';
    countrySubRegion = '';
    population = '0';
    capitalName = '';
    currencies = '';
    languages = '';
    borders = '';
    tld = '';
    flag = '';
    altFlag = '';
  }
  return (
    <div className="mx-auto flex-center countryHeight relative">
      <Link href={`/`}>
        <Button className="absolute top-11 left-[4rem]">
          {' '}
          <ArrowLeftIcon className="mr-3" /> Back
        </Button>
      </Link>
      <CountryDetails
        countryName={countryName}
        countryCommonName={countryCommonName}
        countryRegion={countryRegion}
        countrySubRegion={countrySubRegion}
        population={population}
        capitalName={capitalName}
        currencies={currencies}
        languages={languages}
        borders={Array.isArray(borders) ? borders : []}
        tld={tld}
        flag={flag}
        altFlag={altFlag}
      />
    </div>
  );
};
export default page;
