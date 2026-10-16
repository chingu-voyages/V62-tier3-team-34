import { Component } from '@angular/core';
import { FeatureCardComponent } from './components/feature-card/feature-card';
import { FEATURES_DATA } from './components/feature-card/feature.data';
import { DiscussCardComponent } from './components/discuss-card/discuss-card';
import { DISCUSS_CARD } from './components/discuss-card/discuss-card.data';

@Component({
  selector: 'app-read-discuss',
  templateUrl: './read-discuss.html',
  imports: [
    FeatureCardComponent,
    DiscussCardComponent
  ]
})
export class ReadDiscuss { 
  features = FEATURES_DATA;
  discussCards = DISCUSS_CARD;
}
