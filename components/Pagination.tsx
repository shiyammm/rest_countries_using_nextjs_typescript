import React from 'react';
import { Button } from './ui/button';
import { PaginationProps } from '@/types/countryTypes';

const Pagination: React.FC<PaginationProps> = ({
  filteredCountries,
  page,
  setPage,
}) => {
  const selectPage = (selectedPage: number) => {
    setPage(selectedPage);
  };

  // Calculate the number of pages based on the length of the filteredCountries array
  const pageCount = Math.floor(filteredCountries.length / 50);

  return (
    <div className="pagination flex justify-center w-full h-14 my-14">
      {filteredCountries.length > 0 && (
        <div className="space-x-5 flex">
          <Button
            className={`${page > 1 ? 'block' : 'opacity-0'}`}
            onClick={() => selectPage(page - 1)}
          >
            Previous
          </Button>
          {/* Render page buttons based on the pageCount */}
          {Array.from({ length: pageCount }).map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => selectPage(i + 1)}
              className={`${
                page === i + 1 ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            className={`${page < pageCount ? 'block' : 'opacity-0'}`}
            onClick={() => selectPage(page + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
