import { SkeletonCardCountry } from '@/components/countriesSkeletom';
import React from 'react';

const loading = () => {
  return (
    <div className="mx-auto flex-center countryHeight relative">
      <SkeletonCardCountry />
    </div>
  );
};

export default loading;
