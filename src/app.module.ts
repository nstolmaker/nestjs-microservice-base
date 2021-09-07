import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SensorDatum } from './sensor-data/entities/sensor-datum.entity';
import { SensorDataModule } from './sensor-data/sensor-data.module';

// @Module({
//   imports: [SensorDataModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// @Module({
//   imports: [TypeOrmModule.forRoot()],
// })
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'dbuser',
      password: 'password3000',
      database: 'birdsnest_db',
      entities: [SensorDatum],
      synchronize: true,
      // autoLoadEntities: true,
    }),
    SensorDataModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
