import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionHistoryService } from './action-history.service';
import { ActionHistoryController } from './action-history.controller';
import { ActionHistoryDatum } from './entities/action-history.entity';

@Module({
  controllers: [ActionHistoryController],
  providers: [ActionHistoryService],
  imports: [TypeOrmModule.forFeature([ActionHistoryDatum])],
})
export class ActionHistoryModule {}
