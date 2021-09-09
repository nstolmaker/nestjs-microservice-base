import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateSensorDatumDto } from '../dto/create-sensor-datum.dto';

@Entity()
export class SensorDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: CreateSensorDatumDto;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ default: true })
  isActive: boolean;
}
