import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookOfTheMonth } from './book-of-the-month/book-of-the-month';
import { UpcomingSessions } from './upcoming-sessions/upcoming-sessions';
import { BookService } from './book.service';

@Component({
  selector: 'app-home',
  imports: [BookOfTheMonth, UpcomingSessions],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly bookService = inject(BookService);
  protected readonly heroImage = '/images/home_hero.webp';
  protected readonly heroAlt =
    'A woman on a sofa reads a book on computer programming next to a pile of similar books and a laptop';
  protected readonly featuredBook = toSignal(this.bookService.getBookOfTheMonth());
  protected readonly upcomingSessions = toSignal(this.bookService.getUpcomingSessions(), {
    initialValue: [],
  });
}
