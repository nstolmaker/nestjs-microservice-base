import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { CreateSensorDatumDto } from './dto/create-sensor-datum.dto';

@Controller('sensor-data')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @Post()
  create(@Body() createSensorDatumDto: CreateSensorDatumDto) {
    return this.sensorDataService.create(createSensorDatumDto);
  }

  @Get('all')
  findAll() {
    return this.sensorDataService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.sensorDataService.findOne(+id);
  }

  @Get()
  getLatest() {
    return this.sensorDataService.getLatest();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorDataService.remove(+id);
  }
}
