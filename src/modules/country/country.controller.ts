import { Controller, Get, InternalServerErrorException, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    async getCountries() {
        return await this.countryService.getCountries()
    }

    @Get(':countryCode')
    async getCountryData(@Param('countryCode') countryCode: string) {
        return await this.countryService.getCountryData(countryCode)
    }
}
