import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Book, BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: number): Book | undefined {
    return this.bookService.getBookById(id);
  }

  @Post()
  addBook(@Body() book: Book): void {
    this.bookService.addBook(book);
  }

  @Put(':id')
  updateBook(@Param('id') id: number, @Body() updatedBook: Book): void {
    this.bookService.updateBook(id, updatedBook);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: number): void {
    this.bookService.deleteBook(id);
  }
}