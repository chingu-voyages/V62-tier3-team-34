import { Component } from '@angular/core';

import { ChallengeCard } from './challenge-card';
import { FoundationCard } from './foundation-card';

@Component({
  selector: 'app-reading-habit',
  imports: [FoundationCard, ChallengeCard],
  templateUrl: './reading-habit.html',
  styleUrl: './reading-habit.css',
})
export class ReadingHabit {
  protected readonly foundations = [
    {
      number: '01',
      title: 'Set Realistic Goals',
      description:
        'Do not start with elite goals. Instead, aim for 10 to 15 minutes of reading a day and build a habit around consistency rather than intensity.',
    },
    {
      number: '02',
      title: 'Choose Time & Place',
      description:
        'Pick your book, your nook, and your window. A calm, familiar reading ritual removes friction and makes the habit easier to resume.',
    },
    {
      number: '03',
      title: 'Start Small & Build Up',
      description:
        'Begin with your current rhythm and add a little more each week. The magic is in compounding steady progress over time.',
    },
    {
      number: '04',
      title: 'Reduce Distractions',
      description:
        'Establish a sacred digital quarantine. Leave your phone in another room and create an environment that makes reading natural.',
    },
    {
      number: '05',
      title: 'Track Your Progress',
      description:
        'Keep a quiet reading journal or use a simple checklist. Documenting what you complete makes progress feel visible and rewarding.',
    },
    {
      number: '06',
      title: 'Stay Motivated via Community',
      description:
        'Share your reading journey with fellow members. Exchange favorite lines and debating chapters provides structure and shared momentum.',
    },
  ];

  protected readonly challenges = [
    {
      label: '2 books / month',
      title: 'Monthly Challenge',
      description:
        'Designed for steady, deliberate progress. Read one book each month and let reflection make each session more meaningful.',
    },
    {
      label: '1 new genre / quarter',
      title: 'Genre Explorer',
      description:
        'Step beyond your standard library. Dedicate one season to a new style, perspective, or intellectual tradition.',
    },
    {
      label: '1 book / quarter',
      title: 'Annual Goal',
      description:
        'Select a custom yearly target and create a reading plan that keeps your growth aligned through every season.',
    },
    {
      label: '1 personal quest',
      title: 'Personal Quest',
      description:
        'Focus deeply on a single classical or historical text. Curate a reading experience that rewards patience and reflection.',
    },
  ];
}
