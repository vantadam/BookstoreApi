import { Injectable } from '@nestjs/common';

export interface Book {
  id: number;
  title: string;
  author: string;
}

@Injectable()
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
  ];

  getAllBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  updateBook(id: number, updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}