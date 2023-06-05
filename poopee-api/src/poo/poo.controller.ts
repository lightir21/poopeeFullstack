import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { PooService } from './poo.service';
import { Request } from 'express';

@Controller('poo')
export class PooController {
  constructor(private pooService: PooService) {}

  @Get()
  getAllFeed() {
    return this.pooService.getAllPoo();
  }

  @Post()
  createNewFeed(@Body() body: any) {
    return this.pooService.createNewPoo(body);
  }

  @Patch('/:id')
  updateFeed(@Body() body: any, @Param('id') id: number) {
    return this.pooService.updatePoo(body, id);
  }
}
