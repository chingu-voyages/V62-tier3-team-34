import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { MOCK_BOOKS } from './mock-books';
import { Session } from './session';
import { MOCK_SESSIONS } from './mock-sessions';

@Injectable({ providedIn: 'root' })
export class BookService {
  getBookOfTheMonth(): Observable<Book> {
    return of(MOCK_BOOKS[0]);
  }

  getUpcomingSessions(): Observable<Session[]> {
    return of(MOCK_SESSIONS);
  }
}
