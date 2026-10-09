import { Component, input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-of-the-month',
  imports: [],
  templateUrl: './book-of-the-month.html',
})
export class BookOfTheMonth {
  book = input.required<Book>();
}
