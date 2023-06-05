import { Test, TestingModule } from '@nestjs/testing';
import { PeeController } from './pee.controller';

describe('PeeController', () => {
  let controller: PeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeeController],
    }).compile();

    controller = module.get<PeeController>(PeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
