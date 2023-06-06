import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { FeedModule } from './feed/feed.module';
import { PooModule } from './poo/poo.module';
import { PeeService } from './pee/pee.service';
import { PeeModule } from './pee/pee.module';
import { Feed } from './feed/entity/feed.entity';

@Module({
  imports: [
    FeedModule,
    PooModule,
    PeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 43306,
      username: 'root',
      password: '2481992',
      database: 'feed_db',
      entities: [Feed],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [PeeService],
})
export class AppModule {}
