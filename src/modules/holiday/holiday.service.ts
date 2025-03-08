import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Holiday, User } from './entities';
import { Repository } from 'typeorm';
import { HolidayDto, HolidayRequestDto, UserDto } from './dtos';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HolidayService {
    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Holiday)
        private readonly holidayRepository: Repository<Holiday>,
    ) {}

    async addHoliday(userId: string, data: HolidayRequestDto) {
        try {
            const { countryCode, year, holidays } = data;
            const observableHolidays = this.httpService.get(`${process.env.API_DATE_NAGER}/PublicHolidays/${year}/${countryCode}`);
            const holidaysData = await firstValueFrom(observableHolidays);
            let allHolidays = holidaysData.data as HolidayDto[];
        
            if (holidays && holidays.length > 0) {
                allHolidays = allHolidays.filter((holiday) =>
                    holidays.includes(holiday.name)
                );
            }

            const user = await this.userRepository.findOne({
                where: {
                    id: userId,
                },
                relations: ['holidays'],
            });

            if (!user) {
                throw new Error('User is missing');
            }
    
            await this.holidayRepository.delete({ user: user });
    
            user.holidays = allHolidays;
            const savedUser: UserDto = await this.userRepository.save(user);
    
            return savedUser;
        } catch (e) {
            throw new Error(`Error to get data: ${e.message}`);
        }
    }
} 
