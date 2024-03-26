import { SkeletonCard } from '@/components/countriesSkeletom';
import React from 'react';

const loading = () => {
  return (
    <div className="mx-auto flex-center countryHeight relative">
      <SkeletonCard />
    </div>
  );
};

export default loading;
