import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FilterCountriesByRegionProps } from '@/types/countryTypes';

const regions = [
  'Asia',
  'Africa',
  'America',
  'Europe',
  'Oceania',
  'Antarctica',
];

const FilterRegion: React.FC<FilterCountriesByRegionProps> = ({
  selectedRegion,
  setSelectedRegion,
}) => {
  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'default'}>Filter by Region</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {regions.map((region) => (
          <DropdownMenuItem
            key={region}
            onClick={() => handleRegionSelect(region)}
          >
            {region}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterRegion;
