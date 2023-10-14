import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BookController } from './../src/book/entities/book.controller';
import { BookService } from './../src/book/entities/book.service';


@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
