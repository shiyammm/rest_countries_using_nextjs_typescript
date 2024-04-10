import React from 'react';
import { Button } from './ui/button';
import { PaginationProps } from '@/types/countryTypes';

const Pagination: React.FC<PaginationProps> = ({
  filteredCountries,
  page,
  setPage,
}) => {
  const selectPage = (selectedPage: number) => {
    if (selectedPage >= 1 && selectedPage <= 5) {
      setPage(selectedPage);
    }
  };

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
          {[...Array(filteredCountries.length / 50)].map((_, i) => (
            <Button
              onClick={() => selectPage(i + 1)}
              className={` ${
                page == i + 1 ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            className={`${
              page < filteredCountries.length / 50 ? 'block' : 'opacity-0'
            }`}
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
