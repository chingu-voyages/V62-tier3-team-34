import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSessions } from './upcoming-sessions';
import { Session } from '../session';

describe('UpcomingSessions', () => {
  let component: UpcomingSessions;
  let fixture: ComponentFixture<UpcomingSessions>;

  const sessions: Session[] = [
    { title: 'First Session', startsAt: '2026-10-14T18:00:00Z', host: 'Host One' },
    { title: 'Second Session', startsAt: '2026-10-28T18:00:00Z', host: 'Host Two' },
  ];

  function render(input: Session[]) {
    fixture.componentRef.setInput('sessions', input);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingSessions],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingSessions);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    render(sessions);
    expect(component).toBeTruthy();
  });

  it('should show one row per session', () => {
    const compiled = render(sessions);
    expect(compiled.querySelectorAll('li')).toHaveSize(2);
    expect(compiled.textContent).toContain('First Session');
    expect(compiled.textContent).toContain('Hosted by Host Two');
  });

  it('should show a message when there are no sessions', () => {
    const compiled = render([]);
    expect(compiled.textContent).toContain('No sessions scheduled yet.');
  });
});
