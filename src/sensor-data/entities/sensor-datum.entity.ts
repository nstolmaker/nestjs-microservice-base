import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SensorDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column({ type: 'timestamp' })
  date: string;

  @Column({ default: true })
  isActive: boolean;
  save: any;
}
