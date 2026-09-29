import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCard } from './book-card';
import { Book } from '../book';

describe('BookCard', () => {
  let component: BookCard;
  let fixture: ComponentFixture<BookCard>;

  const book: Book = {
    title: 'Test Book',
    author: 'Test Author',
    description: 'A book for testing',
    imageUrl: '/images/test.webp',
    rating: 3.2,
  };

  function render(input: Book) {
    fixture.componentRef.setInput('book', input);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(BookCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    render(book);
    expect(component).toBeTruthy();
  });

  it('should show the title and author', () => {
    const compiled = render(book);
    expect(compiled.querySelector('h3')?.textContent).toContain('Test Book');
    expect(compiled.textContent).toContain('by Test Author');
  });

  it('should label the rating for screen readers', () => {
    const compiled = render(book);
    expect(compiled.querySelector('[aria-label]')?.getAttribute('aria-label')).toBe(
      'Rated 3.2 out of 5',
    );
  });

  it('should fill stars to the nearest whole rating', () => {
    const compiled = render(book);
    expect(compiled.querySelectorAll('.text-gold')).toHaveSize(3);
  });

  it('should hide the rating when the book has none', () => {
    const compiled = render({ ...book, rating: undefined });
    expect(compiled.querySelector('[aria-label]')).toBeNull();
  });

  it('should show the title instead of the cover when the image fails to load', () => {
    const compiled = render(book);
    compiled.querySelector('img')?.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(compiled.querySelector('img')).toBeNull();
    expect(compiled.textContent).toContain('Test Book');
  });
});
