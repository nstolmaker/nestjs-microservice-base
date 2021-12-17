import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SensorDatum } from './sensor-data/entities/sensor-datum.entity';
import { SensorDataModule } from './sensor-data/sensor-data.module';
import { ConfigModule } from '@nestjs/config';
import { ActionHistoryModule } from './action-history/action-history.module';
import { ActionHistoryDatum } from './action-history/entities/action-history.entity';

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
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [SensorDatum, ActionHistoryDatum],
      synchronize: true,
      // autoLoadEntities: true,
    }),
    SensorDataModule,
    ActionHistoryModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
