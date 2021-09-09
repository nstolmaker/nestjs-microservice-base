import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSensorDatumDto } from './dto/create-sensor-datum.dto';
import { UpdateSensorDatumDto } from './dto/update-sensor-datum.dto';
import { SensorDatum } from './entities/sensor-datum.entity';

@Injectable()
export class SensorDataService {
  constructor(
    @InjectRepository(SensorDatum)
    private sensorDataRepository: Repository<SensorDatum>,
  ) {}

  create(createSensorDatumDto: CreateSensorDatumDto): Promise<SensorDatum> {
    const sData = new SensorDatum();
    sData.date = new Date();
    sData.data = createSensorDatumDto; //createSensorDatumDto
    return this.sensorDataRepository.save(sData);
  }

  findAll(): Promise<SensorDatum[]> {
    return this.sensorDataRepository.find();
  }

  findOne(id: number) {
    return this.sensorDataRepository.findByIds([id]);
  }

  async remove(id: number): Promise<void> {
    await this.sensorDataRepository.delete(id);
  }
}
