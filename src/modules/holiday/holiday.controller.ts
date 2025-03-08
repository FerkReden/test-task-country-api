import { Body, Controller, Param, Post } from '@nestjs/common';
import { HolidayRequestDto } from './dtos';
import { HolidayService } from './holiday.service';

@Controller('users')
export class UserController {
  constructor(private readonly holidayService: HolidayService) {}

  @Post(':userId/calendar/holidays')
  async addHolidaysToCalendar(
    @Param('userId') userId: string,
    @Body() data: HolidayRequestDto
  ) {
    return this.holidayService.addHoliday(userId, data);
  }
}