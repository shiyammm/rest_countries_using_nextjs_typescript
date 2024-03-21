type FlagFormat = 'png' | 'svg' | 'alt';

type Name = {
  official: string;
  common: string;
};

type Country = {
  name: Name;
  region: string;
  population: string;
  capital: string;
  flags: { [format in FlagFormat]: string };
};

export default Country;
