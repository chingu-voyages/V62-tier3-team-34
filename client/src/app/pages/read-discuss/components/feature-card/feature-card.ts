import { Component, input } from '@angular/core';
import { FeatureCard } from '../../interface';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
})
export class FeatureCardComponent {
feature = input.required<FeatureCard>()

}