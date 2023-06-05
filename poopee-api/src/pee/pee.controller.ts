import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PeeService } from './pee.service';

@Controller('pee')
export class PeeController {
  constructor(private peeService: PeeService) {}

  @Get()
  getAllFeed() {
    return this.peeService.getAllPee();
  }

  @Post()
  createNewFeed(@Body() body: any) {
    return this.peeService.createNewPee(body);
  }

  @Patch('/:id')
  updateFeed(@Body() body: any, @Param('id') id: number) {
    return this.peeService.updatePee(body, id);
  }
}
