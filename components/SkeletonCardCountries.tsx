import React from 'react';
import { Skeleton } from './ui/skeleton';

const SkeletonCardCountries = () => {
  return (
    <div className="grid w-full h-full">
      <Skeleton className="w-[250px] h-28" />
      <div className="space-y-2 h-1/2 mt-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default SkeletonCardCountries;
