import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from './entity/feed.entity';

@Module({
  controllers: [FeedController],
  providers: [FeedService],
  imports: [TypeOrmModule.forFeature([Feed])],
})
export class FeedModule {}
