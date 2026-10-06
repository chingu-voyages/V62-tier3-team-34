import { Component } from '@angular/core';
import { FeatureCardComponent } from './components/feature-card/feature-card';
import { FEATURES_DATA } from './components/feature-card/feature.data';

@Component({
  selector: 'app-read-discuss',
  templateUrl: './read-discuss.html',
  imports: [
    FeatureCardComponent
  ]
})
export class ReadDiscuss { 
  features = FEATURES_DATA;
}
