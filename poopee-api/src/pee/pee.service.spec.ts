import { Test, TestingModule } from '@nestjs/testing';
import { PeeService } from './pee.service';

describe('PeeService', () => {
  let service: PeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeeService],
    }).compile();

    service = module.get<PeeService>(PeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
