import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { ActionHistoryService } from './action-history.service';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';

@Controller('action-history')
export class ActionHistoryController {
  private readonly logger = new Logger(ActionHistoryController.name);

  constructor(private readonly actionHistoryService: ActionHistoryService) {}

  @Post()
  create(@Body() createActionHistoryDto: CreateActionHistoryDto) {
    return this.actionHistoryService.create(createActionHistoryDto);
  }

  @Get()
  getRecent() {
    return this.actionHistoryService.getRecent();
  }

  @Get('all')
  findAll() {
    return this.actionHistoryService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.actionHistoryService.findOne(+id);
  }

  @Get('type/:system')
  findByType(@Param('system') system: string) {
    return this.actionHistoryService.findByType(system);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string) {
    return this.actionHistoryService.remove(+id);
  }

  @Delete('all')
  removeAll() {
    this.logger.log('all delete triggered');
    try {
      return this.actionHistoryService.clear();
    } catch (error) {
      throw new Error(error);
    }
  }
}
