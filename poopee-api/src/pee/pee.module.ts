import { Module } from '@nestjs/common';
import { PeeController } from './pee.controller';
import { PeeService } from './pee.service';

@Module({
  controllers: [PeeController],
  providers: [PeeService],
})
export class PeeModule {}
