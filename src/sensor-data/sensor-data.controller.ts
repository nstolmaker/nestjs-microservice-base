import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { CreateSensorDatumDto } from './dto/create-sensor-datum.dto';

@Controller('sensor-data')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @Post()
  create(@Body() createSensorDatumDto: CreateSensorDatumDto) {
    return this.sensorDataService.create(createSensorDatumDto);
  }

  @Get()
  findAll() {
    return this.sensorDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorDataService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorDataService.remove(+id);
  }
}
