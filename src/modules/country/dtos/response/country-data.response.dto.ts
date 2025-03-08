import { BorderDto } from './border.response.dto';
import { CountryDto } from './country.response.dto';
import { PopulationDto } from './population.response.dto';

export class CountryDataDto extends CountryDto {

    borders: BorderDto[];

    population: PopulationDto[];
  
    flag: string;
  }