import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Feed } from './entity/feed.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed)
    private feedRepository: Repository<Feed>,
  ) {}
  getAllFeed(): Promise<Feed[]> {
    return this.feedRepository.find();
  }

  createNewFeed(body: object) {
    return this.feedRepository.save(body);
  }

  updateFeed(body: object, id: number) {
    return this.feedRepository.update(id, body);
  }
}
