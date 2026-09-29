import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfTheMonth } from './book-of-the-month';

describe('BookOfTheMonth', () => {
  let component: BookOfTheMonth;
  let fixture: ComponentFixture<BookOfTheMonth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookOfTheMonth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOfTheMonth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
