import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-reading-matters',
  imports: [RouterLink],
  templateUrl: './why-reading-matters.html',
  styleUrl: './why-reading-matters.css',
})
export class WhyReadingMatters {
  protected readonly pillars = [
    {
      icon: 'Aa',
      title: 'Improves Vocabulary & Communication',
      description:
        'Encountering new words in context helps you express complex ideas with greater clarity and confidence.',
    },
    {
      icon: '◎',
      title: 'Increases Knowledge & Understanding',
      description:
        'Books open windows into new histories, disciplines, and ways of seeing the world around us.',
    },
    {
      icon: '◉',
      title: 'Strengthens Concentration & Memory',
      description:
        'Following a story gives your attention room to settle and your mind a reason to remember.',
    },
    {
      icon: '✳',
      title: 'Stimulates Creativity & Imagination',
      description:
        'A page can take you beyond the familiar and make space for fresh ideas and possibilities.',
    },
    {
      icon: '↗',
      title: 'Reduces Stress & Promotes Relaxation',
      description:
        'A few quiet pages can slow the pace of a busy day and offer a welcome moment of calm.',
    },
    {
      icon: '♡',
      title: 'Builds Empathy Through Perspectives',
      description:
        'Sharing a character’s point of view helps us meet unfamiliar experiences with curiosity and care.',
    },
  ];
}
