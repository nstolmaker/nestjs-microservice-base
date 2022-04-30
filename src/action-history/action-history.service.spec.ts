import { Test, TestingModule } from '@nestjs/testing';
import { ActionHistoryService } from './action-history.service';

describe('ActionHistoryService', () => {
  let service: ActionHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionHistoryService],
    }).compile();

    service = module.get<ActionHistoryService>(ActionHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    const pumpHistory = service.findByType('pump');
    const pumpHistoryString = pumpHistory.toString();
    expect(pumpHistoryString).not.toContain('lights');
  });
});
