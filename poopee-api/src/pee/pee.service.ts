import { Injectable } from '@nestjs/common';

@Injectable()
export class PeeService {
  getAllPee() {
    return 'all';
  }

  createNewPee(body: object) {
    return 'create';
  }

  updatePee(body: object, id: number) {
    return { body, id };
  }
}
