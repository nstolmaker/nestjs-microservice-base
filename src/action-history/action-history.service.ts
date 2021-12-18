import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { ActionHistoryDatum } from './entities/action-history.entity';

@Injectable()
export class ActionHistoryService {
  constructor(
    @InjectRepository(ActionHistoryDatum)
    private actionHistoryRepository: Repository<ActionHistoryDatum>,
  ) {}

  create(createActionHistoryDto: CreateActionHistoryDto) {
    const action = createActionHistoryDto;
    action.date = new Date();
    return this.actionHistoryRepository.save(action);
  }

  findAll(): Promise<ActionHistoryDatum[]> {
    return this.actionHistoryRepository.find();
  }

  getRecent(): Promise<ActionHistoryDatum[]> {
    return this.actionHistoryRepository.find({
      order: {
        date: 'DESC',
      },
      take: 100,
    });
  }

  findOne(id: number) {
    return this.actionHistoryRepository.findByIds([id]);
  }

  async remove(id: number): Promise<void> {
    await this.actionHistoryRepository.delete(id);
  }
}
