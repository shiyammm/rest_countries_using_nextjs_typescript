import React from 'react';
import SkeletonCardCountries from '../SkeletonCardCountries';

const CountriesSkeleton = () => {
  const skeletonArray = Array.from({ length: 50 });

  return (
    <div
      className="grid grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"
      style={{
        gap: 'calc(1.5rem + 1.5vw)',
      }}
    >
      {skeletonArray.map((_, index) => (
        <SkeletonCardCountries key={index} />
      ))}
    </div>
  );
};

export default CountriesSkeleton;
