import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: { class: 'flex min-h-dvh flex-col' },
})
export class App {
  protected readonly title = signal('client');
}
