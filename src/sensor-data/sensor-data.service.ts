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
    const sensorObj = {
      testing: true,
    };
    const sData = new SensorDatum();
    sData.date = Date.now().toLocaleString();
    sData.data = JSON.stringify(sensorObj);
    return this.sensorDataRepository.save(sData);
  }

  findAll() {
    return `This action returns all sensorData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensorDatum`;
  }

  update(id: number, updateSensorDatumDto: UpdateSensorDatumDto) {
    return `This action updates a #${id} sensorDatum`;
  }

  remove(id: number): Promise<string> {
    return Promise.resolve(`This action removes a #${id} sensorDatum`);
  }
}
