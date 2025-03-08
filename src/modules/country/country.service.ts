import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { BorderDto, CountryDataDto, CountryDto, PopulationDto } from './dtos';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountryService {
    constructor(private readonly httpService: HttpService) {}

    async getCountries(): Promise<CountryDto[]> {
        try {
            const observableCountries = this.httpService.get(`${process.env.API_DATE_NAGER}`);
            const countries = await firstValueFrom(observableCountries);
            return countries.data as CountryDto[];
        } catch (e) {
            throw new Error(`Error to get data ${e.message}`);
        }
    }

    async getCountryData(countryCode: string): Promise<any> {
        try {
            const observableCountryInfo = this.httpService.get(
              `${process.env.API_DATE_NAGER}/CountryInfo/${countryCode.toUpperCase()}`
            );
            const countryInfo = await firstValueFrom(observableCountryInfo);
            const countryName: string = countryInfo.data.commonName;
            const borders = countryInfo.data.borders as BorderDto[];
      
            const observablePopulation = this.httpService.post(
              `${process.env.API_COUNTRISNOW_SPACE}/population,
              { country: countryName.toLowerCase() }`
            );
            const populationData = await firstValueFrom(observablePopulation);
            const population = populationData.data.data
              .populationCounts as PopulationDto[];
      
            const observableFlag = this.httpService.post(
              `${process.env.API_COUNTRISNOW_SPACE}/flag/images,
              { country: countryName.toLowerCase() }`
            );
            const flagData = await firstValueFrom(observableFlag);
            const flag = flagData.data.data.flag;
      
            return {
              name: countryName,
              flag,
              borders,
              population,
            } as CountryDataDto;
          } catch (error) {
            throw new Error(`Failed to fetch data: ${error.message}`);
          }
    }
}
