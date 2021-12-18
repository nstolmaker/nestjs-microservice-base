import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ActionHistoryService } from './action-history.service';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';

@Controller('action-history')
export class ActionHistoryController {
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actionHistoryService.remove(+id);
  }
}
