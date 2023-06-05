import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { FeedService } from './feed.service';
import { Request } from 'express';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Get()
  getAllFeed() {
    return this.feedService.getAllFeed();
  }

  @Post()
  createNewFeed(@Req() req: Request) {
    return this.feedService.createNewFeed(req.body);
  }

  @Patch('/:id')
  updateFeed(@Req() req: Request, @Param('id') id: number) {
    return this.feedService.updateFeed(req.body, id);
  }
}
