import React from 'react';
import { Button } from './ui/button';
import { PaginationProps } from '@/types/countryTypes';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


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
        <div className="sm:gap-2 gap-5 flex">
          <Button
            className={`${page > 1 ? 'block' : 'hidden'}`}
            onClick={() => selectPage(page - 1)}
          >
            <IoIosArrowBack/>
          </Button>
          {/* Render page buttons based on the pageCount */}
          {Array.from({ length: pageCount }).map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => selectPage(i + 1)}
              className={`${
                page === i + 1 ? 'bg-white text-black' : 'bg-black text-white hover:text-black'
              }`}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            className={`${page < pageCount ? 'block' : 'hidden'}`}
            onClick={() => selectPage(page + 1)}
          >
            <IoIosArrowForward/>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
