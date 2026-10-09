import { Component, computed, input } from '@angular/core';
import { MemberThought } from '../member-thought';

@Component({
  selector: 'app-member-thought-card',
  imports: [],
  templateUrl: './member-thought-card.html',
})
export class MemberThoughtCard {
  thought = input.required<MemberThought>();

  protected readonly initials = computed(() =>
    this.thought()
      .name.split(' ')
      .map((part) => part[0])
      .join(''),
  );
}
