import { Injectable } from '@nestjs/common';

@Injectable()
export class PooService {
  getAllPoo() {
    return 'all';
  }

  createNewPoo(body: object) {
    return 'create';
  }

  updatePoo(body: object, id: number) {
    return { body, id };
  }
}
