import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorDataService } from './sensor-data.service';
import { SensorDataController } from './sensor-data.controller';
import { SensorDatum } from './entities/sensor-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SensorDatum])],
  providers: [SensorDataService],
  controllers: [SensorDataController],
  // exports: [TypeOrmModule],
})
export class SensorDataModule {}
