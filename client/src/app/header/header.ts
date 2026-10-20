import { Component,signal,HostListener } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public router: Router) {}
  menuOpen= signal(false);
  scrolled = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }
  closeMenu(){
    this.menuOpen.set(false);
  }
  toggleMenu(){
    this.menuOpen.update(open=>!open)
  }

}
