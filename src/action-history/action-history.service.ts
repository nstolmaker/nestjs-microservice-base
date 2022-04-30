import { Logger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { ActionHistoryDatum } from './entities/action-history.entity';

@Injectable()
export class ActionHistoryService {
  private readonly logger = new Logger(ActionHistoryService.name);

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

  findByType(system: string): Promise<ActionHistoryDatum[]> {
    return this.actionHistoryRepository.find({
      where: {
        system: system,
      },
      order: {
        date: 'DESC',
      },
      take: 100,
    });
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

  async clear(): Promise<void> {
    const allItems = this.actionHistoryRepository.find();
    (await allItems).forEach((item) => {
      this.actionHistoryRepository.delete(item.id);
    });
  }
}
