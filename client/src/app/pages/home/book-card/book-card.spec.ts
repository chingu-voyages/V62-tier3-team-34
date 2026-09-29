import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCard } from './book-card';

describe('BookCard', () => {
  let component: BookCard;
  let fixture: ComponentFixture<BookCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('book', {
      title: 'Test Book',
      author: 'Test Author',
      description: 'A book for testing',
      imageUrl: '/images/test.webp',
      rating: 4.5,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
