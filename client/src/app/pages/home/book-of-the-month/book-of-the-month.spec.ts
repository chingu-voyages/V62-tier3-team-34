import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfTheMonth } from './book-of-the-month';
import { Book } from '../book';

describe('BookOfTheMonth', () => {
  let component: BookOfTheMonth;
  let fixture: ComponentFixture<BookOfTheMonth>;

  const book: Book = {
    title: 'Test Book',
    author: 'Test Author',
    description: 'A book for testing',
    imageUrl: '/images/test.webp',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookOfTheMonth],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOfTheMonth);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('book', book);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the book details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Test Book');
    expect(compiled.textContent).toContain('by Test Author');
    expect(compiled.textContent).toContain('A book for testing');
  });

  it('should show the cover with descriptive alt text', () => {
    const img = (fixture.nativeElement as HTMLElement).querySelector('img');
    expect(img?.getAttribute('src')).toBe('/images/test.webp');
    expect(img?.getAttribute('alt')).toBe('Test Book cover');
  });
});
