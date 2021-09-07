import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SensorDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ default: true })
  isActive: boolean;
}
