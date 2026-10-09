import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { BookService } from './book.service';
import { MOCK_BOOKS, MOCK_CURATED_BOOKS } from './mock-books';
import { MOCK_SESSIONS } from './mock-sessions';
import { MOCK_MEMBER_THOUGHTS } from './mock-member-thoughts';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the first mock book as the book of the month', async () => {
    expect(await firstValueFrom(service.getBookOfTheMonth())).toEqual(MOCK_BOOKS[0]);
  });

  it('should return the curated books', async () => {
    expect(await firstValueFrom(service.getCuratedBooks())).toEqual(MOCK_CURATED_BOOKS);
  });

  it('should return the upcoming sessions', async () => {
    expect(await firstValueFrom(service.getUpcomingSessions())).toEqual(MOCK_SESSIONS);
  });

  it('should return the latest member thoughts', async () => {
    expect(await firstValueFrom(service.getLatestMemberThoughts())).toEqual(MOCK_MEMBER_THOUGHTS);
  });
});
