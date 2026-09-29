import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { MOCK_BOOKS } from './mock-books';

@Injectable({ providedIn: 'root' })
export class BookService {
  getBookOfTheMonth(): Observable<Book> {
    return of(MOCK_BOOKS[0]);
  }
}
