import { Component, input, signal } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
})
export class BookCard {
  book = input.required<Book>();

  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly imageFailed = signal(false);
}
