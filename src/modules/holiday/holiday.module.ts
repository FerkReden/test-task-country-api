import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { HolidayController } from './holiday.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Holiday, User } from './entities';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([User, Holiday])],
  providers: [HolidayService],
  controllers: [HolidayController],
})
export class HolidayModule {}
