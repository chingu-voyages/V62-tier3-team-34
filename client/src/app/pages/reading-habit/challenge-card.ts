import { Component, input } from '@angular/core';

export interface ChallengeCardItem {
  label: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-challenge-card',
  imports: [],
  templateUrl: './challenge-card.html',
  styleUrl: './challenge-card.css',
})
export class ChallengeCard {
  challenge = input.required<ChallengeCardItem>();
}
