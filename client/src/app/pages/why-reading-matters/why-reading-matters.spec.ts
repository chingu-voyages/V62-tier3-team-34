import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { WhyReadingMatters } from './why-reading-matters';

describe('WhyReadingMatters', () => {
  let fixture: ComponentFixture<WhyReadingMatters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyReadingMatters],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyReadingMatters);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page heading and six reading pillars', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Why Reading Matters');
    expect(compiled.querySelectorAll('.pillar-card')).toHaveSize(6);
  });

  it('should render the daily reading and membership sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#ritual-heading')?.textContent).toContain(
      'The 20-Minute Sanctuary',
    );
    expect(compiled.querySelector('#invitation-heading')?.textContent).toContain(
      'Step into the Philosophy Parlor',
    );
  });

  it('should link the calls to action to their app routes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a')).map((link) =>
      link.getAttribute('href'),
    );

    expect(links).toContain('/read-discuss');
    expect(links).toContain('/about');
    expect(links).toContain('/reading-habit');
  });
});
