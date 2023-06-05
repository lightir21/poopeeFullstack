import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { FeedModule } from './feed/feed.module';
import { PooModule } from './poo/poo.module';
import { PeeService } from './pee/pee.service';
import { PeeModule } from './pee/pee.module';

@Module({
  imports: [
    FeedModule,
    PooModule,
    PeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [PeeService],
})
export class AppModule {}
