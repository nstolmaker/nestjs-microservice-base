import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActionHistoryDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  system: string;

  @Column()
  action: string;

  @Column()
  message: string;
}
