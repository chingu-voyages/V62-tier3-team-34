import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { MOCK_CURATED_BOOKS } from './mock-books';
import { MOCK_MEMBER_THOUGHTS } from './mock-member-thoughts';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the book of the month', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-book-of-the-month')).toBeTruthy();
  });

  it('should render one card per curated book', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-book-card')).toHaveSize(MOCK_CURATED_BOOKS.length);
  });

  it('should render one card per member thought', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-member-thought-card')).toHaveSize(
      MOCK_MEMBER_THOUGHTS.length,
    );
  });
});
