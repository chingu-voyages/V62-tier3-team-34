import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Session } from '../session';

@Component({
  selector: 'app-upcoming-sessions',
  imports: [DatePipe],
  templateUrl: './upcoming-sessions.html',
})
export class UpcomingSessions {
  sessions = input.required<Session[]>();
}
