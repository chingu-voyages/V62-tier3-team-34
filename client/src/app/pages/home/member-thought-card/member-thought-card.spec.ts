import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberThoughtCard } from './member-thought-card';
import { MemberThought } from '../member-thought';

describe('MemberThoughtCard', () => {
  let component: MemberThoughtCard;
  let fixture: ComponentFixture<MemberThoughtCard>;

  const thought: MemberThought = {
    name: 'Clara M.',
    role: 'Reviewer',
    quote: 'A thought for testing',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberThoughtCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberThoughtCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('thought', thought);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the name, role and quote', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Clara M.');
    expect(compiled.textContent).toContain('Reviewer');
    expect(compiled.querySelector('blockquote')?.textContent).toContain('A thought for testing');
  });

  it('should show initials from the name', () => {
    const avatar = (fixture.nativeElement as HTMLElement).querySelector('[aria-hidden="true"]');
    expect(avatar?.textContent?.trim()).toBe('CM');
  });
});
