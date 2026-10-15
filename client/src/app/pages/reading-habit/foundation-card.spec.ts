import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationCard, type FoundationCardItem } from './foundation-card';

describe('FoundationCard', () => {
  let component: FoundationCard;
  let fixture: ComponentFixture<FoundationCard>;

  const foundation: FoundationCardItem = {
    number: '01',
    title: 'Set Realistic Goals',
    description: 'Build a realistic routine for daily reading.',
  };

  function render(input: FoundationCardItem) {
    fixture.componentRef.setInput('foundation', input);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundationCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FoundationCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    render(foundation);
    expect(component).toBeTruthy();
  });

  it('should render the foundation number, title and description', () => {
    const compiled = render(foundation);

    expect(compiled.querySelector('.foundation-number')?.textContent).toContain('01');
    expect(compiled.querySelector('h2')?.textContent).toContain('Set Realistic Goals');
    expect(compiled.textContent).toContain('Build a realistic routine for daily reading.');
  });
});
