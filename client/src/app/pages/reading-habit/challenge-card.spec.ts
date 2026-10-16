import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCard, type ChallengeCardItem } from './challenge-card';

describe('ChallengeCard', () => {
  let component: ChallengeCard;
  let fixture: ComponentFixture<ChallengeCard>;

  const challenge: ChallengeCardItem = {
    label: '2 books / month',
    title: 'Monthly Challenge',
    description: 'A steady challenge for your reading rhythm.',
  };

  function render(input: ChallengeCardItem) {
    fixture.componentRef.setInput('challenge', input);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    render(challenge);
    expect(component).toBeTruthy();
  });

  it('should render the challenge label, title and description', () => {
    const compiled = render(challenge);

    expect(compiled.querySelector('.challenge-label')?.textContent).toContain('2 books / month');
    expect(compiled.querySelector('h4')?.textContent).toContain('Monthly Challenge');
    expect(compiled.textContent).toContain('A steady challenge for your reading rhythm.');
  });
});
