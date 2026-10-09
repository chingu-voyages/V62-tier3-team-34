import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { MOCK_BOOKS, MOCK_CURATED_BOOKS } from './mock-books';
import { Session } from './session';
import { MOCK_SESSIONS } from './mock-sessions';
import { MemberThought } from './member-thought';
import { MOCK_MEMBER_THOUGHTS } from './mock-member-thoughts';

@Injectable({ providedIn: 'root' })
export class BookService {
  getBookOfTheMonth(): Observable<Book> {
    return of(MOCK_BOOKS[0]);
  }

  getCuratedBooks(): Observable<Book[]> {
    return of(MOCK_CURATED_BOOKS);
  }

  getUpcomingSessions(): Observable<Session[]> {
    return of(MOCK_SESSIONS);
  }

  getLatestMemberThoughts(): Observable<MemberThought[]> {
    return of(MOCK_MEMBER_THOUGHTS);
  }
}
