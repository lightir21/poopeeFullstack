import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedService {
  getAllFeed() {
    return 'all';
  }

  createNewFeed(body: object) {
    return 'create';
  }

  updateFeed(body: object, id: number) {
    return { body, id };
  }
}
