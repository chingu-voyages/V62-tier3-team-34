import { Component, input } from '@angular/core';

export interface FoundationCardItem {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-foundation-card',
  imports: [],
  templateUrl: './foundation-card.html',
  styleUrl: './foundation-card.css',
})
export class FoundationCard {
  foundation = input.required<FoundationCardItem>();
}
