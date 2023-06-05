import { Module } from '@nestjs/common';
import { PooController } from './poo.controller';
import { PooService } from './poo.service';

@Module({
  controllers: [PooController],
  providers: [PooService]
})
export class PooModule {}
