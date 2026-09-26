import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { WhyReadingMatters } from './pages/why-reading-matters/why-reading-matters';
import { ReadingHabit } from './pages/reading-habit/reading-habit';
import { ReadDiscuss } from './pages/read-discuss/read-discuss';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'why-reading-matters', component: WhyReadingMatters },
  { path: 'reading-habit', component: ReadingHabit },
  { path: 'read-discuss', component: ReadDiscuss },
  { path: 'about', component: About },
];
