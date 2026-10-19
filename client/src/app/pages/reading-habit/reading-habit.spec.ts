import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingHabit } from './reading-habit';

describe('ReadingHabit', () => {
  let component: ReadingHabit;
  let fixture: ComponentFixture<ReadingHabit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingHabit],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadingHabit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the six foundational habits', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.foundation-card')).toHaveLength(6);
  });

  it('should render the four seasonal challenge cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.challenge-card')).toHaveLength(4);
  });

  it('should render the call-to-action section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.cta-section')).toBeTruthy();
  });
});
